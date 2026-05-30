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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <Header />

      {/* Hero Section - Gradiente moderno */}
      <section className="relative py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-purple-600 mb-4">
            TDAH en Argentina
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Precios de medicamentos, especialistas por provincia, legislación
            y guías prácticas sobre TDAH en Argentina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primaryGradient" asChild>
              <Link href="/precios">
                <TrendingUp className="mr-2 h-5 w-5" />
                Ver Precios
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-accent dark:border-primary/50 dark:text-primary"
              asChild
            >
              <Link href="/especialistas">
                <Stethoscope className="mr-2 h-5 w-5" />
                Buscar Especialistas
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/legislacion">
                <Scale className="mr-2 h-5 w-5" />
                Ver Legislación
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Diseño moderno con cards */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900/30">
              <div className="text-4xl font-bold text-purple-600 mb-3">
                5-7%
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Prevalencia en niños
              </div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                2.5%
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Prevalencia en adultos
              </div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.4:1</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Proporción hombres:mujeres
              </div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                ~67%
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Persistencia en la adultez
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Herramientas principales */}
      <section className="py-14 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-700 dark:text-slate-200 mb-10">
            Lo más buscado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/20 border-0 shadow-xl hover:-translate-y-2">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 text-slate-800 dark:text-white">
                  Precios de medicamentos
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Metilfenidato, lisdexanfetamina, atomoxetina y más. Precios que se pagan en Farmacity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-indigo-900/20 border-0 shadow-xl hover:-translate-y-2">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 text-slate-800 dark:text-white">
                  Especialistas
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Profesionales de TDAH en cada provincia. Encontrá el tuyo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-900/20 border-0 shadow-xl hover:-translate-y-2">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 text-slate-800 dark:text-white">
                  Legislación
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Las leyes y decretos que afectan a quienes tienen TDAH.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Guides Section - Nueva sección para las guías */}
      <section className="py-14 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4">
              Guías
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Info clara y actualizada sobre diagnóstico, tratamientos y todo lo que
              necesitás saber.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-md transition-shadow bg-white dark:bg-slate-800 border">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link
                    href="/diagnostico"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Diagnóstico
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Autoevaluación, ruta diagnóstica, qué llevar y cómo se ve el TDAH en adultos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow bg-white dark:bg-slate-800 border">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link
                    href="/tratamientos"
                    className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    Tratamientos
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Medicación (con tabla CADDRA), terapia cognitivo-conductual y cambios de estilo de vida.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow bg-white dark:bg-slate-800 border">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link
                    href="/comorbilidades"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Comorbilidades
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Ansiedad, depresión, autismo y otras condiciones que suelen ir de la mano.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow bg-white dark:bg-slate-800 border">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link
                    href="/herramientas"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Herramientas
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Organización, foco, regulación emocional y estrategias reales para la vida adulta con TDAH.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
}
