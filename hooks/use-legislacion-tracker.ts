"use client"

import { useState, useEffect } from "react"

interface ProyectoLey {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  estado: string
  camara: string
  autor: string
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

interface LegislacionData {
  data: ProyectoLey[]
  source: string
  timestamp: string
  total: number
  estadisticas?: {
    total: number
    beneficiosos: number
    peligrosos: number
    irrelevantes: number
  }
}

export function useLegislacionTracker() {
  const [data, setData] = useState<LegislacionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async (forceRefresh = false) => {
    try {
      setLoading(true)
      setError(null)

      const url = forceRefresh ? "/api/legislacion-tracker?refresh=true" : "/api/legislacion-tracker"

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const result = await response.json()
      setData(result)

      console.log(`✅ ${result.total} proyectos analizados con IA`)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error desconocido"
      setError(errorMessage)
      console.error("❌ Error cargando análisis legislativo:", err)
    } finally {
      setLoading(false)
    }
  }

  const reportarProyecto = async (proyectoId: string, motivo: string, descripcion: string) => {
    try {
      const response = await fetch("/api/legislacion-tracker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ proyectoId, motivo, descripcion }),
      })

      if (!response.ok) {
        throw new Error("Error enviando reporte")
      }

      const result = await response.json()
      return result.success
    } catch (err) {
      console.error("❌ Error reportando proyecto:", err)
      return false
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(true),
    reportarProyecto,
  }
}
