import { afterEach, beforeAll, describe, expect, spyOn, test } from "bun:test";

import type { FarmacityMed } from "./farmacity";
import { getPrices } from "./server";

const SEARCH_RESULTS: Record<string, FarmacityMed[]> = {
  "metilfenidato": [
    {
      barCode: "1",
      formula: { description: "metilfenidato" },
      description: "CONCERTA 54 MG COMP.X 30",
      publicPrice: "100000",
    },
  ],
  "bupropion": [
    {
      barCode: "2",
      formula: { description: "naltrexona+bupropion" },
      description: "NALTREVA comp.x 120",
      publicPrice: "200000",
    },
  ],
};

function respondLikeFarmacity(url: string): Response {
  const term = new URL(url).searchParams.get("filter") ?? "";
  return Response.json({ data: SEARCH_RESULTS[term] ?? [] });
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
  test("returns an empty stale snapshot when Farmacity is down on first load", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockRejectedValue(new Error("timeout"));

    const snapshot = await getPrices();

    expect(snapshot.data).toEqual([]);
    expect(snapshot.stale).toBe(true);
    expect(snapshot.error).toBe("No medications found");
  });

  test("returns ADHD medications from every search term", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      respondLikeFarmacity(url)) as typeof fetch);

    const snapshot = await getPrices();

    expect(fetchSpy).toHaveBeenCalledTimes(6);
    expect(snapshot.stale).toBe(false);
    expect(snapshot.error).toBeUndefined();
    expect(snapshot.data.map((m) => m.code)).toEqual(["1"]);
  });

  test("keeps partial results when some searches fail", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      url.includes("metilfenidato")
        ? respondLikeFarmacity(url)
        : new Response("", { status: 500 })) as typeof fetch);

    const snapshot = await getPrices();

    expect(snapshot.stale).toBe(false);
    expect(snapshot.data.map((m) => m.code)).toEqual(["1"]);
  });

  test("serves the last good prices as stale when Farmacity goes down", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      respondLikeFarmacity(url)) as typeof fetch);
    const good = await getPrices();

    fetchSpy.mockRejectedValue(new Error("timeout"));
    const down = await getPrices();

    expect(down.stale).toBe(true);
    expect(down.data).toEqual(good.data);
    expect(down.updatedAt).toBe(good.updatedAt);
  });

  test("shares one in-flight request between concurrent callers", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      respondLikeFarmacity(url)) as typeof fetch);

    const [a, b] = await Promise.all([getPrices(), getPrices()]);

    expect(a).toBe(b);
    expect(fetchSpy).toHaveBeenCalledTimes(6);
  });
});
