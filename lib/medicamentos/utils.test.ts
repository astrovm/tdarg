import { describe, expect, test } from "bun:test";

import type { Medicamento } from "./types";
import {
  extractMg,
  extractUnits,
  formatMedicationName,
  formatMedicationPresentation,
  formatPrice,
  groupByApproval,
  pricePerMg,
  priceWithCoverage,
} from "./utils";

function medication(overrides: Partial<Medicamento>): Medicamento {
  return {
    codigo: "1",
    nombre: "lisdexanfetamina",
    marca: "LUDOXA 30 mg",
    laboratorio: "ADIUM",
    source: "farmacity",
    precio: 190776.15,
    presentacion: "Sin Clasificar",
    concentracion: "30 mg",
    fechaActualizacion: "2026-05-28T00:00:00.000Z",
    ...overrides,
  };
}

describe("formatPrice", () => {
  test("formats pesos with two decimals in Argentine locale", () => {
    // Intl separates the symbol with a non-breaking space (U+00A0)
    expect(formatPrice(190776.15)).toBe("$ 190.776,15");
    expect(formatPrice(0)).toBe("$ 0,00");
  });
});

describe("priceWithCoverage", () => {
  test("applies the default 40% coverage", () => {
    expect(priceWithCoverage(1000)).toBe(600);
  });

  test("applies a custom coverage rate", () => {
    expect(priceWithCoverage(1000, 0.7)).toBeCloseTo(300);
    expect(priceWithCoverage(1000, 0)).toBe(1000);
  });
});

describe("extractMg", () => {
  test("parses integer and decimal strengths", () => {
    expect(extractMg("30 mg")).toBe(30);
    expect(extractMg("2,5 mg")).toBe(2.5);
    expect(extractMg("18MG")).toBe(18);
  });

  test("returns null for combination, missing or zero strengths", () => {
    expect(extractMg("8 mg / 90 mg")).toBeNull();
    expect(extractMg("No especificado")).toBeNull();
    expect(extractMg("0 mg")).toBeNull();
  });
});

describe("extractUnits", () => {
  test("reads the unit count from the first text that has one", () => {
    expect(extractUnits("Comprimidos x 30", "CONCERTA 54 MG COMP.X 60")).toBe(30);
    expect(extractUnits("Sin Clasificar", "LUDOXA 30 mg x 30 c#ps.duras")).toBe(30);
  });

  test("reads counts written before the unit or after 'por'", () => {
    expect(extractUnits("28 comprimidos")).toBe(28);
    expect(extractUnits("caja por 60")).toBe(60);
  });

  test("returns null when no text has a unit count", () => {
    expect(extractUnits("Sin Clasificar", "LUDOXA 30 mg", "lisdexanfetamina")).toBeNull();
    expect(extractUnits("x 0")).toBeNull();
  });
});

describe("pricePerMg", () => {
  test("divides the price by the total package milligrams", () => {
    expect(pricePerMg(medication({ marca: "LUDOXA 30 mg x 30 c#ps.duras" }))).toBe(
      211.9735
    );
  });

  test("returns null without a real unit count", () => {
    expect(pricePerMg(medication({}))).toBeNull();
  });

  test("returns null for combination strengths", () => {
    expect(
      pricePerMg(
        medication({
          nombre: "naltrexona+bupropion",
          marca: "NALTREVA comp.x 120",
          presentacion: "comp.x 120",
          concentracion: "8 mg / 90 mg",
        })
      )
    ).toBeNull();
  });

  test("returns null when there is no price", () => {
    expect(
      pricePerMg(medication({ marca: "LUDOXA 30 mg x 30 c#ps.duras", precio: 0 }))
    ).toBeNull();
  });
});

describe("formatMedicationName", () => {
  test("expands Farmacity abbreviations into readable names", () => {
    expect(formatMedicationName("LUDOXA  50 mg x 30 c#ps.duras")).toBe(
      "Ludoxa 50 mg x 30 Capsulas Duras"
    );
    expect(formatMedicationName("CONCERTA 54 MG COMP.X 30")).toBe(
      "Concerta 54 mg Comprimidos x 30"
    );
    expect(formatMedicationName("MODIALEX 150 MG COMP.X 30")).toBe(
      "Modialex 150 mg Comprimidos x 30"
    );
    expect(formatMedicationName("CONSIv 18MG COMP.REC.LIB.PR.X30")).toBe(
      "Consiv 18 mg Comprimidos Recubiertos Liberacion Prolongada x 30"
    );
  });
});

describe("formatMedicationPresentation", () => {
  test("builds the presentation from real package text", () => {
    expect(
      formatMedicationPresentation(medication({ marca: "LUDOXA 50 mg x 30 c#ps.duras" }))
    ).toBe("Capsulas x 30");
    expect(
      formatMedicationPresentation(
        medication({
          nombre: "metilfenidato",
          marca: "CONCERTA 54 MG COMP.X 30",
          presentacion: "Comprimidos x 30",
        })
      )
    ).toBe("Comprimidos x 30");
  });

  test("keeps extended-release tablets distinct", () => {
    expect(
      formatMedicationPresentation(
        medication({ nombre: "metilfenidato", marca: "CONSIv 18MG COMP.REC.LIB.PR.X30" })
      )
    ).toBe("Comprimidos recubiertos liberacion prolongada x 30");
  });

  test("returns the raw presentation when no unit count is found", () => {
    expect(formatMedicationPresentation(medication({}))).toBe("Sin Clasificar");
  });
});

describe("groupByApproval", () => {
  test("groups each active ingredient under its approval category", () => {
    const meds = [
      "lisdexanfetamina",
      "metilfenidato",
      "atomoxetina",
      "modafinilo",
      "armodafinilo",
      "bupropion",
    ].map((nombre, i) => medication({ codigo: String(i), nombre }));

    const groups = groupByApproval(meds);

    expect(Object.keys(groups.estimulantes)).toEqual(["lisdexanfetamina", "metilfenidato"]);
    expect(Object.keys(groups.noestimulantes)).toEqual(["atomoxetina"]);
    expect(Object.keys(groups.offlabel)).toEqual(["modafinilo", "armodafinilo", "bupropion"]);
    expect(groups.offlabel.armodafinilo.map((m) => m.nombre)).toEqual(["armodafinilo"]);
  });

  test("ignores active ingredients outside the known groups", () => {
    expect(groupByApproval([medication({ nombre: "paracetamol" })])).toEqual({
      estimulantes: {},
      noestimulantes: {},
      offlabel: {},
    });
  });
});
