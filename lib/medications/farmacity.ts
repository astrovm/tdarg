import type { Medication } from "./types";

// Shape of Farmacity search results (only the fields we use)
export interface FarmacityMed {
  formula?: { description?: string };
  description?: string;
  medicalLaboratory?: { abbreviation?: string };
  publicPrice?: string | number;
  package?: {
    packageDescription?: { description?: string };
    potency?: string | number;
  };
  barCode?: string;
  id?: string | number;
}

export function parseFarmacityNumber(value: string | number | undefined): number {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (!value) {
    return 0;
  }

  const cleaned = value.toString().replace(/[^\d.,-]/g, "").trim();
  if (!cleaned) {
    return 0;
  }

  const lastDot = cleaned.lastIndexOf(".");
  const lastComma = cleaned.lastIndexOf(",");

  let normalized = cleaned;

  if (lastDot !== -1 && lastComma !== -1) {
    const decimalSeparator = lastDot > lastComma ? "." : ",";
    const thousandsSeparator = decimalSeparator === "." ? "," : ".";

    normalized = normalized
      .replaceAll(thousandsSeparator, "")
      .replace(decimalSeparator, ".");
  } else if (lastComma !== -1) {
    const decimals = cleaned.length - lastComma - 1;
    normalized =
      decimals <= 2
        ? cleaned.replace(/\./g, "").replace(",", ".")
        : cleaned.replace(/,/g, "");
  } else if (lastDot !== -1) {
    const decimals = cleaned.length - lastDot - 1;
    normalized = decimals <= 2 ? cleaned.replace(/,/g, "") : cleaned.replace(/\./g, "");
  }

  const heading = Number.parseFloat(normalized);
  return Number.isFinite(heading) ? heading : 0;
}

function formatMg(value: number): string {
  return `${Number.isInteger(value) ? value : value.toFixed(2).replace(/\.?0+$/, "")} mg`;
}

export function extractStrength(...texts: Array<string | undefined>): string | null {
  for (const text of texts) {
    const match = text?.match(/(\d+(?:[.,]\d+)?)\s*mg\b/i);
    if (!match) {
      continue;
    }

    const value = parseFarmacityNumber(match[1]);
    if (value > 0) {
      return formatMg(value);
    }
  }

  return null;
}

export function formatPotency(value: string | number | undefined): string | null {
  if (typeof value === "string" && value.includes("/")) {
    const parts = value
      .split("/")
      .map((part) => parseFarmacityNumber(part))
      .filter((part) => part > 0);

    if (parts.length > 1) {
      return parts.map(formatMg).join(" / ");
    }
  }

  const potency = parseFarmacityNumber(value);
  return potency > 0 ? formatMg(potency) : null;
}

// Stable code for when Farmacity sends no barcode or id, so React keys do not
// change between updates.
function fallbackCode(...parts: string[]): string {
  let hash = 0;
  for (const char of parts.join("|")) {
    hash = (Math.imul(31, hash) + char.charCodeAt(0)) | 0;
  }
  return `med_${(hash >>> 0).toString(36)}`;
}

export function toMedication(med: FarmacityMed, updatedAt: string): Medication {
  const name = (med.formula?.description || med.description || "Medicamento").trim();
  const brand = (med.description || "Sin marca").trim();
  const laboratory = (med.medicalLaboratory?.abbreviation || "No especificado").trim();
  const price = parseFarmacityNumber(med.publicPrice);
  const presentation = (
    med.package?.packageDescription?.description || "No especificado"
  ).trim();
  const strength = (
    formatPotency(med.package?.potency) ||
    extractStrength(presentation, brand, name) ||
    "No especificado"
  ).trim();

  return {
    code:
      med.barCode ||
      med.id?.toString() ||
      fallbackCode(name, brand, laboratory, presentation, strength),
    name,
    brand,
    laboratory,
    source: "farmacity",
    price,
    presentation,
    strength,
    updatedAt,
  };
}

// Active ingredients Farmacity returns in searches that are not ADHD
// treatments (e.g. naltrexone+bupropion for obesity).
const EXCLUDED_INGREDIENTS = ["naltrexona"];

export function isAdhdMedication(med: Medication): boolean {
  const name = med.name.toLowerCase();
  return !EXCLUDED_INGREDIENTS.some((excluded) => name.includes(excluded));
}

export function dedupeMedications(medications: Medication[]): Medication[] {
  const byKey = new Map<string, Medication>();

  for (const med of medications) {
    const key = `${med.name}_${med.strength}_${med.laboratory}_${med.source}`
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

    if (!byKey.has(key) || med.price > 0) {
      byKey.set(key, med);
    }
  }

  return Array.from(byKey.values()).sort((a, b) => a.name.localeCompare(b.name));
}
