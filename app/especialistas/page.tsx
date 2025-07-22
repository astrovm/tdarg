"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Phone, Mail, Star, Clock, ExternalLink, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"

const especialistas = [
  // CAPITAL FEDERAL / GBA
  {
    nombre: "Dr. Osvaldo Rovere",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "Consulta privada",
    telefono: "+5491154837442",
    email: "osvaldorovere@gmail.com",
    hospital: "Consulta privada",
    experiencia: "Especialista en TDAH adultos",
    rating: null,
    obraSocial: ["OSDE"],
    horarios: "Consultar",
    tipo: "privado",
  },
  {
    nombre: "Dra. Natalia Fiorentino",
    especialidad: "Neuropsicóloga",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "M.T de Alvear 1632",
    telefono: "08102664203",
    email: "info@ineco.org.ar",
    hospital: "INECO - Instituto de Neurología Cognitiva",
    experiencia: "Programa de diagnóstico acelerado TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Lun-Vie",
    tipo: "instituto",
    url: "https://www.ineco.org.ar/programa-de-diagnostico-acelerado-tdah/",
  },
  {
    nombre: "Dra. Rosario Figueras",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "M.T de Alvear 1632",
    telefono: "+5492915732919",
    email: "info@ineco.org.ar",
    hospital: "INECO - Instituto de Neurología Cognitiva",
    experiencia: "Especialista en TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Lun-Vie",
    tipo: "instituto",
  },
  {
    nombre: "Dra. Mirta Romalde",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "M.T de Alvear 1632",
    telefono: "+5491159299467",
    email: "info@ineco.org.ar",
    hospital: "INECO - Instituto de Neurología Cognitiva",
    experiencia: "Especialista en TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Lun-Vie",
    tipo: "instituto",
  },
  {
    nombre: "Dr. Gabriel Emilio Brenner",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "Consultar ubicación",
    telefono: "5491127940095",
    email: "info@inecap.org",
    hospital: "INECAP - Instituto de Neurociencia Cognitiva Aplicada",
    experiencia: "Especialista en TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Lun-Vie 9:00-20:00",
    tipo: "instituto",
    redes: "@inecap.tdah (Instagram), /inecap.org (Facebook)",
  },
  {
    nombre: "Dra. Norma Cristina Echavarria",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "Hurlingham",
    direccion: "Sargento Salazar 1536 entre Hidalgo y Richieri",
    telefono: "44528765 | 1541733220",
    email: "info@athentun.org",
    hospital: "ATHENTUN",
    experiencia: "Especialista en TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Mar-Vie 8:00-11:00",
    tipo: "centro_especializado",
    redes: "@espaciotdah (Instagram), /Athentun (Facebook)",
    telefonoAthentun: "5491166273265",
  },
  {
    nombre: "Dra. Ariadna Echavarria",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "Hurlingham",
    direccion: "Sargento Salazar 1536 entre Hidalgo y Richieri",
    telefono: "+54 9 11 2391-3130",
    email: "ariadnaechavarria@gmail.com",
    hospital: "ATHENTUN",
    experiencia: "Especialista en TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Mar-Vie 8:00-11:00",
    tipo: "centro_especializado",
  },
  {
    nombre: "Dr. Chrem Mendez Patricio",
    especialidad: "Neurólogo",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "FLENI",
    telefono: "5777-3200",
    email: "Consultar",
    hospital: "FLENI - Neurología Cognitiva",
    experiencia: "Neurología Cognitiva",
    rating: null,
    obraSocial: ["Múltiples obras sociales"],
    horarios: "Lun-Vie 8:00-20:00",
    tipo: "hospital",
  },
  {
    nombre: "Dr. Juan Pablo García Lombardi",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "FLENI",
    telefono: "5777-3200",
    email: "Consultar",
    hospital: "FLENI - Neurología Cognitiva",
    experiencia: "Magíster en Neuropsicofarmacología",
    rating: null,
    obraSocial: ["Múltiples obras sociales"],
    horarios: "Lun-Vie 8:00-20:00",
    tipo: "hospital",
  },
  {
    nombre: "Dra. María Cecilia Rodríguez",
    especialidad: "Psiquiatra",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "Hospital Italiano",
    telefono: "Consultar",
    email: "Consultar",
    hospital: "Hospital Italiano",
    experiencia: "Diagnóstico TDAH infantil - Buen trato",
    rating: null,
    obraSocial: ["Múltiples obras sociales"],
    horarios: "Consultar",
    tipo: "hospital",
    url: "https://www1.hospitalitaliano.org.ar/#!/home/psiquiatria/inicio",
  },
  {
    nombre: "Dr. Golimstok",
    especialidad: "Neurólogo",
    provincia: "Buenos Aires",
    ciudad: "CABA",
    direccion: "Hospital Italiano",
    telefono: "Consultar",
    email: "Consultar",
    hospital: "Hospital Italiano",
    experiencia: "Neurología",
    rating: null,
    obraSocial: ["Múltiples obras sociales"],
    horarios: "Consultar",
    tipo: "hospital",
    url: "https://www1.hospitalitaliano.org.ar/#!/home/psiquiatria/inicio",
  },
  // LA PLATA
  {
    nombre: "Dra. Cecilia Di Virgilio",
    especialidad: "Especialista TDAH",
    provincia: "Buenos Aires",
    ciudad: "La Plata",
    direccion: "20 Nº 389 e/39 y 40",
    telefono: "542215236577",
    email: "neurocienciascienn@gmail.com",
    hospital: "CIENN - Solo niños",
    experiencia: "Centro especializado en neurodesarrollo infantil",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Lun-Vie 8:00-20:00, Sáb 9:00-13:00",
    tipo: "centro_especializado",
    whatsapp: "(221) 552-6999",
    turnos: "423-3792",
    redes: "@c.i.e.n.n (Instagram), /neurocienciasCIENN (Facebook)",
  },
  {
    nombre: "Dra. Silvina Gutierrez",
    especialidad: "Especialista TDAH",
    provincia: "Buenos Aires",
    ciudad: "La Plata",
    direccion: "115 Nro. 425 (Clínica San Juan)",
    telefono: "+54 221 641-9144",
    email: "Consultar",
    hospital: "Clínica San Juan",
    experiencia: "Especialista en TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Consultar",
    tipo: "clinica",
  },
  // CITY BELL
  {
    nombre: "Dra. Marina Drake",
    especialidad: "Neuropsicóloga",
    provincia: "Buenos Aires",
    ciudad: "City Bell",
    direccion: "Esmeralda 961 6° Piso, Depto. H",
    telefono: "541143117864",
    email: "contacto@neuropsicologia.com.ar / citybell@neuropsicologia.com.ar",
    hospital: "NEUROPSIC Consultorios",
    experiencia: "Neuropsicología",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Lun-Vie 14:00-19:00",
    tipo: "consultorio",
  },
  // CÓRDOBA
  {
    nombre: "Luis Santiago Vaggione",
    especialidad: "Psicólogo",
    provincia: "Córdoba",
    ciudad: "Córdoba Capital",
    direccion: "Fundación Nascendi",
    telefono: "Consultar",
    email: "lsvaggione@yahoo.com.ar",
    hospital: "Fundación Nascendi",
    emailFundacion: "fundacionnascendi@gmail.com",
    experiencia: "Especialista en TDAH",
    rating: null,
    obraSocial: ["Consultar"],
    horarios: "Consultar",
    tipo: "fundacion",
    redes: "@luissantiagovaggione (Instagram)",
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

export default function EspecialistasPage() {
  const [filtroNombre, setFiltroNombre] = useState("")
  const [provincia, setProvincia] = useState("todas")
  const [especialidad, setEspecialidad] = useState("todas")

  const especialistasFiltrados = especialistas.filter((especialista) => {
    const coincideNombre =
      especialista.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) ||
      especialista.ciudad.toLowerCase().includes(filtroNombre.toLowerCase()) ||
      especialista.hospital.toLowerCase().includes(filtroNombre.toLowerCase())

    const coincideProvincia = provincia === "todas" || especialista.provincia === provincia
    const coincideEspecialidad = especialidad === "todas" || especialista.especialidad === especialidad

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
            especialistas listados tienen experiencia específica en trastornos de atención.
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
                  <SelectItem value="Psiquiatra">Psiquiatra</SelectItem>
                  <SelectItem value="Neuropsicóloga">Neuropsicóloga</SelectItem>
                  <SelectItem value="Neurólogo">Neurólogo</SelectItem>
                  <SelectItem value="Psicólogo">Psicólogo</SelectItem>
                  <SelectItem value="Especialista TDAH">Especialista TDAH</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            Mostrando {especialistasFiltrados.length} especialista
            {especialistasFiltrados.length !== 1 ? "s" : ""}
            {provincia !== "todas" && ` en ${provincia}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {especialistasFiltrados.map((especialista, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{especialista.nombre}</CardTitle>
                    <CardDescription className="text-base font-medium text-blue-600 mb-2">
                      {especialista.especialidad}
                    </CardDescription>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {especialista.tipo === "privado" && "Consulta Privada"}
                        {especialista.tipo === "instituto" && "Instituto"}
                        {especialista.tipo === "centro_especializado" && "Centro Especializado"}
                        {especialista.tipo === "hospital" && "Hospital"}
                        {especialista.tipo === "clinica" && "Clínica"}
                        {especialista.tipo === "consultorio" && "Consultorio"}
                        {especialista.tipo === "fundacion" && "Fundación"}
                      </Badge>
                      {especialista.hospital.includes("Solo niños") && (
                        <Badge variant="secondary" className="text-xs">
                          Solo Niños
                        </Badge>
                      )}
                    </div>
                  </div>
                  {especialista.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{especialista.rating}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">
                          {especialista.ciudad}, {especialista.provincia}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">{especialista.direccion}</div>
                        <div className="text-gray-600 dark:text-gray-300">{especialista.hospital}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{especialista.telefono}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{especialista.email}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{especialista.horarios}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Experiencia:</div>
                      <div className="text-sm text-gray-600">{especialista.experiencia}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">Obras Sociales:</div>
                      <div className="flex flex-wrap gap-1">
                        {especialista.obraSocial.map((obra, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {obra}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button
                    className="flex-1"
                    onClick={() =>
                      especialista.telefono !== "Consultar" &&
                      window.open(`https://wa.me/${especialista.telefono.replace(/[^0-9]/g, "")}`)
                    }
                    disabled={especialista.telefono === "Consultar"}
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {especialista.telefono !== "Consultar" ? "WhatsApp" : "Consultar Teléfono"}
                  </Button>
                  {especialista.url && (
                    <Button variant="outline" onClick={() => window.open(especialista.url, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Web
                    </Button>
                  )}
                  {especialista.email && especialista.email !== "Consultar" && (
                    <Button variant="outline" onClick={() => window.open(`mailto:${especialista.email}`)}>
                      <Mail className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {especialistasFiltrados.length === 0 && (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Proceso de Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Entrevista de admisión inicial</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Test neurocognitivo y entrevistas adicionales</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Descarte de patologías similares</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Evaluación de comorbidades (TEA, TOC, etc.)</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cobertura y Costos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">El diagnóstico tiene costos, pero es más caro no tenerlo</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Hospital Italiano tiene algún tipo de cobertura</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">INECO ofrece diagnóstico acelerado (útil para interior)</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Muchas obras sociales cubren medicamentos crónicos</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información Importante</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Pregunta si evaluaron comorbidades</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Entiende el porqué del medicamento recetado</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Metilfenidato: 70% eficacia vs Atomoxetina: 20%</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-sm text-gray-700">Necesitas receta triplicada para metilfenidato</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
