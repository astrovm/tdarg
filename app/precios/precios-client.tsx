"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  AlertCircle,
  Building2,
  Clock,
  Loader2,
  Package,
  Search,
  Shield,
} from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/page-hero";
import { useMedicamentosReales } from "@/hooks/use-medicamentos-reales";
import type { Medicamento, PreciosSnapshot } from "@/lib/medicamentos/types";
import {
  formatMedicationName,
  formatMedicationPresentation,
  formatPrice,
  groupByApproval,
  pricePerMg,
  priceWithCoverage,
} from "@/lib/medicamentos/utils";

function sortMedicamentosAlphabetically(items: Medicamento[]): Medicamento[] {
  return [...items].sort((a, b) => {
    const compareMarca = a.marca.localeCompare(b.marca, "es", {
      sensitivity: "base",
    });

    if (compareMarca !== 0) {
      return compareMarca;
    }

    return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
  });
}

const priceTone = {
  stimulant: {
    heading: "text-emerald-700 dark:text-emerald-300",
    price: "text-emerald-700 dark:text-emerald-300",
    chip: "border-emerald-500/25 bg-emerald-500/10",
    icon: "text-emerald-600 dark:text-emerald-300",
    bar: "bg-emerald-500",
  },
  nonstimulant: {
    heading: "text-sky-700 dark:text-sky-300",
    price: "text-sky-700 dark:text-sky-300",
    chip: "border-sky-500/25 bg-sky-500/10",
    icon: "text-sky-600 dark:text-sky-300",
    bar: "bg-sky-500",
  },
  offlabel: {
    heading: "text-amber-700 dark:text-amber-300",
    price: "text-amber-700 dark:text-amber-300",
    chip: "border-amber-500/25 bg-amber-500/10",
    icon: "text-amber-600 dark:text-amber-300",
    bar: "bg-amber-500",
  },
};

type PriceTone = keyof typeof priceTone;

// Solo metilfenidato figura en el PMO (Res. 310/2004, 40%). Para el resto el
// descuento depende de cada obra social o prepaga, y los usos off-label en
// general no tienen cobertura, así que no mostramos estimación.
function coverageLabel(principio: string, tone: PriceTone): string | null {
  if (tone === "offlabel") {
    return null;
  }

  if (principio === "metilfenidato") {
    return "Con cobertura PMO (40% desc.)";
  }

  return "Estimado si tu cobertura da 40% desc.";
}

const dateTimeFormat = new Intl.DateTimeFormat("es-AR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "America/Argentina/Buenos_Aires",
});

