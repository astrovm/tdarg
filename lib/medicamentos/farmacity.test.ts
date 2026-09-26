import { describe, expect, test } from "bun:test";

import {
  convertirMedicamento,
  eliminarDuplicados,
  esMedicamentoTDAH,
  extraerConcentracionTexto,
  formatearPotencia,
  normalizarNumeroFarmacity,
  type FarmacityMed,
} from "./farmacity";

const FECHA = "2026-09-26T00:00:00.000Z";

const CONCERTA: FarmacityMed = {
  formula: { description: "metilfenidato" },
  description: "CONCERTA 54 MG COMP.X 30",
  medicalLaboratory: { abbreviation: "JANSSEN" },
  publicPrice: "100000",
  package: { potency: 54 },
};

describe("normalizarNumeroFarmacity", () => {
  test("parses prices in both number formats", () => {
    expect(normalizarNumeroFarmacity(190776.15)).toBe(190776.15);
    expect(normalizarNumeroFarmacity("190776.15")).toBe(190776.15);
    expect(normalizarNumeroFarmacity("190.776,15")).toBe(190776.15);
    expect(normalizarNumeroFarmacity("190,776.15")).toBe(190776.15);
    expect(normalizarNumeroFarmacity("$ 190.776")).toBe(190776);
    expect(normalizarNumeroFarmacity("12,5")).toBe(12.5);
    expect(normalizarNumeroFarmacity("190,776")).toBe(190776);
  });

  test("returns 0 for empty or invalid values", () => {
    expect(normalizarNumeroFarmacity("")).toBe(0);
    expect(normalizarNumeroFarmacity("sin precio")).toBe(0);
    expect(normalizarNumeroFarmacity(undefined)).toBe(0);
    expect(normalizarNumeroFarmacity(Number.NaN)).toBe(0);
    expect(normalizarNumeroFarmacity(Number.POSITIVE_INFINITY)).toBe(0);
  });
});

describe("formatearPotencia", () => {
  test("formats single and combination strengths", () => {
    expect(formatearPotencia(30)).toBe("30 mg");
    expect(formatearPotencia("2,5")).toBe("2.5 mg");
    expect(formatearPotencia("8/90")).toBe("8 mg / 90 mg");
  });

  test("returns null for a missing or zero strength", () => {
    expect(formatearPotencia(0)).toBeNull();
    expect(formatearPotencia(undefined)).toBeNull();
  });
});

describe("extraerConcentracionTexto", () => {
  test("extracts the strength from the first text that has one", () => {
    expect(extraerConcentracionTexto(undefined, "CONCERTA 54 MG COMP.X 30")).toBe("54 mg");
    expect(extraerConcentracionTexto("Sin Clasificar", "STRATTERA 2,5mg")).toBe("2.5 mg");
  });

  test("returns null when no text has a strength", () => {
    expect(extraerConcentracionTexto("Sin Clasificar")).toBeNull();
  });
});

describe("convertirMedicamento", () => {
  test("maps Farmacity fields to a medication", () => {
    expect(convertirMedicamento({ ...CONCERTA, barCode: "779" }, FECHA)).toEqual({
      codigo: "779",
      nombre: "metilfenidato",
      marca: "CONCERTA 54 MG COMP.X 30",
      laboratorio: "JANSSEN",
      source: "farmacity",
      precio: 100000,
      presentacion: "No especificado",
      concentracion: "54 mg",
      fechaActualizacion: FECHA,
    });
  });

  test("falls back to the id and then to a stable generated code", () => {
    const a = convertirMedicamento(CONCERTA, FECHA);
    const b = convertirMedicamento(CONCERTA, "2026-09-27T00:00:00.000Z");

    expect(convertirMedicamento({ ...CONCERTA, id: 42 }, FECHA).codigo).toBe("42");
    expect(a.codigo).toBe(b.codigo);
    expect(a.codigo).toStartWith("med_");
  });

  test("reads the strength from text when the package has none", () => {
    const sinPaquete = { ...CONCERTA, package: undefined };
    expect(convertirMedicamento(sinPaquete, FECHA).concentracion).toBe("54 mg");
  });

  test("fills placeholders for an empty result", () => {
    expect(convertirMedicamento({}, FECHA)).toMatchObject({
      nombre: "Medicamento",
      marca: "Sin marca",
      laboratorio: "No especificado",
      precio: 0,
      concentracion: "No especificado",
    });
  });
});

describe("esMedicamentoTDAH", () => {
  test("rejects excluded active ingredients", () => {
    const base = convertirMedicamento(CONCERTA, FECHA);

    expect(esMedicamentoTDAH(base)).toBe(true);
    expect(esMedicamentoTDAH({ ...base, nombre: "Naltrexona+Bupropion" })).toBe(false);
  });
});

describe("eliminarDuplicados", () => {
  test("keeps the priced entry among duplicates", () => {
    const base = convertirMedicamento({ ...CONCERTA, publicPrice: undefined }, FECHA);
    const conPrecio = { ...base, codigo: "2", precio: 5000 };

    expect(eliminarDuplicados([base, conPrecio])).toEqual([conPrecio]);
    expect(eliminarDuplicados([conPrecio, base])).toEqual([conPrecio]);
  });

  test("keeps different strengths and sorts by name", () => {
    const metilfenidato = convertirMedicamento(CONCERTA, FECHA);
    const otraDosis = { ...metilfenidato, codigo: "2", concentracion: "36 mg" };
    const atomoxetina = { ...metilfenidato, codigo: "3", nombre: "atomoxetina" };

    expect(
      eliminarDuplicados([metilfenidato, otraDosis, atomoxetina]).map((m) => m.codigo)
    ).toEqual(["3", metilfenidato.codigo, "2"]);
  });
});
