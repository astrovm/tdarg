import { beforeAll, describe, expect, mock, spyOn, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as nextThemes from "next-themes";

import { ThemeToggle } from "./theme-toggle";

const setTheme = mock();

beforeAll(() => {
  spyOn(nextThemes, "useTheme").mockReturnValue({ setTheme, themes: [] });
});

describe("ThemeToggle", () => {
  test.each([
    ["Claro", "light"],
    ["Oscuro", "dark"],
    ["Sistema", "system"],
  ])("sets the theme when choosing %s", async (label, theme) => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Cambiar tema" }));
    await user.click(await screen.findByRole("menuitem", { name: label }));

    expect(setTheme).toHaveBeenLastCalledWith(theme);
  });
});
