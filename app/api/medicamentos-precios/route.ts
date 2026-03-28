import { NextResponse } from "next/server";

import type { Medicamento } from "@/lib/medicamentos/types";

// Configuración simple
const FARMACITY_API =
  "https://appfarmacitymicroservice-prod.azurewebsites.net/api/Medicine/search";
const ALFABETA_LUDOXA_URL = "https://www.alfabeta.net/precio/ludoxa.html";
const TIMEOUT = 25000;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutos

// Cache
let cache: { data: Medicamento[]; timestamp: number } | null = null;
let isLoading = false; // Flag para evitar llamadas simultáneas

// Fetch con timeout
async function fetchWithTimeout(url: string, options: RequestInit) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Obtener medicamentos de Farmacity
interface FarmacityMed {
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

interface AlfabetaProducto {
  descripcion: string;
  precio: number;
  fecha?: string;
}

function normalizarNumeroFarmacity(valor: string | number | undefined): number {
  if (typeof valor === "number") {
    return Number.isFinite(valor) ? valor : 0;
  }

  if (!valor) {
    return 0;
  }

  const limpio = valor.toString().replace(/[^\d.,-]/g, "").trim();
  if (!limpio) {
    return 0;
  }

  const ultimoPunto = limpio.lastIndexOf(".");
  const ultimaComa = limpio.lastIndexOf(",");

  let normalizado = limpio;

  if (ultimoPunto !== -1 && ultimaComa !== -1) {
    const separadorDecimal = ultimoPunto > ultimaComa ? "." : ",";
    const separadorMiles = separadorDecimal === "." ? "," : ".";

    normalizado = normalizado
      .replaceAll(separadorMiles, "")
      .replace(separadorDecimal, ".");
  } else if (ultimaComa !== -1) {
    const decimales = limpio.length - ultimaComa - 1;
    normalizado =
      decimales <= 2
        ? limpio.replace(/\./g, "").replace(",", ".")
        : limpio.replace(/,/g, "");
  } else if (ultimoPunto !== -1) {
    const decimales = limpio.length - ultimoPunto - 1;
    normalizado = decimales <= 2 ? limpio.replace(/,/g, "") : limpio.replace(/\./g, "");
  }

  const numero = Number.parseFloat(normalizado);
  return Number.isFinite(numero) ? numero : 0;
}

function extraerConcentracionTexto(...textos: Array<string | undefined>): string | null {
  for (const texto of textos) {
    if (!texto) {
      continue;
    }

    const match = texto.match(/(\d+(?:[.,]\d+)?)\s*mg\b/i);
    if (!match) {
      continue;
    }

    const valor = normalizarNumeroFarmacity(match[1]);
    if (valor > 0) {
      const valorFormateado = Number.isInteger(valor)
        ? valor.toString()
        : valor.toFixed(2).replace(/\.?0+$/, "");

      return `${valorFormateado} mg`;
    }
  }

  return null;
}

async function obtenerMedicamentos(termino: string): Promise<FarmacityMed[]> {
  try {
    const url = `${FARMACITY_API}?filter=${encodeURIComponent(termino)}`;

    const response = await fetchWithTimeout(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; TDAH-Argentina/1.0)",
        Origin: "https://www.farmacity.com",
        Referer: "https://www.farmacity.com/",
      },
    });

    if (!response.ok) {
      console.warn(`⚠️ Error ${response.status} para ${termino}`);
      return [];
    }

    const data = await response.json();
    const results: unknown = Array.isArray(data)
      ? data
      : (data as { data?: unknown }).data || [];
    const list: FarmacityMed[] = Array.isArray(results)
      ? (results as FarmacityMed[])
      : [];

    console.log(`✅ ${list.length} medicamentos para ${termino}`);
    return list;
  } catch (error) {
    console.error(`❌ Error para ${termino}:`, error);
    return [];
  }
}

function normalizarPrecioAlfabeta(valor: string): number {
  const normalizado = valor.replace(/\./g, "").replace(",", ".").trim();
  const numero = Number.parseFloat(normalizado);
  return Number.isFinite(numero) ? numero : 0;
}

