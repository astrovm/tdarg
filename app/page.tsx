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

const accent = {
  prices: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
  specialists: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  legislation: "bg-amber-500/14 text-amber-700 dark:text-amber-300",
  diagnosis: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
  treatments: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
  comorbidities: "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300",
};

const primaryLinks = [
  {
    href: "/precios",
    title: "Precios",
    description: "Medicamentos, dosis, precio por mg y precio con 40%.",
    icon: TrendingUp,
    tone: accent.prices,
  },
  {
    href: "/especialistas",
    title: "Especialistas",
    description: "Profesionales por provincia, especialidad y cobertura.",
    icon: Stethoscope,
    tone: accent.specialists,
  },
  {
    href: "/legislacion",
    title: "Legislación",
    description: "Receta física y cobertura de medicamentos.",
    icon: Scale,
    tone: accent.legislation,
  },
];

const links = [
  ...primaryLinks,
  {
    href: "/diagnostico",
    title: "Diagnóstico",
    description: "Señales, evaluación clínica y preparación de consulta.",
    icon: Brain,
    tone: accent.diagnosis,
  },
  {
    href: "/tratamientos",
    title: "Tratamientos",
    description: "Medicación, terapia y cambios de rutina.",
    icon: Heart,
    tone: accent.treatments,
  },
  {
    href: "/comorbilidades",
    title: "Comorbilidades",
    description: "Ansiedad, ánimo, sueño, autismo e impulsividad.",
    icon: Users,
    tone: accent.comorbidities,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <main>
        <section className="bg-background">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                TDAH en Argentina
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                Precios de medicación, especialistas, receta, cobertura y guías.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:mt-7">
                <Link href="/precios" className="group">
                  <HomeLivePrices />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/45">
          <div className="container mx-auto px-4 py-8 sm:py-10">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <Link key={item.href} href={item.href} className="group">
                    <Card className="h-full border bg-card shadow-sm transition-colors hover:border-primary/40">
                      <CardHeader className="p-5">
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.tone}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-card-foreground group-hover:text-primary">
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
