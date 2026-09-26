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

type Orden = "precio" | "mg" | "nombre";

const ORDEN_LABELS: Record<Orden, string> = {
  precio: "Menor precio",
  mg: "Menor precio por mg",
  nombre: "Nombre",
};

const ORDEN_PRINCIPIOS = [
  "lisdexanfetamina",
  "metilfenidato",
  "atomoxetina",
  "modafinilo",
  "armodafinilo",
  "bupropion",
];

// Solo metilfenidato figura en el PMO (Res. 310/2004, 40%). Para el resto el
// descuento depende de cada obra social o prepaga, y los usos off-label en
// general no tienen cobertura, así que no mostramos estimación.
// Solo mostramos el 40% para estimulantes y no estimulantes: los usos
// off-label en general no tienen cobertura.
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

function sortMedicamentos(items: Medicamento[], orden: Orden): Medicamento[] {
  const byName = (a: Medicamento, b: Medicamento) =>
    brandName(a.marca).localeCompare(brandName(b.marca), "es", { sensitivity: "base" }) ||
    (extractMg(a.concentracion) ?? 0) - (extractMg(b.concentracion) ?? 0);

  return [...items].sort((a, b) => {
    if (orden === "precio") {
      return a.precio - b.precio || byName(a, b);
    }
    if (orden === "mg") {
      const mgA = pricePerMg(a) ?? Number.POSITIVE_INFINITY;
      const mgB = pricePerMg(b) ?? Number.POSITIVE_INFINITY;
      return mgA - mgB || byName(a, b);
    }
    return byName(a, b);
  });
}

const COLUMNS = "md:grid-cols-[1fr_8rem_7rem_8rem]";

function MedicationPriceRow({
  medicamento,
  tone,
}: {
  medicamento: Medicamento;
  tone: PriceTone;
}) {
  const perMg = pricePerMg(medicamento);
  const coverage = hasCoverage(tone)
    ? formatPrice(priceWithCoverage(medicamento.precio), { decimals: 0 })
    : null;

  return (
    <li className={cn("grid grid-cols-[1fr_auto] gap-x-4 px-4 py-3 md:items-center", COLUMNS)}>
      <div className="min-w-0">
        <div className="font-semibold leading-tight">
          {brandName(medicamento.marca)} {medicamento.concentracion}
        </div>
        <div className="text-sm text-muted-foreground">
          {formatMedicationPresentation(medicamento)}
        </div>
      </div>
      <div className="text-right">
        <div className={cn("text-lg font-bold tabular-nums", priceTone[tone].price)}>
          {formatPrice(medicamento.precio, { decimals: 0 })}
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

      {groups.map(([principio, meds]) => (
        <div key={principio}>
          <h3 className={`mb-2 text-lg font-semibold capitalize ${priceTone[tone].heading}`}>
            {principio}
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
              {meds.map((medicamento) => (
                <MedicationPriceRow key={medicamento.codigo} medicamento={medicamento} tone={tone} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

function ordenarPrincipios(entries: Array<[string, Medicamento[]]>) {
  const index = (key: string) => {
    const i = ORDEN_PRINCIPIOS.indexOf(key);
    return i === -1 ? ORDEN_PRINCIPIOS.length : i;
  };
  return [...entries].sort(([a], [b]) => index(a) - index(b) || a.localeCompare(b, "es"));
}

export function PreciosClient({ initial }: { initial: PreciosSnapshot }) {
  const [filtro, setFiltro] = useState("");
  const [principio, setPrincipio] = useState("todos");
  const [dosis, setDosis] = useState("todas");
  const [orden, setOrden] = useState<Orden>("precio");
  const { data: medicamentos, updatedAt, stale, loading } =
    useMedicamentosReales(initial);

  const principios = useMemo(() => {
    const grupos = groupByApproval(medicamentos);
    return ordenarPrincipios(
      Object.entries({ ...grupos.estimulantes, ...grupos.noestimulantes, ...grupos.offlabel }),
    ).map(([key]) => key);
  }, [medicamentos]);

  const delPrincipio = useMemo(
    () =>
      principio === "todos"
        ? medicamentos
        : medicamentos.filter((med) => med.nombre.toLowerCase().includes(principio)),
    [medicamentos, principio],
  );

  const dosisDisponibles = useMemo(() => {
    const values = new Set<number>();
    for (const med of delPrincipio) {
      const mg = extractMg(med.concentracion);
      if (mg) values.add(mg);
    }
    return [...values].sort((a, b) => a - b);
  }, [delPrincipio]);

  const dosisActiva =
    dosis !== "todas" && dosisDisponibles.includes(Number(dosis)) ? dosis : "todas";

  const agrupados = useMemo(() => {
    const filtroLower = filtro.trim().toLowerCase();
    const filtrados = delPrincipio.filter((med) => {
      const coincideTexto =
        !filtroLower ||
        med.nombre.toLowerCase().includes(filtroLower) ||
        med.marca.toLowerCase().includes(filtroLower) ||
        med.laboratorio.toLowerCase().includes(filtroLower);
      const coincideDosis =
        dosisActiva === "todas" || extractMg(med.concentracion) === Number(dosisActiva);
      return coincideTexto && coincideDosis;
    });

    return {
      total: filtrados.length,
      grupos: groupByApproval(sortMedicamentos(filtrados, orden)),
    };
  }, [delPrincipio, filtro, dosisActiva, orden]);

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
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="h-11 rounded-lg pl-12"
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Select value={principio} onValueChange={setPrincipio}>
            <SelectTrigger className="col-span-2 h-10 rounded-lg sm:col-span-1" aria-label="Medicamento">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los medicamentos</SelectItem>
              {principios.map((key) => (
                <SelectItem key={key} value={key} className="capitalize">
                  {key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={dosisActiva} onValueChange={setDosis}>
            <SelectTrigger className="h-10 rounded-lg" aria-label="Dosis">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las dosis</SelectItem>
              {dosisDisponibles.map((mg) => (
                <SelectItem key={mg} value={String(mg)}>
                  {mg} mg
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={orden} onValueChange={(value) => setOrden(value as Orden)}>
            <SelectTrigger className="h-10 rounded-lg" aria-label="Ordenar por">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(ORDEN_LABELS) as Orden[]).map((key) => (
                <SelectItem key={key} value={key}>
                  {ORDEN_LABELS[key]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {medicamentos.length > 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Farmacity, {dateTimeFormat.format(new Date(updatedAt))}
          </p>
        ) : null}
      </PageHero>

      <main className="container mx-auto px-4 py-8">
        {stale && medicamentos.length > 0 && (
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
        ) : medicamentos.length === 0 ? (
          <Alert variant="destructive" className="border bg-card">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              No pudimos conseguir los precios de Farmacity en este momento.
              Probá de nuevo en unos minutos.
            </AlertDescription>
          </Alert>
        ) : agrupados.total === 0 ? (
          <p className="py-10 text-center text-muted-foreground">
            No se encontraron medicamentos que coincidan con lo que buscaste.
          </p>
        ) : (
          <div className="space-y-10">
            <PriceGroup
              title="Estimulantes"
              tone="stimulant"
              groups={ordenarPrincipios(Object.entries(agrupados.grupos.estimulantes))}
            />
            <PriceGroup
              title="No estimulantes"
              tone="nonstimulant"
              groups={ordenarPrincipios(Object.entries(agrupados.grupos.noestimulantes))}
            />
            <PriceGroup
              title="Uso off-label"
              tone="offlabel"
              groups={ordenarPrincipios(Object.entries(agrupados.grupos.offlabel))}
            />
          </div>
        )}
      </main>
    </>
  );
}
