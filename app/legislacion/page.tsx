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
  Edit3,
} from "lucide-react"
import { Header } from "@/components/header"
import { useState } from "react"

// Leyes ordenadas de más recientes a más antiguas
const leyes = [
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
    numero: "Ley 27.306",
    titulo: "Abordaje Integral de Dificultades Específicas del Aprendizaje (DEA)",
    descripcion:
      "Establece el marco legal para la atención integral de sujetos con dificultades específicas del aprendizaje, incluyendo TDAH",
    fecha: "2016-11-04",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27306-267234/texto",
    ultimaActualizacion: "2016-11-04",
    analisisIA: {
      beneficios: [
        "Reconocimiento legal de DEA como alteraciones neurobiológicas",
        "Cobertura sanitaria obligatoria para detección, diagnóstico y tratamiento",
        "Adaptaciones curriculares específicas (tiempo extra, evaluaciones personalizadas)",
        "Formación docente obligatoria para detección temprana",
        "Incluye TDAH dentro del espectro de dificultades de aprendizaje",
      ],
      problemas: [
        "No menciona específicamente 'TDAH' en el texto legal",
        "Enfoque principalmente educativo, no médico",
        "Falta de protocolos específicos para medicación",
        "No aborda tratamiento farmacológico del TDAH",
        "Implementación depende de reglamentación posterior",
      ],
      puntuacion: 7.1,
      recomendacion:
        "Ley importante para aspectos educativos del TDAH, pero insuficiente para tratamiento médico integral",
    },
    puntosClave: [
      "Definición de DEA como alteraciones neurobiológicas",
      "Procedimientos de detección temprana en escuelas",
      "Adaptaciones curriculares específicas (tiempo extra, evaluación oral)",
      "Formación docente obligatoria",
      "Cobertura sanitaria para detección, diagnóstico y tratamiento",
      "Campañas de concientización y sensibilización",
    ],
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
          titulo: "Recetas para Lista II (Metilfenidato)",
          textoActual: `Los sicotrópicos incluidos en la Lista II, sólo podrán ser prescriptos por profesionales médicos matriculados ante autoridad competente, mediante recetas extendidas en formularios oficializados, por triplicado, conforme al modelo aprobado por la autoridad sanitaria nacional. Las recetas deberán ser manuscritas por el médico en forma legible, señalando la denominación del sicotrópico o la fórmula y su prescripción, con cantidades expresadas en letras y números, debiendo constar nombre, apellido, domicilio del enfermo y la dosis por vez y por día. Para despachar estas recetas el farmacéutico deberá numerarlas, siguiendo el número correlativo de asiento en el libro recetario, sellarlas, fecharlas y firmarlas en su original y duplicado, remitiendo este último dentro de los ocho (8) días del expendio a la autoridad sanitaria competente. El triplicado lo conservará el médico.

Las recetas a las que se refiere el presente artículo, serán despachadas por el farmacéutico por una única vez.`,
          problemasIdentificados: [
            "Manuscritas obligatorias: Incompatible con sistemas digitales modernos",
            "Triplicado: Burocracia innecesaria",
            "Una sola vez: Imposible para medicación crónica",
            "Formularios oficializados: Crea escasez de papelería"
          ],
          propuestaReescritura: `Los sicotrópicos incluidos en la Lista II podrán ser prescriptos por profesionales médicos matriculados ante autoridad competente, mediante recetas electrónicas certificadas con firma digital médica, conforme al sistema nacional de prescripción electrónica establecido por la autoridad sanitaria nacional, o subsidiariamente mediante recetas manuscritas en formularios oficializados.

Las recetas electrónicas deberán contener: denominación del sicotrópico, dosis, posología, cantidad total prescripta en números y letras, datos completos del paciente, diagnóstico CIE-10, y firma digital del médico prescriptor.

Para medicamentos de uso crónico en pacientes estables, el médico podrá autorizar hasta tres (3) dispensaciones del mismo tratamiento en un período de noventa (90) días, indicando claramente "MEDICACIÓN CRÓNICA - AUTORIZO 3 DISPENSACIONES".

Las recetas electrónicas serán registradas automáticamente en el sistema nacional de monitoreo, garantizando la trazabilidad y control.`,
          impactoTDAH: "Crítico - Impide acceso a medicación crónica como metilfenidato"
        },
        {
          articulo: "Artículo 14",
          titulo: "Recetas para Lista III y IV",
          textoActual: `Los sicotrópicos incluidos en las Listas III y IV sólo podrán despacharse bajo receta archivada, manuscrita, fechada y firmada por el médico.

Las recetas a que se refiere el presente artículo se despacharán por el farmacéutico una única vez, debiendo ser numeradas correlativamente siguiendo el número de asiento en el libro recetario, donde serán copiadas, selladas, fechadas y firmadas por el director técnico de la farmacia, archivándose durante dos (2) años.`,
          problemasIdentificados: [
            "Manuscritas obligatorias: Bloquea modernización digital",
            "Una única vez: Inapropiado para tratamientos crónicos",
            "Archivo físico 2 años: Burocracia farmacéutica costosa"
          ],
          propuestaReescritura: `Los sicotrópicos incluidos en las Listas III y IV podrán despacharse bajo receta electrónica certificada con firma digital médica o receta manuscrita fechada y firmada por el médico.

Para medicamentos de uso crónico, el médico podrá autorizar dispensaciones múltiples hasta por un período máximo de seis (6) meses, con controles periódicos según criterio médico.

Las recetas serán registradas en el sistema nacional de monitoreo electrónico, reemplazando el archivo físico. El registro electrónico tendrá la misma validez legal que el archivo físico y será conservado por cinco (5) años.`,
          impactoTDAH: "Alto - Afecta medicamentos como atomoxetina"
        },
        {
          articulo: "Artículo 16",
          titulo: "Límite de 20 días",
          textoActual: `En ningún caso podrán extenderse ni expenderse recetas cuya cantidad de sicotrópicos incluidos en la Lista II, exceda la necesaria para administrar, según la dosis instituida, hasta veinte (20) días de tratamiento.`,
          problemasIdentificados: [
            "20 días máximo: Obliga consultas médicas cada 20 días",
            "Inapropiado para TDAH: Medicación crónica requiere tratamientos largos",
            "Sobrecarga del sistema: Saturación de consultas médicas"
          ],
          propuestaReescritura: `Para sicotrópicos incluidos en la Lista II:

a) En tratamientos agudos: máximo veinte (20) días de tratamiento por prescripción.

b) En tratamientos crónicos estables (TDAH, narcolepsia, y otras condiciones aprobadas por la autoridad sanitaria): máximo noventa (90) días de tratamiento por prescripción, con renovación trimestral obligatoria y evaluación médica.

c) El médico debe indicar claramente "TRATAMIENTO CRÓNICO" en la prescripción y justificar la condición médica.

d) La autoridad sanitaria establecerá los criterios específicos para calificar un tratamiento como crónico estable.`,
          impactoTDAH: "Crítico - Mayor barrera para tratamiento continuo"
        },
        {
          articulo: "Artículo 18 bis",
          titulo: "Recetas Electrónicas",
          textoActual: `En caso de que las recetas mencionadas en la presente ley sean redactadas electrónicamente, o en caso de que los registros obligatorios sean llevados electrónicamente, la firma y demás requisitos técnicos y legales deben adecuarse a la legislación especial vigente y a lo que establezca la autoridad de aplicación.`,
          problemasIdentificados: [
            "Demasiado vago: No especifica cómo implementar",
            "Depende de reglamentación: Falta claridad operativa",
            "Conflicto con Arts. 13-14: Mantiene manuscritas como obligatorias"
          ],
          propuestaReescritura: `Las recetas electrónicas para sicotrópicos serán válidas cuando cumplan los siguientes requisitos:

a) Firma digital médica certificada por autoridad competente
b) Identificación única del prescriptor en el sistema nacional
c) Registro automático en la plataforma nacional de monitoreo
d) Encriptación de datos según estándares internacionales
e) Trazabilidad completa de la prescripción y dispensación

La autoridad sanitaria nacional establecerá los estándares técnicos y operará el sistema nacional de prescripción electrónica de psicotrópicos, garantizando interoperabilidad con sistemas provinciales.

Las recetas electrónicas tendrán la misma validez legal que las manuscritas y serán el método preferido para prescripciones de sicotrópicos.`,
          impactoTDAH: "Alto - Clave para modernización del sistema"
        }
      ],
      articulosPropuestos: [],
      resumenImpacto: {
        problemasPrincipales: [
          "Recetas manuscritas obligatorias impiden modernización digital",
          "Límite de 20 días inadecuado para medicación crónica",
          "Sistema triplicado genera burocracia excesiva",
          "Falta de provisiones específicas para TDAH adulto"
        ],
        beneficiosReforma: [
          "Prescripción electrónica con firma digital",
          "Dispensaciones múltiples para medicación crónica",
          "Reducción de burocracia farmacéutica",
          "Integración con telemedicina",
          "Tratamiento especializado para TDAH adulto"
        ],
        urgencia: "Alta - Bloquea acceso a tratamiento TDAH moderno",
        estimacionImpacto: "Beneficiaría directamente a 500,000+ pacientes TDAH en Argentina"
      }
    }
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


