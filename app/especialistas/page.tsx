"use client";

import { useMemo, useState } from "react";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Facebook, Instagram, Linkedin } from "@/components/brand-icons";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  especialistaWhatsapp,
  isPlaceholder,
  normalizeSearch,
  parsePhones,
} from "@/lib/especialistas/contact";
import especialistas, { type Especialista } from "@/lib/especialistas/data";

const PAGE_SIZE = 20;

const tipoLabels: Record<string, string> = {
  privado: "Consulta privada",
  instituto: "Instituto",
  centro_especializado: "Centro especializado",
  hospital: "Hospital",
  clinica: "Clínica",
  consultorio: "Consultorio",
  fundacion: "Fundación",
};

function getTipoLabel(tipo: string) {
  return tipoLabels[tipo] ?? tipo;
}

// "CABA/Buenos Aires" atiende en las dos provincias
function provinciasDe(especialista: Especialista) {
  return especialista.provincia
    .split("/")
    .map((p) => p.trim())
    .filter((p) => !isPlaceholder(p));
}

function countBy(values: string[]) {
  const counts = new Map<string, number>();
  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b, "es"));
}

const provinciaOptions = countBy(especialistas.flatMap(provinciasDe));
const especialidadOptions = countBy(especialistas.map((e) => e.especialidad));

type Red = {
  url: string;
  icon: typeof Instagram;
  label: string;
};

function parseRedes(redesString?: string, linkedinUrl?: string): Red[] {
  const redes: Red[] = [];

  if (redesString) {
    const instagram = redesString.match(/@([a-zA-Z0-9._]+).*?Instagram/i);
    if (instagram) {
      redes.push({
        url: `https://instagram.com/${instagram[1]}`,
        icon: Instagram,
        label: "Instagram",
      });
    }

    const facebook = redesString.match(/\/([a-zA-Z0-9._-]+).*?Facebook/i);
    if (facebook) {
      redes.push({
        url: `https://facebook.com/${facebook[1]}`,
        icon: Facebook,
        label: "Facebook",
      });
    }
  }

  if (linkedinUrl) {
    redes.push({ url: linkedinUrl, icon: Linkedin, label: "LinkedIn" });
  }

  return redes;
}

function ubicacion(especialista: Especialista) {
  const parts = [especialista.ciudad, especialista.provincia].filter(
    (part, index, all) => !isPlaceholder(part) && all.indexOf(part) === index,
  );
  return parts.length > 0 ? parts.join(", ") : "Ubicación a confirmar";
}

