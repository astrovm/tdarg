

// Leyes principales relevantes para TDAH - Ordenadas de más nuevas a más viejas
export const leyes = [
  {
    numero: "Ley 27.553",
    titulo: "Ley de Recetas Electrónicas o Digitales",
    descripcion:
      "Establece que las prescripciones solo pueden ser redactadas a través de plataformas electrónicas habilitadas. También habilita la telemedicina en todo el país.",
    fecha: "2020-08-11",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Honorable Congreso de la Nación Argentina",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27553-340919",
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
      recomendacion:
        "Ley excelente en teoría pero mal implementada - conflicto no resuelto con Ley 19.303 para medicamentos TDAH",
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
          textoActual: `La presente ley tiene por objeto:\n\nEstablecer que la prescripción y dispensación de medicamentos, y toda otra prescripción, solo puedan ser redactadas y firmadas a través de plataformas electrónicas habilitadas a tal fin.\n\nEstablecer que puedan utilizarse plataformas de teleasistencia en salud, en todo el territorio nacional, de conformidad con la Ley N° 25.326 de Protección de los Datos Personales y la Ley N° 26.529 de Derechos del Paciente.`,
          problemasIdentificados: [
            "Dice 'solo puedan' pero no deroga explícitamente las recetas manuscritas",
            "No menciona cómo resolver conflictos con leyes anteriores",
            "Falta especificidad sobre medicamentos controlados",
            "No establece sanciones por incumplimiento",
          ],
          propuestaReescritura: `La presente ley tiene por objeto:\n\na) Establecer que la prescripción y dispensación de medicamentos, y toda otra prescripción, DEBEN ser redactadas y firmadas exclusivamente a través de plataformas electrónicas habilitadas, reemplazando definitivamente las recetas manuscritas.\n\nb) Derogar expresamente toda disposición legal que exija recetas manuscritas, incluidos los artículos 13 y 14 de la Ley 19.303.\n\nc) Establecer que los medicamentos controlados (psicotrópicos y estupefacientes) se rigen por esta ley, manteniendo controles de seguridad en formato digital.\n\nd) Habilitar plataformas de teleasistencia en salud con las mismas garantías de seguridad y privacidad.`,
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
          propuestaReescritura: `La autoridad de aplicación debe:\n\na) Implementar inmediatamente la digitalización total, sin excepciones.\n\nb) Establecer un nuevo plazo máximo de 90 días para completar la migración.\n\nc) Crear un sistema de monitoreo público del avance de implementación.\n\nd) Aplicar sanciones a instituciones que no cumplan con la digitalización.\n\ne) Designar una autoridad de aplicación específica con presupuesto asignado.`,
          impactoTDAH: "Alto - Plazo vencido mantiene el limbo legal actual",
        },
        {
          articulo: "Artículo 11",
          titulo: "Modificación Insuficiente de Ley 19.303",
          textoActual: `Incorpórase el artículo 18 bis a la ley 19.303, el que quedará redactado de la siguiente manera:\n\nArtículo 18 bis: En caso de que las recetas mencionadas en la presente ley sean redactadas electrónicamente, o en caso de que los registros obligatorios sean llevados electrónicamente, la firma y demás requisitos técnicos y legales deben adecuarse a la legislación especial vigente y a lo que establezca la autoridad de aplicación.`,
          problemasIdentificados: [
            "Solo 'permite' recetas electrónicas, no las obliga",
            "No deroga los artículos 13-14 que exigen manuscritas",
            "Frase 'en caso de que' mantiene opcionalidad",
            "Falta reglamentación específica de la autoridad",
          ],
          propuestaReescritura: `Sustitúyanse los artículos 13, 14 y 16 de la Ley 19.303, los que quedarán redactados de la siguiente manera:\n\nArtículo 13: Los sicotrópicos incluidos en la Lista II solo podrán ser prescriptos por profesionales médicos matriculados mediante recetas electrónicas con firma digital certificada. Para medicación crónica como TDAH, se permite prescripción por hasta 90 días con renovación trimestral.\n\nArtículo 14: Los sicotrópicos incluidos en las Listas III y IV solo podrán despacharse bajo receta electrónica archivada digitalmente por 5 años.\n\nArtículo 16: Las prescripciones de Lista II para medicación crónica pueden extenderse hasta 90 días de tratamiento, con controles médicos según criterio profesional.`,
          impactoTDAH:
            "Crítico - Reforma insuficiente mantiene conflicto legal",
        },
      ],
      articulosPropuestos: [],
      resumenImpacto: {
        problemasPrincipales: [
          "Ley excelente en principio pero mal redactada para resolver conflictos",
          "Plazo de implementación vencido sin consecuencias",
          "Modificación insuficiente de Ley 19.303 mantiene ambigüedad",
          "Falta autoridad de aplicación con poder real",
        ],
        solucionSimple:
          "Decreto que clarifique implementación inmediata de recetas electrónicas sin excepciones",
        urgencia: "Alta - Ley vigente pero inaplicable por conflictos legales",
        estimacionImpacto:
          "Resolvería completamente el problema de recetas para 500,000+ pacientes TDAH",
      },
    },
  },
  {
    numero: "Ley 26.657",
    titulo: "Ley Nacional de Salud Mental",
    descripcion:
      "Regula la atención de la salud mental con un enfoque de derechos. Esta ley es central en el debate sobre TDAH. Las corrientes psicoanalíticas la utilizan para argumentar contra la medicalización. Esto genera tensiones con los enfoques neurobiológicos.",
    fecha: "2010-11-25",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Honorable Congreso de la Nación Argentina",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-26657-175977",
    ultimaActualizacion: "2010-11-25",
    analisisIA: {
      beneficios: [
        "Promueve un enfoque integral más allá de la medicalización",
        "Empodera a profesionales contrarios a la pathologización infantil",
        "Protege los derechos humanos en salud mental",
        "Establece equipos interdisciplinarios para tratamiento",
        "Previene internaciones innecesarias",
      ],
      problemas: [
        "Falta claridad en su aplicación a ADHD en adultos",
        "Genera conflictos con enfoques médicos tradicionales",
        "No regula específicamente el acceso a medicamentos para adultos",
        "Interpretación variable entre profesionales",
        "Puede retrasar tratamientos efectivos en adultos",
        "Su enfoque en 'padecimiento mental' es a veces interpretado por algunos profesionales como un argumento en contra del diagnóstico y tratamiento farmacológico del TDAH, generando una barrera de acceso, como se discute en 'The Journey of ADHD in Argentina'.",
      ],
      puntuacion: 7.0,
      recomendacion:
        "Ley clave para el debate ADHD, pero necesita reglamentación específica para tratamientos farmacológicos en adultos",
    },
    puntosClave: [
      "Art. 1: Garantiza derechos humanos en salud mental",
      "Art. 12: Medicamentos solo con fines terapéuticos, nunca como castigo",
      "Art. 8: Promueve equipos interdisciplinarios",
      "Art. 9: Enfoque de salud mental comunitaria",
      "Art. 14: Limita internaciones involuntarias",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 3º",
          titulo: "Definición de Salud Mental - Prohibición de Diagnóstico Basado en Factores Externos",
          textoActual: `En el marco de la presente ley se reconoce a la salud mental como un proceso determinado por componentes históricos, socio-económicos, culturales, biológicos y psicológicos. En ningún caso puede hacerse diagnóstico en el campo de la salud mental sobre la base exclusiva de: a) Status político, socio-económico, pertenencia a un grupo cultural, racial o religioso; b) Demandas familiares, laborales, falta de conformidad o adecuación con valores morales, sociales, culturales, políticos o creencias religiosas prevalecientes en la comunidad; c) Elección o identidad sexual; d) La mera existencia de antecedentes de tratamiento u hospitalización.`,
          problemasIdentificados: [
            "Puede interpretarse como prohibición de diagnóstico de TDAH en adultos con problemas laborales",
            "Genera confusión sobre la validez de síntomas en contextos laborales y sociales",
            "Profesionales pueden evitar diagnósticos por miedo a violaciones legales",
            "Falta claridad sobre qué constituye 'base exclusiva' vs. evidencia complementaria",
          ],
          impactoTDAH:
            "Alto - Crea incertidumbre sobre la legitimidad del diagnóstico TDAH en adultos",
        },
        {
          articulo: "Artículo 12",
          titulo: "Prescripción de Medicación - Restricciones y Enfoque Interdisciplinario",
          textoActual: `La prescripción de medicación sólo debe responder a las necesidades fundamentales de la persona con padecimiento mental y se administrará exclusivamente con fines terapéuticos y nunca como castigo, por conveniencia de terceros, o para suplir la necesidad de acompañamiento terapéutico o cuidados especiales. La indicación y renovación de prescripción de medicamentos sólo puede realizarse a partir de las evaluaciones profesionales pertinentes y nunca de forma automática. Debe promoverse que los tratamientos psicofarmacológicos se realicen en el marco de abordajes interdisciplinarios.`,
          problemasIdentificados: [
            "Puede interpretarse como prohibición de medicar para facilitar el desempeño laboral en adultos",
            "Genera resistencia en empleadores y equipos de trabajo al tratamiento farmacológico",
            "Ambigüedad sobre qué constituye 'conveniencia de terceros' en contextos laborales",
            "Requiere equipos interdisciplinarios que no siempre están disponibles para adultos trabajadores",
            "Puede retrasar tratamientos efectivos por burocracia administrativa que impacta la productividad",
          ],
          impactoTDAH:
            "Crítico - Directamente impacta la prescripción de metilfenidato y tratamientos TDAH en adultos trabajadores",
        },
        {
          articulo: "Artículo 8º",
          titulo: "Equipos Interdisciplinarios Obligatorios",
          textoActual: `Debe promoverse que la atención en salud mental esté a cargo de un equipo interdisciplinario integrado por profesionales, técnicos y otros trabajadores capacitados con la debida acreditación de la autoridad competente. Se incluyen las áreas de psicología, psiquiatría, trabajo social, enfermería, terapia ocupacional y otras disciplinas o campos pertinentes.`,
          problemasIdentificados: [
            "Escasez de equipos interdisciplinarios completos en el sistema público",
            "Puede retrasar tratamientos por falta de profesionales específicos",
            "Genera costos adicionales que obras sociales pueden rechazar",
            "Falta de coordinación entre disciplinas puede generar conflictos",
          ],
          impactoTDAH:
            "Medio - Complica el acceso a tratamiento especializado",
        },
        {
          articulo: "Artículo 27",
          titulo: "Prohibición de Nuevas Instituciones Monovalentes",
          textoActual: `Queda prohibida por la presente ley la creación de nuevos manicomios, neuropsiquiátricos o instituciones de internación monovalentes, públicos o privados. En el caso de los ya existentes se deben adaptar a los objetivos y principios expuestos, hasta su sustitución definitiva por los dispositivos alternativos.`,
          problemasIdentificados: [
            "Puede limitar la creación de centros especializados en TDAH",
            "Falta de dispositivos alternativos específicos para trastornos del neurodesarrollo",
            "Puede forzar tratamientos en contextos inadecuados",
            "No distingue entre internación psiquiátrica y centros de día especializados",
          ],
          impactoTDAH:
            "Bajo - Impacto indirecto en servicios especializados",
        },
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "Ambigüedad en definiciones crea resistencia profesional a diagnósticos TDAH en adultos",
          "Restricciones a medicación pueden interpretarse como prohibición de tratamiento farmacológico para adultos trabajadores",
          "Requisito de equipos interdisciplinarios no disponibles retrasa tratamientos en población adulta",
          "Enfoque anti-medicalización puede chocar con evidencia científica del TDAH especialmente en adultos",
        ],
        solucionSimple:
          "Reglamentación específica que clarifique aplicación de la ley a trastornos del neurodesarrollo como TDAH en adultos",
        urgencia: "Alta - Impacta directamente en acceso a tratamiento TDAH",
        estimacionImpacto:
          "Puede afectar negativamente hasta 300,000 pacientes con TDAH por resistencia profesional, especialmente impactando adultos trabajadores y estudiantes universitarios",
      },
    },
  },
  {
    numero: "Ley 19.303",
    titulo: "Ley de Psicotrópicos",
    descripcion:
      "Regula la fabricación, comercialización, circulación y uso de sustancias psicotrópicas. Incluye el metilfenidato en Lista II con restricciones muy estrictas para su prescripción.",
    fecha: "1971-10-11",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Poder Ejecutivo Nacional",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966",
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
      recomendacion:
        "Ley desactualizada para TDAH - obstaculiza tratamiento moderno con burocracia de los años 70",
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
            "Una sola dispensación imposibilita medicación crónica",
          ],
          impactoTDAH:
            "Crítico - Impide acceso a medicación crónica como metilfenidato",
        },
        {
          articulo: "Artículo 16",
          titulo: "Límite de 20 días máximo",
          textoActual: `En ningún caso podrán extenderse ni expenderse recetas cuya cantidad de sicotrópicos incluidos en la Lista II, exceda la necesaria para administrar... hasta veinte (20) días de tratamiento.`,
          problemasIdentificados: [
            "Obliga consultas médicas cada 20 días para medicación crónica",
            "Inapropiado para TDAH que requiere tratamiento continuo",
            "Sobrecarga innecesaria del sistema de salud",
          ],
          impactoTDAH: "Crítico - Principal barrera para tratamiento TDAH",
        },
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "Conflicto directo con Ley 27.553 de recetas electrónicas",
          "Límite de 20 días inadecuado para medicación crónica TDAH",
          "Sistema manuscrito obsoleto en era digital",
        ],
        solucionSimple:
          "Decreto presidencial que clarifique prevalencia de Ley 27.553 para medicamentos TDAH",
        urgencia: "Alta - Afecta a 500,000+ pacientes TDAH en Argentina",
      },
    },
  },
];

