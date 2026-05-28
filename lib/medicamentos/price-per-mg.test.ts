import { expect, test } from "bun:test";

import { extractUnits, pricePerMg } from "./utils";

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
