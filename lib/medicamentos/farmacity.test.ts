import { expect, test } from "bun:test";

import {
  convertirMedicamento,
  eliminarDuplicados,
  esMedicamentoTDAH,
  extraerConcentracionTexto,
  formatearPotencia,
  normalizarNumeroFarmacity,
} from "./farmacity";

const FECHA = "2026-09-26T00:00:00.000Z";

test("parses Farmacity prices in both number formats", () => {
  expect(normalizarNumeroFarmacity(190776.15)).toBe(190776.15);
  expect(normalizarNumeroFarmacity("190776.15")).toBe(190776.15);
  expect(normalizarNumeroFarmacity("190.776,15")).toBe(190776.15);
  expect(normalizarNumeroFarmacity("190,776.15")).toBe(190776.15);
  expect(normalizarNumeroFarmacity("$ 190.776")).toBe(190776);
  expect(normalizarNumeroFarmacity("12,5")).toBe(12.5);
  expect(normalizarNumeroFarmacity("")).toBe(0);
  expect(normalizarNumeroFarmacity(undefined)).toBe(0);
  expect(normalizarNumeroFarmacity(Number.NaN)).toBe(0);
});

test("formats potency, including combination strengths", () => {
  expect(formatearPotencia(30)).toBe("30 mg");
  expect(formatearPotencia("2,5")).toBe("2.5 mg");
  expect(formatearPotencia("8/90")).toBe("8 mg / 90 mg");
  expect(formatearPotencia(0)).toBeNull();
});

test("extracts strength from free text", () => {
  expect(extraerConcentracionTexto(undefined, "CONCERTA 54 MG COMP.X 30")).toBe("54 mg");
  expect(extraerConcentracionTexto("Sin Clasificar")).toBeNull();
});

test("uses a stable code when Farmacity sends no barcode or id", () => {
  const med = {
    formula: { description: "metilfenidato" },
    description: "CONCERTA 54 MG COMP.X 30",
    medicalLaboratory: { abbreviation: "JANSSEN" },
    publicPrice: "100000",
    package: { potency: 54 },
  };

  const a = convertirMedicamento(med, FECHA);
  const b = convertirMedicamento(med, "2026-09-27T00:00:00.000Z");

  expect(a.codigo).toBe(b.codigo);
  expect(a.codigo).toStartWith("med_");
  expect(a.concentracion).toBe("54 mg");
  expect(a.precio).toBe(100000);
  expect(convertirMedicamento({ ...med, barCode: "779" }, FECHA).codigo).toBe("779");
});

test("filters out non-ADHD search results and keeps priced duplicates", () => {
  const base = convertirMedicamento(
    {
      formula: { description: "atomoxetina" },
      description: "ATOMOXETINA 40 MG",
      medicalLaboratory: { abbreviation: "LAB" },
      package: { potency: 40 },
    },
    FECHA
  );
  const conPrecio = { ...base, codigo: "2", precio: 5000 };
  const naltrexona = { ...base, codigo: "3", nombre: "naltrexona+bupropion" };

  expect(esMedicamentoTDAH(naltrexona)).toBe(false);
  expect(esMedicamentoTDAH(base)).toBe(true);
  expect(eliminarDuplicados([base, conPrecio])).toEqual([conPrecio]);
});
