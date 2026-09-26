"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  // Actions shown after the last step; the first one is the primary button
  finalActions: readonly GuideAction[];
  references?: Reference[];
  // Receives the current step and returns the content for all steps
  children: (currentStep: number) => ReactNode;
};

export function StepGuideLayout({
  title,
  description,
  steps,
  finalActions,
  references,
  children,
}: StepGuideLayoutProps) {
  const { currentStep, goTo } = useGuideStep(steps.length);
  const cardRef = useRef<HTMLElement>(null);
  const previousStep = useRef(currentStep);

  // When the step changes and the top of the content is above the viewport
  // (for example after tapping "Siguiente" at the bottom), scroll back to it.
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

          <nav aria-label="Pasos de la guía">
            <ol className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
              {steps.map((step) => {
                const isActive = currentStep === step.id;

                return (
                  <li key={step.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => goTo(step.id)}
                      aria-current={isActive ? "step" : undefined}
                      className={cn(
                        "flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border py-2 pl-2 pr-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
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
                      {step.title}
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
          aria-labelledby="step-title"
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
              <h2 id="step-title" className="text-xl font-semibold leading-tight">
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
                Siguiente
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
