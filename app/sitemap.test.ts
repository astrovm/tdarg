import { describe, expect, test } from "bun:test";
import { readdirSync } from "node:fs";
import path from "node:path";

import robots from "./robots";
import sitemap from "./sitemap";

// Routes with a page.tsx under app/, e.g. "" for the home page and "/precios"
function pagePaths(dir = import.meta.dir, prefix = ""): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isFile()) {
      return entry.name === "page.tsx" ? [prefix] : [];
    }
    if (entry.name === "api" || entry.name.startsWith("_")) {
      return [];
    }
    return pagePaths(path.join(dir, entry.name), `${prefix}/${entry.name}`);
  });
}

describe("sitemap", () => {
  test("lists every page exactly once", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.toSorted()).toEqual(
      pagePaths().map((route) => `https://tdarg.com.ar${route}`).toSorted()
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
