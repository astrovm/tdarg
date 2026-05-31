"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Calendar,
  Focus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoCard } from "@/components/info-card";
import { References, type Reference } from "@/components/references";
import { StepGuideLayout } from "@/components/step-guide-layout";
import { useStepProgress } from "@/hooks/use-step-progress";
import type { StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Organización", subtitle: "Tiempo, espacio y tareas", icon: Calendar },
  { id: 2, title: "Foco", subtitle: "Atención y arranque", icon: Focus },
  { id: 3, title: "Regulación", subtitle: "Emoción, energía y comunicación", icon: Brain },
] satisfies StepDefinition[];

const accentByStep = [
  "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
  "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  "bg-violet-500/12 text-violet-700 dark:text-violet-300",
];

export default function HerramientasPage() {
  const { currentStep, completedCount, next, prev, progress, goTo, isDone } =
    useStepProgress({ totalSteps: steps.length });
  const activeStep = steps[currentStep - 1];
  const ActiveIcon = activeStep.icon;
  const activeAccent = accentByStep[currentStep - 1];

  return (
    <StepGuideLayout
      title="Herramientas para el día a día"
      description="Organización, foco y regulación emocional"
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
                title="Tiempo"
                items={[
                  "Usá una sola agenda para compromisos, turnos y vencimientos.",
                  "Bloqueá tareas grandes en tramos de 25 a 45 minutos.",
                  "Dejá margen entre actividades para no depender de cambios perfectos.",
                ]}
              />
              <InfoCard
                title="Espacio"
                items={[
                  "Definí lugares fijos para llaves, billetera, medicación y cargadores.",
                  "Reducí objetos visibles en escritorio y mesa de trabajo.",
                  "Usá cajas o bandejas por función: salida, trabajo, papeles, cables.",
                ]}
              />
              <InfoCard
                title="Tareas"
                items={[
                  "Separá captura de ejecución: primero anotá, después decidí.",
                  "Convertí pendientes grandes en próxima acción visible.",
                  "Prepará de noche lo que necesitás al salir al día siguiente.",
                ]}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Arranque"
                items={[
                  "Empezá por una versión mínima de 2 minutos.",
                  "Dejá abierto el archivo, la ropa o el material antes de la tarea.",
                  "Usá una señal externa: timer, alarma, checklist o persona de referencia.",
                ]}
              />
              <InfoCard
                title="Distracciones"
                items={[
                  "Sacá el teléfono del campo visual cuando necesites foco.",
                  "Usá bloqueadores o perfiles separados para trabajo y ocio.",
                  "Reservá una lista de captura para ideas que aparecen durante la tarea.",
                ]}
              />
              <InfoCard
                title="Hiperfoco"
                items={[
                  "Poné timer antes de empezar, no cuando ya estás absorbido.",
                  "Definí una hora de corte y una acción de cierre.",
                  "Protegé comida, sueño y compromisos cuando entrás en modo intenso.",
                ]}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Emoción"
                items={[
                  "Nombrá la emoción antes de responder o decidir.",
                  "Usá grounding 5-4-3-2-1 cuando estás muy activado.",
                  "Cambiá temperatura o movete unos minutos para bajar intensidad física.",
                ]}
              />
              <InfoCard
                title="Energía"
                items={[
                  "Ubicá tareas pesadas en tus horas de mejor energía.",
                  "No llenes un día bueno con deuda acumulada completa.",
                  "Armá una lista de baja energía para días de poco margen.",
                ]}
              />
              <InfoCard
                title="Comunicación"
                items={[
                  "Pedí feedback concreto, no evaluaciones ambiguas.",
                  "Avisá cuando necesitás tiempo para procesar antes de responder.",
                  "Separá intención de impacto: explicar no reemplaza reparar.",
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
              <Link href="/tratamientos">Ver tratamientos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/diagnostico">Ver diagnóstico</Link>
            </Button>
          </div>
        )}
      </Card>

      <References references={references} />
    </StepGuideLayout>
  );
}

const references: Reference[] = [
  {
    id: 1,
    title: "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Hallowell, E. M., & Ratey, J. J.",
    url: "/adhd-2.0.pdf",
    description: "Estrategias conductuales para organización, foco y regulación.",
    year: "2021",
  },
];
