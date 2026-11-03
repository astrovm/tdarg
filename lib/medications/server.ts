import { unstable_cache } from "next/cache";

import {
  ALFABETA_PRICES_URL,
  INGREDIENT_IDS,
  dedupeMedications,
  parseProductPage,
  parseProductPages,
} from "./alfabeta";
import type { Medication, PriceSnapshot } from "./types";

const TIMEOUT_MS = 25_000;
// Alfa Beta updates prices once a day, so an hour is fresh enough
export const PRICES_REVALIDATE_SECONDS = 60 * 60;
// Pages fetched at the same time, to go easy on Alfa Beta
const CONCURRENCY = 4;

async function fetchPage(path: string): Promise<string> {
  const response = await fetch(new URL(path, ALFABETA_PRICES_URL), {
    headers: {
      Accept: "text/html",
      "User-Agent": "Mozilla/5.0 (compatible; Tdarg/1.0; +https://tdarg.4st.li)",
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Alfa Beta returned ${response.status} for ${path}`);
  }

  // Alfa Beta serves ISO-8859-1, and response.text() always decodes UTF-8
  const charset =
    /charset=([^;]+)/i.exec(response.headers.get("content-type") ?? "")?.[1]?.trim() ?? "utf-8";
  const bytes = await response.arrayBuffer();
  try {
    return new TextDecoder(charset).decode(bytes);
  } catch {
    return new TextDecoder().decode(bytes);
  }
}

// Runs fn over items with at most `limit` running at once
async function mapSettled<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<PromiseSettledResult<R>[]> {
  const results: PromiseSettledResult<R>[] = new Array(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const index = next++;
      try {
        results[index] = { status: "fulfilled", value: await fn(items[index]) };
      } catch (reason) {
        results[index] = { status: "rejected", reason };
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function fulfilled<R>(results: PromiseSettledResult<R>[]): R[] {
  for (const result of results) {
    if (result.status === "rejected") {
      console.warn("Alfa Beta page failed:", result.reason);
    }
  }
  return results.flatMap((r) => (r.status === "fulfilled" ? [r.value] : []));
}

// Uncached, for scripts that run outside Next
export async function fetchAlfabetaPrices(): Promise<Omit<PriceSnapshot, "stale">> {
  const updatedAt = new Date().toISOString();

  const lists = fulfilled(
    await mapSettled(Object.entries(INGREDIENT_IDS), CONCURRENCY, async ([ingredient, id]) => ({
      ingredient,
      pages: parseProductPages(await fetchPage(`lista_drogas_detalle.jsp?id=${id}`)),
    })),
  );

  const products = lists.flatMap(({ ingredient, pages }) =>
    pages.map((page) => ({ ingredient, page })),
  );

  const medications: Medication[] = dedupeMedications(
    fulfilled(
      await mapSettled(products, CONCURRENCY, async ({ ingredient, page }) =>
        parseProductPage(await fetchPage(page), ingredient, updatedAt),
      ),
    ).flat(),
  );

  // An error is not cached, so the next request tries again
  if (medications.length === 0) {
    throw new Error("No medications found");
  }

  return { data: medications, updatedAt };
}

// Cache shared across instances (Next Data Cache), not an in-memory variable
const fetchAlfabetaPricesCached = unstable_cache(fetchAlfabetaPrices, ["alfabeta-prices-v1"], {
  revalidate: PRICES_REVALIDATE_SECONDS,
});

// Last good prices on this instance, for when Alfa Beta fails
let lastSnapshot: Omit<PriceSnapshot, "stale"> | null = null;
// One request in flight per instance: concurrent callers wait on the same one
let inFlight: Promise<PriceSnapshot> | null = null;

async function loadPrices(): Promise<PriceSnapshot> {
  try {
    const snapshot = await fetchAlfabetaPricesCached();
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