export const propuestasNecesarias = [
  {
    titulo: "Reforma Regulatoria Urgente Basada en el Consenso Clínico y la Evidencia Académica",
    resumenEjecutivo:
      "Aplicar las recomendaciones del Primer Consenso Argentino sobre TDAH en adultos. Resolver inmediatamente el conflicto normativo que impide el acceso al tratamiento.",
    descripcion:
      "Proponemos una doble estrategia:\n\n1) **Decreto de Necesidad y Urgencia (DNU)**: Establece que la Ley de Receta Electrónica (27.553) prevalece sobre la Ley de Psicotrópicos (19.303) para medicamentos TDAH.\n\n2) **Proyecto de Ley**: Modernización definitiva del marco regulatorio.",
    problemaQueResuelve:
      "Elimina las barreras burocráticas (receta triplicada, límite de 20 días) que impiden el tratamiento crónico, tal como lo señala el Consenso sobre el manejo del TDAH en la adultez.",
    beneficiosClave: [
      "✅ Alinea la regulación con la evidencia científica del Consenso sobre el manejo del TDAH en la adultez.",
      "⏱️ Permite prescripciones de hasta 90 días, adecuadas para un tratamiento crónico.",
      "⚖️ Otorga seguridad jurídica a médicos y farmacéuticos.",
      "🏥 Facilita la telemedicina y la continuidad del tratamiento.",
    ],
    ventajas: [
      "🚀 Solución inmediata vía DNU, respaldada por el consenso de expertos.",
      "📜 Solución permanente a través de una nueva Ley.",
      "🔬 Basado en la máxima autoridad clínica nacional en la materia.",
      "💵 Reduce costos al sistema y a los pacientes al evitar consultas innecesarias.",
    ],
    impacto: "🎯 Beneficio directo para más de 500,000 pacientes.",
    responsable: "Poder Ejecutivo y Congreso Nacional",
    accionNecesaria: "Impulsar DNU y Proyecto de Ley simultáneamente.",
  },
  {
    titulo: "Ampliación de Opciones Terapéuticas y Registro de Medicamentos",
    resumenEjecutivo:
      "Facilitar el registro de nuevos medicamentos para TDAH ya aprobados internacionalmente. Incluye lisdexanfetamina para pacientes que no responden a tratamientos actuales.",
    descripcion:
      "El Consenso y la literatura internacional evidencian la necesidad de más opciones terapéuticas.\n\nSe propone una acción coordinada entre ANMAT y el Congreso para:\n• Contactar laboratorios farmacéuticos\n• Identificar barreras de mercado\n• Agilizar el registro de medicamentos ya aprobados por FDA y EMA",
    problemaQueResuelve:
      "La falta de alternativas para el ~30% de pacientes con respuesta inadecuada a la medicación disponible, un problema destacado en el Consenso.",
    beneficiosClave: [
      "💊 Introduce la lisdexanfetamina y otras opciones terapéuticas.",
      "👩‍⚕️ Ofrece más herramientas a los médicos para personalizar tratamientos.",
      "📈 Fomenta la innovación y competitividad en el mercado farmacéutico.",
    ],
    ventajas: [
      "🌍 Acceso a tratamientos estándar a nivel mundial.",
      "📝 No requiere una nueva ley, sino una acción regulatoria de ANMAT.",
      "🏢 Diálogo directo con la industria para eliminar barreras.",
    ],
    impacto: "🎯 Beneficio potencial para hasta 150,000 pacientes.",
    responsable: "ANMAT y Comisión de Salud del Congreso",
    accionNecesaria: "Solicitar informes a ANMAT y contactar a laboratorios.",
  },
];

