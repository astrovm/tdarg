import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { PageHero } from "./page-hero";

describe("PageHero", () => {
  test("renders the title, description and children", () => {
    const { container } = render(
      <PageHero title="Precios" description="Compará precios" overlayClassName="bg-muted">
        <button type="button">Buscar</button>
      </PageHero>,
    );

    expect(screen.getByRole("heading", { level: 1, name: "Precios" })).toBeDefined();
    expect(screen.getByText("Compará precios").className).toContain("mb-5");
    expect(screen.getByRole("button", { name: "Buscar" })).toBeDefined();
    expect(container.querySelector(".bg-muted")).not.toBeNull();
  });

  test("renders only the title when nothing else is given", () => {
    const { container } = render(<PageHero title="Precios" />);

    expect(container.querySelectorAll("p")).toHaveLength(0);
    expect(container.querySelector(".absolute")).toBeNull();
  });
});
