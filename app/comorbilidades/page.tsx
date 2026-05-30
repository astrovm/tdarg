"use client";

import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Brain,
  Heart,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StepGuideLayout } from "@/components/step-guide-layout";
import { References, type Reference } from "@/components/references";
import { useStepProgress } from "@/hooks/use-step-progress";
import type { StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Panorama", subtitle: "Qué mirar primero", icon: Activity },
  { id: 2, title: "Ánimo y ansiedad", subtitle: "Ansiedad, depresión y sueño", icon: Brain },
  { id: 3, title: "Neurodesarrollo", subtitle: "TDAH y autismo", icon: Users },
  { id: 4, title: "Impulsividad", subtitle: "Bipolaridad, TLP, TCA y consumos", icon: Zap },
  { id: 5, title: "Evaluación", subtitle: "Prioridades de tratamiento", icon: Heart },
] satisfies StepDefinition[];

const accentByStep = [
  "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300",
  "bg-violet-500/12 text-violet-700 dark:text-violet-300",
  "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  "bg-amber-500/14 text-amber-700 dark:text-amber-300",
  "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
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
  const { currentStep, completedCount, next, prev, goTo, progress, isDone } =
    useStepProgress({ totalSteps: steps.length });
  const activeStep = steps[currentStep - 1];
  const ActiveIcon = activeStep.icon;
  const activeAccent = accentByStep[currentStep - 1];

  return (
    <StepGuideLayout
      title="TDAH y comorbilidades"
      description="Condiciones frecuentes que pueden coexistir con el TDAH"
      steps={steps}
      currentStep={currentStep}
      progress={progress}
      completedCount={completedCount}
      onSelectStep={goTo}
      isStepDone={isDone}
    >
      <Card className="min-h-[560px] bg-card border">
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
            <>
              <div className="grid gap-3 md:grid-cols-4">
                <MetricCard label="Ansiedad" value="50-60%" />
                <MetricCard label="Sueño" value="50-70%" />
                <MetricCard label="Depresión" value="40-50%" />
                <MetricCard label="TEA" value="~30%" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InfoCard
                  title="Qué significa comorbilidad"
                  items={[
                    "Una condición puede coexistir con TDAH sin ser causada directamente por él.",
                    "Los síntomas pueden superponerse y volver menos claro el diagnóstico.",
                    "El tratamiento cambia según qué condición genera más deterioro ahora.",
                  ]}
                />
                <InfoCard
                  title="Qué conviene ordenar"
                  items={[
                    "Historia desde la infancia: síntomas persistentes vs episodios.",
                    "Sueño, ansiedad, ánimo, consumo de sustancias y riesgo actual.",
                    "Impacto funcional: trabajo, estudio, vínculos, salud y manejo diario.",
                  ]}
                />
              </div>
            </>
          )}

          {currentStep === 2 && (
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Ansiedad"
                items={[
                  "Puede aparecer por años de olvidos, errores, demoras y sobrecarga.",
                  "También puede existir como trastorno propio y necesitar tratamiento específico.",
                  "Al iniciar medicación para TDAH conviene monitorear ansiedad y sueño.",
                ]}
              />
              <InfoCard
                title="Depresión"
                items={[
                  "Puede ser secundaria a frustración crónica, baja autoestima o problemas laborales.",
                  "También puede coexistir de forma independiente.",
                  "Concentración baja, fatiga y falta de motivación pueden confundir ambos cuadros.",
                ]}
              />
              <InfoCard
                title="Sueño"
                items={[
                  "Insomnio, sueño irregular o piernas inquietas pueden empeorar atención y ánimo.",
                  "Antes de subir medicación, conviene revisar horarios, descanso y consumo de cafeína.",
                  "Dormir mal puede parecer TDAH más severo aunque el problema principal sea otro.",
                ]}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Diferencias útiles"
                items={[
                  "TDAH: dificultad más general para sostener foco, regular impulsos y organizarse.",
                  "TEA: intereses intensos, rigidez, sensorialidad y dificultad con cambios.",
                  "Pueden coexistir: hiperfoco, desorganización, sobrecarga sensorial e inquietud interna.",
                ]}
              />
              <InfoCard
                title="Abordaje"
                items={[
                  "Usar rutinas visuales, instrucciones concretas y menos cambios improvisados.",
                  "Coordinar psiquiatría con profesionales que conozcan TEA en adultos.",
                  "Monitorear ansiedad, rigidez y sueño al ajustar medicación para TDAH.",
                ]}
              />
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Bipolaridad y TLP"
                items={[
                  "Bipolaridad: buscar episodios de ánimo, energía y sueño claramente distintos del estado habitual.",
                  "TLP: impulsividad y desregulación suelen variar más con estrés interpersonal.",
                  "Si hay sospecha de bipolaridad, se evalúa estabilización del ánimo antes de estimulantes.",
                ]}
              />
              <InfoCard
                title="TCA y consumos"
                items={[
                  "La impulsividad y la desorganización pueden favorecer atracones o comidas muy irregulares.",
                  "También pueden aparecer compras compulsivas, apuestas o uso problemático de internet.",
                  "La medicación estimulante bien indicada no implica por sí sola consumo problemático; requiere seguimiento.",
                ]}
              />
            </div>
          )}

          {currentStep === 5 && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <InfoCard
                  title="Prioridad clínica"
                  items={[
                    "Primero: psicosis, bipolaridad descompensada, riesgo suicida o consumo severo.",
                    "Después: TDAH, ansiedad, depresión y sueño según deterioro actual.",
                    "Condiciones físicas frecuentes: migraña, asma, obesidad, fatiga o piernas inquietas.",
                  ]}
                />
                <InfoCard
                  title="Qué pedir en evaluación"
                  items={[
                    "Diagnóstico diferencial, no solo checklist de síntomas.",
                    "Plan de seguimiento: respuesta, efectos adversos, sueño, ánimo y funcionamiento.",
                    "Coordinación si hay psicoterapia, psiquiatría, nutrición o tratamiento médico paralelo.",
                  ]}
                />
              </div>

              <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
                La clave no es tratar todo a la vez. Es identificar qué cuadro
                explica mejor el deterioro actual y ajustar el orden del
                tratamiento con seguimiento profesional.
              </div>
            </>
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
            <Button asChild variant="outline">
              <Link href="/tratamientos">Ver tratamientos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/herramientas">Ver herramientas prácticas</Link>
            </Button>
          </div>
        )}
      </Card>

      <References references={comorbilidadesReferences} />
    </StepGuideLayout>
  );
}

const comorbilidadesReferences: Reference[] = [
  {
    id: 1,
    title: "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description: "Datos sobre cuántas personas con TDAH tienen también otras condiciones.",
    year: "2021",
  },
];
