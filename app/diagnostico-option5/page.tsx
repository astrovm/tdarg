"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowDown, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Brain,
  Stethoscope,
  Clock,
  FileText,
  Users,
  Target,
  BookOpen,
  Eye,
  EyeOff
} from "lucide-react"
import { Header } from "@/components/header"

export default function DiagnosticoOption5() {
  const [readerMode, setReaderMode] = useState(false)
  const [completedSections, setCompletedSections] = useState<number[]>([])

  const markSectionComplete = (sectionIndex: number) => {
    setCompletedSections(prev => 
      prev.includes(sectionIndex)
        ? prev.filter(i => i !== sectionIndex)
        : [...prev, sectionIndex]
    )
  }

  return (
    <div className={`min-h-screen ${readerMode ? 'bg-amber-50 dark:bg-amber-950' : 'bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800'}`}>
      <Header />
      
      {/* Simple Header */}
      <div className={`py-12 ${readerMode ? 'bg-amber-100 dark:bg-amber-900' : 'bg-slate-100 dark:bg-slate-800'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
              Guía Simple: Diagnóstico TDAH
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              Información esencial sin distracciones
            </p>
            
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setReaderMode(!readerMode)}
                className="flex items-center gap-2"
              >
                {readerMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {readerMode ? 'Modo Normal' : 'Modo Lectura'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Single Column Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Progress Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>{completedSections.length} de 6 secciones completadas</span>
            </div>
          </div>

          {/* Section 1: What is ADHD Diagnosis */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(0) ? 'border-green-200 dark:border-green-800' : 'border-blue-200 dark:border-blue-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¿Qué es el diagnóstico de TDAH?
                  </h2>
                  {completedSections.includes(0) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    El diagnóstico de TDAH es un <strong>proceso médico especializado</strong> que determina si 
                    una persona tiene Trastorno por Déficit de Atención e Hiperactividad.
                  </p>
                  
                  <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                    <AlertDescription className="text-base">
                      <strong>Importante:</strong> No es un simple test online. Requiere evaluación de un 
                      profesional especializado que analiza síntomas, historia personal y impacto en la vida diaria.
                    </AlertDescription>
                  </Alert>
                  
                  <p>
                    El diagnóstico correcto es el primer paso para acceder a tratamientos efectivos y 
                    entender por qué ciertas actividades resultan más difíciles.
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => markSectionComplete(0)}
                    variant={completedSections.includes(0) ? "secondary" : "default"}
                    size="lg"
                  >
                    {completedSections.includes(0) ? 'Completado ✓' : 'Marcar como leído'}
                  </Button>
                </div>
                
                <div className="flex justify-center mt-8">
                  <ArrowDown className="h-6 w-6 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Self-Assessment */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(1) ? 'border-green-200 dark:border-green-800' : 'border-purple-200 dark:border-purple-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¿Necesito una evaluación?
                  </h2>
                  {completedSections.includes(1) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Considera buscar evaluación profesional si experimentas <strong>regularmente</strong> 
                    varios de estos síntomas:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                        🧠 Problemas de Atención
                      </h3>
                      <ul className="space-y-2">
                        <li>• Te cuesta mantener la concentración</li>
                        <li>• Te distraes con cualquier cosa</li>
                        <li>• Pierdes objetos importantes constantemente</li>
                        <li>• Olvidas tareas o compromisos frecuentemente</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">
                        ⚡ Inquietud e Impulsividad
                      </h3>
                      <ul className="space-y-2">
                        <li>• Sientes una inquietud interna constante</li>
                        <li>• Te cuesta estar sentado mucho tiempo</li>
                        <li>• Interrumpes conversaciones sin darte cuenta</li>
                        <li>• Actúas sin pensar las consecuencias</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950">
                    <Target className="h-5 w-5 text-amber-600" />
                    <AlertDescription className="text-base">
                      <strong>Regla práctica:</strong> Si identificas 5 o más síntomas que persisten desde 
                      hace meses y afectan tu trabajo, estudios o relaciones, considera una evaluación.
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => markSectionComplete(1)}
                    variant={completedSections.includes(1) ? "secondary" : "default"}
                    size="lg"
                  >
                    {completedSections.includes(1) ? 'Completado ✓' : 'Marcar como leído'}
                  </Button>
                </div>
                
                <div className="flex justify-center mt-8">
                  <ArrowDown className="h-6 w-6 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Who Can Diagnose */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(2) ? 'border-green-200 dark:border-green-800' : 'border-green-200 dark:border-green-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¿Quién puede diagnosticar TDAH?
                  </h2>
                  {completedSections.includes(2) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Solo <strong>tres tipos de profesionales</strong> están autorizados para diagnosticar TDAH:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                      <Stethoscope className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
                          Médico Psiquiatra
                        </h3>
                        <p>Especialista en salud mental con entrenamiento específico en TDAH</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950">
                      <Brain className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">
                          Neurólogo
                        </h3>
                        <p>Especialista del sistema nervioso con experiencia en trastornos del neurodesarrollo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border-l-4 border-teal-500 bg-teal-50 dark:bg-teal-950">
                      <Users className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-200">
                          Psicólogo Clínico
                        </h3>
                        <p>Especialista en evaluación psicológica con formación específica en TDAH</p>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <AlertDescription className="text-base">
                      <strong>Importante:</strong> No todos los médicos pueden diagnosticar TDAH. 
                      Busca profesionales con experiencia específica en este trastorno.
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => markSectionComplete(2)}
                    variant={completedSections.includes(2) ? "secondary" : "default"}
                    size="lg"
                  >
                    {completedSections.includes(2) ? 'Completado ✓' : 'Marcar como leído'}
                  </Button>
                </div>
                
                <div className="flex justify-center mt-8">
                  <ArrowDown className="h-6 w-6 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: The Process */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(3) ? 'border-green-200 dark:border-green-800' : 'border-orange-200 dark:border-orange-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¿Qué va a pasar en la evaluación?
                  </h2>
                  {completedSections.includes(3) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    La evaluación profesional sigue un proceso estructurado de <strong>5 pasos principales</strong>:
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Entrevista inicial",
                        description: "Conversación detallada sobre tus síntomas actuales y cómo afectan tu vida",
                        duration: "45-60 minutos",
                        icon: "💬"
                      },
                      {
                        title: "Historia clínica",
                        description: "Revisión de tu desarrollo desde la infancia, rendimiento escolar y antecedentes",
                        duration: "30-45 minutos", 
                        icon: "📚"
                      },
                      {
                        title: "Tests especializados",
                        description: "Cuestionarios validados como ASRS-18 y escalas retrospectivas",
                        duration: "30 minutos",
                        icon: "📝"
                      },
                      {
                        title: "Evaluación integral",
                        description: "Búsqueda de otras condiciones que puedan coexistir con TDAH",
                        duration: "30 minutos",
                        icon: "🔍"
                      },
                      {
                        title: "Diagnóstico final",
                        description: "Conclusiones y diseño del plan de tratamiento personalizado",
                        duration: "30 minutos",
                        icon: "✅"
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex gap-4 p-4 border rounded-lg">
                        <div className="text-3xl">{step.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                          </div>
                          <p className="text-base text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <AlertDescription className="text-base">
                      <strong>Tiempo total:</strong> El proceso completo suele tomar 2-4 consultas 
                      distribuidas en varias semanas. No se apresura.
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => markSectionComplete(3)}
                    variant={completedSections.includes(3) ? "secondary" : "default"}
                    size="lg"
                  >
                    {completedSections.includes(3) ? 'Completado ✓' : 'Marcar como leído'}
                  </Button>
                </div>
                
                <div className="flex justify-center mt-8">
                  <ArrowDown className="h-6 w-6 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5: Preparation */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(4) ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¿Cómo me preparo para la consulta?
                  </h2>
                  {completedSections.includes(4) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Una buena preparación hace que la evaluación sea más precisa y eficiente. 
                    Necesitas <strong>documentos específicos e información personal</strong>:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-500" />
                        Documentos esenciales
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="text-2xl">🎓</div>
                          <div>
                            <p className="font-medium">Boletines escolares antiguos</p>
                            <p className="text-sm text-muted-foreground">Los más valiosos para el diagnóstico</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="text-2xl">🏥</div>
                          <div>
                            <p className="font-medium">Informes médicos previos</p>
                            <p className="text-sm text-muted-foreground">Cualquier evaluación psicológica anterior</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="text-2xl">💊</div>
                          <div>
                            <p className="font-medium">Lista de medicamentos</p>
                            <p className="text-sm text-muted-foreground">Todo lo que tomas actualmente</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-purple-500" />
                        Información a preparar
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="text-2xl">🎯</div>
                          <div>
                            <p className="font-medium">Ejemplos específicos</p>
                            <p className="text-sm text-muted-foreground">Situaciones concretas donde tuviste problemas</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="text-2xl">💼</div>
                          <div>
                            <p className="font-medium">Impacto laboral/académico</p>
                            <p className="text-sm text-muted-foreground">Cómo afecta tu rendimiento diario</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="text-2xl">👥</div>
                          <div>
                            <p className="font-medium">Problemas relacionales</p>
                            <p className="text-sm text-muted-foreground">Dificultades con familia, pareja, amigos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertDescription className="text-base">
                      <strong>Consejo:</strong> Anota ejemplos específicos una semana antes de la cita. 
                      Los detalles concretos son más útiles que las descripciones generales.
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => markSectionComplete(4)}
                    variant={completedSections.includes(4) ? "secondary" : "default"}
                    size="lg"
                  >
                    {completedSections.includes(4) ? 'Completado ✓' : 'Marcar como leído'}
                  </Button>
                </div>
                
                <div className="flex justify-center mt-8">
                  <ArrowDown className="h-6 w-6 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 6: Next Steps */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(5) ? 'border-green-200 dark:border-green-800' : 'border-indigo-200 dark:border-indigo-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¿Qué sigue después?
                  </h2>
                  {completedSections.includes(5) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Una vez completada la evaluación, hay <strong>dos posibles resultados</strong>, 
                    ambos importantes para tu bienestar:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">
                        ✅ Si es TDAH
                      </h3>
                      <p>
                        El profesional diseñará un <strong>plan de tratamiento personalizado</strong> que puede incluir:
                      </p>
                      <ul className="mt-3 space-y-1 ml-6">
                        <li>• Medicación específica para TDAH</li>
                        <li>• Terapia cognitivo-conductual</li>
                        <li>• Estrategias de organización y planificación</li>
                        <li>• Seguimiento regular para ajustes</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                      <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                        🔍 Si no es TDAH
                      </h3>
                      <p>
                        Tus síntomas pueden deberse a <strong>otras condiciones tratables</strong> como:
                      </p>
                      <ul className="mt-3 space-y-1 ml-6">
                        <li>• Trastornos de ansiedad</li>
                        <li>• Episodios depresivos</li>
                        <li>• Problemas del sueño</li>
                        <li>• Estrés crónico o burnout</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Alert className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950">
                    <Target className="h-5 w-5 text-indigo-600" />
                    <AlertDescription className="text-base">
                      <strong>Recuerda:</strong> El diagnóstico es el primer paso, no el destino final. 
                      Con el tratamiento adecuado, las personas con TDAH llevan vidas plenas y exitosas.
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => markSectionComplete(5)}
                    variant={completedSections.includes(5) ? "secondary" : "default"}
                    size="lg"
                  >
                    {completedSections.includes(5) ? 'Completado ✓' : 'Marcar como leído'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Completion & Next Actions */}
          {completedSections.length === 6 && (
            <section className="scroll-mt-8">
              <Card className="border-2 border-green-500 bg-green-50 dark:bg-green-950">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                    ¡Guía completada!
                  </h2>
                  <p className="text-lg text-green-700 dark:text-green-300 mb-6">
                    Ya tienes toda la información necesaria para buscar ayuda profesional. 
                    El siguiente paso es encontrar un especialista.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="flex items-center gap-2">
                      Encontrar Especialistas
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Ver Tratamientos Disponibles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Reading Progress */}
          <div className="sticky bottom-6 right-6 ml-auto max-w-fit">
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-lg">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {completedSections.length}/6 secciones
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}