function MedicationPriceCard({
  medicamento,
  tone,
  coverage,
}: {
  medicamento: Medicamento;
  tone: PriceTone;
  coverage: string | null;
}) {
  const style = priceTone[tone];
  const perMg = pricePerMg(medicamento);

  return (
    <Card className="bg-card border shadow-sm">
      <CardHeader className="pb-3 pl-6">
        <CardTitle className="text-lg leading-tight">
          {formatMedicationName(medicamento.marca)}
        </CardTitle>
        <CardDescription className="text-base font-medium">
          {medicamento.concentracion}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pl-6">
        <div className="grid gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>{medicamento.laboratorio}</span>
          </div>
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span>{formatMedicationPresentation(medicamento)}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Precio sin cobertura
          </div>
          <div className={`mt-1 text-3xl font-bold ${style.price}`}>
            {formatPrice(medicamento.precio)}
          </div>
          {perMg && (
            <div className="mt-2 text-sm text-muted-foreground">
              Precio por mg{" "}
              <span className="font-semibold text-foreground">
                {formatPrice(perMg)}
              </span>
            </div>
          )}
        </div>

        {coverage && (
          <div className={`flex items-center gap-3 rounded-lg border p-3 ${style.chip}`}>
            <Shield className={`h-4 w-4 shrink-0 ${style.icon}`} />
            <div>
              <div className="text-xs font-medium text-muted-foreground">
                {coverage}
              </div>
              <div className="text-xl font-bold text-foreground">
                {formatPrice(priceWithCoverage(medicamento.precio))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PriceGroup({
  title,
  tone,
  groups,
  children,
}: {
  title: string;
  tone: PriceTone;
  groups: Array<[string, Medicamento[]]>;
  children?: ReactNode;
}) {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section className="p-6 rounded-lg border">
      <div className="flex items-center gap-3 mb-6">
        <div className={`h-8 w-1.5 rounded-full ${priceTone[tone].bar}`} />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>

      {children}

      {groups.map(([principio, meds]) => (
        <div key={principio} className="mb-8">
          <h3 className={`text-xl font-semibold mb-4 ${priceTone[tone].heading}`}>
            <span className="capitalize">{principio}</span> ({meds.length}{" "}
            medicamentos)
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {meds.map((medicamento) => (
              <MedicationPriceCard
                key={medicamento.codigo}
                medicamento={medicamento}
                tone={tone}
                coverage={coverageLabel(principio, tone)}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

const ORDEN_ESTIMULANTES = ["lisdexanfetamina", "metilfenidato"];

function ordenarEstimulantes(entries: Array<[string, Medicamento[]]>) {
  return [...entries].sort(([a], [b]) => {
    const indexA = ORDEN_ESTIMULANTES.indexOf(a);
    const indexB = ORDEN_ESTIMULANTES.indexOf(b);

    if (indexA === -1 && indexB === -1) {
      return a.localeCompare(b, "es", { sensitivity: "base" });
    }
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    return indexA - indexB;
  });
}

export function PreciosClient({ initial }: { initial: PreciosSnapshot }) {
  const [filtro, setFiltro] = useState("");
  const { data: medicamentos, updatedAt, stale, loading } =
    useMedicamentosReales(initial);

  const medicamentosFiltrados = useMemo(() => {
    const filtroLower = filtro.trim().toLowerCase();
    const filtrados = filtroLower
      ? medicamentos.filter(
          (med) =>
            med.nombre.toLowerCase().includes(filtroLower) ||
            med.marca.toLowerCase().includes(filtroLower) ||
            med.laboratorio.toLowerCase().includes(filtroLower)
        )
      : medicamentos;

    return sortMedicamentosAlphabetically(filtrados);
  }, [medicamentos, filtro]);

  const agrupados = useMemo(
    () => groupByApproval(medicamentosFiltrados),
    [medicamentosFiltrados]
  );

  const conPrecio = medicamentos.filter((m) => m.precio > 0).length;

  return (
    <>
      <PageHero
        title="Precios de medicamentos"
        description="Compará precio, presentación y estimación con cobertura."
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            placeholder="Buscá medicamento, marca o laboratorio..."
            aria-label="Buscar medicamento, marca o laboratorio"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="pl-12 h-10 rounded-lg"
          />
        </div>
        {medicamentos.length > 0 && (
          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {conPrecio} de {medicamentos.length} con precio. Precios de Farmacity
            del {dateTimeFormat.format(new Date(updatedAt))}.
          </p>
        )}
      </PageHero>

      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {stale && medicamentos.length > 0 && (
            <Alert className="mb-6 bg-card border">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No pudimos actualizar los precios con Farmacity. Mostramos los
                últimos precios que conseguimos.
              </AlertDescription>
            </Alert>
          )}

          {loading ? (
            <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              Cargando precios...
            </div>
          ) : medicamentos.length === 0 ? (
            <Alert variant="destructive" className="bg-card border">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No pudimos conseguir los precios de Farmacity en este momento.
                Probá de nuevo en unos minutos.
              </AlertDescription>
            </Alert>
          ) : medicamentosFiltrados.length === 0 ? (
            <Alert className="bg-card border">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No se encontraron medicamentos que coincidan con lo que
                buscaste.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-8 mt-6">
              <PriceGroup
                title="Estimulantes usados para TDAH"
                tone="stimulant"
                groups={ordenarEstimulantes(Object.entries(agrupados.estimulantes))}
              />
              <PriceGroup
                title="No estimulantes usados para TDAH"
                tone="nonstimulant"
                groups={Object.entries(agrupados.noestimulantes)}
              />
              <PriceGroup
                title="Medicamentos con uso off-label para TDAH"
                tone="offlabel"
                groups={Object.entries(agrupados.offlabel)}
              >
                <Alert className="mb-6 border-amber-500/30 bg-amber-500/10">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-foreground">
                    Estos medicamentos pueden usarse en algunos casos de TDAH,
                    pero no son la indicación principal y en general no tienen
                    cobertura para este uso. Consultá con tu médico antes de
                    usar cualquier medicamento.
                  </AlertDescription>
                </Alert>
              </PriceGroup>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
