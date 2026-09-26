import { beforeAll, describe, expect, spyOn, test } from "bun:test";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as navigation from "next/navigation";

import { Header } from "./header";

beforeAll(() => {
  spyOn(navigation, "usePathname").mockReturnValue("/precios");
});

describe("Header", () => {
  test("marks the current page in the navigation", () => {
    render(<Header />);

    const current = screen.getByRole("link", { name: "Precios" });
    expect(current.getAttribute("aria-current")).toBe("page");
    expect(screen.getByRole("link", { name: "Especialistas" }).getAttribute("aria-current")).toBeNull();
  });

  test("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    const menu = document.getElementById("mobile-menu")!;
    expect(within(menu).getAllByRole("link")).toHaveLength(6);

    await user.click(screen.getByRole("button", { name: "Cerrar menú" }));
    expect(document.getElementById("mobile-menu")).toBeNull();
  });

  test("closes the mobile menu after choosing a page", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    await user.click(within(document.getElementById("mobile-menu")!).getByText("Legislación"));

    expect(document.getElementById("mobile-menu")).toBeNull();
  });
});
