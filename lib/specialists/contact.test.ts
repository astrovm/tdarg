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
});

describe("whatsappUrl", () => {
  test("builds wa.me links from full numbers", () => {
    expect(whatsappUrl("+54 9 11 5063-7542")).toBe("https://wa.me/5491150637542");
    expect(whatsappUrl("+54 11 4412-0880")).toBe("https://wa.me/541144120880");
  });

  test("returns null for incomplete numbers", () => {
    expect(whatsappUrl("1550637542")).toBeNull();
    expect(whatsappUrl("0810-266-4203")).toBeNull();
  });
});

describe("specialistWhatsapp", () => {
  test("falls back to the first mobile number", () => {
    expect(
      specialistWhatsapp({ telefono: "+54 11 4452-8765 | +54 9 11 6627-3265" }),
    ).toBe("https://wa.me/5491166273265");
    expect(specialistWhatsapp({ telefono: "+54 11 5777-3200" })).toBeNull();
  });

});

describe("normalizeSearch", () => {
  test("ignores accents and case", () => {
    expect(normalizeSearch("Córdoba")).toBe("cordoba");
  });
});
