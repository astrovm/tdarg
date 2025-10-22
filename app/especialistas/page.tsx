"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

import especialistas from "@/lib/especialistas-data";

const provincias = [
  "Buenos Aires",
  "CABA",
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
];

export default function EspecialistasPage() {
  const [filtroNombre, setFiltroNombre] = useState("");
  const [provincia, setProvincia] = useState("todas");
  const [especialidad, setEspecialidad] = useState("todas");

  const parseRedes = (redesString: string) => {
    if (!redesString) return [];

    const redes = [];
    // Buscar Instagram handles
    const instagramMatch = redesString.match(/@([a-zA-Z0-9._]+).*?Instagram/i);
    if (instagramMatch) {
      redes.push({
        type: "instagram",
        handle: instagramMatch[1],
        url: `https://instagram.com/${instagramMatch[1]}`,
        icon: Instagram,
      });
    }

    // Buscar Facebook handles
    const facebookMatch = redesString.match(/\/([a-zA-Z0-9._-]+).*?Facebook/i);
    if (facebookMatch) {
      redes.push({
        type: "facebook",
        handle: facebookMatch[1],
        url: `https://facebook.com/${facebookMatch[1]}`,
        icon: Facebook,
      });
    }

    return redes;
  };

  const especialistasFiltrados = especialistas.filter((especialista) => {
    const coincideNombre =
      especialista.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) ||
      especialista.ciudad.toLowerCase().includes(filtroNombre.toLowerCase()) ||
      especialista.hospital.toLowerCase().includes(filtroNombre.toLowerCase());

    const coincideProvincia =
      provincia === "todas" || especialista.provincia === provincia;
    const coincideEspecialidad =
      especialidad === "todas" || especialista.especialidad === especialidad;

    return coincideNombre && coincideProvincia && coincideEspecialidad;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      <PageHero
        title="Directorio de Especialistas en TDAH"
        description="Encuentra profesionales especializados en el diagnóstico y tratamiento del TDAH en tu provincia. Todos los especialistas listados tienen experiencia específica en trastornos de atención."
      >
        <Card className="bg-gradient-to-r from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/20 border-0 shadow-xl backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-slate-800 dark:text-white flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Search className="h-4 w-4 text-white" />
              </div>
              Buscar especialistas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Buscá por nombre, ciudad u hospital..."
                  value={filtroNombre}
                  onChange={(e) => setFiltroNombre(e.target.value)}
                  className="pl-12 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm"
                />
              </div>
              <Select value={provincia} onValueChange={setProvincia}>
                <SelectTrigger className="h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <SelectValue placeholder="Seleccioná una provincia" />
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
                <SelectTrigger className="h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <SelectValue placeholder="Especialidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las especialidades</SelectItem>
                  <SelectItem value="Psiquiatra">Psiquiatra</SelectItem>
                  <SelectItem value="Neuropsicóloga">Neuropsicóloga</SelectItem>
                  <SelectItem value="Neurólogo">Neurólogo</SelectItem>
                  <SelectItem value="Psicólogo">Psicólogo</SelectItem>
                  <SelectItem value="Psicopedagogía">Psicopedagogía</SelectItem>
                  <SelectItem value="Equinoterapia">Equinoterapia</SelectItem>
                  <SelectItem value="Pediatra">Pediatra</SelectItem>
                  <SelectItem value="Centro Especializado">Centro Especializado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </PageHero>

      {/* Results Section */}
      <div className="bg-gray-200 dark:bg-gray-700 border-y border-gray-300 dark:border-gray-600">
        <div className="container mx-auto px-4 py-8">
          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Mostrando {especialistasFiltrados.length} especialista
              {especialistasFiltrados.length !== 1 ? "s" : ""}
              {provincia !== "todas" && ` en ${provincia}`}
            </p>
          </div>

          {/* Doctors Grid - Only show if there are results */}
          {especialistasFiltrados.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {especialistasFiltrados.map((especialista, index) => (
                <Card
                  key={index}
                  className="flex h-full flex-col hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {especialista.nombre}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-blue-600 mb-2">
                          {especialista.especialidad}
                        </CardDescription>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {especialista.tipo === "privado" &&
                              "Consulta Privada"}
                            {especialista.tipo === "instituto" && "Instituto"}
                            {especialista.tipo === "centro_especializado" &&
                              "Centro Especializado"}
                            {especialista.tipo === "hospital" && "Hospital"}
                            {especialista.tipo === "clinica" && "Clínica"}
                            {especialista.tipo === "consultorio" &&
                              "Consultorio"}
                            {especialista.tipo === "fundacion" && "Fundación"}
                          </Badge>
                          {especialista.hospital.includes("Solo niños") && (
                            <Badge variant="secondary" className="text-xs">
                              Solo Niños
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                          <div className="text-sm">
                            <div className="font-medium">
                              {especialista.ciudad}, {especialista.provincia}
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                              {especialista.direccion}
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                              {especialista.hospital}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">
                            {especialista.telefono}
                          </span>
                        </div>
                        {especialista.whatsapp && (
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">
                              {especialista.whatsapp}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{especialista.email}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">
                            {especialista.horarios}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">
                            Experiencia:
                          </div>
                          <div className="text-sm text-gray-600">
                            {especialista.experiencia}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">
                            Obras Sociales:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {especialista.obraSocial.map((obra, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {obra}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {especialista.redes && (
                          <div>
                            <div className="text-sm font-medium mb-2">
                              Redes Sociales:
                            </div>
                            <div className="flex gap-2">
                              {parseRedes(especialista.redes).map(
                                (red, idx) => {
                                  const IconComponent = red.icon;
                                  return (
                                    <Button
                                      key={idx}
                                      size="sm"
                                      variant="outline"
                                      className="h-8 px-3"
                                      onClick={() =>
                                        window.open(red.url, "_blank")
                                      }
                                    >
                                      <IconComponent className="h-4 w-4 mr-1" />
                                      {red.type === "instagram"
                                        ? "Instagram"
                                        : "Facebook"}
                                    </Button>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-auto flex space-x-2 pt-2">
                      <Button
                        className="flex-1"
                        onClick={() => {
                          const whatsappNumber =
                            especialista.whatsapp || especialista.telefono;
                          if (whatsappNumber !== "Consultar") {
                            window.open(
                              `https://wa.me/${whatsappNumber.replace(
                                /[^0-9]/g,
                                ""
                              )}`
                            );
                          }
                        }}
                        disabled={
                          !especialista.whatsapp &&
                          especialista.telefono === "Consultar"
                        }
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {especialista.whatsapp ||
                        especialista.telefono !== "Consultar"
                          ? "WhatsApp"
                          : "Consultar Teléfono"}
                      </Button>
                      {especialista.url && (
                        <Button
                          variant="outline"
                          onClick={() =>
                            window.open(especialista.url, "_blank")
                          }
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Sitio Web
                        </Button>
                      )}
                      {especialista.email &&
                        especialista.email !== "Consultar" && (
                          <Button
                            variant="outline"
                            onClick={() =>
                              window.open(`mailto:${especialista.email}`)
                            }
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                        )}
                      {especialista.linkedin && (
                        <Button
                          variant="outline"
                          onClick={() =>
                            window.open(especialista.linkedin, "_blank")
                          }
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* No Results - Only show if there are no results */}
          {especialistasFiltrados.length === 0 && (
            <Card className="text-center py-12 bg-white dark:bg-gray-800 border-2 dark:border-gray-600">
              <CardContent>
                <div className="text-gray-500 mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-medium">
                    No se encontraron especialistas
                  </h3>
                  <p>Probá ajustando los filtros de búsqueda</p>
                </div>
                <Button
                  onClick={() => {
                    setFiltroNombre("");
                    setProvincia("todas");
                    setEspecialidad("todas");
                  }}
                >
                  Limpiar filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white dark:bg-gray-800 border-y border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle>Proceso de Diagnóstico</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Entrevista de admisión inicial
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Test neurocognitivo y entrevistas adicionales
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Descarte de patologías similares
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Evaluación de comorbidades (TEA, TOC, etc.)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-orange-700">
              <CardHeader>
                <CardTitle>Cobertura y Costos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    El diagnóstico tiene un costo, pero es más caro no tenerlo
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    El Hospital Italiano ofrece cobertura para sus afiliados
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    INECO ofrece un diagnóstico acelerado (útil si viajás desde
                    el interior)
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Muchas obras sociales tienen cobertura para medicamentos
                    crónicos
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-700">
              <CardHeader>
                <CardTitle>Información Importante</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Preguntá si evaluaron comorbilidades
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Entendé por qué te recetaron ese medicamento
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Metilfenidato: 70% eficacia vs Atomoxetina: 40-60%
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Necesitás receta triplicada para el metilfenidato
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
