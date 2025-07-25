import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Stethoscope, Scale, TrendingUp, AlertCircle, GitBranch, BookOpen, Users, Heart, Lightbulb } from "lucide-react"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <Header />

      {/* Hero Section - Gradiente moderno */}
      <section className="relative py-16 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-purple-600 mb-4">
            TDAH en Argentina
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Información integral sobre el Trastorno por Déficit de Atención e Hiperactividad. Precios de
            medicamentos, directorio de especialistas, análisis legislativo y guías educativas completas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link href="/precios">
                <TrendingUp className="mr-2 h-5 w-5" />
                Ver Precios
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/20" asChild>
              <Link href="/especialistas">
                <Stethoscope className="mr-2 h-5 w-5" />
                Buscar Especialistas
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="bg-white/80 text-slate-700 hover:bg-white dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300" asChild>
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
              <div className="text-4xl font-bold text-purple-600 mb-3">5-7%</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Prevalencia en niños</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30">
              <div className="text-3xl font-bold text-indigo-600 mb-2">2.5%</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Prevalencia en adultos</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30">
              <div className="text-3xl font-bold text-blue-600 mb-2">3:1</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Ratio niños:niñas</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-3xl font-bold text-emerald-600 mb-2">70%</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Respuesta al tratamiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Herramientas principales */}
      <section className="py-14 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-700 dark:text-slate-200 mb-10">Herramientas Principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/20 border-0 shadow-xl hover:-translate-y-2">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 text-slate-800 dark:text-white">Precios de Medicamentos</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">Precios actualizados de metilfenidato y atomoxetina desde Farmacity</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-indigo-900/20 border-0 shadow-xl hover:-translate-y-2">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 text-slate-800 dark:text-white">Directorio de Especialistas</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">Encuentra especialistas en TDAH en tu provincia</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-900/20 border-0 shadow-xl hover:-translate-y-2">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 text-slate-800 dark:text-white">Legislación</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">Seguimiento de leyes y decretos relacionados con TDAH</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Guides Section - Nueva sección para las guías */}
      <section className="py-14 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4">Guías Educativas</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Información completa basada en consensos médicos internacionales y evidencia científica
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/diagnostico" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Diagnóstico
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Proceso diagnóstico, criterios DSM-5 y evaluación profesional
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50 dark:from-slate-800 dark:to-green-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/tratamientos" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    Tratamientos
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Opciones farmacológicas y no farmacológicas disponibles
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50 dark:from-slate-800 dark:to-orange-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/adultos" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                    TDAH Adulto
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Manifestaciones y impacto del TDAH en la vida adulta
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/comorbilidades" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Comorbilidades
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Condiciones que frecuentemente acompañan al TDAH
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50 dark:from-slate-800 dark:to-teal-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/autismo" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    TDAH y Autismo
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Comorbilidad entre TDAH y Trastorno del Espectro Autista
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-yellow-50 dark:from-slate-800 dark:to-yellow-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/mitos" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                    Mitos y Realidad
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Desmitificando conceptos erróneos sobre el TDAH
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-rose-50 dark:from-slate-800 dark:to-rose-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/impacto" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                    Impacto
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Consecuencias del TDAH no tratado en la vida diaria
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-indigo-900/20 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-slate-800 dark:text-white">
                  <Link href="/recursos" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Recursos
                  </Link>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Herramientas, apps y recursos adicionales útiles
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Alert Section - Diseño moderno */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-r from-white to-amber-50 dark:from-slate-800 dark:to-amber-900/20 rounded-2xl shadow-lg border border-amber-200 dark:border-amber-800/50 p-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Importante</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Esta información es de carácter educativo y no reemplaza la consulta médica profesional. Siempre
                    consultá con un especialista para el diagnóstico y tratamiento del TDAH.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Fondo oscuro para contraste final */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6" />
                <span className="text-lg font-semibold">Tdarg</span>
              </div>
              <p className="text-gray-400">Portal integral de información sobre TDAH en Argentina con herramientas prácticas y guías educativas basadas en evidencia científica.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <p className="text-gray-400 mb-4">
                <a href="mailto:tdarg@4st.li" className="hover:text-white transition-colors">
                  tdarg@4st.li
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                Para consultas, sugerencias o reportar información desactualizada.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Código Abierto</h5>
              <p className="text-gray-400 mb-4">Este proyecto es de código abierto. Podés contribuir mejorando el contenido o reportando issues.</p>
              <a
                href="https://github.com/astrovm/tdarg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <GitBranch className="h-4 w-4" />
                <span>Ver en GitHub</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tdarg. Información con fines educativos.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
