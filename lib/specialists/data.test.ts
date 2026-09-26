import { describe, expect, test } from "bun:test";

import { whatsappUrl } from "./contact";
import specialists from "./data";

// The 23 provinces plus CABA
const PROVINCES = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes",
  "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
  "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
  "Santiago del Estero", "Tierra del Fuego", "Tucumán",
];

describe("specialists data", () => {
  test("has no duplicate entries", () => {
    const keys = specialists.map((e) => `${e.name}|${e.address}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  test("fills every required field", () => {
    const incomplete = specialists.filter(
      (e) =>
        [e.name, e.specialty, e.city, e.type].some((v) => !v.trim()) ||
        e.insurance.length === 0
    );
    expect(incomplete).toEqual([]);
  });

  test("lists each province separately by its official name", () => {
    const unknown = specialists
      .flatMap((e) => e.provinces)
      .filter((province) => !PROVINCES.includes(province));
    expect(unknown).toEqual([]);
  });

  test("links only to valid http URLs", () => {
    const invalid = specialists
      .flatMap((e) => (e.url ? [e.url] : []))
      .filter((url) => !URL.canParse(url) || !/^https?:\/\//.test(url));
    expect(invalid).toEqual([]);
  });

  test("builds a valid WhatsApp link for every listed number", () => {
    const invalid = specialists
      .filter((e) => e.whatsapp && !whatsappUrl(e.whatsapp))
      .map((e) => `${e.name}: ${e.whatsapp}`);
    expect(invalid).toEqual([]);
  });
});
