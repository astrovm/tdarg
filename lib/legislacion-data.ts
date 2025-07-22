// Legislación relevante para TDAH en Argentina
export const leyes = [
  {
    numero: "Resolución 2214/2025",
    titulo: "Implementación de Recetas Electrónicas",
    descripcion:
      "Establece la obligatoriedad de recetas electrónicas para todos los medicamentos, incluyendo psicotrópicos de Lista II como metilfenidato. Fija plazo de 120 días para implementación completa.",
    fecha: "2025-07-18",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Ministerio de Salud",
    impactoReal: "alto",
    url: "https://www.boletinoficial.gob.ar/#!DetalleNorma/328614/20250721",
    ultimaActualizacion: "2025-07-21",
    analisisIA: {
      beneficios: [
        "Establece recetas exclusivamente electrónicas para todos los medicamentos",
        "Define plazo específico de 120 días para implementación",
        "Incluye medicamentos TDAH en sistema digital obligatorio",
        "Implementa sistema CUIR para trazabilidad",
        "Elimina requisito de recetas manuscritas triplicadas",
      ],
      problemas: [
        "No deroga explícitamente artículos conflictivos de Ley 19.303",
        "Implementación depende de coordinación jurisdiccional",
        "Falta mecanismo de seguimiento del cumplimiento",
      ],
      puntuacion: 8.5,
      recomendacion:
        "Normativa con potencial para resolver problemas de acceso a medicación TDAH. Requiere monitoreo de implementación efectiva.",
    },
    puntosClave: [
      "Recetas obligatoriamente electrónicas para todos los medicamentos",
      "Plazo de implementación: 120 días (noviembre 2025)",
      "Incluye medicamentos controlados Lista II",
      "Sistema CUIR para identificación única",
      "Repositorios digitales con acceso controlado",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 3º",
          titulo: "Prescripciones Exclusivamente Electrónicas",
          textoActual: `Las prescripciones deberán emitirse exclusivamente en formato electrónico o digital a través de plataformas registradas en el Registro Nacional de Plataformas Digitales de Salud (ReNaPDiS).`,
          problemasIdentificados: [
            "No deroga explícitamente las recetas manuscritas de la Ley 19.303",
            "Posible conflicto de interpretación con normativas anteriores",
            "Implementación depende de jurisdicciones locales",
          ],
          impactoTDAH:
            "Positivo si se implementa correctamente, eliminaría recetas manuscritas para medicamentos TDAH",
        },
        {
          articulo: "Anexo I - Expendio Legalmente Restringido",
          titulo: "Digitalización de Psicotrópicos Lista II",
          textoActual: `Se establece un plazo de CIENTO VEINTE (120) días corridos desde la entrada en vigencia de la medida que aprueba el presente Anexo para que las jurisdicciones, softwares prescriptores y repositorios realicen las adecuaciones necesarias que permitan el registro, archivo y acceso a las recetas electrónicas o digitales sujetas a fiscalización.`,
          problemasIdentificados: [
            "Plazo de 120 días puede ser insuficiente para implementación completa",
            "No especifica sanciones por incumplimiento",
            "Requiere coordinación entre múltiples actores",
          ],
          impactoTDAH:
            "Crítico - Primer plazo oficial específico para digitalizar medicamentos TDAH",
        },
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "No deroga explícitamente conflictos con Ley 19.303",
          "Implementación depende de coordinación jurisdiccional",
          "Posibles extensiones de plazo sin sanciones claras",
        ],
        solucionSimple:
          "Monitoreo estricto del cumplimiento del plazo y seguimiento de implementación efectiva",
        urgencia: "Media - Resolución adecuada pero requiere seguimiento",
        estimacionImpacto:
          "Potencial solución para más de 500,000 pacientes TDAH si se implementa correctamente",
      },
    },
  },
  {
    numero: "Ley 27.553",
    titulo: "Ley de Recetas Electrónicas o Digitales",
    descripcion:
      "Establece prescripciones exclusivamente electrónicas y habilita telemedicina. Su implementación efectiva se vio limitada por conflictos normativos no resueltos con legislación previa.",
    fecha: "2020-08-11",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27553-340919",
    ultimaActualizacion: "2023-12-21",
    analisisIA: {
      beneficios: [
        "Estableció marco legal para recetas electrónicas obligatorias",
        "Habilitó telemedicina en todo el territorio nacional",
        "Permite dispensación de medicamentos en cualquier farmacia",
        "Creó infraestructura básica para sistemas digitales de salud",
      ],
      problemas: [
        "Plazo de implementación vencido sin cumplimiento efectivo",
        "No resolvió contradicciones con normativas anteriores",
        "Falta de sanciones por incumplimiento",
        "Implementación limitada para medicamentos controlados",
      ],
      puntuacion: 6.0,
      recomendacion:
        "Marco legal adecuado que requirió normativas complementarias para efectividad práctica.",
    },
    puntosClave: [
      "Recetas electrónicas obligatorias según normativa",
      "Dispensación nacional en cualquier farmacia habilitada", 
      "Telemedicina autorizada para consultas médicas",
      "Modifica Ley 19.303 agregando Artículo 18 bis",
      "Plazo de implementación vencido en julio 2024",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 1º",
          titulo: "Objeto de la Ley - Recetas Electrónicas Obligatorias",
          textoActual: `La presente ley tiene por objeto:\n\nEstablecer que la prescripción y dispensación de medicamentos, y toda otra prescripción, solo puedan ser redactadas y firmadas a través de plataformas electrónicas habilitadas a tal fin.\n\nEstablecer que puedan utilizarse plataformas de teleasistencia en salud, en todo el territorio nacional, de conformidad con la Ley N° 25.326 de Protección de los Datos Personales y la Ley N° 26.529 de Derechos del Paciente.`,
          problemasIdentificados: [
            "No deroga explícitamente recetas manuscritas de normativas anteriores",
            "No establece mecanismo para resolver conflictos normativos",
            "Falta especificidad sobre medicamentos controlados",
            "No establece sanciones por incumplimiento",
          ],
          impactoTDAH:
            "Crítico - Si fuera aplicado correctamente resolvería el problema de recetas manuscritas",
        },
        {
          articulo: "Artículo 3º",
          titulo: "Plazo de Implementación Vencido",
          textoActual: `El Poder Ejecutivo Nacional establece los plazos necesarios para alcanzar la digitalización total en prescripción y dispensación de medicamentos y toda otra prescripción, el cual no podrá superar el 1° de julio de 2024, y regular el uso de plataformas de teleasistencia en salud.`,
          problemasIdentificados: [
            "Plazo vencido sin implementación efectiva",
            "No especifica sanciones por incumplimiento del plazo",
            "Falta autoridad de aplicación clara",
            "No hay mecanismo de seguimiento del cumplimiento",
          ],
          impactoTDAH: "Alto - Plazo vencido mantiene situación legal indefinida",
        },
        {
          articulo: "Artículo 11",
          titulo: "Modificación Insuficiente de Ley 19.303",
          textoActual: `Incorpórase el artículo 18 bis a la ley 19.303, el que quedará redactado de la siguiente manera:\n\nArtículo 18 bis: En caso de que las recetas mencionadas en la presente ley sean redactadas electrónicamente, o en caso de que los registros obligatorios sean llevados electrónicamente, la firma y demás requisitos técnicos y legales deben adecuarse a la legislación especial vigente y a lo que establezca la autoridad de aplicación.`,
          problemasIdentificados: [
            "Solo permite recetas electrónicas, no las obliga",
            "No deroga artículos que exigen recetas manuscritas",
            "Frase 'en caso de que' mantiene opcionalidad",
            "Falta reglamentación específica de autoridad",
          ],
          impactoTDAH:
            "Crítico - Modificación insuficiente mantiene conflicto legal",
        },
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "Ley conceptualmente correcta pero mal redactada para resolver conflictos",
          "Plazo de implementación vencido sin consecuencias",
          "Modificación insuficiente de Ley 19.303 mantiene ambigüedad legal",
          "Falta autoridad de aplicación con poder efectivo",
        ],
        solucionSimple:
          "Reglamentación que clarifique implementación inmediata de recetas electrónicas",
        urgencia: "Alta - Ley vigente pero inaplicable por conflictos legales",
        estimacionImpacto:
          "Resolvería completamente problema de acceso para más de 500,000 pacientes TDAH",
      },
    },
  },
  {
    numero: "Ley 26.657",
    titulo: "Ley Nacional de Salud Mental",
    descripcion:
      "Regula atención de salud mental con enfoque de derechos humanos. Su interpretación variable entre profesionales genera debate sobre diagnóstico y tratamiento farmacológico del TDAH.",
    fecha: "2010-11-25",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-26657-175977",
    ultimaActualizacion: "2010-11-25",
    analisisIA: {
      beneficios: [
        "Protege derechos humanos en tratamientos de salud mental",
        "Promueve equipos interdisciplinarios para atención integral",
        "Previene internaciones innecesarias y abusos",
        "Establece marco legal sólido para protección del paciente",
      ],
      problemas: [
        "Interpretación variable genera resistencia a diagnósticos TDAH",
        "Puede limitar acceso a tratamiento farmacológico en adultos",
        "Escasez de equipos interdisciplinarios retrasa atención",
        "Ambigüedad en aplicación a trastornos neurobiológicos",
      ],
      puntuacion: 7.0,
      recomendacion:
        "Marco legal importante que requiere interpretación equilibrada para trastornos como TDAH.",
    },
    puntosClave: [
      "Garantiza derechos humanos en salud mental",
      "Medicamentos solo con fines terapéuticos",
      "Promueve equipos interdisciplinarios",
      "Enfoque de atención comunitaria",
      "Interpretación variable afecta tratamientos TDAH",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 3º",
          titulo: "Definición de Salud Mental - Prohibición de Diagnóstico Basado en Factores Externos",
          textoActual: `En el marco de la presente ley se reconoce a la salud mental como un proceso determinado por componentes históricos, socio-económicos, culturales, biológicos y psicológicos. En ningún caso puede hacerse diagnóstico en el campo de la salud mental sobre la base exclusiva de: a) Status político, socio-económico, pertenencia a un grupo cultural, racial o religioso; b) Demandas familiares, laborales, falta de conformidad o adecuación con valores morales, sociales, culturales, políticos o creencias religiosas prevalecientes en la comunidad; c) Elección o identidad sexual; d) La mera existencia de antecedentes de tratamiento u hospitalización.`,
          problemasIdentificados: [
            "Puede interpretarse como prohibición de diagnóstico TDAH en adultos con problemas laborales",
            "Genera confusión sobre validez de síntomas en contextos laborales",
            "Profesionales pueden evitar diagnósticos por precaución legal",
            "Falta claridad sobre qué constituye 'base exclusiva' vs. evidencia complementaria",
          ],
          impactoTDAH:
            "Alto - Crea incertidumbre sobre legitimidad del diagnóstico TDAH en adultos",
        },
        {
          articulo: "Artículo 12",
          titulo: "Prescripción de Medicación - Restricciones y Enfoque Interdisciplinario",
          textoActual: `La prescripción de medicación sólo debe responder a las necesidades fundamentales de la persona con padecimiento mental y se administrará exclusivamente con fines terapéuticos y nunca como castigo, por conveniencia de terceros, o para suplir la necesidad de acompañamiento terapéutico o cuidados especiales. La indicación y renovación de prescripción de medicamentos sólo puede realizarse a partir de las evaluaciones profesionales pertinentes y nunca de forma automática. Debe promoverse que los tratamientos psicofarmacológicos se realicen en el marco de abordajes interdisciplinarios.`,
          problemasIdentificados: [
            "Puede interpretarse como prohibición de medicar para mejorar desempeño laboral",
            "Ambigüedad sobre qué constituye 'conveniencia de terceros'",
            "Requiere equipos interdisciplinarios no siempre disponibles",
            "Puede retrasar tratamientos efectivos por requisitos burocráticos",
          ],
          impactoTDAH:
            "Crítico - Impacta directamente prescripción de tratamientos TDAH en adultos",
        },
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "Ambigüedad en definiciones crea resistencia profesional a diagnósticos TDAH",
          "Restricciones a medicación pueden interpretarse como prohibición de tratamiento farmacológico",
          "Requisito de equipos interdisciplinarios no disponibles retrasa tratamientos",
          "Enfoque anti-medicalización puede chocar con evidencia científica del TDAH",
        ],
        solucionSimple:
          "Reglamentación específica que clarifique aplicación a trastornos del neurodesarrollo",
        urgencia: "Alta - Impacta directamente acceso a tratamiento TDAH",
        estimacionImpacto:
          "Puede afectar negativamente hasta 300,000 pacientes con TDAH por resistencia profesional",
      },
    },
  },
  {
    numero: "Ley 19.303",
    titulo: "Ley de Psicotrópicos",
    descripcion:
      "Regula fabricación, comercialización y uso de sustancias psicotrópicas desde 1971. Establece controles estrictos para metilfenidato que resultan inadecuados para tratamientos crónicos.",
    fecha: "1971-10-11",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Poder Ejecutivo Nacional",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966",
    ultimaActualizacion: "2020-08-11",
    analisisIA: {
      beneficios: [
        "Marco legal establecido para control de psicotrópicos",
        "Sistema de clasificación por nivel de riesgo de abuso",
        "Control de calidad en fabricación y distribución",
        "Prevención del uso indebido de sustancias controladas",
      ],
      problemas: [
        "Recetas manuscritas triplicadas inadecuadas para era digital",
        "Límite de 20 días inapropiado para medicación crónica",
        "Genera consultas médicas excesivas para renovación",
        "Burocracia farmacéutica desalienta dispensación",
        "Acceso desigual entre diferentes regiones del país",
      ],
      puntuacion: 4.0,
      recomendacion:
        "Normativa desactualizada que requiere modernización para tratamientos crónicos como TDAH.",
    },
    puntosClave: [
      "Metilfenidato clasificado en Lista II (control estricto)",
      "Recetas manuscritas triplicadas obligatorias",
      "Máximo 20 días de tratamiento por prescripción",
      "Archivo físico obligatorio por 2 años",
      "Artículo 18 bis permite recetas electrónicas",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 13",
          titulo: "Recetas manuscritas triplicadas obligatorias",
          textoActual: `Los sicotrópicos incluidos en la Lista II, sólo podrán ser prescriptos por profesionales médicos matriculados... mediante recetas extendidas en formularios oficializados, por triplicado... Las recetas deberán ser manuscritas por el médico en forma legible...`,
          problemasIdentificados: [
            "Manuscritas obligatorias incompatibles con recetas electrónicas",
            "Sistema triplicado genera burocracia excesiva",
            "Una sola dispensación imposibilita medicación crónica eficiente",
          ],
          impactoTDAH:
            "Crítico - Impide acceso eficiente a medicación crónica como metilfenidato",
        },
        {
          articulo: "Artículo 16",
          titulo: "Límite de 20 días máximo",
          textoActual: `En ningún caso podrán extenderse ni expenderse recetas cuya cantidad de sicotrópicos incluidos en la Lista II, exceda la necesaria para administrar... hasta veinte (20) días de tratamiento.`,
          problemasIdentificados: [
            "Obliga consultas médicas cada 20 días para medicación crónica",
            "Inadecuado para TDAH que requiere tratamiento continuo",
            "Sobrecarga innecesaria del sistema de salud",
          ],
          impactoTDAH: "Crítico - Principal barrera para tratamiento TDAH continuo",
        },
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "Conflicto directo con Ley 27.553 de recetas electrónicas",
          "Límite de 20 días inadecuado para medicación crónica TDAH",
          "Sistema manuscrito obsoleto para era digital",
        ],
        solucionSimple:
          "Modernización normativa que permita prescripciones electrónicas para medicamentos TDAH",
        urgencia: "Alta - Afecta a más de 500,000 pacientes TDAH en Argentina",
      },
    },
  },
];

