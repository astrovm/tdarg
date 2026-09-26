"use client";

import {
  Brain,
  FileText,
  Route,
  Stethoscope,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { Reference } from "@/components/references";
import type { GuideAction, StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Autoevaluación", subtitle: "Señales en la adultez", icon: Brain, accent: "bg-violet-500/10 text-violet-700 dark:text-violet-300" },
  { id: 2, title: "Evaluación clínica", subtitle: "Cómo se confirma", icon: Stethoscope, accent: "bg-sky-500/10 text-sky-700 dark:text-sky-300" },
  { id: 3, title: "Preparar consulta", subtitle: "Qué llevar y preguntar", icon: FileText, accent: "bg-amber-500/15 text-amber-700 dark:text-amber-300" },
  { id: 4, title: "Después", subtitle: "Impacto del diagnóstico y plan", icon: Route, accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
] satisfies StepDefinition[];

const finalActions = [
  { href: "/especialistas", label: "Buscar especialistas" },
  { href: "/tratamientos", label: "Ver tratamientos" },
] satisfies GuideAction[];

export default function DiagnosisPage() {
  return (
    <StepGuideLayout
      title="Cómo se diagnostica el TDAH"
      description="Autoevaluación, consulta clínica y próximos pasos"
      steps={steps}
      finalActions={finalActions}
      references={diagnosisReferences}
    >
      {(currentStep) => (
        <>
          <div hidden={currentStep !== 1}>
            <div className="guide-text">
              <h3 className="text-lg font-semibold text-foreground">
                ¿Cómo se manifiesta el TDAH en adultos?
              </h3>
              <p>
                El TDAH ha dejado de ser considerado un trastorno exclusivo de la infancia. En la edad adulta, los síntomas centrales (inatención, hiperactividad e impulsividad) persisten, pero su expresión física y conductual experimenta una profunda transformación. Para que un adulto (mayor de 17 años) reciba el diagnóstico, los manuales actuales como el DSM-5 exigen la presencia de al menos <strong>5 síntomas</strong> en el dominio de inatención o en el de hiperactividad/impulsividad.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Desatención y disfunción ejecutiva</h4>
                  <p>
                    Se manifiesta como dificultad para comenzar tareas, posponer obligaciones hasta el último minuto (procrastinación), mala gestión del tiempo y un estilo de vida desorganizado o caótico. Una señal altamente predictiva (con un 90% de sensibilidad) es la <strong>divagación mental excesiva (<em>mind wandering</em>)</strong>, caracterizada por pensamientos desenfocados que saltan rápidamente de un tema a otro. Paradójicamente, pueden experimentar un &quot;hiperfoco&quot; o concentración excesiva en actividades que les resultan muy atractivas.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Hiperactividad internalizada</h4>
                  <p>
                    El adulto ya no suele trepar o correr como un niño. La hiperactividad se internaliza como una incapacidad para relajarse, una sensación de tensión o inquietud interna constante, o la necesidad incesante de mantenerse ocupado.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Impulsividad</h4>
                  <p>
                    Se refleja en actuar sin pensar, interrumpir conversaciones, realizar compras compulsivas, abandonar empleos abruptamente o conducir de manera temeraria.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Desregulación emocional</h4>
                  <p>
                    Aunque no es un síntoma cardinal oficial, entre el 53% y el 86% de los adultos con TDAH lo padecen. Se caracteriza por baja tolerancia a la frustración, labilidad emocional, irritabilidad y estallidos de enojo bruscos pero de corta duración.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Condición temporal:</strong>{" "}
                Para que estos síntomas configuren un cuadro de TDAH, varios de ellos deben haber estado presentes <strong>antes de los 12 años de edad</strong> y generar un deterioro claro en el funcionamiento social, académico o laboral.
              </div>
            </div>
          </div>

          <div hidden={currentStep !== 2}>
            <div className="guide-text">
              <h3 className="text-lg font-semibold text-foreground">
                El diagnóstico es 100% clínico
              </h3>
              <p>
                El diagnóstico del TDAH <strong>solo puede ser realizado por un médico psiquiatra, neurólogo o psicólogo</strong> con entrenamiento específico. Es un error común creer que se necesitan pruebas biológicas: el TDAH <strong>no puede diagnosticarse mediante escáneres o imágenes cerebrales (RMN, PET, SPECT), electroencefalogramas (EEG) ni análisis de laboratorio</strong>. Si bien los estudios de neuroimagen muestran pequeñas diferencias en el cerebro de personas con TDAH, estas diferencias no son útiles ni válidas para diagnosticar el trastorno a nivel individual.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                Herramientas utilizadas por el profesional
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Entrevistas estructuradas</h4>
                  <p>
                    El médico se basará en entrevistas clínicas exhaustivas. En Argentina y el mundo se recomienda el uso de herramientas como la <strong>DIVA-5</strong>, una entrevista disponible en español que evalúa los síntomas en la infancia, en la adultez y el impacto del trastorno en distintas áreas de la vida.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Escalas de autoinforme</h4>
                  <p>
                    El clínico puede solicitar que el paciente complete escalas validadas localmente, como la <strong>ASRS</strong> (para medir la severidad actual de los síntomas) y la <strong>WURS-25</strong> (para evaluar retrospectivamente los síntomas en la infancia). También se pueden usar la Escala de Impulsividad de Barrat (BIS-11) y escalas de apatía y autoestima.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Evaluación neuropsicológica</h4>
                  <p>
                    Las pruebas cognitivas (como el <em>Continuous Performance Test</em> o el <em>Test de Stroop</em>) no diagnostican el TDAH por sí solas, pero son muy útiles para objetivar los déficits en la atención sostenida, la memoria de trabajo y la inhibición de impulsos. También ayudan a descartar trastornos específicos del aprendizaje.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div hidden={currentStep !== 3}>
            <div className="guide-text">
              <p className="font-medium text-foreground">
                Dado que el diagnóstico requiere una reconstrucción histórica de la vida del paciente, ir preparado a la consulta es fundamental para facilitar el trabajo del médico.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                Qué información recopilar antes de ir
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Antecedentes escolares</h4>
                  <p>
                    Es muy útil llevar boletines de calificaciones, informes psicopedagógicos o cuadernos de la escuela primaria y secundaria. Esto ayuda al profesional a confirmar el requisito obligatorio de que las dificultades o síntomas estaban presentes antes de los 12 años.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Historia familiar</h4>
                  <p>
                    El TDAH tiene una base fuertemente genética, con una heredabilidad estimada entre el 70% y el 80%. Se debe investigar e informar al médico si existen familiares de primer grado (padres, hermanos) diagnosticados con TDAH, trastorno bipolar, depresión severa, adicciones o trastornos de ansiedad.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Historial médico y de sueño</h4>
                  <p>
                    Muchas condiciones médicas pueden imitar al TDAH. Es importante reportar problemas de tiroides o trastornos del sueño. Notablemente, <strong>el 80% de los adultos con TDAH padecen alteraciones del sueño</strong>, como insomnio severo, somnolencia diurna o síndrome de retraso de fase (ser &quot;noctámbulo&quot; biológico).
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Identificación de comorbilidades</h4>
                  <p>
                    El paciente debe estar preparado para hablar sobre su estado de ánimo y consumo de sustancias. En los adultos, la comorbilidad psiquiátrica &quot;es la norma y no la excepción&quot; (hasta el 80% padece otra condición como ansiedad, depresión o abuso de sustancias), lo cual es la principal causa de un diagnóstico tardío.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div hidden={currentStep !== 4}>
            <div className="guide-text">
              <h3 className="text-lg font-semibold text-foreground">
                Salir de la invisibilidad
              </h3>
              <p>
                Históricamente, muchos adultos llegan al diagnóstico tras años de tratamientos fallidos por depresión o ansiedad. Para las mujeres, el diagnóstico suele ser aún más tardío debido a que sus síntomas (mayormente inatención) son menos disruptivos en la infancia que la hiperactividad de los varones, llevándolas a internalizar la culpa y sufrir en silencio.
              </p>
              <p>
                Recibir finalmente un diagnóstico de TDAH produce un profundo alivio. Permite reinterpretar una vida marcada por la desorganización, el fracaso académico o la inestabilidad laboral bajo una lente médica y biológica, liberando al paciente del estigma de ser &quot;perezoso&quot; o &quot;irresponsable&quot;, y devolviéndole el control sobre su vida.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                El Plan de Acción Multimodal
              </h3>
              <p>
                Una vez confirmado el diagnóstico, el abordaje debe ser <strong>obligatoriamente multimodal</strong>. No existe una &quot;pastilla mágica&quot;. El plan integrará:
              </p>

              <ol className="list-decimal space-y-4 pl-5">
                <li>
                  <span className="font-semibold text-foreground">Farmacoterapia:</span>{" "}
                  Medicación (estimulante o no estimulante) para regular los neurotransmisores en el cerebro.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Psicoeducación:</span>{" "}
                  Entender a fondo la neurobiología del trastorno.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Terapia Cognitivo-Conductual (TCC):</span>{" "}
                  Para aprender habilidades de organización, manejo del tiempo, regulación emocional y modificar creencias disfuncionales de fracaso acumuladas durante años.
                </li>
              </ol>
            </div>
          </div>
        </>
      )}
    </StepGuideLayout>
  );
}

const diagnosisReferences: Reference[] = [
  {
    id: 1,
    title: "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description: "Criterios de herramientas clínicas y prevalencia de comorbilidades.",
    year: "2021",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Primera parte",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-1.pdf",
    description: "Proceso de entrevista clínica, antecedentes médicos y genéticos, y criterios diagnósticos del DSM-5. Vertex Rev Arg Psiquiatr. 2024",
    year: "2024",
  },
  {
    id: 3,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Segunda parte",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description: "Presentación clínica fenotípica en el adulto, herramientas psicométricas (DIVA-5, ASRS, WURS-25), perfil neuropsicológico y trastornos del sueño. Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
  {
    id: 4,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Tercera parte",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-3.pdf",
    description: "Impacto del TDAH no tratado, sesgo de género en el diagnóstico y abordaje multimodal. Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
];
