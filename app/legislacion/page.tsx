"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { References } from "@/components/references";
import {
  fuentesDocumentacion,
  leyes,
} from "@/lib/legislacion-data";

export default function LegislacionPage() {
  const getSeverityClasses = (urgencia: string) => {
    if (urgencia === "Importante") {
      return {
        border: "border-l-amber-500",
        dot: "bg-amber-500",
      };
    }

    if (urgencia === "Relevante") {
      return {
        border: "border-l-sky-500",
        dot: "bg-sky-500",
      };
    }

    if (urgencia === "Administrativo") {
      return {
        border: "border-l-emerald-500",
        dot: "bg-emerald-500",
      };
    }

    return {
      border: "border-l-blue-500",
      dot: "bg-blue-500",
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

  const references = fuentesDocumentacion.fuentes.map((fuente, index) => ({
    id: index + 1,
    title: fuente.titulo,
    description: fuente.descripcion,
    year: fuente.referencia?.replace(/[()]/g, ""),
    url: "#",
  }));

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
                      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {ley.urgencia}
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

      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <References references={references} />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {fuentesDocumentacion.notaLegal}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
