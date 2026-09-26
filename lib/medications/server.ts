import { unstable_cache } from "next/cache";

import {
  toMedication,
  dedupeMedications,
  isAdhdMedication,
  type FarmacityMed,
} from "./farmacity";
import type { PriceSnapshot } from "./types";

const FARMACITY_API =
  "https://appfarmacitymicroservice-prod.azurewebsites.net/api/Medicine/search";
const TIMEOUT_MS = 25_000;
export const PRICES_REVALIDATE_SECONDS = 15 * 60;

const SEARCH_TERMS = [
  "atomoxetina",
  "lisdexanfetamina",
  "metilfenidato",
  "modafinilo",
  "armodafinilo",
  "bupropion",
];

async function searchFarmacity(term: string): Promise<FarmacityMed[]> {
  const response = await fetch(
    `${FARMACITY_API}?filter=${encodeURIComponent(term)}`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; TDAH-Argentina/1.0)",
        Origin: "https://www.farmacity.com",
        Referer: "https://www.farmacity.com/",
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Farmacity returned ${response.status} for ${term}`);
  }

  const body: unknown = await response.json();
  const results = Array.isArray(body) ? body : (body as { data?: unknown })?.data;
  return Array.isArray(results) ? (results as FarmacityMed[]) : [];
}

async function fetchFarmacityPrices(): Promise<Omit<PriceSnapshot, "stale">> {
  const updatedAt = new Date().toISOString();
  const results = await Promise.allSettled(SEARCH_TERMS.map(searchFarmacity));

  const failures = results.filter((r) => r.status === "rejected");
  for (const failure of failures) {
    console.warn("Farmacity search failed:", (failure as PromiseRejectedResult).reason);
  }

  const medications = dedupeMedications(
    results
      .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
      .map((med) => toMedication(med, updatedAt))
  ).filter(isAdhdMedication);

  // An error is not cached, so the next request tries again
  if (medications.length === 0) {
    throw new Error("No medications found");
  }

  return { data: medications, updatedAt };
}

// Cache shared across instances (Next Data Cache), not an in-memory variable
const fetchFarmacityPricesCached = unstable_cache(fetchFarmacityPrices, ["farmacity-prices-v3"], {
  revalidate: PRICES_REVALIDATE_SECONDS,
});

// Last good prices on this instance, for when Farmacity fails
let lastSnapshot: Omit<PriceSnapshot, "stale"> | null = null;
// One request in flight per instance: concurrent callers wait on the same one
let inFlight: Promise<PriceSnapshot> | null = null;

async function loadPrices(): Promise<PriceSnapshot> {
  try {
    const snapshot = await fetchFarmacityPricesCached();
    lastSnapshot = snapshot;
    return { ...snapshot, stale: false };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Loading prices failed:", error);

    if (lastSnapshot) {
      return { ...lastSnapshot, stale: true, error: message };
    }

    return { data: [], updatedAt: new Date().toISOString(), stale: true, error: message };
  }
}

export function getPrices(): Promise<PriceSnapshot> {
  inFlight ??= loadPrices().finally(() => {
    inFlight = null;
  });
  return inFlight;
}
