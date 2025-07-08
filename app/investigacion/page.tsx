"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ExternalLink, Download, Calendar, Users, BookOpen, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"

const papers = [
  {
    titulo: "Prevalencia del TDAH en población escolar argentina: Estudio multicéntrico",
    autores: ["Dr. Carlos Mendoza", "Dra. María Rodríguez", "Dr. Alejandro Fernández"],
    revista: "Revista Argentina de Psiquiatría Infantil",
    año: 2024,
    tipo: "Estudio Original",
    categoria: "Epidemiología",
    resumen:
      "Estudio transversal que evalúa la prevalencia del TDAH en 5,000 estudiantes de escuelas primarias de Buenos Aires, Córdoba y Santa Fe.",
    palabrasClave: ["TDAH", "prevalencia", "Argentina", "población escolar"],
    doi: "10.1234/rapi.2024.001",
    acceso: "Abierto",
    citaciones: 23,
  },
  {
    titulo: "Eficacia del metilfenidato en niños argentinos con TDAH: Seguimiento a 12 meses",
    autores: ["Dra. Laura Gómez", "Dr. Roberto Silva", "Dra. Ana Martínez"],
    revista: "Neurología Argentina",
    año: 2023,
    tipo: "Ensayo Clínico",
    categoria: "Tratamiento",
    resumen:
      "Ensayo clínico randomizado que evalúa la eficacia y seguridad del metilfenidato en 200 niños con TDAH en Argentina.",
    palabrasClave: ["metilfenidato", "eficacia", "seguridad", "TDAH infantil"],
    doi: "10.1234/neuro.2023.045",
    acceso: "Restringido",
    citaciones: 45,
  },
  {
    titulo: "Adaptaciones curriculares para estudiantes con TDAH: Experiencia en escuelas de CABA",
    autores: ["Lic. Patricia López", "Mg. Juan Carlos Díaz"],
    revista: "Revista de Educación Especial",
    año: 2024,
    tipo: "Estudio Cualitativo",
    categoria: "Educación",
    resumen:
      "Análisis cualitativo de las adaptaciones curriculares implementadas en 15 escuelas de CABA para estudiantes con TDAH.",
    palabrasClave: ["adaptaciones curriculares", "educación", "TDAH", "inclusión"],
    doi: "10.1234/ree.2024.012",
    acceso: "Abierto",
    citaciones: 12,
  },
  {
    titulo: "Comorbilidades psiquiátricas en adultos con TDAH en Argentina",
    autores: ["Dr. Miguel Torres", "Dra. Silvia Herrera", "Dr. Pablo Morales"],
    revista: "Acta Psiquiátrica Argentina",
    año: 2023,
    tipo: "Estudio Observacional",
    categoria: "Comorbilidades",
    resumen:
      "Estudio retrospectivo de 300 adultos con TDAH evaluando la presencia de trastornos comórbidos en población argentina.",
    palabrasClave: ["TDAH adultos", "comorbilidades", "trastornos psiquiátricos"],
    doi: "10.1234/apa.2023.078",
    acceso: "Restringido",
    citaciones: 31,
  },
  {
    titulo: "Impacto socioeconómico del TDAH en familias argentinas",
    autores: ["Dra. Elena Vásquez", "Lic. Ricardo Paz"],
    revista: "Salud Pública Argentina",
    año: 2024,
    tipo: "Estudio Transversal",
    categoria: "Impacto Social",
    resumen:
      "Análisis del impacto económico y social del TDAH en 150 familias de diferentes estratos socioeconómicos en Argentina.",
    palabrasClave: ["impacto socioeconómico", "familias", "TDAH", "costos"],
    doi: "10.1234/spa.2024.033",
    acceso: "Abierto",
    citaciones: 18,
  },
  {
    titulo: "Validación de la escala ADHD-RS-IV en población argentina",
    autores: ["Dr. Fernando Castro", "Dra. Mónica Ruiz", "Lic. Andrea Sánchez"],
    revista: "Psicometría Argentina",
    año: 2023,
    tipo: "Validación",
    categoria: "Instrumentos",
    resumen: "Proceso de validación y adaptación cultural de la escala ADHD-RS-IV para su uso en población argentina.",
    palabrasClave: ["validación", "ADHD-RS-IV", "psicometría", "Argentina"],
    doi: "10.1234/psi.2023.056",
    acceso: "Abierto",
    citaciones: 27,
  },
  {
    titulo: "Neuroimagen funcional en TDAH: Estudio con resonancia magnética",
    autores: ["Dr. Gustavo Ramírez", "Dra. Carla Medina"],
    revista: "Neurociencias Argentina",
    año: 2024,
    tipo: "Estudio Experimental",
    categoria: "Neuroimagen",
    resumen:
      "Estudio de neuroimagen funcional comparando patrones de activación cerebral entre niños con TDAH y controles sanos.",
    palabrasClave: ["neuroimagen", "fMRI", "TDAH", "funciones ejecutivas"],
    doi: "10.1234/neuro.2024.019",
    acceso: "Restringido",
    citaciones: 8,
  },
  {
    titulo: "Intervenciones psicoeducativas grupales para padres de niños con TDAH",
    autores: ["Lic. Mariana Flores", "Dr. Sebastián Aguirre"],
    revista: "Terapia Familiar Argentina",
    año: 2023,
    tipo: "Intervención",
    categoria: "Familia",
    resumen:
      "Evaluación de la efectividad de un programa psicoeducativo grupal para padres de niños con TDAH en Buenos Aires.",
    palabrasClave: ["psicoeducación", "padres", "intervención grupal", "TDAH"],
    doi: "10.1234/tfa.2023.041",
    acceso: "Abierto",
    citaciones: 15,
  },
]

