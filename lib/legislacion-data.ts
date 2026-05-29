// Legislación relevante para TDAH en Argentina
export const leyes = [
  {
    numero: "Resolución 2214/2025",
    titulo: "Recetas electrónicas: norma nacional, implementación incompleta",
    descripcion:
      "Define estándares nacionales para receta electrónica, incluyendo psicotrópicos usados en TDAH como metilfenidato y lisdexanfetamina. En la práctica no resolvió todavía el acceso: CABA y Provincia de Buenos Aires siguen admitiendo o exigiendo circuitos en papel para estos casos.",
    fecha: "2025-07-18",
    estado: "Vigente, implementación parcial",
    tipo: "Nacional",
    organismo: "Ministerio de Salud",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-2214-2025-415349",
    ultimaActualizacion: "2026-05-28",
    analisisIA: {
      beneficios: [
        "Define estándares nacionales para recetas electrónicas",
        "Incluye un esquema técnico para medicamentos controlados",
        "Implementa sistema CUIR para trazabilidad",
        "Reconoce la necesidad de interoperabilidad entre prescriptores, repositorios y farmacias",
      ],
      problemas: [
        "La obligatoriedad nacional depende de adhesión o adecuación jurisdiccional",
        "No desplazó en la práctica los circuitos de papel para psicotrópicos en CABA y PBA",
        "La Provincia de Buenos Aires mantiene coexistencia de recetas en papel y electrónicas",
        "CABA tiene régimen propio que admite papel, electrónica o digital",
        "No hay evidencia pública de implementación efectiva para metilfenidato y lisdexanfetamina en esas jurisdicciones",
      ],
      puntuacion: 5.5,
      recomendacion:
        "La norma sirve como marco, pero no como solución operativa. Para metilfenidato y lisdexanfetamina sigue importando qué acepta la jurisdicción y la farmacia.",
    },
    puntosClave: [
      "Marco nacional para receta electrónica",
      "La aplicación territorial depende de adhesión o adecuación local",
      "Incluye medicamentos controlados Lista II en el diseño técnico",
      "Sistema CUIR para identificación única",
      "PBA mantiene recetas en papel vigentes; CABA tiene régimen propio mixto",
    ],
    analisisDetallado: {
      articulosProblematicos: [
        {
          articulo: "Artículo 3º",
          titulo: "Prescripciones Exclusivamente Electrónicas",
          textoActual: `Las prescripciones deberán emitirse exclusivamente en formato electrónico o digital a través de plataformas registradas en el Registro Nacional de Plataformas Digitales de Salud (ReNaPDiS).`,
          problemasIdentificados: [
            "El propio marco nacional depende de adhesión o adecuación local",
            "No alcanza para que una farmacia acepte receta electrónica de Lista II si la jurisdicción o convenio sigue pidiendo papel",
            "La Ley 19.303 y los circuitos jurisdiccionales siguen pesando en psicotrópicos",
          ],
          impactoTDAH:
            "Parcial - positivo como marco, insuficiente como solución práctica para metilfenidato y lisdexanfetamina en CABA/PBA",
        },
        {
          articulo: "Anexo I - Expendio Legalmente Restringido",
          titulo: "Digitalización de Psicotrópicos Lista II",
          textoActual: `Se establece un plazo de CIENTO VEINTE (120) días corridos desde la entrada en vigencia de la medida que aprueba el presente Anexo para que las jurisdicciones, softwares prescriptores y repositorios realicen las adecuaciones necesarias que permitan el registro, archivo y acceso a las recetas electrónicas o digitales sujetas a fiscalización.`,
          problemasIdentificados: [
            "El plazo venció sin que se observe implementación efectiva para metilfenidato y lisdexanfetamina en CABA/PBA",
            "No hay sanción práctica visible por jurisdicciones o actores que no adecuaron el circuito",
            "Requiere coordinación entre Nación, jurisdicciones, prescriptores, repositorios, farmacias y financiadores",
          ],
          impactoTDAH:
            "Crítico - el plazo no cambió todavía la experiencia real de muchos pacientes",
        },
      ],
      resumenImpacto: {
        problemasPrincipales: [
          "Brecha entre norma nacional y dispensa real",
          "CABA y PBA siguen con circuitos que admiten o requieren papel",
          "Psicotrópicos Lista II siguen siendo el punto más trabado",
          "Falta evidencia pública de interoperabilidad completa para metilfenidato y lisdexanfetamina",
        ],
        solucionSimple:
          "Adecuación jurisdiccional explícita y comunicación operativa a farmacias sobre psicotrópicos Lista II",
        urgencia: "Alta - la norma existe pero el paciente sigue chocando con el circuito real",
        estimacionImpacto:
          "Podría mejorar el acceso si se implementa realmente, pero hoy no elimina la barrera del papel",
      },
    },
  },
  {
    numero: "Ley 27.553",
    titulo: "Ley de Recetas Electrónicas o Digitales",
    descripcion:
      "Establece el marco nacional de receta electrónica y habilita telemedicina. Su implementación efectiva sigue limitada por adhesión jurisdiccional, interoperabilidad y circuitos especiales para psicotrópicos.",
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
        "La implementación real depende de jurisdicciones y sistemas habilitados",
        "No resolvió de forma operativa el circuito de psicotrópicos Lista II",
        "Falta interoperabilidad completa entre plataformas y farmacias",
        "CABA y PBA tienen regímenes propios que mantienen formatos mixtos",
      ],
      puntuacion: 6.0,
      recomendacion:
        "La ley está bien pensada pero le faltan reglas claras para que funcione en la práctica.",
    },
    puntosClave: [
      "Recetas electrónicas como objetivo nacional",
      "Dispensación nacional sujeta a sistemas y jurisdicciones habilitadas",
      "Telemedicina autorizada para consultas médicas",
      "Modifica Ley 19.303 agregando Artículo 18 bis",
      "Persisten excepciones y circuitos especiales para medicamentos controlados",
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
          "Ley conceptualmente correcta pero insuficiente para resolver la práctica diaria",
          "Implementación desigual entre jurisdicciones",
          "Modificación insuficiente de Ley 19.303 mantiene ambigüedad operativa",
          "Falta interoperabilidad completa para psicotrópicos",
        ],
        solucionSimple:
          "Reglamentación y adhesión jurisdiccional con instrucciones específicas para psicotrópicos Lista II",
        urgencia: "Alta - Ley vigente pero aplicación desigual",
        estimacionImpacto:
          "Puede mejorar el acceso, pero no lo garantiza mientras cada jurisdicción mantenga circuitos distintos",
      },
    },
  },
  {
    numero: "CABA - Ley 6439",
    titulo: "Régimen propio de recetas en CABA",
    descripcion:
      "La Ciudad tiene una norma propia integrada a la Ley 27.553. Admite recetas en formato papel, electrónico o digital, por lo que no reemplaza automáticamente el circuito papel para psicotrópicos.",
    fecha: "2021-07-15",
    estado: "Vigente",
    tipo: "Jurisdiccional",
    organismo: "Legislatura de la Ciudad Autónoma de Buenos Aires",
    impactoReal: "alto",
    url: "https://boletinoficial.buenosaires.gob.ar/normativaba/norma/564664",
    ultimaActualizacion: "2026-05-28",
    analisisIA: {
      beneficios: [
        "Reconoce recetas electrónicas y digitales en CABA",
        "Da marco local propio para prescripción y dispensa",
        "Permite convivencia de formatos durante la transición",
      ],
      problemas: [
        "Mantiene el papel como formato válido",
        "No aclara por sí sola el circuito operativo para metilfenidato y lisdexanfetamina",
        "Puede sostener criterios distintos entre farmacias y coberturas",
      ],
      puntuacion: 5.0,
      recomendacion:
        "Sirve como marco local, pero para TDAH no alcanza si farmacias siguen pidiendo receta oficial en papel.",
    },
    puntosClave: [
      "CABA admite receta papel, electrónica o digital",
      "Régimen propio, no simple adhesión automática nacional",
      "La práctica para psicotrópicos puede seguir requiriendo papel",
    ],
  },
  {
    numero: "PBA - Receta Electrónica Bonaerense",
    titulo: "Régimen propio y coexistencia de papel y digital",
    descripcion:
      "Provincia de Buenos Aires tiene sistema propio de receta electrónica, pero sus fuentes oficiales indican que las recetas en papel, electrónicas y digitales siguen vigentes. Para psicotrópicos, la Resolución 140/2025 sólo avanzó sobre Listas III y IV. COLFARMA comunicó operativamente que psicotrópicos Lista II deben seguir prescribiéndose de puño y letra en formularios oficiales por triplicado.",
    fecha: "2023-02-28",
    estado: "Vigente, coexistencia de formatos",
    tipo: "Jurisdiccional",
    organismo: "Ministerio de Salud de la Provincia de Buenos Aires",
    impactoReal: "alto",
    url: "https://www.ms.gba.gov.ar/sitios/saluddigitalbonaerense/ejes/receta-electronica-bonaerense/",
    ultimaActualizacion: "2026-05-28",
    analisisIA: {
      beneficios: [
        "Tiene plataforma provincial de receta electrónica",
        "Permite emisión para pacientes con cobertura pública, prepagas y obras sociales",
        "Reconoce que todos los medicamentos pueden incluirse en el sistema cuando el circuito lo permite",
      ],
      problemas: [
        "Las recetas en papel siguen vigentes",
        "La Resolución 140/2025 alcanza psicotrópicos Listas III y IV, no Lista II",
        "COLFARMA indica que psicotrópicos Lista II siguen con formularios oficiales por triplicado y de puño y letra",
      ],
      puntuacion: 5.0,
      recomendacion:
        "Hay receta electrónica provincial, pero para metilfenidato y lisdexanfetamina no hay que asumir que reemplaza el papel.",
    },
    puntosClave: [
      "PBA mantiene coexistencia de recetas en papel, electrónicas y digitales",
      "La propia página oficial dice que las recetas en papel siguen vigentes",
      "COLFARMA informa que Lista II sigue con puño y letra en formulario oficial triplicado",
      "Metilfenidato y lisdexanfetamina siguen sin solución operativa clara",
    ],
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
        "Es una ley importante pero hay que interpretarla bien para que no complique el tratamiento del TDAH.",
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
    numero: "Ley 27.306",
    titulo: "Dificultades Específicas del Aprendizaje",
    descripcion:
      "Declara de interés nacional el abordaje integral de las Dificultades Específicas del Aprendizaje (DEA). No es una ley específica de TDAH, pero puede ser relevante cuando hay dificultades de aprendizaje asociadas o comórbidas y se necesitan adecuaciones escolares.",
    fecha: "2016-11-04",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley27306-267234/texto",
    ultimaActualizacion: "2016-11-04",
    analisisIA: {
      beneficios: [
        "Reconoce el abordaje integral e interdisciplinario de las DEA",
        "Impulsa adecuaciones educativas y detección temprana",
        "Puede ayudar a encuadrar apoyos escolares cuando el TDAH convive con dificultades de aprendizaje",
      ],
      problemas: [
        "No menciona TDAH como diagnóstico principal",
        "Su aplicación depende de evaluación educativa y clínica del caso",
        "No reemplaza la necesidad de diagnóstico y tratamiento específico para TDAH",
      ],
      puntuacion: 7.0,
      recomendacion:
        "Usarla como herramienta educativa cuando corresponda, sin presentarla como una ley específica de TDAH.",
    },
    puntosClave: [
      "Aplica a Dificultades Específicas del Aprendizaje",
      "Puede respaldar adecuaciones escolares como más tiempo, adaptación de evaluación o prioridad de oralidad cuando corresponda",
      "Requiere evaluación del caso",
      "No convierte automáticamente al TDAH en DEA",
    ],
  },
  {
    numero: "Ley 19.303",
    titulo: "Ley de Psicotrópicos",
    descripcion:
      "Ley de 1971 que controla psicotrópicos. Sus reglas siguen impactando el acceso a tratamientos crónicos con estimulantes controlados como metilfenidato y lisdexanfetamina.",
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
        "La norma quedó desactualizada para tratamientos crónicos de TDAH y necesita una actualización operativa.",
    },
    puntosClave: [
      "Metilfenidato y lisdexanfetamina bajo control estricto",
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
            "Crítico - Impide acceso eficiente a medicación crónica como metilfenidato y lisdexanfetamina",
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
    titulo: "Que se cumpla la Resolución 2214/2025",
    resumenEjecutivo:
      "Pasar de la norma nacional a implementación real: que CABA, PBA y el resto de las jurisdicciones indiquen claramente cuándo aceptan receta electrónica para psicotrópicos Lista II.",
    descripcion:
      "La Resolución 2214/2025 es un marco importante, pero el plazo ya no alcanza como respuesta: la implementación efectiva sigue trabada.\n\nTareas clave:\n• Confirmar por jurisdicción si psicotrópicos Lista II se aceptan con receta electrónica o siguen requiriendo papel\n• Homologar un equivalente digital del formulario oficial o triplicado jurisdiccional para Lista II\n• Publicar instrucciones claras para farmacias y prescriptores\n• Resolver interoperabilidad entre plataformas, repositorios y validadores\n• Mantener cargadas y sincronizadas las habilitaciones profesionales que exige REFEPS para recetas restringidas\n• Aclarar qué pasa en CABA y Provincia de Buenos Aires, donde el régimen real sigue siendo mixto o en papel para estos medicamentos",
    problemaQueResuelve:
      "Que la receta electrónica no quede como declaración general sin efecto real en metilfenidato y lisdexanfetamina.",
    beneficiosClave: [
      "✓ Reduce rechazos en farmacia por criterios distintos",
      "✓ Evita que el paciente dependa de receta manuscrita cuando ya existe sistema digital válido",
      "✓ Da trazabilidad sin mantener burocracia innecesaria",
      "✓ Permite saber qué jurisdicciones siguen pendientes",
    ],
    ventajas: [
      "→ No requiere rediseñar toda la ley nacional",
      "→ Ataca el problema operativo que ve el paciente",
      "→ Permite fiscalizar cumplimiento real",
      "→ Se puede actualizar por jurisdicción",
    ],
    impacto: "Solución potencial para más de 500,000 pacientes TDAH en Argentina",
    responsable: "Ministerio de Salud Nacional y jurisdicciones provinciales",
    accionNecesaria: "Publicar estado de implementación por jurisdicción, regla específica para psicotrópicos Lista II y equivalente digital del formulario oficial",
  },
  {
    titulo: "Ampliación de Opciones Terapéuticas",
    resumenEjecutivo:
      "Facilitar el registro de nuevos medicamentos para TDAH ya aprobados internacionalmente. Argentina dispone de opciones limitadas comparado con estándares mundiales.",
    descripcion:
      "El Consenso Argentino y los estudios de otros países muestran que hace falta más opciones de medicamentos.\n\nSe puede trabajar con ANMAT y el Congreso para:\n• Hablar con laboratorios de otros países\n• Ver qué trámites traban el proceso\n• Agilizar el registro de medicamentos que ya aprobaron la FDA y la EMA\n• Terminar los trámites de Autorización Efectiva de Comercialización (AEC) y el ingreso al VNM para productos ya registrados",
    problemaQueResuelve:
      "Falta de alternativas para aproximadamente 30% de pacientes con respuesta inadecuada a medicación disponible.",
    beneficiosClave: [
      "✓ Lisdexanfetamina (Ludoxa 30/50/70 mg, Monte Verde S.A. - Adium, ex Raffo) registrada en 2025, en comercialización desde 2026",
      "✓ Nuevo estimulante disponible, aunque todavía con acceso económico limitado",
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
    accionNecesaria:
      "Verificar cobertura efectiva de lisdexanfetamina: al ser nueva, obras sociales y prepagas todavía no suelen cubrirla y no está incluida en el PMO\nSolicitar informes a ANMAT y Superintendencia de Servicios de Salud sobre estado regulatorio, VNM y cobertura obligatoria",
  },
];

