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
  specialistWhatsapp,
  isPlaceholder,
  normalizeSearch,
  parsePhones,
} from "@/lib/specialists/contact";
import specialists, { type Specialist } from "@/lib/specialists/data";
import {
  formatLocation,
  matchesProvince,
  matchesQuery,
  provinceOptions,
  specialtyOptions,
  typeLabel,
} from "@/lib/specialists/filters";

const PAGE_SIZE = 20;

const provinces = provinceOptions(specialists);
const specialties = specialtyOptions(specialists);

type SocialLink = {
  url: string;
  icon: typeof Instagram;
  label: string;
};

function parseSocialLinks(socialText?: string, linkedinUrl?: string): SocialLink[] {
  const socialLinks: SocialLink[] = [];

  if (socialText) {
    const instagram = socialText.match(/@([a-zA-Z0-9._]+).*?Instagram/i);
    if (instagram) {
      socialLinks.push({
        url: `https://instagram.com/${instagram[1]}`,
        icon: Instagram,
        label: "Instagram",
      });
    }

    const facebook = socialText.match(/\/([a-zA-Z0-9._-]+).*?Facebook/i);
    if (facebook) {
      socialLinks.push({
        url: `https://facebook.com/${facebook[1]}`,
        icon: Facebook,
        label: "Facebook",
      });
    }
  }

  if (linkedinUrl) {
    socialLinks.push({ url: linkedinUrl, icon: Linkedin, label: "LinkedIn" });
  }

  return socialLinks;
}

function SpecialistCard({ specialist }: { specialist: Specialist }) {
  const specialistType = typeLabel(specialist);
  const childrenOnly = specialist.hospital.includes("Solo niños");
  const hospital = specialist.hospital.replace(/\s*-\s*Solo niños/i, "");
  const showHospital =
    !isPlaceholder(hospital) &&
    hospital !== specialistType &&
    normalizeSearch(hospital) !== normalizeSearch(specialist.name);
  const showAddress =
    !isPlaceholder(specialist.address) &&
    specialist.address !== hospital;

  const phones = parsePhones(specialist.phone);
  const whatsapp = specialistWhatsapp(specialist);
  const emails = [specialist.email, specialist.foundationEmail].filter(
    (email): email is string => !isPlaceholder(email),
  );
  const coverages = specialist.insurance.filter((o) => !isPlaceholder(o));
  const socialLinks = parseSocialLinks(specialist.social, specialist.linkedin);
  const hasDetails =
    phones.length > 0 ||
    emails.length > 0 ||
    !isPlaceholder(specialist.hours) ||
    Boolean(specialist.appointments);

  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
      <div>
        <h3 className="text-lg font-semibold leading-tight">
          {specialist.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {specialist.specialty}
        </p>
        {childrenOnly ? (
          <Badge variant="secondary" className="mt-2 text-xs">
            Solo niños
          </Badge>
        ) : null}
      </div>

      <div className="flex items-start gap-2 text-sm">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <div>
          <div className="font-medium">{formatLocation(specialist)}</div>
          {showHospital ? (
            <div className="text-muted-foreground">{hospital}</div>
          ) : null}
          {showAddress ? (
            <div className="text-muted-foreground">{specialist.address}</div>
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
          {!isPlaceholder(specialist.hours) ? (
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>{specialist.hours}</span>
            </li>
          ) : null}
          {specialist.appointments ? (
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>Turnos: {specialist.appointments}</span>
            </li>
          ) : null}
        </ul>
      ) : null}

      {coverages.length > 0 ? (
        <div className="flex flex-wrap items-center gap-1.5 text-sm">
          <ShieldCheck className="h-4 w-4 text-muted-foreground" aria-label="Cobertura" />
          {coverages.map((plan) => (
            <Badge key={plan} variant="outline" className="text-xs font-normal">
              {plan}
            </Badge>
          ))}
        </div>
      ) : null}

      {whatsapp || specialist.url || socialLinks.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {whatsapp ? (
            <Button asChild size="sm" className="h-10">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          ) : null}
          {specialist.url ? (
            <Button asChild size="sm" variant="outline" className="h-10">
              <a href={specialist.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Web
              </a>
            </Button>
          ) : null}
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button key={link.url} asChild size="icon" variant="outline">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
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

export default function SpecialistsPage() {
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState("all");
  const [specialty, setSpecialty] = useState("all");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filteredSpecialists = useMemo(() => {
    return specialists.filter(
      (specialist) =>
        matchesQuery(specialist, query) &&
        matchesProvince(specialist, province) &&
        (specialty === "all" || specialist.specialty === specialty),
    );
  }, [query, province, specialty]);

  const visible = filteredSpecialists.slice(0, limit);
  const remaining = filteredSpecialists.length - visible.length;

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
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                resetLimit();
              }}
              className="h-11 rounded-lg pl-12"
            />
          </div>
          <Select
            value={province}
            onValueChange={(value) => {
              setProvince(value);
              resetLimit();
            }}
          >
            <SelectTrigger className="h-11 rounded-lg" aria-label="Provincia">
              <SelectValue placeholder="Elegí una provincia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las provincias</SelectItem>
              {provinces.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={specialty}
            onValueChange={(value) => {
              setSpecialty(value);
              resetLimit();
            }}
          >
            <SelectTrigger className="h-11 rounded-lg" aria-label="Especialidad">
              <SelectValue placeholder="Especialidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las especialidades</SelectItem>
              {specialties.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label} ({option.count})
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
            {filteredSpecialists.length}
          </span>{" "}
          especialista{filteredSpecialists.length !== 1 ? "s" : ""}
          {province !== "all" && ` en ${province}`}
        </p>

        {filteredSpecialists.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((specialist) => (
                <SpecialistCard
                  key={`${specialist.name}-${specialist.city}-${specialist.hospital}`}
                  specialist={specialist}
                />
              ))}
            </div>

            {remaining > 0 ? (
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className="h-11"
                  onClick={() => setLimit((current) => current + PAGE_SIZE)}
                >
                  Ver {Math.min(remaining, PAGE_SIZE)} más ({remaining} restantes)
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
                setQuery("");
                setProvince("all");
                setSpecialty("all");
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
