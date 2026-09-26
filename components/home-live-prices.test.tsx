import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { medication } from "@/test/fixtures";

import { HomeLivePrices } from "./home-live-prices";

describe("HomeLivePrices", () => {
  test("shows the cheapest price per dose in thousands", () => {
    render(
      <HomeLivePrices
        medications={[
          medication({ brand: "LUDOXA 30 mg", strength: "30 mg", price: 190776 }),
          medication({ code: "2", brand: "LUDOXA 30 mg", strength: "30 mg", price: 150400 }),
          medication({ code: "3", brand: "LUDOXA 50 mg", strength: "50 mg", price: 0 }),
          medication({ code: "4", name: "metilfenidato", brand: "CONCERTA 54 MG", strength: "54  MG", price: 99500 }),
        ]}
      />,
    );

    expect(screen.getByText("$150k")).toBeDefined();
    expect(screen.getByText("$100k")).toBeDefined();
    expect(screen.queryByText("$191k")).toBeNull();
    expect(screen.getByRole("link").getAttribute("href")).toBe("/precios");
  });

  test("renders nothing without matching prices", () => {
    const { container } = render(
      <HomeLivePrices medications={[medication({ brand: "STRATTERA 40 mg", strength: "40 mg" })]} />,
    );

    expect(container.innerHTML).toBe("");
  });
});
