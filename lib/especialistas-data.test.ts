import { describe, expect, test } from "bun:test";

import specialists from "./especialistas-data";

// Types that have a label in app/especialistas/page.tsx
const TYPES = [
  "privado",
  "instituto",
  "centro_especializado",
  "hospital",
  "clinica",
  "consultorio",
  "fundacion",
];

describe("specialists data", () => {
  test("has no duplicate entries", () => {
    const keys = specialists.map((e) => `${e.nombre}|${e.direccion}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  test("fills every required field", () => {
    const incomplete = specialists.filter(
      (e) =>
        [e.nombre, e.especialidad, e.provincia, e.ciudad, e.tipo].some((v) => !v.trim()) ||
        e.obraSocial.length === 0
    );
    expect(incomplete).toEqual([]);
  });

  test("uses only known types", () => {
    expect(specialists.filter((e) => !TYPES.includes(e.tipo))).toEqual([]);
  });

  test("links only to valid http URLs", () => {
    const invalid = specialists
      .flatMap((e) => (e.url ? [e.url] : []))
      .filter((url) => !URL.canParse(url) || !/^https?:\/\//.test(url));
    expect(invalid).toEqual([]);
  });
});
