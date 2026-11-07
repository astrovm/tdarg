import { describe, expect, test } from "bun:test";

import {
  specialistWhatsapp,
  isPlaceholder,
  normalizeSearch,
  parsePhones,
  whatsappUrl,
} from "./contact";

describe("parsePhones", () => {
  test("splits multiple numbers and detects mobiles", () => {
    expect(parsePhones("+54 11 4452-8765 | +54 9 11 6627-3265")).toEqual([
      { label: "+54 11 4452-8765", href: "tel:+541144528765", mobile: false },
      { label: "+54 9 11 6627-3265", href: "tel:+5491166273265", mobile: true },
    ]);
  });

  test("ignores the extension when dialing", () => {
    expect(parsePhones("+54 11 4909-4100 (interno 4847)")[0].href).toBe(
      "tel:+541149094100",
    );
  });

  test("dials 0810 numbers without the international prefix", () => {
    expect(parsePhones("0810-266-4203")[0]).toEqual({
      label: "0810-266-4203",
      href: "tel:08102664203",
      mobile: false,
    });
  });

  test("returns no numbers for a placeholder", () => {
    expect(parsePhones("Consultar")).toEqual([]);
  });
});

describe("isPlaceholder", () => {
  test("detects placeholder text", () => {
    expect(isPlaceholder("Consultar ubicación específica")).toBe(true);
    expect(isPlaceholder("Consulta privada")).toBe(true);
    expect(isPlaceholder("Hospital Italiano")).toBe(false);
  });

  test("detects every placeholder in the data, ignoring case, accents and spaces", () => {
    for (const value of [
      "",
      "  ",
      null,
      undefined,
      "Consultar",
      " CONSULTAR ",
      "Consulta privada",
      "Consultar ubicación",
      "Consultar ubicación específica",
      "consultar ubicacion especifica",
    ]) {
      expect(isPlaceholder(value)).toBe(true);
    }
  });

  test("keeps real text that only starts with or contains a placeholder", () => {
    for (const value of [
      "Consulta privada virtual",
      "Consulta privada online",
      "Consulta privada; consultar reintegro",
      "Lun-Vie, consultar horarios",
      "Consultar con el hospital por turnos",
      "Consultorio",
    ]) {
      expect(isPlaceholder(value)).toBe(false);
    }
  });
});

describe("whatsappUrl", () => {
  test("builds wa.me links from full numbers", () => {
    expect(whatsappUrl("+54 9 11 5063-7542")).toBe("https://wa.me/5491150637542");
    expect(whatsappUrl("+54 11 4412-0880")).toBe("https://wa.me/541144120880");
  });

  test("returns null without a phone number", () => {
    expect(whatsappUrl("Consultar")).toBeNull();
    expect(whatsappUrl(undefined)).toBeNull();
  });

  test("returns null for incomplete numbers", () => {
    expect(whatsappUrl("1550637542")).toBeNull();
    expect(whatsappUrl("0810-266-4203")).toBeNull();
    expect(whatsappUrl("+54 11 4412-088")).toBeNull();
    expect(whatsappUrl("+54 221 523-657")).toBeNull();
  });

  test("returns null for a mobile missing a digit, since the 9 is not part of the 10", () => {
    expect(whatsappUrl("+54 9 11 5063-754")).toBeNull();
    expect(whatsappUrl("+54 9 221 552-699")).toBeNull();
  });

  test("returns null for numbers that are too long or prefixed", () => {
    expect(whatsappUrl("+54 9 11 5063-75421")).toBeNull();
    expect(whatsappUrl("+54 11 4412-08801")).toBeNull();
    expect(whatsappUrl("+1 54 9 11 5063-7542")).toBeNull();
  });

  test("returns null when the area code cannot exist", () => {
    // Area codes start with 11, 2 or 3; a 9 right after 54 is the mobile marker, not an area
    expect(whatsappUrl("+54 99 5063-75421")).toBeNull();
    expect(whatsappUrl("+54 9 99 5063-7542")).toBeNull();
    expect(whatsappUrl("+54 4 11 5063-7542")).toBeNull();
  });

  test("builds links for landlines and mobiles outside Buenos Aires", () => {
    expect(whatsappUrl("+54 221 523-6577")).toBe("https://wa.me/542215236577");
    expect(whatsappUrl("+54 9 221 552-6999")).toBe("https://wa.me/5492215526999");
    expect(whatsappUrl("+54 9 351 555-1234")).toBe("https://wa.me/5493515551234");
  });
});

describe("specialistWhatsapp", () => {
  test("falls back to the first mobile number", () => {
    expect(
      specialistWhatsapp({ phone: "+54 11 4452-8765 | +54 9 11 6627-3265" }),
    ).toBe("https://wa.me/5491166273265");
    expect(specialistWhatsapp({ phone: "+54 11 5777-3200" })).toBeNull();
  });

});

describe("normalizeSearch", () => {
  test("ignores accents and case", () => {
    expect(normalizeSearch("Córdoba")).toBe("cordoba");
  });
});
