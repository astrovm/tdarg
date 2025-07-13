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
  Clock,
  ChevronDown,
  ChevronUp,
  Gavel,
  Edit3,
} from "lucide-react"
import { Header } from "@/components/header"
import { useLegislacionTracker } from "@/hooks/use-legislacion-tracker"
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
      "Regula la fabricación, distribución y uso de sustancias psicotrópicas incluyendo medicamentos para TDAH",
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
      articulosPropuestos: [
        {
          articulo: "Artículo 13 TER",
          titulo: "Tratamiento TDAH en Adultos",
          justificacion: "Necesario para regular específicamente el tratamiento TDAH adulto",
          textoPropuesto: `Para el tratamiento del Trastorno por Déficit de Atención e Hiperactividad (TDAH) en pacientes adultos:

a) Los profesionales médicos especializados en psiquiatría, neurología, o medicina interna con formación específica en TDAH adulto, podrán prescribir medicamentos de Lista II por períodos de hasta noventa (90) días.

b) La prescripción inicial requerirá evaluación diagnóstica completa con criterios DSM-5 o CIE-11.

c) Las renovaciones posteriores podrán realizarse mediante telemedicina con control trimestral presencial.

d) El paciente debe ser informado sobre efectos adversos y firmará consentimiento informado.

e) La autoridad sanitaria establecerá protocolos específicos para el diagnóstico y seguimiento del TDAH adulto.`,
          beneficiosEsperados: [
            "Reconocimiento legal del TDAH adulto",
            "Tratamiento especializado por profesionales capacitados",
            "Integración con telemedicina",
            "Protocolos específicos de diagnóstico y seguimiento"
          ]
        }
      ],
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

