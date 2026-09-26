import Link from "next/link";

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

export function HomeLivePrices({
  medicamentos,
}: {
  medicamentos: Medicamento[];
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
    <Link href="/precios" className="group">
      <div className="grid w-full max-w-sm cursor-pointer gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:max-w-none sm:grid-cols-2">
        {selected.map((target, targetIndex) => (
          <div key={target.label} className="min-w-0">
            <div className="mb-1 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {target.label}
            </div>
            <div className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-wrap">
              {target.rows.map(({ dose, medicamento }) => (
                <span
                  key={dose}
                  className="inline-flex min-h-8 items-center justify-center gap-1 rounded-md border bg-card px-2 text-xs"
                >
                  <span>{dose}</span>
                  {medicamento ? (
                    <span className="font-medium text-foreground">
                      {formatCompactPrice(medicamento.precio)}
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            {targetIndex < selected.length - 1 && (
              <div className="mt-2 border-t sm:hidden" />
            )}
          </div>
        ))}
      </div>
    </Link>
  );
}
