"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowDown, CheckCircle, Clock, Users, Stethoscope, FileText, AlertTriangle, Brain } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"

export default function DiagnosticoOption2() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      {/* Visual Header with Progress */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Tu Camino al Diagnóstico TDAH</h1>
          <p className="text-blue-100 mb-6">Sigue estos pasos visuales para entender el proceso</p>
          
          {/* Progress Bar */}
          <div className="max-w-md">
            <div className="flex justify-between text-sm mb-2">
              <span>Paso {currentStep} de {totalSteps}</span>
              <span>{Math.round(progressPercentage)}% completado</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-blue-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Visual Journey Navigation */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4 overflow-x-auto pb-4">
            {[
              { step: 1, title: "¿Necesito ayuda?", icon: Brain, color: "blue" },
              { step: 2, title: "¿Quién me ayuda?", icon: Stethoscope, color: "green" },
              { step: 3, title: "¿Qué va a pasar?", icon: Clock, color: "purple" },
              { step: 4, title: "¿Qué debo llevar?", icon: FileText, color: "orange" }
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
                
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[500px]">
          
          {/* Step 1: Self Assessment */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8 text-blue-500" />
                    ¿Podría tener TDAH?
                  </CardTitle>
                  <CardDescription>Evalúa estos síntomas principales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Visual Symptom Cards */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center text-blue-700 dark:text-blue-300">
                        🧠 Síntomas de Inatención
                      </h3>
                      
                      <div className="grid gap-3">
                        {[
                          { icon: "🔍", text: "Me cuesta mantener atención en detalles" },
                          { icon: "👂", text: "No parece que escucho cuando me hablan" },
                          { icon: "📝", text: "No termino las tareas que empiezo" },
                          { icon: "📅", text: "Me cuesta organizarme" },
                          { icon: "🔑", text: "Pierdo objetos importantes" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center text-red-700 dark:text-red-300">
                        ⚡ Síntomas de Hiperactividad
                      </h3>
                      
                      <div className="grid gap-3">
                        {[
                          { icon: "🙌", text: "Muevo manos/pies constantemente" },
                          { icon: "💺", text: "Me levanto cuando debo estar sentado" },
                          { icon: "😣", text: "Siento inquietud interna" },
                          { icon: "🏃", text: "Como si tuviera un motor interno" },
                          { icon: "💬", text: "Interrumpo a otros sin darme cuenta" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Alert className="max-w-md mx-auto mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>¿Te identificas con 5+ síntomas?</strong> Considera buscar evaluación profesional
                      </AlertDescription>
                    </Alert>
                    <Button onClick={() => setCurrentStep(2)} size="lg">
                      Siguiente: ¿Quién puede ayudarme? <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 2: Who Can Help */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Stethoscope className="h-8 w-8 text-green-500" />
                    ¿Quién puede diagnosticar TDAH?
                  </CardTitle>
                  <CardDescription>Solo estos profesionales especializados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    
                    {/* Professional Cards with Visual Hierarchy */}
                    {[
                      {
                        title: "Médico Psiquiatra",
                        icon: "🏥",
                        speciality: "Especialista en salud mental",
                        experience: "Entrenamiento específico en TDAH",
                        availability: "Alta disponibilidad",
                        color: "blue"
                      },
                      {
                        title: "Neurólogo", 
                        icon: "🧠",
                        speciality: "Especialista del sistema nervioso",
                        experience: "Experiencia en neurodesarrollo",
                        availability: "Disponibilidad media",
                        color: "purple"
                      },
                      {
                        title: "Psicólogo Clínico",
                        icon: "👨‍⚕️", 
                        speciality: "Especialista en evaluación psicológica",
                        experience: "Formación en evaluación de TDAH",
                        availability: "Disponibilidad variable",
                        color: "green"
                      }
                    ].map((prof, index) => (
                      <Card key={index} className={`border-${prof.color}-200 dark:border-${prof.color}-800 hover:shadow-lg transition-shadow`}>
                        <CardHeader className="text-center">
                          <div className="text-6xl mb-2">{prof.icon}</div>
                          <CardTitle className="text-lg">{prof.title}</CardTitle>
                          <Badge variant="outline" className={`text-${prof.color}-600`}>Autorizado</Badge>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{prof.speciality}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{prof.experience}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span>{prof.availability}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button onClick={() => setCurrentStep(3)} size="lg" className="mr-4">
                      Siguiente: El proceso <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: The Process */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Clock className="h-8 w-8 text-purple-500" />
                    ¿Qué va a pasar en la evaluación?
                  </CardTitle>
                  <CardDescription>5 pasos del proceso diagnóstico</CardDescription>
                </CardHeader>
                <CardContent>
                  
                  {/* Visual Process Flow */}
                  <div className="max-w-2xl mx-auto">
                    {[
                      {
                        step: 1,
                        title: "Entrevista inicial",
                        description: "Conversación sobre tus síntomas actuales",
                        duration: "45-60 min",
                        icon: "💬",
                        details: ["Síntomas actuales", "Impacto en la vida", "Motivación para consultar"]
                      },
                      {
                        step: 2, 
                        title: "Historia clínica",
                        description: "Revisión de tu desarrollo desde la infancia",
                        duration: "30-45 min",
                        icon: "📚",
                        details: ["Infancia y desarrollo", "Rendimiento escolar", "Antecedentes familiares"]
                      },
                      {
                        step: 3,
                        title: "Tests y escalas",
                        description: "Cuestionarios especializados para TDAH", 
                        duration: "30 min",
                        icon: "📝",
                        details: ["ASRS-18", "WURS-25", "Escalas adicionales"]
                      },
                      {
                        step: 4,
                        title: "Evaluación integral",
                        description: "Búsqueda de otras condiciones coexistentes",
                        duration: "30 min", 
                        icon: "🔍",
                        details: ["Ansiedad", "Depresión", "Otros trastornos"]
                      },
                      {
                        step: 5,
                        title: "Diagnóstico",
                        description: "Conclusiones y plan de tratamiento",
                        duration: "30 min",
                        icon: "✅", 
                        details: ["Resultados", "Tratamiento", "Seguimiento"]
                      }
                    ].map((item, index) => (
                      <div key={item.step}>
                        <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border mb-4">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl mb-2">
                              {item.icon}
                            </div>
                            <Badge variant="secondary" className="text-xs">{item.duration}</Badge>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                Paso {item.step}
                              </Badge>
                              <h3 className="font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {item.details.map((detail, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {detail}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {index < 4 && (
                          <div className="flex justify-center mb-4">
                            <ArrowDown className="h-6 w-6 text-purple-400" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button onClick={() => setCurrentStep(4)} size="lg" className="mr-4">
                      Siguiente: Preparación <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: What to Bring */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <FileText className="h-8 w-8 text-orange-500" />
                    ¿Qué debo llevar a la consulta?
                  </CardTitle>
                  <CardDescription>Checklist de documentos y información</CardDescription>
                </CardHeader>
                <CardContent>
                  
                  {/* Visual Checklist */}
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-700 dark:text-orange-300">
                        📋 Documentos a llevar
                      </h3>
                      <div className="space-y-3">
                        {[
                          { item: "Boletines escolares antiguos", icon: "🎓", importance: "Muy importante" },
                          { item: "Informes médicos previos", icon: "🏥", importance: "Importante" },
                          { item: "Lista de medicamentos", icon: "💊", importance: "Importante" },
                          { item: "Antecedentes familiares", icon: "👨‍👩‍👧‍👦", importance: "Útil" }
                        ].map((doc, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border">
                            <span className="text-2xl">{doc.icon}</span>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{doc.item}</p>
                              <Badge 
                                variant={doc.importance === "Muy importante" ? "default" : "secondary"} 
                                className="text-xs"
                              >
                                {doc.importance}
                              </Badge>
                            </div>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-700 dark:text-orange-300">
                        💭 Información a preparar
                      </h3>
                      <div className="space-y-3">
                        {[
                          { item: "Ejemplos específicos de dificultades", icon: "🎯", tip: "Situaciones concretas" },
                          { item: "Impacto en trabajo/estudios", icon: "💼", tip: "Cómo afecta tu día" },
                          { item: "Problemas en relaciones", icon: "👥", tip: "Con familia/pareja/amigos" },
                          { item: "Estrategias que has probado", icon: "🛠️", tip: "Qué funcionó o no" }
                        ].map((info, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border">
                            <span className="text-2xl">{info.icon}</span>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{info.item}</p>
                              <p className="text-xs text-muted-foreground">{info.tip}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Alert className="max-w-md mx-auto mb-4">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>¡Listo para el diagnóstico!</strong> Ahora tienes toda la información necesaria
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-x-4">
                      <Button size="lg">
                        Encontrar Especialistas
                      </Button>
                      <Button variant="outline" onClick={() => setCurrentStep(3)}>
                        Anterior
                      </Button>
                    </div>
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