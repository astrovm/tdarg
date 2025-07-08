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

  const agruparPorPrincipio = (medicamentos: Medicamento[]) => {
    return medicamentos.reduce(
      (grupos, med) => {
        const principio = med.nombre.toLowerCase().includes("metilfenidato") ? "metilfenidato" : "atomoxetina"
        if (!grupos[principio]) {
          grupos[principio] = []
        }
        grupos[principio].push(med)
        return grupos
      },
      {} as Record<string, Medicamento[]>,
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

  const medicamentosAgrupados = agruparPorPrincipio(medicamentosFiltrados)

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
              <TabsTrigger value="agrupado">Por Principio Activo</TabsTrigger>
              <TabsTrigger value="lista">Lista Completa</TabsTrigger>
            </TabsList>

            <TabsContent value="agrupado" className="space-y-6">
              {Object.entries(medicamentosAgrupados).map(([principio, meds]) => (
                <div key={principio}>
                  <h2 className="text-xl font-semibold mb-4 capitalize text-gray-900 dark:text-white">
                    {principio} ({meds.length} medicamentos)
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {meds.map((medicamento) => (
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
