import type { Medication } from "./types";

export type GroupedMedications = {
  stimulants: Record<string, Medication[]>;
  nonStimulants: Record<string, Medication[]>;
  offLabel: Record<string, Medication[]>;
};

export function formatPrice(price: number, { decimals = 2 } = {}) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(price);
}

export function priceWithCoverage(price: number, discountRate = 0.4) {
  return price * (1 - discountRate);
}

export function extractMg(strength: string): number | null {
  if (strength.includes("/")) {
    return null;
  }

  const match = strength.match(/(\d+(?:[.,]\d+)?)\s*mg\b/i);

  if (!match) {
    return null;
  }

  const mg = Number.parseFloat(match[1].replace(",", "."));
  return Number.isFinite(mg) && mg > 0 ? mg : null;
}

export function extractUnits(...texts: string[]): number | null {
  const match = texts
    .map((text) =>
      text.match(
        /\b(?:x|por)\s*(\d+)\b|\b(\d+)\s*(?:comp|comprimidos|caps|capsulas|cápsulas|tab|tabletas)\b/i
      )
    )
    .find(Boolean);

  if (!match) {
    return null;
  }

  const units = Number.parseInt(match[1] || match[2], 10);
  return Number.isFinite(units) && units > 0 ? units : null;
}

export function pricePerMg(medication: Medication): number | null {
  const mg = extractMg(medication.strength);
  const units = extractUnits(
    medication.presentation,
    medication.brand,
    medication.name
  );

  if (!mg || !units || medication.price <= 0) {
    return null;
  }

  return medication.price / (mg * units);
}

function formatKnownToken(token: string) {
  const normalized = token
    .replace(/\bc#ps?\.?/gi, "capsulas ")
    .replace(/\bcápsulas\b/gi, "capsulas")
    .replace(/\bcomp\./gi, "comprimidos ")
    .replace(/\brec\./gi, "recubiertos ")
    .replace(/\blib\./gi, "liberacion ")
    .replace(/\bpr\./gi, "prolongada ")
    .replace(/\bcaps?\.?(?=\s|x|$)/gi, "capsulas ")
    .replace(/\bcomp\.?(?=\s|x|$)/gi, "comprimidos ")
    .replace(/\brec\.?(?=\s|x|$)/gi, "recubiertos ")
    .replace(/\blib\.?(?=\s|x|$)/gi, "liberacion ")
    .replace(/\bpr\.?(?=\s|x|$)/gi, "prolongada ")
    .replace(/(\d)mg\b/gi, "$1 mg")
    .replace(/(^|\s)x\s*(\d+)/gi, "$1x $2")
    .replace(/\bx(\d+)/gi, "x $1")
    .replace(/\s+/g, " ")
    .trim();

  return normalized.replace(/\bmg\b/gi, "mg");
}

function toDisplayCase(text: string) {
  return text
    .toLowerCase()
    .replace(/\b\p{L}/gu, (letter) => letter.toUpperCase())
    .replace(/\bMg\b/g, "mg")
    .replace(/\bX\b/g, "x");
}

function withAccents(text: string) {
  return text
    .replace(/\b([Cc])apsulas\b/g, "$1ápsulas")
    .replace(/\b([Ll])iberacion\b/g, "$1iberación");
}

export function formatMedicationName(brand: string) {
  return withAccents(toDisplayCase(formatKnownToken(brand)));
}

// Brand name without dose or presentation: "RITALINA LA  10 MG C#PS.X 30"
// -> "Ritalina LA", "RUBIFEN-10  COMP.X 30" -> "Rubifen".
export function brandName(text: string) {
  const brand = text
    .split(/[\s-]*\d|\s+(?:comp|caps?|c#ps?)\b/i)[0]
    .replace(/\s+/g, " ")
    .trim();

  return brand
    .split(" ")
    .map((word) =>
      word.length <= 2
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ");
}

export function formatMedicationPresentation(medication: Medication) {
  const source = [medication.presentation, medication.brand, medication.name]
    .find((text) => extractUnits(text));
  const units = extractUnits(
    medication.presentation,
    medication.brand,
    medication.name
  );

  if (!source || !units) {
    return medication.presentation;
  }

  const normalized = formatKnownToken(source);
  const lower = normalized.toLowerCase();

  if (lower.includes("capsulas")) {
    return `Cápsulas x ${units}`;
  }

  if (lower.includes("comprimidos")) {
    if (lower.includes("recubiertos") && lower.includes("liberacion") && lower.includes("prolongada")) {
      return `Comprimidos de liberación prolongada x ${units}`;
    }

    return `Comprimidos x ${units}`;
  }

  return withAccents(toDisplayCase(normalized));
}

// Active ingredients as Farmacity names them, by approval group. Armodafinil
// comes before modafinil because "armodafinilo" contains "modafinilo".
const APPROVAL_GROUPS: Record<keyof GroupedMedications, string[]> = {
  stimulants: ["lisdexanfetamina", "metilfenidato"],
  nonStimulants: ["atomoxetina"],
  offLabel: ["armodafinilo", "modafinilo", "bupropion"],
};

export function groupByApproval(medications: Medication[]): GroupedMedications {
  const groups: GroupedMedications = { stimulants: {}, nonStimulants: {}, offLabel: {} };

  for (const med of medications) {
    const name = med.name.toLowerCase();
    for (const group of Object.keys(APPROVAL_GROUPS) as Array<keyof GroupedMedications>) {
      const ingredient = APPROVAL_GROUPS[group].find((i) => name.includes(i));
      if (ingredient) {
        (groups[group][ingredient] ??= []).push(med);
        break;
      }
    }
  }

  return groups;
}
