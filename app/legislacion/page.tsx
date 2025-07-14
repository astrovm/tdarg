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
  Download,
  Eye,
} from "lucide-react"
import { Header } from "@/components/header"
import { useState } from "react"

// Contenido completo de los documentos - Optimizado para lectura
const decretoContent = `# DECRETO N° XXX/2025

**SALUD**

Decreto XXX/2025

DECTO-2025-XXX-APN-PTE - Ley 19.303. Medicamentos TDAH. Recetas electrónicas. Reglamentación.

Ciudad de Buenos Aires, XX de XXXX de 2025

**VISTO** el Expediente N° EX-2025-XXXXXXX-APN-SCS#MS, las Leyes Nros. 17.132 y sus modificatorias, 17.565 y sus modificaciones, 19.303 y sus modificatorias, 27.553 y su modificación, 25.506 y los Decretos Nros. 7123 del 15 de noviembre de 1968 y sus modificatorios, 98 del 27 de febrero de 2023, 345 del 19 de abril de 2024, y

**CONSIDERANDO:**

Que la Ley N° 27.553 tiene por objeto establecer que la prescripción y dispensación de medicamentos y toda otra prescripción solo puedan ser redactadas y firmadas a través de plataformas electrónicas habilitadas a tal fin, así como establecer que puedan utilizarse plataformas de teleasistencia en salud, en todo el territorio nacional, de conformidad con la Ley N° 25.326 de Protección de los Datos Personales y la Ley N° 26.529 de Derechos del Paciente, Historia Clínica y Consentimiento Informado.

Que la Ley N° 19.303 regula la fabricación, comercialización, circulación y uso de sustancias psicotrópicas, estableciendo en su artículo 13 que los medicamentos incluidos en la Lista II solo podrán ser prescriptos por profesionales médicos matriculados mediante recetas extendidas en formularios oficializados, por triplicado, en forma manuscrita.

Que por el Decreto N° 98/23 se aprobó la Reglamentación de la citada Ley N° 27.553, estableciéndose al MINISTERIO DE SALUD en carácter de Autoridad de Aplicación.

Que por el Decreto N° 345/24 se modificó la reglamentación de la Ley N° 27.553, estableciendo expresamente que "La receta electrónica y/o digital es el medio obligatorio para la prescripción de medicamentos, órdenes de estudios, prácticas y cualquier otra indicación que los profesionales de la salud consideren pertinentes para sus pacientes, en todo el territorio de la REPÚBLICA ARGENTINA".

Que el artículo 11 de la Ley N° 27.553 incorporó el artículo 18 bis a la Ley N° 19.303, estableciendo que "En caso de que las recetas mencionadas en la presente ley sean redactadas electrónicamente, o en caso de que los registros obligatorios sean llevados electrónicamente, la firma y demás requisitos técnicos y legales deben adecuarse a la legislación especial vigente y a lo que establezca la autoridad de aplicación".

Que el artículo 12 de la Ley N° 27.553 establece que "todos los procedimientos relativos a la regulación de la prescripción, dispensa y circuitos para la provisión de psicotrópicos (Lista I, II, III y IV) y estupefacientes deben ser digitalizados según los plazos y criterios que fije la autoridad competente".

Que el Trastorno por Déficit de Atención e Hiperactividad (TDAH) constituye una condición neurobiológica crónica que requiere tratamiento farmacológico continuo con medicamentos incluidos en la Lista II de la Ley N° 19.303, específicamente metilfenidato y atomoxetina.

Que el sistema de prescripción manuscrita triplicada obligatoria para medicamentos de Lista II genera barreras administrativas que dificultan el acceso a tratamiento continuo para pacientes con TDAH, siendo incompatible con la telemedicina habilitada por la Ley N° 27.553.

Que el límite de veinte (20) días de tratamiento establecido en el artículo 16 de la Ley N° 19.303 resulta inadecuado para el manejo de condiciones crónicas estables como el TDAH, obligando a consultas médicas excesivamente frecuentes que sobrecargan innecesariamente el sistema de salud.

Que propender a la informatización de las recetas para medicamentos TDAH optimiza y simplifica los procesos asistenciales, propicia un incremento en la calidad brindada, reduce costos innecesarios al Sistema de Salud, así como también marca un avance hacia la digitalización y modernización de dicho Sistema.

Que estos sistemas resultan más seguros para garantizar el resguardo de la información y la trazabilidad de sustancias controladas, de conformidad con la Ley N° 25.326 de Protección de los Datos Personales y con la Ley N° 26.529 de Derechos del Paciente, Historia Clínica y Consentimiento Informado.

Que del análisis del plexo normativo vigente surge la necesidad de adecuar la aplicación de la Ley N° 19.303 a las disposiciones de la Ley N° 27.553 para medicamentos destinados al tratamiento del TDAH, de manera que se garantice el acceso efectivo a estos medicamentos mediante recetas electrónicas.

Que la DIRECCIÓN GENERAL DE ASUNTOS JURÍDICOS del MINISTERIO DE SALUD ha tomado la intervención de su competencia.

Que la presente medida se dicta en uso de las atribuciones emergentes del artículo 99, incisos 1 y 2 de la CONSTITUCIÓN NACIONAL.

**POR ELLO,**

**EL PRESIDENTE DE LA NACIÓN ARGENTINA**
**DECRETA:**

**ARTÍCULO 1°**.- Establécese que para los medicamentos psicotrópicos incluidos en la Lista II de la Ley N° 19.303 destinados al tratamiento del Trastorno por Déficit de Atención e Hiperactividad (TDAH), prevalecerán las disposiciones de la Ley N° 27.553 de Recetas Electrónicas o Digitales sobre los requisitos de prescripción manuscrita establecidos en los artículos 13 y 14 de la Ley N° 19.303.

**ARTÍCULO 2°**.- Los medicamentos comprendidos en el artículo 1° podrán ser prescriptos mediante recetas electrónicas certificadas con firma digital médica, conforme al sistema nacional de prescripción electrónica establecido por la autoridad sanitaria nacional.

**ARTÍCULO 3°**.- Las recetas electrónicas para medicamentos TDAH deberán contener obligatoriamente:

a) Identificación completa del prescriptor con número de matrícula;
b) Datos completos del paciente;
c) Denominación del medicamento según denominación común internacional;
d) Dosis, posología y duración del tratamiento;
e) Diagnóstico según clasificación CIE-10/CIE-11;
f) Firma digital certificada del médico prescriptor;
g) Fecha y hora de emisión.

**ARTÍCULO 4°**.- Para pacientes con TDAH en tratamiento crónico estable, las prescripciones podrán extenderse hasta noventa (90) días de tratamiento, debiendo el médico indicar expresamente "TRATAMIENTO CRÓNICO TDAH" en la receta electrónica.

**ARTÍCULO 5°**.- Las recetas electrónicas emitidas conforme al presente decreto serán válidas en todo el territorio nacional y podrán dispensarse en cualquier farmacia habilitada que cuente con acceso al sistema nacional de prescripción electrónica.

**ARTÍCULO 6°**.- El sistema nacional de prescripción electrónica garantizará:

a) Registro automático y trazabilidad completa de la prescripción y dispensación;
b) Cumplimiento de los controles de seguridad requeridos para sustancias de Lista II;
c) Generación automática de reportes a la autoridad sanitaria competente;
d) Interoperabilidad con sistemas provinciales existentes.

**ARTÍCULO 7°**.- Los profesionales médicos matriculados que prescriban medicamentos TDAH mediante recetas electrónicas deberán:

a) Contar con firma digital certificada vigente;
b) Estar registrados en el sistema nacional de prescripción electrónica;
c) Cumplir con los protocolos de seguridad establecidos por la autoridad sanitaria nacional.

**ARTÍCULO 8°**.- Las farmacias que dispensen medicamentos prescriptos conforme al presente decreto deberán mantener conectividad con el sistema nacional de prescripción electrónica y registrar automáticamente cada dispensación.

**ARTÍCULO 9°**.- En casos excepcionales donde no sea posible acceder al sistema electrónico por razones técnicas debidamente documentadas, se podrá utilizar transitoriamente el sistema de recetas manuscritas previsto en la Ley N° 19.303, debiendo regularizarse en el sistema electrónico dentro de las 48 horas.

**ARTÍCULO 10**.- La autoridad de aplicación del presente decreto será el MINISTERIO DE SALUD, quien dictará las normas complementarias necesarias para su implementación en coordinación con la ADMINISTRACIÓN NACIONAL DE MEDICAMENTOS, ALIMENTOS Y TECNOLOGÍA MÉDICA (ANMAT).

**ARTÍCULO 11**.- Las disposiciones del presente decreto entrarán en vigor a los TREINTA (30) días de su publicación en el Boletín Oficial, plazo durante el cual la autoridad de aplicación realizará las adecuaciones técnicas necesarias en el sistema nacional de prescripción electrónica.

**ARTÍCULO 12**.- Invítase a las provincias y a la Ciudad Autónoma de Buenos Aires a adherir al presente decreto y a adecuar sus sistemas de salud para garantizar la implementación efectiva de las recetas electrónicas para medicamentos TDAH.

**ARTÍCULO 13**.- Comuníquese, publíquese, dése a la DIRECCIÓN NACIONAL DEL REGISTRO OFICIAL y archívese.

MILEI - Mario Antonio Russo`