// Decretos ordenados de más recientes a más antiguos
const decretos = [
  {
    numero: "Decreto 345/2024",
    titulo: "Digitalización de Recetas Médicas",
    descripcion: "Establece la obligatoriedad de recetas electrónicas y digitaliza el sistema de prescripción médica",
    fecha: "2024-04-22",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Poder Ejecutivo Nacional",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/decreto-345-2024-398297/texto",
    ultimaActualizacion: "2024-04-22",
    analisisIA: {
      beneficios: [
        "Digitalización completa del sistema de prescripciones",
        "Registro unificado de recetas electrónicas",
        "Mejora la eficiencia en dispensación de medicamentos",
        "Facilita seguimiento de tratamientos crónicos como TDAH",
        "Reduce errores de prescripción y falsificaciones",
      ],
      problemas: [
        "Requiere adaptación tecnológica masiva",
        "Posible resistencia de médicos y farmacéuticos",
        "Necesita infraestructura digital en todo el país",
        "No resuelve conflicto con receta triplicada de Ley 19.303",
      ],
      puntuacion: 8.7,
      recomendacion:
        "Decreto muy positivo para TDAH - moderniza sistema pero necesita integración con leyes existentes",
    },
    puntosClave: [
      "Recetas electrónicas obligatorias a nivel nacional",
      "Registro centralizado de prescripciones",
      "Dispensación de medicamentos por canales electrónicos",
      "Interoperabilidad entre plataformas de salud",
      "Seguridad y protección de datos médicos",
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
]

// Resoluciones ordenadas de más recientes a más antiguas
const resoluciones = [
  {
    numero: "Resolución 5744/2024",
    titulo: "Repositorios de Recetas Electrónicas",
    descripcion:
      "Regula los repositorios de recetas electrónicas y mejora la interoperabilidad del sistema de prescripciones",
    fecha: "2024-11-29",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Ministerio de Salud",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-5744-2024-406757/texto",
    ultimaActualizacion: "2024-11-29",
    analisisIA: {
      beneficios: [
        "Interoperabilidad completa entre sistemas de recetas electrónicas",
        "Acceso a prescripciones desde cualquier farmacia del país",
        "Estándares técnicos unificados para repositorios",
        "Mejora significativa para pacientes con tratamientos crónicos TDAH",
        "Protección de datos médicos personales",
      ],
      problemas: [
        "Implementación gradual puede generar confusión inicial",
        "Requiere actualización de sistemas existentes",
        "No resuelve el conflicto con receta triplicada manuscrita",
        "Depende de adopción por parte de farmacias",
      ],
      puntuacion: 8.4,
      recomendacion:
        "Resolución muy positiva - complementa perfectamente el Decreto 345/2024 para modernizar el sistema",
    },
    puntosClave: [
      "Repositorios de recetas accesibles a todas las plataformas",
      "Interoperabilidad entre sistemas de salud",
      "Acceso nacional a prescripciones electrónicas",
      "Estándares técnicos para almacenamiento seguro",
      "Protección de privacidad de datos médicos",
    ],
  },
]

const propuestasNecesarias = [
  {
    titulo: "Integración de Ley 27.553 con Ley 19.303 - Recetas Electrónicas para Medicamentos Controlados TDAH",
    descripcion:
      "Propuesta para actualizar la Ley 19.303 para que sea compatible con la Ley 27.553 de recetas electrónicas, permitiendo prescripciones digitales para medicamentos controlados como metilfenidato y atomoxetina",
    problemaQueResuelve:
      "La Ley 27.553 permite recetas electrónicas, pero la Ley 19.303 aún exige receta triplicada manuscrita para medicamentos TDAH",
    beneficiosEsperados: [
      "Aplicación de receta electrónica (Ley 27.553) a medicamentos controlados TDAH",
      "Eliminación de receta triplicada manuscrita manteniendo control de seguridad",
      "Firma digital médica para prescripciones de psicotrópicos",
      "Renovaciones electrónicas para pacientes estables",
      "Integración completa entre telemedicina y medicamentos controlados",
    ],
    desafios: [
      "Armonizar dos leyes diferentes (27.553 y 19.303)",
      "Mantener controles de seguridad en formato digital",
      "Capacitación masiva de médicos y farmacéuticos",
      "Implementación gradual del sistema integrado",
    ],
    impacto: "Crítico - permitiría que los pacientes TDAH se beneficien completamente de la telemedicina",
    estado: "PROPUESTA - No presentada oficialmente",
    accionNecesaria: "Impulsar una reglamentación que integre ambas leyes para medicamentos controlados",
  },
]

const problemasReales = [
  {
    problema: "🚨 CRÍTICO 2025: Conflicto entre Ley 27.553 y Ley 19.303 sobre recetas electrónicas",
    descripcion:
      "Ley 27.553 permite recetas electrónicas, pero Ley 19.303 (artículos 13 y 14) exige específicamente recetas manuscritas para psicotrópicos TDAH. Artículo 18 bis permite electrónicas pero falta reglamentación de autoridad competente.",
    impacto:
      "Farmacias rechazan recetas electrónicas por miedo a infracciones. Pacientes TDAH deben ir presencialmente pese a telemedicina disponible.",
    solucion:
      "Reglamentación específica que integre artículo 18 bis con Decreto 345/2024 para medicamentos controlados + capacitación farmacéutica",
    estado: "URGENTE - Conflicto legal sin resolver",
    esUrgente: true,
    articulosAfectados: [
      "Ley 27.553: Recetas electrónicas válidas ✅",
      "Ley 19.303 Art. 18 bis: Permite electrónicas 'según autoridad' ⚠️",
      "Ley 19.303 Art. 13: Exige manuscritas para Lista II ❌",
      "Ley 19.303 Art. 14: Manuscritas, firmadas, una sola vez ❌"
    ],
    urlLey: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966/actualizacion",
    leyConflictiva: "Ley 19.303 vs Ley 27.553",
    problemaReal: "Falta reglamentación específica del artículo 18 bis para psicotrópicos"
  },
  {
    problema: "Límite de 20 días en prescripción de medicamentos TDAH",
    descripcion:
      "Artículo 16 de Ley 19.303 limita prescripciones de Lista II (metilfenidato) a máximo 20 días, requiriendo consulta médica cada 20 días para pacientes crónicos estables.",
    impacto:
      "Costos médicos excesivos, tiempo perdido, saturación del sistema de salud por consultas innecesarias para renovar medicación estable.",
    solucion:
      "Modificar artículo 16 para permitir prescripciones de hasta 90 días en pacientes TDAH estables con seguimiento trimestral",
    estado: "Regulado por Ley 19.303 Art. 16 - Requiere modificación",
    esUrgente: false,
    articulosAfectados: [
      "Ley 19.303 Art. 16: Máximo 20 días para Lista II ❌"
    ],
    urlLey: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966/actualizacion",
    leyConflictiva: "Ley 19.303 Art. 16",
    problemaReal: "Enfoque agudo para tratamiento crónico"
  },
  {
    problema: "Archivo obligatorio de recetas por 2 años genera burocracia farmacéutica",
    descripcion:
      "Artículo 14 de Ley 19.303 exige archivo físico de recetas por 2 años. Con Decreto 345/2024 digital, genera doble archivo: físico y digital.",
    impacto:
      "Farmacias prefieren evitar medicamentos controlados por costos administrativos. Reduce puntos de dispensación disponibles para pacientes TDAH.",
    solucion:
      "Integrar artículo 14 con Decreto 345/2024 para archivo digital único con misma validez legal",
    estado: "Ley 19.303 Art. 14 vs Decreto 345/2024",
    esUrgente: false,
    articulosAfectados: [
      "Ley 19.303 Art. 14: Archivo físico 2 años ❌",
      "Decreto 345/2024: Sistema digital ✅"
    ],
    urlLey: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966/actualizacion",
    leyConflictiva: "Ley 19.303 vs Decreto 345/2024",
    problemaReal: "Doble burocracia: física + digital"
  },
  {
    problema: "Falta de especialistas en TDAH adulto sin marco legal de formación",
    descripcion:
      "Sin leyes específicas que regulen formación en TDAH adulto. Ley 27.306 enfoca aprendizaje escolar, no especialización médica adulta.",
    impacto:
      "Listas de espera de 3-6 meses para diagnóstico TDAH adulto. Pacientes derivan a neurología o psiquiatría general sin especialización.",
    solucion:
      "Ley específica de formación en TDAH adulto + reconocimiento de subespecialidad médica",
    estado: "Sin marco legal - Vacío regulatorio",
    esUrgente: false,
    articulosAfectados: [
      "Ley 27.306: Solo DEA escolar ⚠️",
      "Falta: Ley de especialización TDAH adulto ❌"
    ],
    urlLey: "https://www.argentina.gob.ar/normativa/nacional/ley-27306-267234/texto",
    leyConflictiva: "Vacío legal en Ley 27.306",
    problemaReal: "Marco legal incompleto para TDAH adulto"
  }
]

export default function LegislacionPage() {
  const { proyectos, loading, error } = useLegislacionTracker()
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

        {/* Real Problems Ignored - NOW AT TOP */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Problemas Reales Identificados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemasReales.map((item, index) => (
              <Card
                key={index}
                className={`${item.esUrgente ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-orange-200 dark:border-orange-800"}`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-lg flex items-center space-x-2 ${item.esUrgente ? "text-red-900 dark:text-red-100" : ""}`}
                  >
                    <Clock className={`h-5 w-5 ${item.esUrgente ? "text-red-600" : "text-orange-600"}`} />
                    <span>{item.problema}</span>
                  </CardTitle>
                  <CardDescription className={item.esUrgente ? "text-red-800 dark:text-red-200" : ""}>
                    {item.descripcion}
                  </CardDescription>
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
                    {item.articulosAfectados && (
                      <div>
                        <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-1">Conflicto Legal</h5>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                          {item.articulosAfectados.map((articulo, idx) => (
                            <li
                              key={idx}
                              className={`${articulo.includes("✅") ? "text-green-600 dark:text-green-400" : articulo.includes("❌") ? "text-red-600 dark:text-red-400" : ""}`}
                            >
                              • {articulo}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.leyConflictiva && (
                      <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg mb-2">
                        <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-1">⚖️ Conflicto Legal</h5>
                        <p className="text-xs text-blue-700 dark:text-blue-300">{item.leyConflictiva}</p>
                      </div>
                    )}
                    {item.problemaReal && (
                      <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg">
                        <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">💡 Problema Real</h5>
                        <p className="text-xs text-yellow-700 dark:text-yellow-300">{item.problemaReal}</p>
                      </div>
                    )}
                    <Badge variant={item.esUrgente ? "destructive" : "destructive"} className="w-full justify-center">
                      {item.estado}
                    </Badge>
                    {item.urlLey && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open(item.urlLey, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Ley Completa
                      </Button>
                    )}
                  </div>
                </CardContent>
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


        {/* Current Projects Analysis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proyectos Actuales - Análisis IA</h2>
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-red-600">Error: {error}</div>
          ) : (
            <div className="space-y-6">
              {proyectos.map((proyecto, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow ${
                    proyecto.analisisIA.impactoReal === "alto"
                      ? "border-green-200 dark:border-green-800"
                      : proyecto.analisisIA.impactoReal === "negativo"
                        ? "border-red-200 dark:border-red-800"
                        : "border-yellow-200 dark:border-yellow-800"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center space-x-2">
                          <span>{proyecto.titulo}</span>
                          {proyecto.analisisIA.impactoReal === "alto" && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                          {proyecto.analisisIA.impactoReal === "negativo" && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                          {proyecto.analisisIA.impactoReal === "bajo" && (
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          )}
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
                  </CardHeader>
                  <CardContent>
                    {/* AI Analysis */}
                    <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold flex items-center space-x-2">
                          <Brain className="h-4 w-4" />
                          <span>Análisis IA</span>
                        </h4>
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
                      <Button size="sm" variant={proyecto.analisisIA.impactoReal === "alto" ? "default" : "outline"}>
                        {proyecto.analisisIA.impactoReal === "alto"
                          ? "Apoyar Proyecto"
                          : proyecto.analisisIA.impactoReal === "negativo"
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
          )}
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

                      {/* Proposed New Articles */}
                      {ley.analisisDetallado.articulosPropuestos.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            ➕ Artículos Propuestos
                          </h3>
                          <div className="space-y-4">
                            {ley.analisisDetallado.articulosPropuestos.map((articuloPropuesto, idx) => (
                              <div key={idx} className="border border-orange-200 dark:border-orange-700 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
                                <div className="mb-3">
                                  <h4 className="font-medium text-orange-900 dark:text-orange-100">
                                    {articuloPropuesto.articulo}: {articuloPropuesto.titulo}
                                  </h4>
                                  <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                                    {articuloPropuesto.justificacion}
                                  </p>
                                </div>
                                
                                <div className="space-y-3">
                                  <div>
                                    <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">📝 Texto Propuesto</h5>
                                    <div className="bg-orange-100 dark:bg-orange-800/30 p-3 rounded text-sm text-orange-900 dark:text-orange-100 whitespace-pre-wrap">
                                      {articuloPropuesto.textoPropuesto}
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">💡 Beneficios Esperados</h5>
                                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                                      {articuloPropuesto.beneficiosEsperados.map((beneficio, beneficioIdx) => (
                                        <li key={beneficioIdx} className="flex items-start space-x-2">
                                          <span className="text-orange-600 mt-1">•</span>
                                          <span>{beneficio}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Current Decrees */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Decretos Vigentes - Análisis</h2>
          <div className="space-y-6">
            {decretos.map((decreto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{decreto.numero}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-900 mt-1">
                        {decreto.titulo}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={decreto.estado === "Vigente" ? "default" : "secondary"}>{decreto.estado}</Badge>
                      <Badge
                        variant={
                          decreto.impactoReal === "alto"
                            ? "default"
                            : decreto.impactoReal === "medio"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        Impacto {decreto.impactoReal}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{decreto.descripcion}</p>

                  {/* AI Analysis for Decrees */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Brain className="h-4 w-4" />
                        <span>Análisis de Efectividad</span>
                      </h4>
                      <Badge variant={decreto.analisisIA.puntuacion >= 8 ? "default" : "secondary"}>
                        {decreto.analisisIA.puntuacion}/10
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">✅ Logros</h5>
                        <ul className="space-y-1 text-sm">
                          {decreto.analisisIA.beneficios.map((beneficio, idx) => (
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
                          {decreto.analisisIA.problemas.map((problema, idx) => (
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
                        <strong>Análisis:</strong> {decreto.analisisIA.recomendacion}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Sancionado: {new Date(decreto.fecha).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Actualizado: {new Date(decreto.ultimaActualizacion).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      Organismo: {decreto.organismo}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" onClick={() => window.open(decreto.url, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Decreto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Resolutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resoluciones Vigentes - Análisis</h2>
          <div className="space-y-6">
            {resoluciones.map((resolucion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{resolucion.numero}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-900 mt-1">
                        {resolucion.titulo}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={resolucion.estado === "Vigente" ? "default" : "secondary"}>
                        {resolucion.estado}
                      </Badge>
                      <Badge
                        variant={
                          resolucion.impactoReal === "alto"
                            ? "default"
                            : resolucion.impactoReal === "medio"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        Impacto {resolucion.impactoReal}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{resolucion.descripcion}</p>

                  {/* AI Analysis for Resolutions */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Brain className="h-4 w-4" />
                        <span>Análisis de Efectividad</span>
                      </h4>
                      <Badge variant={resolucion.analisisIA.puntuacion >= 8 ? "default" : "secondary"}>
                        {resolucion.analisisIA.puntuacion}/10
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">✅ Logros</h5>
                        <ul className="space-y-1 text-sm">
                          {resolucion.analisisIA.beneficios.map((beneficio, idx) => (
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
                          {resolucion.analisisIA.problemas.map((problema, idx) => (
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
                        <strong>Análisis:</strong> {resolucion.analisisIA.recomendacion}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Emitida: {new Date(resolucion.fecha).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Actualizada: {new Date(resolucion.ultimaActualizacion).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      Organismo: {resolucion.organismo}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" onClick={() => window.open(resolucion.url, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Resolución
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
