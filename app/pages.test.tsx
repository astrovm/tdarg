import { afterEach, describe, expect, mock, spyOn, test } from "bun:test";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

import type { Medicamento, PreciosSnapshot } from "@/lib/medicamentos/types";
import specialists from "@/lib/specialists/data";
import { chooseOption } from "@/test/select";

// next/font only works inside the Next.js compiler, and outside Next there is
// no Data Cache. Pages load after these mocks, like lib/medicamentos/server.test.
mock.module("next/font/google", () => ({ Inter: () => ({ className: "font-inter" }) }));
mock.module("next/cache", () => ({ unstable_cache: <T,>(fn: T) => fn }));

const server = await import("@/lib/medicamentos/server");
const { default: ComorbilidadesLayout, metadata: comorbilidadesMetadata } = await import(
  "./comorbilidades/layout"
);
const { default: ComorbilidadesPage } = await import("./comorbilidades/page");
const { default: DiagnosticoLayout, metadata: diagnosticoMetadata } = await import(
  "./diagnostico/layout"
);
const { default: DiagnosticoPage } = await import("./diagnostico/page");
const { default: EspecialistasLayout, metadata: especialistasMetadata } = await import(
  "./especialistas/layout"
);
const { default: EspecialistasPage } = await import("./especialistas/page");
const { default: LegislacionPage, metadata: legislacionMetadata } = await import(
  "./legislacion/page"
);
const { default: HomePage } = await import("./page");
const { default: PreciosPage, metadata: preciosMetadata } = await import("./precios/page");
const { default: TratamientosLayout, metadata: tratamientosMetadata } = await import(
  "./tratamientos/layout"
);
const { default: TratamientosPage } = await import("./tratamientos/page");
const { default: RootLayout, metadata: rootMetadata } = await import("./layout");

const LUDOXA: Medicamento = {
  codigo: "1",
  nombre: "lisdexanfetamina",
  marca: "LUDOXA 30 MG CAPS X 30",
  laboratorio: "ELEA",
  source: "farmacity",
  precio: 101_200,
  presentacion: "Cápsulas x 30",
  concentracion: "30 mg",
  fechaActualizacion: "2026-09-26T00:00:00.000Z",
};

let pricesSpy: ReturnType<typeof spyOn<typeof server, "getPrecios">> | undefined;

function mockPrices(snapshot: PreciosSnapshot) {
  pricesSpy = spyOn(server, "getPrecios").mockResolvedValue(snapshot);
}

afterEach(() => {
  pricesSpy?.mockRestore();
  pricesSpy = undefined;
});

describe("RootLayout", () => {
  test("wraps pages with the theme provider and the footer", async () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <p>Contenido</p>
      </RootLayout>,
    );
    expect(html).toContain('<html lang="es">');
    expect(html).toContain('class="font-inter min-h-screen"');
    expect(html).toContain("<p>Contenido</p>");
    expect(html).toContain("tdarg@4st.li");
    expect(rootMetadata.metadataBase?.toString()).toBe("https://tdarg.com.ar/");
  });
});

describe("home page", () => {
  test("links every section and shows live prices", async () => {
    mockPrices({ data: [LUDOXA], updatedAt: "2026-09-26T00:00:00.000Z", stale: false });
    render(await HomePage());

    expect(screen.getByRole("heading", { level: 1, name: "TDAH en Argentina" })).toBeDefined();
    const sections = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);
    expect(sections).toEqual([
      "Precios",
      "Especialistas",
      "Legislación",
      "Diagnóstico",
      "Tratamientos",
      "Comorbilidades",
    ]);
    expect(screen.getByText("$101k")).toBeDefined();
  });
});

describe("prices page", () => {
  test("renders the server prices", async () => {
    mockPrices({ data: [LUDOXA], updatedAt: "2026-09-26T00:00:00.000Z", stale: false });
    render(await PreciosPage());
    expect(screen.getByRole("heading", { level: 1, name: "Precios de medicamentos" })).toBeDefined();
    expect(screen.getByText("Ludoxa 30 mg")).toBeDefined();
    expect(preciosMetadata.alternates?.canonical).toBe("/precios");
  });
});

