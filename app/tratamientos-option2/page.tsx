"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowDown, CheckCircle, Pill, Brain, Heart, Shield, Target, Users, Zap } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"

export default function TratamientosOption2() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      {/* Visual Header with Progress */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Tu Camino del Tratamiento TDAH</h1>
          <p className="text-purple-100 mb-6">Sigue estos pasos para entender las opciones disponibles</p>
          
          {/* Progress Bar */}
          <div className="max-w-md">
            <div className="flex justify-between text-sm mb-2">
              <span>Paso {currentStep} de {totalSteps}</span>
              <span>{Math.round(progressPercentage)}% completado</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-purple-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Visual Journey Navigation */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4 overflow-x-auto pb-4">
            {[
              { step: 1, title: "¿Cómo funciona?", icon: Brain, color: "blue" },
              { step: 2, title: "Medicamentos", icon: Pill, color: "green" },
              { step: 3, title: "Terapias", icon: Users, color: "purple" },
              { step: 4, title: "Ejercicio", icon: Heart, color: "red" },
              { step: 5, title: "Mi plan", icon: Target, color: "orange" }
            ].map(({ step, title, icon: Icon, color }, index) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                    currentStep === step 
                      ? `bg-${color}-100 dark:bg-${color}-900 border-2 border-${color}-500` 
                      : 'bg-white dark:bg-slate-800 border border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= step 
                      ? `bg-${color}-500 text-white` 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-500'
                  }`}>
                    {currentStep > step ? <CheckCircle className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                  </div>
                  <span className={`text-xs font-medium text-center ${
                    currentStep === step ? `text-${color}-700 dark:text-${color}-300` : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {title}
                  </span>
                </button>
                
                {index < 4 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[500px]">
          
          {/* Step 1: How Treatment Works */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8 text-blue-500" />
                    ¿Cómo funciona el tratamiento?
                  </CardTitle>
                  <CardDescription>El enfoque multimodal es la clave del éxito</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg border">
                      <div className="text-6xl mb-4">💊</div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
                        Medicación
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Corrige el déficit de neurotransmisores (dopamina/noradrenalina)
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>70-80% mejora en síntomas</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Efectos en 30-60 minutos</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Base científica sólida</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg border">
                      <div className="text-6xl mb-4">🧠</div>
                      <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">
                        Terapia
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Enseña habilidades para manejar síntomas y situaciones difíciles
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Habilidades para toda la vida</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Mejora autoestima</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Reduce ansiedad/depresión</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg border">
                      <div className="text-6xl mb-4">💪</div>
                      <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-300">
                        Estilo de Vida
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ejercicio, sueño y organización potencian el tratamiento
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Ejercicio = "medicación natural"</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Sueño reparador esencial</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Organización reduce estrés</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="mb-6">
                    <Target className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Clave del éxito:</strong> La combinación de los 3 enfoques da mejores resultados 
                      que cualquiera por separado. No es "o medicación o terapia", es "medicación Y terapia Y cambios de estilo de vida".
                    </AlertDescription>
                  </Alert>
                  
                  <div className="text-center">
                    <Button onClick={() => setCurrentStep(2)} size="lg">
                      Siguiente: Medicamentos <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 2: Medications */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Pill className="h-8 w-8 text-green-500" />
                    Medicamentos para TDAH
                  </CardTitle>
                  <CardDescription>Opciones disponibles en Argentina</CardDescription>
                </CardHeader>
                <CardContent>
                  
                  {/* Effectiveness Stats */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-1">70-80%</div>
                      <div className="text-sm text-green-700 dark:text-green-300">Mejoran con estimulantes</div>
                    </div>
                    <div className="text-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-1">50-60%</div>
                      <div className="text-sm text-blue-700 dark:text-blue-300">Mejoran con no estimulantes</div>
                    </div>
                    <div className="text-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-1">30-60min</div>
                      <div className="text-sm text-purple-700 dark:text-purple-300">Tiempo hasta hacer efecto</div>
                    </div>
                  </div>
                  
                  {/* Medication Options */}
                  <div className="space-y-6">
                    
                    {/* Stimulants */}
                    <div className="border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="h-6 w-6 text-green-500" />
                        <h3 className="text-xl font-semibold">Estimulantes (Primera línea)</h3>
                        <Badge variant="default">Más efectivos</Badge>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-3">Metilfenidato (único disponible en Argentina)</h4>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2 text-green-700 dark:text-green-300">✅ Ventajas</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Muy efectivo (70-80%)</li>
                              <li>• Acción rápida (30-60 min)</li>
                              <li>• 70+ años de uso seguro</li>
                              <li>• Múltiples formulaciones</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-300">⚠️ Efectos adversos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Pérdida apetito (transitoria)</li>
                              <li>• Dificultades sueño</li>
                              <li>• Dolor cabeza leve</li>
                              <li>• Irritabilidad inicial</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2 text-red-700 dark:text-red-300">📋 Regulación</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Receta triplicado oficial</li>
                              <li>• Máximo 20 días/receta</li>
                              <li>• Renovación mensual</li>
                              <li>• Registro en farmacia</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Non-stimulants */}
                    <div className="border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-6 w-6 text-blue-500" />
                        <h3 className="text-xl font-semibold">No Estimulantes (Segunda línea)</h3>
                        <Badge variant="secondary">Alternativa</Badge>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Atomoxetina</h4>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Cuándo considerar:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Intolerancia a estimulantes</li>
                              <li>• Comorbilidad con tics</li>
                              <li>• Historia de abuso sustancias</li>
                              <li>• Ansiedad severa coexistente</li>
                              <li>• Preferencia del paciente</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Características:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>Ventaja:</strong> Sin potencial abuso</li>
                              <li>• <strong>Ventaja:</strong> Efecto 24 horas</li>
                              <li>• <strong>Desventaja:</strong> Inicio lento (4-6 sem)</li>
                              <li>• <strong>Desventaja:</strong> Menor eficacia</li>
                              <li>• <strong>Nota:</strong> Puede ayudar ansiedad</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button onClick={() => setCurrentStep(3)} size="lg" className="mr-4">
                      Siguiente: Terapias <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Therapies */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Users className="h-8 w-8 text-purple-500" />
                    Terapias No Farmacológicas
                  </CardTitle>
                  <CardDescription>Componente esencial del tratamiento</CardDescription>
                </CardHeader>
                <CardContent>
                  
                  {/* Therapy Flow */}
                  <div className="mb-8 p-6 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <h3 className="text-center text-lg font-semibold mb-4">¿Por qué la terapia es esencial?</h3>
                    <div className="flex items-center justify-center">
                      <div className="text-center max-w-2xl">
                        <p className="text-sm mb-4">
                          La medicación corrige el problema neuroquímico, pero <strong>no enseña habilidades</strong>. 
                          La terapia rompe el ciclo negativo:
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 rounded">Fracasos</span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded">Creencias negativas</span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 rounded">Emociones intensas</span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 rounded">Evitación</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Therapy Types */}
                  <div className="space-y-6">
                    
                    {/* CBT */}
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold mb-3">Terapia Cognitivo-Conductual (TCC)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">Qué incluye:</h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong className="text-sm">Psicoeducación</strong>
                                <p className="text-xs text-muted-foreground">Entender qué es el TDAH y cómo afecta</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong className="text-sm">Reestructuración cognitiva</strong>
                                <p className="text-xs text-muted-foreground">Cambiar pensamientos negativos automáticos</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong className="text-sm">Técnicas conductuales</strong>
                                <p className="text-xs text-muted-foreground">Estrategias prácticas para síntomas</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">Beneficios esperados:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <strong>Autoestima:</strong> Mejora significativa</li>
                            <li>• <strong>Ansiedad/Depresión:</strong> Reducción notable</li>
                            <li>• <strong>Funcionamiento:</strong> Mejor trabajo/relaciones</li>
                            <li>• <strong>Adherencia:</strong> Mayor cumplimiento medicación</li>
                            <li>• <strong>Habilidades:</strong> Estrategias para toda la vida</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Skills Training */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold mb-3">Entrenamiento en Habilidades</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">📋 Organización</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Uso efectivo de agendas</li>
                            <li>• Sistemas de listas y recordatorios</li>
                            <li>• Organización espacios físicos</li>
                            <li>• División tareas complejas</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">🎯 Gestión Atención</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Minimización distracciones</li>
                            <li>• Períodos trabajo concentrado</li>
                            <li>• Estrategias refocalización</li>
                            <li>• Ambiente optimizado</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">💜 Regulación Emocional</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Identificación emociones</li>
                            <li>• Técnicas relajación</li>
                            <li>• Manejo frustración</li>
                            <li>• Estrategias afrontamiento</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Family Support */}
                    <div className="border-l-4 border-orange-500 pl-6">
                      <h3 className="text-xl font-semibold mb-3">Apoyo Familiar y Social</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">👨‍👩‍👧‍👦 Para la Familia</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Educación sobre TDAH</li>
                            <li>• Estrategias comunicación</li>
                            <li>• Manejo conflictos</li>
                            <li>• Apoyo emocional mutuo</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">💼 Entorno Laboral/Académico</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Adaptaciones ambientales</li>
                            <li>• Comunicación supervisores</li>
                            <li>• Estrategias productividad</li>
                            <li>• Manejo estrés laboral</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button onClick={() => setCurrentStep(4)} size="lg" className="mr-4">
                      Siguiente: Ejercicio <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Exercise */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Card className="border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Heart className="h-8 w-8 text-red-500" />
                    Ejercicio: Medicina Natural para TDAH
                  </CardTitle>
                  <CardDescription>Una de las intervenciones más poderosas e inmediatas</CardDescription>
                </CardHeader>
                <CardContent>
                  
                  {/* Impact Stats */}
                  <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">65%</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Mejoran planificación</div>
                      <div className="text-xs text-muted-foreground">tras 20-30 min</div>
                    </div>
                    <div className="text-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">2-4h</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Duración efectos</div>
                      <div className="text-xs text-muted-foreground">en atención</div>
                    </div>
                    <div className="text-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">20min</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">Duración mínima</div>
                      <div className="text-xs text-muted-foreground">diaria recomendada</div>
                    </div>
                    <div className="text-center p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">70%</div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">FC máxima</div>
                      <div className="text-xs text-muted-foreground">objetivo</div>
                    </div>
                  </div>
                  
                  {/* Exercise Types */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center mb-6">Tipos de ejercicio más efectivos</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="border-green-200 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <div className="text-2xl">🏃</div>
                            Ejercicio Aeróbico
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                              <p className="text-sm font-semibold">Recomendación:</p>
                              <p className="text-sm">20 min/día al 70% FCM</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-2">Actividades:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Correr / trotar</li>
                                <li>• Caminar rápido</li>
                                <li>• Bicicleta</li>
                                <li>• Natación</li>
                              </ul>
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-xs"><strong>Potencia:</strong> Enfoque y motivación</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-blue-200 dark:border-blue-800">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <div className="text-2xl">⚖️</div>
                            Entrenamiento Equilibrio
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-sm font-semibold">Efectividad:</p>
                              <p className="text-sm">80% éxito reportado</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-2">Actividades:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Yoga</li>
                                <li>• Pilates</li>
                                <li>• BOSU ball</li>
                                <li>• Wobble board</li>
                              </ul>
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-xs"><strong>Potencia:</strong> Coordinación cerebelo</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-purple-200 dark:border-purple-800">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <div className="text-2xl">🥊</div>
                            Deportes Reacción
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                              <p className="text-sm font-semibold">Característica:</p>
                              <p className="text-sm">Reacción rápida + estrategia</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-2">Actividades:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Tenis / ping-pong</li>
                                <li>• Artes marciales</li>
                                <li>• Basketball</li>
                                <li>• Esgrima</li>
                              </ul>
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-xs"><strong>Potencia:</strong> Autocontrol y disciplina</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mt-8 p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold mb-4 text-center text-green-800 dark:text-green-200">
                      Beneficios inmediatos del ejercicio (20-30 min)
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-600 mb-1">🎯 Función Ejecutiva</div>
                        <ul className="text-sm space-y-1">
                          <li>• 65% mejora planificación</li>
                          <li>• ↑ Toma decisiones</li>
                          <li>• ↑ Control impulsos</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-600 mb-1">🧠 Atención</div>
                        <ul className="text-sm space-y-1">
                          <li>• Efectos duran 2-4h</li>
                          <li>• ↑ Concentración</li>
                          <li>• ↑ Memoria trabajo</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-600 mb-1">💚 Estado Ánimo</div>
                        <ul className="text-sm space-y-1">
                          <li>• ↓ Ansiedad</li>
                          <li>• ↑ Motivación</li>
                          <li>• ↑ Autoestima</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button onClick={() => setCurrentStep(5)} size="lg" className="mr-4">
                      Siguiente: Mi plan <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={() => setCurrentStep(3)}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 5: My Treatment Plan */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Target className="h-8 w-8 text-orange-500" />
                    Diseñando Mi Plan de Tratamiento
                  </CardTitle>
                  <CardDescription>Cada plan es único - aquí tienes las piezas del rompecabezas</CardDescription>
                </CardHeader>
                <CardContent>
                  
                  {/* Treatment Building Blocks */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-center mb-6">Componentes de un plan exitoso</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      
                      <div className="p-4 border-2 border-dashed border-green-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">💊</div>
                        <h4 className="font-semibold text-sm mb-2">Medicación base</h4>
                        <p className="text-xs text-muted-foreground">
                          Estimulante o no estimulante según tu perfil
                        </p>
                      </div>
                      
                      <div className="p-4 border-2 border-dashed border-purple-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">🧠</div>
                        <h4 className="font-semibold text-sm mb-2">TCC especializada</h4>
                        <p className="text-xs text-muted-foreground">
                          12-16 sesiones enfocadas en TDAH
                        </p>
                      </div>
                      
                      <div className="p-4 border-2 border-dashed border-red-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">🏃</div>
                        <h4 className="font-semibold text-sm mb-2">Ejercicio diario</h4>
                        <p className="text-xs text-muted-foreground">
                          20+ min, preferible aeróbico
                        </p>
                      </div>
                      
                      <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">👥</div>
                        <h4 className="font-semibold text-sm mb-2">Apoyo social</h4>
                        <p className="text-xs text-muted-foreground">
                          Familia, grupos, adaptaciones
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Personalization Factors */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center">Factores de personalización</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">¿Qué considerar para medicación?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Primera opción:</strong> Metilfenidato (estimulante)</li>
                            <li><strong>Si hay:</strong> Tics → Atomoxetina</li>
                            <li><strong>Si hay:</strong> Ansiedad severa → Atomoxetina</li>
                            <li><strong>Si hay:</strong> Historia abuso → Atomoxetina</li>
                            <li><strong>Si hay:</strong> Intolerancia → Cambiar</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">¿Qué tipo de terapia necesito?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li><strong>TCC individual:</strong> Síntomas principales</li>
                            <li><strong>Terapia familiar:</strong> Si hay conflictos</li>
                            <li><strong>Coaching TDAH:</strong> Habilidades prácticas</li>
                            <li><strong>Grupos apoyo:</strong> Motivación y tips</li>
                            <li><strong>Terapia comorbilidades:</strong> Ansiedad/depresión</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Action Steps */}
                  <div className="mt-8 p-6 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-center text-orange-800 dark:text-orange-200">
                      Próximos pasos recomendados
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Si ya tienes diagnóstico:</h4>
                        <ol className="text-sm space-y-2">
                          <li>1. <strong>Buscar psiquiatra especializado</strong> en TDAH</li>
                          <li>2. <strong>Discutir opciones</strong> de medicación</li>
                          <li>3. <strong>Encontrar terapeuta</strong> TCC para TDAH</li>
                          <li>4. <strong>Establecer rutina</strong> ejercicio diario</li>
                          <li>5. <strong>Programar seguimientos</strong> regulares</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Si no tienes diagnóstico:</h4>
                        <ol className="text-sm space-y-2">
                          <li>1. <strong>Completar autoevaluación</strong> de síntomas</li>
                          <li>2. <strong>Buscar profesional</strong> para diagnóstico</li>
                          <li>3. <strong>Preparar documentación</strong> (boletines, etc.)</li>
                          <li>4. <strong>Mientras tanto:</strong> Empezar ejercicio</li>
                          <li>5. <strong>Informar familia/pareja</strong> sobre TDAH</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="mt-6">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>¡Has completado el recorrido!</strong> Ahora tienes la información necesaria para 
                      tomar decisiones informadas sobre tu tratamiento. Recuerda: el mejor tratamiento es el que 
                      combina medicación, terapia y cambios de estilo de vida.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="mt-8 text-center space-x-4">
                    <Button size="lg">
                      Encontrar Profesionales
                    </Button>
                    <Button variant="outline" size="lg">
                      Ver Precios Medicamentos
                    </Button>
                    <Button variant="outline" onClick={() => setCurrentStep(4)}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}