function parseFechaAlfabeta(fecha?: string): string {
  if (!fecha) {
    return new Date().toISOString();
  }

  const match = fecha.match(/(\d{2})\/(\d{2})\/(\d{2})/);
  if (!match) {
    return new Date().toISOString();
  }

  const [, dd, mm, yy] = match;
  const iso = new Date(
    Number(`20${yy}`),
    Number(mm) - 1,
    Number(dd)
  ).toISOString();

  return iso;
}

function parseProductosAlfabeta(html: string): AlfabetaProducto[] {
  const productos: AlfabetaProducto[] = [];
  const regexFila =
    /<td class="tddesc">([^<]+)<span[^>]*><\/span><\/td><td class="tdprecio">\$(.*?)<\/td><td class="tdfecha">\((.*?)\)<\/td>/g;

  let match = regexFila.exec(html);

  while (match) {
    const descripcion = match[1]?.trim();
    const precio = normalizarPrecioAlfabeta(match[2] || "");
    const fecha = match[3]?.trim();

    if (descripcion && precio > 0) {
      productos.push({ descripcion, precio, fecha });
    }

    match = regexFila.exec(html);
  }

  return productos;
}

async function obtenerLisdexanfetaminaAlfabeta(): Promise<Medicamento[]> {
  try {
    console.log("🌐 Consultando Alfa Beta (Ludoxa)...");
    const response = await fetchWithTimeout(ALFABETA_LUDOXA_URL, {
      method: "GET",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "Mozilla/5.0 (compatible; TDAH-Argentina/1.0)",
      },
    });

    if (!response.ok) {
      console.warn(`⚠️ Alfa Beta respondió ${response.status}`);
      return [];
    }

    const html = await response.text();
    const productos = parseProductosAlfabeta(html);

    if (productos.length === 0) {
      console.warn("⚠️ No se pudieron parsear presentaciones desde Alfa Beta");
      return [];
    }

    return productos.map((producto) => ({
      codigo: `alfabeta_ludoxa_${producto.descripcion
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[^a-z0-9_]/g, "")}`,
      nombre: "lisdexanfetamina",
      marca: "Ludoxa",
      laboratorio: "Adium",
      precio: producto.precio,
      presentacion: producto.descripcion,
      concentracion: producto.descripcion.split(" x ")[0]?.trim() || "No especificado",
      fechaActualizacion: parseFechaAlfabeta(producto.fecha),
    }));
  } catch (error) {
    console.error("❌ Error consultando Alfa Beta:", error);
    return [];
  }
}

// Convertir medicamento
function convertirMedicamento(med: FarmacityMed): Medicamento {
  const nombre = med.formula?.description || med.description || "Medicamento";
  const marca = med.description || "Sin marca";
  const laboratorio = med.medicalLaboratory?.abbreviation || "No especificado";
  const precio = normalizarNumeroFarmacity(med.publicPrice);
  const presentacion =
    med.package?.packageDescription?.description || "No especificado";
  const potencia = normalizarNumeroFarmacity(med.package?.potency);
  const concentracion = potencia > 0
    ? `${Number.isInteger(potencia) ? potencia : potencia.toFixed(2).replace(/\.?0+$/, "")} mg`
    : extraerConcentracionTexto(
        presentacion,
        marca,
        nombre
      ) || "No especificado";

  return {
    codigo:
      med.barCode || med.id?.toString() || `med_${Date.now()}_${Math.random()}`,
    nombre: nombre.trim(),
    marca: marca.trim(),
    laboratorio: laboratorio.trim(),
    precio,
    presentacion: presentacion.trim(),
    concentracion: concentracion.trim(),
    fechaActualizacion: new Date().toISOString(),
  };
}

// Eliminar duplicados
function eliminarDuplicados(medicamentos: Medicamento[]): Medicamento[] {
  const mapa = new Map<string, Medicamento>();

  medicamentos.forEach((med) => {
    const clave = `${med.nombre}_${med.concentracion}_${med.laboratorio}`
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

    if (!mapa.has(clave) || med.precio > 0) {
      mapa.set(clave, med);
    }
  });

  return Array.from(mapa.values()).sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );
}

