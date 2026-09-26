import { afterEach, describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ComorbiditiesPage from "./comorbilidades/page";
import DiagnosisPage from "./diagnostico/page";
import TreatmentsPage from "./tratamientos/page";

afterEach(() => {
  window.history.replaceState(null, "", "/");
});

describe.each([
  ["DiagnosisPage", DiagnosisPage, "Cómo se diagnostica el TDAH"],
  ["TreatmentsPage", TreatmentsPage, "Tratamientos para TDAH"],
  ["ComorbiditiesPage", ComorbiditiesPage, "TDAH y comorbilidades"],
])("%s", (_, Page, title) => {
  test("walks through every step to the final actions", async () => {
    const user = userEvent.setup();
    render(<Page />);

    expect(screen.getByRole("heading", { level: 1, name: title })).toBeDefined();
    const steps = screen.getAllByRole("button").filter((b) => b.closest("nav ol"));
    for (let i = 1; i < steps.length; i++) {
      await user.click(screen.getByRole("button", { name: /Siguiente/ }));
      expect(steps[i].getAttribute("aria-current")).toBe("step");
    }

    expect(screen.queryByRole("button", { name: /Siguiente/ })).toBeNull();
    expect(screen.getAllByRole("link").some((link) => link.getAttribute("href")?.startsWith("/"))).toBe(true);
    expect(screen.getByText(/\d+ documentos?/)).toBeDefined();
  });
});
