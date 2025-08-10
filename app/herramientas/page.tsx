"use client";

import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import type { CheckedState } from "@radix-ui/react-checkbox";
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

  // Step 1 checklist state
  // (Eliminado: estados no usados de ejemplo)

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
              <br /><br />
              <strong>Importante:</strong> Las apps y herramientas son apoyo, no reemplazan medicación ni terapia. 
              La combinación de medicación y terapia conductual produce la mayor mejoría en adultos con TDAH.
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
                  <div className="space-y-8">
                    {/* Resumen visual */}
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded text-center">
                        <div className="text-sm font-semibold">15-45 min</div>
                        <div className="text-xs text-muted-foreground">
                          Bloques de trabajo
                        </div>
                      </div>
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded text-center">
                        <div className="text-sm font-semibold">3 claves</div>
                        <div className="text-xs text-muted-foreground">
                          Siguientes 3 tareas
                        </div>
                      </div>
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded text-center">
                        <div className="text-sm font-semibold">
                          Espacios visuales
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Etiquetas y colores
                        </div>
                      </div>
                    </div>

                    {/* Tarjetas de técnicas */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Grid3X3 className="h-4 w-4" /> GTD (Getting Things
                            Done)
                          </CardTitle>
                          <CardDescription className="text-xs">
                            Sistema para vaciar la mente y organizar acciones
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-xs space-y-1">
                            <li>• Capturá todo en una bandeja de entrada</li>
                            <li>• Procesá: ¿es accionable?</li>
                            <li>• Poné contexto y próxima acción</li>
                            <li>• Revisá semanalmente</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Timer className="h-4 w-4" /> Pomodoro adaptado
                          </CardTitle>
                          <CardDescription className="text-xs">
                            Intervalos distintos según dificultad
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-3 gap-2 mb-2 text-center text-xs">
                            <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                              <div className="font-semibold">15 min</div>
                              <div>Difíciles</div>
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <div className="font-semibold">25 min</div>
                              <div>Normales</div>
                            </div>
                            <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded">
                              <div className="font-semibold">45 min</div>
                              <div>Interesantes</div>
                            </div>
                          </div>
                          <ul className="text-xs space-y-1">
                            <li>• Descansos 5-15 min obligatorios</li>
                            <li>• Timer visual o auditivo</li>
                            <li>• Sin distracciones durante el bloque</li>
                            <li>• Estudiantes reportan menos ansiedad y mayor resistencia</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" /> Siguientes 3
                          </CardTitle>
                          <CardDescription className="text-xs">
                            Priorizá solo 3 tareas del día
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 border rounded">
                              <div className="text-lg">🔥</div>
                              <div>Más importante</div>
                            </div>
                            <div className="p-2 border rounded">
                              <div className="text-lg">⚡</div>
                              <div>Segunda</div>
                            </div>
                            <div className="p-2 border rounded">
                              <div className="text-lg">📋</div>
                              <div>Tercera</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Organización del espacio */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <BookOpen className="h-4 w-4" /> Organización visual
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-xs space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Un lugar para cada cosa:</strong> fijo y
                                visible
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Transparencias:</strong> contenedores
                                que muestren contenido
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Etiquetas claras:</strong> palabras +
                                íconos
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Colores por categoría</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Recordatorios visuales:</strong> objetos visibles 
                                son más efectivos que notas adhesivas
                              </span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> Zonas funcionales
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                            <div className="font-semibold">Zona de entrada</div>
                            <div>Llaves, billetera, documentos</div>
                          </div>
                          <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                            <div className="font-semibold">Zona de trabajo</div>
                            <div>Escritorio despejado</div>
                          </div>
                          <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded">
                            <div className="font-semibold">
                              Zona de preparación
                            </div>
                            <div>Ropa día siguiente</div>
                          </div>
                          <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded">
                            <div className="font-semibold">
                              Zona de descanso
                            </div>
                            <div>Libre de trabajo</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Micro-checklists accionables */}
                    <ChecklistOrganizacion />
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
                  <div className="space-y-8">
                    {/* Resumen visual */}
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded text-center">
                        <div className="text-sm font-semibold">5-15 min</div>
                        <div className="text-xs text-muted-foreground">
                          Descansos obligatorios
                        </div>
                      </div>
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded text-center">
                        <div className="text-sm font-semibold">Doble tarea</div>
                        <div className="text-xs text-muted-foreground">
                          Solo estímulos mínimos
                        </div>
                      </div>
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded text-center">
                        <div className="text-sm font-semibold">15-45 min</div>
                        <div className="text-xs text-muted-foreground">
                          Fragmentos manejables
                        </div>
                      </div>
                    </div>

                    {/* Distracciones */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Headphones className="h-4 w-4" /> Distracciones
                            externas
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div>
                              <h5 className="font-semibold mb-1">Auditivas</h5>
                              <ul className="space-y-1 text-xs">
                                <li>• Cancelación de ruido</li>
                                <li>• Ruido blanco / música instrumental</li>
                                <li>• Espacios silenciosos</li>
                                <li>• Evitar conversaciones cercanas</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-1">Visuales</h5>
                              <ul className="space-y-1 text-xs">
                                <li>• Escritorio despejado</li>
                                <li>• Bloquear sitios distractores</li>
                                <li>• Filtro de luz azul</li>
                                <li>• Ubicarse de espaldas al movimiento</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Brain className="h-4 w-4" /> Distracciones internas
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div>
                              <h5 className="font-semibold mb-1">
                                Pensamientos intrusivos
                              </h5>
                              <ul className="space-y-1 text-xs">
                                <li>• Libreta de parking de ideas</li>
                                <li>• Técnica «después lo pienso»</li>
                                <li>• Mindfulness 5 minutos</li>
                                <li>• Recordatorios programados</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-1">
                                Impulsos físicos
                              </h5>
                              <ul className="space-y-1 text-xs">
                                <li>• Fidget discreto</li>
                                <li>• Pausas de movimiento</li>
                                <li>• Escritorio de pie alternado</li>
                                <li>• Pelota de ejercicio</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Técnicas de concentración */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Gamepad2 className="h-4 w-4" /> Doble tarea (bien
                            usada)
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <h5 className="font-semibold mb-2 text-green-600">
                              ✓ Apropiadas
                            </h5>
                            <ul className="space-y-1">
                              <li>• Música instrumental suave</li>
                              <li>• Mascar chicle</li>
                              <li>• Fidget silencioso</li>
                              <li>• Caminar mientras lee</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2 text-red-600">
                              ✗ Evitar
                            </h5>
                            <ul className="space-y-1">
                              <li>• Redes sociales</li>
                              <li>• Videos complejos</li>
                              <li>• Conversaciones</li>
                              <li>• Tareas con decisiones</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Grid3X3 className="h-4 w-4" /> Fragmentación
                            (chunking)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                            <h5 className="font-semibold text-sm mb-2">
                              Reglas
                            </h5>
                            <ul className="text-xs space-y-1">
                              <li>• 15-45 min por fragmento</li>
                              <li>• Un objetivo claro por fragmento</li>
                              <li>• Recompensa pequeña entre fragmentos</li>
                              <li>• Progreso visible (checklist/barra)</li>
                              <li>• Alterná tareas demandantes con simples</li>
                              <li>• Micro-objetivos mejoran adherencia 47%</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Micro-checklists accionables */}
                    <ChecklistAtencion />
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
                  <div className="space-y-8">
                    {/* Resumen visual */}
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded text-center">
                        <div className="text-sm font-semibold">STOP</div>
                        <div className="text-xs text-muted-foreground">
                          Pausa, respirá, observá, procede
                        </div>
                      </div>
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded text-center">
                        <div className="text-sm font-semibold">4-7-8</div>
                        <div className="text-xs text-muted-foreground">
                          Para bajar ansiedad
                        </div>
                      </div>
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded text-center">
                        <div className="text-sm font-semibold">
                          Escucha activa
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Visual + verbal
                        </div>
                      </div>
                    </div>

                    {/* Regulación emocional */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Clock className="h-4 w-4" /> Técnica STOP
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
                          <div className="p-2 bg-red-50 dark:bg-red-950 rounded">
                            <div className="text-lg font-bold text-red-500">
                              S
                            </div>
                            <div className="font-semibold">STOP</div>
                            <div>Detente</div>
                          </div>
                          <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded">
                            <div className="text-lg font-bold text-amber-500">
                              T
                            </div>
                            <div className="font-semibold">Respirá</div>
                            <div>3 veces</div>
                          </div>
                          <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                            <div className="text-lg font-bold text-blue-500">
                              O
                            </div>
                            <div className="font-semibold">Observá</div>
                            <div>¿Qué siento?</div>
                          </div>
                          <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                            <div className="text-lg font-bold text-green-500">
                              P
                            </div>
                            <div className="font-semibold">Procedé</div>
                            <div>Actuá consciente</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Target className="h-4 w-4" /> Técnicas de
                            respiración
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                            <h5 className="font-semibold mb-2">4-7-8</h5>
                            <div className="space-y-1 mb-2">
                              <div>Inhala 4</div>
                              <div>Retén 7</div>
                              <div>Exhala 8</div>
                            </div>
                            <div className="text-muted-foreground">
                              Para ansiedad
                            </div>
                          </div>
                          <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                            <h5 className="font-semibold mb-2">Cuadrada</h5>
                            <div className="space-y-1 mb-2">
                              <div>Inhala 4</div>
                              <div>Retén 4</div>
                              <div>Exhala 4</div>
                              <div>Pausa 4</div>
                            </div>
                            <div className="text-muted-foreground">
                              Para concentración
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 dark:bg-green-950 rounded col-span-2">
                            <h5 className="font-semibold mb-2">Evidencia científica</h5>
                            <div className="text-xs text-muted-foreground">
                              Meta-análisis (682 participantes): mindfulness reduce significativamente 
                              inatención (-0.82) e hiperactividad/impulsividad (-0.68)
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Comunicación */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Users className="h-4 w-4" /> Interrupciones
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-xs">
                          <div>
                            <h5 className="font-semibold mb-1">Prevención</h5>
                            <ul className="space-y-1">
                              <li>• Tomá notas mientras escuchás</li>
                              <li>• Usá un «objeto de turno»</li>
                              <li>• Sentate sobre las manos</li>
                              <li>• Escribí la idea en lugar de decirla</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                            <div className="font-semibold mb-1">
                              Si ya interrumpiste
                            </div>
                            <div>
                              Perdón, te interrumpí. Por favor continuá, vuelvo
                              a mi punto después.
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" /> Escucha activa
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <h5 className="font-semibold mb-2">Visual</h5>
                            <ul className="space-y-1">
                              <li>• Contacto visual natural</li>
                              <li>• Asentir para seguimiento</li>
                              <li>• Notas de puntos clave</li>
                              <li>• Dibujar si ayuda</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Verbal</h5>
                            <ul className="space-y-1">
                              <li>• «Si entiendo bien, decís que…»</li>
                              <li>• Preguntas clarificadoras</li>
                              <li>• Resúmenes periódicos</li>
                              <li>• «¿Podés repetir eso?»</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Micro-checklists accionables */}
                    <ChecklistEmociones />
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
                  <div className="space-y-8">
                    {/* Resumen visual */}
                    <div className="grid md:grid-cols-4 gap-3">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded text-center">
                        <div className="text-sm font-semibold">
                          Tareas
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Organización básica
                        </div>
                      </div>
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded text-center">
                        <div className="text-sm font-semibold">Terapéuticas</div>
                        <div className="text-xs text-muted-foreground">
                          Apps con evidencia
                        </div>
                      </div>
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded text-center">
                        <div className="text-sm font-semibold">Foco</div>
                        <div className="text-xs text-muted-foreground">
                          Tiempo y atención
                        </div>
                      </div>
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded text-center">
                        <div className="text-sm font-semibold">
                          Hábitos
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Rutinas sostenibles
                        </div>
                      </div>
                    </div>

                    {/* Gestión de Tareas y Productividad */}
                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Smartphone className="h-5 w-5" /> Gestión de Tareas y Productividad
                        </CardTitle>
                        <CardDescription>
                          Apps para organizar tareas, proyectos y mejorar el foco
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Todoist */}
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
                              Sistema GTD con etiquetas y filtros. Reduce impulsividad y facilita enfocarse en lo importante
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>GTD</Badge>
                              <Badge>Multiplataforma</Badge>
                            </div>
                          </div>
                          {/* Microsoft To Do */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://to-do.microsoft.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Microsoft To Do
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Actúa como "memoria externa". Integración fluida reduce esfuerzo cognitivo
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Gratis</Badge>
                              <Badge>Integrado</Badge>
                              <Badge>Simple</Badge>
                            </div>
                          </div>
                          {/* Google Tasks */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a
                                href="https://tasks.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                Google Tasks
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Tareas simples integradas a Gmail y Calendar
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Gratis</Badge>
                              <Badge>Integrado</Badge>
                              <Badge>Google</Badge>
                            </div>
                          </div>
                          {/* Trello */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://trello.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Trello
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Tableros kanban arrastrables. Facilita reordenar prioridades y ajustar planes
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Gratis</Badge>
                              <Badge>Visual</Badge>
                              <Badge>Kanban</Badge>
                            </div>
                          </div>
                          {/* Notion */}
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
                              Espacio de trabajo todo en uno para notas, tareas y proyectos
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Completo</Badge>
                              <Badge>Flexible</Badge>
                            </div>
                          </div>
                          {/* Any.do */}
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
                              Interfaz simple y visual para tareas básicas
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Simple</Badge>
                              <Badge>Visual</Badge>
                            </div>
                          </div>
                          {/* Remember The Milk */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://www.rememberthemilk.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Remember The Milk
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Interfaz minimalista con integración Gmail/Evernote. Simplifica gestión sin abrumar
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Minimalista</Badge>
                              <Badge>Integraciones</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bloqueadores */}
                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Focus className="h-5 w-5" /> Bloqueadores de
                          Distracciones
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 gap-4">
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
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Robusto</Badge>
                              <Badge>Extremo</Badge>
                            </div>
                          </div>
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
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Pago</Badge>
                              <Badge>Multiplataforma</Badge>
                              <Badge>Sincronización</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Asistentes de IA */}
                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MessageSquare className="h-5 w-5" /> Asistentes de IA
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                              Versátil y buen español
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Español</Badge>
                              <Badge>Versátil</Badge>
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
                              Textos largos y documentos
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Contexto largo</Badge>
                              <Badge>Documentos</Badge>
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
                              Integra Google
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Google</Badge>
                              <Badge>Integrado</Badge>
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
                              Razonamiento a bajo costo
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Razonamiento</Badge>
                              <Badge>Económico</Badge>
                            </div>
                          </div>
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
                              Contexto muy largo
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Contexto extenso</Badge>
                              <Badge>Chino/Inglés</Badge>
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
                              Integrado con X (Twitter)
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>X/Twitter</Badge>
                              <Badge>Tiempo real</Badge>
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
                              Respuestas con fuentes
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Fuentes</Badge>
                              <Badge>Búsqueda</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tratamientos digitales y apps de hábitos */}
                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Gamepad2 className="h-5 w-5" /> Tratamientos Digitales
                        </CardTitle>
                        <CardDescription>
                          Apps con enfoque terapéutico para el TDAH
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Inflow */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://www.getinflow.io" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Inflow
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              App de TCC con módulos educativos. Estudios reportan reducción de hiperactividad e impulsividad
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Pago</Badge>
                              <Badge>TCC</Badge>
                              <Badge>Adultos</Badge>
                            </div>
                          </div>
                          {/* EndeavorOTC */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://www.endeavorotc.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                EndeavorOTC
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Videojuego aprobado por FDA. Mejoras de atención tras 6 semanas, requiere práctica constante
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Pago</Badge>
                              <Badge>Videojuego</Badge>
                              <Badge>Terapéutico</Badge>
                            </div>
                          </div>
                          {/* Joon */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://www.joonapp.io" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Joon
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Misiones gamificadas para niños para fomentar hábitos positivos
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Niños</Badge>
                              <Badge>Gamificación</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Foco y Control de Tiempo */}
                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Timer className="h-5 w-5" /> Foco y Control de Tiempo
                        </CardTitle>
                        <CardDescription>
                          Apps para mantener concentración y gestionar el tiempo
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Forest */}
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
                              Gamificación para mantener foco con árboles virtuales
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Pago</Badge>
                              <Badge>Gamificado</Badge>
                              <Badge>Motivador</Badge>
                            </div>
                          </div>
                          {/* RescueTime */}
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
                              Analiza en tiempo real cómo usás dispositivos, detecta "fugas de tiempo"
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Automático</Badge>
                              <Badge>Análisis</Badge>
                            </div>
                          </div>
                          {/* Google Keep */}
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
                              Notas rápidas visuales con colores y recordatorios
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Gratis</Badge>
                              <Badge>Visual</Badge>
                              <Badge>Google</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Construcción de Hábitos */}
                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" /> Construcción de Hábitos
                        </CardTitle>
                        <CardDescription>
                          Apps especializadas en crear y mantener hábitos y rutinas
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Habitica */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://habitica.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Habitica
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Sistema RPG para tareas. Provee dopamina con recompensas, útil para iniciar tareas sin procrastinar
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>RPG</Badge>
                              <Badge>Gamificado</Badge>
                            </div>
                          </div>
                          {/* Routinery */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://routine.co" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Routinery
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Descompone rutinas en pasos cronometrados. Ayuda a mantener atención y crear hábitos sostenibles
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Rutinas</Badge>
                              <Badge>Temporizadores</Badge>
                            </div>
                          </div>
                          {/* Productive */}
                          <div className="p-3 border rounded">
                            <h5 className="font-semibold text-sm mb-1">
                              <a href="https://productive.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Productive
                              </a>
                            </h5>
                            <p className="text-xs text-muted-foreground mb-2">
                              Seguimiento visual de hábitos con estadísticas y integración Siri/Assistant
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <Badge>Freemium</Badge>
                              <Badge>Visual</Badge>
                              <Badge>Estadísticas</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Herramientas físicas y teléfono */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Gamepad2 className="h-4 w-4" /> Herramientas
                            físicas
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-3 gap-3 text-center text-xs">
                          <div className="p-2">
                            <div className="text-2xl mb-1">🎲</div>
                            <div className="font-semibold">Fidget Cube</div>
                            <div className="text-muted-foreground">
                              Texturas
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="text-2xl mb-1">💍</div>
                            <div className="font-semibold">Spinner Rings</div>
                            <div className="text-muted-foreground">
                              Discretos
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="text-2xl mb-1">🏀</div>
                            <div className="font-semibold">Stress Balls</div>
                            <div className="text-muted-foreground">Tensión</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Smartphone className="h-4 w-4" /> Configuración del
                            teléfono
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Notificaciones:</strong> Solo esenciales
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Pantalla inicial:</strong> Apps
                                productivas primero
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>No molestar:</strong> Programado
                                trabajo/sueño
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Límites:</strong> Redes con límites
                                estrictos
                              </span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Micro-checklists accionables */}
                    <ChecklistTecnologia />
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

