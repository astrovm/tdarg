import type { Medication } from "./types";

export const ALFABETA_PRICES_URL = "https://www.alfabeta.net/precio/";

// Alfa Beta's id for each active ingredient's product list
// (precio/lista_drogas_detalle.jsp?id=...). Keys are how the app names them.
export const INGREDIENT_IDS: Record<string, number> = {
  lisdexanfetamina: 11847,
  metilfenidato: 148,
  atomoxetina: 10251,
  modafinilo: 1484,
  armodafinilo: 11103,
  bupropion: 1328,
};

// Products whose page never states the strength. Ritalina only comes as 10 mg
// tablets (its leaflet on Alfa Beta's vademecum).
const KNOWN_STRENGTHS: Record<string, string> = {
  RITALINA: "10 mg",
};

// Shape of the schema.org Product that each price page embeds (only the
// fields we use)
interface AlfabetaProduct {
  "@type"?: string;
  name?: string;
  brand?: { name?: string };
  additionalProperty?: Array<{ name?: string; value?: string }>;
  offers?: Array<{
    sku?: string;
    name?: string;
    price?: string | number;
    availability?: string;
  }>;
}

export function normalizeIngredient(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

// Price page of every product an ingredient page lists, as "concerta.html"
export function parseProductPages(html: string): string[] {
  const pages = [...html.matchAll(/<form\s+name="pr\d+"\s+action="([a-z0-9-]+\.html)"/gi)].map(
    (match) => match[1],
  );
  return [...new Set(pages)];
}

function formatMg(value: number): string {
  return `${Number(value.toFixed(2))} mg`;
}

function parseMg(digits: string): number {
  return Number.parseFloat(digits.replace(",", "."));
}

// "18mg comp.x30" -> "18 mg". "RUBIFEN 10", whose page has no strength, -> "10 mg".
export function extractStrength(offerName: string, productName: string): string | null {
  const inOffer = offerName.match(/(\d+(?:[.,]\d+)?)\s*mg\b/i);
  if (inOffer && parseMg(inOffer[1]) > 0) {
    return formatMg(parseMg(inOffer[1]));
  }

  const trailing = productName.match(/\s(\d+(?:[.,]\d+)?)$/);
  if (trailing && parseMg(trailing[1]) > 0) {
    return formatMg(parseMg(trailing[1]));
  }

  return KNOWN_STRENGTHS[productName.toUpperCase()] ?? null;
}

// Alfa Beta writes prices as "193791.74"
function parsePrice(value: string | number | undefined): number {
  const price = Number(value);
  return Number.isFinite(price) && price > 0 ? price : 0;
}

function productsIn(html: string): AlfabetaProduct[] {
  return [
    ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
  ].flatMap(([, json]) => {
    try {
      const data = JSON.parse(json) as AlfabetaProduct;
      return data["@type"] === "Product" ? [data] : [];
    } catch {
      // Other structured data on the page that is not valid JSON
      return [];
    }
  });
}

// Every presentation on a product's price page that is still sold. Products
// that combine the ingredient with another one (naltrexona+bupropión) are left
// out.
export function parseProductPage(
  html: string,
  ingredient: string,
  updatedAt: string,
): Medication[] {
  return productsIn(html).flatMap((product) => {
    const monodrug = product.additionalProperty?.find((p) => p.name === "Monodroga")?.value;
    if (monodrug && normalizeIngredient(monodrug) !== ingredient) {
      return [];
    }

    const brand = (product.name ?? "").replace(/\s+/g, " ").trim();
    const laboratory = (product.brand?.name ?? "").trim() || "No especificado";

    return (product.offers ?? []).flatMap((offer): Medication[] => {
      const presentation = (offer.name ?? "").trim();
      const price = parsePrice(offer.price);
      const inStock = !offer.availability || offer.availability.endsWith("/InStock");

      if (!offer.sku || !brand || !price || !inStock) {
        return [];
      }

      return [
        {
          code: offer.sku,
          name: ingredient,
          brand,
          laboratory,
          source: "alfabeta",
          price,
          presentation: presentation || "No especificado",
          strength: extractStrength(presentation, brand) ?? "No especificado",
          updatedAt,
        },
      ];
    });
  });
}

// One entry per presentation, sorted by ingredient
export function dedupeMedications(medications: Medication[]): Medication[] {
  const byCode = new Map(medications.map((med) => [med.code, med]));
  return [...byCode.values()].sort((a, b) => a.name.localeCompare(b.name));
}
