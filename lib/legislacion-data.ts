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
      "Con diagnóstico formal se pueden pedir adaptaciones educativas.",
  },
];

export const leyes = [
  {
    etiqueta: "Receta",
    numero: "Conseguir medicación",
    descripcion:
      "Los estimulantes usados para TDAH son Psicotrópicos Lista II. Nación exige receta electrónica, pero la dispensa depende de sistemas habilitados y reglas jurisdiccionales.",
    puntosClave: [
      "Qué llevar: Receta física oficial por triplicado, manuscrita por el profesional.",
      "Qué no alcanza: PDF, foto o receta común de una app de prepaga.",
      "Validez: La receta física tiene 30 días desde la fecha de emisión.",
    ],
    jurisdicciones: [
      "Nación: La receta electrónica es obligatoria también para medicamentos de prescripción restringida.",
      "PBA: La Resolución 140/2025 mantiene el formulario físico por triplicado para Lista II.",
      "CABA: La receta digital no reemplaza el recetario oficial para psicotrópicos.",
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
      "Medicamentos nuevos: Lisdexanfetamina o atomoxetina pueden ser rechazados si no figuran explícitamente en el PMO base.",
      "CUD: No es una vía habitual para TDAH. Solo puede cambiar la cobertura si una junta interdisciplinaria certifica discapacidad funcional.",
    ],
  },
  {
    etiqueta: "Educación",
    numero: "Pedir adaptaciones educativas",
    descripcion:
      "La Ley 27.306 sobre Dificultades Específicas del Aprendizaje permite pedir adecuaciones para cursar y rendir.",
    puntosClave: [
      "Qué pedir: Más tiempo en evaluaciones, modalidad oral cuando corresponda y uso de herramientas tecnológicas.",
      "Cómo pedirlo: Presentar diagnóstico formal y dejar el pedido por escrito.",
      "Criterio: No es una ventaja; es una adecuación de acceso.",
    ],
  },
];

export const fuentesDocumentacion = {
  titulo: "Fuentes y Documentación",
  descripcion: "Fuentes usadas para normativa, cobertura y contexto clínico:",
  fuentes: [
    {
      titulo: "Primer Consenso Argentino sobre TDAH en Adultos",
      descripcion: "Criterios clínicos y recomendaciones para TDAH en adultos.",
      referencia: "(Vertex, 2025)"
    },
    {
      titulo: "Medicalización del TDAH en Argentina",
      descripcion: "Analiza tendencias y especificidades locales del tratamiento del TDAH en el contexto argentino.",
      referencia: "(Bianchi, Faraone & Torricelli, 2020)"
    },
    {
      titulo: "The Journey of ADHD in Argentina",
      descripcion: "Contexto histórico del diagnóstico y tratamiento en Argentina.",
      referencia: "(Faraone & Bianchi, 2018)"
    },
    {
      titulo: "Marco Normativo Nacional y Jurisdiccional",
      descripcion: "Leyes y resoluciones analizadas: Ley 19.303 (Psicotrópicos), Ley 27.306 (DEA), Ley 27.553 (Recetas Electrónicas), Resolución 2214/2025, Decreto 345/2024, normativa de CABA y normativa de Provincia de Buenos Aires.",
      referencia: "(InfoLeg, Boletín Oficial, Ministerio de Salud, PBA y CABA)"
    },
    {
      titulo: "CUD y prestaciones por discapacidad",
      descripcion: "Fuentes oficiales sobre CUD, junta interdisciplinaria y prestaciones por discapacidad.",
      referencia: "(ANDIS, Argentina.gob.ar, Ley 24.901)"
    },
    {
      titulo: "Receta electrónica y Lista II",
      descripcion: "Normativa sobre receta electrónica y requisito de formulario triplicado para Lista II.",
      referencia: "(Ministerio de Salud, Salud Digital Bonaerense, Normas PBA, COLFARMA)"
    }
  ],
  notaLegal: "Información educativa basada en fuentes públicas."
};
