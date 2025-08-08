"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Building2, Package, AlertCircle, RefreshCw, Clock, Shield } from "lucide-react"
import { useMedicamentosReales } from "@/hooks/use-medicamentos-reales"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Medicamento {
  codigo: string
  nombre: string
  marca: string
  laboratorio: string
  precio: number
  presentacion: string
  concentracion: string
  fechaActualizacion: string
}

export default function PreciosPage() {
  const [filtro, setFiltro] = useState("")
  const [medicamentosFiltrados, setMedicamentosFiltrados] = useState<Medicamento[]>([])
  const { medicamentos, loading, error, estadisticas, refetch } = useMedicamentosReales()

  // Filtrar medicamentos
  useEffect(() => {
    if (!medicamentos) {
      setMedicamentosFiltrados([])
      return
    }

    if (!filtro.trim()) {
      setMedicamentosFiltrados(medicamentos)
      return
    }

    const filtroLower = filtro.toLowerCase()
    const filtrados = medicamentos.filter(
      (med) =>
        med.nombre.toLowerCase().includes(filtroLower) ||
        med.marca.toLowerCase().includes(filtroLower) ||
        med.laboratorio.toLowerCase().includes(filtroLower),
    )

    setMedicamentosFiltrados(filtrados)
  }, [medicamentos, filtro])

  const formatearPrecio = (precio: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(precio)
  }

  const calcularPrecioConDescuento = (precio: number) => {
    return precio * 0.6 // 40% descuento = pagar 60%
  }

  const agruparPorAprobacion = (medicamentos: Medicamento[]) => {
    return medicamentos.reduce(
      (grupos, med) => {
        const nombre = med.nombre.toLowerCase()

        // Estimulantes aprobados para TDAH
        if (nombre.includes("metilfenidato")) {
          if (!grupos.estimulantes.metilfenidato) grupos.estimulantes.metilfenidato = []
          grupos.estimulantes.metilfenidato.push(med)
        }
        // No estimulantes aprobados para TDAH
        else if (nombre.includes("atomoxetina")) {
          if (!grupos.noestimulantes.atomoxetina) grupos.noestimulantes.atomoxetina = []
          grupos.noestimulantes.atomoxetina.push(med)
        }
        // Medicamentos off-label para TDAH
        else if (nombre.includes("modafinilo") || nombre.includes("armodafinilo") || nombre.includes("bupropion")) {
          if (nombre.includes("modafinilo") && !nombre.includes("armodafinilo")) {
            if (!grupos.offlabel.modafinilo) grupos.offlabel.modafinilo = []
            grupos.offlabel.modafinilo.push(med)
          } else if (nombre.includes("armodafinilo")) {
            if (!grupos.offlabel.armodafinilo) grupos.offlabel.armodafinilo = []
            grupos.offlabel.armodafinilo.push(med)
          } else if (nombre.includes("bupropion")) {
            if (!grupos.offlabel.bupropion) grupos.offlabel.bupropion = []
            grupos.offlabel.bupropion.push(med)
          }
        }

        return grupos
      },
      {
        estimulantes: {} as Record<string, Medicamento[]>,
        noestimulantes: {} as Record<string, Medicamento[]>,
        offlabel: {} as Record<string, Medicamento[]>,
      },
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Precios de Medicamentos TDAH</h1>
            <Skeleton className="h-10 w-full mb-6" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-white border-2">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-8 w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
  </div>
  <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Alert variant="destructive" className="bg-white border-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Error al cargar los precios: {error}
              <Button variant="outline" size="sm" onClick={() => refetch()} className="ml-4 bg-transparent">
                <RefreshCw className="h-4 w-4 mr-2" />
                Reintentar
              </Button>
            </AlertDescription>
          </Alert>
  </div>
  <Footer />
      </div>
    )
  }

  const medicamentosAgrupados = agruparPorAprobacion(medicamentosFiltrados)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">Precios de Medicamentos TDAH</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-3xl">
            Precios actualizados de medicamentos para TDAH desde Farmacity
          </p>

          {/* Info rápida */}
          {estadisticas && (
            <div className="mb-6">
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                <span className="font-medium text-purple-600 dark:text-purple-400">{estadisticas.con_precio}</span> de <span className="font-medium">{estadisticas.total}</span> medicamentos con precios disponibles
              </p>
            </div>
          )}

          {/* Búsqueda */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Buscá por nombre, marca o laboratorio..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="pl-12 h-10 bg-white/90 dark:bg-slate-800/90 border-0 shadow-md rounded-xl backdrop-blur-sm"
              />
            </div>
            <Button
              onClick={() => refetch(true)}
              className="h-10 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              <RefreshCw className="h-5 w-5 mr-2" />
              Actualizar
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-200 dark:bg-gray-700 border-y border-gray-300 dark:border-gray-600">
        <div className="container mx-auto px-4 py-8">
          {medicamentosFiltrados.length === 0 ? (
            <Alert className="bg-white border-2 border-amber-300">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>No se encontraron medicamentos que coincidan con lo que buscaste.</AlertDescription>
            </Alert>
          ) : (
            <Tabs defaultValue="agrupado" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white dark:bg-gray-800 border-2 dark:border-gray-600">
                <TabsTrigger value="agrupado">Por Aprobación</TabsTrigger>
                <TabsTrigger value="lista">Lista Completa</TabsTrigger>
              </TabsList>

              <TabsContent value="agrupado" className="space-y-8 mt-6">
                {/* Estimulantes Aprobados para TDAH */}
                {Object.keys(medicamentosAgrupados.estimulantes).length > 0 && (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-8 bg-green-500 rounded"></div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Estimulantes Aprobados para TDAH
                      </h2>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        Aprobados por FDA - Estimulantes
                      </Badge>
                    </div>

                    <Alert className="mb-6 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950 max-w-full overflow-hidden border-2">
                      <AlertCircle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800 dark:text-blue-200 break-words">
                        <strong>Importante:</strong> Otros estimulantes como Adderall (anfetamina mixta) y Vyvanse
                        (lisdexanfetamina) están aprobados por la FDA para TDAH pero no están disponibles en Argentina.
                        Solo el metilfenidato se comercializa en el país.
                      </AlertDescription>
                    </Alert>

                    {Object.entries(medicamentosAgrupados.estimulantes).map(([principio, meds]) => (
                      <div key={principio} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 capitalize text-gray-800 dark:text-gray-200">
                          {principio} ({meds.length} medicamentos)
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {meds.map((medicamento) => (
                            <Card
                              key={medicamento.codigo}
                              className="hover:shadow-md transition-shadow border-l-4 border-l-green-500 bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
                            >
                              <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-lg leading-tight">{medicamento.marca}</CardTitle>
                                  <div className="flex flex-col gap-1">
                                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                      Farmacity
                                    </Badge>
                                    <Badge
                                      variant="secondary"
                                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs"
                                    >
                                      Estimulante
                                    </Badge>
                                  </div>
                                </div>
                                <CardDescription>{medicamento.concentracion}</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <Building2 className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{medicamento.laboratorio}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Package className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{medicamento.presentacion}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">
                                    {new Date(medicamento.fechaActualizacion).toLocaleDateString("es-AR")}
                                  </span>
                                </div>

                                <div className="pt-2 border-t space-y-2">
                                  <div>
                                    <div className="text-sm text-gray-500 mb-1">Precio sin cobertura</div>
                                    <span className="text-2xl font-bold text-green-600">
                                      {formatearPrecio(medicamento.precio)}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <Shield className="h-4 w-4 text-blue-600" />
                                    <div>
                                      <div className="text-xs text-blue-700 dark:text-blue-300">Con prepaga/obra social (40% desc.)</div>
                                      <span className="text-lg font-bold text-blue-600">
                                        {formatearPrecio(calcularPrecioConDescuento(medicamento.precio))}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* No Estimulantes Aprobados para TDAH */}
                {Object.keys(medicamentosAgrupados.noestimulantes).length > 0 && (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 bg-blue-500 rounded"></div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        No Estimulantes Aprobados para TDAH
                      </h2>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      >
                        Aprobados por FDA - No Estimulantes
                      </Badge>
                    </div>

                    {Object.entries(medicamentosAgrupados.noestimulantes).map(([principio, meds]) => (
                      <div key={principio} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 capitalize text-gray-800 dark:text-gray-200">
                          {principio} ({meds.length} medicamentos)
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {meds.map((medicamento) => (
                            <Card
                              key={medicamento.codigo}
                              className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
                            >
                              <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-lg leading-tight">{medicamento.marca}</CardTitle>
                                  <div className="flex flex-col gap-1">
                                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                      Farmacity
                                    </Badge>
                                    <Badge
                                      variant="secondary"
                                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs"
                                    >
                                      No Estimulante
                                    </Badge>
                                  </div>
                                </div>
                                <CardDescription>{medicamento.concentracion}</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <Building2 className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{medicamento.laboratorio}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Package className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{medicamento.presentacion}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">
                                    {new Date(medicamento.fechaActualizacion).toLocaleDateString("es-AR")}
                                  </span>
                                </div>

                                <div className="pt-2 border-t space-y-2">
                                  <div>
                                    <div className="text-sm text-gray-500 mb-1">Precio sin cobertura</div>
                                    <span className="text-2xl font-bold text-green-600">
                                      {formatearPrecio(medicamento.precio)}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <Shield className="h-4 w-4 text-blue-600" />
                                    <div>
                                      <div className="text-xs text-blue-700 dark:text-blue-300">Con prepaga/obra social (40% desc.)</div>
                                      <span className="text-lg font-bold text-blue-600">
                                        {formatearPrecio(calcularPrecioConDescuento(medicamento.precio))}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Medicamentos Off-Label para TDAH */}
                {Object.keys(medicamentosAgrupados.offlabel).length > 0 && (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 bg-orange-500 rounded"></div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Medicamentos Off-Label para TDAH
                      </h2>
                      <Badge
                        variant="secondary"
                        className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                      >
                        Uso "Off-Label" (Fuera de Etiqueta)
                      </Badge>
                    </div>

                    <Alert className="mb-6 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950 border-2">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      <AlertDescription className="text-orange-800 dark:text-orange-200">
                        Estos medicamentos se usan para TDAH pero no están aprobados por la FDA específicamente para esta
                        indicación. Consultá siempre con tu médico antes de usar cualquier medicamento.
                      </AlertDescription>
                    </Alert>

                    {Object.entries(medicamentosAgrupados.offlabel).map(([principio, meds]) => (
                      <div key={principio} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 capitalize text-gray-800 dark:text-gray-200">
                          {principio} ({meds.length} medicamentos)
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {meds.map((medicamento) => (
                            <Card
                              key={medicamento.codigo}
                              className="hover:shadow-md transition-shadow border-l-4 border-l-orange-500 bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
                            >
                              <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-lg leading-tight">{medicamento.marca}</CardTitle>
                                  <div className="flex flex-col gap-1">
                                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                      Farmacity
                                    </Badge>
                                    <Badge
                                      variant="secondary"
                                      className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 text-xs"
                                    >
                                      Off-Label
                                    </Badge>
                                  </div>
                                </div>
                                <CardDescription>{medicamento.concentracion}</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <Building2 className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{medicamento.laboratorio}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Package className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{medicamento.presentacion}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">
                                    {new Date(medicamento.fechaActualizacion).toLocaleDateString("es-AR")}
                                  </span>
                                </div>

                                <div className="pt-2 border-t space-y-2">
                                  <div>
                                    <div className="text-sm text-gray-500 mb-1">Precio sin cobertura</div>
                                    <span className="text-2xl font-bold text-green-600">
                                      {formatearPrecio(medicamento.precio)}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <Shield className="h-4 w-4 text-blue-600" />
                                    <div>
                                      <div className="text-xs text-blue-700 dark:text-blue-300">Con prepaga/obra social (40% desc.)</div>
                                      <span className="text-lg font-bold text-blue-600">
                                        {formatearPrecio(calcularPrecioConDescuento(medicamento.precio))}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="lista" className="mt-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {medicamentosFiltrados.map((medicamento) => (
                      <Card
                        key={medicamento.codigo}
                        className="hover:shadow-md transition-shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
                      >
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg leading-tight">{medicamento.marca}</CardTitle>
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              Farmacity
                            </Badge>
                          </div>
                          <CardDescription>{medicamento.concentracion}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{medicamento.laboratorio}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{medicamento.presentacion}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">
                              {new Date(medicamento.fechaActualizacion).toLocaleDateString("es-AR")}
                            </span>
                          </div>

                          <div className="pt-2 border-t space-y-2">
                            <div>
                              <div className="text-sm text-gray-500 mb-1">Precio sin cobertura</div>
                              <span className="text-2xl font-bold text-green-600">
                                {formatearPrecio(medicamento.precio)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                              <Shield className="h-4 w-4 text-blue-600" />
                              <div>
                                <div className="text-xs text-blue-700 dark:text-blue-300">Con prepaga/obra social (40% desc.)</div>
                                <span className="text-lg font-bold text-blue-600">
                                  {formatearPrecio(calcularPrecioConDescuento(medicamento.precio))}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