const proyectoLeyContent = `# PROYECTO DE LEY

**Modernización de la Prescripción de Medicamentos para Trastorno por Déficit de Atención e Hiperactividad (TDAH)**

---

**El Senado y Cámara de Diputados de la Nación Argentina reunidos en Congreso, etc. sancionan con fuerza de**

**LEY:**

**ARTÍCULO 1°**.- Objeto. La presente ley tiene por objeto modernizar la prescripción de medicamentos psicotrópicos destinados al tratamiento del Trastorno por Déficit de Atención e Hiperactividad (TDAH), armonizando las disposiciones de la Ley N° 19.303 con la Ley N° 27.553 de Recetas Electrónicas o Digitales.

**ARTÍCULO 2°**.- Sustitúyase el artículo 13 de la Ley N° 19.303, el que quedará redactado de la siguiente manera:

"Artículo 13.- Los sicotrópicos incluidos en la Lista II podrán ser prescriptos por profesionales médicos matriculados ante autoridad competente, mediante:

a) Recetas electrónicas certificadas con firma digital médica, conforme al sistema nacional de prescripción electrónica establecido por la autoridad sanitaria nacional; o

b) Subsidiariamente, recetas extendidas en formularios oficializados, por triplicado, conforme al modelo aprobado por la autoridad sanitaria nacional.

Las recetas electrónicas deberán contener: denominación del sicotrópico según denominación común internacional, dosis, posología, cantidad total prescripta en números y letras, datos completos del paciente, diagnóstico según clasificación internacional vigente, y firma digital certificada del médico prescriptor.

Para medicamentos de uso crónico destinados al tratamiento de trastornos neurológicos y psiquiátricos estables, incluido el Trastorno por Déficit de Atención e Hiperactividad (TDAH), el médico podrá autorizar hasta tres (3) dispensaciones del mismo tratamiento en un período de noventa (90) días, debiendo indicar expresamente 'MEDICACIÓN CRÓNICA' en la prescripción.

Las recetas electrónicas serán registradas automáticamente en el sistema nacional de monitoreo de sustancias controladas, garantizando la trazabilidad y control equivalente al sistema manuscrito."

**ARTÍCULO 3°**.- Sustitúyase el artículo 16 de la Ley N° 19.303, el que quedará redactado de la siguiente manera:

"Artículo 16.- Para sicotrópicos incluidos en la Lista II se establecen los siguientes límites de prescripción:

a) Tratamientos agudos: máximo veinte (20) días de tratamiento por prescripción.

b) Tratamientos crónicos estables para trastornos neurológicos y psiquiátricos, incluido el Trastorno por Déficit de Atención e Hiperactividad (TDAH): máximo noventa (90) días de tratamiento por prescripción, con renovación trimestral y evaluación médica según criterio profesional.

c) El médico debe indicar claramente el tipo de tratamiento en la prescripción y justificar la condición médica que amerita tratamiento crónico.

d) La autoridad sanitaria nacional establecerá mediante reglamentación los criterios específicos para calificar un tratamiento como crónico estable."

**ARTÍCULO 4°**.- Sustitúyase el artículo 18 bis de la Ley N° 19.303, el que quedará redactado de la siguiente manera:

"Artículo 18 bis.- Las recetas electrónicas para sicotrópicos serán válidas cuando cumplan los siguientes requisitos mínimos:

a) Firma digital médica certificada por autoridad competente reconocida por la infraestructura de firma digital argentina;
b) Identificación única del prescriptor en el sistema nacional de prescripción electrónica;
c) Registro automático en la plataforma nacional de monitoreo de sustancias controladas;
d) Encriptación de datos según estándares internacionalmente reconocidos;
e) Trazabilidad completa de la prescripción, dispensación y seguimiento farmacoterapéutico.

La autoridad sanitaria nacional establecerá los estándares técnicos mínimos y operará el sistema nacional de prescripción electrónica de psicotrópicos, garantizando interoperabilidad con sistemas provinciales y compatibilidad con plataformas de telemedicina.

Las recetas electrónicas tendrán la misma validez legal que las manuscritas y constituirán el método preferido para prescripciones de sicotrópicos."

**ARTÍCULO 5°**.- Agrégase como artículo 18 ter de la Ley N° 19.303, el siguiente:

"Artículo 18 ter.- Para medicamentos destinados al tratamiento del Trastorno por Déficit de Atención e Hiperactividad (TDAH):

a) Las prescripciones electrónicas serán válidas en todo el territorio nacional;
b) Podrán dispensarse en cualquier farmacia habilitada que cuente con acceso al sistema nacional;
c) Los controles de seguimiento farmacoterapéutico podrán realizarse mediante telemedicina cuando el paciente esté en tratamiento estable;
d) Se priorizará la continuidad terapéutica evitando interrupciones por razones administrativas;
e) Los profesionales médicos especializados en psiquiatría, neurología, medicina familiar y general podrán prescribir estos medicamentos dentro de su ámbito de competencia."

**ARTÍCULO 6°**.- Autoridad de aplicación. Será autoridad de aplicación de la presente ley el MINISTERIO DE SALUD de la Nación, quien coordinará su implementación con:

a) La ADMINISTRACIÓN NACIONAL DE MEDICAMENTOS, ALIMENTOS Y TECNOLOGÍA MÉDICA (ANMAT);
b) Los ministerios de salud provinciales y de la Ciudad Autónoma de Buenos Aires;
c) Los colegios profesionales médicos y farmacéuticos;
d) Las obras sociales y empresas de medicina prepaga.

**ARTÍCULO 7°**.- Implementación gradual. La autoridad de aplicación establecerá un cronograma de implementación que no podrá exceder los CIENTO OCHENTA (180) días desde la promulgación de la presente ley, priorizando:

a) Capacitación a profesionales médicos en el uso del sistema electrónico;
b) Adecuación técnica de farmacias para conexión al sistema nacional;
c) Campañas de información a pacientes y familiares;
d) Monitoreo de la transición y resolución de dificultades técnicas.

**ARTÍCULO 8°**.- Evaluación y seguimiento. La autoridad de aplicación deberá presentar al Honorable Congreso de la Nación un informe anual sobre:

a) Cantidad de prescripciones electrónicas emitidas y dispensadas;
b) Reducción de consultas médicas innecesarias;
c) Ahorro económico para el sistema de salud;
d) Nivel de satisfacción de pacientes y profesionales;
e) Indicadores de seguridad y control de sustancias.

**ARTÍCULO 9°**.- Pacto Federal. Invítase a las provincias y a la Ciudad Autónoma de Buenos Aires a adherir a la presente ley y a adecuar sus marcos normativos para garantizar la implementación uniforme en todo el territorio nacional.

**ARTÍCULO 10**.- Disposiciones complementarias. La presente ley será complementaria de las disposiciones de la Ley N° 27.553 de Recetas Electrónicas o Digitales, la Ley N° 25.506 de Firma Digital, y demás normativa vigente en materia de protección de datos personales y derechos del paciente.

**ARTÍCULO 11**.- Vigencia. La presente ley entrará en vigencia a partir de su publicación en el Boletín Oficial.

**ARTÍCULO 12**.- Comuníquese al Poder Ejecutivo nacional.

DADA EN LA SALA DE SESIONES DEL CONGRESO ARGENTINO, EN BUENOS AIRES, A LOS ___ DÍAS DEL MES DE _____ DEL AÑO DOS MIL VEINTICINCO.

REGISTRADA BAJO EL N° _____

[Presidente de la Cámara de Diputados] - [Presidente del Senado] - [Secretario Administrativo] - [Secretario Parlamentario]`

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
    titulo: "Decreto para Recetas Electrónicas TDAH",
    resumenEjecutivo: "Solución inmediata vía poder ejecutivo para resolver conflicto legal",
    descripcion: "Decreto que establece prevalencia de Ley 27.553 sobre Ley 19.303 para medicamentos TDAH",
    problemaQueResuelve: "Conflicto legal impide recetas electrónicas para TDAH",
    beneficiosClave: [
      "✅ Recetas electrónicas inmediatas",
      "⏱️ Prescripciones de 90 días vs 20 actuales",
      "💰 Ahorro $450k anuales por paciente",
      "🏥 Compatible con telemedicina"
    ],
    ventajas: [
      "🚀 Implementación inmediata (30 días)",
      "💵 Sin costo al Estado",
      "⚖️ Base constitucional sólida (Art. 99)",
      "📋 Precedente exitoso (Decreto 345/24)"
    ],
    impacto: "🎯 500,000+ pacientes beneficiados inmediatamente",
    urgencia: "🔥 Crítico",
    estado: "✅ VIABLE",
    tiempoImplementacion: "30 días",
    responsable: "Poder Ejecutivo",
    accionNecesaria: "Presentar propuesta al Presidente",
    documentType: "decreto",
  },
  {
    titulo: "Proyecto de Ley Modernización TDAH",
    resumenEjecutivo: "Solución permanente vía Congreso para conflicto normativo",
    descripcion: "Reforma artículos 13 y 16 de Ley 19.303 para habilitar recetas electrónicas definitivamente",
    problemaQueResuelve: "Necesidad de solución legislativa permanente al conflicto legal",
    beneficiosClave: [
      "🔒 Solución permanente no reversible",
      "⚖️ Mayor legitimidad democrática",
      "🌍 Alineación con estándares internacionales",
      "🏥 Integración completa con telemedicina"
    ],
    ventajas: [
      "📜 Reforma definitiva de la ley",
      "🗳️ Respaldo parlamentario",
      "💵 Sin costo presupuestario",
      "🌎 Precedentes Reino Unido/España"
    ],
    impacto: "🎯 Solución definitiva para todas las administraciones",
    urgencia: "📋 Planificación",
    estado: "📝 PROPUESTA", 
    tiempoImplementacion: "6-12 meses",
    responsable: "Congreso Nacional",
    accionNecesaria: "Impulsar en Cámara de Diputados",
    documentType: "ley",
  },
  {
    titulo: "Registro de Lisdexanfetamina (Vyvanse)",
    resumenEjecutivo: "Ampliar opciones terapéuticas para pacientes resistentes",
    descripcion: "Gestión ANMAT para registro de lisdexanfetamina (aprobada FDA/EMA)",
    problemaQueResuelve: "Opciones limitadas para pacientes que no responden a medicación actual",
    beneficiosClave: [
      "💊 Nueva opción para pacientes resistentes",
      "🎯 Tratamiento personalizado por perfil",
      "📉 Reducción abandono de tratamiento",
      "✅ Medicamento probado FDA/EMA"
    ],
    ventajas: [
      "🌍 Ya aprobado internacionalmente",
      "⚡ Proceso regulatorio estándar",
      "💵 Sin costo al Estado",
      "📊 Evidencia científica sólida"
    ],
    impacto: "🎯 ~30% pacientes con respuesta inadecuada",
    urgencia: "⚡ Moderado",
    estado: "✅ VIABLE",
    tiempoImplementacion: "12-18 meses",
    responsable: "ANMAT",
    accionNecesaria: "Solicitar evaluación prioritaria",
  },
]

