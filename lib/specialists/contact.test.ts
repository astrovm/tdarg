import { describe, expect, test } from "bun:test";

import specialists from "./data";
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

  test("0810 numbers get no international prefix", () => {
    expect(parsePhones("0810-266-4203")[0]).toEqual({
      label: "0810-266-4203",
      href: "tel:08102664203",
      mobile: false,
    });
  });

  test("Consultar is not a phone number", () => {
    expect(parsePhones("Consultar")).toEqual([]);
    expect(isPlaceholder("Consultar ubicación específica")).toBe(true);
    expect(isPlaceholder("Consulta privada")).toBe(true);
    expect(isPlaceholder("Hospital Italiano")).toBe(false);
  });
});

describe("whatsapp", () => {
  test("builds valid links", () => {
    expect(whatsappUrl("+54 9 11 5063-7542")).toBe("https://wa.me/5491150637542");
    expect(whatsappUrl("+54 11 4412-0880")).toBe("https://wa.me/541144120880");
  });

  test("rejects incomplete numbers", () => {
    expect(whatsappUrl("1550637542")).toBeNull();
    expect(whatsappUrl("0810-266-4203")).toBeNull();
  });

  test("uses the first mobile when there is no explicit WhatsApp", () => {
    expect(
      specialistWhatsapp({ telefono: "+54 11 4452-8765 | +54 9 11 6627-3265" }),
    ).toBe("https://wa.me/5491166273265");
    expect(specialistWhatsapp({ telefono: "+54 11 5777-3200" })).toBeNull();
  });

  test("every WhatsApp number in the data builds a valid link", () => {
    const invalid = specialists
      .filter((e) => e.whatsapp && !whatsappUrl(e.whatsapp))
      .map((e) => `${e.nombre}: ${e.whatsapp}`);
    expect(invalid).toEqual([]);
  });
});

test("normalizeSearch ignores accents and case", () => {
  expect(normalizeSearch("Córdoba")).toBe("cordoba");
});
