import { describe, expect, test } from "bun:test";

import { ingredientPage, productPage } from "@/test/alfabeta-pages";

import {
  dedupeMedications,
  extractStrength,
  normalizeIngredient,
  parseProductPage,
  parseProductPages,
} from "./alfabeta";

const DATE = "2026-11-03T00:00:00.000Z";

describe("parseProductPages", () => {
  test("lists each product's price page once", () => {
    const html = ingredientPage(["concerta.html", "ritalina-la.html", "concerta.html"]);

    expect(parseProductPages(html)).toEqual(["concerta.html", "ritalina-la.html"]);
  });

  test("ignores forms that are not product pages", () => {
    expect(parseProductPages('<form name="lab1" action="srv" method="post">')).toEqual([]);
    expect(parseProductPages('<form name="pr1" action="../admin/x.html">')).toEqual([]);
  });
});

describe("extractStrength", () => {
  test("reads the strength from the presentation", () => {
    expect(extractStrength("18mg comp.rec.lib.pr.x30", "CONSIV")).toBe("18 mg");
    expect(extractStrength("30 mg x 30 cáps.duras", "LUDOXA")).toBe("30 mg");
    expect(extractStrength("2,5 mg comp.x 30", "X")).toBe("2.5 mg");
  });

  test("falls back to a dose at the end of the product name", () => {
    expect(extractStrength("comp.x 30", "RUBIFEN 10")).toBe("10 mg");
    expect(extractStrength("20 mg comp.x 30", "RUBIFEN SR 20")).toBe("20 mg");
  });

  test("knows products whose page never says the strength", () => {
    expect(extractStrength("comp.x 30", "RITALINA")).toBe("10 mg");
    expect(extractStrength("comp.x 30", "OTRO")).toBeNull();
  });
});

describe("normalizeIngredient", () => {
  test("drops accents and case", () => {
    expect(normalizeIngredient(" Bupropión ")).toBe("bupropion");
  });
});

describe("parseProductPage", () => {
  test("maps each presentation to a medication", () => {
    const html = productPage("RITALINA LA", "Novartis", "metilfenidato", [
      { sku: "45421", name: "10 mg cáps.x 30", price: "91817.92" },
      { sku: "33839", name: "20 mg cáps.x 30", price: "96890.25" },
    ]);

    expect(parseProductPage(html, "metilfenidato", DATE)).toEqual([
      {
        code: "45421",
        name: "metilfenidato",
        brand: "RITALINA LA",
        laboratory: "Novartis",
        source: "alfabeta",
        price: 91817.92,
        presentation: "10 mg cáps.x 30",
        strength: "10 mg",
        updatedAt: DATE,
      },
      expect.objectContaining({ code: "33839", price: 96890.25, strength: "20 mg" }),
    ]);
  });

  test("names the ingredient the way the app does, without accents", () => {
    const html = productPage("ODRANAL", "Adium", "bupropión", [
      { sku: "23483", name: "150mg comp.lib.prol.x 30", price: "93318.54" },
    ]);

    expect(parseProductPage(html, "bupropion", DATE).map((m) => m.name)).toEqual(["bupropion"]);
  });

  test("leaves out products that combine the ingredient with another", () => {
    const html = productPage("NALTREVA", "Raffo", "naltrexona+bupropión", [
      { sku: "1", name: "comp.x 120", price: "219555" },
    ]);

    expect(parseProductPage(html, "bupropion", DATE)).toEqual([]);
  });

  test("skips presentations without a price, a code or stock", () => {
    const html = productPage("VIGICER", "Beta", "modafinilo", [
      { sku: "1", name: "200 mg comp.x 15", price: "0" },
      { sku: "2", name: "200 mg comp.x 30", price: "sin precio" },
      { sku: "", name: "200 mg comp.x 60", price: "100" },
      {
        sku: "3",
        name: "200 mg comp.x 90",
        price: "100",
        availability: "https://schema.org/Discontinued",
      },
      { sku: "4", name: "200 mg comp.x 10", price: "40359.78" },
    ]);

    expect(parseProductPage(html, "modafinilo", DATE).map((m) => m.code)).toEqual(["4"]);
  });

  test("returns nothing for a page without product data", () => {
    expect(parseProductPage("<html>Mantenimiento</html>", "modafinilo", DATE)).toEqual([]);
  });
});

describe("dedupeMedications", () => {
  test("keeps one entry per presentation, sorted by ingredient", () => {
    const [ritalina] = parseProductPage(
      productPage("RITALINA", "Novartis", "metilfenidato", [
        { sku: "13494", name: "comp.x 30", price: "44795.23" },
      ]),
      "metilfenidato",
      DATE,
    );
    const vigicer = parseProductPage(
      productPage("VIGICER", "Beta", "atomoxetina", [
        { sku: "49669", name: "200 mg comp.x 15", price: "40359.78" },
        { sku: "49670", name: "200 mg comp.x 30", price: "76106.19" },
      ]),
      "atomoxetina",
      DATE,
    );

    expect(dedupeMedications([ritalina, ...vigicer, ritalina]).map((m) => m.code)).toEqual([
      "49669",
      "49670",
      "13494",
    ]);
  });
});
