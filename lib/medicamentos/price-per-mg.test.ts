import { expect, test } from "bun:test";

import {
  extractUnits,
  formatMedicationName,
  formatMedicationPresentation,
  pricePerMg,
} from "./utils";

test("extracts unit count from brand text when presentation is unknown", () => {
  expect(
    extractUnits(
      "Sin Clasificar",
      "LUDOXA 30 mg x 30 c#ps.duras",
      "lisdexanfetamina"
    )
  ).toBe(30);
});

test("does not calculate price per mg without a real unit count", () => {
  expect(
    pricePerMg({
      codigo: "1",
      nombre: "lisdexanfetamina",
      marca: "LUDOXA 30 mg",
      laboratorio: "ADIUM",
      source: "farmacity",
      precio: 190776.15,
      presentacion: "Sin Clasificar",
      concentracion: "30 mg",
      fechaActualizacion: "2026-05-28T00:00:00.000Z",
    })
  ).toBeNull();
});

test("calculates price per mg using total package milligrams", () => {
  expect(
    pricePerMg({
      codigo: "1",
      nombre: "lisdexanfetamina",
      marca: "LUDOXA 30 mg x 30 c#ps.duras",
      laboratorio: "ADIUM",
      source: "farmacity",
      precio: 190776.15,
      presentacion: "Sin Clasificar",
      concentracion: "30 mg",
      fechaActualizacion: "2026-05-28T00:00:00.000Z",
    })
  ).toBe(211.9735);
});

test("formats raw Farmacity medication names consistently", () => {
  expect(formatMedicationName("LUDOXA  50 mg x 30 c#ps.duras")).toBe(
    "Ludoxa 50 mg x 30 Capsulas Duras"
  );
  expect(formatMedicationName("CONCERTA 54 MG COMP.X 30")).toBe(
    "Concerta 54 mg Comprimidos x 30"
  );
  expect(formatMedicationName("MODIALEX 150 MG COMP.X 30")).toBe(
    "Modialex 150 mg Comprimidos x 30"
  );
});

test("formats presentation from real package text only", () => {
  expect(
    formatMedicationPresentation({
      codigo: "1",
      nombre: "lisdexanfetamina",
      marca: "LUDOXA 50 mg x 30 c#ps.duras",
      laboratorio: "ADIUM",
      source: "farmacity",
      precio: 214643.61,
      presentacion: "Sin Clasificar",
      concentracion: "50 mg",
      fechaActualizacion: "2026-05-28T00:00:00.000Z",
    })
  ).toBe("Capsulas x 30");

  expect(
    formatMedicationPresentation({
      codigo: "2",
      nombre: "metilfenidato",
      marca: "CONCERTA 54 MG COMP.X 30",
      laboratorio: "JANSSEN CILAG",
      source: "farmacity",
      precio: 100000,
      presentacion: "Comprimidos x 30",
      concentracion: "54 mg",
      fechaActualizacion: "2026-05-28T00:00:00.000Z",
    })
  ).toBe("Comprimidos x 30");
});
