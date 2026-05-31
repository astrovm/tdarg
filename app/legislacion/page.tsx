"use client";

import { BookOpen, GraduationCap, ReceiptText } from "lucide-react";
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

  const lawIcons = [ReceiptText, BookOpen, GraduationCap];
  const lawTones = [
    {
      icon: "bg-amber-500/12 text-amber-700 dark:text-amber-300",
      label: "text-amber-700 dark:text-amber-300",
      dot: "bg-amber-500",
    },
    {
      icon: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
      label: "text-sky-700 dark:text-sky-300",
      dot: "bg-sky-500",
    },
    {
      icon: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
      label: "text-emerald-700 dark:text-emerald-300",
      dot: "bg-emerald-500",
    },
  ];

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
          <div className="max-w-5xl mx-auto space-y-4">
            {leyes.map((ley, index) => {
              const Icon = lawIcons[index] ?? BookOpen;
              const tone = lawTones[index] ?? lawTones[0];

              return (
              <Card
                key={ley.numero}
                className="overflow-hidden bg-card border shadow-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex gap-3">
                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tone.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
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
                      <div className={`mb-3 text-xs font-medium uppercase tracking-wide ${tone.label}`}>
                        Puntos prácticos
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {ley.puntosClave.map((punto) => {
                          const bullet = splitBullet(punto);

                          return (
                            <li key={punto} className="flex items-start gap-3">
                              <div className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${tone.dot}`} />
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
