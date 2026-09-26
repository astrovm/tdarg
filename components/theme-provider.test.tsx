import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { ThemeProvider } from "./theme-provider";

describe("ThemeProvider", () => {
  test("renders its children", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="system">
        <p>Contenido</p>
      </ThemeProvider>,
    );

    expect(screen.getByText("Contenido")).toBeDefined();
  });
});
