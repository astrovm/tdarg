"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

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

  // Mark the first step as completed from the start
  useEffect(() => {
    markCompleted(1);
  }, [markCompleted]);

  const next = useCallback(() => {
    setCurrentStep((prev) => {
      const newStep = prev < totalSteps ? prev + 1 : prev;
      // Mark both the step we leave and the one we arrive to as visited/completed
      setCompletedSteps((prevCompleted) => {
        const set = new Set(prevCompleted);
        set.add(prev);
        set.add(newStep);
        return Array.from(set);
      });
      return newStep;
    });
  }, [totalSteps]);

  const prev = useCallback(() => {
    setCurrentStep((prevStep) => {
      const newStep = prevStep > 1 ? prevStep - 1 : prevStep;
      if (newStep !== prevStep) {
        setCompletedSteps((prevCompleted) => {
          const set = new Set(prevCompleted);
          set.add(prevStep); // leaving
          set.add(newStep); // arriving
          return Array.from(set);
        });
      }
      return newStep;
    });
  }, []);

  const goTo = useCallback((step: number) => {
    setCurrentStep((prev) => {
      if (step !== prev) {
        setCompletedSteps((prevCompleted) => {
          const set = new Set(prevCompleted);
          set.add(prev); // leaving
          set.add(step); // arriving
          return Array.from(set);
        });
      }
      return step;
    });
  }, []);

  // Ensure the last step is considered completed when reached
  useEffect(() => {
    if (currentStep === totalSteps) {
      markCompleted(currentStep);
    }
  }, [currentStep, totalSteps, markCompleted]);

  // Real completed steps count (excludes current unless marked)
  const completedCount = useMemo(() => {
    return new Set(completedSteps).size;
  }, [completedSteps]);

  // Display count: number of completed/visited steps
  const effectiveCompletedCount = useMemo(() => {
    return completedCount;
  }, [completedCount]);

  const progress = useMemo(() => {
    return (completedCount / totalSteps) * 100;
  }, [completedCount, totalSteps]);

  // A step is considered done only if it was explicitly completed/visited.
  // We no longer auto-mark previous steps as done just because currentStep is higher.
  const isDone = useCallback(
    (step: number) => {
      return completedSteps.includes(step);
    },
    [completedSteps]
  );

  return {
    currentStep,
    completedSteps,
    progress,
    completedCount,
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
