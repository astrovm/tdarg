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
        beneficiosReforma: [
          "Reforma completa de artículos conflictivos de Ley 19.303",
          "Nuevo plazo con sanciones por incumplimiento",
          "Autoridad de aplicación específica con presupuesto",
          "Sistema de monitoreo público de implementación"
        ],
        urgencia: "Alta - Ley vigente pero inaplicable por conflictos legales",
        estimacionImpacto: "Resolvería completamente el problema de recetas para 500,000+ pacientes TDAH"
      }
    }
  },
  {
    numero: "Ley 27.306",
    titulo: "Abordaje Integral de Dificultades Específicas del Aprendizaje (DEA)",
    descripcion:
      "Declara de interés nacional el abordaje integral de DEA. Define DEA como alteraciones neurobiológicas que afectan lenguaje, lectura, escritura y/o cálculo matemático",
    fecha: "2016-10-19",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Honorable Congreso de la Nación Argentina",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27306-267234/texto",
    ultimaActualizacion: "2016-10-19",
    analisisIA: {
      beneficios: [
        "Art. 3º: Define DEA como alteraciones neurobiológicas (incluye TDAH)",
        "Art. 6º: Adaptaciones curriculares específicas (tiempo extra, evaluación oral)",
        "Art. 9º: Cobertura obligatoria PMO para detección, diagnóstico y tratamiento",
        "Art. 5º: Formación docente para detección temprana",
        "Art. 8º: Protocolos de diagnóstico a través del Consejo Federal de Salud",
      ],
      problemas: [
        "Nunca menciona específicamente 'TDAH' en el texto legal",
        "Enfoque exclusivamente educativo y de aprendizaje escolar",
        "No contempla TDAH adulto fuera del ámbito educativo",
        "No aborda tratamiento farmacológico ni recetas",
        "Autoridad de aplicación no especificada (Art. 4º)",
      ],
      puntuacion: 6.5,
      recomendacion:
        "Ley importante para TDAH escolar pero insuficiente para TDAH adulto y tratamiento farmacológico",
    },
    puntosClave: [
      "Art. 3º: DEA como alteraciones neurobiológicas",
      "Art. 6º: Adaptaciones curriculares (tiempo extra, oralidad)",
      "Art. 9º: Cobertura PMO obligatoria",
      "Enfoque educativo, no contempla TDAH adulto",
      "No menciona específicamente TDAH",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 3º",
          titulo: "Definición de DEA - No menciona TDAH específicamente",
          textoActual: `Se entiende por Dificultades Específicas del Aprendizaje (DEA) a las alteraciones de base neurobiológica, que afectan a los procesos cognitivos relacionados con el lenguaje, la lectura, la escritura y/o el cálculo matemático, con implicaciones significativas, leves, moderadas o graves en el ámbito escolar.`,
          problemasIdentificados: [
            "No menciona específicamente TDAH, déficit de atención o hiperactividad",
            "Se limita a 'ámbito escolar', excluyendo TDAH adulto",
            "Enfoque solo en aprendizaje, no en aspectos ejecutivos del TDAH",
            "Definición restrictiva que puede excluir casos de TDAH sin problemas de aprendizaje"
          ],
          propuestaReescritura: `Se entiende por Dificultades Específicas del Aprendizaje (DEA) y Trastornos del Neurodesarrollo a las alteraciones de base neurobiológica que afectan:

a) Procesos cognitivos relacionados con el lenguaje, la lectura, la escritura y/o el cálculo matemático;
b) Funciones ejecutivas, atención sostenida y control inhibitorio (TDAH);
c) Procesamiento sensorial y habilidades sociales relacionadas;

Con implicaciones significativas en el ámbito escolar, laboral, social y de la vida diaria, afectando a niños, adolescentes y adultos.`,
          impactoTDAH: "Alto - Definición restrictiva excluye muchos casos de TDAH"
        },
        {
          articulo: "Artículo 4º",
          titulo: "Autoridad de Aplicación No Especificada",
          textoActual: `La Autoridad de Aplicación será determinada por el Poder Ejecutivo nacional.`,
          problemasIdentificados: [
            "8 años después sigue sin autoridad de aplicación específica",
            "Falta de presupuesto asignado para implementación",
            "No hay coordinación clara entre Educación y Salud",
            "Imposibilita implementación efectiva de la ley"
          ],
          propuestaReescritura: `La Autoridad de Aplicación será el Ministerio de Educación en coordinación con el Ministerio de Salud, quienes designarán una Dirección Nacional de DEA y TDAH con presupuesto específico.

Esta dirección tendrá facultades para:
a) Coordinar políticas entre jurisdicciones;
b) Establecer protocolos diagnósticos unificados;
c) Supervisar cumplimiento de adaptaciones curriculares;
d) Monitorear cobertura sanitaria obligatoria.`,
          impactoTDAH: "Crítico - Sin autoridad de aplicación la ley es inaplicable"
        },
        {
          articulo: "Artículo 6º",
          titulo: "Adaptaciones Curriculares - Solo Ámbito Escolar",
          textoActual: `La Autoridad de Aplicación deberá elaborar la adaptación curricular... Para garantizar el acceso al curriculum común, en el caso de Dificultades Específicas del Aprendizaje tendrá en cuenta las siguientes consideraciones orientativas:

a) Dar prioridad a la oralidad, tanto en la enseñanza de contenidos como en las evaluaciones;
b) Otorgar mayor cantidad de tiempo para la realización de tareas y/o evaluaciones;
c) Asegurar que se han entendido las consignas;
[...continúa con adaptaciones escolares]`,
          problemasIdentificados: [
            "Solo contempla adaptaciones para ámbito escolar",
            "No incluye adaptaciones para educación superior o laboral",
            "No considera adultos con TDAH en el trabajo",
            "Falta de protocolos para transición escuela-trabajo"
          ],
          propuestaReescritura: `Las adaptaciones deben aplicarse en todos los ámbitos educativos y laborales:

ÁMBITO EDUCATIVO (todos los niveles):
a) Tiempo adicional en evaluaciones (50% extra mínimo);
b) Evaluaciones orales como alternativa;
c) Uso de tecnología de apoyo;
d) Ambientes de evaluación reducidos en distracciones;

ÁMBITO LABORAL:
e) Adaptaciones razonables en puestos de trabajo;
f) Flexibilidad horaria para consultas médicas;
g) Ambientes laborales adaptados para personas con TDAH;

EDUCACIÓN SUPERIOR:
h) Servicios de apoyo académico especializados;
i) Adaptaciones en exámenes de ingreso universitario.`,
          impactoTDAH: "Alto - Ampliaría protección a adultos con TDAH"
        },
        {
          articulo: "Artículo 9º",
          titulo: "PMO - Falta Especificidad para TDAH",
          textoActual: `Los agentes de salud... tendrán a su cargo, con carácter obligatorio, las prestaciones necesarias para la detección temprana, diagnóstico y tratamiento de las Dificultades Específicas del Aprendizaje (DEA).

Las prestaciones citadas en los incisos b) y c) del artículo 8° de la presente quedan incorporadas de pleno derecho al Programa Médico Obligatorio (PMO).`,
          problemasIdentificados: [
            "No especifica prestaciones para TDAH específicamente",
            "Falta de protocolos claros para diagnóstico TDAH adulto",
            "No garantiza cobertura de medicación para TDAH",
            "Ausencia de seguimiento farmacoterapéutico específico"
          ],
          propuestaReescritura: `Quedan incorporadas al PMO las siguientes prestaciones específicas para TDAH:

DIAGNÓSTICO:
a) Evaluación neuropsicológica completa;
b) Consultas con psiquiatría especializada en TDAH;
c) Escalas de evaluación específicas (ADHD-RS, ASRS);

TRATAMIENTO:
d) Medicación para TDAH (metilfenidato, atomoxetina);
e) Terapia cognitivo-conductual especializada;
f) Entrenamiento en habilidades ejecutivas;
g) Seguimiento farmacoterapéutico trimestral;

APOYO:
h) Capacitación familiar en manejo de TDAH;
i) Adaptaciones laborales y educativas.`,
          impactoTDAH: "Crítico - Garantizaría cobertura específica para TDAH"
        }
      ],
      articulosPropuestos: [],
      resumenImpacto: {
        problemasPrincipales: [
          "Nunca menciona TDAH específicamente pese a estar incluido conceptualmente",
          "Enfoque exclusivamente educativo excluye TDAH adulto",
          "8 años sin autoridad de aplicación específica",
          "PMO sin prestaciones específicas para TDAH"
        ],
        beneficiosReforma: [
          "Inclusión explícita de TDAH en definición legal",
          "Extensión de protecciones al ámbito laboral y adulto",
          "Autoridad de aplicación específica con presupuesto",
          "PMO con prestaciones detalladas para TDAH"
        ],
        urgencia: "Alta - Ley vigente pero inaplicable sin reglamentación específica",
        estimacionImpacto: "Beneficiaría educativamente a niños con TDAH pero no resuelve problemas de adultos ni medicación"
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
    descripcion: "Regula la actividad farmacéutica, farmacias y expendio de medicamentos. Actualizada en 2023 para incluir formatos digitales",
    fecha: "1967-12-12",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Poder Ejecutivo Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-17565-19424/actualizacion",
    ultimaActualizacion: "2023-12-21",
    analisisIA: {
      beneficios: [
        "Art. 9º: Actualizado en 2023 para permitir recetas en formato digital",
        "Art. 10: Archivos digitales habilitados por autoridad sanitaria",
        "Marco legal base para funcionamiento de farmacias",
        "Control de medicamentos controlados modernizado",
        "Conservación digital de recetas por 3 años (vs. 2 años de Ley 19.303)",
      ],
      problemas: [
        "Sigue subordinada a leyes específicas como Ley 19.303 para psicotrópicos",
        "No resuelve conflicto entre formatos digitales y manuscritos obligatorios",
        "Falta especificidad para medicamentos crónicos TDAH",
        "Modificaciones recientes (2023) aún no implementadas completamente",
      ],
      puntuacion: 7.1,
      recomendacion: "Ley bien actualizada para era digital pero subordinada a Ley 19.303 para medicamentos TDAH",
    },
    puntosClave: [
      "Art. 9º: Expendio bajo receta (digital o manuscrita)",
      "Art. 10: Archivos digitales obligatorios en farmacias", 
      "Conservación digital de recetas por 3 años",
      "Actualizada por Decreto 70/2023 para era digital",
      "Compatible con recetas electrónicas de Ley 27.553",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 9º",
          titulo: "Expendio de Medicamentos - Modernizado 2023",
          textoActual: `En las farmacias el expendio de drogas, medicamentos o especialidades medicinales se ajusta a las siguientes formas de acuerdo a lo que establezca la legislación vigente o determine la autoridad sanitaria:

1. Expendio legalmente restringido;
2. Expendio bajo receta archivada;
3. Expendio bajo receta;

Deben conservarse las recetas correspondientes a los puntos 1 y 2, en formato digital, durante un plazo no menor de tres (3) años, después de dicho plazo pueden ser borradas, previa comunicación a la autoridad sanitaria.

(Artículo sustituido por art. 317 del Decreto N° 70/2023 B.O. 21/12/2023)`,
          problemasIdentificados: [
            "Dice 'de acuerdo a lo que establezca la legislación vigente' - subordinada a Ley 19.303",
            "No especifica qué hacer cuando hay conflicto entre leyes",
            "Formato digital permitido pero no obligatorio para todas las categorías",
            "Falta claridad sobre cuál ley prevalece en caso de conflicto"
          ],
          propuestaReescritura: `En las farmacias el expendio de drogas, medicamentos o especialidades medicinales se ajusta exclusivamente a recetas electrónicas según Ley 27.553, excepto en casos de emergencia debidamente justificados:

1. Expendio legalmente restringido (Lista II Ley 19.303): Solo recetas electrónicas;
2. Expendio bajo receta archivada: Solo recetas electrónicas;
3. Expendio bajo receta: Solo recetas electrónicas;

Las recetas electrónicas se conservan automáticamente en formato digital durante cinco (5) años. Esta ley prevalece sobre disposiciones manuscritas de leyes anteriores para efectos de dispensación farmacéutica.`,
          impactoTDAH: "Medio - Ley actualizada pero no resuelve subordinación a Ley 19.303"
        },
        {
          articulo: "Artículo 10",
          titulo: "Archivos Digitales en Farmacias",
          textoActual: `En las farmacias deben llevarse los siguientes archivos digitales habilitados por la autoridad sanitaria:

a) Recetario;
b) Contralor de estupefacientes;
c) Contralor de psicotrópicos;
d) Inspecciones;
e) Otros archivos digitales que la autoridad competente estime pertinentes.

Los libros electrónicos, la firma electrónica o digital y los demás requisitos técnicos y legales deben adecuarse a lo que establezca la autoridad de aplicación, asegurando la inalterabilidad de los registros.

(Artículo sustituido por art. 318 del Decreto N° 70/2023 B.O. 21/12/2023)`,
          problemasIdentificados: [
            "Archivos digitales obligatorios pero compatible con recetas manuscritas",
            "No integra automáticamente con recetas electrónicas",
            "Falta especificación sobre cómo manejar doble registro (digital + manuscrito)",
            "Autoridad de aplicación no especificada claramente"
          ],
          propuestaReescritura: `En las farmacias deben llevarse exclusivamente los siguientes archivos digitales integrados con el sistema nacional de recetas electrónicas:

a) Recetario electrónico unificado con sistema nacional;
b) Contralor automático de estupefacientes via sistema digital;
c) Contralor automático de psicotrópicos via sistema digital;
d) Registro de inspecciones digitales;
e) Otros archivos integrados que establezca la autoridad sanitaria.

Todos los registros se sincronizan automáticamente con el sistema nacional de prescripciones, eliminando registros manuales duplicados. La autoridad de aplicación es el Ministerio de Salud en coordinación con ANMAT.`,
          impactoTDAH: "Alto - Integración completa eliminaría burocracia farmacéutica"
        },
        {
          articulo: "Artículo 1º",
          titulo: "Monopolio Farmacéutico vs. Accesibilidad",
          textoActual: `La preparación de recetas, la dispensa de drogas, medicamentos, y de especialidades farmacéuticas que requieren recetas, solo podrán ser efectuadas en todo el territorio de la Nación en farmacias habilitadas.

Su venta y despacho fuera de estos establecimientos se considera ejercicio ilegal de la farmacia y, sin perjuicio de las sanciones establecidas por la ley, los que la efectúen podrán ser denunciados por infracción al Código Penal.`,
          problemasIdentificados: [
            "Monopolio farmacéutico puede limitar acceso en zonas remotas",
            "No contempla dispensación por correo para medicación crónica",
            "Restricción estricta puede dificultar acceso a medicamentos TDAH",
            "No considera telemedicina moderna y entrega a domicilio"
          ],
          propuestaReescritura: `La dispensación de medicamentos con receta debe realizarse por:

a) Farmacias habilitadas tradicionales;
b) Farmacias digitales autorizadas con entrega certificada;
c) Servicios de farmacia hospitalaria;
d) Programas especiales para medicación crónica con seguimiento médico.

Para medicamentos crónicos como los de TDAH, se permite dispensación por correo certificado desde farmacias autorizadas, previa verificación digital de la receta electrónica y seguimiento farmacoterapéutico.`,
          impactoTDAH: "Medio - Mayor flexibilidad mejoraría acceso pero no resuelve problema principal"
        }
      ],
      articulosPropuestos: [],
      resumenImpacto: {
        problemasPrincipales: [
          "Ley bien modernizada en 2023 pero subordinada a Ley 19.303 para psicotrópicos",
          "Permite archivos digitales pero no los integra completamente",
          "Monopolio farmacéutico tradicional no adaptado a telemedicina",
          "Falta autoridad de aplicación específica para integración digital"
        ],
        beneficiosReforma: [
          "Integración completa con sistema nacional de recetas electrónicas",
          "Eliminación de registros duplicados (digital + manuscrito)",
          "Flexibilización para medicación crónica con entrega a domicilio",
          "Autoridad de aplicación clara con presupuesto asignado"
        ],
        urgencia: "Media - Ley actualizada pero necesita mayor integración",
        estimacionImpacto: "Facilitaría dispensación para pacientes TDAH pero no resuelve el conflicto principal con Ley 19.303"
      }
    }
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
