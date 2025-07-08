"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Building2, Package, AlertCircle, RefreshCw, Pill, Clock } from "lucide-react"
import { useMedicamentosReales } from "@/hooks/use-medicamentos-reales"
import { Header } from "@/components/header"

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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <Header />

        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Precios de Medicamentos TDAH</h1>
            <Skeleton className="h-10 w-full mb-6" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
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
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <Header />

        <div className="container mx-auto px-4 py-8">
          <Alert variant="destructive">
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
      </div>
    )
  }

  const medicamentosAgrupados = agruparPorAprobacion(medicamentosFiltrados)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Precios de Medicamentos TDAH</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Precios actualizados de medicamentos para TDAH desde Farmacity
          </p>

          {/* Estadísticas */}
          {estadisticas && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Pill className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Total</p>
                      <p className="text-2xl font-bold">{estadisticas.total}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Con Precio</p>
                      <p className="text-2xl font-bold">{estadisticas.con_precio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Búsqueda */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nombre, marca o laboratorio..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={() => refetch(true)} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualizar
            </Button>
          </div>
        </div>

        {/* Contenido */}
        {medicamentosFiltrados.length === 0 ? (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>No se encontraron medicamentos que coincidan con tu búsqueda.</AlertDescription>
          </Alert>
        ) : (
          <Tabs defaultValue="agrupado" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="agrupado">Por Aprobación</TabsTrigger>
              <TabsTrigger value="lista">Lista Completa</TabsTrigger>
            </TabsList>

            <TabsContent value="agrupado" className="space-y-8">
              {/* Estimulantes Aprobados para TDAH */}
              {Object.keys(medicamentosAgrupados.estimulantes).length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-8 bg-green-500 rounded"></div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Estimulantes Aprobados para TDAH
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    >
                      FDA Aprobados - Estimulantes
                    </Badge>
                  </div>

                  {Object.entries(medicamentosAgrupados.estimulantes).map(([principio, meds]) => (
                    <div key={principio} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 capitalize text-gray-800 dark:text-gray-200">
                        {principio} ({meds.length} medicamentos)
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {meds.map((medicamento) => (
                          <Card
                            key={medicamento.codigo}
                            className="hover:shadow-md transition-shadow border-l-4 border-l-green-500"
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

                              <div className="pt-2 border-t">
                                <span className="text-2xl font-bold text-green-600">
                                  {formatearPrecio(medicamento.precio)}
                                </span>
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
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-8 bg-blue-500 rounded"></div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      No Estimulantes Aprobados para TDAH
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      FDA Aprobados - No Estimulantes
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
                            className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500"
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

                              <div className="pt-2 border-t">
                                <span className="text-2xl font-bold text-green-600">
                                  {formatearPrecio(medicamento.precio)}
                                </span>
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
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-8 bg-orange-500 rounded"></div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Medicamentos Off-Label para TDAH
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                    >
                      Uso Off-Label
                    </Badge>
                  </div>

                  <Alert className="mb-6 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-800 dark:text-orange-200">
                      Estos medicamentos se usan para TDAH pero no están específicamente aprobados por FDA para esta
                      indicación. Siempre consulte con su médico antes de usar cualquier medicamento.
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
                            className="hover:shadow-md transition-shadow border-l-4 border-l-orange-500"
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

                              <div className="pt-2 border-t">
                                <span className="text-2xl font-bold text-green-600">
                                  {formatearPrecio(medicamento.precio)}
                                </span>
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

            <TabsContent value="lista">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {medicamentosFiltrados.map((medicamento) => (
                  <Card key={medicamento.codigo} className="hover:shadow-md transition-shadow">
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

                      <div className="pt-2 border-t">
                        <span className="text-2xl font-bold text-green-600">{formatearPrecio(medicamento.precio)}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