export const propuestasNecesarias = [
  {
    titulo: "Seguimiento de la Resolución 2214/2025",
    resumenEjecutivo:
      "Monitorear el cumplimiento efectivo de la Resolución 2214/2025 que establece recetas exclusivamente electrónicas para medicamentos TDAH con plazo de 120 días.",
    descripcion:
      "La Resolución 2214/2025 representa un avance significativo que podría resolver el problema de acceso a medicación TDAH. Se requiere:\n\n1) **Monitoreo del cumplimiento del plazo de 120 días** para implementación de recetas electrónicas de psicotrópicos Lista II.\n\n2) **Seguimiento jurisdiccional** para asegurar implementación efectiva en todas las provincias.\n\n3) **Evaluación de resultados** para identificar obstáculos y proponer ajustes necesarios.",
    problemaQueResuelve:
      "Asegurar implementación efectiva y evitar dilaciones que limiten el impacto de esta normativa para pacientes TDAH.",
    beneficiosClave: [
      "✓ Establece recetas exclusivamente electrónicas obligatorias",
      "✓ Plazo específico de 120 días para medicamentos TDAH",
      "✓ Sistema CUIR garantiza trazabilidad completa",
      "✓ Repositorios digitales con acceso controlado",
    ],
    ventajas: [
      "→ Marco normativo ya aprobado y vigente",
      "→ Seguridad jurídica con obligatoriedad clara",
      "→ Adopción de estándares internacionales modernos",
      "→ Potencial para resolver completamente el problema de acceso",
    ],
    impacto: "Solución potencial para más de 500,000 pacientes TDAH en Argentina",
    responsable: "Ministerio de Salud Nacional y jurisdicciones provinciales",
    accionNecesaria: "Monitoreo estricto del cumplimiento del plazo de noviembre 2025",
  },
  {
    titulo: "Ampliación de Opciones Terapéuticas",
    resumenEjecutivo:
      "Facilitar el registro de nuevos medicamentos para TDAH ya aprobados internacionalmente. Argentina dispone de opciones limitadas comparado con estándares mundiales.",
    descripcion:
      "El Consenso y la literatura internacional evidencian la necesidad de más opciones terapéuticas.\n\nSe propone acción coordinada entre ANMAT y el Congreso para:\n• Contactar laboratorios farmacéuticos internacionales\n• Identificar barreras regulatorias y de mercado\n• Agilizar registro de medicamentos aprobados por FDA y EMA",
    problemaQueResuelve:
      "Falta de alternativas para aproximadamente 30% de pacientes con respuesta inadecuada a medicación disponible.",
    beneficiosClave: [
      "✓ Incorporación de lisdexanfetamina y otras opciones terapéuticas",
      "✓ Mayor arsenal farmacológico para personalización de tratamientos",
      "✓ Fomento de competitividad en el mercado farmacéutico",
    ],
    ventajas: [
      "→ Acceso a tratamientos estándar internacionales",
      "→ No requiere nueva legislación, solo acción regulatoria",
      "→ Diálogo directo con industria farmacéutica",
    ],
    impacto: "Beneficio potencial para hasta 150,000 pacientes",
    responsable: "ANMAT y Comisión de Salud del Congreso",
    accionNecesaria: "Solicitar informes a ANMAT sobre barreras regulatorias",
  },
];

