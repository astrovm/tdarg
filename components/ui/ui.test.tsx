import { describe, expect, test } from "bun:test";
import { act, render, screen } from "@testing-library/react";

import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge } from "./badge";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

describe("Button", () => {
  test("renders a button with the variant and size classes", () => {
    render(
      <Button variant="destructive" size="lg" className="extra">
        Borrar
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Borrar" });
    expect(button.className).toContain("bg-destructive");
    expect(button.className).toContain("h-11");
    expect(button.className).toContain("extra");
  });

  test("passes its classes to the child when asChild is set", () => {
    render(
      <Button asChild variant="link">
        <a href="/precios">Precios</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Precios" });
    expect(link.getAttribute("href")).toBe("/precios");
    expect(link.className).toContain("underline-offset-4");
  });
});

describe("Badge", () => {
  test("uses the default and outline variants", () => {
    render(
      <>
        <Badge>Nuevo</Badge>
        <Badge variant="outline">Borrador</Badge>
      </>,
    );
    expect(screen.getByText("Nuevo").className).toContain("bg-primary");
    expect(screen.getByText("Borrador").className).toContain("text-foreground");
  });
});

describe("Alert", () => {
  test("renders an alert role with title and description", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>No hay precios</AlertDescription>
      </Alert>,
    );
    const alert = screen.getByRole("alert");
    expect(alert.className).toContain("text-destructive");
    expect(screen.getByRole("heading", { name: "Error" }).tagName).toBe("H5");
    expect(screen.getByText("No hay precios").tagName).toBe("DIV");
  });
});

describe("Card", () => {
  test("composes header, content and footer", () => {
    const { container } = render(
      <Card className="custom-card">
        <CardHeader>
          <CardTitle>Título</CardTitle>
          <CardDescription>Descripción</CardDescription>
        </CardHeader>
        <CardContent>Contenido</CardContent>
        <CardFooter>Pie</CardFooter>
      </Card>,
    );
    const card = container.firstElementChild as HTMLElement;
    expect(card.className).toContain("custom-card");
    expect(card.textContent).toBe("TítuloDescripciónContenidoPie");
    expect(screen.getByText("Pie").className).toContain("items-center");
    expect(screen.getByText("Contenido").className).toContain("pt-0");
  });
});

describe("Input", () => {
  test("forwards its type and props", () => {
    render(<Input type="email" placeholder="Correo" aria-label="Correo" />);
    const input = screen.getByLabelText("Correo") as HTMLInputElement;
    expect(input.type).toBe("email");
    expect(input.className).toContain("rounded-md");
  });
});

describe("DropdownMenu", () => {
  test("renders every kind of item when open", async () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Abrir</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel inset>Opciones</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem inset>
              Copiar <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem checked>Mostrar precios</DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuRadioGroup value="claro">
            <DropdownMenuRadioItem value="claro">Claro</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="oscuro">Oscuro</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSub open>
            <DropdownMenuSubTrigger inset>Más</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Compartir</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    // Let the popper finish positioning the menus
    await act(() => Promise.resolve());

    expect(screen.getByText("Opciones").className).toContain("pl-8");
    expect(screen.getByText("⌘C").className).toContain("ml-auto");
    expect(screen.getByRole("menuitemcheckbox").getAttribute("aria-checked")).toBe("true");
    expect(
      screen.getAllByRole("menuitemradio").map((item) => item.getAttribute("aria-checked")),
    ).toEqual(["true", "false"]);
    expect(screen.getByText("Más").className).toContain("pl-8");
    expect(screen.getByText("Compartir")).toBeDefined();
    expect(screen.getAllByRole("separator")).toHaveLength(1);
  });
});

describe("Select", () => {
  test("renders groups, labels and the selected item when open", async () => {
    render(
      <Select open value="54">
        <SelectTrigger aria-label="Dosis">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectGroup>
            <SelectLabel>Dosis</SelectLabel>
            <SelectItem value="18">18 mg</SelectItem>
            <SelectSeparator />
            <SelectItem value="54">54 mg</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    await act(() => Promise.resolve());

    expect(screen.getAllByText("54 mg").length).toBeGreaterThan(0);
    expect(screen.getByRole("option", { name: "54 mg" }).getAttribute("aria-selected")).toBe(
      "true",
    );
    expect(screen.getByText("Dosis", { selector: "div" }).className).toContain("font-semibold");
  });
});
