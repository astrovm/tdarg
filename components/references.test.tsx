import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { References } from "./references";

describe("References", () => {
  test("lists each reference with its details and link", () => {
    render(
      <References
        references={[
          {
            id: 1,
            title: "Guía de TDAH",
            authors: "Pérez",
            year: "2024",
            description: "Revisión clínica",
            url: "https://example.org/guia",
          },
          { id: 2, title: "Documento interno", url: "#" },
        ]}
      />,
    );

    expect(screen.getByText("2 documentos")).toBeDefined();
    expect(screen.getByText("Pérez.")).toBeDefined();
    expect(screen.getByText("(2024)")).toBeDefined();
    expect(screen.getByText("Revisión clínica")).toBeDefined();
    const links = screen.getAllByRole("link", { name: "Ver documento" });
    expect(links.map((link) => link.getAttribute("href"))).toEqual(["https://example.org/guia"]);
  });

  test("uses the singular for one reference", () => {
    render(<References references={[{ id: 1, title: "Guía", url: "#" }]} />);

    expect(screen.getByText("1 documento")).toBeDefined();
  });
});
