import { afterEach, describe, expect, spyOn, test } from "bun:test";
import { act, fireEvent, render, screen, within } from "@testing-library/react";

import type { Medicamento, PreciosSnapshot } from "@/lib/medicamentos/types";
import { chooseOption } from "@/test/select";

import { PreciosClient } from "./precios-client";

function medication(overrides: Partial<Medicamento>): Medicamento {
  return {
    codigo: overrides.marca ?? "1",
    nombre: "metilfenidato",
    marca: "CONCERTA 18 MG COMP.X 30",
    laboratorio: "JANSSEN",
    source: "farmacity",
    precio: 50_000,
    presentacion: "Comprimidos x 30",
    concentracion: "18 mg",
    fechaActualizacion: "2026-09-26T00:00:00.000Z",
    ...overrides,
  };
}

const MEDICATIONS = [
  medication({ marca: "CONCERTA 54 MG COMP.X 30", concentracion: "54 mg", precio: 90_000 }),
  medication({ marca: "CONCERTA 18 MG COMP.X 30", concentracion: "18 mg", precio: 60_000 }),
  medication({
    marca: "RITALINA 10 MG COMP.X 30",
    laboratorio: "NOVARTIS",
    concentracion: "10 mg",
    precio: 60_000,
  }),
  medication({
    nombre: "lisdexanfetamina",
    marca: "LUDOXA 30 MG CAPS X 30",
    laboratorio: "ELEA",
    concentracion: "30 mg",
    presentacion: "Cápsulas",
    precio: 120_000,
  }),
  medication({
    nombre: "atomoxetina",
    marca: "STRATTERA 40 MG CAPS X 28",
    laboratorio: "LILLY",
    concentracion: "40 mg",
    precio: 70_000,
  }),
  medication({
    nombre: "modafinilo",
    marca: "VIGIA 200 MG COMP X 30",
    laboratorio: "ROEMMERS",
    concentracion: "200 mg",
    precio: 40_000,
  }),
  medication({
    nombre: "bupropion",
    marca: "WELLBUTRIN",
    laboratorio: "GSK",
    concentracion: "150 mg/dosis",
    presentacion: "Sin detalle",
    precio: 30_000,
  }),
];

const SNAPSHOT: PreciosSnapshot = {
  data: MEDICATIONS,
  updatedAt: "2026-09-26T15:30:00.000Z",
  stale: false,
};

function rowNames(section: string) {
  const heading = screen.getByRole("heading", { level: 3, name: section });
  const table = heading.nextElementSibling as HTMLElement;
  return within(table)
    .getAllByRole("listitem")
    .map((row) => row.querySelector(".font-semibold")?.textContent);
}

let fetchSpy: ReturnType<typeof spyOn<typeof globalThis, "fetch">> | undefined;

afterEach(() => {
  fetchSpy?.mockRestore();
  fetchSpy = undefined;
});

