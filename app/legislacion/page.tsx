"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Calendar,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Brain,
  TrendingUp,
  Clock,
} from "lucide-react"
import { Header } from "@/components/header"

const leyes = [
  {
    numero: "Ley 27.306",
    titulo: "Ley Nacional de TDAH",
    descripcion: "Establece el marco legal para la atención integral del TDAH en Argentina",
    fecha: "2016-11-04",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27306-267234/actualizacion",
    ultimaActualizacion: "2016-11-04",
    analisisIA: {
      beneficios: [
        "Reconocimiento legal del TDAH como condición neurobiológica",
        "Cobertura obligatoria del 100% por obras sociales",
        "Marco legal sólido para exigir derechos",
      ],
      problemas: [
        "Implementación deficiente en la práctica",
        "Falta de protocolos claros para médicos",
        "Demoras en autorizaciones de tratamientos",
      ],
      puntuacion: 8.5,
      recomendacion: "Ley fundamental pero necesita mejor reglamentación",
    },
    puntosClave: [
      "Reconocimiento del TDAH como condición neurobiológica",
      "Derecho a diagnóstico y tratamiento integral",
      "Cobertura obligatoria por obras sociales y prepagas",
      "Adaptaciones educativas necesarias",
    ],
  },
  {
    numero: "Ley 19.303",
    titulo: "Ley de Psicotrópicos",
    descripcion: "Regula la fabricación, distribución y uso de sustancias psicotrópicas incluyendo medicamentos para TDAH",
    fecha: "1971-10-28",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966/actualizacion",
    ultimaActualizacion: "2020-08-11",
    analisisIA: {
      beneficios: [
        "Regulación de calidad de medicamentos psicotrópicos",
        "Prevención de uso indebido de estimulantes",
        "Control farmacológico estricto",
        "Seguimiento médico cercano obligatorio",
      ],
      problemas: [
        "Proceso burocrático complejo para recetas",
        "Receta triplicada manuscrita obligatoria",
        "Prohibición de repetición sin nueva consulta médica",
        "Costos administrativos adicionales para pacientes",
        "Archivo de recetas por 2 años genera burocracia",
      ],
      puntuacion: 6.8,
      recomendacion: "Ley necesaria pero requiere modernización digital urgente para medicamentos crónicos como TDAH",
    },
    puntosClave: [
      "Clasificación de medicamentos TDAH en listas controladas",
      "Receta triplicada manuscrita obligatoria",
      "Prescripción exclusiva por médicos matriculados",
      "Despacho por única vez sin repetición",
      "Control estricto de cantidades dispensadas",
    ],
  },
  {
    numero: "Ley 27.553",
    titulo: "Ley de Recetas Electrónicas o Digitales",
    descripcion: "Establece el sistema de recetas electrónicas y telemedicina en Argentina",
    fecha: "2020-08-11",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27553-340919/actualizacion",
    ultimaActualizacion: "2023-12-21",
    analisisIA: {
      beneficios: [
        "Permite prescripciones electrónicas para medicamentos TDAH",
        "Habilita consultas de telemedicina para psiquiatría",
        "Reduce burocracia en renovación de recetas",
        "Moderniza el sistema de salud digital",
        "Facilita acceso a especialistas en zonas remotas",
      ],
      problemas: [
        "Requiere infraestructura tecnológica en todo el país",
        "Depende de la adopción por parte de médicos",
        "Necesita alfabetización digital de pacientes",
        "Posibles problemas de conectividad en zonas rurales",
      ],
      puntuacion: 8.2,
      recomendacion: "Ley muy positiva para TDAH - falta mejor implementación y capacitación",
    },
    puntosClave: [
      "Prescripciones electrónicas válidas nacionalmente",
      "Telemedicina habilitada para consultas psiquiátricas",
      "Protección de datos médicos personales",
      "Farmacias obligadas a aceptar recetas digitales",
      "Plataformas de telemedicina reguladas",
    ],
  },
  {
    numero: "Decreto 432/2017",
    titulo: "Reglamentación de la Ley 27.306",
    descripcion: "Reglamenta la aplicación de la Ley Nacional de TDAH",
    fecha: "2017-06-15",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Poder Ejecutivo Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/decreto-432-2017-274900/actualizacion",
    ultimaActualizacion: "2017-06-15",
    analisisIA: {
      beneficios: [
        "Establece procedimientos específicos",
        "Define obligaciones de obras sociales",
        "Crea mecanismos de control",
      ],
      problemas: [
        "Burocracia excesiva para prescripciones",
        "Requisitos complejos para médicos",
        "Falta de digitalización de procesos",
      ],
      puntuacion: 6.5,
      recomendacion: "Necesita modernización urgente del sistema de prescripción",
    },
    puntosClave: [
      "Procedimientos para diagnóstico",
      "Protocolos de tratamiento",
      "Obligaciones de obras sociales",
      "Mecanismos de control y seguimiento",
    ],
  },
  {
    numero: "Ley 17.565",
    titulo: "Ley de Medicamentos",
    descripcion: "Regula la actividad farmacéutica, farmacias y expendio de medicamentos en Argentina",
    fecha: "1967-12-12",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-17565-19424/actualizacion",
    ultimaActualizacion: "2023-12-21",
    analisisIA: {
      beneficios: [
        "Regula la calidad y seguridad de medicamentos",
        "Establece responsabilidades profesionales de farmacéuticos",
        "Control de expendio de medicamentos controlados",
        "Marco legal para funcionamiento de farmacias",
      ],
      problemas: [
        "No contempla especificidades del tratamiento TDAH",
        "Burocracia adicional para medicamentos controlados",
        "Falta de protocolos específicos para renovaciones",
        "No diferencia medicamentos crónicos de agudos",
      ],
      puntuacion: 6.2,
      recomendacion: "Ley base necesaria pero requiere adaptación para tratamientos crónicos como TDAH",
    },
    puntosClave: [
      "Licencias obligatorias para farmacias",
      "Verificación de prescripciones médicas",
      "Control de medicamentos controlados",
      "Responsabilidad profesional de farmacéuticos",
      "Mantenimiento de registros de dispensación",
    ],
  },
]

