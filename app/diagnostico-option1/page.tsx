"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Stethoscope, CheckCircle, Clock, FileText, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"

export default function DiagnosticoOption1() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (cardIndex: number) => {
    setExpandedCards(prev => 
      prev.includes(cardIndex) 
        ? prev.filter(i => i !== cardIndex)
        : [...prev, cardIndex]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      {/* Simple Header */}
      <div className="bg-purple-50 dark:bg-purple-900/20 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-purple-600 mb-2">Guía de Diagnóstico TDAH</h1>
          <p className="text-slate-600 dark:text-slate-300">Información esencial paso a paso</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Essential Info First */}
        <Alert className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Solo un profesional especializado puede diagnosticar TDAH. Esta guía es informativa.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          
          {/* Card 1: Who can diagnose - Essential info visible */}
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">¿Quién puede diagnosticar?</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard(0)}
                  className="text-blue-600"
                >
                  {expandedCards.includes(0) ? (
                    <>Menos detalles <ChevronDown className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Más detalles <ChevronRight className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </div>
              <CardDescription>
                Médico psiquiatra, neurólogo o psicólogo clínico especializado
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(0)}>
              <CollapsibleContent>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 border rounded-lg">
                      <Badge variant="secondary" className="mb-2">Médico Psiquiatra</Badge>
                      <p className="text-xs text-muted-foreground">Con entrenamiento específico en TDAH</p>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <Badge variant="secondary" className="mb-2">Neurólogo</Badge>
                      <p className="text-xs text-muted-foreground">Con experiencia en neurodesarrollo</p>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <Badge variant="secondary" className="mb-2">Psicólogo Clínico</Badge>
                      <p className="text-xs text-muted-foreground">Con formación en evaluación de TDAH</p>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Card 2: Quick Self-Assessment - Essential visible */}
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Auto-evaluación rápida</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard(1)}
                  className="text-green-600"
                >
                  {expandedCards.includes(1) ? (
                    <>Ocultar test <ChevronDown className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Ver test <ChevronRight className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </div>
              <CardDescription>
                5 preguntas clave para identificar si necesitas evaluación profesional
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(1)}>
              <CollapsibleContent>
                <CardContent>
                  <Alert className="mb-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      No es un diagnóstico - solo una orientación inicial
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                      <h4 className="font-semibold text-sm mb-2">¿Te identificas con 3 o más?</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Dificultad para mantener atención en tareas</li>
                        <li>• Te distraes fácilmente con estímulos externos</li>
                        <li>• Pierdes objetos importantes frecuentemente</li>
                        <li>• Sientes inquietud interna constante</li>
                        <li>• Interrumpes conversaciones sin darte cuenta</li>
                      </ul>
                    </div>
                    <Button className="w-full" variant="outline">
                      Si respondiste SÍ a 3+, considera consultar un profesional
                    </Button>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Card 3: Process Overview - Essential visible */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <CardTitle className="text-lg">Proceso de evaluación</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard(2)}
                  className="text-purple-600"
                >
                  {expandedCards.includes(2) ? (
                    <>Ocultar pasos <ChevronDown className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Ver pasos <ChevronRight className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </div>
              <CardDescription>
                5 pasos principales que sigue un profesional
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(2)}>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { num: 1, title: "Entrevista inicial", desc: "Síntomas actuales y su impacto" },
                      { num: 2, title: "Historia clínica", desc: "Desarrollo desde la infancia" },
                      { num: 3, title: "Escalas y tests", desc: "ASRS-18, WURS-25, etc." },
                      { num: 4, title: "Comorbilidades", desc: "Otras condiciones que coexisten" },
                      { num: 5, title: "Evaluación opcional", desc: "Tests neuropsicológicos específicos" }
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 border rounded">
                        <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {step.num}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{step.title}</h4>
                          <p className="text-xs text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Card 4: What to bring - Essential visible */}
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-500" />
                  <CardTitle className="text-lg">Qué llevar a la consulta</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard(3)}
                  className="text-orange-600"
                >
                  {expandedCards.includes(3) ? (
                    <>Ocultar lista <ChevronDown className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Ver lista <ChevronRight className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </div>
              <CardDescription>
                Documentos y información que te ayudarán en la evaluación
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(3)}>
              <CollapsibleContent>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Documentación</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Boletines escolares antiguos</li>
                        <li>• Informes médicos previos</li>
                        <li>• Lista medicamentos actuales</li>
                        <li>• Antecedentes familiares</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Información a preparar</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Ejemplos específicos de dificultades</li>
                        <li>• Impacto en trabajo/estudios</li>
                        <li>• Problemas en relaciones</li>
                        <li>• Estrategias que has probado</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

        </div>

        {/* Next Steps CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">¿Siguiente paso?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Si identificaste síntomas, busca un profesional especializado
          </p>
          <div className="flex gap-2 justify-center">
            <Button variant="default">Encontrar Especialistas</Button>
            <Button variant="outline">Ver Tratamientos</Button>
          </div>
        </div>

      </div>
    </div>
  )
}