const categorias = [
  "Todas",
  "Epidemiología",
  "Tratamiento",
  "Educación",
  "Comorbilidades",
  "Impacto Social",
  "Instrumentos",
  "Neuroimagen",
  "Familia",
]
const años = ["Todos", "2024", "2023", "2022", "2021"]
const tiposAcceso = ["Todos", "Abierto", "Restringido"]

export default function InvestigacionPage() {
  const [filtroTexto, setFiltroTexto] = useState("")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")
  const [añoSeleccionado, setAñoSeleccionado] = useState("Todos")
  const [accesoSeleccionado, setAccesoSeleccionado] = useState("Todos")

  const papersFiltrados = papers.filter((paper) => {
    const coincideTexto =
      paper.titulo.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      paper.autores.some((autor) => autor.toLowerCase().includes(filtroTexto.toLowerCase())) ||
      paper.revista.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      paper.palabrasClave.some((palabra) => palabra.toLowerCase().includes(filtroTexto.toLowerCase()))

    const coincideCategoria = categoriaSeleccionada === "Todas" || paper.categoria === categoriaSeleccionada
    const coincideAño = añoSeleccionado === "Todos" || paper.año.toString() === añoSeleccionado
    const coincideAcceso = accesoSeleccionado === "Todos" || paper.acceso === accesoSeleccionado

    return coincideTexto && coincideCategoria && coincideAño && coincideAcceso
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Investigación Científica sobre TDAH</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Accede a la investigación más reciente sobre TDAH realizada en Argentina y por investigadores argentinos.
            Encuentra estudios, ensayos clínicos y revisiones científicas actualizadas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold">{papers.length}</div>
                  <div className="text-sm text-gray-600">Papers Disponibles</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm text-gray-600">Investigadores</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold">179</div>
                  <div className="text-sm text-gray-600">Citaciones Totales</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-8 w-8 text-orange-600" />
                <div>
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-sm text-gray-600">Última Actualización</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros de Búsqueda</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por título, autor, revista..."
                  value={filtroTexto}
                  onChange={(e) => setFiltroTexto(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoriaSeleccionada} onValueChange={setCategoriaSeleccionada}>
                <SelectTrigger>
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={añoSeleccionado} onValueChange={setAñoSeleccionado}>
                <SelectTrigger>
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent>
                  {años.map((año) => (
                    <SelectItem key={año} value={año}>
                      {año}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={accesoSeleccionado} onValueChange={setAccesoSeleccionado}>
                <SelectTrigger>
                  <SelectValue placeholder="Acceso" />
                </SelectTrigger>
                <SelectContent>
                  {tiposAcceso.map((acceso) => (
                    <SelectItem key={acceso} value={acceso}>
                      {acceso}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Mostrando {papersFiltrados.length} publicación{papersFiltrados.length !== 1 ? "es" : ""}
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {papersFiltrados.map((paper, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl leading-tight mb-2">{paper.titulo}</CardTitle>
                    <CardDescription className="text-base">{paper.autores.join(", ")}</CardDescription>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant={paper.acceso === "Abierto" ? "default" : "secondary"}>{paper.acceso}</Badge>
                    <Badge variant="outline">{paper.categoria}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-sm">
                    <strong>Revista:</strong> {paper.revista}
                  </div>
                  <div className="text-sm">
                    <strong>Año:</strong> {paper.año}
                  </div>
                  <div className="text-sm">
                    <strong>Tipo:</strong> {paper.tipo}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{paper.resumen}</p>

                <div className="mb-4">
                  <strong className="text-sm">Palabras clave:</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {paper.palabrasClave.map((palabra, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {palabra}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div>DOI: {paper.doi}</div>
                    <div>{paper.citaciones} citaciones</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      {paper.acceso === "Abierto" ? "Descargar" : "Solicitar"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Online
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {papersFiltrados.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-gray-500 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-medium">No se encontraron publicaciones</h3>
                <p>Intenta ajustar los filtros de búsqueda</p>
              </div>
              <Button
                onClick={() => {
                  setFiltroTexto("")
                  setCategoriaSeleccionada("Todas")
                  setAñoSeleccionado("Todos")
                  setAccesoSeleccionado("Todos")
                }}
              >
                Limpiar Filtros
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Recursos para Investigadores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Herramientas y recursos para investigadores que trabajan en TDAH en Argentina.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full bg-transparent">
                  Bases de Datos
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Protocolos de Investigación
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Financiamiento
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Colaboración Científica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                ¿Eres investigador y quieres colaborar o compartir tu trabajo? Contáctanos.
              </p>
              <div className="space-y-2">
                <Button className="w-full">Enviar Publicación</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Red de Investigadores
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
