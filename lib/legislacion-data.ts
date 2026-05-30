// Legislación relevante para TDAH en Argentina
export const leyes = [
  {
    numero: "1. La odisea de la receta: Leyes 19.303, 27.553 y la transición digital",
    titulo: "El problema de la receta digital",
    urgencia: "Crítico",
    impacto: "Te deja sin medicación en el mostrador",
    descripcion:
      "Los estimulantes para el TDAH son Psicotrópicos Lista II de alta seguridad. Aunque la Resolución 2214/2025 estableció los protocolos para digitalizarlos, dio un plazo de 120 días para adaptar los sistemas provinciales.",
    puntosClave: [
      "El cuello de botella: El software médico debe validar tu receta con el registro federal (REFEPS) en tiempo real. Como el sistema está en plena transición tecnológica, las apps de prepagas aún no sirven para estos fármacos.",
      "La regla práctica: Provincias como Buenos Aires (Res. 140/2025) dictaminaron que es obligatorio seguir llevando el formulario oficial físico por triplicado, manuscrito de puño y letra por tu médico.",
      "Validez: Tu receta física tiene exactamente 30 días de validez desde la fecha de emisión para ir a comprarla.",
    ],
  },
  {
    numero: "2. La trampa de la cronicidad: PMO y Resolución 310/2004",
    titulo: "Costos y el Certificado de Discapacidad",
    urgencia: "Alto",
    impacto: "Aumenta drásticamente tu gasto de bolsillo",
    descripcion:
      "La normativa divide los descuentos en 40% (medicamentos comunes) y 70% (patologías crónicas). El Estado argentino se niega a reconocer burocráticamente al TDAH como crónico.",
    puntosClave: [
      "El impacto en tu bolsillo: Al tratarlo como un medicamento ambulatorio común, el sistema te estanca de por vida en el 40%, obligándote a absorber el 60% restante ante cada aumento de la inflación.",
      "Nuevas drogas denegadas: Si te recetan fármacos modernos (Lisdexanfetamina o Atomoxetina), las prepagas suelen rechazarlas de entrada por no figurar explícitamente en el PMO base.",
      "El CUD como parche: Como el sistema de salud estándar falla, los pacientes con casos severos se ven forzados a tramitar el Certificado Único de Discapacidad (CUD) como único 'escudo legal' para obligar a la obra social a cubrir el 100%.",
    ],
  },
  {
    numero: "3. Discapacidad y educación: Ley 27.306",
    titulo: "Acompañamiento escolar y universitario",
    urgencia: "Medio",
    impacto: "Garantiza condiciones justas de evaluación",
    descripcion:
      "La Ley de Dificultades Específicas del Aprendizaje (DEA) obliga legalmente a todo el sistema educativo a realizar adaptaciones curriculares. No es una ventaja, es tu derecho.",
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
