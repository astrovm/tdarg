import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Clock, Users, FileText } from "lucide-react"
import { Header } from "@/components/header"

const guias = [
  {
    titulo: "Guía de Práctica Clínica para el TDAH en Niños y Adolescentes",
    descripcion: "Guía completa para el diagnóstico y tratamiento del TDAH en población pediátrica",
    autor: "Ministerio de Salud de la Nación",
    fecha: "2023",
    tipo: "Oficial",
    paginas: 156,
    categoria: "Diagnóstico y Tratamiento",
  },
  {
    titulo: "Protocolo de Evaluación Neuropsicológica en TDAH",
    descripcion: "Herramientas y procedimientos para la evaluación neuropsicológica integral",
    autor: "Sociedad Argentina de Neuropsicología",
    fecha: "2024",
    tipo: "Profesional",
    paginas: 89,
    categoria: "Evaluación",
  },
  {
    titulo: "TDAH en Adultos: Guía de Diagnóstico Diferencial",
    descripcion: "Criterios específicos para el diagnóstico de TDAH en población adulta",
    autor: "Asociación Argentina de Psiquiatría",
    fecha: "2023",
    tipo: "Especializada",
    paginas: 124,
    categoria: "Adultos",
  },
  {
    titulo: "Intervenciones Psicoeducativas en TDAH",
    descripcion: "Estrategias y técnicas para el abordaje psicoeducativo del TDAH",
    autor: "Fundación TDAH Argentina",
    fecha: "2024",
    tipo: "Educativa",
    paginas: 78,
    categoria: "Intervención",
  },
  {
    titulo: "Guía para Padres: Manejo del TDAH en el Hogar",
    descripcion: "Estrategias prácticas para padres y cuidadores de niños con TDAH",
    autor: "Hospital Garrahan",
    fecha: "2023",
    tipo: "Familiar",
    paginas: 45,
    categoria: "Familia",
  },
  {
    titulo: "TDAH y Comorbilidades: Abordaje Integral",
    descripcion: "Tratamiento de TDAH con trastornos comórbidos frecuentes",
    autor: "CONICET",
    fecha: "2024",
    tipo: "Investigación",
    paginas: 198,
    categoria: "Comorbilidades",
  },
]

export default function GuiasPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Guías Clínicas y Recursos</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Accede a las guías más actualizadas para el diagnóstico, tratamiento y manejo del TDAH, desarrolladas por
            instituciones reconocidas en Argentina.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {["Diagnóstico", "Tratamiento", "Evaluación", "Adultos", "Familia", "Comorbilidades"].map((categoria) => (
            <Button key={categoria} variant="outline" className="h-auto py-3 bg-transparent">
              {categoria}
            </Button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guias.map((guia, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant={
                      guia.tipo === "Oficial"
                        ? "default"
                        : guia.tipo === "Profesional"
                          ? "secondary"
                          : guia.tipo === "Especializada"
                            ? "destructive"
                            : guia.tipo === "Educativa"
                              ? "outline"
                              : guia.tipo === "Familiar"
                                ? "secondary"
                                : "default"
                    }
                  >
                    {guia.tipo}
                  </Badge>
                  <Badge variant="outline">{guia.categoria}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{guia.titulo}</CardTitle>
                <CardDescription>{guia.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Users className="h-4 w-4 mr-2" />
                    {guia.autor}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {guia.fecha}
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      {guia.paginas} páginas
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recursos Adicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Herramientas de Evaluación</CardTitle>
                <CardDescription>Escalas y cuestionarios validados para la evaluación del TDAH</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Escala ADHD-RS-IV</li>
                  <li>• Cuestionario de Conners</li>
                  <li>• SNAP-IV</li>
                  <li>• Escala de Vanderbilt</li>
                </ul>
                <Button className="w-full mt-4">Ver Herramientas</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recursos para Educadores</CardTitle>
                <CardDescription>Material específico para docentes y profesionales de la educación</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Adaptaciones curriculares</li>
                  <li>• Estrategias en el aula</li>
                  <li>• Manejo conductual</li>
                  <li>• Comunicación con padres</li>
                </ul>
                <Button className="w-full mt-4">Ver Recursos</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <Card className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                Contáctanos para solicitar recursos específicos o reportar enlaces rotos
              </p>
              <Button>Contactar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
