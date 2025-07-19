"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  ExternalLink,
  Brain,
  Clock,
  ChevronDown,
  ChevronUp,
  Gavel,
  Eye,
} from "lucide-react";
import { Header } from "@/components/header";
import React, { useState } from "react";
import {
  decretoContent,
  fuentesDocumentacion,
  leyes,
  problemasReales,
  propuestasNecesarias,
  proyectoLeyContent,
} from "@/lib/legislacion-data";

export default function LegislacionPage() {
  const [expandedLaw, setExpandedLaw] = useState<string | null>(null);
  const [viewingDocument, setViewingDocument] = useState<string | null>(null);

  const formatText = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, pIndex) => {
        if (paragraph.includes('•')) {
          const lines = paragraph.split('\n');
          const title = lines[0];
          const bullets = lines.slice(1).filter(line => line.trim().startsWith('•'));
          
          return (
            <div key={pIndex} className="mb-3">
              {title && <p className="mb-2 font-medium">{title}</p>}
              <ul className="space-y-1 ml-4">
                {bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="text-sm flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>{bullet.replace('•', '').trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return <p key={pIndex} className="mb-3">{paragraph}</p>;
      });
  };

  const toggleLawDetails = (lawNumber: string) => {
    setExpandedLaw(expandedLaw === lawNumber ? null : lawNumber);
  };

  const handleViewDocument = (documentType: string) => {
    setViewingDocument(documentType);
  };

  const handleCloseDocument = () => {
    setViewingDocument(null);
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Análisis Inteligente de Legislación TDAH
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Seguimiento automático con IA de leyes y proyectos relacionados al
            TDAH. Identificamos qué realmente beneficia a los pacientes vs. el
            "teatro político".
          </p>
        </div>

        {/* Real Problems - SIMPLIFIED */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Problemas Identificados
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Análisis de los obstáculos principales para acceso a medicación TDAH
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {problemasReales.map((item, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/10"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.urgencia}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {item.impacto}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-red-900 dark:text-red-100 leading-tight">
                    {item.problema}
                  </CardTitle>
                  <CardDescription className="text-sm text-red-800 dark:text-red-200">
                    <div>{formatText(item.descripcion)}</div>
                  </CardDescription>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                    {item.resumen}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Propuestas Necesarias */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Soluciones Propuestas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Propuestas listas para presentación oficial
          </p>
          <div className="space-y-6">
            {propuestasNecesarias.map((propuesta, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-900/10"
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
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        🎯 {propuesta.problemaQueResuelve}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-400 mb-2 text-sm">
                        Beneficios Clave
                      </h5>
                      <ul className="space-y-1 text-sm">
                        {propuesta.beneficiosClave.map((beneficio, idx) => (
                          <li key={idx} className="text-sm">
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2 text-sm">
                        Ventajas
                      </h5>
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
                      <div className="font-medium text-green-800 dark:text-green-200">
                        Impacto
                      </div>
                      <div className="text-green-700 dark:text-green-300">
                        {propuesta.impacto}
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <div className="font-medium text-purple-800 dark:text-purple-200">
                        Responsable
                      </div>
                      <div className="text-purple-700 dark:text-purple-300">
                        {propuesta.responsable}
                      </div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <div className="font-medium text-orange-800 dark:text-orange-200">
                        Próximo Paso
                      </div>
                      <div className="text-orange-700 dark:text-orange-300">
                        {propuesta.accionNecesaria}
                      </div>
                    </div>
                  </div>

                  {(propuesta as any).documentTypes && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col sm:flex-row gap-2">
                        {(propuesta as any).documentTypes.map(
                          (docType: string) => (
                            <Button
                              key={docType}
                              onClick={() => handleViewDocument(docType)}
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium"
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Ver {docType === "decreto" ? "Decreto" : "Proyecto de Ley"}
                            </Button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Laws */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Leyes Vigentes - Análisis
          </h2>
          <div className="space-y-6">
            {leyes.map((ley, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{ley.numero}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-900 mt-1">
                        {ley.titulo}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          ley.estado === "Vigente" ? "default" : "secondary"
                        }
                      >
                        {ley.estado}
                      </Badge>
                      <Badge
                        variant={
                          ley.impactoReal === "alto"
                            ? "default"
                            : ley.impactoReal === "medio"
                            ? "secondary"
                            : "outline"
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
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Brain className="h-4 w-4" />
                        <span>Análisis de Efectividad</span>
                      </h4>
                      <Badge
                        variant={
                          ley.analisisIA.puntuacion >= 8
                            ? "default"
                            : "secondary"
                        }
                      >
                        {ley.analisisIA.puntuacion}/10
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">
                          ✅ Logros
                        </h5>
                        <ul className="space-y-1 text-sm">
                          {ley.analisisIA.beneficios.map((beneficio, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">
                          ❌ Fallas
                        </h5>
                        <ul className="space-y-1 text-sm">
                          {ley.analisisIA.problemas.map((problema, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{problema}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-md">
                      <p className="font-medium text-sm">
                        <strong>Análisis:</strong>{" "}
                        {ley.analisisIA.recomendacion}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Sancionada:{" "}
                      {new Date(ley.fecha).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Actualizada:{" "}
                      {new Date(ley.ultimaActualizacion).toLocaleDateString(
                        "es-AR"
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      Organismo: {ley.organismo}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => window.open(ley.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Ley
                    </Button>
                    {ley.analisisDetallado && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleLawDetails(ley.numero)}
                      >
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
                          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                            <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                              ❌ Problemas Principales
                            </h4>
                            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                              {ley.analisisDetallado.resumenImpacto.problemasPrincipales.map(
                                (problema, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>{problema}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                              ✅ Solución Simple
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              {ley.analisisDetallado.resumenImpacto
                                .solucionSimple || "Reforma integral necesaria"}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <p className="text-sm">
                            <strong className="text-yellow-800 dark:text-yellow-200">
                              Urgencia:
                            </strong>{" "}
                            <span className="text-yellow-700 dark:text-yellow-300">
                              {ley.analisisDetallado.resumenImpacto.urgencia}
                            </span>
                          </p>
                          <p className="text-sm mt-1">
                            <strong className="text-yellow-800 dark:text-yellow-200">
                              Impacto Estimado:
                            </strong>{" "}
                            <span className="text-yellow-700 dark:text-yellow-300">
                              {
                                ley.analisisDetallado.resumenImpacto
                                  .estimacionImpacto
                              }
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
                          {ley.analisisDetallado.articulosProblematicos.map(
                            (articulo, idx) => (
                              <div
                                key={idx}
                                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                      {articulo.articulo}: {articulo.titulo}
                                    </h4>
                                    <Badge
                                      variant={
                                        articulo.impactoTDAH.startsWith(
                                          "Crítico"
                                        )
                                          ? "destructive"
                                          : "secondary"
                                      }
                                      className="mt-1"
                                    >
                                      {articulo.impactoTDAH}
                                    </Badge>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <div>
                                    <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                      📜 Texto Actual
                                    </h5>
                                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                      {articulo.textoActual}
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">
                                      ❌ Problemas Identificados
                                    </h5>
                                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                      {articulo.problemasIdentificados.map(
                                        (problema, problemIdx) => (
                                          <li
                                            key={problemIdx}
                                            className="flex items-start space-x-2"
                                          >
                                            <span className="text-red-600 mt-1">
                                              •
                                            </span>
                                            <span>{problema}</span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Document Viewer Modal */}
        {viewingDocument && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {viewingDocument === "decreto"
                    ? "Decreto para Recetas Electrónicas en Medicamentos TDAH"
                    : "Proyecto de Ley de Modernización de Prescripción de Medicamentos TDAH"}
                </h3>
                <Button onClick={handleCloseDocument} variant="ghost" size="sm">
                  ✕
                </Button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: (viewingDocument === "decreto"
                        ? decretoContent
                        : proyectoLeyContent
                      )
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(
                          /^# (.*$)/gm,
                          '<h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">$1</h1>'
                        )
                        .replace(
                          /^## (.*$)/gm,
                          '<h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">$1</h2>'
                        )
                        .replace(
                          /^### (.*$)/gm,
                          '<h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">$1</h3>'
                        )
                        .replace(
                          /^\*\*ARTÍCULO (\d+).*?\*\*\.-\s*(.*)$/gm,
                          '<div class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong class="text-blue-900 dark:text-blue-200">ARTÍCULO $1°</strong><span class="text-gray-700 dark:text-gray-300">$2</span></div>'
                        )
                        .replace(
                          /^\*\*CONSIDERANDO:\*\*$/gm,
                          '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 mt-6">CONSIDERANDO:</h2>'
                        )
                        .replace(
                          /^\*\*POR ELLO,\*\*$/gm,
                          '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 mt-6">POR ELLO,</h2>'
                        )
                        .replace(
                          /^\*\*DECRETA:\*\*$/gm,
                          '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">DECRETA:</h2>'
                        )
                        .replace(
                          /^\*\*LEY:\*\*$/gm,
                          '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">LEY:</h2>'
                        )
                        .replace(
                          /^Que (.*)$/gm,
                          '<p class="mb-2 pl-4 text-gray-600 dark:text-gray-400">Que $1</p>'
                        )
                        .replace(
                          /^([a-z]\)) (.*)$/gm,
                          '<div class="ml-4 mb-2"><span class="font-medium text-gray-800 dark:text-gray-200">$1</span> $2</div>'
                        )
                        .replace(/\n\n/g, "<br><br>")
                        .replace(/\n/g, "<br>"),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fuentes Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 mt-12 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {fuentesDocumentacion.titulo}
          </h2>
          <div className="max-w-4xl mx-auto text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              {fuentesDocumentacion.descripcion}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {fuentesDocumentacion.fuentes.map((fuente, index) => (
                <li key={index}>
                  <strong>{fuente.titulo}</strong> {fuente.referencia && fuente.referencia} - {fuente.descripcion}
                </li>
              ))}
            </ul>
            <p className="text-xs text-center italic">
              {fuentesDocumentacion.notaLegal}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
