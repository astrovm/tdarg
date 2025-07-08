"use client"

import { useState, useEffect } from "react"

interface AnalisisIA {
  beneficios: string[]
  problemas: string[]
  puntuacion: number
  recomendacion: string
  impactoReal: "alto" | "medio" | "bajo" | "negativo"
  beneficioReal: boolean
  riesgoPrivacidad: boolean
}

interface Proyecto {
  id: string
  titulo: string
  descripcion: string
  estado: string
  camara: string
  fecha: string
  autor: string
  analisisIA: AnalisisIA
}

// Mock data para simular proyectos
const mockProyectos: Proyecto[] = [
  {
    id: "1",
    titulo: "Proyecto de Ley - Simplificación de Prescripción TDAH",
    descripcion: "Propone digitalizar y simplificar el proceso de prescripción de medicamentos para TDAH",
    estado: "En comisión",
    camara: "Diputados",
    fecha: "2024-03-15",
    autor: "Dip. María González",
    analisisIA: {
      beneficios: ["Reducción de burocracia médica", "Acceso más rápido a medicación", "Sistema digital moderno"],
      problemas: ["Posible resistencia del sistema actual", "Necesita inversión en tecnología"],
      puntuacion: 9.2,
      recomendacion: "PROYECTO PRIORITARIO - Apoyar activamente",
      impactoReal: "alto",
      beneficioReal: true,
      riesgoPrivacidad: false,
    },
  },
  {
    id: "2",
    titulo: "Proyecto de Resolución - Día Nacional del TDAH",
    descripcion: "Propone establecer el 13 de julio como Día Nacional del TDAH",
    estado: "En tratamiento",
    camara: "Senado",
    fecha: "2024-01-20",
    autor: "Sen. Carlos Rodríguez",
    analisisIA: {
      beneficios: ["Mayor visibilidad del TDAH", "Posible concientización social"],
      problemas: [
        "No resuelve problemas reales",
        "Distrae de temas prioritarios",
        "Gasto público innecesario en eventos",
      ],
      puntuacion: 3.1,
      recomendacion: "PROYECTO IRRELEVANTE - Priorizar otros temas",
      impactoReal: "bajo",
      beneficioReal: false,
      riesgoPrivacidad: false,
    },
  },
  {
    id: "3",
    titulo: "Proyecto de Ley - Registro Nacional de TDAH",
    descripcion: "Propone crear un registro nacional obligatorio de personas con TDAH",
    estado: "Presentado",
    camara: "Diputados",
    fecha: "2023-11-10",
    autor: "Dip. Ana Martínez",
    analisisIA: {
      beneficios: ["Posibles estadísticas para políticas públicas"],
      problemas: [
        "GRAVE RIESGO DE PRIVACIDAD",
        "Posible discriminación laboral/educativa",
        "Estigmatización de pacientes",
        "Costo elevado sin beneficio real",
        "Violación de datos médicos sensibles",
      ],
      puntuacion: 1.8,
      recomendacion: "PROYECTO PELIGROSO - Oponerse activamente",
      impactoReal: "negativo",
      beneficioReal: false,
      riesgoPrivacidad: true,
    },
  },
]

export function useLegislacionTracker() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProyectos = async () => {
    try {
      setLoading(true)
      setError(null)

      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // En producción, aquí harías el fetch real
      setProyectos(mockProyectos)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setLoading(false)
    }
  }

  const refresh = () => {
    fetchProyectos()
  }

  useEffect(() => {
    fetchProyectos()
  }, [])

  return {
    proyectos,
    loading,
    error,
    refresh,
  }
}
