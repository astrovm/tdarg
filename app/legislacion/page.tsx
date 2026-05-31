"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import {
  fuentesDocumentacion,
  leyes,
} from "@/lib/legislacion-data";

export default function LegislacionPage() {
  const getSeverityClasses = (urgencia: string) => {
    if (urgencia === "Importante") {
      return {
        border: "border-l-amber-500",
        badge: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
        dot: "bg-amber-500",
        surface: "bg-amber-50 dark:bg-amber-900/20",
        text: "text-amber-800 dark:text-amber-200",
      };
    }

    if (urgencia === "Relevante") {
      return {
        border: "border-l-sky-500",
        badge: "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-200",
        dot: "bg-sky-500",
        surface: "bg-sky-50 dark:bg-sky-900/20",
        text: "text-sky-800 dark:text-sky-200",
      };
    }

    if (urgencia === "Administrativo") {
      return {
        border: "border-l-emerald-500",
        badge: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200",
        dot: "bg-emerald-500",
        surface: "bg-emerald-50 dark:bg-emerald-900/20",
        text: "text-emerald-800 dark:text-emerald-200",
      };
    }

    return {
      border: "border-l-blue-500",
      badge: "bg-blue-600 text-white",
      dot: "bg-blue-500",
      surface: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-foreground",
    };
  };

  const splitBullet = (text: string) => {
    const separatorIndex = text.indexOf(":");

    if (separatorIndex === -1) {
      return { label: null, body: text };
    }

    return {
      label: text.slice(0, separatorIndex),
      body: text.slice(separatorIndex + 1).trim(),
    };
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageHero
        title="Leyes sobre TDAH en Argentina"
        description="Qué dice la normativa, cómo se aplica en la práctica y qué puntos conviene revisar antes de pedir cobertura."
      />

      {/* Laws Section */}
      <div className="bg-muted/30 border-y">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Normativa y cobertura
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Un mapa simple: receta, cobertura de medicamentos y adaptaciones
            educativas.
          </p>

          <div className="max-w-5xl mx-auto space-y-4">
            {leyes.map((ley) => {
              const severity = getSeverityClasses(ley.urgencia);

              return (
              <Card
                key={ley.numero}
                className={`overflow-hidden bg-card border shadow-sm border-l ${severity.border}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge className={severity.badge}>
                          {ley.urgencia}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground leading-snug">
                        {ley.numero}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {ley.descripcion}
                  </p>

                  {ley.puntosClave.length > 0 && (
                    <div className="rounded-md border bg-muted/40 p-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {ley.puntosClave.map((punto) => {
                          const bullet = splitBullet(punto);

                          return (
                            <li key={punto} className="flex items-start gap-3">
                              <div
                                className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${severity.dot}`}
                              ></div>
                              <span className="text-muted-foreground leading-relaxed">
                                {bullet.label && (
                                  <strong className="text-foreground">
                                    {bullet.label}:{" "}
                                  </strong>
                                )}
                                {bullet.body}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fuentes Section */}
      <section className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            De dónde sacamos la info
          </h2>
          <div className="max-w-4xl mx-auto text-sm text-muted-foreground">
            <p className="mb-4">{fuentesDocumentacion.descripcion}</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {fuentesDocumentacion.fuentes.map((fuente, index) => (
                <li key={index}>
                  <strong>{fuente.titulo}</strong>{" "}
                  {fuente.referencia && fuente.referencia} -{" "}
                  {fuente.descripcion}
                </li>
              ))}
            </ul>
            <p className="text-xs text-center italic">
              {fuentesDocumentacion.notaLegal}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
