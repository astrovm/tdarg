// Helpers para mostrar los datos de contacto de especialistas.
// Los teléfonos en los datos están en formato "+54 [9] <área> <número>";
// el 9 marca un celular (necesario para WhatsApp en números móviles).

export type Phone = {
  label: string;
  href: string;
  mobile: boolean;
};

// "Consultar", "Consultar ubicación específica", etc. no son datos reales
export function isPlaceholder(value?: string | null): boolean {
  const text = value?.trim() ?? "";
  return text === "" || /^consult(ar|a privada)/i.test(text);
}

export function parsePhones(value?: string | null): Phone[] {
  if (isPlaceholder(value)) {
    return [];
  }

  return value!
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((label) => {
      // "(interno 4847)" se muestra pero no se marca
      const dialable = label.replace(/\(.*?\)/g, "");
      const digits = dialable.replace(/\D/g, "");
      const international = dialable.trim().startsWith("+");

      return {
        label,
        href: `tel:${international ? "+" : ""}${digits}`,
        mobile: /^\+54\s*9/.test(dialable.trim()),
      };
    })
    .filter((phone) => phone.href.length > "tel:".length);
}

// Devuelve el link de WhatsApp solo si el número es argentino completo
// (54 + 10 dígitos, con o sin el 9 de celular).
export function whatsappUrl(value?: string | null): string | null {
  const [phone] = parsePhones(value);
  if (!phone) {
    return null;
  }

  const digits = phone.href.replace(/\D/g, "");
  if (!/^54(9)?\d{10}$/.test(digits)) {
    return null;
  }

  return `https://wa.me/${digits}`;
}

// Número de WhatsApp: el explícito o, si no hay, el primer celular de la lista.
export function especialistaWhatsapp(especialista: {
  whatsapp?: string;
  telefono: string;
}): string | null {
  if (especialista.whatsapp) {
    return whatsappUrl(especialista.whatsapp);
  }

  const mobile = parsePhones(especialista.telefono).find((phone) => phone.mobile);
  return mobile ? whatsappUrl(mobile.label) : null;
}

export function normalizeSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}