// Problemas principales del TDAH en Argentina
export const problemasReales = [
  {
    problema: "Implementación de la Resolución 2214/2025",
    descripcion:
      "La Resolución 2214/2025 establece por primera vez recetas exclusivamente electrónicas para medicamentos TDAH.\n\n→ Aspectos positivos:\n• Elimina recetas manuscritas obligatorias\n• Plazo específico de 120 días (noviembre 2025)\n• Sistema CUIR para trazabilidad\n• Cobertura en todo el territorio nacional\n\n→ Aspectos a monitorear:\n• Cumplimiento efectivo por parte de las jurisdicciones\n• Implementación real en farmacias\n• Resolución de conflictos normativos pendientes",
    resumen:
      "Primera normativa que puede resolver el problema de acceso a medicación TDAH. Requiere seguimiento estricto de implementación.",
    urgencia: "Alta",
    impacto: "Potencial solución para 500,000+ pacientes TDAH",
  },
  {
    problema: "Opciones farmacológicas limitadas",
    descripcion:
      "Argentina dispone de opciones terapéuticas limitadas comparado con estándares internacionales.\n\n→ Comparación internacional:\n• Estados Unidos: Más de 10 medicamentos disponibles\n• Europa: 8+ opciones terapéuticas\n• Chile: 6 medicamentos registrados\n• Argentina: 2 medicamentos (metilfenidato y atomoxetina)\n\n→ Consecuencias:\n• Aproximadamente 30% de pacientes no responden a opciones actuales\n• Falta de lisdexanfetamina (estándar internacional)\n• Limitaciones para casos complejos o resistentes\n• Retraso en actualización de arsenal terapéutico",
    resumen:
      "Brecha significativa entre opciones disponibles en Argentina y estándares internacionales. Limita efectividad del tratamiento.",
    urgencia: "Alta",
    impacto: "Afecta aproximadamente 150,000 pacientes sin alternativas",
  },
  {
    problema: "Subdiagnóstico en adultos, especialmente mujeres",
    descripcion:
      "Existe una brecha significativa en el diagnóstico de TDAH en población adulta, particularmente en mujeres.\n\n→ Datos relevantes:\n• Proporción diagnóstica niños: 4:1 (hombres:mujeres)\n• Proporción real estimada en adultos: 2:1\n• Miles de mujeres adultas sin diagnóstico histórico\n\n→ Factores contribuyentes:\n• Presentación predominantemente inatenta en mujeres\n• Síntomas se confunden con otros trastornos\n• Sesgo diagnóstico hacia hiperactividad masculina\n• Estrategias compensatorias ocultan síntomas",
    resumen:
      "Sesgo diagnóstico sistemático afecta especialmente a mujeres adultas. Presenta desafíos para identificación y tratamiento oportuno.",
    urgencia: "Alta",
    impacto: "Miles de adultos, especialmente mujeres, sin diagnóstico",
  },
  {
    problema: "Tensiones entre enfoques terapéuticos",
    descripcion:
      "Existen diferencias conceptuales significativas entre corrientes profesionales respecto al TDAH.\n\n→ Perspectivas en tensión:\n• Enfoque neurobiológico: TDAH como condición neurológica\n• Corrientes psicoanalíticas: resistencia a medicalización\n• Interpretaciones variables de normativas existentes\n\n→ Impacto en la práctica:\n• Inconsistencia en criterios diagnósticos\n• Variabilidad en enfoques de tratamiento\n• Resistencia al tratamiento farmacológico en algunos sectores\n• Confusión en pacientes y familias",
    resumen:
      "Diferencias conceptuales entre corrientes profesionales generan inconsistencias en diagnóstico y tratamiento del TDAH.",
    urgencia: "Media",
    impacto: "Afecta consistencia y calidad de atención a nivel nacional",
  },
];

