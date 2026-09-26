import { describe, expect, test } from "bun:test";

import especialistas from "./especialistas-data";

// Tipos con etiqueta en app/especialistas/page.tsx
const TIPOS = [
  "privado",
  "instituto",
  "centro_especializado",
  "hospital",
  "clinica",
  "consultorio",
  "fundacion",
];

describe("especialistas", () => {
  test("has no duplicate entries", () => {
    const claves = especialistas.map((e) => `${e.nombre}|${e.direccion}`);
    expect(new Set(claves).size).toBe(claves.length);
  });

  test("fills every required field", () => {
    const incompletos = especialistas.filter(
      (e) =>
        [e.nombre, e.especialidad, e.provincia, e.ciudad, e.tipo].some((v) => !v.trim()) ||
        e.obraSocial.length === 0
    );
    expect(incompletos).toEqual([]);
  });

  test("uses only known types", () => {
    expect(especialistas.filter((e) => !TIPOS.includes(e.tipo))).toEqual([]);
  });

  test("links only to valid http URLs", () => {
    const invalidas = especialistas
      .flatMap((e) => (e.url ? [e.url] : []))
      .filter((url) => !URL.canParse(url) || !/^https?:\/\//.test(url));
    expect(invalidas).toEqual([]);
  });
});