describe("PreciosClient with server-rendered prices", () => {
  test("groups medications by approval and shows their prices", () => {
    render(<PreciosClient initial={SNAPSHOT} />);

    expect(screen.getByRole("heading", { level: 2, name: "Estimulantes" })).toBeDefined();
    expect(screen.getByRole("heading", { level: 2, name: "No estimulantes" })).toBeDefined();
    expect(screen.getByRole("heading", { level: 2, name: "Uso off-label" })).toBeDefined();
    expect(
      screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent),
    ).toEqual(["lisdexanfetamina", "metilfenidato", "atomoxetina", "modafinilo", "bupropion"]);
    expect(screen.getByText("Farmacity, 26/9/2026, 12:30")).toBeDefined();

    // Cheapest first, ties broken by name
    expect(rowNames("metilfenidato")).toEqual([
      "Concerta 18 mg",
      "Ritalina 10 mg",
      "Concerta 54 mg",
    ]);

    const concerta = screen.getByText("Concerta 18 mg").closest("li") as HTMLElement;
    expect(concerta.textContent).toContain("40%:");
    expect(concerta.textContent).toContain("36.000");

    const modafinilo = screen.getByText("Vigia 200 mg").closest("li") as HTMLElement;
    expect(modafinilo.textContent).not.toContain("40%");
    const bupropion = screen.getByText("Wellbutrin 150 mg/dosis").closest("li") as HTMLElement;
    expect(bupropion.textContent).toContain("Sin detalle");
  });

  test("filters by text across name, brand and laboratory", () => {
    render(<PreciosClient initial={SNAPSHOT} />);
    const search = screen.getByRole("searchbox", { name: /Buscar medicamento/ });

    fireEvent.change(search, { target: { value: "  novartis " } });
    expect(rowNames("metilfenidato")).toEqual(["Ritalina 10 mg"]);
    expect(screen.queryByRole("heading", { level: 2, name: "No estimulantes" })).toBeNull();

    fireEvent.change(search, { target: { value: "ludoxa" } });
    expect(rowNames("lisdexanfetamina")).toEqual(["Ludoxa 30 mg"]);

    fireEvent.change(search, { target: { value: "strattera" } });
    expect(rowNames("atomoxetina")).toEqual(["Strattera 40 mg"]);

    fireEvent.change(search, { target: { value: "nada que ver" } });
    expect(
      screen.getByText("No se encontraron medicamentos que coincidan con lo que buscaste."),
    ).toBeDefined();
  });

  test("filters by ingredient and dose, and sorts by price per mg or name", async () => {
    render(<PreciosClient initial={SNAPSHOT} />);

    await chooseOption("Ordenar por", "Nombre");
    expect(rowNames("metilfenidato")).toEqual([
      "Concerta 18 mg",
      "Concerta 54 mg",
      "Ritalina 10 mg",
    ]);

    await chooseOption("Ordenar por", "Menor precio por mg");
    expect(rowNames("metilfenidato")).toEqual([
      "Concerta 54 mg",
      "Concerta 18 mg",
      "Ritalina 10 mg",
    ]);
    // A dose that cannot be converted to mg still gets listed
    expect(rowNames("bupropion")).toEqual(["Wellbutrin 150 mg/dosis"]);

    await chooseOption("Medicamento", "metilfenidato");
    expect(screen.queryByRole("heading", { level: 3, name: "lisdexanfetamina" })).toBeNull();

    await chooseOption("Dosis", "54 mg");
    expect(rowNames("metilfenidato")).toEqual(["Concerta 54 mg"]);

    // Switching medication clears the dose
    await chooseOption("Medicamento", "atomoxetina");
    expect(rowNames("atomoxetina")).toEqual(["Strattera 40 mg"]);
    expect(screen.getByRole("combobox", { name: "Dosis" }).textContent).toBe("Todas las dosis");

    await chooseOption("Medicamento", "Todos los medicamentos");
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(5);
  });

  test("warns when showing the last known prices", () => {
    render(<PreciosClient initial={{ ...SNAPSHOT, stale: true }} />);
    expect(screen.getByText(/No pudimos actualizar los precios con Farmacity/)).toBeDefined();
  });
});

describe("PreciosClient without server-rendered prices", () => {
  const EMPTY: PreciosSnapshot = { data: [], updatedAt: "", stale: true, error: "caído" };

  function mockFetch(response: Promise<Response>) {
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation((() => response) as unknown as typeof fetch);
  }

  test("loads prices from the API in the browser", async () => {
    mockFetch(
      Promise.resolve(
        Response.json({
          data: MEDICATIONS.slice(0, 1),
          timestamp: "2026-09-26T15:30:00.000Z",
          stale: true,
        }),
      ),
    );
    render(<PreciosClient initial={EMPTY} />);
    expect(screen.getByText("Cargando precios...")).toBeDefined();

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(fetchSpy?.mock.calls[0]?.[0]).toBe("/api/medicamentos-precios");
    expect(rowNames("metilfenidato")).toEqual(["Concerta 54 mg"]);
    expect(screen.getByText(/No pudimos actualizar los precios/)).toBeDefined();
    expect(screen.getByText("Farmacity, 26/9/2026, 12:30")).toBeDefined();
  });

  test("uses the current time when the API sends no timestamp", async () => {
    mockFetch(Promise.resolve(Response.json({ data: MEDICATIONS.slice(0, 1) })));
    render(<PreciosClient initial={EMPTY} />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(screen.queryByText(/No pudimos actualizar/)).toBeNull();
    expect(screen.getByText(/^Farmacity, /)).toBeDefined();
  });

  test("keeps the error when the API has no prices either", async () => {
    mockFetch(Promise.resolve(Response.json({ data: [], error: "caído" })));
    render(<PreciosClient initial={EMPTY} />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(screen.getByText(/No pudimos conseguir los precios de Farmacity/)).toBeDefined();
  });

  test("keeps the error when the request fails", async () => {
    mockFetch(Promise.reject(new Error("offline")));
    render(<PreciosClient initial={EMPTY} />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(screen.getByText(/No pudimos conseguir los precios de Farmacity/)).toBeDefined();
  });

  test("cancels the request when the page is left", async () => {
    let signal: AbortSignal | undefined;
    let respond: (response: Response) => void = () => {};
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation(((
      _input: string,
      init?: RequestInit,
    ) => {
      signal = init?.signal ?? undefined;
      return new Promise<Response>((resolve) => {
        respond = resolve;
      });
    }) as typeof fetch);

    const { unmount } = render(<PreciosClient initial={EMPTY} />);
    unmount();
    expect(signal?.aborted).toBe(true);
    respond(Response.json({ data: [] }));
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
});
