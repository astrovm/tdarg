// Helpers for displaying specialist contact details.
// Phone numbers in the data use the format "+54 [9] <area> <number>";
// the 9 marks a mobile number (required for WhatsApp links).

export type Phone = {
  label: string;
  href: string;
  mobile: boolean;
};

// "Consultar", "Consultar ubicación específica", etc. are not real data
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
      // "(interno 4847)" is displayed but not dialed
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

// Returns a WhatsApp link only for a complete Argentine number
// (54 + 10 digits, with or without the mobile 9).
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

// WhatsApp number: the explicit one or, if missing, the first mobile in the list.
export function specialistWhatsapp(specialist: {
  whatsapp?: string;
  telefono: string;
}): string | null {
  if (specialist.whatsapp) {
    return whatsappUrl(specialist.whatsapp);
  }

  const mobile = parsePhones(specialist.telefono).find((phone) => phone.mobile);
  return mobile ? whatsappUrl(mobile.label) : null;
}

export function normalizeSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}