const proyectosActuales = [
  {
    titulo: "Proyecto de Resolución - Día Nacional del TDAH",
    descripcion: "Propone establecer el 13 de julio como Día Nacional del TDAH",
    estado: "En tratamiento",
    camara: "Senado",
    fecha: "2024-01-20",
    autor: "Sen. Carlos Rodríguez",
    impactoReal: "bajo",
    analisisIA: {
      beneficios: ["Mayor visibilidad del TDAH", "Posible concientización social"],
      problemas: [
        "No resuelve problemas reales",
        "Distrae de temas prioritarios",
        "Gasto público innecesario en eventos",
      ],
      puntuacion: 3.1,
      recomendacion: "PROYECTO IRRELEVANTE - Priorizar otros temas",
    },
    urgencia: "baja",
  },
  {
    titulo: "Proyecto de Ley - Registro Nacional de TDAH",
    descripcion: "Propone crear un registro nacional obligatorio de personas con TDAH",
    estado: "Presentado",
    camara: "Diputados",
    fecha: "2023-11-10",
    autor: "Dip. Ana Martínez",
    impactoReal: "negativo",
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
    },
    urgencia: "critica",
  },
]

const propuestasNecesarias = [
  {
    titulo: "Integración de Ley 27.553 con Ley 19.303 - Recetas Electrónicas para Medicamentos Controlados TDAH",
    descripcion: "Propuesta para actualizar la Ley 19.303 para que sea compatible con la Ley 27.553 de recetas electrónicas, permitiendo prescripciones digitales para medicamentos controlados como metilfenidato y atomoxetina",
    problemaQueResuelve: "La Ley 27.553 permite recetas electrónicas, pero la Ley 19.303 aún exige receta triplicada manuscrita para medicamentos TDAH",
    beneficiosEsperados: [
      "Aplicación de receta electrónica (Ley 27.553) a medicamentos controlados TDAH",
      "Eliminación de receta triplicada manuscrita manteniendo control de seguridad",
      "Firma digital médica para prescripciones de psicotrópicos",
      "Renovaciones electrónicas para pacientes estables",
      "Integración completa entre telemedicina y medicamentos controlados"
    ],
    desafios: [
      "Armonizar dos leyes diferentes (27.553 y 19.303)",
      "Mantener controles de seguridad en formato digital",
      "Capacitación masiva de médicos y farmacéuticos",
      "Implementación gradual del sistema integrado"
    ],
    impacto: "Crítico - permitiría que los pacientes TDAH se beneficien completamente de la telemedicina",
    estado: "PROPUESTA - No presentada oficialmente",
    accionNecesaria: "Impulsar una reglamentación que integre ambas leyes para medicamentos controlados"
  }
]

