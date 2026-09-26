import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

function pickByDose(
  medicamentos: Medicamento[],
  matcher: string,
  dose: string,
) {
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

const dateFormat = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "long",
  timeZone: "America/Argentina/Buenos_Aires",
});

export function HomeLivePrices({
  medicamentos,
  updatedAt,
}: {
  medicamentos: Medicamento[];
  updatedAt: string;
}) {
  const selected = TARGETS.map((target) => ({
    ...target,
    rows: target.doses.map((dose) => ({
      dose,
      medicamento: pickByDose(medicamentos, target.matcher, dose),
    })),
  }));

  if (!selected.some((target) => target.rows.some((row) => row.medicamento))) {
    return null;
  }

  return (
    <Link
      href="/precios"
      className="group block w-full max-w-md rounded-xl border bg-card p-4 text-sm shadow-sm transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background sm:max-w-2xl"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {selected.map((target) => (
          <div key={target.label} className="min-w-0">
            <div className="mb-1.5 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {target.label}
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {target.rows.map(({ dose, medicamento }) => (
                <span
                  key={dose}
                  className="flex min-h-11 flex-col items-center justify-center rounded-md bg-muted/60 px-1 py-1 leading-tight"
                >
                  <span className="text-xs text-muted-foreground">{dose}</span>
                  <span className="font-semibold text-foreground">
                    {medicamento ? formatCompactPrice(medicamento.precio) : "–"}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-2 border-t pt-3 text-xs text-muted-foreground">
        <span>Farmacity, {dateFormat.format(new Date(updatedAt))}</span>
        <span className="inline-flex items-center gap-1 font-medium text-primary">
          Ver todos los precios
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