function ChecklistOrganizacion() {
  const [today, setToday] = useState<Set<string>>(new Set());
  const [week, setWeek] = useState<Set<string>>(new Set());

  const toggle = (
    scope: "today" | "week",
    id: string,
    checked: CheckedState
  ) => {
    if (scope === "today") {
      setToday((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    } else {
      setWeek((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    }
  };

  const todayItems = [
    { id: "bandeja", icon: "📥", text: "Vaciar bandeja (5 min)" },
    { id: "3-tareas", icon: "🔥", text: "Definir siguientes 3 del día" },
    { id: "bloque", icon: "⏱️", text: "1 bloque Pomodoro con timer" },
  ] as const;

  const weekItems = [
    { id: "revision", icon: "🔁", text: "Revisión semanal (30 min)" },
    { id: "zonas", icon: "🗂️", text: "Crear/ajustar 1 zona funcional" },
    { id: "etiquetas", icon: "🏷️", text: "Etiquetar 5 cosas clave" },
  ] as const;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Hoy</CardTitle>
          <CardDescription className="text-xs">
            3 acciones rápidas para empezar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {todayItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={today.has(item.id)}
                onCheckedChange={(v) => toggle("today", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Esta semana</CardTitle>
          <CardDescription className="text-xs">
            Consolidá hábitos de organización
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {weekItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={week.has(item.id)}
                onCheckedChange={(v) => toggle("week", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function ChecklistAtencion() {
  const [quick, setQuick] = useState<Set<string>>(new Set());
  const [setup, setSetup] = useState<Set<string>>(new Set());

  const toggle = (
    scope: "quick" | "setup",
    id: string,
    checked: CheckedState
  ) => {
    if (scope === "quick") {
      setQuick((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    } else {
      setSetup((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    }
  };

  const quickItems = [
    {
      id: "timer",
      icon: "⏱️",
      text: "Poner un timer 25 min (sin distracciones)",
    },
    { id: "ruido", icon: "🎧", text: "Ruido blanco / música instrumental" },
    { id: "pausa", icon: "🚶", text: "Pausa de movimiento 5 min" },
  ] as const;

  const setupItems = [
    { id: "web", icon: "⛔", text: "Bloquear 3 sitios distractores" },
    { id: "fidget", icon: "🧩", text: "Dejar un fidget discreto a mano" },
    { id: "parking", icon: "🗒️", text: "Crear libreta de parking de ideas" },
  ] as const;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Ahora mismo</CardTitle>
          <CardDescription className="text-xs">
            3 acciones express
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={quick.has(item.id)}
                onCheckedChange={(v) => toggle("quick", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Configurar</CardTitle>
          <CardDescription className="text-xs">
            Pequeños cambios de entorno
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {setupItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={setup.has(item.id)}
                onCheckedChange={(v) => toggle("setup", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function ChecklistEmociones() {
  const [reg, setReg] = useState<Set<string>>(new Set());
  const [com, setCom] = useState<Set<string>>(new Set());

  const toggle = (scope: "reg" | "com", id: string, checked: CheckedState) => {
    if (scope === "reg") {
      setReg((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    } else {
      setCom((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    }
  };

  const regItems = [
    { id: "stop", icon: "🛑", text: "Practicar STOP 1 vez hoy" },
    { id: "respirar", icon: "🌬️", text: "3 rondas de 4-7-8" },
  ] as const;

  const comItems = [
    { id: "notas", icon: "📝", text: "Tomar notas en 1 conversación" },
    { id: "parafraseo", icon: "🗣️", text: "Decir: «Si entiendo bien…»" },
  ] as const;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Regulación</CardTitle>
          <CardDescription className="text-xs">
            Prácticas de hoy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {regItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={reg.has(item.id)}
                onCheckedChange={(v) => toggle("reg", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Comunicación</CardTitle>
          <CardDescription className="text-xs">Probar hoy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {comItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={com.has(item.id)}
                onCheckedChange={(v) => toggle("com", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function ChecklistTecnologia() {
  const [apps, setApps] = useState<Set<string>>(new Set());
  const [bloqueo, setBloqueo] = useState<Set<string>>(new Set());

  const toggle = (
    scope: "apps" | "bloqueo",
    id: string,
    checked: CheckedState
  ) => {
    if (scope === "apps") {
      setApps((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    } else {
      setBloqueo((prev) => {
        const next = new Set(prev);
        if (checked === true) next.add(id);
        else next.delete(id);
        return next;
      });
    }
  };

  const appsItems = [
    {
      id: "todoist",
      icon: "🧾",
      text: "Crear lista 'Siguientes 3' en Todoist/Keep/Tasks",
    },
    {
      id: "timer",
      icon: "⏲️",
      text: "Instalar timer Pomodoro (o usar sistema nativo)",
    },
  ] as const;

  const bloqueoItems = [
    {
      id: "freedom",
      icon: "🔒",
      text: "Configurar bloqueador (1 lista sitios)",
    },
    { id: "dnd", icon: "🚫", text: "Programar No Molestar trabajo/sueño" },
  ] as const;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Apps</CardTitle>
          <CardDescription className="text-xs">Primeros pasos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {appsItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={apps.has(item.id)}
                onCheckedChange={(v) => toggle("apps", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      <Card className="border">
        <CardHeader>
          <CardTitle className="text-base">Bloqueo</CardTitle>
          <CardDescription className="text-xs">
            Reducir fricción
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {bloqueoItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
            >
              <Checkbox
                checked={bloqueo.has(item.id)}
                onCheckedChange={(v) => toggle("bloqueo", item.id, v)}
                className="mt-0.5"
                aria-label={item.text}
              />
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm">{item.text}</span>
            </label>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
