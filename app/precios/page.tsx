"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  Search,
  Building2,
  Package,
  AlertCircle,
  RefreshCw,
  Clock,
  Shield,
} from "lucide-react";
import { useMedicamentosReales } from "@/hooks/use-medicamentos-reales";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import type { Medicamento } from "@/lib/medicamentos/types";
import {
  formatMedicationName,
  formatMedicationPresentation,
  formatPrice,
  pricePerMg,
  priceWithCoverage,
  groupByApproval,
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

function isLisdexanfetamina(medicamento: Medicamento): boolean {
  return medicamento.nombre.toLowerCase().includes("lisdexanfetamina");
}

const priceTone = {
  stimulant: {
    heading: "text-emerald-700 dark:text-emerald-300",
    price: "text-emerald-700 dark:text-emerald-300",
    chip: "border-emerald-500/25 bg-emerald-500/10",
    icon: "text-emerald-600 dark:text-emerald-300",
  },
  nonstimulant: {
    heading: "text-sky-700 dark:text-sky-300",
    price: "text-sky-700 dark:text-sky-300",
    chip: "border-sky-500/25 bg-sky-500/10",
    icon: "text-sky-600 dark:text-sky-300",
  },
  offlabel: {
    heading: "text-amber-700 dark:text-amber-300",
    price: "text-amber-700 dark:text-amber-300",
    chip: "border-amber-500/25 bg-amber-500/10",
    icon: "text-amber-600 dark:text-amber-300",
  },
};

type PriceTone = keyof typeof priceTone;

function MedicationPriceCard({
  medicamento,
  tone,
  coverageLabel,
}: {
  medicamento: Medicamento;
  tone: PriceTone;
  coverageLabel: string;
}) {
  const style = priceTone[tone];
  const perMg = pricePerMg(medicamento);

  return (
    <Card
      className="bg-card border shadow-sm"
    >
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
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>
              {new Date(medicamento.fechaActualizacion).toLocaleDateString(
                "es-AR"
              )}
            </span>
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

        <div className={`flex items-center gap-3 rounded-lg border p-3 ${style.chip}`}>
          <Shield className={`h-4 w-4 shrink-0 ${style.icon}`} />
          <div>
            <div className="text-xs font-medium text-muted-foreground">
              {coverageLabel}
            </div>
            <div className="text-xl font-bold text-foreground">
              {formatPrice(priceWithCoverage(medicamento.precio))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PreciosPage() {
  const [filtro, setFiltro] = useState("");
  const [medicamentosFiltrados, setMedicamentosFiltrados] = useState<
    Medicamento[]
  >([]);
  const { medicamentos, loading, error, estadisticas, refetch } =
    useMedicamentosReales();

  // Filtrar medicamentos
  useEffect(() => {
    if (!medicamentos) {
      setMedicamentosFiltrados([]);
      return;
    }

    if (!filtro.trim()) {
      setMedicamentosFiltrados(sortMedicamentosAlphabetically(medicamentos));
      return;
    }

    const filtroLower = filtro.toLowerCase();
    const filtrados = medicamentos.filter(
      (med) =>
        med.nombre.toLowerCase().includes(filtroLower) ||
        med.marca.toLowerCase().includes(filtroLower) ||
        med.laboratorio.toLowerCase().includes(filtroLower)
    );

    setMedicamentosFiltrados(sortMedicamentosAlphabetically(filtrados));
  }, [medicamentos, filtro]);

  const medicamentosAgrupados = useMemo(
    () => groupByApproval(medicamentosFiltrados),
    [medicamentosFiltrados]
  );

  const estimulantesOrdenados = useMemo(() => {
    const orden = ["lisdexanfetamina", "metilfenidato"];
    const entries = Object.entries(medicamentosAgrupados.estimulantes);

    return entries.sort(([a], [b]) => {
      const indexA = orden.indexOf(a);
      const indexB = orden.indexOf(b);

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
  }, [medicamentosAgrupados.estimulantes]);

  if (loading) {
    return (
      <div className="min-h-screen bg-muted/30">
        <Header />

        <PageHero
          title="Precios de medicamentos"
          description="Compará precio, presentación y estimación con cobertura."
        >
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <Skeleton className="h-10 w-32 rounded-xl" />
          </div>
        </PageHero>

        <div className="bg-muted/30">
          <div className="container mx-auto px-4 py-8">
            <div className="space-y-8 mt-6">
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-1 w-8 rounded" />
                    <Skeleton className="h-8 w-72" />
                    <Skeleton className="h-6 w-40 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full mb-6" />
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="mb-8">
                      <Skeleton className="h-7 w-56 mb-4" />
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, j) => (
                          <Card key={j} className="bg-card border shadow-sm">
                            <CardHeader className="pb-3">
                              <Skeleton className="h-6 w-3/4 mb-2" />
                              <div className="flex gap-2">
                                <Skeleton className="h-5 w-16 rounded-full" />
                                <Skeleton className="h-5 w-14 rounded-full" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <Skeleton className="h-4 w-full mb-1" />
                              <Skeleton className="h-4 w-2/3 mb-3" />
                              <Skeleton className="h-8 w-1/3" />
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-1 w-8 rounded" />
                    <Skeleton className="h-8 w-64" />
                    <Skeleton className="h-6 w-40 rounded-full" />
                  </div>
                  <div className="mb-8">
                    <Skeleton className="h-7 w-48 mb-4" />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {Array.from({ length: 2 }).map((_, j) => (
                        <Card key={j} className="bg-card border shadow-sm">
                          <CardHeader className="pb-3">
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <div className="flex gap-2">
                              <Skeleton className="h-5 w-16 rounded-full" />
                              <Skeleton className="h-5 w-14 rounded-full" />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Skeleton className="h-4 w-full mb-1" />
                            <Skeleton className="h-4 w-2/3 mb-3" />
                            <Skeleton className="h-8 w-1/3" />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                 </div>
               </div>
           </div>
         </div>
       </div>
     );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-muted/30">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Alert variant="destructive" className="bg-card border">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Error al cargar los precios: {error}
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                className="ml-4 bg-transparent"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reintentar
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      {/* Header Section */}
        <PageHero
          title="Precios de medicamentos"
          description="Compará precio, presentación y estimación con cobertura."
        >
        {/* Búsqueda */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              placeholder="Buscá medicamento, marca o laboratorio..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="pl-12 h-10 rounded-lg"
            />
          </div>
          <Button
            onClick={() => refetch(true)}
            className="h-10 px-4"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Actualizar
          </Button>
        </div>
        {estadisticas && (
          <p className="mt-3 text-center text-sm text-muted-foreground">
            {estadisticas.con_precio} de {estadisticas.total} medicamentos con
            precio disponible.
          </p>
        )}
      </PageHero>

      {/* Content Section */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {medicamentosFiltrados.length === 0 ? (
            <Alert className="bg-card border">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No se encontraron medicamentos que coincidan con lo que
                buscaste.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-8 mt-6">
                {/* Estimulantes usados para TDAH */}
                {Object.keys(medicamentosAgrupados.estimulantes).length > 0 && (
                  <div className="p-6 rounded-lg border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-1.5 rounded-full bg-emerald-500" />
                      <h2 className="text-2xl font-bold text-foreground">
                        Estimulantes usados para TDAH
                      </h2>
                     </div>


                     {estimulantesOrdenados.map(
                      ([principio, meds]) => (
                        <div key={principio} className="mb-8">
                          <h3 className={`text-xl font-semibold mb-4 ${priceTone.stimulant.heading}`}>
                            <span className="capitalize">{principio}</span> ({meds.length} medicamentos)
                          </h3>
                          {principio === "lisdexanfetamina" && (
                            <Alert className="mb-4 border-amber-500/30 bg-amber-500/10">
                              <AlertCircle className="h-4 w-4 text-amber-600" />
                              <AlertDescription className="text-sm text-foreground">
                                La lisdexanfetamina es nueva en Argentina. Las
                                obras sociales y prepagas todavía no suelen
                                cubrirla y no está incluida en el PMO. El precio
                                con descuento es solo una referencia teórica.
                              </AlertDescription>
                            </Alert>
                          )}
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {meds.map((medicamento) => (
                              <MedicationPriceCard
                                key={medicamento.codigo}
                                medicamento={medicamento}
                                tone="stimulant"
                                coverageLabel={
                                  isLisdexanfetamina(medicamento)
                                    ? "Precio teórico con 40% desc."
                                    : "Con prepaga/obra social"
                                }
                              />
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* No estimulantes usados para TDAH */}
                {Object.keys(medicamentosAgrupados.noestimulantes).length >
                  0 && (
                  <div className="p-6 rounded-lg border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-1.5 rounded-full bg-sky-500" />
                      <h2 className="text-2xl font-bold text-foreground">
                        No estimulantes usados para TDAH
                      </h2>
                    </div>

                    {Object.entries(medicamentosAgrupados.noestimulantes).map(
                      ([principio, meds]) => (
                        <div key={principio} className="mb-8">
                          <h3 className={`text-xl font-semibold mb-4 ${priceTone.nonstimulant.heading}`}>
                            <span className="capitalize">{principio}</span> ({meds.length} medicamentos)
                          </h3>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {meds.map((medicamento) => (
                              <MedicationPriceCard
                                key={medicamento.codigo}
                                medicamento={medicamento}
                                tone="nonstimulant"
                                coverageLabel="Con prepaga/obra social"
                              />
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Medicamentos con uso off-label para TDAH */}
                {Object.keys(medicamentosAgrupados.offlabel).length > 0 && (
                  <div className="p-6 rounded-lg border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-1.5 rounded-full bg-amber-500" />
                      <h2 className="text-2xl font-bold text-foreground">
                        Medicamentos con uso off-label para TDAH
                      </h2>
                    </div>

                    <Alert className="mb-6 border-amber-500/30 bg-amber-500/10">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-foreground">
                        Estos medicamentos pueden usarse en algunos casos de
                        TDAH, pero no son la indicación principal. Consultá con
                        tu médico antes de usar cualquier medicamento.
                      </AlertDescription>
                    </Alert>

                    {Object.entries(medicamentosAgrupados.offlabel).map(
                      ([principio, meds]) => (
                        <div key={principio} className="mb-8">
                          <h3 className={`text-xl font-semibold mb-4 ${priceTone.offlabel.heading}`}>
                            <span className="capitalize">{principio}</span> ({meds.length} medicamentos)
                          </h3>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {meds.map((medicamento) => (
                              <MedicationPriceCard
                                key={medicamento.codigo}
                                medicamento={medicamento}
                                tone="offlabel"
                                coverageLabel="Con prepaga/obra social"
                              />
                            ))}
                          </div>
                        </div>
                      )
                    )}
                   </div>
                 )}
               </div>
           )}
         </div>
       </div>
     </div>
   );
 }
