import { afterEach, beforeAll, describe, expect, spyOn, test } from "bun:test";

import { ingredientPage, latin1Response, productPage } from "@/test/alfabeta-pages";

import { getPrices } from "./server";

// What Alfa Beta serves, by path under /precio/
const PAGES: Record<string, string> = {
  "lista_drogas_detalle.jsp?id=148": ingredientPage(["rubifen-10.html", "concerta.html"]),
  "lista_drogas_detalle.jsp?id=1328": ingredientPage(["odranal.html"]),
  "rubifen-10.html": productPage("RUBIFEN 10", "Bagó", "metilfenidato", [
    { sku: "20562", name: "comp.x 30", price: "54569.80" },
  ]),
  "concerta.html": productPage("CONCERTA", "Janssen-Cilag", "metilfenidato", [
    { sku: "47989", name: "54 mg comp.x 30", price: "376864.83" },
  ]),
  "odranal.html": productPage("ODRANAL", "Adium", "bupropión", [
    { sku: "23483", name: "150mg comp.lib.prol.x 30", price: "93318.54" },
  ]),
};

const ALL_CODES = ["20562", "47989", "23483"];
// 6 ingredient lists and 3 product pages
const REQUESTS = 9;

function pathOf(url: string | URL | Request): string {
  const { pathname, search } = new URL(url instanceof Request ? url.url : url);
  return pathname.replace("/precio/", "") + search;
}

function respondLikeAlfabeta(url: string | URL | Request): Response {
  const page = PAGES[pathOf(url)];
  return page === undefined ? latin1Response(ingredientPage([])) : latin1Response(page);
}

// The module keeps the last good snapshot between calls, so the "down on first
// load" test runs first, before any test has stored one.

let fetchSpy: ReturnType<typeof spyOn<typeof globalThis, "fetch">>;

beforeAll(() => {
  spyOn(console, "warn").mockImplementation(() => {});
  spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  fetchSpy?.mockRestore();
});

describe("getPrices", () => {
  test("returns an empty stale snapshot when Alfa Beta is down on first load", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockRejectedValue(new Error("timeout"));

    const snapshot = await getPrices();

    expect(snapshot.data).toEqual([]);
    expect(snapshot.stale).toBe(true);
    expect(snapshot.error).toBe("No medications found");
  });

  test("returns every presentation of every ingredient's products", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) =>
      respondLikeAlfabeta(url)) as typeof fetch);

    const snapshot = await getPrices();

    expect(fetchSpy).toHaveBeenCalledTimes(REQUESTS);
    expect(snapshot.stale).toBe(false);
    expect(snapshot.error).toBeUndefined();
    expect(snapshot.data.map((m) => m.code).sort()).toEqual([...ALL_CODES].sort());
    expect(snapshot.data.find((m) => m.code === "20562")).toMatchObject({
      name: "metilfenidato",
      brand: "RUBIFEN 10",
      laboratory: "Bagó",
      price: 54569.8,
      strength: "10 mg",
    });
  });

  test("keeps partial results when some pages fail", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) =>
      pathOf(url).includes("1328") || pathOf(url) === "concerta.html"
        ? new Response("", { status: 500 })
        : respondLikeAlfabeta(url)) as typeof fetch);

    const snapshot = await getPrices();

    expect(snapshot.stale).toBe(false);
    expect(snapshot.data.map((m) => m.code)).toEqual(["20562"]);
  });

  test("serves the last good prices as stale when Alfa Beta goes down", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) =>
      respondLikeAlfabeta(url)) as typeof fetch);
    const good = await getPrices();

    fetchSpy.mockRejectedValue(new Error("timeout"));
    const down = await getPrices();

    expect(down.stale).toBe(true);
    expect(down.data).toEqual(good.data);
    expect(down.updatedAt).toBe(good.updatedAt);
  });

  test("shares one in-flight request between concurrent callers", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) =>
      respondLikeAlfabeta(url)) as typeof fetch);

    const [a, b] = await Promise.all([getPrices(), getPrices()]);

    expect(a).toBe(b);
    expect(fetchSpy).toHaveBeenCalledTimes(REQUESTS);
  });

  test("decodes pages with a missing or unknown charset as UTF-8", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) => {
      const page = PAGES[pathOf(url)] ?? ingredientPage([]);
      return pathOf(url) === "rubifen-10.html"
        ? new Response(page, { headers: { "content-type": "text/html;charset=bogus" } })
        : new Response(page);
    }) as typeof fetch);

    const snapshot = await getPrices();

    expect(snapshot.data.find((m) => m.code === "20562")?.laboratory).toBe("Bagó");
    expect(snapshot.data).toHaveLength(ALL_CODES.length);
  });

  test("fetches at most 4 pages at a time", async () => {
    let running = 0;
    let most = 0;
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) => {
      running++;
      most = Math.max(most, running);
      await new Promise((resolve) => setTimeout(resolve, 5));
      running--;
      return respondLikeAlfabeta(url);
    }) as typeof fetch);

    await getPrices();

    expect(most).toBe(4);
  });
});
