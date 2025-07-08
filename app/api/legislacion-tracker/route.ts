import { NextResponse } from "next/server"

// Simulamos un sistema de IA que analiza proyectos de ley
interface ProyectoLey {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  estado: string
  camara: string
  autor: string
  textoCompleto?: string
  analisisIA: {
    beneficios: string[]
    problemas: string[]
    puntuacion: number
    impactoReal: "alto" | "medio" | "bajo" | "negativo"
    recomendacion: string
    palabrasClave: string[]
    riesgoPrivacidad: boolean
    beneficioReal: boolean
  }
}

// Cache para análisis
let cache: { data: ProyectoLey[]; timestamp: number } | null = null
const CACHE_TTL = 60 * 60 * 1000 // 1 hora

// Función que simula análisis de IA de un proyecto de ley
function analizarProyectoConIA(proyecto: any): ProyectoLey["analisisIA"] {
  const texto = proyecto.titulo + " " + proyecto.descripcion
  const textoLower = texto.toLowerCase()

  // Detectar palabras clave problemáticas
  const palabrasRiesgo = ["registro", "base de datos", "identificación", "censo", "día nacional", "conmemoración"]
  const palabrasBeneficios = ["simplificación", "digital", "acceso", "cobertura", "tratamiento", "medicación"]

  const tieneRiesgo = palabrasRiesgo.some((palabra) => textoLower.includes(palabra))
  const tieneBeneficios = palabrasBeneficios.some((palabra) => textoLower.includes(palabra))

  let puntuacion = 5.0
  let impactoReal: "alto" | "medio" | "bajo" | "negativo" = "medio"
  let beneficios: string[] = []
  let problemas: string[] = []
  let recomendacion = ""

  // Análisis específico por tipo de proyecto
  if (textoLower.includes("registro") && textoLower.includes("nacional")) {
    puntuacion = 1.8
    impactoReal = "negativo"
    problemas = [
      "GRAVE RIESGO DE PRIVACIDAD",
      "Posible discriminación laboral/educativa",
      "Estigmatización de pacientes",
      "Costo elevado sin beneficio real",
      "Violación de datos médicos sensibles",
    ]
    beneficios = ["Posibles estadísticas para políticas públicas"]
    recomendacion = "PROYECTO PELIGROSO - Oponerse activamente"
  } else if (textoLower.includes("día") && (textoLower.includes("nacional") || textoLower.includes("conmemoración"))) {
    puntuacion = 3.1
    impactoReal = "bajo"
    problemas = [
      "No resuelve problemas reales",
      "Distrae de temas prioritarios",
      "Gasto público innecesario en eventos",
    ]
    beneficios = ["Mayor visibilidad del TDAH", "Posible concientización social"]
    recomendacion = "PROYECTO IRRELEVANTE - Priorizar otros temas"
  } else if (textoLower.includes("simplificación") || textoLower.includes("digital")) {
    puntuacion = 9.2
    impactoReal = "alto"
    beneficios = ["Reducción de burocracia médica", "Acceso más rápido a medicación", "Sistema digital moderno"]
    problemas = ["Posible resistencia del sistema actual", "Necesita inversión en tecnología"]
    recomendacion = "PROYECTO PRIORITARIO - Apoyar activamente"
  } else if (textoLower.includes("cobertura") || textoLower.includes("tratamiento")) {
    puntuacion = 8.5
    impactoReal = "alto"
    beneficios = ["Mejor acceso a tratamientos", "Reducción de costos para pacientes", "Mayor cobertura médica"]
    problemas = ["Posible resistencia de obras sociales"]
    recomendacion = "PROYECTO BENEFICIOSO - Apoyar"
  }

  return {
    beneficios,
    problemas,
    puntuacion,
    impactoReal,
    recomendacion,
    palabrasClave: texto
      .split(" ")
      .filter((p) => p.length > 4)
      .slice(0, 10),
    riesgoPrivacidad: tieneRiesgo,
    beneficioReal: tieneBeneficios && !tieneRiesgo,
  }
}

