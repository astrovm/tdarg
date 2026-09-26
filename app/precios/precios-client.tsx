"use client";

import { useMemo, useState } from "react";
import {
  AlertCircle,
  Loader2,
  Search,
} from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/page-hero";
import { useMedicamentosReales } from "@/hooks/use-medicamentos-reales";
import type { Medicamento, PreciosSnapshot } from "@/lib/medicamentos/types";
import {
  brandName,
  extractMg,
  formatMedicationPresentation,
  formatPrice,
  groupByApproval,
  pricePerMg,
  priceWithCoverage,
} from "@/lib/medicamentos/utils";
import { cn } from "@/lib/utils";

const priceTone = {
  stimulant: {
    heading: "text-emerald-700 dark:text-emerald-300",
    price: "text-emerald-700 dark:text-emerald-300",
  },
  nonstimulant: {
    heading: "text-sky-700 dark:text-sky-300",
    price: "text-sky-700 dark:text-sky-300",
  },
  offlabel: {
    heading: "text-amber-700 dark:text-amber-300",
    price: "text-amber-700 dark:text-amber-300",
  },
};

type PriceTone = keyof typeof priceTone;

type SortOrder = "price" | "mg" | "name";

const SORT_LABELS: Record<SortOrder, string> = {
  price: "Menor precio",
  mg: "Menor precio por mg",
  name: "Nombre",
};

const INGREDIENT_ORDER = [
  "lisdexanfetamina",
  "metilfenidato",
  "atomoxetina",
  "modafinilo",
  "armodafinilo",
  "bupropion",
];

// Only methylphenidate is in the PMO (Res. 310/2004, 40%). Off-label uses are
// usually not covered, so they get no discounted price.
function hasCoverage(tone: PriceTone) {
  return tone !== "offlabel";
}

const dateTimeFormat = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "America/Argentina/Buenos_Aires",
});

function sortMedications(items: Medicamento[], sortOrder: SortOrder): Medicamento[] {
  const byName = (a: Medicamento, b: Medicamento) =>
    brandName(a.marca).localeCompare(brandName(b.marca), "es", { sensitivity: "base" }) ||
    (extractMg(a.concentracion) ?? 0) - (extractMg(b.concentracion) ?? 0);

  return [...items].sort((a, b) => {
    if (sortOrder === "price") {
      return a.precio - b.precio || byName(a, b);
    }
    if (sortOrder === "mg") {
      const mgA = pricePerMg(a) ?? Number.POSITIVE_INFINITY;
      const mgB = pricePerMg(b) ?? Number.POSITIVE_INFINITY;
      return mgA - mgB || byName(a, b);
    }
    return byName(a, b);
  });
}

const COLUMNS = "md:grid-cols-[1fr_8rem_7rem_8rem]";

function MedicationPriceRow({
  medication,
  tone,
}: {
  medication: Medicamento;
  tone: PriceTone;
}) {
  const perMg = pricePerMg(medication);
  const coverage = hasCoverage(tone)
    ? formatPrice(priceWithCoverage(medication.precio), { decimals: 0 })
    : null;

  return (
    <li className={cn("grid grid-cols-[1fr_auto] gap-x-4 px-4 py-3 md:items-center", COLUMNS)}>
      <div className="min-w-0">
        <div className="font-semibold leading-tight">
          {brandName(medication.marca)} {medication.concentracion}
        </div>
        <div className="text-sm text-muted-foreground">
          {formatMedicationPresentation(medication)}
        </div>
      </div>
      <div className="text-right">
        <div className={cn("text-lg font-bold tabular-nums", priceTone[tone].price)}>
          {formatPrice(medication.precio, { decimals: 0 })}
        </div>
        {coverage ? (
          <div className="text-sm text-muted-foreground tabular-nums md:hidden">
            40%: {coverage}
          </div>
        ) : null}
      </div>
      <div className="hidden text-right text-sm tabular-nums md:block">
        {perMg ? formatPrice(perMg) : null}
      </div>
      <div className="hidden text-right text-sm tabular-nums md:block">{coverage}</div>
    </li>
  );
}

