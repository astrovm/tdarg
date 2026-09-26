"use client";

import { useCallback, useState } from "react";

type Options = {
  totalSteps: number;
};

export function useStepProgress(options: Options) {
  const { totalSteps } = options;

  const [currentStep, setCurrentStep] = useState(1);
  // The first step counts as visited from the start
  const [visited, setVisited] = useState<ReadonlySet<number>>(() => new Set([1]));

  const goTo = useCallback(
    (step: number) => {
      const target = Math.min(Math.max(step, 1), totalSteps);
      setCurrentStep(target);
      setVisited((prev) => (prev.has(target) ? prev : new Set(prev).add(target)));
    },
    [totalSteps]
  );

  const next = useCallback(() => goTo(currentStep + 1), [goTo, currentStep]);
  const prev = useCallback(() => goTo(currentStep - 1), [goTo, currentStep]);

  const isDone = useCallback((step: number) => visited.has(step), [visited]);

  const completedCount = visited.size;
  const progress = (completedCount / totalSteps) * 100;

  return {
    currentStep,
    progress,
    completedCount,
    next,
    prev,
    goTo,
    isDone,
    totalSteps,
  } as const;
}
