// Legislación relevante para TDAH en Argentina
export const leyes = [
  {
    numero: "1. La odisea de la receta en papel",
    titulo: "Leyes 19.303 y 27.553",
    urgencia: "Crítico",
    impacto: "Puede frenarte en la farmacia",
    descripcion:
      "Metilfenidato y lisdexanfetamina son Psicotropicos Lista II. Aunque la receta electronica existe, el circuito digital de alta seguridad sigue incompleto para estos estimulantes.",
    puntosClave: [
      "Que dice la norma: Nacion intento avanzar con ReNaPDiS, auditoria de plataformas y validacion biometrica de prescriptores.",
      "Que pasa en la practica: PBA formalizo con la Resolucion 140/2025 que para Lista II sigue haciendo falta formulario oficial manuscrito por triplicado.",
      "La falla del sistema: sin validacion completa de prescriptor, repositorio, farmacia y jurisdiccion, la receta digital no se acepta para estos farmacos.",
      "Que se podria hacer: trazabilidad digital real, con validacion nacional y registro de dispensa, para reemplazar el papel fisico sin perder control sanitario.",
    ],
  },
  {
    numero: "2. La trampa de la cronicidad en el PMO",
    titulo: "Resolucion 310/2004, costos y CUD",
    urgencia: "Alto",
    impacto: "Aumenta gasto de bolsillo",
    descripcion:
      "La Resolucion 310/2004 divide medicamentos comunes con 40% de cobertura y enfermedades cronicas prevalentes con 70%. El problema es que el TDAH sigue fuera de ese reconocimiento burocratico.",
    puntosClave: [
      "Que dice la norma: metilfenidato queda en el 40% habitual; TDAH no entra en el listado de cronicos con 70%.",
      "Que pasa en la practica: el paciente absorbe el 60% de cada aumento y las opciones modernas suelen quedar fuera del PMO base.",
      "El CUD como parche legal: si hay limitacion funcional significativa, la Ley 24.901 puede obligar cobertura integral, pero no deberia ser la unica via para acceder a medicacion indicada.",
      "Que se podria hacer: actualizar PMO con guias modernas como CADDRA, incluir tratamientos de liberacion prolongada y reconocer el TDAH cronico cuando corresponda.",
    ],
  },
  {
    numero: "3. Discapacidad y educacion",
    titulo: "CUD, Ley 24.901 y Ley 27.306",
    urgencia: "Medio",
    impacto: "Orienta reclamos sin prometer automaticidad",
    descripcion:
      "El CUD y la Ley DEA son herramientas utiles, pero no automaticas. Sirven cuando hay impacto funcional o dificultades de aprendizaje que necesitan apoyos concretos.",
    puntosClave: [
      "CUD: una junta interdisciplinaria debe certificar una limitacion funcional significativa; el diagnostico de TDAH solo no alcanza.",
      "Cobertura: con CUD aprobado, la medicacion y terapias vinculadas pueden pasar a cobertura integral.",
      "Escuela y universidad: la Ley 27.306 permite pedir mas tiempo, examenes orales, uso de computadora o calculadora, y alternativas a copiados extensos.",
      "Que se podria hacer: orientar mejor a familias, adultos e instituciones para que estos derechos se pidan con documentacion clara y expectativas realistas.",
    ],
  },
  {
    numero: "4. Avances regulatorios",
    titulo: "Nuevos farmacos y cobertura pendiente",
    urgencia: "Novedad",
    impacto: "Mas opciones, misma pelea por cobertura",
    descripcion:
      "La llegada de nuevas opciones como lisdexanfetamina mejora el arsenal terapeutico y puede fomentar competencia. El problema es que la cobertura no se actualiza al mismo ritmo.",
    puntosClave: [
      "Lisdexanfetamina (Ludoxa 30/50/70 mg, Monte Verde S.A. - Adium, ex Raffo) fue registrada en 2025 y entro en comercializacion desde 2026.",
      "Al ser nueva, no suele estar automaticamente cubierta por obras sociales o prepagas.",
      "La competitividad de mercado puede ayudar, pero sin PMO actualizado el paciente sigue dependiendo de bolsillo, CUD o reclamos administrativos.",
      "Que se podria hacer: seguimiento publico de registro, VNM, precios y cobertura obligatoria para que el avance regulatorio llegue al mostrador.",
    ],
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
      descripcion: "Leyes y resoluciones analizadas: Ley 19.303 (Psicotrópicos), Ley 27.306 (DEA), Ley 27.553 (Recetas Electrónicas), Resolución 2214/2025, Decreto 345/2024, normativa de CABA y normativa de Provincia de Buenos Aires.",
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
