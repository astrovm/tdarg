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

  test("reads lists with ten or more products, however the form is spaced", () => {
    const pages = Array.from({ length: 12 }, (_, i) => `product-${i}.html`);

    expect(parseProductPages(ingredientPage(pages))).toEqual(pages);
    expect(parseProductPages('<form  name="pr1"\n  action="ludoxa.html">')).toEqual(["ludoxa.html"]);
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
    expect(extractStrength("12.25 mg comp.x 30", "X")).toBe("12.25 mg");
    expect(extractStrength("10.5 mg comp.x 30", "X")).toBe("10.5 mg");
    expect(extractStrength("1.125 mg comp.x 30", "X")).toBe("1.13 mg");
  });

  test("skips a zero strength", () => {
    expect(extractStrength("0 mg comp.x 30", "RUBIFEN 10")).toBe("10 mg");
    expect(extractStrength("comp.x 30", "PRODUCTO 0")).toBeNull();
  });

  test("falls back to a dose at the end of the product name", () => {
    expect(extractStrength("comp.x 30", "RUBIFEN 10")).toBe("10 mg");
    expect(extractStrength("20 mg comp.x 30", "RUBIFEN SR 20")).toBe("20 mg");
    expect(extractStrength("comp.x 30", "PRODUCTO 2,25")).toBe("2.25 mg");
    expect(extractStrength("comp.x 30", "PRODUCTO 2,5")).toBe("2.5 mg");
  });

  test("only reads a dose at the very end of the product name", () => {
    expect(extractStrength("comp.x 30", "PRODUCTO 10 PLUS")).toBeNull();
    expect(extractStrength("comp.x 30", "PRODUCTO-10")).toBeNull();
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
      { sku: "45421", name: " 10 mg cáps.x 30 ", price: "91817.92" },
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

  test("fills placeholders for missing laboratory, presentation or strength", () => {
    const html = productPage("  NUEVO   XR ", "  ", "modafinilo", [
      { sku: "9", name: "", price: "1000" },
    ]);

    expect(parseProductPage(html, "modafinilo", DATE)).toEqual([
      expect.objectContaining({
        brand: "NUEVO XR",
        laboratory: "No especificado",
        presentation: "No especificado",
        strength: "No especificado",
      }),
    ]);
  });

  test("keeps products whose page does not name the ingredient", () => {
    const html = productPage("RECIT", "Gador", null, [
      { sku: "1", name: "10 mg cáps.x 7", price: "44618.13" },
    ]);

    expect(html).not.toContain("Monodroga");
    expect(html).toContain("Accion terapeutica");
    expect(parseProductPage(html, "atomoxetina", DATE).map((m) => m.code)).toEqual(["1"]);
  });

  test("reads products with missing fields", () => {
    const page = (product: object) =>
      `<script type="application/ld+json">${JSON.stringify({ "@type": "Product", ...product })}</script>`;
    const offer = { sku: "1", price: "1000" };

    expect(parseProductPage(page({ offers: [offer] }), "modafinilo", DATE)).toEqual([]);
    expect(parseProductPage(page({ name: "NUEVO" }), "modafinilo", DATE)).toEqual([]);
    expect(parseProductPage(page({ name: "NUEVO", offers: [offer] }), "modafinilo", DATE)).toEqual([
      expect.objectContaining({
        code: "1",
        brand: "NUEVO",
        laboratory: "No especificado",
        presentation: "No especificado",
      }),
    ]);
  });

  test("reads the product data whatever other attributes its script tag has", () => {
    const html = productPage("RECIT", "Gador", "atomoxetina", [
      { sku: "1", name: "10 mg cáps.x 7", price: "44618.13" },
    ]).replace(
      /<script type="application\/ld\+json">\s*\{\s*"@context"/,
      '<script id="product" type="application/ld+json" nonce="abc">{"@context"',
    );

    expect(html).toContain('nonce="abc">{"@context"');
    expect(parseProductPage(html, "atomoxetina", DATE).map((m) => m.code)).toEqual(["1"]);
  });

  test("ignores structured data that is not a product", () => {
    const html = `<script type="application/ld+json">${JSON.stringify({
      "@type": "ItemList",
      name: "RECIT",
      offers: [{ sku: "1", name: "10 mg cáps.x 7", price: "44618.13" }],
    })}</script>`;

    expect(parseProductPage(html, "atomoxetina", DATE)).toEqual([]);
  });

  test("reads prices written as numbers and rejects impossible ones", () => {
    const html = productPage("VIGICER", "Beta", "modafinilo", [
      { sku: "1", name: "200 mg comp.x 15", price: "Infinity" },
      { sku: "2", name: "200 mg comp.x 15", price: "-5" },
      { sku: "3", name: "200 mg comp.x 15", price: "-1" },
    ]).replace('"price": "-5"', '"price": 40359.78');

    expect(parseProductPage(html, "modafinilo", DATE).map((m) => [m.code, m.price])).toEqual([
      ["2", 40359.78],
    ]);
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
