"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Phone, Mail, Star, Clock } from "lucide-react"
import { Header } from "@/components/header"

const medicos = [
  {
    nombre: "Dr. Carlos Mendoza",
    especialidad: "Psiquiatra Infantil",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "Av. Corrientes 1234, Piso 5",
    telefono: "+54 11 4567-8901",
    email: "cmendoza@hospital.com",
    hospital: "Hospital de Niños Ricardo Gutiérrez",
    experiencia: "15 años",
    rating: 4.8,
    obraSocial: ["OSDE", "Swiss Medical", "Galeno"],
    horarios: "Lun-Vie 9:00-17:00",
  },
  {
    nombre: "Dra. María Elena Rodríguez",
    especialidad: "Neuróloga Pediátrica",
    provincia: "Buenos Aires",
    ciudad: "La Plata",
    direccion: "Calle 7 N° 456",
    telefono: "+54 221 456-7890",
    email: "mrodriguez@clinica.com",
    hospital: "Hospital de Niños Sor María Ludovica",
    experiencia: "12 años",
    rating: 4.9,
    obraSocial: ["IOMA", "OSDE", "Medicus"],
    horarios: "Mar-Jue 14:00-18:00",
  },
  {
    nombre: "Dr. Alejandro Fernández",
    especialidad: "Psiquiatra de Adultos",
    provincia: "Córdoba",
    ciudad: "Córdoba Capital",
    direccion: "Av. Colón 789",
    telefono: "+54 351 234-5678",
    email: "afernandez@psiquiatria.com",
    hospital: "Hospital Privado Universitario",
    experiencia: "20 años",
    rating: 4.7,
    obraSocial: ["APROSS", "OSDE", "Sancor Salud"],
    horarios: "Lun-Mie-Vie 10:00-16:00",
  },
  {
    nombre: "Dra. Laura Gómez",
    especialidad: "Psicóloga Clínica",
    provincia: "Santa Fe",
    ciudad: "Rosario",
    direccion: "San Martín 1122",
    telefono: "+54 341 567-8901",
    email: "lgomez@psicologia.com",
    hospital: "Centro de Salud Mental",
    experiencia: "8 años",
    rating: 4.6,
    obraSocial: ["IAPOS", "OSDE", "Federada Salud"],
    horarios: "Lun-Vie 8:00-14:00",
  },
  {
    nombre: "Dr. Roberto Silva",
    especialidad: "Neuropediatra",
    provincia: "Mendoza",
    ciudad: "Mendoza Capital",
    direccion: "Las Heras 567",
    telefono: "+54 261 345-6789",
    email: "rsilva@neuro.com",
    hospital: "Hospital Pediátrico Humberto Notti",
    experiencia: "18 años",
    rating: 4.8,
    obraSocial: ["OSEP", "OSDE", "Prevención Salud"],
    horarios: "Mar-Jue 9:00-13:00",
  },
  {
    nombre: "Dra. Ana Martínez",
    especialidad: "Psiquiatra Infantil",
    provincia: "Tucumán",
    ciudad: "San Miguel de Tucumán",
    direccion: "24 de Septiembre 890",
    telefono: "+54 381 456-7890",
    email: "amartinez@infantil.com",
    hospital: "Hospital del Niño Jesús",
    experiencia: "14 años",
    rating: 4.7,
    obraSocial: ["OSPIT", "OSDE", "Medife"],
    horarios: "Lun-Mie-Vie 15:00-19:00",
  },
]

const provincias = [
  "Buenos Aires",
  "Córdoba",
  "Santa Fe",
  "Mendoza",
  "Tucumán",
  "Entre Ríos",
  "Salta",
  "Misiones",
  "Chaco",
  "Corrientes",
  "Santiago del Estero",
  "San Juan",
  "Jujuy",
  "Río Negro",
  "Formosa",
  "Neuquén",
  "Chubut",
  "San Luis",
  "Catamarca",
  "La Rioja",
  "La Pampa",
  "Santa Cruz",
  "Tierra del Fuego",
]

export default function MedicosPage() {
  const [filtroNombre, setFiltroNombre] = useState("")
  const [provincia, setProvincia] = useState("todas")
  const [especialidad, setEspecialidad] = useState("todas")

  const medicosFiltrados = medicos.filter((medico) => {
    const coincideNombre =
      medico.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) ||
      medico.ciudad.toLowerCase().includes(filtroNombre.toLowerCase()) ||
      medico.hospital.toLowerCase().includes(filtroNombre.toLowerCase())

    const coincideProvincia = provincia === "todas" || medico.provincia === provincia
    const coincideEspecialidad = especialidad === "todas" || medico.especialidad === especialidad

    return coincideNombre && coincideProvincia && coincideEspecialidad
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Directorio de Especialistas en TDAH</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Encuentra profesionales especializados en el diagnóstico y tratamiento del TDAH en tu provincia. Todos los
            médicos listados tienen experiencia específica en trastornos de atención.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Buscar Especialistas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por nombre, ciudad o hospital..."
                  value={filtroNombre}
                  onChange={(e) => setFiltroNombre(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={provincia} onValueChange={setProvincia}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar provincia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las provincias</SelectItem>
                  {provincias.map((prov) => (
                    <SelectItem key={prov} value={prov}>
                      {prov}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={especialidad} onValueChange={setEspecialidad}>
                <SelectTrigger>
                  <SelectValue placeholder="Especialidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las especialidades</SelectItem>
                  <SelectItem value="Psiquiatra Infantil">Psiquiatra Infantil</SelectItem>
                  <SelectItem value="Psiquiatra de Adultos">Psiquiatra de Adultos</SelectItem>
                  <SelectItem value="Neuróloga Pediátrica">Neuróloga Pediátrica</SelectItem>
                  <SelectItem value="Neuropediatra">Neuropediatra</SelectItem>
                  <SelectItem value="Psicóloga Clínica">Psicóloga Clínica</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            Mostrando {medicosFiltrados.length} especialista{medicosFiltrados.length !== 1 ? "s" : ""}
            {provincia !== "todas" && ` en ${provincia}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {medicosFiltrados.map((medico, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{medico.nombre}</CardTitle>
                    <CardDescription className="text-base font-medium text-blue-600">
                      {medico.especialidad}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{medico.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">
                          {medico.ciudad}, {medico.provincia}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">{medico.direccion}</div>
                        <div className="text-gray-600 dark:text-gray-300">{medico.hospital}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{medico.telefono}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{medico.email}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{medico.horarios}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Experiencia:</div>
                      <div className="text-sm text-gray-600">{medico.experiencia}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">Obras Sociales:</div>
                      <div className="flex flex-wrap gap-1">
                        {medico.obraSocial.map((obra, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {obra}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1">Solicitar Turno</Button>
                  <Button variant="outline">Ver Perfil</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {medicosFiltrados.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-gray-500 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-medium">No se encontraron especialistas</h3>
                <p>Intenta ajustar los filtros de búsqueda</p>
              </div>
              <Button
                onClick={() => {
                  setFiltroNombre("")
                  setProvincia("todas")
                  setEspecialidad("todas")
                }}
              >
                Limpiar Filtros
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>¿Cómo elegir un especialista?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Verifica que tenga experiencia específica en TDAH</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Consulta si acepta tu obra social</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Considera la ubicación y horarios disponibles</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>¿Eres un profesional?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Si eres un especialista en TDAH y quieres aparecer en nuestro directorio, contáctanos para incluir tu
                información.
              </p>
              <Button className="w-full">Registrarse como Profesional</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
