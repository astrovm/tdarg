import { describe, expect, test } from "bun:test";
import { readdirSync } from "node:fs";
import path from "node:path";

import robots from "./robots";
import sitemap from "./sitemap";

// Rutas con page.tsx dentro de app/, p. ej. "" para la home y "/precios"
function paginas(dir = import.meta.dir, prefijo = ""): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entrada) => {
    if (entrada.isFile()) {
      return entrada.name === "page.tsx" ? [prefijo] : [];
    }
    if (entrada.name === "api" || entrada.name.startsWith("_")) {
      return [];
    }
    return paginas(path.join(dir, entrada.name), `${prefijo}/${entrada.name}`);
  });
}

describe("sitemap", () => {
  test("lists every page exactly once", () => {
    const urls = sitemap().map((entrada) => entrada.url);

    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.toSorted()).toEqual(
      paginas().map((ruta) => `https://tdarg.com.ar${ruta}`).toSorted()
    );
  });
});

describe("robots", () => {
  test("blocks the API and points to the sitemap", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/", disallow: "/api/" },
      sitemap: "https://tdarg.com.ar/sitemap.xml",
    });
  });
});
