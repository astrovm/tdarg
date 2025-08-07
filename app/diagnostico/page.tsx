"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertTriangle, CheckCircle, Clock, FileText, Users, Stethoscope, Info, Brain, Heart } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"
import { References, type Reference } from "@/components/references"
import { CitationLink } from "@/components/citation-link"

const references: Reference[] = [
  {
    id: 1,
    title: "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-1.pdf",
    description: "Documento de consenso que establece las pautas para el diagnóstico y tratamiento del TDAH en Argentina, incluyendo los criterios del DSM-5.",
    year: "2020",
  },
];

export default function DiagnosticoPage() {
  const [inattentionSymptoms, setInattentionSymptoms] = useState<boolean[]>(new Array(8).fill(false))
  const [hyperactivitySymptoms, setHyperactivitySymptoms] = useState<boolean[]>(new Array(9).fill(false))

  const handleInattentionChange = (index: number, checked: boolean) => {
    const newSymptoms = [...inattentionSymptoms]
    newSymptoms[index] = checked
    setInattentionSymptoms(newSymptoms)
  }

  const handleHyperactivityChange = (index: number, checked: boolean) => {
    const newSymptoms = [...hyperactivitySymptoms]
    newSymptoms[index] = checked
    setHyperactivitySymptoms(newSymptoms)
  }

  const inattentionCount = inattentionSymptoms.filter(Boolean).length
  const hyperactivityCount = hyperactivitySymptoms.filter(Boolean).length

  return (
    <TooltipProvider>
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Guía de Diagnóstico TDAH
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Una guía completa sobre el proceso diagnóstico del TDAH en Argentina
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Importante:</strong> Esta información es educativa. Solo un profesional especializado puede realizar un diagnóstico de TDAH.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        {/* ¿Quién puede diagnosticar? */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              ¿Quién puede diagnosticar TDAH?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Según el Consenso Argentino sobre TDAH, el diagnóstico debe ser realizado por:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Badge variant="secondary" className="mb-2">Médico Psiquiatra</Badge>
                <p className="text-sm text-muted-foreground">Con entrenamiento específico en TDAH</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Badge variant="secondary" className="mb-2">Neurólogo</Badge>
                <p className="text-sm text-muted-foreground">Con experiencia en trastornos del neurodesarrollo</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Badge variant="secondary" className="mb-2">Psicólogo Clínico</Badge>
                <p className="text-sm text-muted-foreground">Con formación en evaluación de TDAH</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auto-evaluación inicial */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Auto-evaluación Inicial
            </CardTitle>
            <CardDescription>
              Estas preguntas pueden ayudarte a identificar si necesitás una evaluación profesional
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Esta herramienta no es un diagnóstico</strong> y no reemplaza la consulta con un profesional cualificado.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="inattention" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="inattention" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Inatención ({inattentionCount}/8)
                </TabsTrigger>
                <TabsTrigger value="hyperactivity" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Hiperactividad ({hyperactivityCount}/9)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="inattention" className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Criterio DSM-5:</strong> Hasta 17 años: 6 o más síntomas • Mayores de 17 años: 5 o más síntomas<CitationLink number={1} />
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { short: "Dificultad para mantener atención", full: "A menudo falla en dar atención cercana a detalles o comete errores por descuido en el trabajo escolar, en el trabajo, o durante otras actividades" },
                    { short: "No parece escuchar", full: "A menudo no parece escuchar cuando se le habla directamente" },
                    { short: "No sigue instrucciones", full: "A menudo no sigue instrucciones y falla en finalizar el trabajo escolar, queehaceres, o deberes laborales" },
                    { short: "Dificultad para organizarse", full: "A menudo tiene dificultad organizando tareas y actividades" },
                    { short: "Evita esfuerzo mental", full: "A menudo evita, le disgusta, o es renuente a participar en tareas que requieren esfuerzo mental sostenido" },
                    { short: "Pierde objetos", full: "A menudo pierde cosas necesarias para tareas o actividades" },
                    { short: "Se distrae fácilmente", full: "A menudo es fácilmente distraído por estímulos externos" },
                    { short: "Es olvidadizo", full: "A menudo es descuidado en las actividades diarias" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Checkbox 
                        className="mt-0.5 flex-shrink-0"
                        checked={inattentionSymptoms[index]}
                        onCheckedChange={(checked) => handleInattentionChange(index, checked as boolean)}
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-sm">{item.short}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="text-xs">{item.full}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="hyperactivity" className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Criterio DSM-5:</strong> Hasta 17 años: 6 o más síntomas • Mayores de 17 años: 5 o más síntomas<CitationLink number={1} />
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { short: "Mueve manos/pies", full: "A menudo juguetea con las manos o pies o se squirme en el asiento" },
                    { short: "Se levanta inapropiadamente", full: "A menudo deja el asiento en situaciones donde se espera que permanezca sentado" },
                    { short: "Sensación de inquietud", full: "A menudo corre o trepa en situaciones donde es inapropiado (en adolescentes/adultos puede limitarse a sentirse inquieto)" },
                    { short: "Dificultad para actividades tranquilas", full: "A menudo incapaz de jugar o participar en actividades de ocio tranquilamente" },
                    { short: "Como si tuviera un motor", full: "A menudo está 'en movimiento', actuando como si fuera 'impulsado por un motor'" },
                    { short: "Habla excesivamente", full: "A menudo habla excesivamente" },
                    { short: "Responde precipitadamente", full: "A menudo suelta respuestas antes de que las preguntas hayan sido completadas" },
                    { short: "Dificultad para esperar", full: "A menudo tiene dificultad esperando su turno" },
                    { short: "Interrumpe", full: "A menudo interrumpe o se inmiscuye con otros" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Checkbox 
                        className="mt-0.5 flex-shrink-0"
                        checked={hyperactivitySymptoms[index]}
                        onCheckedChange={(checked) => handleHyperactivityChange(index, checked as boolean)}
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-sm">{item.short}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="text-xs">{item.full}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Proceso de evaluación */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Proceso de Evaluación Profesional
            </CardTitle>
            <CardDescription>
              Pasos que sigue un profesional para diagnosticar TDAH
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="step-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    Entrevista Clínica Inicial
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      El profesional explorará en detalle tus síntomas actuales y su impacto en la vida diaria
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Análisis de síntomas actuales y su duración</li>
                      <li>• Impacto en trabajo, estudios y relaciones</li>
                      <li>• Estrategias de afrontamiento utilizadas</li>
                      <li>• Motivación para la evaluación</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    Historia Clínica Completa
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Revisión exhaustiva del desarrollo desde la infancia y antecedentes relevantes
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Historia del desarrollo en la infancia</li>
                      <li>• Rendimiento académico histórico</li>
                      <li>• Antecedentes médicos y familiares</li>
                      <li>• Medicaciones y tratamientos previos</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    Escalas y Cuestionarios
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Instrumentos validados para evaluar síntomas de TDAH
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>ASRS-18:</strong> Escala de auto-reporte para adultos</li>
                      <li>• <strong>WURS-25:</strong> Escala retrospectiva de síntomas en la infancia</li>
                      <li>• <strong>ADHD-RS:</strong> Escala de calificación del TDAH</li>
                      <li>• Cuestionarios para familiares o parejas</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                    Evaluación de Comorbilidades
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Identificación de otras condiciones que pueden coexistir con TDAH
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Trastornos del estado de ánimo (depresión, bipolar)</li>
                      <li>• Trastornos de ansiedad</li>
                      <li>• Trastornos del aprendizaje</li>
                      <li>• Trastornos del espectro autista</li>
                      <li>• Abuso de sustancias</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step-5">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">5</div>
                    Evaluación Neuropsicológica (opcional)
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Pruebas específicas para evaluar funciones cognitivas afectadas en TDAH
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Pruebas de atención sostenida y selectiva</li>
                      <li>• Evaluación de memoria de trabajo</li>
                      <li>• Funciones ejecutivas (planificación, inhibición)</li>
                      <li>• Velocidad de procesamiento</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Qué llevar a la consulta */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Qué Llevar a la Primera Consulta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Documentación</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Boletines escolares antiguos</li>
                  <li>• Informes médicos previos</li>
                  <li>• Lista de medicamentos actuales</li>
                  <li>• Antecedentes familiares de TDAH</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Información a Preparar</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Ejemplos específicos de dificultades</li>
                  <li>• Impacto en trabajo/estudios</li>
                  <li>• Problemas en relaciones</li>
                  <li>• Estrategias que has probado</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diferenciación con otras condiciones */}
        <Card>
          <CardHeader>
            <CardTitle>Diagnóstico Diferencial</CardTitle>
            <CardDescription>
              Cómo diferenciar el TDAH de otras condiciones con síntomas similares
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="anxiety">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    TDAH vs. Trastornos de Ansiedad
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-blue-600">TDAH</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Síntomas crónicos desde la infancia</li>
                          <li>• Dificultades de atención constantes</li>
                          <li>• Inquietud física y mental</li>
                          <li>• Impulsividad en múltiples contextos</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-amber-600">Ansiedad</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Puede desarrollarse en cualquier momento</li>
                          <li>• Preocupación excesiva específica</li>
                          <li>• Inquietud relacionada con ansiedad</li>
                          <li>• Evitación de situaciones específicas</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground bg-blue-50 dark:bg-blue-950 p-2 rounded">
                      <strong>Nota:</strong> Pueden coexistir. La ansiedad puede ser secundaria al TDAH.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="depression">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    TDAH vs. Depresión
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-blue-600">TDAH</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Síntomas estables y crónicos</li>
                          <li>• Dificultades desde la infancia</li>
                          <li>• Problemas de atención constantes</li>
                          <li>• Estado de ánimo variable pero no episódico</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-green-600">Depresión</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Episodios definidos de tristeza</li>
                          <li>• Inicio puede ser en cualquier edad</li>
                          <li>• Dificultades de concentración episódicas</li>
                          <li>• Anhedonia y desesperanza marcadas</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground bg-green-50 dark:bg-green-950 p-2 rounded">
                      <strong>Nota:</strong> El TDAH puede causar depresión secundaria por frustración crónica.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bipolar">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    TDAH vs. Trastorno Bipolar
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-blue-600">TDAH</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Curso estable y crónico</li>
                          <li>• Hiperactividad constante</li>
                          <li>• Impulsividad no episódica</li>
                          <li>• Sin episodios maníacos claros</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-purple-600">Trastorno Bipolar</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Episodios definidos de manía/hipomanía</li>
                          <li>• Períodos de estado de ánimo normal</li>
                          <li>• Comportamientos extremos durante episodios</li>
                          <li>• Grandiosidad y euforia en manía</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground bg-purple-50 dark:bg-purple-950 p-2 rounded">
                      <strong>Nota:</strong> Diferenciación puede ser compleja. Requiere evaluación especializada.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="autism">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                    TDAH vs. Trastorno del Espectro Autista
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-blue-600">TDAH</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Foco en atención e hiperactividad</li>
                          <li>• Habilidades sociales generalmente preservadas</li>
                          <li>• Flexibilidad en intereses</li>
                          <li>• Sin patrones restrictivos marcados</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-teal-600">TEA</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Dificultades sociales y comunicativas</li>
                          <li>• Patrones restrictivos y repetitivos</li>
                          <li>• Intereses intensos y específicos</li>
                          <li>• Dificultades con cambios de rutina</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground bg-teal-50 dark:bg-teal-950 p-2 rounded">
                      <strong>Nota:</strong> Desde el DSM-5 pueden coexistir. Ambas condiciones pueden presentarse juntas.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Información importante */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Información Importante
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold mb-2">El diagnóstico es clínico</h4>
                <p className="text-sm">
                  No existe una prueba de laboratorio o imagen cerebral que diagnostique TDAH. 
                  Se basa en la evaluación clínica especializada.
                </p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                <h4 className="font-semibold mb-2">Síntomas desde la infancia</h4>
                <p className="text-sm">
                  Los síntomas deben haber estado presentes antes de los 12 años, 
                  aunque pueden no haber sido reconocidos hasta la adultez.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold mb-2">Impacto funcional</h4>
                <p className="text-sm">
                  Los síntomas deben causar deterioro significativo en el funcionamiento (social, académico, laboral). Generalmente se requiere en dos o más áreas, pero un deterioro grave en una sola puede ser suficiente.<CitationLink number={1} />
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <References references={references} />
    </div>
    </div>
    </TooltipProvider>
  )
}