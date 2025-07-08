"use client"

import { useState, useEffect, useCallback, useRef } from "react"

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

interface ApiResponse {
  data: Medicamento[]
  source: string
  timestamp: string
  total: number
  error?: string
  estadisticas: {
    total: number
    con_precio: number
  }
}

export function useMedicamentosReales() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [estadisticas, setEstadisticas] = useState<ApiResponse["estadisticas"] | null>(null)

  // Ref para evitar llamadas duplicadas
  const isLoadingRef = useRef(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  const cargarMedicamentos = useCallback(async (forzarRefresh = false) => {
    // Evitar llamadas duplicadas
    if (isLoadingRef.current && !forzarRefresh) {
      console.log("⏳ Llamada ya en progreso, saltando...")
      return
    }

    // Cancelar llamada anterior si existe
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    try {
      isLoadingRef.current = true
      setLoading(true)
      setError(null)

      // Crear nuevo AbortController
      abortControllerRef.current = new AbortController()

      const url = forzarRefresh ? "/api/medicamentos-precios?refresh=true" : "/api/medicamentos-precios"

      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: forzarRefresh ? "no-cache" : "default",
        signal: abortControllerRef.current.signal,
      })

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }

      const data: ApiResponse = await response.json()

      setMedicamentos(data.data)
      setEstadisticas(data.estadisticas)

      if (data.error) {
        setError(`Advertencia: ${data.error}`)
      }

      console.log(`✅ ${data.data.length} medicamentos cargados desde ${data.source}`)
    } catch (err) {
      // Ignorar errores de abort
      if (err instanceof Error && err.name === "AbortError") {
        console.log("🚫 Llamada cancelada")
        return
      }

      const errorMsg = err instanceof Error ? err.message : "Error desconocido"
      setError(`Error: ${errorMsg}`)
      console.error("❌ Error:", err)
    } finally {
      isLoadingRef.current = false
      setLoading(false)
    }
  }, [])

  const refetch = useCallback(
    async (forzar = false) => {
      await cargarMedicamentos(forzar)
    },
    [cargarMedicamentos],
  )

  // Cargar datos iniciales
  useEffect(() => {
    cargarMedicamentos()

    // Cleanup al desmontar
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [cargarMedicamentos])

  // Auto-refresh cada 20 minutos
  useEffect(() => {
    const interval = setInterval(
      () => {
        console.log("⏰ Auto-refresh...")
        cargarMedicamentos()
      },
      20 * 60 * 1000,
    )

    return () => clearInterval(interval)
  }, [cargarMedicamentos])

  return {
    medicamentos,
    loading,
    error,
    estadisticas,
    refetch,
  }
}
