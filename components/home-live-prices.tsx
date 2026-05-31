"use client";

import { Loader2 } from "lucide-react";

import { useMedicamentosReales } from "@/hooks/use-medicamentos-reales";
import type { Medicamento } from "@/lib/medicamentos/types";

const TARGETS = [
  {
    label: "Ludoxa",
    matcher: "ludoxa",
    doses: ["30 mg", "50 mg", "70 mg"],
  },
  {
    label: "Concerta",
    matcher: "concerta",
    doses: ["18 mg", "36 mg", "54 mg"],
  },
];

function normalizeDose(dose: string) {
  return dose.toLowerCase().replace(/\s+/g, " ").trim();
}

function pickByDose(medicamentos: Medicamento[], matcher: string, dose: string) {
  const normalizedDose = normalizeDose(dose);

  return medicamentos
    .filter((medicamento) => {
      const text = `${medicamento.nombre} ${medicamento.marca}`.toLowerCase();
      return (
        text.includes(matcher) &&
        normalizeDose(medicamento.concentracion) === normalizedDose
      );
    })
    .filter((medicamento) => medicamento.precio > 0)
    .sort((a, b) => a.precio - b.precio)[0];
}

function formatCompactPrice(price: number) {
  const thousands = Math.round(price / 1000);
  return `$${thousands}k`;
}

export function HomeLivePrices() {
  const { medicamentos, loading, error } = useMedicamentosReales();
  const selected = TARGETS.map((target) => ({
    ...target,
    rows: target.doses.map((dose) => ({
      dose,
      medicamento: pickByDose(medicamentos, target.matcher, dose),
    })),
  }));

  if (error && !medicamentos.length) {
    return null;
  }

  return (
    <div className="flex cursor-pointer flex-wrap items-center justify-center gap-x-1 gap-y-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
      <span className="relative mr-1.5 inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      {selected.map((target, targetIndex) => (
        <span key={target.label} className="inline-flex flex-wrap items-center">
          <span className="font-medium text-foreground">{target.label}</span>
          <span className="mx-1.5 inline-flex flex-wrap items-center gap-x-1">
            {target.rows.map(({ dose, medicamento }, doseIndex) => (
              <span key={dose} className="inline-flex items-center gap-x-1">
                {doseIndex > 0 && (
                  <span className="text-muted-foreground/40">·</span>
                )}
                <span>{dose}</span>
                {loading && !medicamento ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : medicamento ? (
                  <span className="font-medium text-foreground">
                    {formatCompactPrice(medicamento.precio)}
                  </span>
                ) : null}
              </span>
            ))}
          </span>
          {targetIndex < selected.length - 1 && (
            <span className="mx-2 text-muted-foreground/25">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
