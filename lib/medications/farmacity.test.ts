import { describe, expect, test } from "bun:test";

import {
  toMedication,
  dedupeMedications,
  isAdhdMedication,
  extractStrength,
  formatPotency,
  parseFarmacityNumber,
  type FarmacityMed,
} from "./farmacity";

const DATE = "2026-09-26T00:00:00.000Z";

const CONCERTA: FarmacityMed = {
  formula: { description: "metilfenidato" },
  description: "CONCERTA 54 MG COMP.X 30",
  medicalLaboratory: { abbreviation: "JANSSEN" },
  publicPrice: "100000",
  package: { potency: 54 },
};

describe("parseFarmacityNumber", () => {
  test("parses prices in both number formats", () => {
    expect(parseFarmacityNumber(190776.15)).toBe(190776.15);
    expect(parseFarmacityNumber("190776.15")).toBe(190776.15);
    expect(parseFarmacityNumber("190.776,15")).toBe(190776.15);
    expect(parseFarmacityNumber("190,776.15")).toBe(190776.15);
    expect(parseFarmacityNumber("$ 190.776")).toBe(190776);
    expect(parseFarmacityNumber("12,5")).toBe(12.5);
    expect(parseFarmacityNumber("190,776")).toBe(190776);
  });

  test("returns 0 for empty or invalid values", () => {
    expect(parseFarmacityNumber("")).toBe(0);
    expect(parseFarmacityNumber("sin precio")).toBe(0);
    expect(parseFarmacityNumber(undefined)).toBe(0);
    expect(parseFarmacityNumber(Number.NaN)).toBe(0);
    expect(parseFarmacityNumber(Number.POSITIVE_INFINITY)).toBe(0);
  });
});

describe("formatPotency", () => {
  test("formats single and combination strengths", () => {
    expect(formatPotency(30)).toBe("30 mg");
    expect(formatPotency("2,5")).toBe("2.5 mg");
    expect(formatPotency("8/90")).toBe("8 mg / 90 mg");
    expect(formatPotency("0/90")).toBe("90 mg");
  });

  test("returns null for a missing or zero strength", () => {
    expect(formatPotency(0)).toBeNull();
    expect(formatPotency(undefined)).toBeNull();
  });
});

describe("extractStrength", () => {
  test("extracts the strength from the first text that has one", () => {
    expect(extractStrength(undefined, "CONCERTA 54 MG COMP.X 30")).toBe("54 mg");
    expect(extractStrength("Sin Clasificar", "STRATTERA 2,5mg")).toBe("2.5 mg");
  });

  test("skips zero strengths", () => {
    expect(extractStrength("0 mg", "CONCERTA 54 MG")).toBe("54 mg");
  });

  test("returns null when no text has a strength", () => {
    expect(extractStrength("Sin Clasificar")).toBeNull();
  });
});

describe("toMedication", () => {
  test("maps Farmacity fields to a medication", () => {
    expect(toMedication({ ...CONCERTA, barCode: "779" }, DATE)).toEqual({
      code: "779",
      name: "metilfenidato",
      brand: "CONCERTA 54 MG COMP.X 30",
      laboratory: "JANSSEN",
      source: "farmacity",
      price: 100000,
      presentation: "No especificado",
      strength: "54 mg",
      updatedAt: DATE,
    });
  });

  test("falls back to the id and then to a stable generated code", () => {
    const a = toMedication(CONCERTA, DATE);
    const b = toMedication(CONCERTA, "2026-09-27T00:00:00.000Z");

    expect(toMedication({ ...CONCERTA, id: 42 }, DATE).code).toBe("42");
    expect(a.code).toBe(b.code);
    expect(a.code).toStartWith("med_");
  });

  test("reads the strength from text when the package has none", () => {
    const withoutPackage = { ...CONCERTA, package: undefined };
    expect(toMedication(withoutPackage, DATE).strength).toBe("54 mg");
  });

  test("fills placeholders for an empty result", () => {
    expect(toMedication({}, DATE)).toMatchObject({
      name: "Medicamento",
      brand: "Sin marca",
      laboratory: "No especificado",
      price: 0,
      strength: "No especificado",
    });
  });
});

describe("isAdhdMedication", () => {
  test("rejects excluded active ingredients", () => {
    const base = toMedication(CONCERTA, DATE);

    expect(isAdhdMedication(base)).toBe(true);
    expect(isAdhdMedication({ ...base, name: "Naltrexona+Bupropion" })).toBe(false);
  });
});

describe("dedupeMedications", () => {
  test("keeps the priced entry among duplicates", () => {
    const base = toMedication({ ...CONCERTA, publicPrice: undefined }, DATE);
    const priced = { ...base, code: "2", price: 5000 };

    expect(dedupeMedications([base, priced])).toEqual([priced]);
    expect(dedupeMedications([priced, base])).toEqual([priced]);
  });

  test("keeps different strengths and sorts by name", () => {
    const methylphenidate = toMedication(CONCERTA, DATE);
    const otherStrength = { ...methylphenidate, code: "2", strength: "36 mg" };
    const atomoxetine = { ...methylphenidate, code: "3", name: "atomoxetina" };

    expect(
      dedupeMedications([methylphenidate, otherStrength, atomoxetine]).map((m) => m.code)
    ).toEqual(["3", methylphenidate.code, "2"]);
  });
});
