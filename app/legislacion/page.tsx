"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Calendar,
  ExternalLink,
  Brain,
  Clock,
  ChevronDown,
  ChevronUp,
  Gavel,
} from "lucide-react"
import { Header } from "@/components/header"
import { useState } from "react"

// Leyes principales relevantes para TDAH
const leyes = [
  {
    numero: "Ley 27.553",
    titulo: "Ley de Recetas Electrónicas o Digitales",
    descripcion: "Establece que las prescripciones solo pueden ser redactadas a través de plataformas electrónicas habilitadas y habilita la telemedicina",
    fecha: "2020-08-11",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Honorable Congreso de la Nación Argentina",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27553-340919/actualizacion",
    ultimaActualizacion: "2023-12-21",
    analisisIA: {
      beneficios: [
        "Art. 1º: Establece recetas electrónicas obligatorias para toda prescripción",
        "Art. 2º: Medicamentos dispensables en cualquier farmacia del territorio nacional",
        "Art. 6º: Habilita telemedicina para medicina y odontología",
        "Art. 11: Agrega Art. 18 bis a Ley 19.303 permitiendo recetas electrónicas",
        "Art. 12: Digitalización obligatoria de estupefacientes y psicotrópicos",
      ],
      problemas: [
        "Art. 3º: Plazo de implementación vencido (1º julio 2024)",
        "Falta reglamentación específica para medicamentos controlados",
        "Art. 11 solo 'permite' recetas electrónicas en Ley 19.303, no las obliga",
        "Conflicto: esta ley obliga electrónicas, Ley 19.303 exige manuscritas",
        "Farmacias no adoptan por miedo a conflicto legal",
      ],
      puntuacion: 6.8,
      recomendacion: "Ley excelente en teoría pero mal implementada - conflicto no resuelto con Ley 19.303 para medicamentos TDAH",
    },
    puntosClave: [
      "Art. 1º: Recetas electrónicas obligatorias (en teoría)",
      "Art. 2º: Dispensación nacional en cualquier farmacia",
      "Art. 6º: Telemedicina habilitada oficialmente",
      "Art. 11: Modifica Ley 19.303 agregando Art. 18 bis",
      "Art. 3º: Plazo implementación vencido (julio 2024)",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 1º",
          titulo: "Objeto de la Ley - Recetas Electrónicas Obligatorias",
          textoActual: `La presente ley tiene por objeto:

Establecer que la prescripción y dispensación de medicamentos, y toda otra prescripción, solo puedan ser redactadas y firmadas a través de plataformas electrónicas habilitadas a tal fin.

Establecer que puedan utilizarse plataformas de teleasistencia en salud, en todo el territorio nacional, de conformidad con la Ley N° 25.326 de Protección de los Datos Personales y la Ley N° 26.529 de Derechos del Paciente.`,
          problemasIdentificados: [
            "Dice 'solo puedan' pero no deroga explícitamente las recetas manuscritas",
            "No menciona cómo resolver conflictos con leyes anteriores",
            "Falta especificidad sobre medicamentos controlados",
            "No establece sanciones por incumplimiento"
          ],
          propuestaReescritura: `La presente ley tiene por objeto:

a) Establecer que la prescripción y dispensación de medicamentos, y toda otra prescripción, DEBEN ser redactadas y firmadas exclusivamente a través de plataformas electrónicas habilitadas, reemplazando definitivamente las recetas manuscritas.

b) Derogar expresamente toda disposición legal que exija recetas manuscritas, incluidos los artículos 13 y 14 de la Ley 19.303.

c) Establecer que los medicamentos controlados (psicotrópicos y estupefacientes) se rigen por esta ley, manteniendo controles de seguridad en formato digital.

d) Habilitar plataformas de teleasistencia en salud con las mismas garantías de seguridad y privacidad.`,
          impactoTDAH: "Crítico - Si fuera aplicado correctamente resolvería el problema de recetas manuscritas"
        },
        {
          articulo: "Artículo 3º",
          titulo: "Plazo de Implementación Vencido",
          textoActual: `El Poder Ejecutivo Nacional establece los plazos necesarios para alcanzar la digitalización total en prescripción y dispensación de medicamentos y toda otra prescripción, el cual no podrá superar el 1° de julio de 2024, y regular el uso de plataformas de teleasistencia en salud.`,
          problemasIdentificados: [
            "Plazo vencido sin implementación efectiva",
            "No especifica sanciones por incumplimiento del plazo",
            "Falta autoridad de aplicación clara",
            "No hay mecanismo de seguimiento del cumplimiento"
          ],
          propuestaReescritura: `La autoridad de aplicación debe:

a) Implementar inmediatamente la digitalización total, sin excepciones.

b) Establecer un nuevo plazo máximo de 90 días para completar la migración.

c) Crear un sistema de monitoreo público del avance de implementación.

d) Aplicar sanciones a instituciones que no cumplan con la digitalización.

e) Designar una autoridad de aplicación específica con presupuesto asignado.`,
          impactoTDAH: "Alto - Plazo vencido mantiene el limbo legal actual"
        },
        {
          articulo: "Artículo 11",
          titulo: "Modificación Insuficiente de Ley 19.303",
          textoActual: `Incorpórase el artículo 18 bis a la ley 19.303, el que quedará redactado de la siguiente manera:

Artículo 18 bis: En caso de que las recetas mencionadas en la presente ley sean redactadas electrónicamente, o en caso de que los registros obligatorios sean llevados electrónicamente, la firma y demás requisitos técnicos y legales deben adecuarse a la legislación especial vigente y a lo que establezca la autoridad de aplicación.`,
          problemasIdentificados: [
            "Solo 'permite' recetas electrónicas, no las obliga",
            "No deroga los artículos 13-14 que exigen manuscritas",
            "Frase 'en caso de que' mantiene opcionalidad",
            "Falta reglamentación específica de la autoridad"
          ],
          propuestaReescritura: `Sustitúyanse los artículos 13, 14 y 16 de la Ley 19.303, los que quedarán redactados de la siguiente manera:

Artículo 13: Los sicotrópicos incluidos en la Lista II solo podrán ser prescriptos por profesionales médicos matriculados mediante recetas electrónicas con firma digital certificada. Para medicación crónica como TDAH, se permite prescripción por hasta 90 días con renovación trimestral.

Artículo 14: Los sicotrópicos incluidos en las Listas III y IV solo podrán despacharse bajo receta electrónica archivada digitalmente por 5 años.

Artículo 16: Las prescripciones de Lista II para medicación crónica pueden extenderse hasta 90 días de tratamiento, con controles médicos según criterio profesional.`,
          impactoTDAH: "Crítico - Reforma insuficiente mantiene conflicto legal"
        }
      ],
      articulosPropuestos: [],
      resumenImpacto: {
        problemasPrincipales: [
          "Ley excelente en principio pero mal redactada para resolver conflictos",
          "Plazo de implementación vencido sin consecuencias",
          "Modificación insuficiente de Ley 19.303 mantiene ambigüedad",
          "Falta autoridad de aplicación con poder real"
        ],
        solucionSimple: "Decreto que clarifique implementación inmediata de recetas electrónicas sin excepciones",
        urgencia: "Alta - Ley vigente pero inaplicable por conflictos legales",
        estimacionImpacto: "Resolvería completamente el problema de recetas para 500,000+ pacientes TDAH"
      }
    }
  },
  {
    numero: "Ley 19.303",
    titulo: "Ley de Psicotrópicos",
    descripcion:
      "Regula la fabricación, comercialización, circulación y uso de sustancias psicotrópicas. Incluye metilfenidato en Lista II con restricciones estrictas",
    fecha: "1971-10-28",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Poder Ejecutivo Nacional",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966/actualizacion",
    ultimaActualizacion: "2020-08-11",
    analisisIA: {
      beneficios: [
        "Marco legal para control de psicotrópicos desde 1971",
        "Prevención del uso indebido y tráfico ilícito",
        "Control de calidad y seguridad de medicamentos",
        "Artículo 18 bis permite recetas electrónicas (agregado 2020)",
        "Sistema de listas según riesgo de abuso",
      ],
      problemas: [
        "Artículos 13-14: Exigen recetas manuscritas triplicadas para metilfenidato",
        "Artículo 16: Límite de 20 días máximo por prescripción",
        "Una sola dispensación por receta impide renovaciones",
        "Archivo físico obligatorio de recetas por 2 años",
        "Conflicto con Ley 27.553 de recetas electrónicas",
      ],
      puntuacion: 4.2,
      recomendacion: "Ley desactualizada para TDAH - obstaculiza tratamiento moderno con burocracia de los años 70",
    },
    puntosClave: [
      "Metilfenidato clasificado en Lista II (máximo control)",
      "Art. 13: Receta triplicada manuscrita obligatoria",
      "Art. 16: Máximo 20 días de tratamiento por prescripción",
      "Art. 14: Una sola dispensación, archivo 2 años",
      "Art. 18 bis: Permite recetas electrónicas (no reglamentado)",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 13",
          titulo: "Recetas manuscritas triplicadas obligatorias",
          textoActual: `Los sicotrópicos incluidos en la Lista II, sólo podrán ser prescriptos por profesionales médicos matriculados... mediante recetas extendidas en formularios oficializados, por triplicado... Las recetas deberán ser manuscritas por el médico en forma legible...`,
          problemasIdentificados: [
            "Manuscritas obligatorias incompatibles con recetas electrónicas",
            "Sistema triplicado genera burocracia innecesaria",
            "Una sola dispensación imposibilita medicación crónica"
          ],
          impactoTDAH: "Crítico - Impide acceso a medicación crónica como metilfenidato"
        },
        {
          articulo: "Artículo 16",
          titulo: "Límite de 20 días máximo",
          textoActual: `En ningún caso podrán extenderse ni expenderse recetas cuya cantidad de sicotrópicos incluidos en la Lista II, exceda la necesaria para administrar... hasta veinte (20) días de tratamiento.`,
          problemasIdentificados: [
            "Obliga consultas médicas cada 20 días para medicación crónica",
            "Inapropiado para TDAH que requiere tratamiento continuo",
            "Sobrecarga innecesaria del sistema de salud"
          ],
          impactoTDAH: "Crítico - Principal barrera para tratamiento TDAH"
        }
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "Conflicto directo con Ley 27.553 de recetas electrónicas",
          "Límite de 20 días inadecuado para medicación crónica TDAH",
          "Sistema manuscrito obsoleto en era digital"
        ],
        solucionSimple: "Decreto presidencial que clarifique prevalencia de Ley 27.553 para medicamentos TDAH",
        urgencia: "Alta - Afecta a 500,000+ pacientes TDAH en Argentina"
      }
    }
  },
]


