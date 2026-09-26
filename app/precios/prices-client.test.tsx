import { afterEach, describe, expect, spyOn, test } from "bun:test";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { PriceSnapshot } from "@/lib/medications/types";
import { medication } from "@/test/fixtures";

import { PricesClient } from "./prices-client";

const MEDICATIONS = [
  medication({ code: "1", brand: "LUDOXA 30 mg x 30 c#ps.duras", strength: "30 mg", price: 190000 }),
  medication({ code: "2", brand: "LUDOXA 50 mg x 30 c#ps.duras", strength: "50 mg", price: 210000 }),
  medication({
    code: "3",
    name: "metilfenidato",
    brand: "CONCERTA 54 MG COMP.X 30",
    laboratory: "JANSSEN",
    strength: "54 mg",
    price: 100000,
  }),
  medication({
    code: "4",
    name: "metilfenidato",
    brand: "RITALINA 10 MG COMP.X 30",
    laboratory: "NOVARTIS",
    strength: "10 mg",
    price: 30000,
  }),
  medication({ code: "5", name: "atomoxetina", brand: "RECIT 40 MG CAPS.X 28", strength: "40 mg", price: 80000 }),
  medication({ code: "6", name: "modafinilo", brand: "MODIALEX 100 MG COMP.X 30", strength: "100 mg", price: 60000 }),
];

const SNAPSHOT: PriceSnapshot = {
  data: MEDICATIONS,
  updatedAt: "2026-09-26T13:05:00.000Z",
  stale: false,
};

function brandsIn(heading: string) {
  const section = screen.getByRole("heading", { level: 3, name: heading }).parentElement!;
  return within(section)
    .getAllByRole("listitem")
    .map((item) => item.querySelector(".font-semibold")!.textContent);
}

async function choose(user: ReturnType<typeof userEvent.setup>, select: string, option: string) {
  await user.click(screen.getByRole("combobox", { name: select }));
  await user.click(await screen.findByRole("option", { name: option }));
}

let fetchSpy: ReturnType<typeof spyOn<typeof globalThis, "fetch">> | undefined;

afterEach(() => {
  fetchSpy?.mockRestore();
  fetchSpy = undefined;
});

describe("PricesClient", () => {
  test("groups medications by approval and sorts by price", () => {
    render(<PricesClient initial={SNAPSHOT} />);

    expect(screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent)).toEqual([
      "Estimulantes",
      "No estimulantes",
      "Uso off-label",
    ]);
    expect(brandsIn("metilfenidato")).toEqual(["Ritalina 10 mg", "Concerta 54 mg"]);
    expect(screen.getByText("Farmacity, 26/9/2026, 10:05")).toBeDefined();
  });

  test("shows the 40% coverage price only for approved medications", () => {
    render(<PricesClient initial={SNAPSHOT} />);

    const ritalina = screen.getByText("Ritalina 10 mg").closest("li")!;
    expect(within(ritalina).getAllByText(/^\$\s18\.000$/).length).toBeGreaterThan(0);
    const modialex = screen.getByText("Modialex 100 mg").closest("li")!;
    expect(within(modialex).queryByText(/40%/)).toBeNull();
  });

  test("searches by name, brand or laboratory", async () => {
    const user = userEvent.setup();
    render(<PricesClient initial={SNAPSHOT} />);

    await user.type(screen.getByRole("searchbox"), "novartis");

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByText("Ritalina 10 mg")).toBeDefined();
  });

  test("filters by ingredient and dose", async () => {
    const user = userEvent.setup();
    render(<PricesClient initial={SNAPSHOT} />);

    await choose(user, "Medicamento", "lisdexanfetamina");
    expect(brandsIn("lisdexanfetamina")).toEqual(["Ludoxa 30 mg", "Ludoxa 50 mg"]);
    expect(screen.queryByText("Concerta 54 mg")).toBeNull();

    await choose(user, "Dosis", "50 mg");
    expect(brandsIn("lisdexanfetamina")).toEqual(["Ludoxa 50 mg"]);

    // A dose that the new ingredient does not have falls back to all doses
    await choose(user, "Medicamento", "metilfenidato");
    expect(brandsIn("metilfenidato")).toEqual(["Ritalina 10 mg", "Concerta 54 mg"]);
  });

  test("sorts by price per mg and by name", async () => {
    const user = userEvent.setup();
    render(<PricesClient initial={SNAPSHOT} />);

    await choose(user, "Ordenar por", "Menor precio por mg");
    expect(brandsIn("metilfenidato")).toEqual(["Concerta 54 mg", "Ritalina 10 mg"]);

    await choose(user, "Ordenar por", "Nombre");
    expect(brandsIn("lisdexanfetamina")).toEqual(["Ludoxa 30 mg", "Ludoxa 50 mg"]);
    expect(brandsIn("metilfenidato")).toEqual(["Concerta 54 mg", "Ritalina 10 mg"]);
  });

  test("says when nothing matches the search", async () => {
    const user = userEvent.setup();
    render(<PricesClient initial={SNAPSHOT} />);

    await user.type(screen.getByRole("searchbox"), "zzzz");

    expect(screen.getByText(/No se encontraron medicamentos/)).toBeDefined();
  });

  test("warns when the prices are stale", () => {
    render(<PricesClient initial={{ ...SNAPSHOT, stale: true }} />);

    expect(screen.getByRole("alert").textContent).toContain("No pudimos actualizar los precios");
  });

  test("loads prices in the browser when the server had none", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockResolvedValue(
      Response.json({ data: MEDICATIONS, timestamp: SNAPSHOT.updatedAt, stale: false }),
    );
    render(<PricesClient initial={{ data: [], updatedAt: SNAPSHOT.updatedAt, stale: true }} />);

    expect(screen.getByText("Cargando precios...")).toBeDefined();
    expect(await screen.findByText("Concerta 54 mg")).toBeDefined();
  });

  test("shows an error when no prices are available", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockRejectedValue(new Error("offline"));
    render(<PricesClient initial={{ data: [], updatedAt: SNAPSHOT.updatedAt, stale: true }} />);

    expect((await screen.findByRole("alert")).textContent).toContain(
      "No pudimos conseguir los precios",
    );
  });
});
