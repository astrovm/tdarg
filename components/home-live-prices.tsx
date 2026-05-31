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
    <div className="mt-3 space-y-1.5 border-t pt-3 text-xs">
      {selected.map(({ label, rows }) => (
        <div key={label} className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-medium text-foreground">{label}</span>
          {rows.map(({ dose, medicamento }, index) => (
            <span
              key={`${label}-${dose}`}
              className="inline-flex items-center gap-1 text-muted-foreground"
            >
              {index > 0 && <span className="text-border">·</span>}
              {loading && !medicamento ? (
                <>
                  <span>{dose}</span>
                  <Loader2 className="h-3 w-3 animate-spin" />
                </>
              ) : medicamento ? (
                <>
                  <span className="text-muted-foreground">{dose}</span>
                  <span className="font-medium text-foreground">
                    {formatCompactPrice(medicamento.precio)}
                  </span>
                </>
              ) : (
                <>
                  <span>{dose}</span>
                  <span>sin precio</span>
                </>
              )}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