// Obtener medicamentos TDAH
async function obtenerMedicamentosTDAH(): Promise<Medicamento[]> {
  const terminos = [
    "atomoxetina",
    "metilfenidato",
    "lisdexanfetamina",
    "modafinilo",
    "armodafinilo",
    "bupropion",
  ];
  const resultados: Medicamento[] = [];

  console.log("🌐 Consultando Farmacity...");

  // Buscar todos los términos en paralelo
  const promesas = terminos.map((termino) =>
    obtenerMedicamentos(termino).catch((error) => {
      console.warn(`⚠️ Error para ${termino}:`, error.message);
      return [];
    })
  );

  const resultadosAPIs = await Promise.all(promesas);

  // Procesar resultados
  resultadosAPIs.forEach((medicamentos) => {
    medicamentos.forEach((med) => {
      try {
        const convertido = convertirMedicamento(med);
        resultados.push(convertido);
      } catch (error) {
        console.warn("Error convirtiendo medicamento:", error);
      }
    });
  });

  const lisdexDesdeAlfabeta = await obtenerLisdexanfetaminaAlfabeta();
  resultados.push(...lisdexDesdeAlfabeta);

  const medicamentosUnicos = eliminarDuplicados(resultados);

  console.log(
    `✅ ${medicamentosUnicos.length} medicamentos únicos encontrados`
  );

  return medicamentosUnicos;
}

// GET endpoint
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get("refresh") === "true";

  try {
    // Verificar cache
    if (!forceRefresh && cache && Date.now() - cache.timestamp < CACHE_TTL) {
      console.log("📦 Cache hit");

      return NextResponse.json({
        data: cache.data,
        source: "cache",
        timestamp: new Date().toISOString(),
        total: cache.data.length,
        estadisticas: {
          total: cache.data.length,
          con_precio: cache.data.filter((m) => m.precio > 0).length,
        },
      });
    }

    // Evitar llamadas simultáneas
    if (isLoading) {
      console.log("⏳ Esperando llamada en progreso...");
      // Esperar un poco y devolver cache si existe
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (cache) {
        return NextResponse.json({
          data: cache.data,
          source: "cache_wait",
          timestamp: new Date().toISOString(),
          total: cache.data.length,
          estadisticas: {
            total: cache.data.length,
            con_precio: cache.data.filter((m) => m.precio > 0).length,
          },
        });
      }
    }

    isLoading = true;

    // Obtener datos frescos
    const medicamentos = await obtenerMedicamentosTDAH();

    if (medicamentos.length === 0) {
      throw new Error("No se encontraron medicamentos");
    }

    // Actualizar cache
    cache = {
      data: medicamentos,
      timestamp: Date.now(),
    };

    return NextResponse.json({
      data: medicamentos,
      source: "farmacity",
      timestamp: new Date().toISOString(),
      total: medicamentos.length,
      estadisticas: {
        total: medicamentos.length,
        con_precio: medicamentos.filter((m) => m.precio > 0).length,
      },
    });
  } catch (error) {
    console.error("💥 Error:", error);

    // Fallback a cache si existe
    if (cache && cache.data.length > 0) {
      console.log("⚠️ Usando cache como fallback");

      return NextResponse.json({
        data: cache.data,
        source: "cache_fallback",
        timestamp: new Date().toISOString(),
        total: cache.data.length,
        error: error instanceof Error ? error.message : "Error desconocido",
        estadisticas: {
          total: cache.data.length,
          con_precio: cache.data.filter((m) => m.precio > 0).length,
        },
      });
    }

    // Error sin cache
    return NextResponse.json(
      {
        data: [],
        source: "error",
        timestamp: new Date().toISOString(),
        total: 0,
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  } finally {
    isLoading = false;
  }
}

// Limpiar cache
export async function DELETE() {
  cache = null;
  isLoading = false;
  return NextResponse.json({ message: "Cache limpiado" });
}