// Simular scraping de proyectos del Congreso
async function obtenerProyectosDelCongreso(): Promise<ProyectoLey[]> {
  // En la implementación real, esto haría scraping de:
  // - https://www.hcdn.gob.ar/proyectos/
  // - https://www.senado.gob.ar/parlamentario/parlamentaria/

  const proyectosSimulados = [
    {
      id: "D-2024-001",
      titulo: "Proyecto de Ley - Simplificación Digital del Sistema de Prescripción TDAH",
      descripcion:
        "Propone digitalizar completamente el proceso de prescripción de medicamentos para TDAH, eliminando formularios en papel y reduciendo tiempos de autorización",
      fecha: "2024-03-15",
      estado: "En comisión de Salud",
      camara: "Diputados",
      autor: "Dip. María González (UCR)",
    },
    {
      id: "S-2024-002",
      titulo: "Proyecto de Resolución - Día Nacional del TDAH",
      descripcion: "Propone establecer el 13 de julio como Día Nacional del TDAH con actividades de concientización",
      fecha: "2024-01-20",
      estado: "En tratamiento",
      camara: "Senado",
      autor: "Sen. Carlos Rodríguez (PJ)",
    },
    {
      id: "D-2023-003",
      titulo: "Proyecto de Ley - Registro Nacional Obligatorio de Personas con TDAH",
      descripcion:
        "Propone crear un registro nacional obligatorio de todas las personas diagnosticadas con TDAH para fines estadísticos y de política pública",
      fecha: "2023-11-10",
      estado: "Presentado",
      camara: "Diputados",
      autor: "Dip. Ana Martínez (PRO)",
    },
    {
      id: "D-2024-004",
      titulo: "Proyecto de Ley - Ampliación de Cobertura para Terapias TDAH",
      descripcion:
        "Propone ampliar la cobertura obligatoria para incluir terapias cognitivo-conductuales y coaching especializado en TDAH",
      fecha: "2024-02-28",
      estado: "En comisión",
      camara: "Diputados",
      autor: "Dip. Luis Fernández (CC)",
    },
  ]

  return proyectosSimulados.map((proyecto) => ({
    ...proyecto,
    analisisIA: analizarProyectoConIA(proyecto),
  }))
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const forceRefresh = searchParams.get("refresh") === "true"

  try {
    // Verificar cache
    if (!forceRefresh && cache && Date.now() - cache.timestamp < CACHE_TTL) {
      return NextResponse.json({
        data: cache.data,
        source: "cache",
        timestamp: new Date().toISOString(),
        total: cache.data.length,
      })
    }

    console.log("🏛️ Analizando proyectos del Congreso con IA...")

    // Obtener y analizar proyectos
    const proyectos = await obtenerProyectosDelCongreso()

    // Actualizar cache
    cache = {
      data: proyectos,
      timestamp: Date.now(),
    }

    return NextResponse.json({
      data: proyectos,
      source: "congreso_ai",
      timestamp: new Date().toISOString(),
      total: proyectos.length,
      estadisticas: {
        total: proyectos.length,
        beneficiosos: proyectos.filter((p) => p.analisisIA.impactoReal === "alto").length,
        peligrosos: proyectos.filter((p) => p.analisisIA.impactoReal === "negativo").length,
        irrelevantes: proyectos.filter((p) => p.analisisIA.impactoReal === "bajo").length,
      },
    })
  } catch (error) {
    console.error("💥 Error analizando legislación:", error)

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
  }
}

// Endpoint para reportar un proyecto problemático
export async function POST(request: Request) {
  try {
    const { proyectoId, motivo, descripcion } = await request.json()

    // En la implementación real, esto enviaría alertas a la comunidad
    console.log(`🚨 Alerta sobre proyecto ${proyectoId}: ${motivo}`)

    return NextResponse.json({
      success: true,
      message: "Alerta enviada a la comunidad",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error enviando alerta" }, { status: 500 })
  }
}
