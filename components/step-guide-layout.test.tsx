import { afterEach, describe, expect, spyOn, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Brain } from "lucide-react";

import { StepGuideLayout } from "./step-guide-layout";

const STEPS = [1, 2, 3].map((id) => ({
  id,
  title: `Paso ${id}`,
  subtitle: `Detalle ${id}`,
  icon: Brain,
}));

function renderGuide(references?: Array<{ id: number; title: string; url: string }>) {
  return render(
    <StepGuideLayout
      title="Guía"
      description="Descripción de la guía"
      steps={STEPS}
      accent="bg-muted"
      finalActions={[
        { href: "/especialistas", label: "Buscar especialistas" },
        { href: "/tratamientos", label: "Ver tratamientos" },
      ]}
      references={references}
    >
      {(currentStep) => <p>Contenido del paso {currentStep}</p>}
    </StepGuideLayout>,
  );
}

afterEach(() => {
  window.history.replaceState(null, "", "/");
});

describe("StepGuideLayout", () => {
  test("moves between steps with the buttons and the step list", async () => {
    const user = userEvent.setup();
    renderGuide();

    expect(screen.getByText("Contenido del paso 1")).toBeDefined();
    expect((screen.getByRole("button", { name: /Anterior/ }) as HTMLButtonElement).disabled).toBe(true);

    await user.click(screen.getByRole("button", { name: /Siguiente/ }));
    expect(screen.getByRole("heading", { level: 2, name: "Paso 2" })).toBeDefined();

    await user.click(screen.getByRole("button", { name: /Anterior/ }));
    expect(screen.getByText("Contenido del paso 1")).toBeDefined();

    await user.click(screen.getByRole("button", { name: /Paso 3/ }));
    expect(screen.getByRole("button", { name: /Paso 3/ }).getAttribute("aria-current")).toBe("step");
  });

  test("shows the final actions on the last step", async () => {
    const user = userEvent.setup();
    renderGuide();

    await user.click(screen.getByRole("button", { name: /Paso 3/ }));

    expect(screen.queryByRole("button", { name: /Siguiente/ })).toBeNull();
    expect(screen.getByRole("link", { name: "Buscar especialistas" }).getAttribute("href")).toBe(
      "/especialistas",
    );
    expect(screen.getByRole("link", { name: "Ver tratamientos" }).getAttribute("href")).toBe(
      "/tratamientos",
    );
  });

  test("scrolls back to the step when its top is out of view", async () => {
    const user = userEvent.setup();
    renderGuide();
    const card = screen.getByRole("article");
    spyOn(card, "getBoundingClientRect").mockReturnValue({ top: -200 } as DOMRect);
    const scroll = spyOn(card, "scrollIntoView").mockImplementation(() => {});

    await user.click(screen.getByRole("button", { name: /Siguiente/ }));

    expect(scroll).toHaveBeenCalledTimes(1);
  });

  test("does not scroll when the step is already visible", async () => {
    const user = userEvent.setup();
    renderGuide();
    const card = screen.getByRole("article");
    const scroll = spyOn(card, "scrollIntoView").mockImplementation(() => {});

    await user.click(screen.getByRole("button", { name: /Siguiente/ }));

    expect(scroll).not.toHaveBeenCalled();
  });

  test("lists references when given", () => {
    renderGuide([{ id: 1, title: "Fuente", url: "https://example.org" }]);

    expect(screen.getByText("Fuente")).toBeDefined();
  });
});
