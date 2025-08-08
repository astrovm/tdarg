import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Calendar, Smartphone, BookOpen, Users, Target, Lightbulb, Timer, Grid3X3, Focus, Brain, MessageSquare, Headphones, StickyNote, Gamepad2 } from "lucide-react"
import { Header } from "@/components/header"
import { References, type Reference } from "@/components/references"
import { CitationLink } from "@/components/citation-link"

const references: Reference[] = [
  {
    id: 1,
    title: "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Hallowell, E. M., & Ratey, J. J.",
    url: "/adhd-2.0.pdf",
    description: "Fuente de numerosas estrategias prácticas y un cambio de paradigma hacia un enfoque de fortalezas para manejar el TDAH.",
    year: "2021",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida - Parte 2: Tratamiento",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description: "Detalla las intervenciones no farmacológicas y psicoeducativas recomendadas, que son la base de muchas de las estrategias presentadas.",
    year: "2020",
  },
];

export default function HerramientasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Herramientas TDAH
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Estrategias concretas para manejar el TDAH en la vida diaria<CitationLink number={1} /><CitationLink number={2} />
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <Alert className="mb-8">
        <Lightbulb className="h-4 w-4" />
        <AlertDescription>
          <strong>Personalización:</strong> No todas las estrategias funcionan para todas las personas. 
          Experimenta y adapta estas herramientas a tu estilo de vida y necesidades específicas.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="organizacion" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1">
          <TabsTrigger value="organizacion" className="text-xs md:text-sm">Organización</TabsTrigger>
          <TabsTrigger value="atencion" className="text-xs md:text-sm">Atención</TabsTrigger>
          <TabsTrigger value="emocional" className="text-xs md:text-sm">Manejo Emocional</TabsTrigger>
          <TabsTrigger value="tecnologia" className="text-xs md:text-sm">Tecnología</TabsTrigger>
        </TabsList>

        <TabsContent value="organizacion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Sistemas de Planificación y Gestión del Tiempo
              </CardTitle>
              <CardDescription>
                Métodos probados para organizar tareas y mejorar la productividad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="gtd">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Grid3X3 className="h-4 w-4" />
                      Getting Things Done (GTD)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Sistema para capturar y organizar todas las tareas de manera sistemática
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Capturar todo en una "bandeja de entrada"</li>
                      <li>• Procesar: ¿Es accionable?</li>
                      <li>• Organizar en listas contextuales</li>
                      <li>• Revisar semanalmente</li>
                      <li>• Ejecutar con confianza</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pomodoro">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4" />
                      Técnica Pomodoro Adaptada
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Intervalos de trabajo adaptados para personas con TDAH
                    </p>
                    <div className="grid md:grid-cols-3 gap-3 mb-3">
                      <div className="p-2 bg-green-50 dark:bg-green-950 rounded text-center">
                        <div className="font-semibold text-sm">15 min</div>
                        <div className="text-xs">Tareas difíciles</div>
                      </div>
                      <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded text-center">
                        <div className="font-semibold text-sm">25 min</div>
                        <div className="text-xs">Tareas normales</div>
                      </div>
                      <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded text-center">
                        <div className="font-semibold text-sm">45 min</div>
                        <div className="text-xs">Tareas interesantes</div>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1">
                      <li>• Descansos obligatorios de 5-15 minutos</li>
                      <li>• Usar timer visual o auditivo</li>
                      <li>• Eliminar distracciones durante el intervalo</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="eisenhower">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Matriz de Eisenhower
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Clasifica tareas por urgencia e importancia
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded">
                        <strong>Urgente + Importante</strong><br/>Hacer ahora
                      </div>
                      <div className="p-2 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded">
                        <strong>No Urgente + Importante</strong><br/>Planificar
                      </div>
                      <div className="p-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded">
                        <strong>Urgente + No Importante</strong><br/>Delegar
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded">
                        <strong>No Urgente + No Importante</strong><br/>Eliminar
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rule-of-3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Regla de los "Siguientes 3"
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Enfócate solo en las 3 tareas más importantes del día
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="p-2 border rounded text-center">
                        <div className="text-lg mb-1">🔥</div>
                        <div className="text-sm font-semibold">Tarea 1</div>
                        <div className="text-xs">La MÁS importante</div>
                      </div>
                      <div className="p-2 border rounded text-center">
                        <div className="text-lg mb-1">⚡</div>
                        <div className="text-sm font-semibold">Tarea 2</div>
                        <div className="text-xs">Segunda prioridad</div>
                      </div>
                      <div className="p-2 border rounded text-center">
                        <div className="text-lg mb-1">📋</div>
                        <div className="text-sm font-semibold">Tarea 3</div>
                        <div className="text-xs">Tercera prioridad</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Organización del Espacio
              </CardTitle>
              <CardDescription>
                Principios para crear espacios que apoyen la concentración
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="visual-org">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Grid3X3 className="h-4 w-4" />
                      Organización Visual
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Un lugar para cada cosa:</strong> Lugares fijos y visibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Contenedores transparentes:</strong> Para ver el contenido</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Etiquetas claras:</strong> Con palabras e imágenes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Colores codificados:</strong> Por categorías</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="functional-zones">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Zonas Funcionales
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                        <h5 className="font-semibold text-sm">Zona de Entrada</h5>
                        <p className="text-xs">Llaves, billetera, documentos</p>
                      </div>
                      <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                        <h5 className="font-semibold text-sm">Zona de Trabajo</h5>
                        <p className="text-xs">Escritorio organizado</p>
                      </div>
                      <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded">
                        <h5 className="font-semibold text-sm">Zona de Preparación</h5>
                        <p className="text-xs">Ropa del día siguiente</p>
                      </div>
                      <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded">
                        <h5 className="font-semibold text-sm">Zona de Descanso</h5>
                        <p className="text-xs">Libre de trabajo</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="atencion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Control de Distracciones
              </CardTitle>
              <CardDescription>
                Estrategias para minimizar interrupciones y mantener el foco
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="external-distractions">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Headphones className="h-4 w-4" />
                      Distracciones Externas
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Auditivas</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Auriculares con cancelación de ruido</li>
                          <li>• Ruido blanco o música instrumental</li>
                          <li>• Espacios silenciosos o bibliotecas</li>
                          <li>• Evitar espacios con conversaciones</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Visuales</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Escritorio despejado (solo lo esencial)</li>
                          <li>• Bloquear sitios web distractores</li>
                          <li>• Usar filtros de pantalla azul</li>
                          <li>• Ubicarse de espaldas al movimiento</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="internal-distractions">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Distracciones Internas
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Pensamientos Intrusivos</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Libreta de "parking" para ideas no relacionadas</li>
                          <li>• Técnica del "después lo pienso"</li>
                          <li>• Mindfulness básico (5 minutos)</li>
                          <li>• Recordatorios programados para preocupaciones</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Impulsos Físicos</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Objetos fidget discretos</li>
                          <li>• Descansos de movimiento programados</li>
                          <li>• Escritorio de pie alternativo</li>
                          <li>• Pelota de ejercicio como silla</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Focus className="h-5 w-5" />
                Técnicas de Concentración
              </CardTitle>
              <CardDescription>
                Métodos para mejorar el enfoque y la productividad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="dual-task">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Gamepad2 className="h-4 w-4" />
                      Método de la Doble Tarea
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Para tareas aburridas, agregar una actividad secundaria mínima puede ayudar a mantener la atención
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-green-600">✓ Apropiadas</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Música instrumental suave</li>
                          <li>• Mascar chicle</li>
                          <li>• Fidget toys silenciosos</li>
                          <li>• Caminar mientras lee</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-red-600">✗ Evitar</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Redes sociales o mensajes</li>
                          <li>• Videos complejos</li>
                          <li>• Conversaciones</li>
                          <li>• Actividades que requieran decisiones</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="chunking">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Grid3X3 className="h-4 w-4" />
                      Técnica de Fragmentación
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Dividir tareas grandes en fragmentos pequeños y manejables
                    </p>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg mb-3">
                      <h5 className="font-semibold text-sm mb-2">Reglas del Chunking</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Cada fragmento: 15-45 minutos máximo</li>
                        <li>• Un objetivo claro por fragmento</li>
                        <li>• Recompensa pequeña entre fragmentos</li>
                        <li>• Progreso visible (checklist, barra)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hyperfocus">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Manejo del Hiperfoco
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Alert className="mb-4">
                      <Target className="h-4 w-4" />
                      <AlertDescription>
                        El hiperfoco puede ser una fortaleza, pero necesita manejo para evitar descuidar otras responsabilidades.
                      </AlertDescription>
                    </Alert>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-green-600">Aprovechamiento</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Programar sesiones de hiperfoco</li>
                          <li>• Preparar: agua, snacks, baño</li>
                          <li>• Comunicar a otros tu horario</li>
                          <li>• Usar alarmas múltiples</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-amber-600">Prevención</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Timer cada 2-3 horas</li>
                          <li>• Lista: ¿comí? ¿tomé agua?</li>
                          <li>• Aviso 15 min antes de parar</li>
                          <li>• Citas que obliguen a parar</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emocional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Regulación Emocional
              </CardTitle>
              <CardDescription>
                Técnicas para manejar emociones intensas e impulsos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="stop-technique">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Técnica STOP
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Para momentos de alta emocionalidad o impulsos intensos
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="p-2 bg-red-50 dark:bg-red-950 rounded text-center">
                        <div className="text-xl font-bold text-red-500 mb-1">S</div>
                        <div className="text-xs font-semibold">STOP</div>
                        <div className="text-xs">Detente</div>
                      </div>
                      <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded text-center">
                        <div className="text-xl font-bold text-amber-500 mb-1">T</div>
                        <div className="text-xs font-semibold">RESPIRA</div>
                        <div className="text-xs">3 veces profundo</div>
                      </div>
                      <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded text-center">
                        <div className="text-xl font-bold text-blue-500 mb-1">O</div>
                        <div className="text-xs font-semibold">OBSERVA</div>
                        <div className="text-xs">¿Qué siento?</div>
                      </div>
                      <div className="p-2 bg-green-50 dark:bg-green-950 rounded text-center">
                        <div className="text-xl font-bold text-green-500 mb-1">P</div>
                        <div className="text-xs font-semibold">PROCEDE</div>
                        <div className="text-xs">Actúa consciente</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="breathing">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Técnicas de Respiración
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                        <h5 className="font-semibold mb-2">Respiración 4-7-8</h5>
                        <div className="space-y-1 text-sm mb-2">
                          <div>• Inhala 4 segundos</div>
                          <div>• Retén 7 segundos</div>
                          <div>• Exhala 8 segundos</div>
                        </div>
                        <p className="text-xs text-muted-foreground">Para ansiedad</p>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                        <h5 className="font-semibold mb-2">Respiración Cuadrada</h5>
                        <div className="space-y-1 text-sm mb-2">
                          <div>• Inhala 4 segundos</div>
                          <div>• Retén 4 segundos</div>
                          <div>• Exhala 4 segundos</div>
                          <div>• Pausa 4 segundos</div>
                        </div>
                        <p className="text-xs text-muted-foreground">Para concentración</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Habilidades de Comunicación
              </CardTitle>
              <CardDescription>
                Estrategias para mejorar las relaciones interpersonales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="interruptions">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Manejo de Interrupciones
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Prevención</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Tomar notas durante conversaciones</li>
                          <li>• Usar objeto para "turno de habla"</li>
                          <li>• Sentarse en las manos</li>
                          <li>• Escribir la idea en lugar de decirla</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                        <h5 className="font-semibold text-sm mb-1">Si ya interrumpiste:</h5>
                        <p className="text-sm">"Perdón, te interrumpí. Por favor continúa, volveré a mi punto después."</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="active-listening">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Focus className="h-4 w-4" />
                      Escucha Activa
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Técnicas Visuales</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Mantener contacto visual natural</li>
                          <li>• Asentir para mostrar seguimiento</li>
                          <li>• Tomar notas de puntos clave</li>
                          <li>• Dibujar mientras escuchas (si ayuda)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Técnicas Verbales</h5>
                        <ul className="text-sm space-y-1">
                          <li>• "Si entiendo bien, dices que..."</li>
                          <li>• Hacer preguntas clarificadoras</li>
                          <li>• Resumir periódicamente</li>
                          <li>• "¿Puedes repetir eso?"</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="adhd-communication">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Comunicar sobre el TDAH
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                        <h5 className="font-semibold text-sm mb-2">En el Trabajo</h5>
                        <p className="text-sm mb-2">"Tengo TDAH. Trabajo mejor con estructura clara y soy muy creativo bajo presión."</p>
                        <ul className="text-xs space-y-1">
                          <li>• Enfócate en fortalezas</li>
                          <li>• Propón adaptaciones específicas</li>
                          <li>• Menciona resultados positivos</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                        <h5 className="font-semibold text-sm mb-2">Relaciones Personales</h5>
                        <p className="text-sm mb-2">"A veces me distraigo, pero es parte de cómo funciona mi cerebro. Te valoro mucho."</p>
                        <ul className="text-xs space-y-1">
                          <li>• Sé vulnerable pero no te disculpes</li>
                          <li>• Explica comportamientos específicos</li>
                          <li>• Pide apoyo concreto</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tecnologia" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Aplicaciones Recomendadas
              </CardTitle>
              <CardDescription>
                Apps probadas para mejorar la productividad y el enfoque
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="task-apps">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Apps de Tareas y Productividad
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Todoist</h5>
                          <p className="text-xs text-muted-foreground mb-2">Sistema GTD completo</p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Freemium</Badge>
                            <Badge variant="outline" className="text-xs">Multiplataforma</Badge>
                          </div>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Any.do</h5>
                          <p className="text-xs text-muted-foreground mb-2">Interfaz simple y visual</p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Gratis</Badge>
                            <Badge variant="outline" className="text-xs">Fácil</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Forest</h5>
                          <p className="text-xs text-muted-foreground mb-2">Gamificación para mantener foco</p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Pago</Badge>
                            <Badge variant="outline" className="text-xs">Motivador</Badge>
                          </div>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">RescueTime</h5>
                          <p className="text-xs text-muted-foreground mb-2">Tracking automático de tiempo</p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Freemium</Badge>
                            <Badge variant="outline" className="text-xs">Automático</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="blocker-apps">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Focus className="h-4 w-4" />
                      Bloqueadores de Distracciones
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Cold Turkey</h5>
                          <p className="text-xs text-muted-foreground mb-1">Bloqueo robusto, difícil de desactivar</p>
                          <ul className="text-xs space-y-1">
                            <li>• Schedules programados</li>
                            <li>• Bloqueo de aplicaciones</li>
                            <li>• Modo extremo disponible</li>
                          </ul>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">uBlock Origin</h5>
                          <p className="text-xs text-muted-foreground mb-1">Extensión gratuita</p>
                          <ul className="text-xs space-y-1">
                            <li>• Completamente gratuito</li>
                            <li>• Bloquea publicidad</li>
                            <li>• Personalizable</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Freedom</h5>
                          <p className="text-xs text-muted-foreground mb-1">Multiplataforma</p>
                          <ul className="text-xs space-y-1">
                            <li>• Sincroniza dispositivos</li>
                            <li>• Listas predefinidas</li>
                            <li>• Estadísticas de uso</li>
                          </ul>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">StayFocusd</h5>
                          <p className="text-xs text-muted-foreground mb-1">Para Chrome</p>
                          <ul className="text-xs space-y-1">
                            <li>• Límites de tiempo</li>
                            <li>• Nuclear Option</li>
                            <li>• Por dominio</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="notes-apps">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <StickyNote className="h-4 w-4" />
                      Captura de Ideas y Notas
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Google Keep</h5>
                          <p className="text-xs text-muted-foreground mb-1">Notas visuales con colores</p>
                          <ul className="text-xs space-y-1">
                            <li>• Notas por voz</li>
                            <li>• Recordatorios por ubicación</li>
                            <li>• Colaborativo</li>
                          </ul>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Otter.ai</h5>
                          <p className="text-xs text-muted-foreground mb-1">Transcripción automática</p>
                          <ul className="text-xs space-y-1">
                            <li>• Tiempo real</li>
                            <li>• Identifica participantes</li>
                            <li>• Plan gratuito</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Obsidian</h5>
                          <p className="text-xs text-muted-foreground mb-1">Pensamiento en redes</p>
                          <ul className="text-xs space-y-1">
                            <li>• Mapas de conocimiento</li>
                            <li>• Enlaces entre notas</li>
                            <li>• Muy personalizable</li>
                          </ul>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-1">Voice Memos</h5>
                          <p className="text-xs text-muted-foreground mb-1">Apps nativas de grabación</p>
                          <ul className="text-xs space-y-1">
                            <li>• Acceso rápido</li>
                            <li>• Sincronización</li>
                            <li>• Gratuito</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5" />
                Herramientas Físicas
              </CardTitle>
              <CardDescription>
                Dispositivos y objetos que apoyan la concentración
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="fidget-tools">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Gamepad2 className="h-4 w-4" />
                      Fidget Tools
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="text-center p-2">
                        <div className="text-2xl mb-1">🎲</div>
                        <div className="text-sm font-semibold">Fidget Cube</div>
                        <div className="text-xs text-muted-foreground">Múltiples texturas</div>
                      </div>
                      <div className="text-center p-2">
                        <div className="text-2xl mb-1">💍</div>
                        <div className="text-sm font-semibold">Spinner Rings</div>
                        <div className="text-xs text-muted-foreground">Discretos</div>
                      </div>
                      <div className="text-center p-2">
                        <div className="text-2xl mb-1">🏀</div>
                        <div className="text-sm font-semibold">Stress Balls</div>
                        <div className="text-xs text-muted-foreground">Alivio de tensión</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wearables">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Wearables y Electrónicos
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Smartwatch con alarmas por vibración</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Auriculares con cancelación de ruido</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Fitness trackers para recordar movimiento</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Timer de cocina visual</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phone-setup">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Configuración del Teléfono
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Notificaciones:</strong> Solo esenciales (llamadas, mensajes familia)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Pantalla inicial:</strong> Solo apps productivas en primera pantalla</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Modo No Molestar:</strong> Programado durante trabajo y sueño</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Límites de tiempo:</strong> Apps redes sociales con límites estrictos</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Mensaje final */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-blue-500" />
            Recuerda: La Clave está en la Experimentación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm">
              No existe una solución única para todos. Estas herramientas y estrategias son un punto de partida. 
              La clave está en experimentar, adaptar y encontrar tu combinación personal de recursos que funcione 
              para tu estilo de vida específico.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Empieza Pequeño</h4>
                <p className="text-xs">Implementa 1-2 estrategias a la vez, no todas de una vez</p>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Sé Paciente</h4>
                <p className="text-xs">Las nuevas estrategias necesitan 2-4 semanas para convertirse en hábitos</p>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Adapta Siempre</h4>
                <p className="text-xs">Lo que funciona hoy puede necesitar ajustes mañana, y eso está bien</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <References references={references} />
    </div>
    </div>
  )
}