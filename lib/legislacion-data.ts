// Legislación relevante para TDAH en Argentina
export const resumenLegislacion = [
  {
    titulo: "Receta",
    descripcion:
      "Metilfenidato y lisdexanfetamina requieren receta física oficial por triplicado.",
  },
  {
    titulo: "App o PDF",
    descripcion:
      "Para Psicotrópicos Lista II, una receta común de app o prepaga no alcanza.",
  },
  {
    titulo: "Cobertura",
    descripcion:
      "Ambulatorios se cubren al 40%; crónicos, al 70%. TDAH no está reconocido legalmente como crónico para esa cobertura.",
  },
  {
    titulo: "Educación",
    descripcion:
      "Con diagnóstico formal se pueden pedir adaptaciones razonables para estudiar.",
  },
];

export const leyes = [
  {
    etiqueta: "Receta",
    numero: "Conseguir medicación",
    descripcion:
      "Los estimulantes usados para TDAH son Psicotrópicos Lista II. La receta digital está en transición, pero para retirar medicación la regla práctica sigue siendo física y oficial.",
    puntosClave: [
      "Qué llevar: Receta física oficial por triplicado, manuscrita por el profesional.",
      "Qué no alcanza: PDF, foto o receta común de una app de prepaga.",
      "Validez: La receta física tiene 30 días desde la fecha de emisión.",
    ],
    jurisdicciones: [
      "Nación: La receta electrónica avanza, pero los Lista II exigen controles de seguridad más altos.",
      "PBA: La Resolución 140/2025 mantiene el formulario físico por triplicado para Lista II.",
      "CABA: La receta digital no elimina los requisitos especiales para psicotrópicos.",
    ],
  },
  {
    etiqueta: "Cobertura",
    numero: "Pedir cobertura",
    descripcion:
      "El PMO distingue medicamentos ambulatorios, con cobertura del 40%, y tratamientos crónicos, con cobertura del 70%. TDAH no está reconocido legalmente como patología crónica para esa cobertura.",
    puntosClave: [
      "Cobertura base: Los medicamentos para TDAH quedan en el descuento ambulatorio del 40%.",
      "Tratamiento crónico: La categoría de crónicos cubre 70%, pero TDAH no está incluido legalmente en esa categoría.",
      "Medicamentos nuevos: Lisdexanfetamina o atomoxetina pueden tener rechazos iniciales por no figurar explícitamente en el PMO base.",
      "CUD: No es una vía habitual para TDAH. Solo puede cambiar la cobertura si una junta interdisciplinaria certifica discapacidad funcional.",
    ],
  },
  {
    etiqueta: "Educación",
    numero: "Pedir adaptaciones educativas",
    descripcion:
      "La Ley 27.306 sobre Dificultades Específicas del Aprendizaje permite pedir adecuaciones para cursar y rendir en mejores condiciones.",
    puntosClave: [
      "Qué pedir: Más tiempo en evaluaciones, modalidad oral cuando corresponda y uso de herramientas tecnológicas.",
      "Cómo pedirlo: Presentar diagnóstico formal y dejar el pedido por escrito.",
      "Criterio: No es una ventaja; es una adecuación de acceso.",
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
