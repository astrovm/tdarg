import { describe, expect, test } from "bun:test";

import type { Medication } from "./types";
import {
  brandName,
  extractMg,
  extractUnits,
  formatMedicationName,
  formatMedicationPresentation,
  formatPrice,
  groupByApproval,
  pricePerMg,
  priceWithCoverage,
} from "./utils";

function medication(overrides: Partial<Medication>): Medication {
  return {
    code: "1",
    name: "lisdexanfetamina",
    brand: "LUDOXA 30 mg",
    laboratory: "ADIUM",
    source: "farmacity",
    price: 190776.15,
    presentation: "Sin Clasificar",
    strength: "30 mg",
    updatedAt: "2026-05-28T00:00:00.000Z",
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
    expect(pricePerMg(medication({ brand: "LUDOXA 30 mg x 30 c#ps.duras" }))).toBe(
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
          name: "naltrexona+bupropion",
          brand: "NALTREVA comp.x 120",
          presentation: "comp.x 120",
          strength: "8 mg / 90 mg",
        })
      )
    ).toBeNull();
  });

  test("returns null when there is no price", () => {
    expect(
      pricePerMg(medication({ brand: "LUDOXA 30 mg x 30 c#ps.duras", price: 0 }))
    ).toBeNull();
  });
});

describe("formatMedicationName", () => {
  test("expands Farmacity abbreviations into readable names", () => {
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
});

describe("brandName", () => {
  test("keeps only the commercial brand", () => {
    expect(brandName("LUDOXA  30 mg x 30 c#ps.duras")).toBe("Ludoxa");
    expect(brandName("RITALINA LA  10 MG C#PS.X 30")).toBe("Ritalina LA");
    expect(brandName("RUBIFEN-10  COMP.X 30")).toBe("Rubifen");
    expect(brandName("RUBIFEN  SR 20 MG COMP.X 30")).toBe("Rubifen SR");
    expect(brandName("CONSIV  18MG COMP.REC.LIB.PR.X30")).toBe("Consiv");
    expect(brandName("RECIT  10 MG CAPS.X 7")).toBe("Recit");
  });
});

describe("formatMedicationPresentation", () => {
  test("builds the presentation from real package text", () => {
    expect(
      formatMedicationPresentation(medication({ brand: "LUDOXA 50 mg x 30 c#ps.duras" }))
    ).toBe("Cápsulas x 30");
    expect(
      formatMedicationPresentation(
        medication({
          name: "metilfenidato",
          brand: "CONCERTA 54 MG COMP.X 30",
          presentation: "Comprimidos x 30",
        })
      )
    ).toBe("Comprimidos x 30");
  });

  test("keeps extended-release tablets distinct", () => {
    expect(
      formatMedicationPresentation(
        medication({ name: "metilfenidato", brand: "CONSIv 18MG COMP.REC.LIB.PR.X30" })
      )
    ).toBe("Comprimidos de liberación prolongada x 30");
  });

  test("formats other presentations in display case", () => {
    expect(formatMedicationPresentation(medication({ brand: "RECIT 10 MG SOBRES X 7" }))).toBe(
      "Recit 10 mg Sobres x 7"
    );
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
    ].map((name, i) => medication({ code: String(i), name }));

    const groups = groupByApproval(meds);

    expect(Object.keys(groups.stimulants)).toEqual(["lisdexanfetamina", "metilfenidato"]);
    expect(Object.keys(groups.nonStimulants)).toEqual(["atomoxetina"]);
    expect(Object.keys(groups.offLabel)).toEqual(["modafinilo", "armodafinilo", "bupropion"]);
    expect(groups.offLabel["armodafinilo"].map((m) => m.name)).toEqual(["armodafinilo"]);
  });

  test("ignores active ingredients outside the known groups", () => {
    expect(groupByApproval([medication({ name: "paracetamol" })])).toEqual({
      stimulants: {},
      nonStimulants: {},
      offLabel: {},
    });
  });
});