const problemasReales = [
  {
    problema: "Receta triplicada manuscrita obligatoria para medicamentos controlados",
    descripcion: "Ley 19.303 exige recetas manuscritas para medicamentos TDAH, a pesar de que la Ley 27.553 permite recetas electrónicas para otros medicamentos",
    impacto: "Pacientes TDAH no pueden usar telemedicina completamente - deben ir presencialmente para renovar recetas",
    solucion: "Integrar Ley 27.553 con Ley 19.303 para medicamentos controlados",
    estado: "Conflicto entre Ley 27.553 (2020) y Ley 19.303 (1971)",
  },
  {
    problema: "Sistema de prescripción arcaico",
    descripcion: "Médicos deben completar formularios en papel, con múltiples sellos y autorizaciones",
    impacto: "Demoras de semanas para acceder a medicación",
    solucion: "Digitalización completa del proceso",
    estado: "Sin proyecto de ley",
  },
  {
    problema: "Prohibición de repetición de recetas",
    descripcion: "Ley 19.303 prohíbe dispensar medicamentos TDAH sin nueva consulta médica",
    impacto: "Costos mensuales adicionales y tiempo perdido en consultas innecesarias",
    solucion: "Permitir renovaciones automáticas para pacientes estables",
    estado: "Regulado por Ley 19.303 - Requiere modificación",
  },
  {
    problema: "Falta de médicos especializados",
    descripcion: "Pocos profesionales capacitados en TDAH adulto",
    impacto: "Listas de espera de meses para diagnóstico",
    solucion: "Programa de capacitación masiva",
    estado: "Sin proyecto de ley",
  },
]

