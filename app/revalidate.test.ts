import { describe, expect, test } from "bun:test";

import { PRICES_REVALIDATE_SECONDS } from "@/lib/medications/server";

import * as home from "./page";
import * as prices from "./precios/page";

// Next needs `revalidate` as a literal, so it can't import the constant
describe("pages with prices", () => {
  test("revalidate as often as the price cache", () => {
    expect(home.revalidate).toBe(PRICES_REVALIDATE_SECONDS);
    expect(prices.revalidate).toBe(PRICES_REVALIDATE_SECONDS);
  });
});
