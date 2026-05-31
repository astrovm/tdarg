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

function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="bg-card border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <div key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
            <span>{item}</span>
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
      <Card className="min-h-[520px] bg-card border">
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
                  "La TCC suele usarse para trabajar organización, planificación y pensamientos rígidos.",
                  "Puede combinarse con medicación o usarse como apoyo principal según el caso.",
                ]}
              />
              <InfoCard
                title="Rutina"
                items={[
                  "Sueño, ejercicio y estructura diaria modifican el nivel de síntomas.",
                  "Los cambios funcionan mejor cuando son simples y sostenibles.",
                  "El objetivo no es disciplina perfecta, sino menos fricción diaria.",
                ]}
              />
            </div>
          )}

          {currentStep === 2 && (
            <>
              <div className="grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="Estimulantes"
                  items={[
                    "Metilfenidato y lisdexanfetamina son opciones frecuentes de primera línea.",
                    "Suelen actuar el mismo día y permiten ajustar respuesta con controles.",
                    "En Argentina son Psicotrópicos Lista II y requieren receta física.",
                  ]}
                />
                <InfoCard
                  title="No estimulantes"
                  items={[
                    "Atomoxetina puede ser útil si hay ansiedad, tics o riesgo de adicción.",
                    "Tiene inicio más lento y se evalúa por continuidad, no por efecto inmediato.",
                    "La indicación depende del perfil clínico y de tratamientos previos.",
                  ]}
                />
                <InfoCard
                  title="Off-label"
                  items={[
                    "Bupropión u otras opciones pueden considerarse en casos específicos.",
                    "Suelen evaluarse cuando hay depresión, tabaquismo u otras comorbilidades.",
                    "No reemplazan una indicación individual hecha por profesional.",
                  ]}
                />
              </div>

              <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
                La continuidad, pausa o cambio de medicación se decide con el
                médico según respuesta, efectos adversos, rutina y objetivos.
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
                  "Caminar rápido, bicicleta, natación o deporte pueden ayudar a foco y ánimo.",
                  "La constancia suele importar más que la intensidad.",
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

        <div className="flex items-center justify-between border-t p-6">
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
            <Button variant="outline" asChild>
              <Link href="/herramientas">Ver herramientas</Link>
            </Button>
          </div>
        )}
      </Card>
    </StepGuideLayout>
  );
}
