import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Scale, FileText, Calendar, ExternalLink, Download } from "lucide-react"
import { Header } from "@/components/header"

const leyes = [
  {
    numero: "Ley 27.306",
    titulo: "Ley Nacional de TDAH",
    descripcion: "Establece el marco legal para la atención integral del TDAH en Argentina",
    fecha: "2016-11-04",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    puntosClave: [
      "Reconocimiento del TDAH como condición neurobiológica",
      "Derecho a diagnóstico y tratamiento integral",
      "Cobertura obligatoria por obras sociales y prepagas",
      "Adaptaciones educativas necesarias",
    ],
  },
  {
    numero: "Decreto 432/2017",
    titulo: "Reglamentación de la Ley 27.306",
    descripcion: "Reglamenta la aplicación de la Ley Nacional de TDAH",
    fecha: "2017-06-15",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Poder Ejecutivo Nacional",
    puntosClave: [
      "Procedimientos para diagnóstico",
      "Protocolos de tratamiento",
      "Obligaciones de obras sociales",
      "Mecanismos de control y seguimiento",
    ],
  },
  {
    numero: "Resolución 2177/2018",
    titulo: "Nomenclador Nacional de Prestaciones Médicas",
    descripcion: "Incluye prestaciones específicas para TDAH en el nomenclador",
    fecha: "2018-09-20",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Ministerio de Salud",
    puntosClave: [
      "Códigos específicos para consultas TDAH",
      "Evaluaciones neuropsicológicas cubiertas",
      "Tratamientos farmacológicos incluidos",
      "Terapias de apoyo contempladas",
    ],
  },
  {
    numero: "Ley 26.061",
    titulo: "Ley de Protección Integral de Niños, Niñas y Adolescentes",
    descripcion: "Marco general de derechos que incluye el derecho a la salud mental",
    fecha: "2005-10-28",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    puntosClave: [
      "Derecho a la salud integral",
      "Protección especial para discapacidades",
      "Acceso a tratamientos especializados",
      "Participación en decisiones sobre su salud",
    ],
  },
  {
    numero: "Ley 24.901",
    titulo: "Sistema de Prestaciones Básicas para Personas con Discapacidad",
    descripcion: "Establece prestaciones básicas para personas con discapacidad",
    fecha: "1997-12-05",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Congreso Nacional",
    puntosClave: [
      "Prestaciones de rehabilitación",
      "Apoyo terapéutico integral",
      "Cobertura del 100% en ciertos casos",
      "Certificado Único de Discapacidad",
    ],
  },
  {
    numero: "Resolución CFE 311/16",
    titulo: "Promoción, Acreditación, Certificación y Titulación de Estudiantes con Discapacidad",
    descripcion: "Marco normativo para la inclusión educativa de estudiantes con TDAH",
    fecha: "2016-12-15",
    estado: "Vigente",
    tipo: "Nacional",
    organismo: "Consejo Federal de Educación",
    puntosClave: [
      "Adaptaciones curriculares",
      "Evaluaciones diferenciadas",
      "Apoyo pedagógico especializado",
      "Trayectorias educativas flexibles",
    ],
  },
]

const proyectos = [
  {
    titulo: "Proyecto de Ley - Ampliación de Cobertura TDAH",
    descripcion: "Propone ampliar la cobertura de tratamientos alternativos para TDAH",
    estado: "En comisión",
    camara: "Diputados",
    fecha: "2024-03-15",
    autor: "Dip. María González",
  },
  {
    titulo: "Proyecto de Resolución - Capacitación Docente",
    descripcion: "Solicita capacitación obligatoria sobre TDAH para docentes",
    estado: "En tratamiento",
    camara: "Senado",
    fecha: "2024-01-20",
    autor: "Sen. Carlos Rodríguez",
  },
  {
    titulo: "Proyecto de Ley - Registro Nacional de TDAH",
    descripcion: "Propone crear un registro nacional de personas con TDAH",
    estado: "Presentado",
    camara: "Diputados",
    fecha: "2023-11-10",
    autor: "Dip. Ana Martínez",
  },
]

export default function LegislacionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Marco Legal del TDAH en Argentina</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Conoce las leyes, decretos y resoluciones que regulan el diagnóstico, tratamiento y derechos de las personas
            con TDAH en Argentina.
          </p>
        </div>

        {/* Key Law Highlight */}
        <Card className="mb-8 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-800 rounded-full p-3">
                <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Ley 27.306 - Ley Nacional de TDAH
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-3">
                  Esta ley establece el marco legal fundamental para la atención integral del TDAH en Argentina,
                  garantizando el derecho al diagnóstico, tratamiento y cobertura médica.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar Ley
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver en InfoLEG
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Laws */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Legislación Vigente</h2>
          <div className="space-y-6">
            {leyes.map((ley, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{ley.numero}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-900 mt-1">
                        {ley.titulo}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={ley.estado === "Vigente" ? "default" : "secondary"}>{ley.estado}</Badge>
                      <Badge variant="outline">{ley.tipo}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{ley.descripcion}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Sancionada: {new Date(ley.fecha).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      Organismo: {ley.organismo}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Puntos Clave:</h4>
                    <ul className="space-y-1">
                      {ley.puntosClave.map((punto, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{punto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Original
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proyectos en Trámite</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant={
                        proyecto.estado === "En comisión"
                          ? "default"
                          : proyecto.estado === "En tratamiento"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {proyecto.estado}
                    </Badge>
                    <Badge variant="outline">{proyecto.camara}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{proyecto.titulo}</CardTitle>
                  <CardDescription>{proyecto.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(proyecto.fecha).toLocaleDateString("es-AR")}
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      {proyecto.autor}
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-4">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rights Summary */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Derechos Garantizados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>Derechos en Salud</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Diagnóstico gratuito y oportuno</li>
                  <li>• Tratamiento integral multidisciplinario</li>
                  <li>• Cobertura del 100% por obras sociales</li>
                  <li>• Acceso a medicación específica</li>
                  <li>• Evaluaciones neuropsicológicas</li>
                  <li>• Terapias de apoyo necesarias</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span>Derechos Educativos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Adaptaciones curriculares</li>
                  <li>• Evaluaciones diferenciadas</li>
                  <li>• Apoyo pedagógico especializado</li>
                  <li>• Integración escolar plena</li>
                  <li>• Capacitación docente</li>
                  <li>• Trayectorias educativas flexibles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact and Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>¿Vulneración de Derechos?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Si consideras que tus derechos o los de tu hijo/a no están siendo respetados, puedes realizar una
                denuncia o consulta.
              </p>
              <div className="space-y-2">
                <Button className="w-full">Realizar Denuncia</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Asesoramiento Legal
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recursos Adicionales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Accede a más información sobre legislación, guías de implementación y casos de aplicación práctica.
              </p>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/guias">Guías de Implementación</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/investigacion">Estudios Legales</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