function EspecialistaCard({ especialista }: { especialista: Especialista }) {
  const tipo = getTipoLabel(especialista.tipo);
  const soloNinos = especialista.hospital.includes("Solo niños");
  const hospital = especialista.hospital.replace(/\s*-\s*Solo niños/i, "");
  const showHospital =
    !isPlaceholder(hospital) &&
    hospital !== tipo &&
    normalizeSearch(hospital) !== normalizeSearch(especialista.nombre);
  const showDireccion =
    !isPlaceholder(especialista.direccion) &&
    especialista.direccion !== hospital;

  const phones = parsePhones(especialista.telefono);
  const whatsapp = especialistaWhatsapp(especialista);
  const emails = [especialista.email, especialista.emailFundacion].filter(
    (email): email is string => !isPlaceholder(email),
  );
  const coberturas = especialista.obraSocial.filter((o) => !isPlaceholder(o));
  const redes = parseRedes(especialista.redes, especialista.linkedin);
  const hasDetails =
    phones.length > 0 ||
    emails.length > 0 ||
    !isPlaceholder(especialista.horarios) ||
    Boolean(especialista.turnos);

  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
      <div>
        <h3 className="text-lg font-semibold leading-tight">
          {especialista.nombre}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {especialista.especialidad}
        </p>
        {soloNinos ? (
          <Badge variant="secondary" className="mt-2 text-xs">
            Solo niños
          </Badge>
        ) : null}
      </div>

      <div className="flex items-start gap-2 text-sm">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <div>
          <div className="font-medium">{ubicacion(especialista)}</div>
          {showHospital ? (
            <div className="text-muted-foreground">{hospital}</div>
          ) : null}
          {showDireccion ? (
            <div className="text-muted-foreground">{especialista.direccion}</div>
          ) : null}
        </div>
      </div>

      {hasDetails ? (
        <ul className="space-y-1.5 text-sm">
          {phones.map((phone) => (
            <li key={phone.href} className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <a href={phone.href} className="underline-offset-4 hover:underline">
                {phone.label}
              </a>
            </li>
          ))}
          {emails.map((email) => (
            <li key={email} className="flex min-w-0 items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <a
                href={`mailto:${email}`}
                className="truncate underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </li>
          ))}
          {!isPlaceholder(especialista.horarios) ? (
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>{especialista.horarios}</span>
            </li>
          ) : null}
          {especialista.turnos ? (
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>Turnos: {especialista.turnos}</span>
            </li>
          ) : null}
        </ul>
      ) : null}

      {coberturas.length > 0 ? (
        <div className="flex flex-wrap items-center gap-1.5 text-sm">
          <ShieldCheck className="h-4 w-4 text-muted-foreground" aria-label="Cobertura" />
          {coberturas.map((obra) => (
            <Badge key={obra} variant="outline" className="text-xs font-normal">
              {obra}
            </Badge>
          ))}
        </div>
      ) : null}

      {whatsapp || especialista.url || redes.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {whatsapp ? (
            <Button asChild size="sm" className="h-10">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          ) : null}
          {especialista.url ? (
            <Button asChild size="sm" variant="outline" className="h-10">
              <a href={especialista.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Web
              </a>
            </Button>
          ) : null}
          {redes.map((red) => {
            const Icon = red.icon;
            return (
              <Button key={red.url} asChild size="icon" variant="outline">
                <a
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.label}
                  title={red.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

export default function EspecialistasPage() {
  const [filtroNombre, setFiltroNombre] = useState("");
  const [provincia, setProvincia] = useState("todas");
  const [especialidad, setEspecialidad] = useState("todas");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const especialistasFiltrados = useMemo(() => {
    const query = normalizeSearch(filtroNombre.trim());

    return especialistas.filter((especialista) => {
      const coincideNombre =
        !query ||
        [especialista.nombre, especialista.ciudad, especialista.provincia, especialista.hospital]
          .some((field) => normalizeSearch(field).includes(query));
      const coincideProvincia =
        provincia === "todas" || provinciasDe(especialista).includes(provincia);
      const coincideEspecialidad =
        especialidad === "todas" || especialista.especialidad === especialidad;

      return coincideNombre && coincideProvincia && coincideEspecialidad;
    });
  }, [filtroNombre, provincia, especialidad]);

  const visibles = especialistasFiltrados.slice(0, limit);
  const restantes = especialistasFiltrados.length - visibles.length;

  const resetLimit = () => setLimit(PAGE_SIZE);

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageHero
        title="Especialistas en TDAH"
        description="Profesionales que diagnostican y tratan TDAH en Argentina. Filtrá por ubicación y especialidad."
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Nombre, ciudad, provincia u hospital"
              aria-label="Buscar por nombre, ciudad, provincia u hospital"
              value={filtroNombre}
              onChange={(e) => {
                setFiltroNombre(e.target.value);
                resetLimit();
              }}
              className="h-11 rounded-lg pl-12"
            />
          </div>
          <Select
            value={provincia}
            onValueChange={(value) => {
              setProvincia(value);
              resetLimit();
            }}
          >
            <SelectTrigger className="h-11 rounded-lg" aria-label="Provincia">
              <SelectValue placeholder="Elegí una provincia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las provincias</SelectItem>
              {provinciaOptions.map(([prov, count]) => (
                <SelectItem key={prov} value={prov}>
                  {prov} ({count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={especialidad}
            onValueChange={(value) => {
              setEspecialidad(value);
              resetLimit();
            }}
          >
            <SelectTrigger className="h-11 rounded-lg" aria-label="Especialidad">
              <SelectValue placeholder="Especialidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las especialidades</SelectItem>
              {especialidadOptions.map(([esp, count]) => (
                <SelectItem key={esp} value={esp}>
                  {esp} ({count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Datos de fuentes públicas: confirmá antes de pedir turno. ¿Sos
          profesional y querés corregir tus datos?{" "}
          <a
            href="https://github.com/astrovm/tdarg/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Avisanos
          </a>
          .
        </p>
      </PageHero>

      <main className="container mx-auto px-4 py-8">
        <h2 className="sr-only">Resultados</h2>
        <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
          <span className="font-semibold text-foreground">
            {especialistasFiltrados.length}
          </span>{" "}
          especialista{especialistasFiltrados.length !== 1 ? "s" : ""}
          {provincia !== "todas" && ` en ${provincia}`}
        </p>

        {especialistasFiltrados.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visibles.map((especialista) => (
                <EspecialistaCard
                  key={`${especialista.nombre}-${especialista.ciudad}-${especialista.hospital}`}
                  especialista={especialista}
                />
              ))}
            </div>

            {restantes > 0 ? (
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className="h-11"
                  onClick={() => setLimit((current) => current + PAGE_SIZE)}
                >
                  Ver {Math.min(restantes, PAGE_SIZE)} más ({restantes} restantes)
                </Button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="rounded-lg border bg-card px-6 py-12 text-center">
            <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground" aria-hidden="true" />
            <h2 className="text-lg font-medium">No encontramos especialistas</h2>
            <p className="mb-4 text-muted-foreground">Probá con otros filtros</p>
            <Button
              onClick={() => {
                setFiltroNombre("");
                setProvincia("todas");
                setEspecialidad("todas");
                resetLimit();
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