// Problemas identificados - Estructura optimizada
export const problemasReales = [
  {
    problema: "Marco Regulatorio Anacrónico y Contradictorio",
    descripcion:
      "El Primer Consenso Argentino de TDAH confirma que la Ley de Psicotrópicos (19.303) de 1971 es el principal obstáculo para el tratamiento.\n\nProblemas específicos:\n• Exige recetas triplicadas manuscritas\n• Límite máximo de 20 días por prescripción\n• Contradice la Ley de Receta Electrónica (27.553)\n• Va contra las guías de práctica clínica modernas",
    resumen:
      "Conflicto legal entre normativas de 1971 y 2020 genera barreras burocráticas que impiden el tratamiento crónico del TDAH.",
    urgencia: "Crítico",
    impacto: "Afecta a más de 500,000 pacientes",
  },
  {
    problema: "Limitadas Opciones Farmacológicas",
    descripcion:
      "Argentina solo dispone de dos medicamentos: metilfenidato y atomoxetina.\n\nProblemas identificados:\n• Falta lisdexanfetamina (tratamiento estándar internacional)\n• ~30% de pacientes no responden a las terapias actuales\n• Opciones limitadas para casos complejos\n• Retraso respecto a estándares internacionales",
    resumen:
      "La falta de acceso a medicamentos modernos como la lisdexanfetamina limita severamente la efectividad del tratamiento.",
    urgencia: "Crítico",
    impacto: "Afecta a ~150,000 pacientes sin alternativas terapéuticas",
  },
  {
    problema: "Infradiagnóstico en Adultos, especialmente en Mujeres",
    descripcion:
      "El Consenso subraya el subdiagnóstico en adultos, especialmente en mujeres.\n\nFactores que complican el diagnóstico:\n• Síntomas se confunden con otras condiciones\n• En mujeres: presentación predominantemente inatenta\n• Enmascaramiento por comorbilidades (ansiedad, depresión)\n• Retraso o ausencia de diagnóstico correcto",
    resumen:
      "El sesgo de género y la diferente presentación de síntomas invisibilizan el TDAH en la población adulta y femenina.",
    urgencia: "Alta",
    impacto: "Miles de adultos, especialmente mujeres, sin diagnóstico",
  },
  {
    problema: "Tensión entre el Enfoque Neurobiológico y la Influencia del Psicoanálisis",
    descripcion:
      "Los estudios 'The Journey of ADHD in Argentina' (2018) y 'Medicalización del TDAH en Argentina' (2020) destacan la fuerte influencia del psicoanálisis en el país.\n\nImpacto en la práctica clínica:\n• Se opone a la 'medicalización de la infancia'\n• Argumenta que el diagnóstico TDAH viola la Ley de Salud Mental\n• Rechaza el uso de estimulantes\n• Crea tensión con el enfoque neurobiológico\n• Dificulta un diagnóstico estandarizado y basado en evidencia",
    resumen:
      "La fuerte influencia del psicoanálisis, que a menudo se opone al diagnóstico y tratamiento farmacológico del TDAH, crea una barrera cultural y profesional para el acceso al cuidado.",
    urgencia: "Alta",
    impacto: "Afecta la calidad, consistencia y acceso al tratamiento a nivel nacional",
  },
];

