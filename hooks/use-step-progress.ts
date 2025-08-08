"use client";

import { useCallback, useMemo, useState } from "react";

export type StepItem = {
  id: number;
};

type Options = {
  totalSteps: number;
};

export function useStepProgress(options: Options) {
  const { totalSteps } = options;

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const markCompleted = useCallback((step: number) => {
    setCompletedSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
  }, []);

  const next = useCallback(() => {
    markCompleted(currentStep);
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  }, [currentStep, totalSteps, markCompleted]);

  const prev = useCallback(() => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const goTo = useCallback(
    (step: number) => {
      setCurrentStep(step);
      markCompleted(step);
    },
    [markCompleted]
  );

  const effectiveCompletedCount = useMemo(() => {
    return new Set([...completedSteps, currentStep]).size;
  }, [completedSteps, currentStep]);

  const progress = useMemo(() => {
    return (effectiveCompletedCount / totalSteps) * 100;
  }, [effectiveCompletedCount, totalSteps]);

  const isDone = useCallback(
    (step: number) => {
      return currentStep > step || completedSteps.includes(step);
    },
    [currentStep, completedSteps]
  );

  return {
    currentStep,
    completedSteps,
    progress,
    effectiveCompletedCount,
    next,
    prev,
    goTo,
    markCompleted,
    isDone,
    totalSteps,
    setCurrentStep, // expose if needed for advanced flows
  } as const;
}
