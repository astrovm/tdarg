import Link from "next/link";
import {
  Brain,
  Heart,
  Scale,
  Stethoscope,
  TrendingUp,
  Users,
} from "lucide-react";

import { Header } from "@/components/header";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomeLivePrices } from "@/components/home-live-prices";
import { getPrices } from "@/lib/medications/server";
import { sectionAccent } from "@/lib/sections";

// Same interval as the price cache (15 minutes)
export const revalidate = 900;

const primaryLinks = [
  {
    href: "/precios",
    title: "Precios",
    description: "Medicamentos, dosis, precio por mg y cobertura PMO del 40%.",
    icon: TrendingUp,
    tone: sectionAccent.prices,
  },
  {
    href: "/especialistas",
    title: "Especialistas",
    description: "Profesionales por provincia, especialidad y cobertura.",
    icon: Stethoscope,
    tone: sectionAccent.specialists,
  },
  {
    href: "/legislacion",
    title: "Legislación",
    description: "Receta física y cobertura de medicamentos.",
    icon: Scale,
    tone: sectionAccent.legislation,
  },
];

const links = [
  ...primaryLinks,
  {
    href: "/diagnostico",
    title: "Diagnóstico",
    description: "Señales, evaluación clínica y preparación de consulta.",
    icon: Brain,
    tone: sectionAccent.diagnosis,
  },
  {
    href: "/tratamientos",
    title: "Tratamientos",
    description: "Medicación, terapia y cambios de rutina.",
    icon: Heart,
    tone: sectionAccent.treatments,
  },
  {
    href: "/comorbilidades",
    title: "Comorbilidades",
    description: "Ansiedad, ánimo, sueño, autismo e impulsividad.",
    icon: Users,
    tone: sectionAccent.comorbidities,
  },
];

export default async function HomePage() {
  const { data: medications } = await getPrices();

  return (
    <div className="flex flex-1 flex-col bg-muted/30">
      <Header />

      <main className="flex flex-1 flex-col">
        <section className="bg-background">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                TDAH en Argentina
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                Precios de medicación, especialistas, receta y cobertura.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:mt-7">
                <HomeLivePrices medications={medications} />
              </div>
            </div>
          </div>
        </section>

        <section className="flex-1 border-t bg-muted/30">
          <div className="container mx-auto px-4 py-8 sm:py-10">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                  >
                    <Card className="h-full border bg-card shadow-xs transition-colors hover:border-primary/40">
                      <CardHeader className="p-5">
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.tone}`}
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-card-foreground group-hover:text-primary" role="heading" aria-level={2}>
                              {item.title}
                            </CardTitle>
                            <CardDescription className="mt-2 leading-relaxed text-muted-foreground">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
