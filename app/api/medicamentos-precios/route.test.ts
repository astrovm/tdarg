import { afterEach, describe, expect, spyOn, test } from "bun:test";

import * as server from "@/lib/medicamentos/server";
import type { Medicamento, PreciosSnapshot } from "@/lib/medicamentos/types";

import { GET } from "./route";

const MEDICATION: Medicamento = {
  codigo: "1",
  nombre: "metilfenidato",
  marca: "CONCERTA 54 MG COMP.X 30",
  laboratorio: "JANSSEN",
  source: "farmacity",
  precio: 100000,
  presentacion: "Comprimidos x 30",
  concentracion: "54 mg",
  fechaActualizacion: "2026-09-26T00:00:00.000Z",
};

function mockPrices(snapshot: PreciosSnapshot) {
  return spyOn(server, "getPrecios").mockResolvedValue(snapshot);
}

let spy: ReturnType<typeof mockPrices> | undefined;

afterEach(() => {
  spy?.mockRestore();
});

describe("GET /api/medicamentos-precios", () => {
  test("returns fresh prices with a shared cache header", async () => {
    spy = mockPrices({
      data: [MEDICATION, { ...MEDICATION, codigo: "2", precio: 0 }],
      updatedAt: "2026-09-26T00:00:00.000Z",
      stale: false,
    });

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe(
      "public, s-maxage=900, stale-while-revalidate=3600"
    );
    expect(body).toMatchObject({
      timestamp: "2026-09-26T00:00:00.000Z",
      total: 2,
      stale: false,
      estadisticas: { total: 2, con_precio: 1 },
    });
  });

  test("does not cache stale prices", async () => {
    spy = mockPrices({
      data: [MEDICATION],
      updatedAt: "2026-09-26T00:00:00.000Z",
      stale: true,
      error: "timeout",
    });

    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(await response.json()).toMatchObject({ stale: true, error: "timeout" });
  });

  test("returns 503 when there are no prices", async () => {
    spy = mockPrices({
      data: [],
      updatedAt: "2026-09-26T00:00:00.000Z",
      stale: true,
      error: "No se encontraron medicamentos",
    });

    const response = await GET();

    expect(response.status).toBe(503);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(await response.json()).toMatchObject({ data: [], total: 0 });
  });
});
