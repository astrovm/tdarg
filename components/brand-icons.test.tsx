import { describe, expect, test } from "bun:test";
import { render } from "@testing-library/react";

import { Facebook, Instagram, Linkedin } from "./brand-icons";

describe("brand icons", () => {
  test.each([
    ["Instagram", Instagram],
    ["Facebook", Facebook],
    ["Linkedin", Linkedin],
  ])("%s renders an svg that passes props through", (_, Icon) => {
    const { container } = render(<Icon className="h-4 w-4" aria-hidden="true" />);
    const svg = container.querySelector("svg")!;

    expect(svg.getAttribute("class")).toContain("h-4 w-4");
    expect(svg.getAttribute("aria-hidden")).toBe("true");
  });
});