describe("guide pages", () => {
  const guides = [
    {
      name: "diagnóstico",
      Page: DiagnosticoPage,
      Layout: DiagnosticoLayout,
      metadata: diagnosticoMetadata,
      canonical: "/diagnostico",
      steps: 4,
    },
    {
      name: "tratamientos",
      Page: TratamientosPage,
      Layout: TratamientosLayout,
      metadata: tratamientosMetadata,
      canonical: "/tratamientos",
      steps: 4,
    },
    {
      name: "comorbilidades",
      Page: ComorbilidadesPage,
      Layout: ComorbilidadesLayout,
      metadata: comorbilidadesMetadata,
      canonical: "/comorbilidades",
      steps: 5,
    },
  ];

  for (const { name, Page, Layout, metadata, canonical, steps } of guides) {
    test(`${name} walks through every step to the final actions`, async () => {
      render(
        <Layout>
          <Page />
        </Layout>,
      );
      await act(() => Promise.resolve());
      expect(metadata.alternates?.canonical).toBe(canonical);

      const stepButtons = within(
        screen.getByRole("navigation", { name: "Pasos de la guía" }),
      ).getAllByRole("button");
      expect(stepButtons).toHaveLength(steps);

      for (let step = 1; step < steps; step++) {
        expect(stepButtons[step - 1].getAttribute("aria-current")).toBe("step");
        fireEvent.click(screen.getByRole("button", { name: /Siguiente/ }));
      }
      expect(stepButtons[steps - 1].getAttribute("aria-current")).toBe("step");
      expect(window.location.search).toBe(`?paso=${steps}`);
      expect(screen.queryByRole("button", { name: /Siguiente/ })).toBeNull();
      expect(screen.getByText("Fuentes")).toBeDefined();
    });
  }
});

describe("legislation page", () => {
  test("explains prescriptions and coverage with their sources", () => {
    render(<LegislacionPage />);
    expect(legislacionMetadata.alternates?.canonical).toBe("/legislacion");
    expect(
      screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent),
    ).toEqual([
      "Por qué sigue siendo difícil conseguir estimulantes",
      "Por qué la cobertura no llega al 70%",
    ]);
    expect(screen.getByText("Circuito original:")).toBeDefined();
    expect(screen.getByText("9 documentos")).toBeDefined();
  });
});

describe("specialists page", () => {
  function summary() {
    return document.querySelector("[aria-live=polite]")?.textContent;
  }

  function resultCount() {
    return Number(document.querySelector("[aria-live=polite] span")?.textContent);
  }

  test("pages through every specialist", () => {
    render(
      <EspecialistasLayout>
        <EspecialistasPage />
      </EspecialistasLayout>,
    );
    expect(especialistasMetadata.alternates?.canonical).toBe("/especialistas");
    expect(resultCount()).toBe(specialists.length);
    expect(screen.getAllByRole("article")).toHaveLength(20);

    let more = screen.queryByRole("button", { name: /más \(/ });
    while (more) {
      fireEvent.click(more);
      more = screen.queryByRole("button", { name: /más \(/ });
    }
    expect(screen.getAllByRole("article")).toHaveLength(specialists.length);
    expect(screen.getAllByRole("link", { name: "WhatsApp" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Instagram" }).length).toBeGreaterThan(0);
    expect(screen.getAllByText("Solo niños").length).toBeGreaterThan(0);
  });

  test("filters by text, province and specialty, and clears the filters", async () => {
    render(<EspecialistasPage />);
    const search = screen.getByRole("searchbox", { name: /Buscar por nombre/ });

    fireEvent.change(search, { target: { value: "rovere" } });
    expect(resultCount()).toBe(1);
    expect(screen.getByRole("heading", { level: 3, name: "Dr. Osvaldo Rovere" })).toBeDefined();
    expect(summary()).toBe("1 especialista");

    fireEvent.change(search, { target: { value: "" } });
    await chooseOption("Provincia", /^CABA \(/);
    const inCaba = specialists.filter((specialist) =>
      specialist.provincia.split("/").map((part) => part.trim()).includes("CABA"),
    ).length;
    expect(resultCount()).toBe(inCaba);
    expect(summary()).toBe(`${inCaba} especialistas en CABA`);

    await chooseOption("Especialidad", /^Psiquiatra \(/);
    expect(resultCount()).toBe(
      specialists.filter(
        (specialist) =>
          specialist.especialidad === "Psiquiatra" &&
          specialist.provincia.split("/").map((part) => part.trim()).includes("CABA"),
      ).length,
    );

    fireEvent.change(search, { target: { value: "zzzz" } });
    expect(screen.getByRole("heading", { name: "No encontramos especialistas" })).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Limpiar filtros" }));
    expect(resultCount()).toBe(specialists.length);
    expect((search as HTMLInputElement).value).toBe("");
  });
});
