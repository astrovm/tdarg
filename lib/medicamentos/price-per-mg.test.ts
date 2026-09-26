import { expect, test } from "bun:test";

import {
  extractUnits,
  brandName,
  formatMedicationName,
  formatPrice,
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

test("does not calculate price per mg for combination strengths", () => {
  expect(
    pricePerMg({
      codigo: "1",
      nombre: "naltrexona+bupropion",
      marca: "NALTREVA comp.x 120",
      laboratorio: "RAFFO",
      source: "farmacity",
      precio: 206034.53,
      presentacion: "comp.x 120",
      concentracion: "8 mg / 90 mg",
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
    "Ludoxa 50 mg x 30 Cápsulas Duras"
  );
  expect(formatMedicationName("CONCERTA 54 MG COMP.X 30")).toBe(
    "Concerta 54 mg Comprimidos x 30"
  );
  expect(formatMedicationName("MODIALEX 150 MG COMP.X 30")).toBe(
    "Modialex 150 mg Comprimidos x 30"
  );
  expect(formatMedicationName("CONSIv 18MG COMP.REC.LIB.PR.X30")).toBe(
    "Consiv 18 mg Comprimidos Recubiertos Liberación Prolongada x 30"
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
  ).toBe("Cápsulas x 30");

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

test("extracts the commercial brand name", () => {
  expect(brandName("LUDOXA  30 mg x 30 c#ps.duras")).toBe("Ludoxa");
  expect(brandName("RITALINA LA  10 MG C#PS.X 30")).toBe("Ritalina LA");
  expect(brandName("RUBIFEN-10  COMP.X 30")).toBe("Rubifen");
  expect(brandName("RUBIFEN  SR 20 MG COMP.X 30")).toBe("Rubifen SR");
  expect(brandName("CONSIV  18MG COMP.REC.LIB.PR.X30")).toBe("Consiv");
  expect(brandName("RECIT  10 MG CAPS.X 7")).toBe("Recit");
});

test("formats prices without decimals when asked", () => {
  expect(formatPrice(206096.54, { decimals: 0 }).replace(/\s/g, " ")).toBe("$ 206.097");
});
