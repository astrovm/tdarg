// Helpers for displaying specialist contact details.
// Phone numbers in the data use the format "+54 [9] <area> <number>";
// the 9 marks a mobile number (required for WhatsApp links).

export type Phone = {
  label: string;
  href: string;
  mobile: boolean;
};

// The data fills a field it has no answer for with one of these texts. Matching the whole
// text, not its start, keeps real notes such as "Consulta privada virtual" visible.
const PLACEHOLDERS = new Set([
  "consultar",
  "consulta privada",
  "consultar ubicacion",
  "consultar ubicacion especifica",
]);

export function isPlaceholder(value?: string | null): boolean {
  const text = normalizeSearch(value?.trim() ?? "");
  return text === "" || PLACEHOLDERS.has(text);
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

// Argentine national numbers have 10 digits including the area code, and the area code is 11
// (Buenos Aires area) or starts with 2 or 3. WhatsApp wants a 9 between 54 and the area code
// for mobiles. The 9 is not one of the 10 digits and is never the start of an area code, so
// "54 9 11 5063-754" (a digit short) cannot pass as a landline either.
const WHATSAPP_NUMBER = /^54(?:9)?(?:11\d{8}|[23]\d{9})$/;

// Returns a WhatsApp link only for a complete Argentine number (with or without the mobile 9).
export function whatsappUrl(value?: string | null): string | null {
  const [phone] = parsePhones(value);
  if (!phone) {
    return null;
  }

  const digits = phone.href.replace(/\D/g, "");
  if (!WHATSAPP_NUMBER.test(digits)) {
    return null;
  }

  return `https://wa.me/${digits}`;
}

// WhatsApp number: the explicit one or, if missing, the first mobile in the list.
export function specialistWhatsapp(specialist: {
  whatsapp?: string;
  phone: string;
}): string | null {
  if (specialist.whatsapp) {
    return whatsappUrl(specialist.whatsapp);
  }

  const mobile = parsePhones(specialist.phone).find((phone) => phone.mobile);
  return mobile ? whatsappUrl(mobile.label) : null;
}

export function normalizeSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}