const propuestasNecesarias = [
  {
    titulo: "Decreto para Recetas Electrónicas en Medicamentos TDAH",
    descripcion:
      "Decreto presidencial que clarifique que la Ley 27.553 prevalece sobre los requisitos manuscritos de la Ley 19.303 para medicamentos TDAH",
    problemaQueResuelve:
      "Conflicto legal entre dos leyes que impide el uso de recetas electrónicas para medicamentos TDAH",
    beneficiosEsperados: [
      "Recetas electrónicas permitidas inmediatamente",
      "Prescripciones de 90 días para medicación crónica",
      "Reducción de consultas innecesarias cada 20 días",
      "Ahorro de tiempo y dinero para pacientes",
      "Uso de infraestructura digital existente",
    ],
    ventajas: [
      "No requiere presupuesto público adicional",
      "Implementación inmediata",
      "Base constitucional sólida (Art. 99)",
      "Precedentes exitosos (Decreto 98/23)",
    ],
    impacto: "Alto - Beneficiaría inmediatamente a 500,000+ pacientes",
    estado: "VIABLE - Solo requiere decisión ejecutiva",
    accionNecesaria: "Solicitar al Presidente que emita decreto reglamentario",
  },
  {
    titulo: "Registro de Lisdexanfetamina (Vyvanse) en Argentina",
    descripcion:
      "Gestión con ANMAT para el registro y aprobación de lisdexanfetamina, medicamento TDAH aprobado por FDA y EMA que no está disponible en Argentina",
    problemaQueResuelve:
      "Opciones limitadas de medicación para pacientes que no responden a metilfenidato o atomoxetina",
    beneficiosEsperados: [
      "Acceso a lisdexanfetamina para pacientes con respuesta limitada",
      "Opción para pacientes con efectos adversos a medicamentos actuales",
      "Tratamiento más personalizado según perfil del paciente",
      "Reducción de abandono de tratamiento",
    ],
    ventajas: [
      "Medicamento ya aprobado por FDA y EMA",
      "No requiere presupuesto público - proceso normal ANMAT", 
      "Beneficio inmediato para pacientes resistentes",
      "Amplia evidencia científica internacional",
    ],
    impacto: "Medio-Alto - Beneficiaría especialmente a pacientes con respuesta inadecuada",
    estado: "VIABLE - Requiere gestión regulatoria",
    accionNecesaria: "Solicitar a ANMAT la evaluación y registro prioritario de lisdexanfetamina",
  },
  {
    titulo: "Proyecto de Ley de Modernización de Prescripción de Medicamentos TDAH",
    descripcion:
      "Modificación específica de los artículos 13 y 16 de la Ley 19.303 para permitir recetas electrónicas y prescripciones de 90 días para medicación crónica TDAH",
    problemaQueResuelve:
      "Conflicto legal definitivo entre Ley 19.303 y Ley 27.553 que requiere solución legislativa permanente",
    beneficiosEsperados: [
      "Solución permanente que no puede revertirse por decreto",
      "Recetas electrónicas legalmente válidas para medicamentos TDAH",
      "Prescripciones de 90 días para pacientes estables",
      "Integración completa con telemedicina",
      "Marco legal moderno alineado con estándares internacionales",
    ],
    ventajas: [
      "Mayor legitimidad democrática que un decreto",
      "Solución permanente vs. medidas temporales",
      "No requiere presupuesto público adicional",
      "Precedentes exitosos internacionales (Reino Unido, España)",
    ],
    impacto: "Alto - Resolvería definitivamente el conflicto legal para todas las futuras administraciones",
    estado: "PROPUESTA - Requiere impulso legislativo",
    accionNecesaria: "Impulsar proyecto de ley en Cámara de Diputados o Senado",
  },
]

