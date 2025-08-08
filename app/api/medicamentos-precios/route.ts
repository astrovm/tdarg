import { NextResponse } from "next/server"

// Configuración simple
const FARMACITY_API = "https://appfarmacitymicroservice-prod.azurewebsites.net/api/Medicine/search"
const TIMEOUT = 25000
const CACHE_TTL = 15 * 60 * 1000 // 15 minutos

// Interface
interface Medicamento {
  codigo: string
  nombre: string
  marca: string
  laboratorio: string
  precio: number
  presentacion: string
  concentracion: string
  fechaActualizacion: string
}

// Cache
let cache: { data: Medicamento[]; timestamp: number } | null = null
let isLoading = false // Flag para evitar llamadas simultáneas

// Fetch con timeout
async function fetchWithTimeout(url: string, options: RequestInit) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

// Obtener medicamentos de Farmacity
interface FarmacityMed {
  formula?: { description?: string }
  description?: string
  medicalLaboratory?: { abbreviation?: string }
  publicPrice?: string | number
  package?: { packageDescription?: { description?: string }; potency?: string | number }
  barCode?: string
  id?: string | number
}

async function obtenerMedicamentos(termino: string): Promise<FarmacityMed[]> {
  try {
    const url = `${FARMACITY_API}?filter=${encodeURIComponent(termino)}`

    const response = await fetchWithTimeout(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; TDAH-Argentina/1.0)",
        Origin: "https://www.farmacity.com",
        Referer: "https://www.farmacity.com/",
      },
    })

    if (!response.ok) {
      console.warn(`⚠️ Error ${response.status} para ${termino}`)
      return []
    }

    const data = await response.json()
    const results: unknown = Array.isArray(data) ? data : (data as { data?: unknown }).data || []
    const list: FarmacityMed[] = Array.isArray(results) ? (results as FarmacityMed[]) : []

    console.log(`✅ ${list.length} medicamentos para ${termino}`)
    return list
  } catch (error) {
    console.error(`❌ Error para ${termino}:`, error)
    return []
  }
}

// Convertir medicamento
function convertirMedicamento(med: FarmacityMed): Medicamento {
  const nombre = med.formula?.description || med.description || "Medicamento"
  const marca = med.description || "Sin marca"
  const laboratorio = med.medicalLaboratory?.abbreviation || "No especificado"
  const precio = typeof med.publicPrice === "string" ? Number.parseFloat(med.publicPrice) : Number(med.publicPrice || 0)
  const presentacion = med.package?.packageDescription?.description || "No especificado"
  const concentracion = med.package?.potency ? `${med.package.potency} mg` : "No especificado"

  return {
    codigo: med.barCode || med.id?.toString() || `med_${Date.now()}_${Math.random()}`,
    nombre: nombre.trim(),
    marca: marca.trim(),
    laboratorio: laboratorio.trim(),
    precio,
    presentacion: presentacion.trim(),
    concentracion: concentracion.trim(),
    fechaActualizacion: new Date().toISOString(),
  }
}

// Eliminar duplicados
function eliminarDuplicados(medicamentos: Medicamento[]): Medicamento[] {
  const mapa = new Map<string, Medicamento>()

  medicamentos.forEach((med) => {
    const clave = `${med.nombre}_${med.concentracion}_${med.laboratorio}`
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "")

    if (!mapa.has(clave) || med.precio > 0) {
      mapa.set(clave, med)
    }
  })

  return Array.from(mapa.values()).sort((a, b) => a.nombre.localeCompare(b.nombre))
}

// Obtener medicamentos TDAH
async function obtenerMedicamentosTDAH(): Promise<Medicamento[]> {
  const terminos = ["atomoxetina", "metilfenidato", "modafinilo", "armodafinilo", "bupropion"]
  const resultados: Medicamento[] = []

  console.log("🌐 Consultando Farmacity...")

  // Buscar todos los términos en paralelo
  const promesas = terminos.map((termino) =>
    obtenerMedicamentos(termino).catch((error) => {
      console.warn(`⚠️ Error para ${termino}:`, error.message)
      return []
    }),
  )

  const resultadosAPIs = await Promise.all(promesas)

  // Procesar resultados
  resultadosAPIs.forEach((medicamentos) => {
    medicamentos.forEach((med) => {
      try {
        const convertido = convertirMedicamento(med)
        resultados.push(convertido)
      } catch (error) {
        console.warn("Error convirtiendo medicamento:", error)
      }
    })
  })

  const medicamentosUnicos = eliminarDuplicados(resultados)

  console.log(`✅ ${medicamentosUnicos.length} medicamentos únicos encontrados`)

  return medicamentosUnicos
}

// GET endpoint
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const forceRefresh = searchParams.get("refresh") === "true"

  try {
    // Verificar cache
    if (!forceRefresh && cache && Date.now() - cache.timestamp < CACHE_TTL) {
      console.log("📦 Cache hit")

      return NextResponse.json({
        data: cache.data,
        source: "cache",
        timestamp: new Date().toISOString(),
        total: cache.data.length,
        estadisticas: {
          total: cache.data.length,
          con_precio: cache.data.filter((m) => m.precio > 0).length,
        },
      })
    }

    // Evitar llamadas simultáneas
    if (isLoading) {
      console.log("⏳ Esperando llamada en progreso...")
      // Esperar un poco y devolver cache si existe
      await new Promise((resolve) => setTimeout(resolve, 1000))
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
        })
      }
    }

    isLoading = true

    // Obtener datos frescos
    const medicamentos = await obtenerMedicamentosTDAH()

    if (medicamentos.length === 0) {
      throw new Error("No se encontraron medicamentos")
    }

    // Actualizar cache
    cache = {
      data: medicamentos,
      timestamp: Date.now(),
    }

    return NextResponse.json({
      data: medicamentos,
      source: "farmacity",
      timestamp: new Date().toISOString(),
      total: medicamentos.length,
      estadisticas: {
        total: medicamentos.length,
        con_precio: medicamentos.filter((m) => m.precio > 0).length,
      },
    })
  } catch (error) {
    console.error("💥 Error:", error)

    // Fallback a cache si existe
    if (cache && cache.data.length > 0) {
      console.log("⚠️ Usando cache como fallback")

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
      })
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
      { status: 500 },
    )
  } finally {
    isLoading = false
  }
}

// Limpiar cache
export async function DELETE() {
  cache = null
  isLoading = false
  return NextResponse.json({ message: "Cache limpiado" })
}