const propuestasNecesarias = [
  {
    titulo: "Modernización del Sistema de Recetas para Medicamentos TDAH",
    descripcion:
      "Reforma integral de la Ley 19.303 para permitir recetas electrónicas y extender el período de prescripción para medicamentos TDAH, eliminando la burocracia del sistema triplicado manuscrito",
    problemaQueResuelve:
      "Sistema de recetas obsoleto y burocrático que obliga a consultas presenciales cada 20 días",
    beneficiosEsperados: [
      "Recetas electrónicas con firma digital médica para medicamentos TDAH",
      "Prescripciones de 90 días para pacientes estables (vs. 20 días actuales)",
      "Integración completa con telemedicina",
      "Eliminación de formularios triplicados manuscritos",
      "Renovaciones automáticas para medicación crónica",
      "Archivo digital único reemplazando papelería física",
    ],
    desafios: [
      "Modificar artículos específicos de la Ley 19.303",
      "Mantener controles de seguridad en formato digital",
      "Capacitación del sistema de salud",
      "Resistencia del sector farmacéutico tradicional",
    ],
    impacto: "Alto - Reduciría costos y tiempo para pacientes, mejorando acceso a tratamiento",
    estado: "PROPUESTA - Requiere modificación legislativa",
    accionNecesaria: "Impulsar reforma de la Ley 19.303 integrándola con recetas electrónicas",
  },
  {
    titulo: "Ampliación del Vademécum de Medicamentos TDAH",
    descripcion:
      "Aprobación y registro de medicamentos adicionales para TDAH como lisdexanfetamina (Vyvanse) y anfetamina mixta (Adderall) que están aprobados por FDA pero no disponibles en Argentina",
    problemaQueResuelve:
      "Opciones limitadas de medicación para pacientes que no responden a metilfenidato o atomoxetina",
    beneficiosEsperados: [
      "Acceso a lisdexanfetamina (Vyvanse) para pacientes con respuesta limitada",
      "Disponibilidad de anfetamina mixta (Adderall) como alternativa",
      "Mejores opciones para pacientes con efectos adversos",
      "Tratamientos personalizados según perfil del paciente",
      "Reducción de abandono de tratamiento por falta de opciones",
    ],
    desafios: [
      "Proceso de registro ANMAT para nuevos medicamentos",
      "Negociación con laboratorios internacionales",
      "Estudios de costo-efectividad locales",
      "Capacitación médica en nuevas opciones terapéuticas",
    ],
    impacto: "Medio - Beneficiaría especialmente a pacientes con respuesta inadecuada a opciones actuales",
    estado: "PROPUESTA - Requiere gestión con ANMAT",
    accionNecesaria: "Solicitar a ANMAT la evaluación y registro de medicamentos TDAH adicionales",
  },
  {
    titulo: "Reconocimiento Oficial de Especialización en TDAH Adulto",
    descripcion:
      "Creación de una subespecialidad médica oficialmente reconocida en TDAH adulto, con programas de formación específicos y certificación para profesionales",
    problemaQueResuelve:
      "Falta de especialistas capacitados que resulta en listas de espera largas y tratamiento inadecuado",
    beneficiosEsperados: [
      "Formación específica y certificada en TDAH adulto",
      "Reducción de listas de espera para diagnóstico",
      "Mejora en calidad de diagnóstico y tratamiento",
      "Mayor número de profesionales capacitados",
      "Protocolos estandarizados de atención",
    ],
    desafios: [
      "Desarrollo de currícula específica para TDAH adulto",
      "Coordinación entre universidades y sociedades médicas",
      "Financiamiento de programas de capacitación",
      "Tiempo de implementación y certificación",
    ],
    impacto: "Alto - Mejoraría significativamente el acceso y calidad de atención",
    estado: "PROPUESTA - Requiere coordinación educativa y regulatoria",
    accionNecesaria: "Impulsar reconocimiento ministerial de la subespecialidad y programas de formación",
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
                              ✅ Beneficios de la Reforma
                            </h4>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                              {ley.analisisDetallado.resumenImpacto.beneficiosReforma.map((beneficio, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-green-600 mt-1">•</span>
                                  <span>{beneficio}</span>
                                </li>
                              ))}
                            </ul>
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
                                
                                <div>
                                  <h5 className="font-medium text-green-700 dark:text-green-400 mb-2 flex items-center">
                                    <Edit3 className="h-4 w-4 mr-1" />
                                    Propuesta de Reescritura
                                  </h5>
                                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-sm text-green-900 dark:text-green-100 whitespace-pre-wrap">
                                    {articulo.propuestaReescritura}
                                  </div>
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
