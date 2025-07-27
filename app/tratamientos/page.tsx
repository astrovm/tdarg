import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Pill, Brain, Heart, Clock, AlertTriangle, CheckCircle, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { CitationLink } from "@/components/citation-link"
import { References, type Reference } from "@/components/references"

export default function TratamientosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Tratamientos para TDAH
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Opciones terapéuticas disponibles en Argentina según el consenso médico nacional<CitationLink number={1} />
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Importante:</strong> El tratamiento debe ser multimodal e individualizado. Siempre consultá con un profesional especializado.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1">
          <TabsTrigger value="overview" className="text-xs md:text-sm">Visión General</TabsTrigger>
          <TabsTrigger value="farmacologico" className="text-xs md:text-sm">Farmacológico</TabsTrigger>
          <TabsTrigger value="no-farmacologico" className="text-xs md:text-sm">No Farmacológico</TabsTrigger>
          <TabsTrigger value="seguimiento" className="text-xs md:text-sm">Seguimiento</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Enfoque Multimodal del Tratamiento
              </CardTitle>
              <CardDescription>
                El tratamiento más efectivo combina intervenciones farmacológicas y no farmacológicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Objetivos del Tratamiento</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Reducir síntomas nucleares (inatención, hiperactividad, impulsividad)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Mejorar el funcionamiento académico/laboral
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Fortalecer relaciones interpersonales
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Desarrollar estrategias de autorregulación
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Tratar comorbilidades asociadas
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Principios Clave</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-sm">Individualización</h4>
                      <p className="text-xs text-muted-foreground">Cada persona requiere un plan específico</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-sm">Combinación</h4>
                      <p className="text-xs text-muted-foreground">Medicación + terapia = mejor resultado</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-sm">Largo Plazo</h4>
                      <p className="text-xs text-muted-foreground">El TDAH requiere manejo continuo</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Algoritmo de Tratamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Evaluación Integral</h4>
                    <p className="text-sm text-muted-foreground">Confirmación diagnóstica y evaluación de comorbilidades</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Psicoeducación</h4>
                    <p className="text-sm text-muted-foreground">Educación sobre TDAH para paciente y familia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Tratamiento Farmacológico</h4>
                    <p className="text-sm text-muted-foreground">Estimulantes (primera línea) o no estimulantes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Intervenciones No Farmacológicas</h4>
                    <p className="text-sm text-muted-foreground">TCC, entrenamiento en habilidades, apoyo familiar</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="farmacologico" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5" />
                Medicamentos Disponibles en Argentina
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Efectividad según consenso internacional */}
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    Efectividad Según Consenso Internacional (208 Conclusiones)
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 border rounded-lg">
                      <div className="text-xl font-bold text-green-500 mb-1">Grandes</div>
                      <div className="text-sm text-muted-foreground">Mejoras en niños con estimulantes</div>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <div className="text-xl font-bold text-blue-500 mb-1">Moderadas-Grandes</div>
                      <div className="text-sm text-muted-foreground">Mejoras en adultos con estimulantes</div>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <div className="text-xl font-bold text-orange-500 mb-1">Moderadas</div>
                      <div className="text-sm text-muted-foreground">Mejoras con no estimulantes</div>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <p className="mb-2">
                      <strong>Recomendación por edad:</strong>
                    </p>
                    <ul className="space-y-1">
                      <li>• <strong>Niños/Adolescentes:</strong> Metilfenidato como primera línea</li>
                      <li>• <strong>Adultos:</strong> Anfetaminas como primera línea (mejor relación beneficio-riesgo)</li>
                      <li>• <strong>No estimulantes:</strong> Alternativa válida cuando estimulantes no son adecuados</li>
                    </ul>
                  </div>
                </div>
                
                <Separator />
                
                {/* Primera línea - Estimulantes */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="default">Primera Línea</Badge>
                    <h3 className="text-lg font-semibold">Estimulantes</h3>
                  </div>
                  
                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-base">Metilfenidato</CardTitle>
                      <CardDescription>Único estimulante disponible comercialmente en Argentina</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Mecanismo de Acción</h5>
                          <p className="text-sm text-muted-foreground mb-3">
                            Inhibe la recaptación de dopamina y noradrenalina, aumentando su disponibilidad cerebral
                          </p>
                          
                          <h5 className="font-semibold mb-2">Formulaciones</h5>
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Liberación inmediata:</strong> 2-4 horas de duración</li>
                            <li>• <strong>Liberación modificada:</strong> 8-12 horas (preferible)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Ventajas</h5>
                          <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                            <li>• Mayor eficacia demostrada</li>
                            <li>• Inicio de acción rápido</li>
                            <li>• Amplia experiencia clínica</li>
                          </ul>
                          
                          <h5 className="font-semibold mb-2 mt-3">Efectos Adversos</h5>
                          <ul className="text-sm space-y-1 text-amber-700 dark:text-amber-300">
                            <li>• Pérdida de apetito</li>
                            <li>• Insomnio inicial</li>
                            <li>• Dolor de cabeza</li>
                            <li>• Aumento de presión arterial</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Segunda línea - No estimulantes */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">Segunda Línea</Badge>
                    <h3 className="text-lg font-semibold">No Estimulantes</h3>
                  </div>
                  
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-base">Atomoxetina</CardTitle>
                      <CardDescription>Principal alternativa no estimulante disponible</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Mecanismo de Acción</h5>
                          <p className="text-sm text-muted-foreground mb-3">
                            Inhibidor selectivo de la recaptación de noradrenalina
                          </p>
                          
                          <h5 className="font-semibold mb-2">Indicaciones Preferentes</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Intolerancia a estimulantes</li>
                            <li>• Comorbilidad con tics</li>
                            <li>• Historia de abuso de sustancias</li>
                            <li>• Ansiedad comórbida significativa</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Ventajas</h5>
                          <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                            <li>• Sin potencial de abuso</li>
                            <li>• Efecto de 24 horas</li>
                            <li>• Puede mejorar ansiedad</li>
                          </ul>
                          
                          <h5 className="font-semibold mb-2 mt-3">Desventajas</h5>
                          <ul className="text-sm space-y-1 text-amber-700 dark:text-amber-300">
                            <li>• Menor eficacia que estimulantes</li>
                            <li>• Inicio de acción más lento (4-6 semanas)</li>
                            <li>• Posibles efectos gastrointestinales</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Tercera línea - Off-label */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">Tercera Línea</Badge>
                    <h3 className="text-lg font-semibold">Medicamentos "Off-Label"</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Bupropión</CardTitle>
                        <CardDescription>Antidepresivo con efecto en TDAH</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Más eficaz que placebo, especialmente en comorbilidad con depresión</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Clonidina</CardTitle>
                        <CardDescription>Reduce hiperactividad e impulsividad</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Solo disponible como medicamento magistral en Argentina</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regulación en Argentina */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Regulación Legal en Argentina
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Ley 19.303:</strong> El metilfenidato requiere receta oficial por triplicado con máximo 20 días de tratamiento
                </AlertDescription>
              </Alert>
              
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Proceso de Prescripción</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Receta manuscrita en formulario oficial</li>
                    <li>• Máximo 20 días de medicación por receta</li>
                    <li>• Renovación mensual obligatoria</li>
                    <li>• Registro en libro oficial por farmacia</li>
                  </ul>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Implicaciones Prácticas</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Consultas médicas más frecuentes</li>
                    <li>• Mayor costo y tiempo para pacientes</li>
                    <li>• Posibles interrupciones de tratamiento</li>
                    <li>• Estigmatización del trastorno</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="no-farmacologico" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Intervenciones No Farmacológicas (INF)
              </CardTitle>
              <CardDescription>
                Componente esencial del tratamiento multimodal con evidencia científica sólida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* TCC */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Terapia Cognitivo-Conductual (TCC)</h3>
                  <Card className="border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Principios Fundamentales</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            La TCC ayuda a entender cómo pensamientos, emociones y comportamientos se influyen mutuamente, 
                            rompiendo ciclos negativos de frustración y evitación.
                          </p>
                          
                          <h4 className="font-semibold mb-2">Modelo de Intervención</h4>
                          <div className="text-sm space-y-2">
                            <div className="p-2 bg-red-50 dark:bg-red-950 rounded">
                              <strong>Experiencias de fracaso</strong> → Creencias disfuncionales
                            </div>
                            <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded">
                              <strong>Creencias negativas</strong> → Emociones intensas
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <strong>Emociones negativas</strong> → Conductas de evitación
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Componentes Clave</h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <strong>Psicoeducación:</strong> Comprender el TDAH y su impacto
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <strong>Organización:</strong> Sistemas de planificación y priorización
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <strong>Gestión del tiempo:</strong> Técnicas prácticas de manejo temporal
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <strong>Control de impulsos:</strong> Estrategias de autorregulación
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <strong>Reestructuración cognitiva:</strong> Cambiar pensamientos negativos
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Entrenamiento en Funciones Ejecutivas */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Entrenamiento en Funciones Ejecutivas</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Organización y Planificación</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Uso de agendas y calendarios</li>
                          <li>• Sistemas de listas y recordatorios</li>
                          <li>• Organización del espacio físico</li>
                          <li>• División de tareas complejas</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Gestión de la Atención</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Técnicas de minimización de distracciones</li>
                          <li>• Períodos de trabajo concentrado</li>
                          <li>• Estrategias de refocalización</li>
                          <li>• Ambiente de trabajo optimizado</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Regulación Emocional</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Identificación de emociones</li>
                          <li>• Técnicas de relajación</li>
                          <li>• Manejo de la frustración</li>
                          <li>• Estrategias de afrontamiento</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Apoyo Familiar */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Apoyo Familiar y Social</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Para la Familia</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Educación sobre TDAH</li>
                            <li>• Estrategias de comunicación</li>
                            <li>• Manejo de conflictos</li>
                            <li>• Apoyo emocional</li>
                            <li>• Establecimiento de rutinas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">En el Entorno Laboral/Académico</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Adaptaciones ambientales</li>
                            <li>• Comunicación con supervisores</li>
                            <li>• Estrategias de productividad</li>
                            <li>• Manejo del estrés laboral</li>
                            <li>• Negociación de tareas</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Ejercicio Físico */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Ejercicio Físico: Medicina Natural para el TDAH
              </CardTitle>
              <CardDescription>
                Una de las intervenciones más efectivas e inmediatas para mejorar los síntomas del TDAH
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-500 mb-1">65%<CitationLink number={1} /></div>
                    <div className="text-sm text-muted-foreground">Mejoran planificación tras 20-30 min</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-500 mb-1">70%<CitationLink number={1} /></div>
                    <div className="text-sm text-muted-foreground">Frecuencia cardíaca máxima objetivo</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-500 mb-1">20 min</div>
                    <div className="text-sm text-muted-foreground">Duración mínima diaria recomendada</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-base">Actividad Aeróbica</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>20 min/día</strong> al 70% FCM<CitationLink number={1} /></li>
                        <li>• Correr, caminar rápido, bicicleta</li>
                        <li>• Aumenta dopamina y norepinefrina</li>
                        <li>• Mejora enfoque y motivación</li>
                        <li>• Reduce hiperactividad e impulsividad</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-base">Entrenamiento de Equilibrio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Yoga, pilates, BOSU</li>
                        <li>• Tablas de equilibrio (wobble board)</li>
                        <li>• Estimula el cerebelo</li>
                        <li>• Mejora coordinación y atención</li>
                        <li>• <strong>80% éxito</strong> reportado por Zing Performance<CitationLink number={1} /></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="text-base">Fitness Enfocado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Deportes de raqueta (tenis, ping-pong)</li>
                        <li>• Artes marciales</li>
                        <li>• Deportes de reacción rápida</li>
                        <li>• Mejora funciones ejecutivas</li>
                        <li>• Desarrolla autocontrol y disciplina</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Beneficios Inmediatos del Ejercicio
                  </h4>
                  <p className="text-sm mb-2">
                    Una sola sesión de ejercicio de 20-30 minutos produce mejoras inmediatas en:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Planificación y organización:</strong> 65% de mejora<CitationLink number={1} /></li>
                    <li>• <strong>Atención y concentración:</strong> Efectos duran 2-4 horas</li>
                    <li>• <strong>Estado de ánimo:</strong> Reducción de ansiedad y depresión</li>
                    <li>• <strong>Función ejecutiva:</strong> Mejora en toma de decisiones</li>
                    <li>• <strong>Autorregulación:</strong> Mayor control de impulsos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seguimiento" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Seguimiento y Monitoreo
              </CardTitle>
              <CardDescription>
                El TDAH requiere seguimiento continuo para optimizar el tratamiento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Monitoreo de efectos adversos */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Monitoreo de Efectos Adversos</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Heart className="h-4 w-4" />
                          Control Cardiovascular
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Presión arterial cada 6 meses</li>
                          <li>• Frecuencia cardíaca en cada visita</li>
                          <li>• ECG si hay factores de riesgo</li>
                          <li>• Evaluación de síntomas cardíacos</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Control General</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Peso y talla en cada consulta</li>
                          <li>• Evaluación del apetito</li>
                          <li>• Calidad y patrón del sueño</li>
                          <li>• Estado de ánimo y ansiedad</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Manejo de efectos adversos */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Manejo de Efectos Adversos Comunes</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Pérdida de Apetito</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold mb-2">Estrategias</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Tomar medicación durante/después de comidas</li>
                              <li>• Priorizar alimentos de alta densidad calórica</li>
                              <li>• Comidas pequeñas y frecuentes</li>
                              <li>• Suplementos nutricionales si es necesario</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Cuándo Preocuparse</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Pérdida de peso &gt; 10% del peso inicial</li>
                              <li>• Rechazo total de comidas</li>
                              <li>• Signos de desnutrición</li>
                              <li>• Impacto en crecimiento (niños/adolescentes)</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Insomnio y Alteraciones del Sueño</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold mb-2">Manejo del "Efecto Rebote"</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Ajustar horario de última dosis</li>
                              <li>• Considerar dosis baja vespertina</li>
                              <li>• Higiene del sueño</li>
                              <li>• Rutinas de relajación nocturna</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Técnicas Complementarias</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Melatonina (bajo supervisión médica)</li>
                              <li>• Ejercicio regular (no tardío)</li>
                              <li>• Evitar cafeína después del mediodía</li>
                              <li>• Ambiente de descanso optimizado</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Frecuencia de seguimiento */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Cronograma de Seguimiento</h3>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Inicio del Tratamiento</h4>
                      <p className="text-sm">Consultas semanales las primeras 4 semanas para ajuste de dosis y monitoreo de efectos adversos</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Fase de Estabilización</h4>
                      <p className="text-sm">Consultas mensuales por 3-6 meses hasta lograr estabilidad clínica</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Mantenimiento</h4>
                      <p className="text-sm">Consultas cada 3-6 meses con evaluación integral anual</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tratamiento de Comorbilidades</CardTitle>
              <CardDescription>
                Manejo integral cuando el TDAH coexiste con otras condiciones<CitationLink number={1} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Principio clave:</strong> Generalmente se trata primero la condición más grave o que genera mayor deterioro funcional
                  </AlertDescription>
                </Alert>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">TDAH + Ansiedad</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Considerar atomoxetina como primera línea</li>
                      <li>• TCC específica para ambas condiciones</li>
                      <li>• Monitoreo cuidadoso con estimulantes</li>
                    </ul>
                    
                    <h4 className="font-semibold">TDAH + Depresión</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Evaluar si la depresión es secundaria al TDAH</li>
                      <li>• Considerar bupropión como alternativa</li>
                      <li>• Tratamiento integrado con antidepresivos</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">TDAH + Trastorno Bipolar</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Estabilizar el TB antes de tratar TDAH</li>
                      <li>• Estimulantes solo con estabilizadores del ánimo</li>
                      <li>• Monitoreo estrecho de episodios maníacos</li>
                    </ul>
                    
                    <h4 className="font-semibold">TDAH + Uso de Sustancias</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Tratar adicción antes o simultáneamente</li>
                      <li>• Preferir atomoxetina o bupropión</li>
                      <li>• Seguimiento especializado conjunto</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <References references={tratamientosReferences} />
    </div>
    </div>
  )
}

const tratamientosReferences: Reference[] = [
  {
    id: 1,
    title: "Primer Consenso Argentino sobre TDAH: Parte 3",
    authors: "Andrea Abadi, Marcelo Cetkovich-Bakmas, Hernán Klijnjan et al.",
    url: "/primer-consenso-argentino-tdah-3.pdf",
    description: "Tercera parte del consenso nacional argentino enfocada en tratamientos y protocolos terapéuticos.",
    year: "2024"
  }
]