export default function LegislacionPage() {
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
            Seguimiento automático con IA de leyes y proyectos relacionados al TDAH. Identificamos qué realmente
            beneficia a los pacientes vs. el "teatro político".
          </p>
        </div>

        {/* AI Analysis Alert */}
        <Card className="mb-8 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 dark:bg-purple-800 rounded-full p-3">
                <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Análisis con IA - Última actualización: {new Date().toLocaleDateString("es-AR")}
                </h3>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Nuestro sistema analiza automáticamente cada proyecto de ley, evaluando su impacto real en la vida de
                  las personas con TDAH vs. beneficios políticos superficiales.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Ver Tendencias
                  </Button>
                  <Button size="sm" variant="outline">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Alertas Críticas
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Projects Analysis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proyectos Actuales - Análisis IA</h2>
          <div className="space-y-6">
            {proyectosActuales.map((proyecto, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  proyecto.impactoReal === "alto"
                    ? "border-green-200 dark:border-green-800"
                    : proyecto.impactoReal === "negativo"
                      ? "border-red-200 dark:border-red-800"
                      : "border-yellow-200 dark:border-yellow-800"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center space-x-2">
                        <span>{proyecto.titulo}</span>
                        {proyecto.impactoReal === "alto" && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {proyecto.impactoReal === "negativo" && <XCircle className="h-5 w-5 text-red-600" />}
                        {proyecto.impactoReal === "bajo" && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-gray-900 mt-1">
                        {proyecto.descripcion}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={proyecto.estado === "En comisión" ? "default" : "secondary"}>
                        {proyecto.estado}
                      </Badge>
                      <Badge
                        variant={
                          proyecto.urgencia === "alta"
                            ? "destructive"
                            : proyecto.urgencia === "critica"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {proyecto.urgencia === "critica" ? "CRÍTICO" : proyecto.urgencia?.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* AI Analysis */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Brain className="h-4 w-4" />
                        <span>Análisis IA</span>
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Puntuación:</span>
                        <Badge
                          variant={
                            proyecto.analisisIA.puntuacion >= 8
                              ? "default"
                              : proyecto.analisisIA.puntuacion >= 5
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {proyecto.analisisIA.puntuacion}/10
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">✅ Beneficios</h5>
                        <ul className="space-y-1 text-sm">
                          {proyecto.analisisIA.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">❌ Problemas</h5>
                        <ul className="space-y-1 text-sm">
                          {proyecto.analisisIA.problemas.map((problema, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{problema}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-md ${
                        proyecto.analisisIA.puntuacion >= 8
                          ? "bg-green-100 dark:bg-green-900/20"
                          : proyecto.analisisIA.puntuacion >= 5
                            ? "bg-yellow-100 dark:bg-yellow-900/20"
                            : "bg-red-100 dark:bg-red-900/20"
                      }`}
                    >
                      <p className="font-medium text-sm">
                        <strong>Recomendación IA:</strong> {proyecto.analisisIA.recomendacion}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(proyecto.fecha).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      {proyecto.autor}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant={proyecto.impactoReal === "alto" ? "default" : "outline"}>
                      {proyecto.impactoReal === "alto"
                        ? "Apoyar Proyecto"
                        : proyecto.impactoReal === "negativo"
                          ? "Oponerse"
                          : "Ver Detalles"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Seguir en Congreso
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Propuestas Necesarias */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Propuestas Legislativas Necesarias
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Proyectos de ley que la comunidad TDAH debe impulsar para resolver problemas reales
          </p>
          <div className="space-y-6">
            {propuestasNecesarias.map((propuesta, index) => (
              <Card key={index} className="border-orange-500 dark:border-orange-400 bg-orange-50 dark:bg-orange-900/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-orange-900 dark:text-orange-100">
                        {propuesta.titulo}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-orange-800 dark:text-orange-200 mt-1">
                        {propuesta.descripcion}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-orange-500 text-orange-700 dark:text-orange-300">
                      {propuesta.estado}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h5 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                      🎯 Problema que resuelve:
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {propuesta.problemaQueResuelve}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">✅ Beneficios esperados</h5>
                      <ul className="space-y-1 text-sm">
                        {propuesta.beneficiosEsperados.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-400 mb-2">⚠️ Desafíos</h5>
                      <ul className="space-y-1 text-sm">
                        {propuesta.desafios.map((desafio, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{desafio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-600 dark:text-blue-400 font-semibold">Impacto:</div>
                      <div className="text-blue-800 dark:text-blue-200">{propuesta.impacto}</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="text-purple-600 dark:text-purple-400 font-semibold">Acción necesaria:</div>
                      <div className="text-purple-800 dark:text-purple-200">{propuesta.accionNecesaria}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real Problems Ignored */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Problemas Reales Identificados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemasReales.map((item, index) => (
              <Card key={index} className="border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span>{item.problema}</span>
                  </CardTitle>
                  <CardDescription>{item.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-red-700 dark:text-red-400 mb-1">Impacto Actual</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item.impacto}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-400 mb-1">Solución Propuesta</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item.solucion}</p>
                    </div>
                    <Badge variant="destructive" className="w-full justify-center">
                      {item.estado}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Laws */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Legislación Vigente - Análisis</h2>
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
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
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
                    <Button size="sm" onClick={() => window.open(ley.url, '_blank')}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Ley
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Center */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Proyectos para Apoyar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Estos proyectos realmente benefician a las personas con TDAH. Contacta a tus representantes para
                apoyarlos.
              </p>
              <div className="space-y-2">
                <Button className="w-full">Enviar Email a Diputados</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Compartir en Redes Sociales
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <span>Proyectos Peligrosos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Estos proyectos pueden dañar nuestros derechos o privacidad. Es importante oponerse activamente.
              </p>
              <div className="space-y-2">
                <Button variant="destructive" className="w-full">
                  Oponerse Formalmente
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Alertar a la Comunidad
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
