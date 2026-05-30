import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Stethoscope,
  Scale,
  TrendingUp,
  Heart,
  Users,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <section className="border-b bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            TDAH en Argentina
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Precios de medicamentos, especialistas por provincia, legislación
            y guías prácticas sobre TDAH en Argentina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/precios">
                <TrendingUp className="mr-2 h-5 w-5" />
                Ver precios
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/especialistas">
                <Stethoscope className="mr-2 h-5 w-5" />
                Buscar especialistas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-secondary/60">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-foreground mb-10">
            Recursos principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/precios" className="group">
              <Card className="h-full bg-card border shadow-sm transition-colors hover:border-primary/40">
                <CardHeader className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-card-foreground group-hover:text-primary">
                    Precios de medicamentos
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Metilfenidato, lisdexanfetamina, atomoxetina y más.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/especialistas" className="group">
              <Card className="h-full bg-card border shadow-sm transition-colors hover:border-primary/40">
                <CardHeader className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-card-foreground group-hover:text-primary">
                    Especialistas
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Directorio por provincia y especialidad.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/legislacion" className="group">
              <Card className="h-full bg-card border shadow-sm transition-colors hover:border-primary/40">
                <CardHeader className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Scale className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-card-foreground group-hover:text-primary">
                    Legislación
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Leyes, decretos y normativa relacionada con TDAH.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Guías
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diagnóstico, tratamientos, comorbilidades y herramientas para el día a día.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/diagnostico" className="group">
              <Card className="h-full bg-card border shadow-sm transition-colors hover:border-primary/40">
                <CardHeader className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg mb-2 text-card-foreground group-hover:text-primary">
                    Diagnóstico
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    Autoevaluación, ruta diagnóstica, qué llevar y cómo se ve el TDAH en adultos.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/tratamientos" className="group">
              <Card className="h-full bg-card border shadow-sm transition-colors hover:border-primary/40">
                <CardHeader className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg mb-2 text-card-foreground group-hover:text-primary">
                    Tratamientos
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    Medicación, terapia cognitivo-conductual y cambios de rutina.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/comorbilidades" className="group">
              <Card className="h-full bg-card border shadow-sm transition-colors hover:border-primary/40">
                <CardHeader className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg mb-2 text-card-foreground group-hover:text-primary">
                    Comorbilidades
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    Ansiedad, depresión, autismo y otras condiciones frecuentes.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/herramientas" className="group">
              <Card className="h-full bg-card border shadow-sm transition-colors hover:border-primary/40">
                <CardHeader className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg mb-2 text-card-foreground group-hover:text-primary">
                    Herramientas
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    Organización, foco y regulación emocional.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
