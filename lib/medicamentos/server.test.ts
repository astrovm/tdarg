import { afterEach, beforeAll, describe, expect, mock, spyOn, test } from "bun:test";

import type { FarmacityMed } from "./farmacity";

// Sin Next no hay Data Cache: cada llamada consulta Farmacity directamente
mock.module("next/cache", () => ({ unstable_cache: <T>(fn: T) => fn }));

const RESULTADOS: Record<string, FarmacityMed[]> = {
  metilfenidato: [
    {
      barCode: "1",
      formula: { description: "metilfenidato" },
      description: "CONCERTA 54 MG COMP.X 30",
      publicPrice: "100000",
    },
  ],
  bupropion: [
    {
      barCode: "2",
      formula: { description: "naltrexona+bupropion" },
      description: "NALTREVA comp.x 120",
      publicPrice: "200000",
    },
  ],
};

function responderFarmacity(url: string): Response {
  const termino = new URL(url).searchParams.get("filter") ?? "";
  return Response.json({ data: RESULTADOS[termino] ?? [] });
}

// Cada test importa una instancia nueva del módulo, sin el snapshot de otro test
let instancia = 0;
async function importarServer() {
  return (await import(`./server?test=${instancia++}`)) as typeof import("./server");
}

let fetchSpy: ReturnType<typeof spyOn<typeof globalThis, "fetch">>;

beforeAll(() => {
  spyOn(console, "warn").mockImplementation(() => {});
  spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  fetchSpy?.mockRestore();
});

describe("getPrecios", () => {
  test("returns ADHD medications from every search term", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      responderFarmacity(url)) as typeof fetch);
    const { getPrecios } = await importarServer();

    const snapshot = await getPrecios();

    expect(fetchSpy).toHaveBeenCalledTimes(6);
    expect(snapshot.stale).toBe(false);
    expect(snapshot.error).toBeUndefined();
    expect(snapshot.data.map((m) => m.codigo)).toEqual(["1"]);
  });

  test("keeps partial results when some searches fail", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      url.includes("metilfenidato")
        ? responderFarmacity(url)
        : new Response("", { status: 500 })) as typeof fetch);
    const { getPrecios } = await importarServer();

    const snapshot = await getPrecios();

    expect(snapshot.stale).toBe(false);
    expect(snapshot.data.map((m) => m.codigo)).toEqual(["1"]);
  });

  test("returns an empty stale snapshot when Farmacity is down on first load", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockRejectedValue(new Error("timeout"));
    const { getPrecios } = await importarServer();

    const snapshot = await getPrecios();

    expect(snapshot.data).toEqual([]);
    expect(snapshot.stale).toBe(true);
    expect(snapshot.error).toBe("No se encontraron medicamentos");
  });

  test("serves the last good prices as stale when Farmacity goes down", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      responderFarmacity(url)) as typeof fetch);
    const { getPrecios } = await importarServer();
    const bueno = await getPrecios();

    fetchSpy.mockRejectedValue(new Error("timeout"));
    const caido = await getPrecios();

    expect(caido.stale).toBe(true);
    expect(caido.data).toEqual(bueno.data);
    expect(caido.updatedAt).toBe(bueno.updatedAt);
  });

  test("shares one in-flight request between concurrent callers", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((async (url: string) =>
      responderFarmacity(url)) as typeof fetch);
    const { getPrecios } = await importarServer();

    const [a, b] = await Promise.all([getPrecios(), getPrecios()]);

    expect(a).toBe(b);
    expect(fetchSpy).toHaveBeenCalledTimes(6);
  });
});