// Problemas identificados - Estructura optimizada
const problemasReales = [
  {
    problema: "Sistema de recetas obsoleto y burocrático",
    descripcion: "Recetas manuscritas triplicadas + consultas cada 20 días para medicación crónica",
    resumen: "Ley 19.303 vs Ley 27.553: conflicto legal impide recetas electrónicas",
    urgencia: "🔥 Crítico",
    impacto: "500,000+ pacientes afectados",
  },
  {
    problema: "Opciones limitadas de medicación",
    descripcion: "Solo metilfenidato y atomoxetina disponibles en Argentina",
    resumen: "Falta Vyvanse, Adderall y otros estimulantes para pacientes resistentes",
    urgencia: "📋 Planificación",
    impacto: "~30% pacientes sin opciones",
  }
]

export default function LegislacionPage() {
  const [expandedLaw, setExpandedLaw] = useState<string | null>(null)
  const [viewingDocument, setViewingDocument] = useState<string | null>(null)

  const toggleLawDetails = (lawNumber: string) => {
    setExpandedLaw(expandedLaw === lawNumber ? null : lawNumber)
  }

  const handleViewDocument = (documentType: string) => {
    setViewingDocument(documentType)
  }

  const handleCloseDocument = () => {
    setViewingDocument(null)
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Problemas Identificados</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Análisis de los obstáculos principales para acceso a medicación TDAH
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {problemasReales.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/10">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.urgencia}
                    </Badge>
                    <span className="text-xs text-gray-500">{item.impacto}</span>
                  </div>
                  <CardTitle className="text-lg text-red-900 dark:text-red-100 leading-tight">
                    {item.problema}
                  </CardTitle>
                  <CardDescription className="text-sm text-red-800 dark:text-red-200">
                    {item.descripcion}
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Soluciones Propuestas</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Propuestas listas para presentación oficial
          </p>
          <div className="space-y-6">
            {propuestasNecesarias.map((propuesta, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-900/10">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {propuesta.urgencia}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {propuesta.estado}
                        </Badge>
                        <span className="text-xs text-gray-500">{propuesta.tiempoImplementacion}</span>
                      </div>
                      <CardTitle className="text-xl text-blue-900 dark:text-blue-100 mb-1">
                        {propuesta.titulo}
                      </CardTitle>
                      <CardDescription className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                        {propuesta.resumenEjecutivo}
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

                  {(propuesta as any).documentType && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button 
                          onClick={() => handleViewDocument((propuesta as any).documentType)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Documento Completo
                        </Button>
                        <Button 
                          onClick={() => {
                            const content = (propuesta as any).documentType === 'decreto' ? decretoContent : proyectoLeyContent
                            const filename = (propuesta as any).documentType === 'decreto' ? 'decreto-recetas-electronicas-tdah.md' : 'proyecto-ley-modernizacion-tdah.md'
                            const blob = new Blob([content], { type: 'text/markdown' })
                            const link = document.createElement('a')
                            link.href = URL.createObjectURL(blob)
                            link.download = filename
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                            URL.revokeObjectURL(link.href)
                          }}
                          variant="outline"
                          className="flex-1 border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/20"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </Button>
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

        {/* Document Viewer Modal */}
        {viewingDocument && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {viewingDocument === 'decreto' ? 'Decreto para Recetas Electrónicas en Medicamentos TDAH' : 'Proyecto de Ley de Modernización de Prescripción de Medicamentos TDAH'}
                </h3>
                <Button 
                  onClick={handleCloseDocument}
                  variant="ghost"
                  size="sm"
                >
                  ✕
                </Button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div 
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: (viewingDocument === 'decreto' ? decretoContent : proyectoLeyContent)
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">$1</h1>')
                        .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">$1</h2>')
                        .replace(/^### (.*$)/gm, '<h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">$1</h3>')
                        .replace(/^\*\*ARTÍCULO (\d+).*?\*\*\.-(.*)$/gm, '<div class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong class="text-blue-900 dark:text-blue-200">ARTÍCULO $1°</strong><span class="text-gray-700 dark:text-gray-300">$2</span></div>')
                        .replace(/^\*\*CONSIDERANDO:\*\*$/gm, '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 mt-6">CONSIDERANDO:</h2>')
                        .replace(/^\*\*POR ELLO,\*\*$/gm, '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 mt-6">POR ELLO,</h2>')
                        .replace(/^\*\*DECRETA:\*\*$/gm, '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">DECRETA:</h2>')
                        .replace(/^\*\*LEY:\*\*$/gm, '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">LEY:</h2>')
                        .replace(/^Que (.*)$/gm, '<p class="mb-2 pl-4 text-gray-600 dark:text-gray-400">Que $1</p>')
                        .replace(/^([a-z]\)) (.*)$/gm, '<div class="ml-4 mb-2"><span class="font-medium text-gray-800 dark:text-gray-200">$1</span> $2</div>')
                        .replace(/\n\n/g, '<br><br>')
                        .replace(/\n/g, '<br>')
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
