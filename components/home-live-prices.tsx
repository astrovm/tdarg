import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Medication } from "@/lib/medications/types";

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
  medications: Medication[],
  matcher: string,
  dose: string,
) {
  const normalizedDose = normalizeDose(dose);

  return medications
    .filter((medication) => {
      const text = `${medication.name} ${medication.brand}`.toLowerCase();
      return (
        text.includes(matcher) &&
        normalizeDose(medication.strength) === normalizedDose
      );
    })
    .filter((medication) => medication.price > 0)
    .sort((a, b) => a.price - b.price)[0];
}

function formatCompactPrice(price: number) {
  const thousands = Math.round(price / 1000);
  return `$${thousands}k`;
}

export function HomeLivePrices({
  medications,
}: {
  medications: Medication[];
}) {
  const selected = TARGETS.map((target) => ({
    ...target,
    rows: target.doses.map((dose) => ({
      dose,
      medication: pickByDose(medications, target.matcher, dose),
    })),
  }));

  if (!selected.some((target) => target.rows.some((row) => row.medication))) {
    return null;
  }

  return (
    <Link
      href="/precios"
      className="group block w-full max-w-2xl rounded-md text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-10">
        {selected.map((target) => (
          <div key={target.label} className="min-w-0">
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {target.label}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {target.rows.map(({ dose, medication }) => (
                <span key={dose} className="flex flex-col items-center leading-tight">
                  <span className="text-xs text-muted-foreground">{dose}</span>
                  <span className="text-lg font-semibold text-foreground tabular-nums">
                    {medication ? formatCompactPrice(medication.price) : null}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-primary">
        Ver todos los precios
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
    </Link>
  );
}
