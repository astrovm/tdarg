import Link from "next/link";
import {
  Brain,
  Heart,
  Scale,
  Stethoscope,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const accent = {
  prices: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
  specialists: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  legislation: "bg-amber-500/14 text-amber-700 dark:text-amber-300",
  diagnosis: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
  treatments: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
  comorbidities: "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300",
  tools: "bg-indigo-500/12 text-indigo-700 dark:text-indigo-300",
};

const primaryLinks = [
  {
    href: "/precios",
    title: "Precios",
    description: "Compará medicación por dosis, cobertura y costo por mg.",
    icon: TrendingUp,
    tone: accent.prices,
  },
  {
    href: "/especialistas",
    title: "Especialistas",
    description: "Encontrá profesionales por provincia, enfoque y cobertura.",
    icon: Stethoscope,
    tone: accent.specialists,
  },
  {
    href: "/legislacion",
    title: "Legislación",
    description: "Receta física, cobertura y adaptaciones educativas.",
    icon: Scale,
    tone: accent.legislation,
  },
];

const guideLinks = [
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
  {
    href: "/herramientas",
    title: "Herramientas",
    description: "Organización, foco y regulación para el día a día.",
    icon: Wrench,
    tone: accent.tools,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <main>
        <section className="border-b bg-background">
          <div className="container mx-auto px-4 py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold text-foreground">
                TDAH en Argentina
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Precios de medicación, especialistas, receta, cobertura y guías
                clínicas.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/precios">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Ver precios
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/legislacion">
                    <Scale className="mr-2 h-5 w-5" />
                    Ver receta y cobertura
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b bg-secondary/45">
          <div className="container mx-auto px-4 py-10">
            <div className="grid gap-4 md:grid-cols-3">
              {primaryLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link key={item.href} href={item.href} className="group">
                    <Card className="h-full border bg-card shadow-sm transition-colors hover:border-primary/40">
                      <CardHeader className="p-5">
                        <div
                          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${item.tone}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl text-card-foreground group-hover:text-primary">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="leading-relaxed text-muted-foreground">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-muted/30">
          <div className="container mx-auto px-4 py-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Guías prácticas
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Diagnóstico, tratamiento, comorbilidades y herramientas.
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-4">
              {guideLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link key={item.href} href={item.href} className="group">
                    <Card className="h-full border bg-card shadow-sm transition-colors hover:border-primary/40">
                      <CardHeader className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.tone}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <CardTitle className="text-base text-card-foreground group-hover:text-primary">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
