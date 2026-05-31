"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Heart,
  Pill,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoCard } from "@/components/info-card";
import { StepGuideLayout } from "@/components/step-guide-layout";
import { useStepProgress } from "@/hooks/use-step-progress";
import type { StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Panorama", subtitle: "Qué combina el tratamiento", icon: Brain },
  { id: 2, title: "Medicación", subtitle: "Opciones y seguimiento", icon: Pill },
  { id: 3, title: "Terapia", subtitle: "Herramientas psicológicas", icon: Users },
  { id: 4, title: "Rutina", subtitle: "Sueño, ejercicio y hábitos", icon: Heart },
] satisfies StepDefinition[];

const accentByStep = [
  "bg-violet-500/12 text-violet-700 dark:text-violet-300",
  "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
  "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  "bg-rose-500/12 text-rose-700 dark:text-rose-300",
];

function MedicationDetailCard({
  title,
  line,
  marker,
  items,
}: {
  title: string;
  line: string;
  marker: string;
  items: { label: string; value: string }[];
}) {
  return (
    <Card className="overflow-hidden bg-card border">
      <CardHeader className="pb-2">
        <div className={`w-fit rounded-full border px-2 py-0.5 text-xs font-medium ${marker}`}>
          {line}
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {items.map((item) => (
          <div key={item.label}>
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {item.label}
            </div>
            <div className="mt-1 text-foreground">{item.value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function TratamientosPage() {
  const { currentStep, progress, completedCount, next, prev, goTo, isDone } =
    useStepProgress({ totalSteps: steps.length });
  const activeStep = steps[currentStep - 1];
  const ActiveIcon = activeStep.icon;
  const activeAccent = accentByStep[currentStep - 1];

  return (
    <StepGuideLayout
      title="Tratamientos para TDAH"
      description="Opciones para entender cómo se trata el TDAH"
      steps={steps}
      currentStep={currentStep}
      progress={progress}
      completedCount={completedCount}
      onSelectStep={goTo}
      isStepDone={isDone}
    >
      <Card className="bg-card border md:min-h-[520px]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${activeAccent}`}
            >
              <ActiveIcon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-xl">{activeStep.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {activeStep.subtitle}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Medicación"
                items={[
                  "Puede reducir síntomas centrales como inatención, impulsividad e inquietud.",
                  "La elección depende de edad, comorbilidades, efectos adversos y acceso.",
                  "Requiere seguimiento para ajustar dosis, horarios y tolerancia.",
                ]}
              />
              <InfoCard
                title="Terapia"
                items={[
                  "Ayuda a ordenar hábitos, funciones ejecutivas y regulación emocional.",
                  "La TCC trabaja organización, planificación y pensamientos rígidos.",
                  "Puede combinarse con medicación o usarse como apoyo principal según el caso.",
                ]}
              />
              <InfoCard
                title="Rutina"
                items={[
                  "Sueño, ejercicio y estructura diaria modifican el nivel de síntomas.",
                  "Conviene cambiar pocas cosas por vez y sostenerlas.",
                  "El objetivo no es disciplina perfecta, sino menos fricción diaria.",
                ]}
              />
            </div>
          )}

          {currentStep === 2 && (
            <>
              <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm text-foreground">
                <strong>Primera línea:</strong> los estimulantes tienen mayor
                efecto sobre síntomas centrales. Actúan el mismo día y su efecto termina al
                cerrar su ventana de duración.
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <MedicationDetailCard
                  title="Lisdexanfetamina"
                  line="Estimulante"
                  marker="border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  items={[
                    {
                      label: "Duración",
                      value: "10 a 14 h.",
                    },
                    {
                      label: "Dosis adulta orientativa",
                      value: "Inicio frecuente en 30 mg; máximo 70 mg/día.",
                    },
                    {
                      label: "Notas",
                      value:
                        "Suele preferirse cuando se busca una cobertura larga y estable. Incluye presentaciones como Vyvanse o Ludoxa, según mercado y disponibilidad.",
                    },
                  ]}
                />
                <MedicationDetailCard
                  title="Metilfenidato"
                  line="Estimulante"
                  marker="border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  items={[
                    {
                      label: "Duración",
                      value:
                        "3 a 4 h en liberación inmediata; 10 a 12 h en liberación prolongada OROS.",
                    },
                    {
                      label: "Dosis adulta orientativa",
                      value: "10 a 72 mg/día; máximo habitual 80 mg/día.",
                    },
                    {
                      label: "Notas",
                      value:
                        "Incluye presentaciones como Ritalina, Concerta o equivalentes locales.",
                    },
                  ]}
                />
              </div>

              <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 p-4 text-sm text-foreground">
                <strong>Argentina:</strong> lisdexanfetamina y metilfenidato
                son Psicotrópicos Lista II. En farmacia requieren receta física
                oficial por triplicado.
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <MedicationDetailCard
                  title="Atomoxetina"
                  line="Segunda línea"
                  marker="border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300"
                  items={[
                    {
                      label: "Duración",
                      value: "Hasta 24 h, con acción continua.",
                    },
                    {
                      label: "Dosis adulta orientativa",
                      value: "Inicio frecuente en 40 mg; máximo 100 mg/día.",
                    },
                    {
                      label: "Cuándo se considera",
                      value:
                        "Plan B si los estimulantes fallan o si hay antecedentes de adicciones, tics severos o ansiedad marcada. El efecto pleno puede demorar 3 a 6 semanas.",
                    },
                  ]}
                />
                <MedicationDetailCard
                  title="Opciones off-label"
                  line="Off-label"
                  marker="border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                  items={[
                    {
                      label: "Bupropión",
                      value:
                        "24 h en formulaciones XL. Rango adulto usual 150 a 300 mg/día; se evalúa si coexiste depresión o tabaquismo.",
                    },
                    {
                      label: "Clonidina",
                      value:
                        "Duración variable. Puede ser útil con hiperactivación severa, conductas agresivas, Tourette o tics difíciles.",
                    },
                    {
                      label: "Modafinilo / armodafinilo",
                      value:
                        "Se evalúan si predominan somnolencia diurna o fatiga marcada.",
                    },
                  ]}
                />
              </div>

              <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
                Rangos orientativos para conversación clínica. La elección,
                dosis, continuidad, pausa o cambio de medicación se decide con
                profesional según respuesta, efectos adversos, comorbilidades,
                rutina y objetivos.
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                title="TCC"
                items={[
                  "Psicoeducación para entender síntomas y patrones personales.",
                  "Reestructuración cognitiva para trabajar culpa, evitación y frustración.",
                  "Técnicas conductuales para convertir objetivos en acciones concretas.",
                ]}
              />
              <InfoCard
                title="Habilidades ejecutivas"
                items={[
                  "Agenda, recordatorios y listas de captura.",
                  "Dividir tareas grandes en próximos pasos pequeños.",
                  "Reducir decisiones repetidas con rutinas y sistemas externos.",
                ]}
              />
              <InfoCard
                title="Regulación emocional"
                items={[
                  "Identificar señales tempranas de sobrecarga.",
                  "Usar pausas, respiración, movimiento o grounding antes de responder.",
                  "Separar emoción intensa de decisión urgente.",
                ]}
              />
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Sueño"
                items={[
                  "Revisar horarios, pantallas, cafeína y calidad de descanso.",
                  "Dormir mal puede aumentar inatención, irritabilidad y desorganización.",
                  "Conviene detectar insomnio, piernas inquietas u otros problemas de sueño.",
                ]}
              />
              <InfoCard
                title="Ejercicio"
                items={[
                  "Caminar rápido, bicicleta, natación o deporte suman movimiento regular.",
                  "Mejor sostener una rutina breve que depender de entrenamientos largos.",
                  "También sirven actividades de coordinación como yoga, pilates o artes marciales.",
                ]}
              />
              <InfoCard
                title="Hábitos"
                items={[
                  "Preparar entorno y materiales antes del momento de uso.",
                  "Bajar fricción: menos pasos, menos objetos, menos decisiones.",
                  "Medir si una estrategia se sostiene, no si suena perfecta.",
                ]}
              />
            </div>
          )}
        </CardContent>

        <div className="flex items-center justify-between border-t p-4 sm:p-6">
          <Button variant="outline" onClick={prev} disabled={currentStep === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentStep} de {steps.length}
          </span>
          {currentStep === steps.length ? (
            <Button asChild>
              <Link href="/especialistas">
                Buscar especialistas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button onClick={next}>
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {currentStep === steps.length && (
          <div className="flex flex-wrap justify-center gap-3 border-t px-6 pb-6 pt-4">
            <Button variant="outline" asChild>
              <Link href="/precios">Ver precios</Link>
            </Button>
          </div>
        )}
      </Card>
    </StepGuideLayout>
  );
}
