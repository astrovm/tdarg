"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, ExternalLink, Brain, Clock, ChevronDown, ChevronUp, Gavel } from "lucide-react"
import { Header } from "@/components/header"
import { useState } from "react"
import { fuentesDocumentacion, leyes, problemasReales, propuestasNecesarias } from "@/lib/legislacion-data"

export default function LegislacionPage() {
  const [expandedLaw, setExpandedLaw] = useState<string | null>(null)

  const formatText = (text: string) => {
    return text.split("\n\n").map((paragraph, pIndex) => {
      if (paragraph.includes("•")) {
        const lines = paragraph.split("\n")
        const title = lines[0]
        const bullets = lines.slice(1).filter((line) => line.trim().startsWith("•"))

        return (
          <div key={pIndex} className="mb-3">
            {title && <p className="mb-2 font-medium">{title}</p>}
            <ul className="space-y-1 ml-4">
              {bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="text-sm flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span>{bullet.replace("•", "").trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      }
      return (
        <p key={pIndex} className="mb-3">
          {paragraph}
        </p>
      )
    })
  }

  const toggleLawDetails = (lawNumber: string) => {
    setExpandedLaw(expandedLaw === lawNumber ? null : lawNumber)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Análisis Inteligente de Legislación TDAH
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Seguimiento automático con IA de leyes y proyectos relacionados al TDAH. Identificamos qué realmente
            beneficia a los pacientes vs. el "teatro político".
          </p>
        </div>
      </div>

      {/* Problems Section */}
      <div className="bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-900/10 dark:to-orange-900/10 border-y border-red-100 dark:border-red-800/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6 text-center">Problemas Identificados</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 text-center max-w-3xl mx-auto">
            Análisis de los obstáculos principales para acceso a medicación TDAH
          </p>

          {/* Explicación de niveles de urgencia */}
          <div className="mb-8 p-6 bg-gradient-to-r from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800/50">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">📊</span>
              </div>
              Niveles de Urgencia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800/50">
                <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <span className="font-bold text-red-700 dark:text-red-300 text-lg">Crítico:</span>
                  <p className="text-red-600 dark:text-red-200 mt-1">
                    Bloquea completamente el acceso a medicación
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800/50">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <span className="font-bold text-orange-700 dark:text-orange-300 text-lg">Alto:</span>
                  <p className="text-orange-600 dark:text-orange-200 mt-1">
                    Dificulta significativamente el tratamiento
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800/50">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <span className="font-bold text-yellow-700 dark:text-yellow-300 text-lg">Medio:</span>
                  <p className="text-yellow-600 dark:text-yellow-200 mt-1">Causa inconvenientes pero es manejable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problemasReales.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-900/20 border-0 shadow-xl hover:-translate-y-1"
              >
                <CardHeader className="p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-400"></div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className={`px-3 py-1 text-sm font-semibold ${
                        item.urgencia === "Crítico"
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                          : item.urgencia === "Alto"
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                            : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md"
                      }`}
                    >
                      {item.urgencia}
                    </Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.impacto}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white leading-tight mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {item.problema}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    <div>{formatText(item.descripcion)}</div>
                  </CardDescription>
                  <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-300 italic">{item.resumen}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 border-y border-green-100 dark:border-green-800/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 text-center">Soluciones Propuestas</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 text-center max-w-3xl mx-auto">Propuestas listas para presentación oficial</p>
          <div className="space-y-6">
            {propuestasNecesarias.map((propuesta, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-900/10 border-2 dark:border-blue-800"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-blue-900 dark:text-blue-100 mb-1">
                        {propuesta.titulo}
                      </CardTitle>
                      <CardDescription className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                        <div>{formatText(propuesta.resumenEjecutivo)}</div>
                      </CardDescription>
                      <p className="text-xs text-gray-600 dark:text-gray-400">🎯 {propuesta.problemaQueResuelve}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-400 mb-2 text-sm">Beneficios Clave</h5>
                      <ul className="space-y-1 text-sm">
                        {propuesta.beneficiosClave.map((beneficio, idx) => (
                          <li key={idx} className="text-sm">
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2 text-sm">Ventajas</h5>
                      <ul className="space-y-1 text-sm">
                        {propuesta.ventajas.map((ventaja, idx) => (
                          <li key={idx} className="text-sm">
                            {ventaja}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <div className="font-medium text-green-800 dark:text-green-200">Impacto</div>
                      <div className="text-green-700 dark:text-green-300">{propuesta.impacto}</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <div className="font-medium text-purple-800 dark:text-purple-200">Responsable</div>
                      <div className="text-purple-700 dark:text-purple-300">{propuesta.responsable}</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <div className="font-medium text-orange-800 dark:text-orange-200">Próximo Paso</div>
                      <div className="text-orange-700 dark:text-orange-300">{propuesta.accionNecesaria}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Laws Section */}
      <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 border-y border-blue-100 dark:border-blue-800/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">Leyes Vigentes - Análisis</h2>
          <div className="space-y-6">
            {leyes.map((ley, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{ley.numero}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-900 mt-1">
                        {ley.titulo}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={ley.estado === "Vigente" ? "default" : "secondary"}>{ley.estado}</Badge>
                      <Badge
                        variant={
                          ley.impactoReal === "alto" ? "default" : ley.impactoReal === "medio" ? "secondary" : "outline"
                        }
                      >
                        Impacto {ley.impactoReal}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{ley.descripcion}</p>

                  {/* AI Analysis for Laws */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Brain className="h-4 w-4" />
                        <span>Análisis de Efectividad</span>
                      </h4>
                      <Badge variant={ley.analisisIA.puntuacion >= 8 ? "default" : "secondary"}>
                        {ley.analisisIA.puntuacion}/10
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">✅ Logros</h5>
                        <ul className="space-y-1 text-sm">
                          {ley.analisisIA.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">❌ Fallas</h5>
                        <ul className="space-y-1 text-sm">
                          {ley.analisisIA.problemas.map((problema, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{problema}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-md">
                      <p className="font-medium text-sm">
                        <strong>Análisis:</strong> {ley.analisisIA.recomendacion}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Sancionada: {new Date(ley.fecha).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Actualizada: {new Date(ley.ultimaActualizacion).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      Organismo: {ley.organismo}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" onClick={() => window.open(ley.url, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Ley
                    </Button>
                    {ley.analisisDetallado && (
                      <Button size="sm" variant="outline" onClick={() => toggleLawDetails(ley.numero)}>
                        <Gavel className="h-4 w-4 mr-2" />
                        {expandedLaw === ley.numero ? (
                          <>
                            <ChevronUp className="h-4 w-4 ml-1" />
                            Ocultar Análisis
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 ml-1" />
                            Análisis Detallado
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Detailed Analysis Section */}
                {expandedLaw === ley.numero && ley.analisisDetallado && (
                  <CardContent className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <div className="space-y-6">
                      {/* Summary */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          📊 Resumen del Impacto
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 dark:border-red-800">
                            <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                              ❌ Problemas Principales
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                              {ley.analisisDetallado.resumenImpacto.problemasPrincipales.map((problema, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-red-600 mt-1">•</span>
                                  <span>{problema}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 dark:border-green-800">
                            <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Solución Simple</h4>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              {ley.analisisDetallado.resumenImpacto.solucionSimple || "Reforma integral necesaria"}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 dark:border-yellow-800">
                          <p className="text-sm">
                            <strong className="text-yellow-800 dark:text-yellow-200">Urgencia:</strong>{" "}
                            <span className="text-yellow-700 dark:text-yellow-300">
                              {ley.analisisDetallado.resumenImpacto.urgencia}
                            </span>
                          </p>
                          <p className="text-sm mt-1">
                            <strong className="text-yellow-800 dark:text-yellow-200">Impacto Estimado:</strong>{" "}
                            <span className="text-yellow-700 dark:text-yellow-300">
                              {ley.analisisDetallado.resumenImpacto.estimacionImpacto}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Problematic Articles */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          ⚖️ Artículos Problemáticos
                        </h3>
                        <div className="space-y-4">
                          {ley.analisisDetallado.articulosProblematicos.map((articulo, idx) => (
                            <div
                              key={idx}
                              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white">
                                    {articulo.articulo}: {articulo.titulo}
                                  </h4>
                                  <Badge
                                    variant={articulo.impactoTDAH.startsWith("Crítico") ? "destructive" : "secondary"}
                                    className="mt-1"
                                  >
                                    {articulo.impactoTDAH}
                                  </Badge>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">📜 Texto Actual</h5>
                                  <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap border-2 dark:border-gray-500">
                                    {articulo.textoActual}
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">
                                    ❌ Problemas Identificados
                                  </h5>
                                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                    {articulo.problemasIdentificados.map((problema, problemIdx) => (
                                      <li key={problemIdx} className="flex items-start space-x-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>{problema}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Fuentes Section */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">{fuentesDocumentacion.titulo}</h2>
          <div className="max-w-4xl mx-auto text-sm text-gray-300">
            <p className="mb-4">{fuentesDocumentacion.descripcion}</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {fuentesDocumentacion.fuentes.map((fuente, index) => (
                <li key={index}>
                  <strong>{fuente.titulo}</strong> {fuente.referencia && fuente.referencia} - {fuente.descripcion}
                </li>
              ))}
            </ul>
            <p className="text-xs text-center italic">{fuentesDocumentacion.notaLegal}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
