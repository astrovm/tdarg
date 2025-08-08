import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ChevronDown, 
  ArrowRight, 
  Navigation, 
  CreditCard, 
  Gamepad2, 
  LayoutDashboard, 
  FileText,
  Eye,
  Zap,
  Target
} from "lucide-react"
import { Header } from "@/components/header"

export default function DiagnosticoOpcionesPage() {
  const options = [
    {
      id: 1,
      title: "Progressive Disclosure",
      subtitle: "Información bajo demanda",
      description: "Muestra información esencial primero, permite expandir detalles cuando necesites más profundidad. Perfecto para evitar la sobrecarga inicial.",
      icon: ChevronDown,
      color: "blue",
      route: "/diagnostico-option1",
      pros: ["Reduce sobrecarga cognitiva", "Control del usuario", "Información organizada por importancia"],
      cons: ["Requiere más clics", "Puede ocultar información importante"],
      bestFor: "Personas que se abruman con mucha información inicial"
    },
    {
      id: 2,
      title: "Visual Learning Path",
      subtitle: "Camino paso a paso",
      description: "Guía visual que muestra tu progreso a través de pasos claros. Usa íconos, colores y barras de progreso para mantener la motivación.",
      icon: Navigation,
      color: "green", 
      route: "/diagnostico-option2",
      pros: ["Progreso visual claro", "Motivador", "Estructura lógica"],
      cons: ["Más largo de completar", "Puede parecer como 'curso'"],
      bestFor: "Personas que necesitan ver su progreso y logros"
    },
    {
      id: 3,
      title: "Micro-Learning Cards",
      subtitle: "Una idea por tarjeta",
      description: "Información dividida en tarjetas digestibles. Una idea por tarjeta, navegación tipo flashcards, progreso por categorías.",
      icon: CreditCard,
      color: "purple",
      route: "/diagnostico-option3", 
      pros: ["Muy fácil de procesar", "A tu ritmo", "Ideal para atención limitada"],
      cons: ["Más tiempo total", "Muchos pasos para completar"],
      bestFor: "Personas con períodos de atención muy cortos"
    },
    {
      id: 4,
      title: "Interactive Dashboard",
      subtitle: "Panel personalizable",
      description: "Dashboard con widgets que puedes personalizar. Incluye seguimiento de síntomas, progreso y herramientas interactivas.",
      icon: LayoutDashboard,
      color: "orange",
      route: "/diagnostico-option4",
      pros: ["Altamente personalizable", "Muy interactivo", "Sientes control total"],
      cons: ["Puede ser abrumador", "Complejidad inicial alta"],
      bestFor: "Personas que quieren personalización total y disfrutan la tecnología"
    },
    {
      id: 5,
      title: "Simplified Linear Flow", 
      subtitle: "Lectura sin distracciones",
      description: "Diseño minimalista de una sola columna. Incluye modo lectura especial y progreso secuencial sin elementos que distraigan.",
      icon: FileText,
      color: "indigo",
      route: "/diagnostico-option5",
      pros: ["Sin distracciones", "Fácil de seguir", "Modo lectura especial"],
      cons: ["Puede parecer 'aburrido'", "Menos interactivo"],
      bestFor: "Personas que se distraen fácilmente con elementos visuales"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">5 Opciones de Diseño ADHD-Friendly</h1>
            <p className="text-xl text-blue-100 mb-6">
              Cada opción está optimizada para diferentes necesidades y preferencias de atención
            </p>
            <Badge variant="secondary" className="text-base px-4 py-2">
              Sección: Diagnóstico TDAH
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Comparison */}
          <div className="mb-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Comparación Rápida</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {options.map((option) => (
                <div key={option.id} className="text-center">
                  <div className={`w-16 h-16 bg-${option.color}-500 text-white rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <option.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{option.title}</h3>
                  <p className="text-xs text-muted-foreground">{option.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Option Cards */}
          <div className="space-y-8">
            {options.map((option) => (
              <Card key={option.id} className={`border-2 border-${option.color}-200 dark:border-${option.color}-800 hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-${option.color}-500 text-white rounded-lg flex items-center justify-center`}>
                        <option.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          Opción {option.id}: {option.title}
                          <Badge variant="outline" className={`text-${option.color}-600 border-${option.color}-300`}>
                            {option.subtitle}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {option.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Link href={option.route}>
                      <Button className={`bg-${option.color}-500 hover:bg-${option.color}-600 flex items-center gap-2`}>
                        <Eye className="h-4 w-4" />
                        Ver Demo
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    
                    {/* Pros */}
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Ventajas
                      </h4>
                      <ul className="space-y-2">
                        {option.pros.map((pro, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Cons */}
                    <div>
                      <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Consideraciones
                      </h4>
                      <ul className="space-y-2">
                        {option.cons.map((con, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Best For */}
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">
                        Ideal para
                      </h4>
                      <div className={`p-3 bg-${option.color}-50 dark:bg-${option.color}-950 rounded-lg border border-${option.color}-200 dark:border-${option.color}-800`}>
                        <p className="text-sm font-medium">
                          {option.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Ruta: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{option.route}</code>
                    </div>
                    <Link href={option.route}>
                      <Button variant="outline" className="flex items-center gap-2">
                        Probar esta opción
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">
              ¿Cómo elegir la mejor opción?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Navega y prueba:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Haz clic en "Ver Demo" para cada opción</li>
                  <li>• Prueba interactuar con cada diseño</li>
                  <li>• Nota cuál te resulta más natural</li>
                  <li>• Considera tu estilo de aprendizaje personal</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Preguntas para decidir:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• ¿Te abruma mucha información de una vez?</li>
                  <li>• ¿Prefieres ver tu progreso visualmente?</li>
                  <li>• ¿Te gusta personalizar interfaces?</li>
                  <li>• ¿Te distraen los elementos decorativos?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {options.map((option) => (
              <Link key={option.id} href={option.route}>
                <Button 
                  variant="outline" 
                  className="w-full h-auto p-4 flex flex-col items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <option.icon className={`h-6 w-6 text-${option.color}-500`} />
                  <span className="text-xs text-center">Opción {option.id}</span>
                </Button>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}