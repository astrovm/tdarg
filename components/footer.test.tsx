import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Footer } from "./footer";

describe("Footer", () => {
  test("shows the current year and contact links", () => {
    render(<Footer />);

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Tdarg`))).toBeDefined();
    expect(screen.getByRole("link", { name: "tdarg@4st.li" }).getAttribute("href")).toBe(
      "mailto:tdarg@4st.li",
    );
    expect(screen.getByRole("link", { name: "GitHub" }).getAttribute("href")).toBe(
      "https://github.com/astrovm/tdarg",
    );
  });
});