export const fuentesDocumentacion = {
  titulo: "Fuentes y Documentación",
  descripcion: "El análisis presentado en esta página se basa en una revisión exhaustiva de la legislación vigente, consensos de especialistas y producción académica relevante. Los documentos clave que informan este análisis son:",
  fuentes: [
    {
      titulo: "Primer Consenso Argentino sobre el manejo del TDAH en la adultez",
      descripcion: "Proporciona la base clínica y científica para las propuestas de reforma.",
      referencia: "(Vertex, 2025)"
    },
    {
      titulo: "Medicalización del TDAH en Argentina",
      descripcion: "Analiza las tendencias y especificidades locales del tratamiento del TDAH.",
      referencia: "(Bianchi, Faraone & Torricelli, 2020)"
    },
    {
      titulo: "The Journey of ADHD in Argentina",
      descripcion: "Explora el contexto histórico y las tensiones profesionales en torno al TDAH en el país.",
      referencia: "(Faraone & Bianchi, 2018)"
    },
    {
      titulo: "Leyes Nacionales y Decretos",
      descripcion: "Ley 19.303 (Psicotrópicos), Ley 26.657 (Salud Mental), Ley 27.553 (Recetas Electrónicas) y Decreto 345/2024.",
      referencia: ""
    }
  ],
  notaLegal: "Este es un proyecto de análisis independiente y no representa una comunicación oficial de ninguna entidad gubernamental."
};
