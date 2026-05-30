"use client";

import {
  Card,
  CardContent,
  CardDescription,
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
    if (urgencia === "Crítico") {
      return {
        border: "border-l-red-500",
        badge: "bg-red-600 text-white",
        dot: "bg-red-500",
        surface: "bg-red-50 dark:bg-red-900/20",
        text: "text-red-700 dark:text-red-300",
      };
    }

    if (urgencia === "Alto") {
      return {
        border: "border-l-orange-500",
        badge: "bg-orange-600 text-white",
        dot: "bg-orange-500",
        surface: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-700 dark:text-orange-300",
      };
    }

    if (urgencia === "Medio") {
      return {
        border: "border-l-yellow-500",
        badge: "bg-yellow-600 text-white",
        dot: "bg-yellow-500",
        surface: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-700 dark:text-yellow-300",
      };
    }

    return {
      border: "border-l-blue-500",
      badge: "bg-blue-600 text-white",
      dot: "bg-blue-500",
      surface: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-700 dark:text-blue-300",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      <PageHero
        title="Leyes sobre TDAH en Argentina"
        description="Qué dice la ley hoy, qué funciona mal y qué se podría hacer para resolverlo de forma concreta."
      />

      {/* Laws Section */}
      <div className="bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            El problema legal y tus derechos hoy
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Un solo mapa: qué dice la ley, qué falla en la práctica y qué
            solución concreta debería existir.
          </p>

          <div className="max-w-5xl mx-auto space-y-4">
            {leyes.map((ley) => {
              const severity = getSeverityClasses(ley.urgencia);

              return (
              <Card
                key={ley.numero}
                className={`overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-0 shadow-md border-l-4 ${severity.border}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge className={severity.badge}>
                          {ley.urgencia}
                        </Badge>
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${severity.surface} ${severity.text}`}
                        >
                          {ley.impacto}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white leading-snug">
                        {ley.numero}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
                        {ley.titulo}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                    {ley.descripcion}
                  </p>

                  {ley.puntosClave.length > 0 && (
                    <div className="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 p-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {ley.puntosClave.map((punto) => {
                          const bullet = splitBullet(punto);

                          return (
                            <li key={punto} className="flex items-start gap-3">
                              <div
                                className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${severity.dot}`}
                              ></div>
                              <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                {bullet.label && (
                                  <strong className="text-slate-900 dark:text-white">
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
      <section className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            De dónde sacamos la info
          </h2>
          <div className="max-w-4xl mx-auto text-sm text-gray-300">
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
