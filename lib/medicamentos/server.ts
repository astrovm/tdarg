import { unstable_cache } from "next/cache";

import {
  convertirMedicamento,
  eliminarDuplicados,
  esMedicamentoTDAH,
  type FarmacityMed,
} from "./farmacity";
import type { PreciosSnapshot } from "./types";

const FARMACITY_API =
  "https://appfarmacitymicroservice-prod.azurewebsites.net/api/Medicine/search";
const TIMEOUT_MS = 25_000;
export const PRECIOS_REVALIDATE_SECONDS = 15 * 60;

const TERMINOS = [
  "atomoxetina",
  "lisdexanfetamina",
  "metilfenidato",
  "modafinilo",
  "armodafinilo",
  "bupropion",
];

async function buscarEnFarmacity(termino: string): Promise<FarmacityMed[]> {
  const response = await fetch(
    `${FARMACITY_API}?filter=${encodeURIComponent(termino)}`,
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
    throw new Error(`Farmacity respondió ${response.status} para ${termino}`);
  }

  const body: unknown = await response.json();
  const results = Array.isArray(body) ? body : (body as { data?: unknown })?.data;
  return Array.isArray(results) ? (results as FarmacityMed[]) : [];
}

async function consultarFarmacity(): Promise<Omit<PreciosSnapshot, "stale">> {
  const updatedAt = new Date().toISOString();
  const resultados = await Promise.allSettled(TERMINOS.map(buscarEnFarmacity));

  const fallidos = resultados.filter((r) => r.status === "rejected");
  for (const fallo of fallidos) {
    console.warn("Error consultando Farmacity:", (fallo as PromiseRejectedResult).reason);
  }

  const medicamentos = eliminarDuplicados(
    resultados
      .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
      .map((med) => convertirMedicamento(med, updatedAt))
  ).filter(esMedicamentoTDAH);

  // Un error no se guarda en la caché, así se vuelve a intentar en el próximo pedido
  if (medicamentos.length === 0) {
    throw new Error("No se encontraron medicamentos");
  }

  return { data: medicamentos, updatedAt };
}

// Caché compartida entre instancias (Data Cache de Next), no una variable en memoria
const consultarFarmacityCacheado = unstable_cache(consultarFarmacity, ["medicamentos-precios-v2"], {
  revalidate: PRECIOS_REVALIDATE_SECONDS,
});

// Últimos precios buenos de esta instancia, para cuando Farmacity falla
let ultimoSnapshot: Omit<PreciosSnapshot, "stale"> | null = null;
// Un solo pedido en curso por instancia: los pedidos simultáneos esperan el mismo
let enCurso: Promise<PreciosSnapshot> | null = null;

async function cargarPrecios(): Promise<PreciosSnapshot> {
  try {
    const snapshot = await consultarFarmacityCacheado();
    ultimoSnapshot = snapshot;
    return { ...snapshot, stale: false };
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : "Error desconocido";
    console.error("Error obteniendo precios:", error);

    if (ultimoSnapshot) {
      return { ...ultimoSnapshot, stale: true, error: mensaje };
    }

    return { data: [], updatedAt: new Date().toISOString(), stale: true, error: mensaje };
  }
}

export function getPrecios(): Promise<PreciosSnapshot> {
  enCurso ??= cargarPrecios().finally(() => {
    enCurso = null;
  });
  return enCurso;
}
