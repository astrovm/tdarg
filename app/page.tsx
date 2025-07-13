import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Stethoscope, Scale, TrendingUp, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            TDAH en Argentina
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Información actualizada sobre el Trastorno por Déficit de Atención e
            Hiperactividad. Precios oficiales, directorio de especialistas, diagnósticos y análisis legislativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/precios">Ver Precios de Medicamentos</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/legislacion">Análisis de Legislación</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5-7%</div>
              <div className="text-gray-600 dark:text-gray-300">Prevalencia en niños</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.5%</div>
              <div className="text-gray-600 dark:text-gray-300">Prevalencia en adultos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3:1</div>
              <div className="text-gray-600 dark:text-gray-300">Ratio niños:niñas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-gray-600 dark:text-gray-300">Respuesta al tratamiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Recursos Disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Precios Actualizados</CardTitle>
                <CardDescription>
                  Precios oficiales de metilfenidato y atomoxetina desde el sitio del gobierno
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/precios">Ver Precios</Link>
                </Button>
              </CardContent>
            </Card>


            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Stethoscope className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Directorio de Especialistas</CardTitle>
                <CardDescription>Encuentra especialistas en TDAH en tu provincia</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/especialistas">Buscar Especialistas</Link>
                </Button>
              </CardContent>
            </Card>


            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Scale className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Legislación</CardTitle>
                <CardDescription>Seguimiento de leyes y decretos relacionados con TDAH</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/legislacion">Ver Legislación</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-16 bg-amber-50 dark:bg-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-amber-200 dark:border-amber-800">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Importante</h4>
                <p className="text-gray-700 dark:text-gray-200">
                  Esta información es de carácter educativo y no reemplaza la consulta médica profesional. Siempre
                  consulte con un especialista para el diagnóstico y tratamiento del TDAH.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">Tdarg</span>
              </div>
              <p className="text-gray-400">TDAH en Argentina.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Recursos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/precios" className="hover:text-white">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/especialistas" className="hover:text-white">
                    Especialistas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Información</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/legislacion" className="hover:text-white">
                    Legislación
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <p className="text-gray-400">
                Para sugerencias o correcciones, contactanos a través de nuestros canales oficiales.
              </p>
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
