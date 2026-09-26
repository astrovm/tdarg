import { describe, expect, test } from "bun:test";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Brain, Stethoscope } from "lucide-react";

import { Facebook, Instagram, Linkedin } from "./brand-icons";
import { Footer } from "./footer";
import { Header } from "./header";
import { HomeLivePrices } from "./home-live-prices";
import { PageHero } from "./page-hero";
import { References } from "./references";
import { StepGuideLayout } from "./step-guide-layout";
import { ThemeProvider } from "./theme-provider";
import { ThemeToggle } from "./theme-toggle";
import type { Medicamento } from "@/lib/medicamentos/types";

function medication(overrides: Partial<Medicamento>): Medicamento {
  return {
    codigo: "1",
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

describe("brand icons", () => {
  test("render decorative SVGs that accept props", () => {
    const { container } = render(
      <>
        <Instagram className="ig" />
        <Facebook className="fb" />
        <Linkedin className="in" />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons).toHaveLength(3);
    expect([...icons].map((icon) => icon.getAttribute("class"))).toEqual(["ig", "fb", "in"]);
    for (const icon of icons) {
      expect(icon.getAttribute("aria-hidden")).toBe("true");
      expect(icon.children.length).toBeGreaterThan(0);
    }
  });
});

describe("Footer", () => {
  test("shows the current year and contact links", () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Tdarg`))).toBeDefined();
    expect(screen.getByRole("link", { name: "tdarg@4st.li" }).getAttribute("href")).toBe(
      "mailto:tdarg@4st.li",
    );
    expect(screen.getByRole("link", { name: "GitHub" }).getAttribute("target")).toBe("_blank");
  });
});

describe("PageHero", () => {
  test("renders title, description, overlay and children", () => {
    const { container } = render(
      <PageHero
        title="Precios"
        description="Compará precios"
        overlayClassName="bg-overlay"
        containerClassName="custom-container"
        titleClassName="custom-title"
        descriptionClassName="custom-description"
      >
        <button type="button">Filtrar</button>
      </PageHero>,
    );
    expect(screen.getByRole("heading", { level: 1, name: "Precios" }).className).toContain(
      "custom-title",
    );
    const description = screen.getByText("Compará precios");
    expect(description.className).toContain("mb-5");
    expect(description.className).toContain("custom-description");
    expect(container.querySelector(".bg-overlay")).not.toBeNull();
    expect(container.querySelector(".custom-container")).not.toBeNull();
    expect(screen.getByRole("button", { name: "Filtrar" })).toBeDefined();
  });

  test("renders only the title when nothing else is given", () => {
    const { container } = render(<PageHero title="Solo título" />);
    expect(container.querySelectorAll("p")).toHaveLength(0);
    expect(container.querySelector(".absolute")).toBeNull();
  });

  test("keeps the description without bottom margin when there are no children", () => {
    render(<PageHero title="Título" description="Texto" />);
    expect(screen.getByText("Texto").className).not.toContain("mb-5");
  });
});

describe("References", () => {
  test("lists every source with its optional details", () => {
    render(
      <References
        references={[
          {
            id: 1,
            title: "Consenso",
            authors: "Autores",
            year: "2020",
            description: "Resumen",
            url: "https://example.com/consenso.pdf",
          },
          { id: 2, title: "Sin enlace", url: "#" },
        ]}
      />,
    );
    expect(screen.getByText("2 documentos")).toBeDefined();
    const first = document.getElementById("ref-1") as HTMLElement;
    expect(first.textContent).toContain("Autores.");
    expect(first.textContent).toContain("(2020)");
    expect(within(first).getByText("Resumen")).toBeDefined();
    expect(within(first).getByRole("link", { name: "Ver documento" }).getAttribute("href")).toBe(
      "https://example.com/consenso.pdf",
    );
    const second = document.getElementById("ref-2") as HTMLElement;
    expect(within(second).queryByRole("link")).toBeNull();
    expect(second.textContent).toBe("[2]Sin enlace");
  });

  test("uses the singular for a single source", () => {
    render(<References references={[{ id: 1, title: "Uno", url: "#" }]} />);
    expect(screen.getByText("1 documento")).toBeDefined();
  });
});

describe("HomeLivePrices", () => {
  test("shows the cheapest price for each tracked dose", () => {
    render(
      <HomeLivePrices
        medicamentos={[
          medication({ codigo: "a", precio: 52_400 }),
          medication({ codigo: "b", precio: 48_600 }),
          medication({ codigo: "c", precio: 0, concentracion: "36 mg" }),
          medication({
            codigo: "d",
            nombre: "lisdexanfetamina",
            marca: "LUDOXA 30 MG CAPS X 30",
            concentracion: "30  MG",
            precio: 101_200,
          }),
        ]}
      />,
    );
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/precios");
    expect(link.textContent).toContain("Ludoxa");
    expect(link.textContent).toContain("$101k");
    expect(link.textContent).toContain("$49k");
    expect(link.textContent).not.toContain("$52k");
    expect(link.textContent).toContain("Ver todos los precios");
  });

  test("renders nothing when no tracked medication has a price", () => {
    const { container } = render(
      <HomeLivePrices medicamentos={[medication({ nombre: "atomoxetina", marca: "STRATTERA" })]} />,
    );
    expect(container.innerHTML).toBe("");
  });
});

describe("Header", () => {
  function renderAt(pathname: string) {
    return render(
      <PathnameContext.Provider value={pathname}>
        <Header />
      </PathnameContext.Provider>,
    );
  }

  test("marks the current section in the desktop navigation", () => {
    renderAt("/precios");
    const [nav] = screen.getAllByRole("navigation", { name: "Principal" });
    expect(within(nav).getByRole("link", { name: "Precios" }).getAttribute("aria-current")).toBe(
      "page",
    );
    expect(
      within(nav).getByRole("link", { name: "Especialistas" }).getAttribute("aria-current"),
    ).toBeNull();
  });

  test("opens and closes the mobile menu", () => {
    renderAt("/legislacion");
    const toggle = screen.getByRole("button", { name: "Abrir menú" });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(document.getElementById("menu-movil")).toBeNull();

    fireEvent.click(toggle);
    const menu = document.getElementById("menu-movil") as HTMLElement;
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("button", { name: "Cerrar menú" })).toBe(toggle);
    expect(
      within(menu).getByRole("link", { name: "Legislación" }).getAttribute("aria-current"),
    ).toBe("page");
    expect(within(menu).getByRole("link", { name: "Precios" }).getAttribute("aria-current")).toBeNull();

    fireEvent.click(within(menu).getByRole("link", { name: "Precios" }));
    expect(document.getElementById("menu-movil")).toBeNull();

    fireEvent.click(toggle);
    fireEvent.click(toggle);
    expect(document.getElementById("menu-movil")).toBeNull();
  });
});

describe("ThemeToggle", () => {
  test("switches between light, dark and system themes", async () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeToggle />
      </ThemeProvider>,
    );

    const choose = async (label: string) => {
      fireEvent.keyDown(screen.getByRole("button", { name: "Cambiar tema" }), { key: "Enter" });
      await act(() => Promise.resolve());
      fireEvent.click(screen.getByRole("menuitem", { name: label }));
      await act(() => Promise.resolve());
    };

    await choose("Oscuro");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    await choose("Claro");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);

    await choose("Sistema");
    expect(localStorage.getItem("theme")).toBe("system");
  });
});

describe("StepGuideLayout", () => {
  const steps = [
    { id: 1, title: "Primero", subtitle: "Paso uno", icon: Brain, accent: "bg-one" },
    { id: 2, title: "Segundo", subtitle: "Paso dos", icon: Stethoscope, accent: "bg-two" },
  ];

  function renderGuide(props: Partial<Parameters<typeof StepGuideLayout>[0]> = {}) {
    return render(
      <StepGuideLayout
        title="Guía"
        description="Descripción de la guía"
        steps={steps}
        finalActions={[
          { href: "/especialistas", label: "Buscar especialistas" },
          { href: "/precios", label: "Ver precios" },
        ]}
        references={[{ id: 1, title: "Fuente", url: "#" }]}
        {...props}
      >
        {(currentStep) => <p>Contenido del paso {currentStep}</p>}
      </StepGuideLayout>,
    );
  }

  test("moves between steps and keeps the step in the URL", async () => {
    renderGuide();
    await act(() => Promise.resolve());

    expect(screen.getByRole("heading", { level: 1, name: "Guía" })).toBeDefined();
    expect(screen.getByText("Descripción de la guía")).toBeDefined();
    expect(screen.getByText("Contenido del paso 1")).toBeDefined();
    expect(screen.getByRole("button", { name: "Anterior" }).hasAttribute("disabled")).toBe(true);
    expect(screen.getByRole("button", { name: "Primero" }).getAttribute("aria-current")).toBe(
      "step",
    );

    fireEvent.click(screen.getByRole("button", { name: /Siguiente/ }));
    expect(window.location.search).toBe("?paso=2");
    expect(screen.getByRole("heading", { level: 2, name: "Segundo" })).toBeDefined();
    expect(screen.getByText("Contenido del paso 2")).toBeDefined();
    expect(screen.queryByRole("button", { name: /Siguiente/ })).toBeNull();
    expect(screen.getByRole("link", { name: "Buscar especialistas" }).getAttribute("href")).toBe(
      "/especialistas",
    );
    expect(screen.getByRole("link", { name: "Ver precios" }).getAttribute("href")).toBe(
      "/precios",
    );
    expect(screen.getByText("1 documento")).toBeDefined();

    fireEvent.click(screen.getByRole("button", { name: "Anterior" }));
    expect(window.location.search).toBe("");
    expect(screen.getByText("Contenido del paso 1")).toBeDefined();
  });

  test("ignores clicks on the step that is already active", () => {
    renderGuide();
    const length = window.history.length;
    fireEvent.click(screen.getByRole("button", { name: "Primero" }));
    expect(window.history.length).toBe(length);
  });

  test("starts on the step from the URL and follows the Back button", async () => {
    window.history.replaceState(null, "", "/?paso=2");
    renderGuide({ description: undefined, references: undefined });
    await act(() => Promise.resolve());

    expect(screen.getByText("Contenido del paso 2")).toBeDefined();
    expect(screen.queryByText("Descripción de la guía")).toBeNull();
    expect(screen.queryByText("Fuentes")).toBeNull();

    await act(async () => {
      window.history.replaceState(null, "", "/?paso=9");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    expect(screen.getByText("Contenido del paso 1")).toBeDefined();
  });

  test("scrolls back to the card when its top is off screen", async () => {
    const scrolled: ScrollIntoViewOptions[] = [];
    const original = {
      rect: HTMLElement.prototype.getBoundingClientRect,
      scroll: HTMLElement.prototype.scrollIntoView,
      matchMedia: window.matchMedia,
    };
    HTMLElement.prototype.getBoundingClientRect = function () {
      return { top: this.tagName === "ARTICLE" ? -200 : 0 } as DOMRect;
    };
    HTMLElement.prototype.scrollIntoView = function (options?: boolean | ScrollIntoViewOptions) {
      scrolled.push(options as ScrollIntoViewOptions);
    };
    let reduceMotion = false;
    window.matchMedia = ((query: string) => ({ matches: reduceMotion, media: query })) as typeof window.matchMedia;

    try {
      renderGuide();
      fireEvent.click(screen.getByRole("button", { name: /Siguiente/ }));
      reduceMotion = true;
      fireEvent.click(screen.getByRole("button", { name: "Anterior" }));
    } finally {
      HTMLElement.prototype.getBoundingClientRect = original.rect;
      HTMLElement.prototype.scrollIntoView = original.scroll;
      window.matchMedia = original.matchMedia;
    }

    expect(scrolled).toEqual([
      { behavior: "smooth", block: "start" },
      { behavior: "auto", block: "start" },
    ]);
  });

  test("shows no primary action when a guide has none", () => {
    window.history.replaceState(null, "", "/?paso=2");
    renderGuide({ finalActions: [] });
    expect(screen.queryByRole("link", { name: /Buscar/ })).toBeNull();
  });
});
