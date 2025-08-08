"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Pill, Brain, Heart, Shield, AlertTriangle, CheckCircle, Zap } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"

export default function TratamientosOption1() {
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
          <h1 className="text-3xl font-bold text-purple-600 mb-2">Tratamientos para TDAH</h1>
          <p className="text-slate-600 dark:text-slate-300">Información esencial, detalles bajo demanda</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        <Alert className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            El tratamiento debe ser multimodal e individualizado. Siempre consultá con un profesional especializado.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          
          {/* Card 1: Treatment Overview - Essential info visible */}
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">¿Cómo se trata el TDAH?</CardTitle>
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
                Tratamiento multimodal: medicación + terapia + cambios de estilo de vida
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(0)}>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded text-center">
                        <div className="text-2xl mb-2">💊</div>
                        <h4 className="font-semibold text-sm">Medicación</h4>
                        <p className="text-xs text-muted-foreground">Estimulantes o no estimulantes</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-center">
                        <div className="text-2xl mb-2">🧠</div>
                        <h4 className="font-semibold text-sm">Terapia</h4>
                        <p className="text-xs text-muted-foreground">TCC y entrenamiento de habilidades</p>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded text-center">
                        <div className="text-2xl mb-2">🏃</div>
                        <h4 className="font-semibold text-sm">Estilo de vida</h4>
                        <p className="text-xs text-muted-foreground">Ejercicio, sueño, organización</p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded">
                      <h4 className="font-semibold text-sm mb-2">Principios clave:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Individualización:</strong> Cada persona necesita un plan específico</li>
                        <li>• <strong>Combinación:</strong> Los mejores resultados vienen de múltiples enfoques</li>
                        <li>• <strong>Largo plazo:</strong> El TDAH requiere manejo continuo</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Card 2: Medications - Essential visible */}
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Medicamentos</CardTitle>
                  <Badge variant="secondary" className="text-xs">Primera línea</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard(1)}
                  className="text-green-600"
                >
                  {expandedCards.includes(1) ? (
                    <>Ocultar detalles <ChevronDown className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Ver opciones <ChevronRight className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </div>
              <CardDescription>
                Estimulantes (metilfenidato) y no estimulantes (atomoxetina) disponibles en Argentina
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(1)}>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    
                    {/* Stimulants */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-4 w-4 text-green-500" />
                        <h4 className="font-semibold">Estimulantes (Primera línea)</h4>
                        <Badge variant="default" className="text-xs">Más efectivos</Badge>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded mb-3">
                        <h5 className="font-semibold text-sm mb-2">Metilfenidato (único disponible en Argentina)</h5>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <strong>Ventajas:</strong>
                            <ul className="ml-3 space-y-1">
                              <li>• Muy efectivo (70-80% mejora)</li>
                              <li>• Acción rápida (30-60 min)</li>
                              <li>• Décadas de experiencia clínica</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Efectos adversos comunes:</strong>
                            <ul className="ml-3 space-y-1 text-amber-600">
                              <li>• Pérdida de apetito (temporaria)</li>
                              <li>• Dificultades para dormir</li>
                              <li>• Dolor de cabeza leve</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <Alert className="mb-4">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription className="text-sm">
                          <strong>Regulación en Argentina:</strong> Requiere receta oficial por triplicado, máximo 20 días por receta.
                        </AlertDescription>
                      </Alert>
                    </div>
                    
                    {/* Non-stimulants */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <h4 className="font-semibold">No Estimulantes (Segunda línea)</h4>
                        <Badge variant="secondary" className="text-xs">Alternativa</Badge>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded">
                        <h5 className="font-semibold text-sm mb-2">Atomoxetina</h5>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <strong>Cuándo usar:</strong>
                            <ul className="ml-3 space-y-1">
                              <li>• Intolerancia a estimulantes</li>
                              <li>• Comorbilidad con tics</li>
                              <li>• Riesgo de abuso de sustancias</li>
                              <li>• Ansiedad significativa</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Características:</strong>
                            <ul className="ml-3 space-y-1">
                              <li>• Sin potencial de abuso</li>
                              <li>• Efecto 24 horas</li>
                              <li>• Inicio más lento (4-6 semanas)</li>
                              <li>• Menos efectivo que estimulantes</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Card 3: Non-Pharmacological - Essential visible */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <CardTitle className="text-lg">Terapias No Farmacológicas</CardTitle>
                  <Badge variant="outline" className="text-xs">Esenciales</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard(2)}
                  className="text-purple-600"
                >
                  {expandedCards.includes(2) ? (
                    <>Ocultar técnicas <ChevronDown className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Ver técnicas <ChevronRight className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </div>
              <CardDescription>
                TCC, entrenamiento de habilidades y apoyo familiar - complementan la medicación
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(2)}>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6">
                    
                    {/* CBT */}
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold mb-3">Terapia Cognitivo-Conductual (TCC)</h4>
                      <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded">
                        <p className="text-sm text-muted-foreground mb-3">
                          Rompe el ciclo: <strong>Fracasos → Creencias negativas → Emociones intensas → Evitación</strong>
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Técnicas principales:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>Psicoeducación:</strong> Entender qué es el TDAH</li>
                              <li>• <strong>Organización:</strong> Sistemas de planificación</li>
                              <li>• <strong>Gestión temporal:</strong> Técnicas de tiempo</li>
                              <li>• <strong>Control impulsos:</strong> Estrategias de autorregulación</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Beneficios esperados:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Mejor autoestima y autoeficacia</li>
                              <li>• Reducción de ansiedad y depresión</li>
                              <li>• Habilidades prácticas para el día a día</li>
                              <li>• Mayor adherencia al tratamiento</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Skills Training */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-3">Entrenamiento en Habilidades</h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-2">📋 Organización</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Uso de agendas</li>
                            <li>• Sistemas de listas</li>
                            <li>• División de tareas</li>
                          </ul>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-2">🎯 Atención</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Minimizar distracciones</li>
                            <li>• Períodos de concentración</li>
                            <li>• Ambiente optimizado</li>
                          </ul>
                        </div>
                        <div className="p-3 border rounded">
                          <h5 className="font-semibold text-sm mb-2">💜 Emociones</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Identificar emociones</li>
                            <li>• Técnicas de relajación</li>
                            <li>• Manejo frustración</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Card 4: Exercise - Essential visible */}
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-orange-500" />
                  <CardTitle className="text-lg">Ejercicio Físico</CardTitle>
                  <Badge variant="destructive" className="text-xs">¡Muy importante!</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard(3)}
                  className="text-orange-600"
                >
                  {expandedCards.includes(3) ? (
                    <>Ocultar rutinas <ChevronDown className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Ver rutinas <ChevronRight className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </div>
              <CardDescription>
                "Medicina natural" para el TDAH - mejoras inmediatas en atención y estado de ánimo
              </CardDescription>
            </CardHeader>
            
            <Collapsible open={expandedCards.includes(3)}>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded">
                        <div className="text-xl font-bold text-green-500 mb-1">65%</div>
                        <div className="text-xs">Mejoran planificación tras 20-30 min</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
                        <div className="text-xl font-bold text-blue-500 mb-1">70%</div>
                        <div className="text-xs">Frecuencia cardíaca máxima objetivo</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
                        <div className="text-xl font-bold text-purple-500 mb-1">20 min</div>
                        <div className="text-xs">Duración mínima diaria</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-3 border border-green-200 rounded">
                        <h5 className="font-semibold text-sm mb-2 text-green-700">🏃 Aeróbico</h5>
                        <ul className="text-xs space-y-1">
                          <li>• Correr, caminar, bicicleta</li>
                          <li>• 20 min/día al 70% FCM</li>
                          <li>• <strong>Mejora:</strong> Enfoque y motivación</li>
                        </ul>
                      </div>
                      <div className="p-3 border border-blue-200 rounded">
                        <h5 className="font-semibold text-sm mb-2 text-blue-700">⚖️ Equilibrio</h5>
                        <ul className="text-xs space-y-1">
                          <li>• Yoga, pilates, BOSU</li>
                          <li>• 80% éxito reportado</li>
                          <li>• <strong>Mejora:</strong> Coordinación cerebelo</li>
                        </ul>
                      </div>
                      <div className="p-3 border border-purple-200 rounded">
                        <h5 className="font-semibold text-sm mb-2 text-purple-700">🥊 Deportes</h5>
                        <ul className="text-xs space-y-1">
                          <li>• Tenis, artes marciales</li>
                          <li>• Reacción rápida</li>
                          <li>• <strong>Mejora:</strong> Autocontrol</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        <strong>Beneficios inmediatos (20-30 min):</strong> Mejora planificación 65%, efectos en atención 2-4h, 
                        reduce ansiedad, aumenta función ejecutiva y autocontrol.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

        </div>

        {/* Next Steps CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">¿Necesitas tratamiento?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Si ya tienes diagnóstico, busca profesionales especializados en tratamiento de TDAH
          </p>
          <div className="flex gap-2 justify-center">
            <Button variant="default">Encontrar Profesionales</Button>
            <Button variant="outline">Ver Precios de Medicamentos</Button>
          </div>
        </div>

      </div>
    </div>
  )
}