// Problemas principales del TDAH en Argentina
export const problemasReales = [
  {
    problema: "Resolución 2214/2025: norma nacional sin implementación efectiva",
    descripcion:
      "La Resolución 2214/2025 ordena el ecosistema nacional de receta electrónica, pero no resolvió por sí sola el problema para metilfenidato y lisdexanfetamina.\n\n→ Lo que dice Nación:\n• Receta electrónica como modalidad obligatoria desde 2025\n• Plataformas aprobadas por ReNaPDiS\n• CUIR e interoperabilidad para trazabilidad\n• Adecuación de psicotrópicos y estupefacientes\n\n→ Lo que pasa en la práctica:\n• La propia normativa nacional habla de adhesión jurisdiccional\n• Provincia de Buenos Aires mantiene convivencia de receta papel y electrónica\n• Para psicotrópicos y estupefacientes en PBA siguen rigiendo requisitos específicos; la receta papel sigue siendo necesaria en muchos casos\n• CABA tiene ley propia y admite recetas en papel, electrónicas o digitales\n• El resultado para muchos pacientes sigue siendo: pedir receta de papel para metilfenidato o lisdexanfetamina",
    resumen:
      "La norma nacional existe, pero la implementación real para psicotrópicos Lista II sigue incompleta.",
    urgencia: "Crítico",
    impacto: "Pacientes siguen dependiendo de receta papel según jurisdicción y farmacia",
  },
  {
    problema: "Validación técnica de prescriptores y datos incompletos",
    descripcion:
      "La Resolución 2214/2025 prevé que REFEPS incorpore un campo de verificación para confirmar que el profesional tiene la autorización jurisdiccional correspondiente al prescribir medicamentos de expendio legalmente restringido.\n\n→ Riesgo operativo:\n• Si la habilitación jurisdiccional no está cargada o sincronizada, la plataforma puede no poder validar la receta restringida\n• La fuente primaria habla de jurisdicciones; pueden intervenir ministerios o colegios según el régimen local\n• Si jurisdicción, repositorio, plataforma y farmacia no usan la misma información, el paciente queda atrapado entre sistemas\n• El problema no es solo legal: también es de datos, interoperabilidad y soporte a farmacias\n\n→ Verificación posible:\n• El buscador público de REFEPS/SISA puede servir para chequear matrícula y habilitación profesional general\n• El nuevo campo específico para recetas restringidas puede ser una validación técnica interna y no necesariamente visible para el paciente\n\n→ Para TDAH:\n• Metilfenidato y lisdexanfetamina dependen de circuitos de psicotrópicos Lista II\n• Aunque exista receta electrónica nacional, la dispensa puede seguir trabada por validaciones o criterios locales",
    resumen:
      "La receta digital para estimulantes necesita datos jurisdiccionales completos, no solo una norma nacional.",
    urgencia: "Alta",
    impacto: "Puede bloquear o desalentar recetas electrónicas de estimulantes aunque el marco legal exista",
  },
  {
    problema: "CUD y apoyos escolares: derechos útiles, pero no automáticos",
    descripcion:
      "El Certificado Único de Discapacidad puede habilitar cobertura y prestaciones cuando una junta evaluadora certifica una discapacidad. No corresponde presentarlo como trámite automático para toda persona con TDAH.\n\n→ CUD:\n• Se otorga por evaluación interdisciplinaria\n• La cobertura del 100% aplica a prestaciones vinculadas con lo certificado como discapacidad\n• Puede ser relevante en casos con limitación funcional significativa\n• ANDIS publica normativa para certificación de personas con deficiencia intelectual y mental; esa es la categoría administrativa a revisar, pero no hay un formulario oficial que convierta el diagnóstico TDAH en CUD automático\n\n→ Escuela:\n• La Ley 27.306 protege a estudiantes con Dificultades Específicas del Aprendizaje\n• Puede servir para pedir adecuaciones de acceso cuando hay dificultades de aprendizaje asociadas, como más tiempo, adaptación de evaluación o prioridad de oralidad\n• No reemplaza un plan educativo individual ni el criterio clínico/psicopedagógico del caso",
    resumen:
      "CUD y Ley 27.306 pueden ayudar en casos concretos, pero no deben venderse como solución universal para TDAH.",
    urgencia: "Media",
    impacto: "Evita expectativas falsas y ayuda a orientar mejor pedidos de cobertura o escuela",
  },
  {
    problema: "PAMI: receta digital que igual requiere papel para psicofármacos",
    descripcion:
      "PAMI informa que, para retirar psicofármacos, no alcanza con DNI y credencial: también se necesita receta impresa y firmada por el médico.\n\n→ Requisitos publicados por PAMI:\n• Para medicamentos especiales, incluidos psicofármacos, la receta debe estar impresa\n• Debe incluir firma ológrafa y sello médico del profesional\n• La receta duplicada es obligatoria para psicofármacos\n• En CABA, el médico debe emitir e imprimir una receta común blanca\n• En Provincia de Buenos Aires, el duplicado debe ser receta rosa física emitida por el médico y además debe incluir la receta electrónica blanca de PAMI\n\n→ Para TDAH:\n• Si la cobertura es PAMI, la experiencia real no es completamente digital\n• Esto agrega otra capa de papel sobre el problema general de psicotrópicos Lista II",
    resumen:
      "Para psicofármacos, PAMI mantiene impresión, firma física y duplicado según jurisdicción.",
    urgencia: "Alta",
    impacto: "Pacientes pueden llegar a la farmacia con receta digital pero sin la documentación física requerida",
  },
  {
    problema: "Opciones farmacológicas limitadas",
    descripcion:
      "Argentina dispone de opciones terapéuticas limitadas comparado con estándares internacionales.\n\n→ Comparación internacional:\n• Estados Unidos: Más de 10 medicamentos disponibles\n• Europa: 8+ opciones terapéuticas\n• Chile: 6 medicamentos registrados\n• Argentina: 3 medicamentos comercializados (metilfenidato, lisdexanfetamina y atomoxetina)\n\n→ Consecuencias:\n• Aproximadamente 30% de pacientes no responden a opciones actuales\n• Lisdexanfetamina (Ludoxa 30/50/70 mg, Monte Verde S.A. - Adium, ex Raffo) en comercialización desde 2026\n• Al ser nueva, obras sociales y prepagas todavía no suelen cubrirla y no está incluida en el PMO\n• Limitaciones para casos complejos o resistentes\n• Retraso en actualización de arsenal terapéutico",
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
      titulo: "Marco Normativo Nacional y Jurisdiccional",
      descripcion: "Leyes y resoluciones analizadas: Ley 19.303 (Psicotrópicos), Ley 26.657 (Salud Mental), Ley 27.306 (DEA), Ley 27.553 (Recetas Electrónicas), Resolución 2214/2025, Decreto 345/2024, normativa de CABA y normativa de Provincia de Buenos Aires.",
      referencia: "(InfoLeg, Boletín Oficial, Ministerio de Salud, PBA y CABA)"
    },
    {
      titulo: "CUD y prestaciones por discapacidad",
      descripcion: "Se revisaron fuentes oficiales sobre CUD, evaluación por junta interdisciplinaria y cobertura de prestaciones vinculadas con lo certificado como discapacidad.",
      referencia: "(ANDIS, Argentina.gob.ar, Ley 24.901)"
    },
    {
      titulo: "Estado operativo de receta electrónica",
      descripcion: "Se revisaron fuentes públicas sobre implementación real: página nacional de receta electrónica, Receta Electrónica Bonaerense, Resolución PBA 140/2025, comunicación COLFARMA sobre formulario triplicado para Lista II y página oficial de receta electrónica PAMI.",
      referencia: "(Ministerio de Salud, Salud Digital Bonaerense, Normas PBA, COLFARMA, PAMI)"
    }
  ],
  notaLegal: "Este es un análisis independiente. No hablamos en nombre del gobierno. Toda la info se puede chequear en fuentes públicas."
};
