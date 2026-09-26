"use client";

import {
  Activity,
  Brain,
  Heart,
  Users,
  Zap,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { Reference } from "@/components/references";
import type { GuideAction, StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Panorama", subtitle: "Qué mirar primero", icon: Activity, accent: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300" },
  { id: 2, title: "Ánimo y ansiedad", subtitle: "Ansiedad, depresión y sueño", icon: Brain, accent: "bg-violet-500/10 text-violet-700 dark:text-violet-300" },
  { id: 3, title: "Neurodesarrollo", subtitle: "TDAH y autismo", icon: Users, accent: "bg-sky-500/10 text-sky-700 dark:text-sky-300" },
  { id: 4, title: "Impulsividad", subtitle: "Bipolaridad, TLP, TCA y consumos", icon: Zap, accent: "bg-amber-500/15 text-amber-700 dark:text-amber-300" },
  { id: 5, title: "Evaluación", subtitle: "Impacto físico y prioridades de tratamiento", icon: Heart, accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
] satisfies StepDefinition[];

const finalActions = [
  { href: "/especialistas", label: "Buscar especialistas" },
  { href: "/tratamientos", label: "Ver tratamientos" },
] satisfies GuideAction[];

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border bg-muted/40 p-3 text-center">
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export default function ComorbilidadesPage() {
  return (
    <StepGuideLayout
      title="TDAH y comorbilidades"
      description="Condiciones frecuentes que pueden coexistir con el TDAH"
      steps={steps}
      finalActions={finalActions}
      references={comorbilidadesReferences}
    >
      {(currentStep) => (
        <>
          <div hidden={currentStep !== 1} className="space-y-6">
            <>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <MetricCard label="Comorbilidad" value="~80%" />
                <MetricCard label="Ansiedad" value="~50%" />
                <MetricCard label="Sueño" value="~80%" />
                <MetricCard label="Depresión" value="18-53%" />
              </div>

              <div className="guide-text">
                <h3 className="text-lg font-semibold text-foreground">
                  ¿Por qué el TDAH rara vez viene solo?
                </h3>
                <p>
                  El TDAH en la edad adulta es un trastorno complejo que actúa como un factor de riesgo evolutivo para el desarrollo de otras patologías. En psiquiatría se establece que en el TDAH adulto, la comorbilidad es la norma y no la excepción. Aproximadamente el 80% de los adultos con TDAH cumple con los criterios clínicos para, al menos, otra condición psiquiátrica a lo largo de su vida.
                </p>
                <p>
                  Históricamente, el diagnóstico de TDAH en adultos se retrasa porque los pacientes consultan primero por problemas de depresión, ansiedad, insomnio o adicciones. Estas condiciones secundarias a menudo enmascaran el TDAH subyacente o se entrelazan de tal manera que el investigador Feifel acuñó el término <strong>&quot;parásito-morbilidad&quot;</strong> para describir cómo la ansiedad o la depresión se alojan en el paciente como resultado directo del impacto del TDAH no tratado. Identificar qué síntomas pertenecen al TDAH y cuáles a una comorbilidad es el primer paso vital para un tratamiento exitoso.
                </p>
              </div>
            </>
          </div>

          <div hidden={currentStep !== 2}>
            <div className="guide-text">
              <p className="font-medium text-foreground">
                Los trastornos del estado de ánimo, la ansiedad y los problemas de sueño son las compañeras más frecuentes del adulto con TDAH.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Ansiedad (Prevalencia aprox. 50%)</h4>
                  <p>
                    La ansiedad comórbida suele enmascarar al TDAH, ya que la inhibición que genera el miedo o la preocupación excesiva puede &quot;tapar&quot; temporalmente la impulsividad y la hiperactividad del paciente. Es fundamental distinguir entre ambos: la inatención en la ansiedad se debe a la &quot;rumiación&quot; constante sobre miedos irreales y un estado de alerta, mientras que en el TDAH se debe a la divagación mental excesiva (<em>mind wandering</em>) o la falta de estímulos interesantes.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Depresión Mayor y Distimia (Prevalencia 18.6% al 53.3%)</h4>
                  <p>
                    La vida de un adulto con TDAH sin tratar suele acumular eventos estresantes, fracasos académicos o laborales y problemas vinculares que socavan profundamente su autoestima. A diferencia de la depresión clásica (que es episódica y cursa con síntomas neurovegetativos y pensamientos de muerte), la disforia en el TDAH es crónica y suele originarse por un &quot;tono hedónico bajo&quot;. Esto significa que el cerebro del paciente necesita estímulos mucho más altos para sentir placer, generando un estado constante de insatisfacción y aburrimiento.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Trastornos del Sueño (Afectan al 80%)</h4>
                  <p>
                    Es una de las quejas principales que deterioran el ánimo. Los pacientes reportan insomnio severo (dificultad para &quot;apagar&quot; la mente al acostarse), somnolencia diurna excesiva y el Síndrome de Retraso de Fase, por el cual el paciente es un &quot;noctámbulo&quot; biológico que naturalmente se duerme y despierta dos horas más tarde de lo convencional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div hidden={currentStep !== 3}>
            <div className="guide-text">
              <p>
                El TDAH y el Trastorno del Espectro Autista (TEA) son trastornos del neurodesarrollo que frecuentemente coexisten. La prevalencia de este diagnóstico comórbido (TEA-TDAH) varía ampliamente entre el 4.6% y el 78%.
              </p>
              <p>
                Ambas condiciones comparten fuertes déficits en el control de la atención, el comportamiento y las habilidades para desenvolverse socialmente. Sin embargo, existen diferencias clínicas fundamentales que el profesional debe observar para no confundirlos:
              </p>

              <div className="space-y-3">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Interacción social</h4>
                  <p>
                    Mientras que el niño o adulto con TDAH suele ser dejado de lado de los grupos debido a su impulsividad e hiperactividad (interrumpe, no respeta turnos), la persona con TEA experimenta un desinterés genuino por el juego social o prefiere el juego paralelo.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Lectura del entorno</h4>
                  <p>
                    Las personas con TEA tienen profundas dificultades para comprender los estados mentales de los otros (déficit en la Teoría de la Mente) y suelen evitar el contacto visual sostenido. En cambio, la persona con TDAH simplemente está &quot;inatenta&quot; a las señales sociales por distracción, pero no carece de la capacidad de comprenderlas si se le llama la atención.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Lenguaje</h4>
                  <p>
                    En el TEA suele haber un desarrollo del lenguaje demorado y presencia de ecolalia, rasgos que no pertenecen a la naturaleza del TDAH.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div hidden={currentStep !== 4}>
            <div className="guide-text">
              <p className="font-medium text-foreground">
                Las fallas en la corteza prefrontal incrementan drásticamente el riesgo de desarrollar condiciones impulsivas severas en la adultez:
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Trastorno Bipolar (TB) (Prevalencia aprox. 17%)</h4>
                  <p>
                    El TDAH y la bipolaridad comparten locuacidad, hiperactividad, inquietud y desregulación emocional. La diferencia radica en que el TDAH es un rasgo estable y crónico, mientras que el TB ocurre en &quot;episodios&quot; marcados (fases de manía y depresión). En la manía bipolar, aparecen síntomas ajenos al TDAH, como grandiosidad, hipersexualidad y una reducción drástica de la necesidad de dormir sin sentir cansancio.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Trastorno Límite de la Personalidad (TLP)</h4>
                  <p>
                    Entre el 30% y el 60% de los adultos con TDAH padecen TLP. Ambos comparten severos problemas de impulsividad y estallidos de ira. Sin embargo, el TLP se distingue por sentimientos crónicos de vacío profundo, terror al abandono, síntomas disociativos ante el estrés y automutilaciones. Los traumas o eventos adversos en la infancia (abuso, negligencia) elevan exponencialmente el riesgo de que el TDAH derive en TLP.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Trastornos de la Conducta Alimentaria (TCA)</h4>
                  <p>
                    Condiciones como la bulimia nerviosa y el trastorno por atracón tienen una prevalencia altísima (11% al 16%), afectando mayoritariamente a las mujeres. La disfunción ejecutiva del TDAH impide planificar dietas, y el cerebro busca dopamina rápida mediante atracones impulsivos.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Trastorno por Uso de Sustancias (TUS)</h4>
                  <p>
                    Las personas con TDAH tienen entre el doble y el triple de riesgo de desarrollar adicciones (nicotina, alcohol, cocaína o marihuana). Esto responde a la impulsividad y a un intento biológico de &quot;automedicar&quot; un cerebro con deficiencia de dopamina. Las adicciones conductuales (compras compulsivas, ludopatía, uso excesivo de videojuegos y pornografía) también son sumamente comunes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div hidden={currentStep !== 5}>
            <div className="guide-text">
              <p>
                El TDAH tiene un profundo impacto físico. Las personas con TDAH tienen mayores tasas de obesidad (hasta un 32%), migrañas severas, asma y rinitis, y una incidencia altísima de accidentes de tránsito, fracturas y lesiones por quemaduras derivadas del descuido y la impulsividad. También se ha encontrado que dietas libres de gluten reducen los síntomas cognitivos en aquellos pacientes que padecen TDAH y Enfermedad Celíaca al mismo tiempo.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                ¿Cómo se establecen las prioridades de tratamiento?
              </h3>
              <p>
                Ante la presencia de múltiples comorbilidades, el equipo médico debe establecer un orden de prioridad:
              </p>

              <ol className="list-decimal space-y-4 pl-5">
                <li>
                  <span className="font-semibold text-foreground">Trastorno por Uso de Sustancias (TUS):</span>{" "}
                  Si hay una adicción activa grave, se recomienda estabilizar el consumo y buscar abstinencia antes de iniciar el tratamiento con psicoestimulantes para el TDAH, o bien utilizar opciones de muy bajo perfil de abuso como la atomoxetina.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Trastorno Bipolar (TB):</span>{" "}
                  Si coexisten TB y TDAH, se debe priorizar estrictamente la estabilización del estado de ánimo mediante estabilizadores o antipsicóticos. Recién cuando los síntomas maníacos estén controlados, se puede introducir medicación para el TDAH, monitoreando de cerca cualquier viraje hacia la manía.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Ansiedad y Depresión:</span>{" "}
                  A menudo, si estas condiciones son secundarias al fracaso constante que produce el TDAH (parásito-morbilidad), tratar el TDAH resolverá el cuadro anímico. Si son independientes, requerirán de un abordaje combinado (ej. antidepresivos junto con estimulantes de acción prolongada).
                </li>
              </ol>
            </div>
          </div>
        </>
      )}
    </StepGuideLayout>
  );
}

const comorbilidadesReferences: Reference[] = [
  {
    id: 1,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Segunda parte",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description: "Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Tercera parte",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-3.pdf",
    description: "Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
  {
    id: 3,
    title: "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description: "Datos sobre cuántas personas con TDAH tienen también otras condiciones.",
    year: "2021",
  },
];
