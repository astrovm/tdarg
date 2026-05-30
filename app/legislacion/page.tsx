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
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      <PageHero
        title="Leyes sobre TDAH en Argentina"
        description="Qué dice la ley hoy, qué funciona mal y qué se podría hacer para resolverlo de forma concreta."
      />

      {/* Laws Section */}
      <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 border-y border-blue-100 dark:border-blue-800/30">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            El problema legal y tus derechos hoy
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Un solo mapa: qué dice la ley, qué falla en la práctica y qué
            solución concreta debería existir.
          </p>
          <div className="space-y-6">
            {leyes.map((ley, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{ley.numero}</CardTitle>
                      <CardDescription className="dark:text-gray-300 text-base font-medium text-gray-900 mt-1">
                        {ley.titulo}
                      </CardDescription>
                    </div>
                    <Badge
                      className={`ml-3 shrink-0 ${
                        ley.urgencia === "Crítico"
                          ? "bg-red-600 text-white"
                          : ley.urgencia === "Alto"
                          ? "bg-orange-600 text-white"
                          : ley.urgencia === "Medio"
                          ? "bg-yellow-600 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {ley.urgencia}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{ley.descripcion}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
                    {ley.impacto}
                  </p>

                  {ley.puntosClave.length > 0 && (
                    <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                      <ul className="space-y-3 text-sm">
                        {ley.puntosClave.map((punto, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{punto}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
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