const problemasReales = [
  {
    problema: "Sistema de recetas obsoleto y burocrático",
    descripcion:
      "Los medicamentos TDAH requieren receta manuscrita triplicada que no se puede enviar electrónicamente. Esto obliga a consultas presenciales cada 20 días, incluso para pacientes estables con medicación crónica.",
    esUrgente: true,
  },
  {
    problema: "Opciones limitadas de medicación",
    descripcion:
      "En Argentina solo está disponible metilfenidato y atomoxetina. No existen Vyvanse (lisdexanfetamina), Adderall (anfetamina mixta) ni otros estimulantes aprobados por FDA para pacientes que no responden bien a las opciones actuales.",
    esUrgente: false,
  },
  {
    problema: "Falta de especialistas en TDAH adulto",
    descripcion:
      "No existe formación específica ni reconocimiento oficial de especialización en TDAH adulto, resultando en listas de espera de 3-6 meses para diagnóstico y tratamiento inadecuado por médicos sin especialización.",
    esUrgente: false,
  }
]

export default function LegislacionPage() {
  const [expandedLaw, setExpandedLaw] = useState<string | null>(null)

  const toggleLawDetails = (lawNumber: string) => {
    setExpandedLaw(expandedLaw === lawNumber ? null : lawNumber)
  }

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

        {/* Real Problems - SIMPLIFIED */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Problemas Reales Identificados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemasReales.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/10">
                <CardHeader>
                  <CardTitle className="text-lg text-red-900 dark:text-red-100">
                    {item.problema}
                  </CardTitle>
                  <CardDescription className="text-red-800 dark:text-red-200">
                    {item.descripcion}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Propuestas Necesarias - MOVED HERE after problems */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Propuestas Legislativas Necesarias</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Proyectos de ley que la comunidad TDAH debe impulsar para resolver problemas reales
          </p>
          <div className="space-y-6">
            {propuestasNecesarias.map((propuesta, index) => (
              <Card key={index} className="border-orange-500 dark:border-orange-400 bg-orange-50 dark:bg-orange-900/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-orange-900 dark:text-orange-100">{propuesta.titulo}</CardTitle>
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
                    <h5 className="font-semibold text-red-700 dark:text-red-400 mb-2">🎯 Problema que resuelve:</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{propuesta.problemaQueResuelve}</p>
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
                      <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">💡 Ventajas clave</h5>
                      <ul className="space-y-1 text-sm">
                        {propuesta.ventajas.map((ventaja, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{ventaja}</span>
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




        {/* Current Laws */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Leyes Vigentes - Análisis</h2>
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
                    <Button size="sm" onClick={() => window.open(ley.url, "_blank")}>
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
                              {ley.analisisDetallado.resumenImpacto.problemasPrincipales.map((problema, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-red-600 mt-1">•</span>
                                  <span>{problema}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                              ✅ Solución Simple
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              {ley.analisisDetallado.resumenImpacto.solucionSimple || "Reforma integral necesaria"}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
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
                            <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
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
                                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                    {articulo.textoActual}
                                  </div>
                                </div>
                                
                                <div>
                                  <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">❌ Problemas Identificados</h5>
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
    </div>
  )
}
