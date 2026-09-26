import { afterEach, describe, expect, spyOn, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

import * as server from "@/lib/medications/server";
import { medication } from "@/test/fixtures";

import LegislationPage from "./legislacion/page";
import RootLayout, { metadata } from "./layout";
import HomePage from "./page";
import PricesPage from "./precios/page";

const SNAPSHOT = {
  data: [medication({ brand: "LUDOXA 30 mg", strength: "30 mg", price: 150000 })],
  updatedAt: "2026-09-26T13:05:00.000Z",
  stale: false,
};

let spy: ReturnType<typeof spyOn> | undefined;

afterEach(() => {
  spy?.mockRestore();
  spy = undefined;
});

describe("RootLayout", () => {
  test("renders the page inside the theme provider with the footer", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <p>Contenido</p>
      </RootLayout>,
    );

    expect(html).toContain('<html lang="es">');
    expect(html).toContain('class="font-inter min-h-screen"');
    expect(html).toContain("<p>Contenido</p>");
    expect(html).toContain("tdarg@4st.li");
    expect(metadata.metadataBase?.toString()).toBe("https://tdarg.com.ar/");
  });
});

describe("HomePage", () => {
  test("links to every section and shows live prices", async () => {
    spy = spyOn(server, "getPrices").mockResolvedValue(SNAPSHOT);

    render(await HomePage());

    expect(screen.getByRole("heading", { level: 1, name: "TDAH en Argentina" })).toBeDefined();
    for (const section of ["Especialistas", "Legislación", "Diagnóstico", "Comorbilidades"]) {
      expect(screen.getAllByRole("link", { name: new RegExp(section) }).length).toBeGreaterThan(0);
    }
    expect(screen.getByText("$150k")).toBeDefined();
  });
});

describe("PricesPage", () => {
  test("renders the server prices", async () => {
    spy = spyOn(server, "getPrices").mockResolvedValue(SNAPSHOT);

    render(await PricesPage());

    expect(screen.getByText("Ludoxa 30 mg")).toBeDefined();
  });
});

describe("LegislationPage", () => {
  test("shows each topic with its key points and sources", () => {
    render(<LegislationPage />);

    expect(screen.getByText("Por qué sigue siendo difícil conseguir estimulantes")).toBeDefined();
    expect(screen.getByText("Por qué la cobertura no llega al 70%")).toBeDefined();
    expect(screen.getAllByText("Puntos clave")).toHaveLength(2);
    expect(screen.getByText("Circuito original:")).toBeDefined();
    expect(screen.getByText(/^\d+ documentos$/)).toBeDefined();
  });
});

describe("route layouts", () => {
  test.each(["comorbilidades", "diagnostico", "especialistas", "tratamientos"])(
    "%s passes its page through and sets the canonical URL",
    async (route) => {
      const { default: Layout, metadata } = await import(`./${route}/layout`);

      render(
        <Layout>
          <p>Contenido</p>
        </Layout>,
      );

      expect(screen.getByText("Contenido")).toBeDefined();
      expect(metadata.alternates.canonical).toBe(`/${route}`);
    },
  );
});
