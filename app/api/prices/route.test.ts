import { afterEach, describe, expect, spyOn, test } from "bun:test";

import * as server from "@/lib/medications/server";
import type { Medication, PriceSnapshot } from "@/lib/medications/types";

import { GET } from "./route";

const MEDICATION: Medication = {
  code: "1",
  name: "metilfenidato",
  brand: "CONCERTA 54 MG COMP.X 30",
  laboratory: "JANSSEN",
  source: "farmacity",
  price: 100000,
  presentation: "Comprimidos x 30",
  strength: "54 mg",
  updatedAt: "2026-09-26T00:00:00.000Z",
};

function mockPrices(snapshot: PriceSnapshot) {
  return spyOn(server, "getPrices").mockResolvedValue(snapshot);
}

let spy: ReturnType<typeof mockPrices> | undefined;

afterEach(() => {
  spy?.mockRestore();
});

describe("GET /api/prices", () => {
  test("returns fresh prices with a shared cache header", async () => {
    spy = mockPrices({
      data: [MEDICATION, { ...MEDICATION, code: "2", price: 0 }],
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
      stats: { total: 2, withPrice: 1 },
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
      error: "No medications found",
    });

    const response = await GET();

    expect(response.status).toBe(503);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(await response.json()).toMatchObject({ data: [], total: 0 });
  });
});
