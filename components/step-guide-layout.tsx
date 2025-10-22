"use client";

import type { ReactNode } from "react";
import { CheckCircle } from "lucide-react";

import { Header } from "@/components/header";
import { Progress } from "@/components/ui/progress";
import type { StepDefinition } from "@/lib/steps";
import { cn } from "@/lib/utils";

const GRID_COLUMN_MAP: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

function getGridClassName(length: number) {
  if (length >= 6) {
    return GRID_COLUMN_MAP[6];
  }

  return GRID_COLUMN_MAP[length] ?? GRID_COLUMN_MAP[2];
}

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
  const gridClassName = getGridClassName(steps.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      <div
        className={cn(
          "relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden",
          heroClassName,
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5" />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className={cn("text-3xl font-bold text-purple-600 mb-4", titleClassName)}>{title}</h1>
          {description ? (
            <p className={cn("text-lg text-slate-600 dark:text-slate-300 mb-6", descriptionClassName)}>
              {description}
            </p>
          ) : null}

          {heroChildren}

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Progreso del aprendizaje
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {completedCount}/{steps.length} completado
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className={cn("grid grid-cols-2 gap-3 mb-6", gridClassName)}>
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
                    "p-3 rounded-lg text-left transition-all",
                    isActive
                      ? "bg-purple-600 text-white shadow-lg"
                      : done
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700"
                      : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700",
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {done ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="font-medium text-sm">{step.title}</span>
                  </div>
                  <p className="text-xs opacity-80">{step.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={cn("container mx-auto px-4 py-6", containerClassName)}>{children}</div>
    </div>
  );
}
