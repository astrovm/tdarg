import { isPlaceholder, normalizeSearch } from "./contact";
import { SPECIALIST_TYPE_LABELS, type Specialist } from "./data";

// Filter value for specialists whose province is not known yet
export const UNKNOWN_PROVINCE = "unknown";
const UNKNOWN_PROVINCE_LABEL = "Ubicación a confirmar";

export type FilterOption = { value: string; label: string; count: number };

function countBy(values: string[]): Array<[string, number]> {
  const counts = new Map<string, number>();
  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b, "es"));
}

// One option per province, plus one for specialists without a known province,
// so every specialist can be reached from the province filter.
export function provinceOptions(specialists: Specialist[]): FilterOption[] {
  const options = countBy(specialists.flatMap((s) => s.provinces)).map(
    ([value, count]) => ({ value, label: value, count }),
  );
  const unknown = specialists.filter((s) => s.provinces.length === 0).length;
  return unknown > 0
    ? [...options, { value: UNKNOWN_PROVINCE, label: UNKNOWN_PROVINCE_LABEL, count: unknown }]
    : options;
}

export function specialtyOptions(specialists: Specialist[]): FilterOption[] {
  return countBy(specialists.map((s) => s.specialty)).map(([value, count]) => ({
    value,
    label: value,
    count,
  }));
}

export function matchesProvince(specialist: Specialist, province: string): boolean {
  if (province === "all") {
    return true;
  }
  if (province === UNKNOWN_PROVINCE) {
    return specialist.provinces.length === 0;
  }
  return specialist.provinces.includes(province);
}

export function matchesQuery(specialist: Specialist, query: string): boolean {
  const normalizedQuery = normalizeSearch(query.trim());
  return (
    !normalizedQuery ||
    [specialist.name, specialist.city, ...specialist.provinces, specialist.hospital].some(
      (field) => normalizeSearch(field).includes(normalizedQuery),
    )
  );
}

export function formatLocation(specialist: Specialist): string {
  const parts = [specialist.city, ...specialist.provinces].filter(
    (part, index, all) => !isPlaceholder(part) && all.indexOf(part) === index,
  );
  return parts.length > 0 ? parts.join(", ") : UNKNOWN_PROVINCE_LABEL;
}

export function typeLabel(specialist: Specialist): string {
  return SPECIALIST_TYPE_LABELS[specialist.type];
}
