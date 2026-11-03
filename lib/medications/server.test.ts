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
let warnSpy: ReturnType<typeof spyOn<typeof console, "warn">>;

beforeAll(() => {
  warnSpy = spyOn(console, "warn").mockImplementation(() => {});
  spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  fetchSpy?.mockRestore();
  warnSpy.mockClear();
});

function warnings(): string[] {
  return warnSpy.mock.calls.map((args) => args.map(String).join(" "));
}

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
    expect(warnings()).toEqual([]);
  });

  test("asks Alfa Beta for fresh HTML, with a timeout and a named client", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) =>
      respondLikeAlfabeta(url)) as typeof fetch);

    await getPrices();

    const [url, init] = fetchSpy.mock.calls[0];
    expect(String(url)).toStartWith("https://www.alfabeta.net/precio/lista_drogas_detalle.jsp?id=");
    expect(init).toMatchObject({
      headers: { Accept: "text/html", "User-Agent": expect.stringContaining("Tdarg") },
      cache: "no-store",
    });
    expect(init?.signal).toBeInstanceOf(AbortSignal);
  });

  test("keeps partial results when some pages fail", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) =>
      pathOf(url).includes("1328") || pathOf(url) === "concerta.html"
        ? new Response("", { status: 500 })
        : respondLikeAlfabeta(url)) as typeof fetch);

    const snapshot = await getPrices();

    expect(snapshot.stale).toBe(false);
    expect(snapshot.data.map((m) => m.code)).toEqual(["20562"]);
    expect(warnings().sort()).toEqual([
      "Alfa Beta page failed: Error: Alfa Beta returned 500 for concerta.html",
      "Alfa Beta page failed: Error: Alfa Beta returned 500 for lista_drogas_detalle.jsp?id=1328",
    ]);
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
    // Byte bodies, because Bun adds charset=utf-8 to string bodies by itself
    const contentTypes: Record<string, string | undefined> = {
      "rubifen-10.html": "text/html;charset=bogus",
      "concerta.html": "text/html",
      "odranal.html": undefined,
    };
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) => {
      const bytes = new TextEncoder().encode(PAGES[pathOf(url)] ?? ingredientPage([]));
      const type = contentTypes[pathOf(url)] ?? "text/html;charset=utf-8";
      return pathOf(url) in contentTypes && !contentTypes[pathOf(url)]
        ? new Response(bytes)
        : new Response(bytes, { headers: { "content-type": type } });
    }) as typeof fetch);

    const snapshot = await getPrices();

    expect(snapshot.data.find((m) => m.code === "20562")?.laboratory).toBe("Bagó");
    expect(snapshot.data.find((m) => m.code === "47989")?.laboratory).toBe("Janssen-Cilag");
    expect(snapshot.data.find((m) => m.code === "23483")?.laboratory).toBe("Adium");
    expect(warnings()).toEqual([]);
  });

  test("reads a charset written with spaces or in another case", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string | URL) => {
      const response = respondLikeAlfabeta(url);
      return new Response(await response.arrayBuffer(), {
        headers: { "content-type": "text/html; CHARSET= ISO-8859-1 ; x=1" },
      });
    }) as typeof fetch);

    const snapshot = await getPrices();

    expect(snapshot.data.find((m) => m.code === "20562")?.laboratory).toBe("Bagó");
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
