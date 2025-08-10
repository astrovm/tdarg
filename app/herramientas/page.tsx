"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Smartphone,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Timer,
  Grid3X3,
  Focus,
  Brain,
  MessageSquare,
  Headphones,
  Gamepad2,
} from "lucide-react";
import { Header } from "@/components/header";
import { References, type Reference } from "@/components/references";
//

const references: Reference[] = [
  {
    id: 1,
    title:
      "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Hallowell, E. M., & Ratey, J. J.",
    url: "/adhd-2.0.pdf",
    description:
      "Fuente de numerosas estrategias prácticas y un cambio de paradigma hacia un enfoque de fortalezas para manejar el TDAH.",
    year: "2021",
  },
  {
    id: 2,
    title:
      "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida - Parte 2: Tratamiento",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description:
      "Detalla las intervenciones no farmacológicas y psicoeducativas recomendadas, que son la base de muchas de las estrategias presentadas.",
    year: "2020",
  },
];

export default function HerramientasPage() {
  const steps = [
    {
      id: 1,
      title: "Organización",
      subtitle: "Tiempo y espacio",
      icon: Calendar,
    },
    { id: 2, title: "Atención", subtitle: "Concentración y foco", icon: Focus },
    {
      id: 3,
      title: "Manejo Emocional",
      subtitle: "Regulación y comunicación",
      icon: Brain,
    },
    {
      id: 4,
      title: "Tecnología",
      subtitle: "Apps y herramientas",
      icon: Smartphone,
    },
  ] as const;
  const {
    currentStep,
    progress,
    effectiveCompletedCount,
    goTo,
    next,
    prev,
    isDone,
  } = useStepProgress({ totalSteps: steps.length });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-3xl font-bold text-purple-600 mb-4">
            Herramientas TDAH: Tu Kit de Estrategias
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Descubrí herramientas prácticas para el manejo diario del TDAH
          </p>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Progreso del aprendizaje
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {effectiveCompletedCount}/{steps.length} completado
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => goTo(step.id)}
                className={`p-3 rounded-lg text-left transition-all ${
                  currentStep === step.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : isDone(step.id)
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {isDone(step.id) ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <step.icon className="h-4 w-4" />
                  )}
                  <span className="font-medium text-sm">{step.title}</span>
                </div>
                <p className="text-xs opacity-80">{step.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Step Content */}
        <div className="min-h-[500px]">
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              <strong>Personalización:</strong> No todas las estrategias
              funcionan para todas las personas. Experimentá y adaptá estas
              herramientas a tu estilo de vida y necesidades específicas.
            </AlertDescription>
          </Alert>

          {/* Step 1: Organization */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Calendar className="h-8 w-8 text-blue-500" />
                    Organización: Tiempo y Espacio
                  </CardTitle>
                  <CardDescription>
                    Sistemas y métodos para organizar tu vida de manera efectiva
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Time Management Systems */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          Sistemas de Planificación y Gestión del Tiempo
                        </CardTitle>
                        <CardDescription>
                          Métodos probados para organizar tareas y mejorar la
                          productividad
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
                                Sistema para capturar y organizar todas las
                                tareas de manera sistemática
                              </p>
                              <ul className="space-y-1 text-sm">
                                <li>
                                  • Capturar todo en una &quot;bandeja de
                                  entrada&quot;
                                </li>
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
                                Intervalos de trabajo adaptados para personas
                                con TDAH
                              </p>
                              <div className="grid md:grid-cols-3 gap-3 mb-3">
                                <div className="p-2 bg-green-50 dark:bg-green-950 rounded text-center">
                                  <div className="font-semibold text-sm">
                                    15 min
                                  </div>
                                  <div className="text-xs">
                                    Tareas difíciles
                                  </div>
                                </div>
                                <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded text-center">
                                  <div className="font-semibold text-sm">
                                    25 min
                                  </div>
                                  <div className="text-xs">Tareas normales</div>
                                </div>
                                <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded text-center">
                                  <div className="font-semibold text-sm">
                                    45 min
                                  </div>
                                  <div className="text-xs">
                                    Tareas interesantes
                                  </div>
                                </div>
                              </div>
                              <ul className="text-sm space-y-1">
                                <li>
                                  • Descansos obligatorios de 5-15 minutos
                                </li>
                                <li>• Usar timer visual o auditivo</li>
                                <li>
                                  • Eliminar distracciones durante el intervalo
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="rule-of-3">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4" />
                                Regla de los &quot;Siguientes 3&quot;
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="mb-3 text-sm text-muted-foreground">
                                Enfócate solo en las 3 tareas más importantes
                                del día
                              </p>
                              <div className="grid md:grid-cols-3 gap-3">
                                <div className="p-2 border rounded text-center">
                                  <div className="text-lg mb-1">🔥</div>
                                  <div className="text-sm font-semibold">
                                    Tarea 1
                                  </div>
                                  <div className="text-xs">
                                    La MÁS importante
                                  </div>
                                </div>
                                <div className="p-2 border rounded text-center">
                                  <div className="text-lg mb-1">⚡</div>
                                  <div className="text-sm font-semibold">
                                    Tarea 2
                                  </div>
                                  <div className="text-xs">
                                    Segunda prioridad
                                  </div>
                                </div>
                                <div className="p-2 border rounded text-center">
                                  <div className="text-lg mb-1">📋</div>
                                  <div className="text-sm font-semibold">
                                    Tarea 3
                                  </div>
                                  <div className="text-xs">
                                    Tercera prioridad
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>

                    {/* Space Organization */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Organización del Espacio
                        </CardTitle>
                        <CardDescription>
                          Principios para crear espacios que apoyen la
                          concentración
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
                                  <span>
                                    <strong>Un lugar para cada cosa:</strong>{" "}
                                    Lugares fijos y visibles
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Contenedores transparentes:</strong>{" "}
                                    Para ver el contenido
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Etiquetas claras:</strong> Con
                                    palabras e imágenes
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Colores codificados:</strong> Por
                                    categorías
                                  </span>
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
                                  <h5 className="font-semibold text-sm">
                                    Zona de Entrada
                                  </h5>
                                  <p className="text-xs">
                                    Llaves, billetera, documentos
                                  </p>
                                </div>
                                <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                                  <h5 className="font-semibold text-sm">
                                    Zona de Trabajo
                                  </h5>
                                  <p className="text-xs">
                                    Escritorio organizado
                                  </p>
                                </div>
                                <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded">
                                  <h5 className="font-semibold text-sm">
                                    Zona de Preparación
                                  </h5>
                                  <p className="text-xs">
                                    Ropa del día siguiente
                                  </p>
                                </div>
                                <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded">
                                  <h5 className="font-semibold text-sm">
                                    Zona de Descanso
                                  </h5>
                                  <p className="text-xs">Libre de trabajo</p>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 text-center">
                    <Button onClick={next} size="lg">
                      Siguiente: Atención{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 2: Attention */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Focus className="h-8 w-8 text-green-500" />
                    Atención: Control y Concentración
                  </CardTitle>
                  <CardDescription>
                    Estrategias para minimizar distracciones y mantener el foco
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Distraction Control */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Control de Distracciones
                        </CardTitle>
                        <CardDescription>
                          Estrategias para minimizar interrupciones y mantener
                          el foco
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
                                  <h5 className="font-semibold text-sm mb-2">
                                    Auditivas
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>
                                      • Auriculares con cancelación de ruido
                                    </li>
                                    <li>
                                      • Ruido blanco o música instrumental
                                    </li>
                                    <li>
                                      • Espacios silenciosos o bibliotecas
                                    </li>
                                    <li>
                                      • Evitar espacios con conversaciones
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm mb-2">
                                    Visuales
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>
                                      • Escritorio despejado (solo lo esencial)
                                    </li>
                                    <li>• Bloquear sitios web distractores</li>
                                    <li>• Usar filtros de pantalla azul</li>
                                    <li>
                                      • Ubicarse de espaldas al movimiento
                                    </li>
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
                                  <h5 className="font-semibold text-sm mb-2">
                                    Pensamientos Intrusivos
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>
                                      • Libreta de &quot;parking&quot; para
                                      ideas no relacionadas
                                    </li>
                                    <li>
                                      • Técnica del &quot;después lo
                                      pienso&quot;
                                    </li>
                                    <li>• Mindfulness básico (5 minutos)</li>
                                    <li>
                                      • Recordatorios programados para
                                      preocupaciones
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm mb-2">
                                    Impulsos Físicos
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>• Objetos fidget discretos</li>
                                    <li>
                                      • Descansos de movimiento programados
                                    </li>
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

                    {/* Focus Techniques */}
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
                                Para tareas aburridas, agregar una actividad
                                secundaria mínima puede ayudar a mantener la
                                atención
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-semibold text-sm mb-2 text-green-600">
                                    ✓ Apropiadas
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>• Música instrumental suave</li>
                                    <li>• Mascar chicle</li>
                                    <li>• Fidget toys silenciosos</li>
                                    <li>• Caminar mientras lee</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm mb-2 text-red-600">
                                    ✗ Evitar
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>• Redes sociales o mensajes</li>
                                    <li>• Videos complejos</li>
                                    <li>• Conversaciones</li>
                                    <li>
                                      • Actividades que requieran decisiones
                                    </li>
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
                                Dividir tareas grandes en fragmentos pequeños y
                                manejables
                              </p>
                              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg mb-3">
                                <h5 className="font-semibold text-sm mb-2">
                                  Reglas del Chunking
                                </h5>
                                <ul className="text-sm space-y-1">
                                  <li>
                                    • Cada fragmento: 15-45 minutos máximo
                                  </li>
                                  <li>• Un objetivo claro por fragmento</li>
                                  <li>• Recompensa pequeña entre fragmentos</li>
                                  <li>• Progreso visible (checklist, barra)</li>
                                </ul>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 text-center space-x-4">
                    <Button onClick={next} size="lg">
                      Siguiente: Manejo Emocional{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Emotional Management */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8 text-purple-500" />
                    Manejo Emocional y Comunicación
                  </CardTitle>
                  <CardDescription>
                    Técnicas para regular emociones y mejorar relaciones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Emotional Regulation */}
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
                                Para momentos de alta emocionalidad o impulsos
                                intensos
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                <div className="p-2 bg-red-50 dark:bg-red-950 rounded text-center">
                                  <div className="text-xl font-bold text-red-500 mb-1">
                                    S
                                  </div>
                                  <div className="text-xs font-semibold">
                                    STOP
                                  </div>
                                  <div className="text-xs">Detente</div>
                                </div>
                                <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded text-center">
                                  <div className="text-xl font-bold text-amber-500 mb-1">
                                    T
                                  </div>
                                  <div className="text-xs font-semibold">
                                    RESPIRA
                                  </div>
                                  <div className="text-xs">
                                    3 veces profundo
                                  </div>
                                </div>
                                <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded text-center">
                                  <div className="text-xl font-bold text-blue-500 mb-1">
                                    O
                                  </div>
                                  <div className="text-xs font-semibold">
                                    OBSERVA
                                  </div>
                                  <div className="text-xs">¿Qué siento?</div>
                                </div>
                                <div className="p-2 bg-green-50 dark:bg-green-950 rounded text-center">
                                  <div className="text-xl font-bold text-green-500 mb-1">
                                    P
                                  </div>
                                  <div className="text-xs font-semibold">
                                    PROCEDE
                                  </div>
                                  <div className="text-xs">
                                    Actúa consciente
                                  </div>
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
                                  <h5 className="font-semibold mb-2">
                                    Respiración 4-7-8
                                  </h5>
                                  <div className="space-y-1 text-sm mb-2">
                                    <div>• Inhala 4 segundos</div>
                                    <div>• Retén 7 segundos</div>
                                    <div>• Exhala 8 segundos</div>
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    Para ansiedad
                                  </p>
                                </div>
                                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                                  <h5 className="font-semibold mb-2">
                                    Respiración Cuadrada
                                  </h5>
                                  <div className="space-y-1 text-sm mb-2">
                                    <div>• Inhala 4 segundos</div>
                                    <div>• Retén 4 segundos</div>
                                    <div>• Exhala 4 segundos</div>
                                    <div>• Pausa 4 segundos</div>
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    Para concentración
                                  </p>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>

                    {/* Communication Skills */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MessageSquare className="h-5 w-5" />
                          Habilidades de Comunicación
                        </CardTitle>
                        <CardDescription>
                          Estrategias para mejorar las relaciones
                          interpersonales
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
                                  <h5 className="font-semibold text-sm mb-2">
                                    Prevención
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>
                                      • Tomar notas durante conversaciones
                                    </li>
                                    <li>
                                      • Usar objeto para &quot;turno de
                                      habla&quot;
                                    </li>
                                    <li>• Sentarse en las manos</li>
                                    <li>
                                      • Escribir la idea en lugar de decirla
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                                  <h5 className="font-semibold text-sm mb-1">
                                    Si ya interrumpiste:
                                  </h5>
                                  <p className="text-sm">
                                    &quot;Perdón, te interrumpí. Por favor
                                    continúa, volveré a mi punto después.&quot;
                                  </p>
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
                                  <h5 className="font-semibold text-sm mb-2">
                                    Técnicas Visuales
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>• Mantener contacto visual natural</li>
                                    <li>• Asentir para mostrar seguimiento</li>
                                    <li>• Tomar notas de puntos clave</li>
                                    <li>
                                      • Dibujar mientras escuchas (si ayuda)
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm mb-2">
                                    Técnicas Verbales
                                  </h5>
                                  <ul className="text-sm space-y-1">
                                    <li>
                                      • &quot;Si entiendo bien, decís
                                      que...&quot;
                                    </li>
                                    <li>• Hacer preguntas clarificadoras</li>
                                    <li>• Resumir periódicamente</li>
                                    <li>• &quot;¿Podés repetir eso?&quot;</li>
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 text-center space-x-4">
                    <Button onClick={next} size="lg">
                      Siguiente: Tecnología{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Technology */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Smartphone className="h-8 w-8 text-orange-500" />
                    Tecnología: Apps y Herramientas Digitales
                  </CardTitle>
                  <CardDescription>
                    Herramientas digitales que potencian tu manejo del TDAH
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Recommended Apps */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Smartphone className="h-5 w-5" />
                          Aplicaciones Recomendadas
                        </CardTitle>
                        <CardDescription>
                          Apps probadas para mejorar la productividad y el
                          enfoque
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="task-apps">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-2 w-full">
                                <CheckCircle className="h-4 w-4" />
                                Apps de Tareas y Productividad
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://todoist.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Todoist
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Sistema GTD completo
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Freemium
                                      </Badge>
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Multiplataforma
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://www.any.do"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Any.do
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Interfaz simple y visual
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Gratis
                                      </Badge>
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Fácil
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://www.forestapp.cc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Forest
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Gamificación para mantener foco
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Pago
                                      </Badge>
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Motivador
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://www.rescuetime.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        RescueTime
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Tracking automático de tiempo
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Freemium
                                      </Badge>
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        Automático
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://keep.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Google Keep
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Notas visuales con colores
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Gratis
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Colaborativo
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://www.notion.so"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Notion
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      All-in-one workspace
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Freemium
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Flexible
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="blocker-apps">
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-2 w-full">
                                <Focus className="h-4 w-4" />
                                Bloqueadores de Distracciones
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://getcoldturkey.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Cold Turkey
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Bloqueo robusto, difícil de desactivar
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Freemium
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Modo extremo
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://freedom.to"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Freedom
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Multiplataforma
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Pago
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Sincroniza dispositivos
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="ai-tools">
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <MessageSquare className="h-4 w-4" />
                                Asistentes de IA
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://chatgpt.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        ChatGPT
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Asistente conversacional versátil
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Freemium
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Español
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://claude.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Claude
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      IA enfocada en seguridad y análisis
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Gratis
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Inglés
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://gemini.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Gemini
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Integración con servicios de Google
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Freemium
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Multiplataforma
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://www.deepseek.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Deepseek
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Modelo optimizado para búsquedas
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Gratis
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Búsquedas
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://www.kimi.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Kimi
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      IA enfocada en el contexto largo
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Gratis
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Chino/Inglés
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://grok.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Grok
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Estilo conversacional informal
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Pago
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Humor
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="p-3 border rounded">
                                    <h5 className="font-semibold text-sm mb-1">
                                      <a
                                        href="https://www.perplexity.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        Perplexity
                                      </a>
                                    </h5>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      Respuestas con fuentes citadas
                                    </p>
                                    <div className="flex gap-1">
                                      <Badge variant="outline" className="text-xs">
                                        Freemium
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        Buscador
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>

                    {/* Physical Tools */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Gamepad2 className="h-5 w-5" />
                          Herramientas Físicas y Configuraciones
                        </CardTitle>
                        <CardDescription>
                          Dispositivos y configuraciones que apoyan la
                          concentración
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
                                  <div className="text-sm font-semibold">
                                    Fidget Cube
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Múltiples texturas
                                  </div>
                                </div>
                                <div className="text-center p-2">
                                  <div className="text-2xl mb-1">💍</div>
                                  <div className="text-sm font-semibold">
                                    Spinner Rings
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Discretos
                                  </div>
                                </div>
                                <div className="text-center p-2">
                                  <div className="text-2xl mb-1">🏀</div>
                                  <div className="text-sm font-semibold">
                                    Stress Balls
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Alivio de tensión
                                  </div>
                                </div>
                              </div>
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
                                  <span>
                                    <strong>Notificaciones:</strong> Solo
                                    esenciales (llamadas, mensajes familia)
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Pantalla inicial:</strong> Solo apps
                                    productivas en primera pantalla
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Modo No Molestar:</strong>{" "}
                                    Programado durante trabajo y sueño
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>Límites de tiempo:</strong> Apps
                                    redes sociales con límites estrictos
                                  </span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 text-center space-x-4">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      ¡Kit de Herramientas Completo!
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Final Message */}
        <Card className="border-blue-200 dark:border-blue-800 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-blue-500" />
              Recordá: La Clave está en la Experimentación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                No existe una solución única para todos. Estas herramientas y
                estrategias son un punto de partida. La clave está en
                experimentar, adaptar y encontrar tu combinación personal de
                recursos que funcione para tu estilo de vida específico.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Empezá Pequeño</h4>
                  <p className="text-xs">
                    Implementá 1-2 estrategias a la vez, no todas de una vez
                  </p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Sé Paciente</h4>
                  <p className="text-xs">
                    Las nuevas estrategias necesitan 2-4 semanas para
                    convertirse en hábitos
                  </p>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Adaptá Siempre</h4>
                  <p className="text-xs">
                    Lo que funciona hoy puede necesitar ajustes mañana, y eso
                    está bien
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <References references={references} />
      </div>
    </div>
  );
}
