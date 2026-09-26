"use client";

import { useCallback, useEffect, useState } from "react";

const PARAM = "paso";

function readStep(totalSteps: number) {
  const value = Number(new URLSearchParams(window.location.search).get(PARAM));
  return Number.isInteger(value) && value >= 1 && value <= totalSteps ? value : 1;
}

// El paso actual vive en la URL (?paso=2) para que se pueda compartir, sobreviva
// a una recarga y el botón "atrás" del navegador vuelva al paso anterior.
export function useGuideStep(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const sync = () => setCurrentStep(readStep(totalSteps));
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [totalSteps]);

  const goTo = useCallback(
    (step: number) => {
      const target = Math.min(Math.max(step, 1), totalSteps);
      if (target === readStep(totalSteps)) {
        return;
      }

      const url = new URL(window.location.href);
      if (target === 1) {
        url.searchParams.delete(PARAM);
      } else {
        url.searchParams.set(PARAM, String(target));
      }
      window.history.pushState(null, "", url);
      setCurrentStep(target);
    },
    [totalSteps],
  );

  return { currentStep, goTo } as const;
}
