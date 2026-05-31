// Legislación relevante para TDAH en Argentina
export const leyes = [
  {
    numero: "Receta para psicotrópicos: el problema de la transición digital (Leyes 19.303 y 27.553)",
    urgencia: "Importante",
    descripcion:
      "Los estimulantes para el TDAH son Psicotrópicos Lista II de alta seguridad. Aunque la Resolución 2214/2025 estableció los protocolos para digitalizarlos, dio un plazo de 120 días para adaptar los sistemas provinciales.",
    puntosClave: [
      "Punto operativo: El software médico debe validar la receta con el registro federal (REFEPS) en tiempo real. Durante la transición tecnológica, muchas apps de prepagas todavía no sirven para estos fármacos.",
      "La regla práctica: Provincias como Buenos Aires (Res. 140/2025) dictaminaron que es obligatorio seguir llevando el formulario oficial físico por triplicado, manuscrito de puño y letra por tu médico.",
      "Validez: Tu receta física tiene exactamente 30 días de validez desde la fecha de emisión para ir a comprarla.",
    ],
  },
  {
    numero: "Cobertura y costos: PMO, Resolución 310/2004 y CUD",
    urgencia: "Relevante",
    descripcion:
      "La normativa divide los descuentos entre medicamentos ambulatorios y tratamientos para patologías crónicas. En la práctica, el TDAH suele quedar cubierto como medicamento ambulatorio.",
    puntosClave: [
      "Cobertura habitual: Si el medicamento se trata como ambulatorio, la cobertura suele quedar en 40% y el resto queda a cargo del paciente.",
      "Medicamentos nuevos: Lisdexanfetamina o atomoxetina pueden tener rechazos iniciales por no figurar explícitamente en el PMO base.",
      "CUD: En casos con discapacidad certificada, el Certificado Único de Discapacidad puede habilitar otra vía de cobertura según evaluación interdisciplinaria.",
    ],
  },
  {
    numero: "Discapacidad y educación: acompañamiento escolar y universitario (Ley 27.306)",
    urgencia: "Administrativo",
    descripcion:
      "La Ley de Dificultades Específicas del Aprendizaje (DEA) prevé adaptaciones curriculares para estudiantes con diagnóstico formal. No es una ventaja: es una adecuación de acceso.",
    puntosClave: [
      "Las instituciones educativas suelen desconocer la norma o resistirse a aplicarla.",
      "Con la presentación formal del diagnóstico, tenés derecho a exigir: más tiempo para rendir evaluaciones, priorización de exámenes orales sobre los escritos, y permiso para usar calculadoras o computadoras evitando copiados extensos.",
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