export const fuentesDocumentacion = {
  titulo: "Fuentes y Documentación",
  descripcion: "El análisis se basa en revisión exhaustiva de legislación vigente, consensos de especialistas y producción académica relevante:",
  fuentes: [
    {
      titulo: "Resolución 2214/2025 del Ministerio de Salud",
      descripcion: "Establece implementación integral de recetas electrónicas con plazos específicos para medicamentos controlados TDAH.",
      referencia: "(Boletín Oficial, 21/07/2025)"
    },
    {
      titulo: "Primer Consenso Argentino sobre TDAH en Adultos",
      descripcion: "Proporciona base clínica y científica para propuestas de reforma y actualización normativa.",
      referencia: "(Vertex, 2025)"
    },
    {
      titulo: "Medicalización del TDAH en Argentina",
      descripcion: "Analiza tendencias y especificidades locales del tratamiento del TDAH en el contexto argentino.",
      referencia: "(Bianchi, Faraone & Torricelli, 2020)"
    },
    {
      titulo: "The Journey of ADHD in Argentina",
      descripcion: "Explora el contexto histórico y las tensiones profesionales en torno al TDAH en el país.",
      referencia: "(Faraone & Bianchi, 2018)"
    },
    {
      titulo: "Leyes Nacionales y Decretos",
      descripcion: "Marco normativo completo: Ley 19.303 (Psicotrópicos), Ley 26.657 (Salud Mental), Ley 27.553 (Recetas Electrónicas) y Resolución 2214/2025.",
      referencia: "(InfoLeg y Boletín Oficial)"
    }
  ],
  notaLegal: "Proyecto independiente de análisis. No representa comunicación oficial de entidades gubernamentales. Información verificable en fuentes públicas."
};