function PriceGroup({
  title,
  tone,
  groups,
}: {
  title: string;
  tone: PriceTone;
  groups: Array<[string, Medicamento[]]>;
}) {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>

      {groups.map(([ingredient, meds]) => (
        <div key={ingredient}>
          <h3 className={`mb-2 text-lg font-semibold capitalize ${priceTone[tone].heading}`}>
            {ingredient}
          </h3>
          <div className="overflow-hidden rounded-lg border bg-card">
            <div
              className={cn(
                "hidden gap-x-4 border-b bg-muted/40 px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground md:grid",
                COLUMNS,
              )}
              aria-hidden="true"
            >
              <span>Medicamento</span>
              <span className="text-right">Precio</span>
              <span className="text-right">Por mg</span>
              <span className="text-right">{hasCoverage(tone) ? "Con 40% desc." : null}</span>
            </div>
            <ul className="divide-y">
              {meds.map((medication) => (
                <MedicationPriceRow key={medication.codigo} medication={medication} tone={tone} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

function sortIngredientGroups(entries: Array<[string, Medicamento[]]>) {
  const index = (key: string) => {
    const i = INGREDIENT_ORDER.indexOf(key);
    return i === -1 ? INGREDIENT_ORDER.length : i;
  };
  return [...entries].sort(([a], [b]) => index(a) - index(b) || a.localeCompare(b, "es"));
}

export function PreciosClient({ initial }: { initial: PreciosSnapshot }) {
  const [query, setQuery] = useState("");
  const [ingredient, setIngredient] = useState("all");
  const [dose, setDose] = useState("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("price");
  const { data: medications, updatedAt, stale, loading } =
    useMedicamentosReales(initial);

  const ingredients = useMemo(() => {
    const groups = groupByApproval(medications);
    return sortIngredientGroups(
      Object.entries({ ...groups.estimulantes, ...groups.noestimulantes, ...groups.offlabel }),
    ).map(([key]) => key);
  }, [medications]);

  const byIngredient = useMemo(
    () =>
      ingredient === "all"
        ? medications
        : medications.filter((med) => med.nombre.toLowerCase().includes(ingredient)),
    [medications, ingredient],
  );

  const availableDoses = useMemo(() => {
    const values = new Set<number>();
    for (const med of byIngredient) {
      const mg = extractMg(med.concentracion);
      if (mg) values.add(mg);
    }
    return [...values].sort((a, b) => a - b);
  }, [byIngredient]);

  const activeDose =
    dose !== "all" && availableDoses.includes(Number(dose)) ? dose : "all";

  const grouped = useMemo(() => {
    const queryLower = query.trim().toLowerCase();
    const filtered = byIngredient.filter((med) => {
      const matchesQuery =
        !queryLower ||
        med.nombre.toLowerCase().includes(queryLower) ||
        med.marca.toLowerCase().includes(queryLower) ||
        med.laboratorio.toLowerCase().includes(queryLower);
      const matchesDose =
        activeDose === "all" || extractMg(med.concentracion) === Number(activeDose);
      return matchesQuery && matchesDose;
    });

    return {
      total: filtered.length,
      groups: groupByApproval(sortMedications(filtered, sortOrder)),
    };
  }, [byIngredient, query, activeDose, sortOrder]);

  return (
    <>
      <PageHero
        title="Precios de medicamentos"
        description="Compará precio, precio por mg y estimación con cobertura."
      >
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Buscá medicamento, marca o laboratorio"
            aria-label="Buscar medicamento, marca o laboratorio"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 rounded-lg pl-12"
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Select value={ingredient} onValueChange={setIngredient}>
            <SelectTrigger className="col-span-2 h-10 rounded-lg sm:col-span-1" aria-label="Medicamento">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los medicamentos</SelectItem>
              {ingredients.map((key) => (
                <SelectItem key={key} value={key} className="capitalize">
                  {key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={activeDose} onValueChange={setDose}>
            <SelectTrigger className="h-10 rounded-lg" aria-label="Dosis">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las dosis</SelectItem>
              {availableDoses.map((mg) => (
                <SelectItem key={mg} value={String(mg)}>
                  {mg} mg
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as SortOrder)}>
            <SelectTrigger className="h-10 rounded-lg" aria-label="Ordenar por">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(SORT_LABELS) as SortOrder[]).map((key) => (
                <SelectItem key={key} value={key}>
                  {SORT_LABELS[key]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {medications.length > 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Farmacity, {dateTimeFormat.format(new Date(updatedAt))}
          </p>
        ) : null}
      </PageHero>

      <main className="container mx-auto px-4 py-8">
        {stale && medications.length > 0 && (
          <Alert className="mb-6 border bg-card">
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
        ) : medications.length === 0 ? (
          <Alert variant="destructive" className="border bg-card">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              No pudimos conseguir los precios de Farmacity en este momento.
              Probá de nuevo en unos minutos.
            </AlertDescription>
          </Alert>
        ) : grouped.total === 0 ? (
          <p className="py-10 text-center text-muted-foreground">
            No se encontraron medicamentos que coincidan con lo que buscaste.
          </p>
        ) : (
          <div className="space-y-10">
            <PriceGroup
              title="Estimulantes"
              tone="stimulant"
              groups={sortIngredientGroups(Object.entries(grouped.groups.estimulantes))}
            />
            <PriceGroup
              title="No estimulantes"
              tone="nonstimulant"
              groups={sortIngredientGroups(Object.entries(grouped.groups.noestimulantes))}
            />
            <PriceGroup
              title="Uso off-label"
              tone="offlabel"
              groups={sortIngredientGroups(Object.entries(grouped.groups.offlabel))}
            />
          </div>
        )}
      </main>
    </>
  );
}
