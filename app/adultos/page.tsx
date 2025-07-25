import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { User, Users, Heart, Briefcase, GraduationCap, Clock, Zap, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"

export default function AdultosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            TDAH en la Vida Adulta
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Comprendiendo cómo se manifiesta el TDAH después de la infancia
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Realidad:</strong> Según el consenso internacional, la <strong>prevalencia mundial en adultos es del 2.5-2.8%</strong>. 
          Solo 1 de cada 6 jóvenes mantiene todos los criterios a los 25 años, pero <strong>aproximadamente la mitad</strong> 
          sigue con deterioro residual significativo.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="manifestaciones" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1">
          <TabsTrigger value="manifestaciones" className="text-xs md:text-sm">Manifestaciones</TabsTrigger>
          <TabsTrigger value="areas-impacto" className="text-xs md:text-sm">Áreas de Impacto</TabsTrigger>
          <TabsTrigger value="mujeres" className="text-xs md:text-sm">TDAH en Mujeres</TabsTrigger>
          <TabsTrigger value="cambios-edad" className="text-xs md:text-sm">Cambios con la Edad</TabsTrigger>
        </TabsList>

        <TabsContent value="manifestaciones" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Cómo se Manifiesta el TDAH en Adultos
              </CardTitle>
              <CardDescription>
                Los síntomas evolucionan pero persisten, adaptándose a las demandas de la vida adulta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Hiperactividad en adultos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Hiperactividad: De Externa a Interna</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">En la Infancia</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Correr y trepar excesivamente</li>
                          <li>• No poder quedarse sentado</li>
                          <li>• Movimiento motor visible constante</li>
                          <li>• "Como si tuviera un motor"</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-blue-200 dark:border-blue-800">
                      <CardHeader>
                        <CardTitle className="text-base">En la Adultez</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Inquietud interna constante</strong></li>
                          <li>• Dificultad para relajarse</li>
                          <li>• Impaciencia en actividades sedentarias</li>
                          <li>• Necesidad de estar "en movimiento"</li>
                          <li>• Movimientos sutiles (tamboreo, balanceo)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Desatención en adultos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Desatención: Más Compleja en la Adultez</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Organización y Tiempo
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Procrastinación crónica</strong></li>
                          <li>• Subestimar tiempo necesario</li>
                          <li>• Dificultad con plazos</li>
                          <li>• Pérdida frecuente de objetos</li>
                          <li>• Espacios desorganizados</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          Trabajo y Productividad
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Dificultad con tareas monótonas</li>
                          <li>• Distracción con estímulos externos</li>
                          <li>• Cambios frecuentes de actividad</li>
                          <li>• Problemas para finalizar proyectos</li>
                          <li>• <strong>Hiperfoco ocasional</strong></li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Relaciones
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• No escuchar completamente</li>
                          <li>• Olvidar compromisos sociales</li>
                          <li>• Dificultad para seguir conversaciones</li>
                          <li>• Parecer desinteresado o distraído</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Impulsividad en adultos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Impulsividad: Decisiones y Consecuencias</h3>
                  <div className="space-y-4">
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Impulsividad Verbal</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Interrumpir conversaciones</li>
                              <li>• Comentarios inapropiados</li>
                              <li>• Respuestas antes de pensar</li>
                              <li>• Dificultad para filtrar pensamientos</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Impulsividad en Decisiones</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Cambios abruptos de trabajo</li>
                              <li>• Compras impulsivas importantes</li>
                              <li>• Decisiones relacionales precipitadas</li>
                              <li>• Cambios de residencia súbitos</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Desregulación emocional */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Desregulación Emocional: El Síntoma Invisible</h3>
                  <Alert className="mb-4">
                    <Heart className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Clave en adultos:</strong> La desregulación emocional es uno de los síntomas más impactantes 
                      y menos reconocidos del TDAH adulto.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Manifestaciones</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Labilidad emocional:</strong> Cambios de humor rápidos e intensos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Baja tolerancia:</strong> Frustración desproporcionada ante contratiempos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Sensibilidad al rechazo:</strong> Interpretación negativa de críticas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Reacciones intensas:</strong> Emociones abrumadoras y difíciles de controlar</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Impacto en la Vida</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Conflictos laborales frecuentes</li>
                          <li>• Dificultades en relaciones de pareja</li>
                          <li>• Problemas en la crianza de hijos</li>
                          <li>• Baja autoestima crónica</li>
                          <li>• Evitación de situaciones sociales</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Fenómenos especiales */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Fenómenos Especiales del TDAH Adulto</h3>
                  <div className="space-y-4">
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-base">Hiperfoco</CardTitle>
                        <CardDescription>Concentración intensa en actividades de gran interés</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold mb-2">Características</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Concentración intensa por horas</li>
                              <li>• Pérdida de noción del tiempo</li>
                              <li>• Olvido de necesidades básicas</li>
                              <li>• Dificultad para cambiar de tarea</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Doble Filo</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <span className="text-green-600">Ventaja:</span> Productividad excepcional</li>
                              <li>• <span className="text-red-600">Desventaja:</span> Descuido de otras responsabilidades</li>
                              <li>• <span className="text-amber-600">Balance:</span> Difícil de controlar voluntariamente</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-purple-200 dark:border-purple-800">
                      <CardHeader>
                        <CardTitle className="text-base">Ciclos "Encendido-Apagado"</CardTitle>
                        <CardDescription>Alternancia entre períodos de alta y baja energía</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Modo "Encendido"</h5>
                            <p className="text-xs">Alta energía, productividad excepcional, múltiples proyectos simultáneos</p>
                          </div>
                          <div className="p-3 bg-gray-50 dark:bg-gray-950 rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Modo "Apagado"</h5>
                            <p className="text-xs">Agotamiento profundo, procrastinación, dificultad para actividades básicas</p>
                          </div>
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Patrón Típico</h5>
                            <p className="text-xs">Especialmente notable los fines de semana y períodos de menor estructura externa</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="areas-impacto" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Impacto en Diferentes Áreas de la Vida</CardTitle>
              <CardDescription>
                Cómo el TDAH afecta las diversas dimensiones de la vida adulta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Área Laboral */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Área Laboral y Profesional
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">Desafíos Comunes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Procrastinación:</strong> Posponer tareas importantes hasta el último momento</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Gestión del tiempo:</strong> Subestimar duración de tareas, llegar tarde</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Organización:</strong> Escritorio desordenado, archivos perdidos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Reuniones:</strong> Distraerse, interrumpir, olvidar puntos importantes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Conflictos:</strong> Reacciones impulsivas con colegas o supervisores</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-base">Fortalezas Potenciales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Creatividad:</strong> Pensamiento divergente e ideas innovadoras</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Energía:</strong> Entusiasmo contagioso en proyectos interesantes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Multitarea:</strong> Capacidad para manejar varios proyectos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Crisis:</strong> Rendimiento excepcional bajo presión</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Hiperfoco:</strong> Concentración intensa en tareas fascinantes</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Estadísticas de Impacto Laboral</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-red-500 mb-1">12%</div>
                        <div className="text-sm text-muted-foreground">Reducción en empleo</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-amber-500 mb-1">34%</div>
                        <div className="text-sm text-muted-foreground">Reducción en ingresos</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-blue-500 mb-1">2x</div>
                        <div className="text-sm text-muted-foreground">Mayor rotación laboral</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Área Académica */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Área Académica y de Estudios
                  </h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Educación Universitaria</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Dificultad para mantener atención en clases largas</li>
                              <li>• Procrastinación con trabajos y estudios</li>
                              <li>• Problemas para organizar el tiempo de estudio</li>
                              <li>• Mayor tasa de abandono universitario</li>
                              <li>• Rendimiento inconsistente según interés</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Educación Continua</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Dificultad para completar cursos online</li>
                              <li>• Necesidad de aprendizaje activo e interactivo</li>
                              <li>• Mejor rendimiento en formatos prácticos</li>
                              <li>• Desafíos con la autodisciplina</li>
                              <li>• Beneficio de estructura externa clara</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                        <h4 className="font-semibold mb-2">Estadísticas Preocupantes</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 2x mayor tasa de repetición</li>
                          <li>• Doble probabilidad de no graduarse a tiempo</li>
                          <li>• Mayor riesgo de abandono universitario</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                        <h4 className="font-semibold mb-2">Con Tratamiento Adecuado</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Mejora significativa en rendimiento</li>
                          <li>• Mayor probabilidad de completar estudios</li>
                          <li>• Desarrollo de estrategias compensatorias</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Relaciones */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Relaciones Interpersonales
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Relaciones de Pareja</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Comunicación:</strong> Interrumpir, no escuchar completamente</li>
                            <li>• <strong>Responsabilidades:</strong> Olvidar compromisos y fechas importantes</li>
                            <li>• <strong>Emociones:</strong> Reacciones intensas, cambios de humor</li>
                            <li>• <strong>Planificación:</strong> Dificultades con la organización doméstica</li>
                            <li>• <strong>Intimidad:</strong> Distracción durante momentos íntimos</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Relaciones Familiares</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Crianza:</strong> Inconsistencia en límites y rutinas</li>
                            <li>• <strong>Paciencia:</strong> Baja tolerancia a la frustración con niños</li>
                            <li>• <strong>Organización:</strong> Dificultades con horarios familiares</li>
                            <li>• <strong>Atención:</strong> Distraerse durante actividades familiares</li>
                            <li>• <strong>Modelo:</strong> Preocupación por transmitir patrones</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Amistades y Relaciones Sociales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-semibold mb-2">Desafíos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Olvidar planes sociales</li>
                              <li>• Interrumpir conversaciones</li>
                              <li>• Dificultad para mantener contacto</li>
                              <li>• Interpretación negativa de señales sociales</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Fortalezas</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Espontaneidad y creatividad</li>
                              <li>• Entusiasmo contagioso</li>
                              <li>• Capacidad de hiperfoco en amigos</li>
                              <li>• Pensamiento divergente valioso</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Estrategias</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Recordatorios para fechas importantes</li>
                              <li>• Comunicación directa sobre necesidades</li>
                              <li>• Elección de amigos comprensivos</li>
                              <li>• Participación en grupos de apoyo</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mujeres" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>TDAH en Mujeres: El Diagnóstico Oculto</CardTitle>
              <CardDescription>
                Por qué las mujeres son subdiagnosticadas y cómo se manifiesta el TDAH de manera diferente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Subdiagnóstico crítico:</strong> Las mujeres con TDAH son sistemáticamente subdiagnosticadas, 
                  llevando a mayor prevalencia de depresión, ansiedad y baja autoestima.
                </AlertDescription>
              </Alert>

              <div className="space-y-8">
                {/* Estadísticas de género */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Diferencias en Diagnóstico por Género</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-500 mb-1">2.4:1</div>
                      <div className="text-sm text-muted-foreground">Proporción H:M en población general</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-red-500 mb-1">4:1</div>
                      <div className="text-sm text-muted-foreground">Proporción H:M en consulta médica</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-500 mb-1">1.9:1</div>
                      <div className="text-sm text-muted-foreground">Proporción H:M en adultos</div>
                    </div>
                  </div>
                  
                  <Card className="border-amber-200 dark:border-amber-800">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">¿Qué significa esta brecha?</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        La gran diferencia entre la proporción real y la que llega a consulta indica que muchas mujeres 
                        no están siendo diagnosticadas. Esto se debe a que el TDAH en mujeres se presenta de manera más sutil 
                        y menos disruptiva externamente.
                      </p>
                      <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                        <p className="text-sm">
                          <strong>Consecuencia:</strong> Muchas mujeres reciben diagnósticos tardíos (después de los 30-40 años), 
                          frecuentemente después de que sus hijos sean diagnosticados con TDAH.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Manifestaciones específicas */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Manifestaciones Específicas en Mujeres</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Síntomas Predominantes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-3">Más Comunes en Mujeres</h5>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Inatención predominante:</strong> "Soñar despierta", distraerse internamente</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Hiperactividad interna:</strong> Mente acelerada, ansiedad, preocupación</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Sensibilidad emocional:</strong> Reacciones intensas, llanto fácil</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Perfeccionismo:</strong> Altos estándares, autocrítica severa</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-3">Menos Visibles Externamente</h5>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Compensación social:</strong> Intentan "encajar" y complacer</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Internalización:</strong> Problemas hacia adentro, no hacia afuera</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Enmascaramiento:</strong> Ocultar dificultades para parecer "normales"</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Autoculpa:</strong> Atribuir problemas a "falta de carácter"</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Ciclos Hormonales y TDAH</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Los cambios hormonales afectan significativamente los síntomas del TDAH en mujeres:
                          </p>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Ciclo Menstrual</h5>
                              <p className="text-xs">Empeoramiento premenstrual, mejora con estrógenos altos</p>
                            </div>
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Embarazo</h5>
                              <p className="text-xs">Mejora temporal en algunos casos, complicaciones en otros</p>
                            </div>
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Menopausia</h5>
                              <p className="text-xs">Empeoramiento significativo con la caída de estrógenos</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Impacto específico */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Impacto Específico en la Vida de las Mujeres</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">Consecuencias del Subdiagnóstico</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Mayor depresión y ansiedad:</strong> Por años de lucha sin explicación</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Baja autoestima crónica:</strong> "Soy perezosa, desorganizada, incapaz"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Problemas laborales:</strong> Dificultades no reconocidas ni tratadas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Relaciones afectadas:</strong> Incomprensión de pareja y familia</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Mayor riesgo suicida:</strong> Desesperanza por no encontrar soluciones</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-base">Beneficios del Diagnóstico Tardío</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <Heart className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Alivio profundo:</strong> "No estoy loca, hay una explicación"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Heart className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Reinterpretación del pasado:</strong> Comprender experiencias previas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Heart className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Estrategias efectivas:</strong> Herramientas específicas para mujeres</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Heart className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Mejor autocompasión:</strong> Reducir la autocrítica severa</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Heart className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Prevención para hijas:</strong> Reconocimiento temprano en la descendencia</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Señales de alerta */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Señales de Alerta para Considerar TDAH en Mujeres</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">En la Infancia/Adolescencia (Recordar)</h4>
                          <ul className="text-sm space-y-1">
                            <li>• "Niña distraída" o "en las nubes"</li>
                            <li>• Dificultades académicas inexplicadas</li>
                            <li>• Sensibilidad emocional extrema</li>
                            <li>• Problemas para completar tareas</li>
                            <li>• Desorganización crónica</li>
                            <li>• Etiquetas: "inmadura", "irresponsable"</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">En la Adultez</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Lucha constante con organización doméstica</li>
                            <li>• Procrastinación severa</li>
                            <li>• Hipersensibilidad al rechazo</li>
                            <li>• Perfecteccionismo paralizante</li>
                            <li>• Cambios de humor intensos</li>
                            <li>• Sensación de "no dar la talla" constantemente</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cambios-edad" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Evolución del TDAH a lo Largo de la Vida</CardTitle>
              <CardDescription>
                Cómo cambian los síntomas y desafíos desde la adolescencia hasta la edad adulta mayor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Transición adolescencia-adultez */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Transición: Adolescencia → Adultez Joven</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Cambios en los Síntomas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <h5 className="font-semibold text-sm">Hiperactividad</h5>
                            <p className="text-xs">Física → Inquietud interna, impaciencia, necesidad de estimulación</p>
                          </div>
                          <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                            <h5 className="font-semibold text-sm">Inatención</h5>
                            <p className="text-xs">Se mantiene o empeora con mayor demanda cognitiva</p>
                          </div>
                          <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                            <h5 className="font-semibold text-sm">Impulsividad</h5>
                            <p className="text-xs">Menos física, más en decisiones importantes y emocional</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Nuevos Desafíos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Independencia:</strong> Gestionar vida sin estructura externa</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Universidad/Trabajo:</strong> Mayor demanda de organización</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Relaciones:</strong> Intimidad y compromisos a largo plazo</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Finanzas:</strong> Manejo del dinero y planificación</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Alert className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Período crítico:</strong> Entre el 45% y 85% de adolescentes con TDAH mantienen síntomas 
                      significativos en la adultez, aunque muchos no reciben seguimiento médico continuo.
                    </AlertDescription>
                  </Alert>
                </div>

                <Separator />

                {/* Adultez temprana vs media */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Adultez Temprana (20-35) vs. Media (35-50)</h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-blue-200 dark:border-blue-800">
                        <CardHeader>
                          <CardTitle className="text-base">Adultez Temprana (20-35 años)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-sm mb-1">Desafíos Principales</h5>
                              <ul className="text-xs space-y-1">
                                <li>• Establecer carrera profesional</li>
                                <li>• Formar relaciones estables</li>
                                <li>• Gestionar finanzas independientes</li>
                                <li>• Completar educación superior</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm mb-1">Manifestaciones Típicas</h5>
                              <ul className="text-xs space-y-1">
                                <li>• Cambios frecuentes de trabajo/carrera</li>
                                <li>• Relaciones intensas pero inestables</li>
                                <li>• Procrastinación con responsabilidades</li>
                                <li>• Búsqueda de novedad y estimulación</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-green-200 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="text-base">Adultez Media (35-50 años)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-sm mb-1">Desafíos Principales</h5>
                              <ul className="text-xs space-y-1">
                                <li>• Crianza de hijos (multitarea extrema)</li>
                                <li>• Responsabilidades laborales complejas</li>
                                <li>• Cuidado de padres mayores</li>
                                <li>• Gestión doméstica y familiar</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm mb-1">Manifestaciones Típicas</h5>
                              <ul className="text-xs space-y-1">
                                <li>• Agotamiento crónico ("burnout")</li>
                                <li>• Culpa por no "dar la talla" como padre/madre</li>
                                <li>• Mayor necesidad de organización externa</li>
                                <li>• Diagnóstico frecuente tras diagnóstico de hijos</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">La "Crisis de los 40" en Personas con TDAH</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Muchas personas con TDAH experimentan una intensificación de síntomas en la mediana edad, 
                          especialmente las mujeres debido a cambios hormonales.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                            <h5 className="font-semibold text-sm">Factores Agravantes</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Múltiples responsabilidades</li>
                              <li>• Cambios hormonales (mujeres)</li>
                              <li>• Fatiga acumulada</li>
                              <li>• Menos tiempo para autocuidado</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                            <h5 className="font-semibold text-sm">Síntomas Frecuentes</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Olvidos más frecuentes</li>
                              <li>• Mayor desorganización</li>
                              <li>• Emociones más intensas</li>
                              <li>• Sensación de "no poder más"</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                            <h5 className="font-semibold text-sm">Oportunidades</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Momento para diagnóstico</li>
                              <li>• Reevaluación de prioridades</li>
                              <li>• Búsqueda de tratamiento</li>
                              <li>• Desarrollo de autocompasión</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Adultez mayor */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">TDAH en la Adultez Mayor (50+ años)</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Prevalencia y Reconocimiento</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2">Estadísticas</h5>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Prevalencia general:</span>
                                <Badge variant="outline">1%</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Disminución gradual:</span>
                                <Badge variant="outline">Síntomas menos intensos</Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Diagnósticos tardíos:</span>
                                <Badge variant="outline">En aumento</Badge>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Características Especiales</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Síntomas menos evidentes externamente</li>
                              <li>• Mayor desarrollo de estrategias compensatorias</li>
                              <li>• Posible mejora con la jubilación (menos demandas)</li>
                              <li>• Riesgo de confusión con demencia inicial</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Desafíos Específicos de la Edad</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2">Nuevos Desafíos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Manejo de múltiples medicamentos</li>
                              <li>• Cambios cognitivos normales del envejecimiento</li>
                              <li>• Adaptación a la jubilación</li>
                              <li>• Posibles problemas de salud comórbidos</li>
                              <li>• Cambios en relaciones (hijos independientes)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Ventajas Potenciales</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Menor presión social y laboral</li>
                              <li>• Más tiempo para autocuidado</li>
                              <li>• Sabiduría y estrategias desarrolladas</li>
                              <li>• Aceptación personal mayor</li>
                              <li>• Posibilidad de ayudar a otros</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Consideraciones para el Tratamiento</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Alert>
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Importante:</strong> Los adultos mayores pueden beneficiarse del tratamiento del TDAH, 
                              pero requieren monitoreo más cuidadoso debido a posibles interacciones medicamentosas 
                              y cambios fisiológicos relacionados con la edad.
                            </AlertDescription>
                          </Alert>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Precauciones</h5>
                              <ul className="text-xs space-y-1">
                                <li>• Mayor sensibilidad a medicamentos</li>
                                <li>• Riesgo cardiovascular aumentado</li>
                                <li>• Interacciones con otros fármacos</li>
                                <li>• Monitoreo más frecuente</li>
                              </ul>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Beneficios</h5>
                              <ul className="text-xs space-y-1">
                                <li>• Mejora en calidad de vida</li>
                                <li>• Reducción de síntomas depresivos</li>
                                <li>• Mayor funcionalidad cognitiva</li>
                                <li>• Mejor autoestima</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}