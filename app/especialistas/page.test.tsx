import { describe, expect, test } from "bun:test";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import specialists from "@/lib/specialists/data";

import SpecialistsPage from "./page";

function resultCount() {
  return document.querySelector("[aria-live=polite]")?.textContent;
}

async function choose(user: ReturnType<typeof userEvent.setup>, select: string, option: RegExp) {
  await user.click(screen.getByRole("combobox", { name: select }));
  await user.click(await screen.findByRole("option", { name: option }));
}

describe("SpecialistsPage", () => {
  test("shows the first page of specialists and loads more", async () => {
    const user = userEvent.setup();
    render(<SpecialistsPage />);

    expect(screen.getAllByRole("article")).toHaveLength(20);
    expect(resultCount()).toBe(`${specialists.length} especialistas`);

    await user.click(screen.getByRole("button", { name: /^Ver 20 más/ }));
    expect(screen.getAllByRole("article")).toHaveLength(40);
  });

  test("filters by province, including specialists in two provinces", async () => {
    const user = userEvent.setup();
    render(<SpecialistsPage />);

    await choose(user, "Provincia", /^Buenos Aires \(/);

    const inBuenosAires = specialists.filter((s) => s.provinces.includes("Buenos Aires"));
    expect(resultCount()).toBe(`${inBuenosAires.length} especialistas en Buenos Aires`);
    await user.type(screen.getByRole("searchbox"), "Christie");
    expect(screen.getByText("Lic. Ines Christie Newbery")).toBeDefined();
  });

  test("finds specialists without a known province", async () => {
    const user = userEvent.setup();
    render(<SpecialistsPage />);

    await choose(user, "Provincia", /^Ubicación a confirmar/);

    expect(resultCount()).toBe("1 especialista con ubicación a confirmar");
    const card = screen.getByRole("article");
    expect(within(card).getByText("Dra. Valeria Berlin")).toBeDefined();
    expect(within(card).getByRole("link", { name: /WhatsApp/ }).getAttribute("href")).toBe(
      "https://wa.me/5491126432761",
    );
    expect(within(card).getByRole("link", { name: "Instagram" }).getAttribute("href")).toBe(
      "https://instagram.com/psiquiatra.valeriaberlin",
    );
  });

  test("filters by specialty and clears filters when nothing matches", async () => {
    const user = userEvent.setup();
    render(<SpecialistsPage />);

    await choose(user, "Especialidad", /^Pediatra \(/);
    const pediatricians = specialists.filter((s) => s.specialty === "Pediatra");
    expect(screen.getAllByRole("article")).toHaveLength(pediatricians.length);

    await user.type(screen.getByRole("searchbox"), "zzzz");
    expect(screen.getByText("No encontramos especialistas")).toBeDefined();

    await user.click(screen.getByRole("button", { name: "Limpiar filtros" }));
    expect(screen.getAllByRole("article")).toHaveLength(20);
    expect((screen.getByRole("searchbox") as HTMLInputElement).value).toBe("");
  });

  test("shows contact details, coverage and social links on the cards", async () => {
    const user = userEvent.setup();
    render(<SpecialistsPage />);

    await user.type(screen.getByRole("searchbox"), "Norma Cristina");
    const card = screen.getByRole("article");

    expect(within(card).getByRole("link", { name: "+54 11 4452-8765" }).getAttribute("href")).toBe(
      "tel:+541144528765",
    );
    expect(within(card).getByRole("link", { name: "info@athentun.org" })).toBeDefined();
    expect(within(card).getByText("Mar-Vie 8:00-11:00")).toBeDefined();
    expect(within(card).getByRole("link", { name: "Facebook" }).getAttribute("href")).toBe(
      "https://facebook.com/Athentun",
    );
  });
});
