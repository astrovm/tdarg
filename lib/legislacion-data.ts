// Legislación relevante para TDAH en Argentina
export const leyes = [
  {
    numero: "Leyes 27.553 y 19.303",
    titulo: "El laberinto de las recetas y los estimulantes",
    descripcion:
      "Aunque la Ley 27.553 establece la receta electrónica a nivel nacional, la burocracia médica choca con la Ley de Psicotrópicos (Ley 19.303). El metilfenidato y la lisdexanfetamina son 'Psicotrópicos Lista II'. Esto significa que, por ley, solo te pueden recetar medicación para un máximo de 20 días de tratamiento por vez. Además, en jurisdicciones como la Provincia de Buenos Aires, el Colegio de Farmacéuticos exige que el médico te siga prescribiendo estos medicamentos específicos de puño y letra, en formularios oficiales por triplicado, además de la validación electrónica.",
    fecha: "1971-10-11",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional / Ministerio de Salud / Jurisdicciones",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-27553-340919",
    ultimaActualizacion: "2026-05-28",
    puntosClave: [
      "La receta electrónica existe, pero no siempre reemplaza el circuito especial de psicotrópicos",
      "Metilfenidato y lisdexanfetamina están en Lista II",
      "El límite práctico es de 20 días de tratamiento por receta",
      "En PBA puede seguir haciendo falta receta manuscrita en formulario oficial triplicado",
    ],
    referencias: [
      {
        titulo: "Ley 27.553 (Recetas Electronicas)",
        url: "https://www.argentina.gob.ar/normativa/nacional/ley-27553-340919",
      },
      {
        titulo: "Ley 19.303 (Psicotropicos)",
        url: "https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966",
      },
      {
        titulo: "Resolucion 140/2025 y circulares COLFARMA PBA",
        url: "https://www.colfarma.org.ar",
      },
    ],
  },
  {
    numero: "PMO",
    titulo: "Cobertura medica y Programa Medico Obligatorio",
    descripcion:
      "Tu obra social o prepaga esta obligada a cubrirte el 40% del metilfenidato, ya que esta incluido en el Programa Medico Obligatorio (PMO) como medicamento de uso habitual. Sin embargo, a pesar de que el TDAH es cronico, el Estado no lo incluyo en el listado oficial de patologias cronicas que reciben un 70% de descuento (beneficio que si tiene la epilepsia o el trastorno bipolar). Drogas mas modernas como la lisdexanfetamina o la atomoxetina no figuran en el PMO, por lo que su cobertura suele depender de la politica de tu prepaga o de iniciar un amparo judicial.",
    fecha: "2002-04-09",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Ministerio de Salud / Superintendencia de Servicios de Salud",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/sssalud/usuarios/medicamentos-con-cobertura-del-70-del-precio-de-referencia",
    ultimaActualizacion: "2026-05-28",
    puntosClave: [
      "Metilfenidato: cobertura PMO habitual del 40%",
      "TDAH no esta en el listado oficial de patologias cronicas con 70%",
      "Lisdexanfetamina y atomoxetina suelen depender de cobertura particular o reclamo",
      "Un amparo puede ser la via cuando hay indicacion medica y rechazo de cobertura",
    ],
    referencias: [
      {
        titulo: "Resoluciones PMO 201/02 y 310/04 (Ministerio de Salud)",
        url: "https://www.argentina.gob.ar/sssalud/usuarios/medicamentos-con-cobertura-del-70-del-precio-de-referencia",
      },
      {
        titulo:
          "Fallo: O., J.J. c/ OSDE s/ amparo de salud (Camara Civil y Comercial Federal, 2023)",
      },
    ],
  },
  {
    numero: "Ley 27.306",
    titulo: "Acompanamiento educativo y universitario",
    descripcion:
      "Si tu TDAH convive con dificultades para el aprendizaje, la Ley 27.306 te protege. Esta norma te da el derecho a exigir adecuaciones en tu lugar de estudio: podes pedir que te den mas tiempo para realizar evaluaciones, evitar copiados o dictados extensos, priorizar examenes orales sobre los escritos, y que te faciliten el uso de computadoras o calculadoras en clase.",
    fecha: "2016-11-04",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley27306-267234/texto",
    ultimaActualizacion: "2016-11-04",
    puntosClave: [
      "Sirve cuando el TDAH convive con dificultades de aprendizaje",
      "Permite pedir mas tiempo en evaluaciones",
      "Permite pedir alternativas a copiados o dictados extensos",
      "Puede respaldar examenes orales, computadora o calculadora cuando corresponda",
    ],
    referencias: [
      {
        titulo: "Ley 27.306 (Dificultades Especificas del Aprendizaje)",
        url: "https://www.argentina.gob.ar/normativa/nacional/ley27306-267234/texto",
      },
    ],
  },
  {
    numero: "Ley 26.657",
    titulo: "Presiones laborales y Ley de Salud Mental",
    descripcion:
      "La Ley Nacional de Salud Mental (Ley 26.657) es clara: ningun profesional puede diagnosticarte basandose exclusivamente en demandas familiares, laborales o en la falta de adecuacion a valores sociales. Ademas, la prescripcion de medicacion (como los estimulantes) debe administrarse exclusivamente con fines terapeuticos para tu salud, y nunca por la conveniencia de terceros (como tu empleador).",
    fecha: "2010-11-25",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    impactoReal: "medio",
    url: "https://www.argentina.gob.ar/normativa/nacional/ley-26657-175977",
    ultimaActualizacion: "2010-11-25",
    puntosClave: [
      "El diagnostico no puede basarse solo en presiones familiares, laborales o sociales",
      "La medicacion debe tener finalidad terapeutica",
      "No se indica medicacion por conveniencia de terceros",
      "El objetivo es salud, no rendimiento impuesto por otra persona",
    ],
    referencias: [
      {
        titulo: "Ley 26.657 (Derecho a la Proteccion de la Salud Mental)",
        url: "https://www.argentina.gob.ar/normativa/nacional/ley-26657-175977",
      },
    ],
  },
  {
    numero: "CUD",
    titulo: "Certificado Unico de Discapacidad",
    descripcion:
      "Tener el diagnostico de TDAH no te otorga el CUD automaticamente. Su tramitacion es voluntaria y depende de la evaluacion de una Junta Interdisciplinaria que debe determinar si existe una limitacion funcional significativa. Si logras que te lo aprueben, las Leyes 22.431 y 24.901 obligan a las obras sociales y prepagas a brindarte el 100% de cobertura en la medicacion y en las terapias que requieras.",
    fecha: "1981-03-16",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Agencia Nacional de Discapacidad",
    impactoReal: "alto",
    url: "https://www.argentina.gob.ar/servicio/como-obtener-el-certificado-unico-de-discapacidad-cud",
    ultimaActualizacion: "2026-05-28",
    puntosClave: [
      "El diagnostico de TDAH no alcanza por si solo",
      "La evaluacion es voluntaria e interdisciplinaria",
      "Debe existir limitacion funcional significativa",
      "Con CUD aprobado, la cobertura de medicacion y terapias vinculadas puede llegar al 100%",
    ],
    referencias: [
      {
        titulo: "Tramite oficial CUD (Agencia Nacional de Discapacidad)",
        url: "https://www.argentina.gob.ar/servicio/como-obtener-el-certificado-unico-de-discapacidad-cud",
      },
      {
        titulo: "Ley 22.431",
        url: "https://www.argentina.gob.ar/normativa/nacional/ley-22431-20620",
      },
      {
        titulo: "Ley 24.901",
        url: "https://www.argentina.gob.ar/normativa/nacional/ley-24901-47677",
      },
    ],
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
      "La Resolución 2214/2025 prevé que REFEPS incorpore un campo de verificación para confirmar que el profesional tiene la autorización jurisdiccional correspondiente al prescribir medicamentos de expendio legalmente restringido.\n\n→ Riesgo operativo:\n• Si la habilitación jurisdiccional no está cargada o sincronizada, la plataforma puede no poder validar la receta restringida\n• La fuente primaria habla de jurisdicciones; pueden intervenir ministerios o colegios según el régimen local\n• Si jurisdicción, repositorio, plataforma y farmacia no usan la misma información, el paciente queda atrapado entre sistemas\n• El problema no es solo legal: también es de datos, interoperabilidad y soporte a farmacias\n\n→ Verificación posible:\n• El buscador público de REFEPS/SISA puede servir para chequear matrícula y habilitación profesional general: https://sisa.msal.gov.ar/sisa/#sisa/recursos/profesional/busqueda\n• El nuevo campo específico para recetas restringidas puede ser una validación técnica interna y no necesariamente visible para el paciente\n\n→ Para TDAH:\n• Metilfenidato y lisdexanfetamina dependen de circuitos de psicotrópicos Lista II\n• Aunque exista receta electrónica nacional, la dispensa puede seguir trabada por validaciones o criterios locales",
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
      descripcion: "Se revisaron fuentes públicas sobre implementación real: página nacional de receta electrónica, Receta Electrónica Bonaerense, Resolución PBA 140/2025 y comunicación COLFARMA sobre formulario triplicado para Lista II.",
      referencia: "(Ministerio de Salud, Salud Digital Bonaerense, Normas PBA, COLFARMA)"
    }
  ],
  notaLegal: "Este es un análisis independiente. No hablamos en nombre del gobierno. Toda la info se puede chequear en fuentes públicas."
};
