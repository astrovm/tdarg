"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

import { Header } from "@/components/header";
import { References, type Reference } from "@/components/references";
import { Button } from "@/components/ui/button";
import { useGuideStep } from "@/hooks/use-guide-step";
import type { GuideAction, StepDefinition } from "@/lib/steps";
import { cn } from "@/lib/utils";

export type StepGuideLayoutProps = {
  title: string;
  description?: string;
  steps: readonly StepDefinition[];
  // Acciones al terminar la guía: la primera se muestra como principal
  finalActions: readonly GuideAction[];
  references?: Reference[];
  // Aviso breve bajo la descripción (por ejemplo, que no reemplaza la consulta)
  notice?: string;
  // Recibe el paso actual y devuelve el contenido de todos los pasos
  children: (currentStep: number) => ReactNode;
};

export function StepGuideLayout({
  title,
  description,
  steps,
  finalActions,
  references,
  notice,
  children,
}: StepGuideLayoutProps) {
  const { currentStep, goTo } = useGuideStep(steps.length);
  const cardRef = useRef<HTMLElement>(null);
  const previousStep = useRef(currentStep);

  // Al cambiar de paso, si el comienzo del contenido quedó arriba de la
  // pantalla (por ejemplo al tocar "Siguiente" al final), volvemos a él.
  useEffect(() => {
    if (previousStep.current === currentStep) {
      return;
    }
    previousStep.current = currentStep;

    const card = cardRef.current;
    if (card && card.getBoundingClientRect().top < 0) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  }, [currentStep]);

  const activeStep = steps[currentStep - 1];
  const ActiveIcon = activeStep.icon;
  const isLast = currentStep === steps.length;
  const [primaryAction, ...otherActions] = finalActions;

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="border-b bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-6 sm:py-8">
          <h1 className="mb-2 text-2xl font-bold text-foreground sm:mb-3 sm:text-3xl">
            {title}
          </h1>
          {description ? (
            <p className="mb-5 text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {notice ? (
            <p className="mb-5 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-300" aria-hidden="true" />
              {notice}
            </p>
          ) : null}

          <nav aria-label="Pasos de la guía">
            <ol className="grid grid-cols-1 gap-1.5 min-[420px]:grid-cols-2 md:flex md:flex-wrap md:gap-2">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;

                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => goTo(step.id)}
                      aria-current={isActive ? "step" : undefined}
                      className={cn(
                        "flex min-h-11 w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background md:w-auto",
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                          isActive ? "bg-primary-foreground/20" : "bg-muted text-foreground",
                        )}
                        aria-hidden="true"
                      >
                        {step.id}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {step.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      <main className="container mx-auto max-w-4xl px-4 py-6">
        <article
          ref={cardRef}
          aria-labelledby="paso-titulo"
          className="scroll-mt-4 rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <header className="flex items-center gap-3 p-5 sm:p-6">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                activeStep.accent,
              )}
            >
              <ActiveIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Paso {currentStep} de {steps.length}
              </p>
              <h2 id="paso-titulo" className="text-xl font-semibold leading-tight">
                {activeStep.title}
              </h2>
              <p className="text-sm text-muted-foreground">{activeStep.subtitle}</p>
            </div>
          </header>

          <div className="space-y-6 px-5 pb-6 sm:px-6">{children(currentStep)}</div>

          <footer
            className={cn(
              "flex gap-3 border-t p-4 sm:p-6",
              isLast
                ? "flex-col-reverse sm:flex-row sm:items-center sm:justify-between"
                : "items-center justify-between",
            )}
          >
            <Button variant="outline" onClick={() => goTo(currentStep - 1)} disabled={currentStep === 1}>
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </Button>
            {isLast ? (
              <div className="flex flex-col-reverse gap-2 sm:flex-row">
                {otherActions.map((action) => (
                  <Button key={action.href} variant="outline" asChild>
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
                {primaryAction ? (
                  <Button asChild>
                    <Link href={primaryAction.href}>
                      {primaryAction.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}
              </div>
            ) : (
              <Button onClick={() => goTo(currentStep + 1)}>
                Siguiente<span className="hidden sm:inline">: {steps[currentStep].title}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </footer>
        </article>

        {references ? <References references={references} /> : null}
      </main>
    </div>
  );
}
