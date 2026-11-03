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

function plain(text: string) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function toDisplayCase(text: string) {
  return text
    .toLowerCase()
    .replace(/(\d)mg\b/g, "$1 mg")
    .replace(/\bx\s*(\d)/g, "x $1")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/(^|\s)(\p{L})/gu, (_, space: string, letter: string) => space + letter.toUpperCase())
    .replace(/\bMg\b/g, "mg")
    .replace(/\bX\b/g, "x");
}

// Brand name without dose or presentation: "RITALINA LA" -> "Ritalina LA",
// "RUBIFEN SR 20" -> "Rubifen SR", "RUBIFEN-10  COMP.X 30" -> "Rubifen".
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

// Package form and release from abbreviations like "18mg comp.rec.lib.pr.x30",
// "10 mg cáps.x 30" or "150mg comp.lib.ext.x 30"
function packageDescription(text: string): string | null {
  const t = plain(text);
  const form = /\bc(?:a|#)ps?\b|capsula/.test(t)
    ? "Cápsulas"
    : /\bcomp\b|comprimido/.test(t)
      ? "Comprimidos"
      : null;
  const release = /\blib\b\W*(?:pr|prol)\b|liberacion prolongada/.test(t)
    ? " de liberación prolongada"
    : /\blib\b\W*ext\b|liberacion extendida/.test(t)
      ? " de liberación extendida"
      : "";

  return form ? form + release : null;
}

export function formatMedicationPresentation(medication: Medication) {
  for (const text of [medication.presentation, medication.brand, medication.name]) {
    const units = extractUnits(text);
    if (units) {
      const description = packageDescription(text);
      return description ? `${description} x ${units}` : toDisplayCase(text);
    }
  }

  return medication.presentation;
}

// Active ingredients as the app names them, by approval group. Armodafinil
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
