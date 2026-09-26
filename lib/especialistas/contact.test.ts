import { describe, expect, test } from "bun:test";

import especialistas from "./data";
import {
  especialistaWhatsapp,
  isPlaceholder,
  normalizeSearch,
  parsePhones,
  whatsappUrl,
} from "./contact";

describe("parsePhones", () => {
  test("separa varios números y detecta celulares", () => {
    expect(parsePhones("+54 11 4452-8765 | +54 9 11 6627-3265")).toEqual([
      { label: "+54 11 4452-8765", href: "tel:+541144528765", mobile: false },
      { label: "+54 9 11 6627-3265", href: "tel:+5491166273265", mobile: true },
    ]);
  });

  test("ignora el interno al marcar", () => {
    expect(parsePhones("+54 11 4909-4100 (interno 4847)")[0].href).toBe(
      "tel:+541149094100",
    );
  });

  test("números 0810 quedan sin prefijo internacional", () => {
    expect(parsePhones("0810-266-4203")[0]).toEqual({
      label: "0810-266-4203",
      href: "tel:08102664203",
      mobile: false,
    });
  });

  test("Consultar no es un teléfono", () => {
    expect(parsePhones("Consultar")).toEqual([]);
    expect(isPlaceholder("Consultar ubicación específica")).toBe(true);
    expect(isPlaceholder("Consulta privada")).toBe(true);
    expect(isPlaceholder("Hospital Italiano")).toBe(false);
  });
});

describe("whatsapp", () => {
  test("arma links válidos", () => {
    expect(whatsappUrl("+54 9 11 5063-7542")).toBe("https://wa.me/5491150637542");
    expect(whatsappUrl("+54 11 4412-0880")).toBe("https://wa.me/541144120880");
  });

  test("rechaza números incompletos", () => {
    expect(whatsappUrl("1550637542")).toBeNull();
    expect(whatsappUrl("0810-266-4203")).toBeNull();
  });

  test("usa el primer celular si no hay WhatsApp explícito", () => {
    expect(
      especialistaWhatsapp({ telefono: "+54 11 4452-8765 | +54 9 11 6627-3265" }),
    ).toBe("https://wa.me/5491166273265");
    expect(especialistaWhatsapp({ telefono: "+54 11 5777-3200" })).toBeNull();
  });

  test("todos los WhatsApp cargados generan un link válido", () => {
    const invalid = especialistas
      .filter((e) => e.whatsapp && !whatsappUrl(e.whatsapp))
      .map((e) => `${e.nombre}: ${e.whatsapp}`);
    expect(invalid).toEqual([]);
  });
});

test("normalizeSearch ignora tildes y mayúsculas", () => {
  expect(normalizeSearch("Córdoba")).toBe("cordoba");
});
