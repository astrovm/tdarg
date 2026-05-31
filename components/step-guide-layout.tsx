"use client";

import type { ReactNode } from "react";
import { CheckCircle } from "lucide-react";

import { Header } from "@/components/header";
import { Progress } from "@/components/ui/progress";
import type { StepDefinition } from "@/lib/steps";
import { cn } from "@/lib/utils";

export type StepGuideLayoutProps = {
  title: string;
  description?: string;
  steps: readonly StepDefinition[];
  currentStep: number;
  progress: number;
  completedCount: number;
  onSelectStep: (id: number) => void;
  isStepDone: (id: number) => boolean;
  children: ReactNode;
  heroChildren?: ReactNode;
  heroClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
};

export function StepGuideLayout({
  title,
  description,
  steps,
  currentStep,
  progress,
  completedCount,
  onSelectStep,
  isStepDone,
  children,
  heroChildren,
  heroClassName,
  titleClassName,
  descriptionClassName,
  containerClassName,
}: StepGuideLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div
        className={cn(
          "relative border-b bg-background",
          heroClassName,
        )}
      >
        <div className="container mx-auto px-4 py-6 sm:py-8 relative z-10">
          <h1 className={cn("text-2xl font-bold text-foreground mb-2 sm:text-3xl sm:mb-3", titleClassName)}>{title}</h1>
          {description ? (
            <p className={cn("text-base text-muted-foreground mb-4 sm:text-lg sm:mb-5", descriptionClassName)}>
              {description}
            </p>
          ) : null}

          {heroChildren}

          <div className="rounded-xl border bg-card/70 p-2.5 sm:p-3">
            <div className="mb-2.5 sm:mb-3">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Progreso
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {completedCount}/{steps.length} completado
                </span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>

            <div className="grid grid-cols-2 gap-1.5 md:flex md:flex-wrap md:gap-2">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const done = isStepDone(step.id);

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => onSelectStep(step.id)}
                    className={cn(
                      "inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors sm:min-h-10 sm:gap-2 sm:px-3 sm:py-2 md:justify-start",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : done
                        ? "bg-secondary text-secondary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {done ? (
                      <CheckCircle className="h-4 w-4 shrink-0" />
                    ) : (
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                    <span>{step.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={cn("container mx-auto px-4 py-6", containerClassName)}>{children}</div>
    </div>
  );
}
