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
  Pill,
  Brain,
  Heart,
  Shield,
  Target,
  BookOpen,
  Eye,
  EyeOff
} from "lucide-react"
import { Header } from "@/components/header"

export default function TratamientosOption5() {
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
              Tratamientos para TDAH
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
              <span>{completedSections.length} de 5 secciones completadas</span>
            </div>
          </div>

          {/* Section 1: Treatment Overview */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(0) ? 'border-green-200 dark:border-green-800' : 'border-blue-200 dark:border-blue-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¿Cómo se trata el TDAH?
                  </h2>
                  {completedSections.includes(0) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    El tratamiento más efectivo para TDAH es <strong>multimodal</strong>, lo que significa que 
                    combina varios enfoques diferentes trabajando juntos.
                  </p>
                  
                  <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                    <Target className="h-5 w-5 text-blue-600" />
                    <AlertDescription className="text-base">
                      <strong>Principio clave:</strong> No es "medicación O terapia", es "medicación Y terapia Y 
                      cambios de estilo de vida". La combinación da mejores resultados que cualquier enfoque solo.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg text-center">
                      <div className="text-4xl mb-3">💊</div>
                      <h3 className="text-lg font-semibold mb-2">Medicación</h3>
                      <p className="text-sm">Corrige el déficit de neurotransmisores en el cerebro</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                      <div className="text-4xl mb-3">🧠</div>
                      <h3 className="text-lg font-semibold mb-2">Terapia</h3>
                      <p className="text-sm">Enseña habilidades para manejar síntomas día a día</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg text-center">
                      <div className="text-4xl mb-3">💪</div>
                      <h3 className="text-lg font-semibold mb-2">Estilo de vida</h3>
                      <p className="text-sm">Ejercicio, sueño y organización potencian todo</p>
                    </div>
                  </div>
                  
                  <p>
                    Cada persona necesita un <strong>plan individualizado</strong>. Lo que funciona para 
                    una persona puede no funcionar para otra, por eso el tratamiento se ajusta según 
                    tus síntomas específicos, tu edad, y tus circunstancias.
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

          {/* Section 2: Medications */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(1) ? 'border-green-200 dark:border-green-800' : 'border-purple-200 dark:border-purple-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Medicamentos para TDAH
                  </h2>
                  {completedSections.includes(1) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Los medicamentos son generalmente la <strong>primera línea de tratamiento</strong> porque 
                    corrigen directamente el problema neuroquímico que causa el TDAH.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">70-80%</div>
                      <div className="text-sm">Mejoran con estimulantes</div>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">30-60min</div>
                      <div className="text-sm">Tiempo hasta hacer efecto</div>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">70+ años</div>
                      <div className="text-sm">De uso seguro documentado</div>
                    </div>
                  </div>
                  
                  {/* Stimulants */}
                  <div className="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                    <div className="flex items-center gap-2 mb-4">
                      <Pill className="h-5 w-5 text-green-500" />
                      <h3 className="text-xl font-semibold">Estimulantes (Primera opción)</h3>
                      <Badge className="bg-green-500 text-white">Más efectivos</Badge>
                    </div>
                    <p className="mb-4">
                      <strong>Metilfenidato</strong> es el único estimulante disponible en Argentina. 
                      Es muy efectivo y tiene décadas de evidencia científica de seguridad.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Ventajas:</h4>
                        <ul className="text-base space-y-1">
                          <li>• Muy efectivo (mejora 70-80% de casos)</li>
                          <li>• Acción rápida (30-60 minutos)</li>
                          <li>• Décadas de experiencia médica</li>
                          <li>• Disponible en diferentes duraciones</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-300">Efectos adversos comunes:</h4>
                        <ul className="text-base space-y-1">
                          <li>• Pérdida de apetito (usualmente temporal)</li>
                          <li>• Dificultades para conciliar el sueño</li>
                          <li>• Dolor de cabeza leve</li>
                          <li>• Irritabilidad inicial (se adapta)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Alert className="mt-4 border-amber-200 bg-amber-50 dark:bg-amber-950">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <AlertDescription>
                        <strong>Regulación en Argentina:</strong> Requiere receta oficial por triplicado. 
                        Máximo 20 días por receta, por lo que necesitarás consultas mensuales para renovar.
                      </AlertDescription>
                    </Alert>
                  </div>
                  
                  {/* Non-stimulants */}
                  <div className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="h-5 w-5 text-blue-500" />
                      <h3 className="text-xl font-semibold">No Estimulantes (Segunda opción)</h3>
                      <Badge variant="secondary">Alternativa</Badge>
                    </div>
                    <p className="mb-4">
                      <strong>Atomoxetina</strong> es la alternativa cuando los estimulantes no son 
                      adecuados. Es menos efectiva pero tiene algunas ventajas específicas.
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Cuándo considerar atomoxetina:</h4>
                        <ul className="text-base space-y-1">
                          <li>• Intolerancia o efectos adversos severos con estimulantes</li>
                          <li>• Comorbilidad con tics (los estimulantes pueden empeorarlos)</li>
                          <li>• Historia personal o familiar de abuso de sustancias</li>
                          <li>• Ansiedad severa coexistente</li>
                        </ul>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Ventajas únicas:</h4>
                          <ul className="text-base space-y-1">
                            <li>• Sin riesgo de abuso o dependencia</li>
                            <li>• Efecto continuo 24 horas</li>
                            <li>• Puede mejorar ansiedad coexistente</li>
                            <li>• No necesita receta especial</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-300">Desventajas:</h4>
                          <ul className="text-base space-y-1">
                            <li>• Menos efectiva que estimulantes</li>
                            <li>• Inicio de acción lento (4-6 semanas)</li>
                            <li>• Más efectos gastrointestinales</li>
                            <li>• Puede afectar el hígado (raro)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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

          {/* Section 3: Non-Pharmacological Therapies */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(2) ? 'border-green-200 dark:border-green-800' : 'border-green-200 dark:border-green-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Terapias No Farmacológicas
                  </h2>
                  {completedSections.includes(2) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Las terapias son <strong>esenciales</strong>, no opcionales. La medicación corrige la 
                    química cerebral, pero la terapia enseña las habilidades necesarias para manejar 
                    el TDAH en la vida real.
                  </p>
                  
                  <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                    <Brain className="h-5 w-5 text-green-600" />
                    <AlertDescription className="text-base">
                      <strong>¿Por qué son necesarias?</strong> La medicación no enseña cómo organizarse, 
                      manejar el tiempo, o regular las emociones. Esas habilidades se aprenden con terapia y práctica.
                    </AlertDescription>
                  </Alert>
                  
                  {/* CBT Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Terapia Cognitivo-Conductual (TCC)</h3>
                    <p>
                      La TCC es la terapia más estudiada para TDAH. Se enfoca en romper el ciclo negativo: 
                      <em>Fracasos → Pensamientos negativos → Emociones intensas → Evitación → Más fracasos</em>
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-3">Lo que incluye la TCC:</h4>
                        <ul className="text-base space-y-2">
                          <li>
                            <strong>Psicoeducación:</strong> Entender qué es el TDAH y cómo te afecta específicamente
                          </li>
                          <li>
                            <strong>Reestructuración cognitiva:</strong> Cambiar pensamientos automáticos negativos
                          </li>
                          <li>
                            <strong>Técnicas conductuales:</strong> Estrategias prácticas para síntomas específicos
                          </li>
                          <li>
                            <strong>Manejo emocional:</strong> Técnicas para regular emociones intensas
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-3">Beneficios esperados:</h4>
                        <ul className="text-base space-y-2">
                          <li>• <strong>Autoestima:</strong> Mejora significativa y duradera</li>
                          <li>• <strong>Ansiedad/Depresión:</strong> Reducción notable de síntomas</li>
                          <li>• <strong>Funcionamiento:</strong> Mejor rendimiento trabajo/relaciones</li>
                          <li>• <strong>Habilidades:</strong> Estrategias que duran toda la vida</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills Training */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Entrenamiento en Habilidades Específicas</h3>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <h4 className="font-semibold mb-2">📋 Organización</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Uso efectivo de agendas y calendarios</li>
                          <li>• Sistemas de listas y recordatorios</li>
                          <li>• Organización del espacio físico</li>
                          <li>• División de tareas grandes en pequeñas</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                        <h4 className="font-semibold mb-2">🎯 Manejo de Atención</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Técnicas para minimizar distracciones</li>
                          <li>• Períodos de trabajo concentrado</li>
                          <li>• Estrategias para refocalizar atención</li>
                          <li>• Diseño de ambiente de trabajo óptimo</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                        <h4 className="font-semibold mb-2">💜 Regulación Emocional</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Identificación de emociones en el momento</li>
                          <li>• Técnicas de relajación y respiración</li>
                          <li>• Manejo constructivo de la frustración</li>
                          <li>• Estrategias de afrontamiento saludables</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    La duración típica es de <strong>12-16 sesiones</strong> para TCC individual, 
                    aunque puede variar según tus necesidades específicas. El trabajo en casa 
                    (tareas terapéuticas) es crucial para el éxito.
                  </p>
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

          {/* Section 4: Exercise */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(3) ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Ejercicio: "Medicina Natural" para TDAH
                  </h2>
                  {completedSections.includes(3) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    El ejercicio físico es una de las intervenciones <strong>más poderosas</strong> para el TDAH. 
                    Los efectos son inmediatos y significativos, casi como tomar una dosis de medicación natural.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">65%</div>
                      <div className="text-sm">Mejoran planificación tras 20-30 min</div>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">2-4h</div>
                      <div className="text-sm">Duración de efectos en atención</div>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">20min</div>
                      <div className="text-sm">Duración mínima diaria recomendada</div>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">70%</div>
                      <div className="text-sm">Frecuencia cardíaca máxima objetivo</div>
                    </div>
                  </div>
                  
                  <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
                    <Heart className="h-5 w-5 text-red-600" />
                    <AlertDescription className="text-base">
                      <strong>¿Por qué funciona tan bien?</strong> El ejercicio aumenta la dopamina y noradrenalina 
                      (los mismos neurotransmisores que aumentan los medicamentos) de forma natural, 
                      mejorando inmediatamente la función ejecutiva.
                    </AlertDescription>
                  </Alert>
                  
                  {/* Exercise Types */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Tipos de ejercicio más efectivos</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                        <h4 className="text-lg font-semibold mb-2">🏃 Ejercicio Aeróbico</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p><strong>Recomendación:</strong> 20 minutos diarios al 70% de tu frecuencia cardíaca máxima</p>
                            <p><strong>Actividades:</strong> Correr, caminar rápido, bicicleta, natación, baile</p>
                          </div>
                          <div>
                            <p><strong>Beneficios principales:</strong> Mejora el enfoque, aumenta la motivación, 
                            reduce la impulsividad</p>
                            <p><strong>Efectos:</strong> Se sienten en 30 minutos y duran 2-4 horas</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                        <h4 className="text-lg font-semibold mb-2">⚖️ Ejercicios de Equilibrio</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p><strong>Actividades:</strong> Yoga, pilates, ejercicios con BOSU ball, wobble board</p>
                            <p><strong>Efectividad:</strong> 80% de éxito reportado en estudios</p>
                          </div>
                          <div>
                            <p><strong>Beneficio especial:</strong> Mejora la coordinación del cerebelo, 
                            que está relacionado con la atención y el control motor</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950">
                        <h4 className="text-lg font-semibold mb-2">🥊 Deportes de Reacción Rápida</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p><strong>Actividades:</strong> Tenis, ping-pong, artes marciales, basketball, esgrima</p>
                            <p><strong>Características:</strong> Requieren reacción rápida y toma de decisiones</p>
                          </div>
                          <div>
                            <p><strong>Beneficios únicos:</strong> Mejoran el autocontrol, la disciplina 
                            y la capacidad de respuesta bajo presión</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">
                      Beneficios inmediatos del ejercicio (después de 20-30 minutos)
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-base">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">🎯 Función Ejecutiva</h4>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• 65% mejora en planificación</li>
                          <li>• Mejor toma de decisiones</li>
                          <li>• Mayor control de impulsos</li>
                          <li>• Aumento en flexibilidad mental</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">🧠 Atención</h4>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Efectos duran 2-4 horas</li>
                          <li>• Mayor concentración sostenida</li>
                          <li>• Mejor memoria de trabajo</li>
                          <li>• Reducción de distractibilidad</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">💚 Estado de Ánimo</h4>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Reducción significativa de ansiedad</li>
                          <li>• Aumento de motivación</li>
                          <li>• Mejora en autoestima</li>
                          <li>• Mayor sensación de bienestar</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    <strong>Consejo práctico:</strong> Si tienes que elegir entre medicación y ejercicio, 
                    elige ambos. Pero si tuvieras que elegir solo uno, muchos expertos recomendarían 
                    empezar con ejercicio diario antes de considerar medicación.
                  </p>
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
                  <ArrowDown className="h-6 w-6 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5: Creating Your Plan */}
          <section className="scroll-mt-8">
            <Card className={`${readerMode ? 'border-none shadow-none bg-transparent' : 'border-2'} ${completedSections.includes(4) ? 'border-green-200 dark:border-green-800' : 'border-orange-200 dark:border-orange-800'}`}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Creando tu plan de tratamiento
                  </h2>
                  {completedSections.includes(4) && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Ahora que conoces las opciones, es momento de pensar cómo crear tu 
                    <strong> plan personalizado de tratamiento</strong>. No existe una fórmula única, 
                    pero sí hay principios que guían las mejores decisiones.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Pasos para construir tu plan</h3>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Buscar un profesional especializado</h4>
                          <p>
                            Encuentra un psiquiatra o neurólogo con experiencia específica en TDAH. 
                            No todos los médicos están familiarizados con los tratamientos más actuales.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Discutir opciones de medicación</h4>
                          <p>
                            Generalmente se empieza con metilfenidato. Si hay comorbilidades (ansiedad, tics) 
                            o intolerancia, se considera atomoxetina. El ajuste de dosis puede tomar varias semanas.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Encontrar un terapeuta especializado</h4>
                          <p>
                            Busca psicólogos con formación específica en TCC para TDAH. 
                            La terapia general puede ayudar, pero la especializada es más efectiva.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Establecer rutina de ejercicio</h4>
                          <p>
                            Empieza con 20 minutos diarios de actividad aeróbica. 
                            Es lo más fácil de implementar y tendrás beneficios inmediatos.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Programar seguimientos regulares</h4>
                          <p>
                            El tratamiento del TDAH requiere ajustes constantes. 
                            Programa consultas mensuales al inicio, luego cada 3-6 meses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                    <Target className="h-5 w-5 text-orange-600" />
                    <AlertDescription className="text-base">
                      <strong>Expectativas realistas:</strong> El tratamiento es un proceso, no una cura instantánea. 
                      Los medicamentos pueden funcionar en días o semanas, pero encontrar las dosis correctas 
                      y desarrollar habilidades terapéuticas toma meses. Ten paciencia contigo mismo.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">
                      Señales de que tu tratamiento está funcionando:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">En las primeras semanas:</h4>
                        <ul className="text-base space-y-1 mt-2">
                          <li>• Mayor capacidad de concentración</li>
                          <li>• Menos impulsividad en decisiones</li>
                          <li>• Mejor organización básica</li>
                          <li>• Menos olvidos importantes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">En los primeros meses:</h4>
                        <ul className="text-base space-y-1 mt-2">
                          <li>• Mejores relaciones interpersonales</li>
                          <li>• Mayor autoestima y confianza</li>
                          <li>• Mejor rendimiento laboral/académico</li>
                          <li>• Reducción de ansiedad y depresión</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
              </CardContent>
            </Card>
          </section>

          {/* Completion & Next Actions */}
          {completedSections.length === 5 && (
            <section className="scroll-mt-8">
              <Card className="border-2 border-green-500 bg-green-50 dark:bg-green-950">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                    ¡Información completa!
                  </h2>
                  <p className="text-lg text-green-700 dark:text-green-300 mb-6">
                    Ya tienes todo lo necesario para tomar decisiones informadas sobre tu tratamiento. 
                    El siguiente paso es actuar.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="flex items-center gap-2">
                      Encontrar Profesionales Especializados
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Ver Precios de Medicamentos
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
                {completedSections.length}/5 secciones
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}