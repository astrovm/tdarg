import { describe, expect, test } from "bun:test";

import type { Specialist } from "./data";
import {
  formatLocation,
  matchesProvince,
  matchesQuery,
  provinceOptions,
  specialtyOptions,
  typeLabel,
  UNKNOWN_PROVINCE,
} from "./filters";

function specialist(overrides: Partial<Specialist>): Specialist {
  return {
    name: "Dra. Ana Pérez",
    specialty: "Psiquiatra",
    provinces: ["CABA"],
    city: "Palermo",
    address: "Consultar",
    phone: "Consultar",
    email: "Consultar",
    hospital: "Hospital Italiano",
    experience: "TDAH adultos",
    insurance: ["OSDE"],
    hours: "Consultar",
    type: "private",
    ...overrides,
  };
}

const TWO_PROVINCES = specialist({ provinces: ["CABA", "Buenos Aires"] });
const NO_PROVINCE = specialist({ name: "Dr. Sin Ubicación", provinces: [], city: "Consultar" });

describe("provinceOptions", () => {
  test("counts each province a specialist works in", () => {
    expect(provinceOptions([TWO_PROVINCES, specialist({})])).toEqual([
      { value: "Buenos Aires", label: "Buenos Aires", count: 1 },
      { value: "CABA", label: "CABA", count: 2 },
    ]);
  });

  test("adds an option for specialists without a known province", () => {
    expect(provinceOptions([specialist({}), NO_PROVINCE]).at(-1)).toEqual({
      value: UNKNOWN_PROVINCE,
      label: "Ubicación a confirmar",
      count: 1,
    });
  });
});

describe("specialtyOptions", () => {
  test("counts specialists per specialty", () => {
    expect(
      specialtyOptions([specialist({}), specialist({ specialty: "Neurólogo" }), specialist({})]),
    ).toEqual([
      { value: "Neurólogo", label: "Neurólogo", count: 1 },
      { value: "Psiquiatra", label: "Psiquiatra", count: 2 },
    ]);
  });
});

describe("matchesProvince", () => {
  test("matches every province of a specialist", () => {
    expect(matchesProvince(TWO_PROVINCES, "CABA")).toBe(true);
    expect(matchesProvince(TWO_PROVINCES, "Buenos Aires")).toBe(true);
    expect(matchesProvince(TWO_PROVINCES, "Córdoba")).toBe(false);
  });

  test("matches everyone for all provinces", () => {
    expect(matchesProvince(NO_PROVINCE, "all")).toBe(true);
  });

  test("matches only specialists without a province for the unknown option", () => {
    expect(matchesProvince(NO_PROVINCE, UNKNOWN_PROVINCE)).toBe(true);
    expect(matchesProvince(TWO_PROVINCES, UNKNOWN_PROVINCE)).toBe(false);
  });
});

describe("matchesQuery", () => {
  test("searches name, city, provinces and hospital ignoring accents", () => {
    expect(matchesQuery(specialist({}), "perez")).toBe(true);
    expect(matchesQuery(specialist({}), "PALERMO")).toBe(true);
    expect(matchesQuery(TWO_PROVINCES, "buenos")).toBe(true);
    expect(matchesQuery(specialist({}), "italiano")).toBe(true);
    expect(matchesQuery(specialist({}), "rosario")).toBe(false);
  });

  test("matches everyone for an empty query", () => {
    expect(matchesQuery(specialist({}), "  ")).toBe(true);
  });
});

describe("formatLocation", () => {
  test("joins city and provinces without repeats or placeholders", () => {
    expect(formatLocation(TWO_PROVINCES)).toBe("Palermo, CABA, Buenos Aires");
    expect(formatLocation(specialist({ city: "CABA" }))).toBe("CABA");
  });

  test("says the location is unknown when there is none", () => {
    expect(formatLocation(NO_PROVINCE)).toBe("Ubicación a confirmar");
  });
});

describe("typeLabel", () => {
  test("returns the Spanish label for the specialist type", () => {
    expect(typeLabel(specialist({ type: "specialized_center" }))).toBe("Centro especializado");
  });
});
