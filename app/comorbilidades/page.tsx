import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Brain, Heart, Activity, Zap, Pill, Users } from "lucide-react"

export default function ComorbilidadesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">TDAH y Comorbilidades</h1>
        <p className="text-xl text-muted-foreground">
          El TDAH raramente viene solo: comprende las condiciones asociadas
        </p>
      </div>

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Datos clave:</strong> Entre el 70% y 80% de las personas con TDAH desarrollan al menos una condición comórbida. 
          La comorbilidad es la norma, no la excepción.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        {/* Estadísticas generales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Prevalencia de Comorbilidades
            </CardTitle>
            <CardDescription>
              Frecuencia de condiciones asociadas al TDAH en población adulta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Trastornos de Ansiedad</span>
                    <span className="text-sm text-muted-foreground">50-60%</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Trastorno Depresivo Mayor</span>
                    <span className="text-sm text-muted-foreground">40-50%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Trastorno Bipolar</span>
                    <span className="text-sm text-muted-foreground">15-20%</span>
                  </div>
                  <Progress value={18} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Trastorno por Uso de Sustancias</span>
                    <span className="text-sm text-muted-foreground">25-40%</span>
                  </div>
                  <Progress value={32} className="h-2" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Trastornos del Sueño</span>
                    <span className="text-sm text-muted-foreground">50-70%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Trastornos de la Conducta Alimentaria</span>
                    <span className="text-sm text-muted-foreground">10-30%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Diabetes Tipo 2</span>
                    <span className="text-sm text-muted-foreground">Riesgo aumentado</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Enfermedades Cardiovasculares</span>
                    <span className="text-sm text-muted-foreground">Riesgo aumentado</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comorbilidades psiquiátricas principales */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Comorbilidades Psiquiátricas Principales</h2>
          
          {/* Ansiedad */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" />
                TDAH + Trastornos de Ansiedad
              </CardTitle>
              <CardDescription>La comorbilidad más frecuente en adultos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">¿Por qué ocurre?</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      Las dificultades crónicas del TDAH generan preocupación constante
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      Miedo al fracaso por experiencias pasadas
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      Ansiedad anticipatoria por olvidos o errores
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      Sobrecarga sensorial e hipervigilancia
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Diferencias clave</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm text-blue-600 dark:text-blue-400">TDAH</h5>
                      <p className="text-xs">Síntomas crónicos desde la infancia, dificultades de concentración constantes</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm text-amber-600 dark:text-amber-400">Trastorno de Ansiedad</h5>
                      <p className="text-xs">Puede aparecer en cualquier momento, episodios de ansiedad intensa</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm text-purple-600 dark:text-purple-400">Comorbilidad</h5>
                      <p className="text-xs">TDAH + ansiedad por las dificultades que genera el trastorno</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h4 className="font-semibold mb-3">Implicaciones para el tratamiento</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Recomendado</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Atomoxetina como primera línea</li>
                      <li>• TCC específica para ambas condiciones</li>
                      <li>• Técnicas de relajación y mindfulness</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Precaución</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Estimulantes pueden aumentar ansiedad inicial</li>
                      <li>• Monitoreo cuidadoso los primeros meses</li>
                      <li>• Ajuste gradual de dosis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Depresión */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-500" />
                TDAH + Depresión Mayor
              </CardTitle>
              <CardDescription>Relación compleja entre ambas condiciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-500 mb-1">40-50%</div>
                  <div className="text-sm text-muted-foreground">Prevalencia en adultos con TDAH</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-500 mb-1">2x</div>
                  <div className="text-sm text-muted-foreground">Mayor riesgo que población general</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-500 mb-1">70%</div>
                  <div className="text-sm text-muted-foreground">Mejora al tratar TDAH primero</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tipos de relación TDAH-Depresión</h4>
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                      <h5 className="font-semibold text-sm">Depresión Secundaria (más común)</h5>
                      <p className="text-xs">Surge como resultado de las dificultades crónicas del TDAH: fracasos repetidos, baja autoestima, problemas laborales/académicos</p>
                    </div>
                    <div className="p-3 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h5 className="font-semibold text-sm">Comorbilidad Verdadera</h5>
                      <p className="text-xs">Ambas condiciones coexisten independientemente, cada una requiere tratamiento específico</p>
                    </div>
                    <div className="p-3 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950">
                      <h5 className="font-semibold text-sm">Sintomatología Superpuesta</h5>
                      <p className="text-xs">Dificultades de concentración y motivación pueden confundir el diagnóstico</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Diferenciación diagnóstica</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">TDAH</h5>
                      <ul className="text-xs space-y-1">
                        <li>• Síntomas crónicos y constantes</li>
                        <li>• Presentes desde la infancia</li>
                        <li>• Dificultades en múltiples contextos</li>
                        <li>• No episódico</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Depresión Mayor</h5>
                      <ul className="text-xs space-y-1">
                        <li>• Episodios definidos en el tiempo</li>
                        <li>• Puede aparecer en cualquier edad</li>
                        <li>• Estado de ánimo depresivo predominante</li>
                        <li>• Curso episódico</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trastorno Bipolar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-500" />
                TDAH + Trastorno Bipolar
              </CardTitle>
              <CardDescription>Comorbilidad compleja que requiere manejo especializado</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Diagnóstico diferencial crucial:</strong> Ambos trastornos comparten síntomas como impulsividad, 
                  distracción e irritabilidad, pero tienen tratamientos muy diferentes.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Diferencias diagnósticas clave</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-blue-200 dark:border-blue-800">
                      <CardHeader>
                        <CardTitle className="text-base">TDAH</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Curso crónico y estable</li>
                          <li>• Síntomas constantes desde la infancia</li>
                          <li>• Impulsividad situacional</li>
                          <li>• Desatención persistente</li>
                          <li>• No hay episodios definidos</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-purple-200 dark:border-purple-800">
                      <CardHeader>
                        <CardTitle className="text-base">Trastorno Bipolar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Episodios claramente definidos</li>
                          <li>• Manía/hipomanía con euforia o irritabilidad</li>
                          <li>• Grandiosidad y menor necesidad de sueño</li>
                          <li>• Cambios marcados del estado basal</li>
                          <li>• Períodos asintomáticos entre episodios</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Cuando coexisten ambas condiciones</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">⚠️ Prioridad: Estabilizar el Trastorno Bipolar</h5>
                      <p className="text-xs">El TB debe estar controlado antes de tratar el TDAH para evitar precipitar episodios maníacos</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">Tratamiento del TDAH en TB estabilizado</h5>
                      <ul className="text-xs space-y-1">
                        <li>• Estimulantes solo con estabilizadores del ánimo</li>
                        <li>• Preferir atomoxetina inicialmente</li>
                        <li>• Monitoreo estrecho de síntomas maníacos</li>
                        <li>• Seguimiento psiquiátrico especializado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uso de sustancias */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-red-500" />
                TDAH + Trastorno por Uso de Sustancias
              </CardTitle>
              <CardDescription>Riesgo aumentado y necesidad de tratamiento integrado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-red-500 mb-1">2x</div>
                  <div className="text-sm text-muted-foreground">Mayor riesgo de TUS</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-amber-500 mb-1">25-40%</div>
                  <div className="text-sm text-muted-foreground">Prevalencia en adultos</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-500 mb-1">50%</div>
                  <div className="text-sm text-muted-foreground">Reducción al tratar TDAH</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">¿Por qué mayor riesgo?</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <strong>Automedicación:</strong> Buscar alivio para síntomas no tratados
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <strong>Impulsividad:</strong> Decisiones sin considerar consecuencias
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <strong>Búsqueda de novedad:</strong> Estimulación constante
                      </li>
                    </ul>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <strong>Baja autoestima:</strong> Por fracasos repetidos
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <strong>Problemas sociales:</strong> Influencia de pares
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <strong>Disregulación emocional:</strong> Uso como mecanismo de afrontamiento
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Estrategias de tratamiento</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h5 className="font-semibold text-sm">Tratamiento Integrado</h5>
                      <p className="text-xs">Abordar ambas condiciones simultáneamente con equipos especializados</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h5 className="font-semibold text-sm">Medicación Preferente</h5>
                      <p className="text-xs">Atomoxetina o bupropión (menor potencial de abuso que estimulantes)</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h5 className="font-semibold text-sm">Seguimiento Estrecho</h5>
                      <p className="text-xs">Monitoreo continuo del uso de sustancias y adherencia al tratamiento</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comorbilidades médicas */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Comorbilidades Médicas (No Psiquiátricas)</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Condiciones Médicas Asociadas
              </CardTitle>
              <CardDescription>
                El TDAH se asocia con mayor riesgo de diversas condiciones médicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Condiciones Metabólicas</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm">Obesidad</h5>
                      <p className="text-xs text-muted-foreground">
                        Relacionada con impulsividad alimentaria y desorganización en hábitos
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm">Diabetes Tipo 2</h5>
                      <p className="text-xs text-muted-foreground">
                        Mayor prevalencia en adultos, posiblemente relacionada con estilo de vida
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Otras Condiciones</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm">Trastornos del Sueño</h5>
                      <p className="text-xs text-muted-foreground">
                        Insomnio, síndrome de piernas inquietas, alteraciones del ritmo circadiano
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm">Migrañas</h5>
                      <p className="text-xs text-muted-foreground">
                        Mayor frecuencia e intensidad, posible relación con disregulación neurotransmisora
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-semibold text-sm">Enfermedades Cardiovasculares</h5>
                      <p className="text-xs text-muted-foreground">
                        Riesgo aumentado, parcialmente explicado por factores de estilo de vida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Manejo integral */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Manejo Integral de Comorbilidades
            </CardTitle>
            <CardDescription>
              Principios para el tratamiento cuando el TDAH coexiste con otras condiciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Principios Generales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">1</Badge>
                      <span>Identificar todas las condiciones presentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">2</Badge>
                      <span>Evaluar cuál genera mayor deterioro funcional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">3</Badge>
                      <span>Tratar primero la condición más grave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">4</Badge>
                      <span>Considerar interacciones medicamentosas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">5</Badge>
                      <span>Monitoreo continuo y seguimiento especializado</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Orden de Tratamiento</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h5 className="font-semibold text-sm">Primera prioridad</h5>
                      <p className="text-xs">Trastorno bipolar, psicosis, ideas suicidas, abuso de sustancias severo</p>
                    </div>
                    <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h5 className="font-semibold text-sm">Segunda prioridad</h5>
                      <p className="text-xs">TDAH, depresión mayor, trastornos de ansiedad severos</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h5 className="font-semibold text-sm">Tercera prioridad</h5>
                      <p className="text-xs">Condiciones médicas, trastornos del sueño, problemas nutricionales</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-3">Consideraciones Especiales</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Equipo Multidisciplinario</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Psiquiatra especialista</li>
                        <li>• Psicólogo clínico</li>
                        <li>• Médico de cabecera</li>
                        <li>• Especialistas según comorbilidades</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Comunicación</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Coordinación entre profesionales</li>
                        <li>• Historias clínicas compartidas</li>
                        <li>• Planes de tratamiento integrados</li>
                        <li>• Seguimiento conjunto</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Educación del Paciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Comprensión de todas las condiciones</li>
                        <li>• Importancia de la adherencia</li>
                        <li>• Reconocimiento de señales de alarma</li>
                        <li>• Participación activa en el tratamiento</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}