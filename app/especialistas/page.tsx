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

function getTipoLabel(tipo: string) {
  const labels: Record<string, string> = {
    privado: "Consulta privada",
    instituto: "Instituto",
    centro_especializado: "Centro especializado",
    hospital: "Hospital",
    clinica: "Clínica",
    consultorio: "Consultorio",
    fundacion: "Fundación",
  };

  return labels[tipo] ?? tipo;
}

export default function EspecialistasPage() {
  const [filtroNombre, setFiltroNombre] = useState("");
  const [provincia, setProvincia] = useState("todas");
  const [especialidad, setEspecialidad] = useState("todas");

  const parseRedes = (redesString?: string, linkedinUrl?: string) => {
    const redes = [] as {
      type: "instagram" | "facebook" | "linkedin";
      handle: string;
      url: string;
      icon: typeof Instagram | typeof Facebook | typeof Linkedin;
      label: string;
    }[];

    if (redesString) {
      // Buscar Instagram handles
      const instagramMatch = redesString.match(/@([a-zA-Z0-9._]+).*?Instagram/i);
      if (instagramMatch) {
        redes.push({
          type: "instagram",
          handle: instagramMatch[1],
          url: `https://instagram.com/${instagramMatch[1]}`,
          icon: Instagram,
          label: "Instagram",
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
          label: "Facebook",
        });
      }
    }

    if (linkedinUrl) {
      const linkedinHandle = (() => {
        try {
          const url = new URL(linkedinUrl);
          return url.pathname.replace(/\/$/, "").split("/").pop() ?? "LinkedIn";
        } catch {
          return linkedinUrl.replace(/^https?:\/\//i, "");
        }
      })();

      redes.push({
        type: "linkedin",
        handle: linkedinHandle,
        url: linkedinUrl,
        icon: Linkedin,
        label: "LinkedIn",
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
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageHero
        title="Especialistas en TDAH"
        description="Profesionales que diagnostican y tratan TDAH en cada provincia. Filtrá por ubicación y especialidad."
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Nombre, ciudad u hospital"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
              className="h-10 rounded-lg pl-12"
            />
          </div>
          <Select value={provincia} onValueChange={setProvincia}>
            <SelectTrigger className="h-10 rounded-lg">
              <SelectValue placeholder="Elegí una provincia" />
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
            <SelectTrigger className="h-10 rounded-lg">
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
      </PageHero>

      {/* Results Section */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Results */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Mostrando{" "}
              <span className="font-semibold text-foreground">
                {especialistasFiltrados.length}
              </span>{" "}
              especialista
              {especialistasFiltrados.length !== 1 ? "s" : ""}
              {provincia !== "todas" && ` en ${provincia}`}
            </p>
          </div>

          {/* Doctors Grid - Only show if there are results */}
          {especialistasFiltrados.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {especialistasFiltrados.map((especialista, index) => {
                const redesSociales = parseRedes(
                  especialista.redes,
                  especialista.linkedin
                );

                return (
                  <Card
                    key={index}
                    className="flex h-full flex-col bg-card border shadow-sm"
                  >
                    <CardHeader className="pb-3">
                      <div className="space-y-3">
                        <div>
                          <CardTitle className="text-xl leading-tight">
                            {especialista.nombre}
                          </CardTitle>
                          <CardDescription className="mt-1 text-base font-medium text-foreground">
                            {especialista.especialidad}
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {getTipoLabel(especialista.tipo)}
                          </Badge>
                          {especialista.hospital.includes("Solo niños") && (
                            <Badge variant="secondary" className="text-xs">
                              Solo niños
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-4">
                      <div className="rounded-lg border bg-muted/30 p-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <div className="text-sm">
                            <div className="font-medium text-foreground">
                              {especialista.ciudad}, {especialista.provincia}
                            </div>
                            <div className="text-muted-foreground">
                              {especialista.hospital}
                            </div>
                            <div className="text-muted-foreground">
                              {especialista.direccion}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{especialista.telefono}</span>
                          </div>
                          {especialista.whatsapp && (
                            <div className="flex items-center gap-2">
                              <MessageCircle className="h-4 w-4 text-muted-foreground" />
                              <span>{especialista.whatsapp}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{especialista.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{especialista.horarios}</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                              Experiencia
                            </div>
                            <div className="text-sm text-foreground">
                              {especialista.experiencia}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                              Cobertura
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
                        </div>
                      </div>

                      {redesSociales.length > 0 && (
                        <div className="flex flex-wrap gap-2 border-t pt-3">
                          {redesSociales.map((red, idx) => {
                            const IconComponent = red.icon;
                            return (
                              <Button
                                key={idx}
                                size="sm"
                                variant="outline"
                                className="h-8 px-3"
                                onClick={() => window.open(red.url, "_blank")}
                              >
                                <IconComponent className="mr-1 h-4 w-4" />
                                {red.label}
                              </Button>
                            );
                          })}
                        </div>
                      )}

                    <div className="mt-auto flex space-x-2 pt-2">
                      {(especialista.whatsapp ||
                        (especialista.telefono &&
                          especialista.telefono !== "Consultar")) && (
                        <Button
                          className="flex-1"
                          onClick={() => {
                            const whatsappNumber =
                              especialista.whatsapp || especialista.telefono;
                            if (whatsappNumber && whatsappNumber !== "Consultar") {
                              window.open(
                                `https://wa.me/${whatsappNumber.replace(
                                  /[^0-9]/g,
                                  ""
                                )}`
                              );
                            }
                          }}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {especialista.whatsapp ? "WhatsApp" : "Contactar"}
                        </Button>
                      )}
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
                    </div>
                  </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* No Results - Only show if there are no results */}
          {especialistasFiltrados.length === 0 && (
              <Card className="text-center py-12 bg-card border">
              <CardContent>
                <div className="text-muted-foreground mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-medium">
                    No encontramos especialistas
                  </h3>
                  <p>Probá con otros filtros</p>
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

    </div>
  );
}
