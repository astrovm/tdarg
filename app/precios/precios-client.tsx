"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  AlertCircle,
  Building2,
  Clock,
  LayoutGrid,
  List,
  Loader2,
  Package,
  Search,
  Shield,
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
  formatLaboratorio,
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

type Orden = "precio" | "mg" | "nombre";
type Vista = "lista" | "tarjetas";

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
function coverageNote(principio: string, tone: PriceTone): string | null {
  if (tone === "offlabel") {
    return null;
  }

  if (principio === "metilfenidato") {
    return "Con cobertura PMO: 40% de descuento (Res. 310/2004).";
  }

  return "Con 40% es una estimación: no está en el PMO y depende de tu obra social o prepaga.";
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

function medicationTitle(medicamento: Medicamento) {
  return `${brandName(medicamento.marca)} ${medicamento.concentracion}`;
}

function MedicationPriceCard({
  medicamento,
  tone,
  showCoverage,
}: {
  medicamento: Medicamento;
  tone: PriceTone;
  showCoverage: boolean;
}) {
  const style = priceTone[tone];
  const perMg = pricePerMg(medicamento);

  return (
    <article className="rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
      <h4 className="text-lg font-semibold leading-tight">
        {medicationTitle(medicamento)}
      </h4>
      <div className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4" aria-hidden="true" />
          <span>{formatMedicationPresentation(medicamento)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4" aria-hidden="true" />
          <span>{formatLaboratorio(medicamento.laboratorio)}</span>
        </div>
      </div>

      <div className="mt-4 border-t pt-4">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Precio sin cobertura
        </div>
        <div className={`mt-1 text-3xl font-bold ${style.price}`}>
          {formatPrice(medicamento.precio, { decimals: 0 })}
        </div>
        {perMg ? (
          <div className="mt-1 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{formatPrice(perMg)}</span> por mg
          </div>
        ) : null}
      </div>

      {showCoverage ? (
        <div className={`mt-4 flex items-center gap-3 rounded-lg border p-3 ${style.chip}`}>
          <Shield className={`h-4 w-4 shrink-0 ${style.icon}`} aria-hidden="true" />
          <div>
            <div className="text-xs font-medium text-muted-foreground">Con 40% de descuento</div>
            <div className="text-xl font-bold text-foreground">
              {formatPrice(priceWithCoverage(medicamento.precio), { decimals: 0 })}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function MedicationPriceRow({
  medicamento,
  tone,
  showCoverage,
}: {
  medicamento: Medicamento;
  tone: PriceTone;
  showCoverage: boolean;
}) {
  const perMg = pricePerMg(medicamento);

  return (
    <li className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 px-4 py-3 md:grid-cols-[1fr_9rem_7rem_9rem] md:items-center">
      <div className="min-w-0">
        <div className="font-semibold leading-tight">{medicationTitle(medicamento)}</div>
        <div className="text-sm text-muted-foreground">
          {formatMedicationPresentation(medicamento)} · {formatLaboratorio(medicamento.laboratorio)}
        </div>
      </div>
      <div className={cn("text-right text-lg font-bold tabular-nums", priceTone[tone].price)}>
        {formatPrice(medicamento.precio, { decimals: 0 })}
      </div>
      <div className="col-span-2 flex flex-wrap gap-x-1.5 text-sm text-muted-foreground tabular-nums md:col-span-1 md:block md:text-right">
        {perMg ? (
          <span>
            <span className="font-medium text-foreground">{formatPrice(perMg)}</span>
            <span className="md:hidden"> por mg</span>
          </span>
        ) : (
          <span aria-label="Sin dato">–</span>
        )}
        {showCoverage ? (
          <span className="md:hidden">
            · Con 40%{" "}
            <span className="font-medium text-foreground">
              {formatPrice(priceWithCoverage(medicamento.precio), { decimals: 0 })}
            </span>
          </span>
        ) : null}
      </div>
      <div className="hidden text-right text-sm font-medium tabular-nums md:block">
        {showCoverage
          ? formatPrice(priceWithCoverage(medicamento.precio), { decimals: 0 })
          : "–"}
      </div>
    </li>
  );
}

function PrincipioGroup({
  principio,
  meds,
  tone,
  vista,
}: {
  principio: string;
  meds: Medicamento[];
  tone: PriceTone;
  vista: Vista;
}) {
  const note = coverageNote(principio, tone);
  const showCoverage = note !== null;

  return (
    <div>
      <h3 className={`text-xl font-semibold ${priceTone[tone].heading}`}>
        <span className="capitalize">{principio}</span>{" "}
        <span className="text-base font-normal text-muted-foreground">
          ({meds.length})
        </span>
      </h3>
      {note ? <p className="mt-1 text-sm text-muted-foreground">{note}</p> : null}

      {vista === "lista" ? (
        <div className="mt-3 overflow-hidden rounded-lg border bg-card">
          <div
            className="hidden border-b bg-muted/40 px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground md:grid md:grid-cols-[1fr_9rem_7rem_9rem] md:gap-x-4"
            aria-hidden="true"
          >
            <span>Medicamento</span>
            <span className="text-right">Precio</span>
            <span className="text-right">Por mg</span>
            <span className="text-right">Con 40% desc.</span>
          </div>
          <ul className="divide-y">
            {meds.map((medicamento) => (
              <MedicationPriceRow
                key={medicamento.codigo}
                medicamento={medicamento}
                tone={tone}
                showCoverage={showCoverage}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {meds.map((medicamento) => (
            <MedicationPriceCard
              key={medicamento.codigo}
              medicamento={medicamento}
              tone={tone}
              showCoverage={showCoverage}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PriceGroup({
  title,
  tone,
  groups,
  vista,
  children,
}: {
  title: string;
  tone: PriceTone;
  groups: Array<[string, Medicamento[]]>;
  vista: Vista;
  children?: ReactNode;
}) {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`h-7 w-1.5 rounded-full ${priceTone[tone].bar}`} aria-hidden="true" />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>

      {children}

      {groups.map(([principio, meds]) => (
        <PrincipioGroup
          key={principio}
          principio={principio}
          meds={meds}
          tone={tone}
          vista={vista}
        />
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

function ToggleChip({
  pressed,
  onClick,
  children,
  className,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-10 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
        pressed
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function PreciosClient({ initial }: { initial: PreciosSnapshot }) {
  const [filtro, setFiltro] = useState("");
  const [principio, setPrincipio] = useState("todos");
  const [dosis, setDosis] = useState("todas");
  const [orden, setOrden] = useState<Orden>("precio");
  const [vista, setVista] = useState<Vista>("lista");
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

  const conPrecio = medicamentos.filter((m) => m.precio > 0).length;

  const limpiarFiltros = () => {
    setFiltro("");
    setPrincipio("todos");
    setDosis("todas");
  };

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

        {principios.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Principio activo">
            <ToggleChip pressed={principio === "todos"} onClick={() => setPrincipio("todos")}>
              Todos
            </ToggleChip>
            {principios.map((key) => (
              <ToggleChip
                key={key}
                pressed={principio === key}
                onClick={() => setPrincipio(principio === key ? "todos" : key)}
                className="capitalize"
              >
                {key}
              </ToggleChip>
            ))}
          </div>
        ) : null}

        <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
          <Select value={dosisActiva} onValueChange={setDosis}>
            <SelectTrigger className="h-10 rounded-lg sm:w-44" aria-label="Dosis">
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
            <SelectTrigger className="h-10 rounded-lg sm:w-52" aria-label="Ordenar por">
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
          <div
            className="col-span-2 flex gap-2 sm:ml-auto"
            role="group"
            aria-label="Vista"
          >
            <ToggleChip pressed={vista === "lista"} onClick={() => setVista("lista")}>
              <List className="h-4 w-4" aria-hidden="true" />
              Lista
            </ToggleChip>
            <ToggleChip pressed={vista === "tarjetas"} onClick={() => setVista("tarjetas")}>
              <LayoutGrid className="h-4 w-4" aria-hidden="true" />
              Tarjetas
            </ToggleChip>
          </div>
        </div>

        {medicamentos.length > 0 ? (
          <p className="mt-4 flex items-start gap-1.5 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {conPrecio} de {medicamentos.length} con precio. Precios de Farmacity
              del {dateTimeFormat.format(new Date(updatedAt))}; pueden variar entre
              farmacias. Esta información no reemplaza la indicación de tu médico.
            </span>
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
        ) : (
          <>
            <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
              <span className="font-semibold text-foreground">{agrupados.total}</span>{" "}
              medicamento{agrupados.total !== 1 ? "s" : ""}
            </p>

            {agrupados.total === 0 ? (
              <div className="rounded-lg border bg-card px-6 py-10 text-center">
                <p className="mb-4 text-muted-foreground">
                  No se encontraron medicamentos que coincidan con lo que buscaste.
                </p>
                <button
                  type="button"
                  onClick={limpiarFiltros}
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                <PriceGroup
                  title="Estimulantes"
                  tone="stimulant"
                  vista={vista}
                  groups={ordenarPrincipios(Object.entries(agrupados.grupos.estimulantes))}
                />
                <PriceGroup
                  title="No estimulantes"
                  tone="nonstimulant"
                  vista={vista}
                  groups={ordenarPrincipios(Object.entries(agrupados.grupos.noestimulantes))}
                />
                <PriceGroup
                  title="Uso off-label"
                  tone="offlabel"
                  vista={vista}
                  groups={ordenarPrincipios(Object.entries(agrupados.grupos.offlabel))}
                >
                  <Alert className="border-amber-500/30 bg-amber-500/10">
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
          </>
        )}
      </main>
    </>
  );
}
