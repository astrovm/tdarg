"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { getMedicamentoSourceLabel } from "@/lib/medicamentos/source-label";
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
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
        <Header />

        <PageHero
          title="Precios de medicamentos"
          description="Precios actualizados de Farmacity para medicamentos de TDAH"
        >
          <div className="mb-6 flex justify-center">
            <Skeleton className="h-8 w-64 rounded-full" />
          </div>

          <div className="flex gap-4">
            <div className="relative flex-1">
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <Skeleton className="h-10 w-32 rounded-xl" />
          </div>
        </PageHero>

        <div className="bg-slate-100 dark:bg-slate-950">
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
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
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
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Header />

      {/* Header Section */}
        <PageHero
          title="Precios de medicamentos"
          description="Precios de Farmacity actualizados automáticamente. Incluye precio por mg y estimación con cobertura."
        >
        {/* Info rápida */}
        {estadisticas && (
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1.5">
              <Package className="h-4 w-4 text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-foreground">
                  {estadisticas.con_precio}
                </span>{" "}
                de <span className="font-medium">{estadisticas.total}</span>{" "}
                medicamentos con precios disponibles
              </span>
            </div>
          </div>
        )}

        {/* Búsqueda */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              placeholder="Buscá medicamento, marca o laboratorio..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="pl-12 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm"
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
      </PageHero>

      {/* Content Section */}
      <div className="bg-slate-100 dark:bg-slate-950">
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
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Estimulantes usados para TDAH
                      </h2>
                     </div>


                     {estimulantesOrdenados.map(
                      ([principio, meds]) => (
                        <div key={principio} className="mb-8">
                          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            <span className="capitalize">{principio}</span> ({meds.length} medicamentos)
                          </h3>
                          {principio === "lisdexanfetamina" && (
                            <Alert className="mb-4 bg-muted/40 border">
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
                              <Card
                                key={medicamento.codigo}
                                className="bg-card border shadow-sm"
                              >
                                <CardHeader className="pb-3">
                                  <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg leading-tight">
                                      {formatMedicationName(medicamento.marca)}
                                    </CardTitle>
                                    <div className="flex flex-col gap-1">
                                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                        {getMedicamentoSourceLabel(
                                          medicamento.source
                                        )}
                                      </Badge>
                                      <Badge
                                        variant="secondary"
                                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs"
                                      >
                                        Estimulante
                                      </Badge>
                                    </div>
                                  </div>
                                  <CardDescription>
                                    {medicamento.concentracion}
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                  <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {medicamento.laboratorio}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <Package className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {formatMedicationPresentation(medicamento)}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {new Date(
                                        medicamento.fechaActualizacion
                                      ).toLocaleDateString("es-AR")}
                                    </span>
                                  </div>

                                  <div className="pt-2 border-t space-y-2">
                                    <div>
                                      <div className="text-sm text-gray-500 mb-1">
                                        Precio sin cobertura
                                      </div>
                                      <span className="text-2xl font-bold text-foreground">
                                        {formatPrice(medicamento.precio)}
                                      </span>
                                    </div>
                                    {pricePerMg(medicamento) && (
                                      <div>
                                        <div className="text-sm text-gray-500 mb-1">
                                          Precio por mg
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                          {formatPrice(pricePerMg(medicamento)!)}
                                        </span>
                                      </div>
                                    )}
                                    <div className="flex items-center gap-2 p-2 bg-muted/40 rounded-lg border">
                                      <Shield className="h-4 w-4 text-primary" />
                                      <div>
                                        <div className="text-sm font-medium text-foreground">
                                          {isLisdexanfetamina(medicamento)
                                            ? "Precio teórico con 40% desc."
                                            : "Con prepaga/obra social (40% desc.)"}
                                        </div>
                                        <span className="text-xl font-bold text-foreground">
                                          {formatPrice(
                                            priceWithCoverage(
                                              medicamento.precio
                                            )
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
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
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="flex items-center gap-2 mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        No estimulantes usados para TDAH
                      </h2>
                    </div>

                    {Object.entries(medicamentosAgrupados.noestimulantes).map(
                      ([principio, meds]) => (
                        <div key={principio} className="mb-8">
                          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            <span className="capitalize">{principio}</span> ({meds.length} medicamentos)
                          </h3>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {meds.map((medicamento) => (
                              <Card
                                key={medicamento.codigo}
                                className="bg-card border shadow-sm"
                              >
                                <CardHeader className="pb-3">
                                  <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg leading-tight">
                                      {formatMedicationName(medicamento.marca)}
                                    </CardTitle>
                                    <div className="flex flex-col gap-1">
                                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                        {getMedicamentoSourceLabel(
                                          medicamento.source
                                        )}
                                      </Badge>
                                      <Badge
                                        variant="secondary"
                                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs"
                                      >
                                        No Estimulante
                                      </Badge>
                                    </div>
                                  </div>
                                  <CardDescription>
                                    {medicamento.concentracion}
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                  <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {medicamento.laboratorio}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <Package className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {formatMedicationPresentation(medicamento)}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {new Date(
                                        medicamento.fechaActualizacion
                                      ).toLocaleDateString("es-AR")}
                                    </span>
                                  </div>

                                  <div className="pt-2 border-t space-y-2">
                                    <div>
                                      <div className="text-sm text-gray-500 mb-1">
                                        Precio sin cobertura
                                      </div>
                                      <span className="text-2xl font-bold text-foreground">
                                        {formatPrice(medicamento.precio)}
                                      </span>
                                    </div>
                                    {pricePerMg(medicamento) && (
                                      <div>
                                        <div className="text-sm text-gray-500 mb-1">
                                          Precio por mg
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                          {formatPrice(pricePerMg(medicamento)!)}
                                        </span>
                                      </div>
                                    )}
                                    <div className="flex items-center gap-2 p-2 bg-muted/40 rounded-lg border">
                                      <Shield className="h-4 w-4 text-primary" />
                                      <div>
                                        <div className="text-sm font-medium text-foreground">
                                          Con prepaga/obra social (40% desc.)
                                        </div>
                                        <span className="text-xl font-bold text-foreground">
                                          {formatPrice(
                                            priceWithCoverage(
                                              medicamento.precio
                                            )
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Medicamentos con uso off-label para TDAH */}
                {Object.keys(medicamentosAgrupados.offlabel).length > 0 && (
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="flex items-center gap-2 mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Medicamentos con uso off-label para TDAH
                      </h2>
                    </div>

                    <Alert className="mb-6 bg-muted/40 border">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-foreground">
                        Estos medicamentos pueden usarse en algunos casos de
                        TDAH, pero no son la indicación principal. Consultá con
                        tu médico antes de usar cualquier medicamento.
                      </AlertDescription>
                    </Alert>

                    {Object.entries(medicamentosAgrupados.offlabel).map(
                      ([principio, meds]) => (
                        <div key={principio} className="mb-8">
                          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            <span className="capitalize">{principio}</span> ({meds.length} medicamentos)
                          </h3>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {meds.map((medicamento) => (
                              <Card
                                key={medicamento.codigo}
                                className="bg-card border shadow-sm"
                              >
                                <CardHeader className="pb-3">
                                  <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg leading-tight">
                                      {formatMedicationName(medicamento.marca)}
                                    </CardTitle>
                                    <div className="flex flex-col gap-1">
                                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                        {getMedicamentoSourceLabel(
                                          medicamento.source
                                        )}
                                      </Badge>
                                      <Badge
                                        variant="secondary"
                                        className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 text-xs"
                                      >
                                        Uso off-label
                                      </Badge>
                                    </div>
                                  </div>
                                  <CardDescription>
                                    {medicamento.concentracion}
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                  <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {medicamento.laboratorio}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <Package className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {formatMedicationPresentation(medicamento)}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">
                                      {new Date(
                                        medicamento.fechaActualizacion
                                      ).toLocaleDateString("es-AR")}
                                    </span>
                                  </div>

                                  <div className="pt-2 border-t space-y-2">
                                    <div>
                                      <div className="text-sm text-gray-500 mb-1">
                                        Precio sin cobertura
                                      </div>
                                      <span className="text-2xl font-bold text-foreground">
                                        {formatPrice(medicamento.precio)}
                                      </span>
                                    </div>
                                    {pricePerMg(medicamento) && (
                                      <div>
                                        <div className="text-sm text-gray-500 mb-1">
                                          Precio por mg
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                          {formatPrice(pricePerMg(medicamento)!)}
                                        </span>
                                      </div>
                                    )}
                                    <div className="flex items-center gap-2 p-2 bg-muted/40 rounded-lg border">
                                      <Shield className="h-4 w-4 text-primary" />
                                      <div>
                                        <div className="text-sm font-medium text-foreground">
                                          Con prepaga/obra social (40% desc.)
                                        </div>
                                        <span className="text-xl font-bold text-foreground">
                                          {formatPrice(
                                            priceWithCoverage(
                                              medicamento.precio
                                            )
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
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
