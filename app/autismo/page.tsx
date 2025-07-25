import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Brain, Users, Eye, MessageCircle, Zap, Target } from "lucide-react"
import { Header } from "@/components/header"

export default function AutismoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">TDAH y Autismo (TEA)</h1>
        <p className="text-xl text-muted-foreground">
          Comprende la relación, diferencias y tratamiento cuando coexisten ambas condiciones
        </p>
      </div>

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>DSM-5 Actualización:</strong> El Trastorno del Espectro Autista (TEA) ya no es un criterio de exclusión 
          para el diagnóstico de TDAH. Ambas condiciones pueden coexistir y requieren evaluación integral.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="comorbilidad" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="comorbilidad">Comorbilidad</TabsTrigger>
          <TabsTrigger value="diferencial">Diagnóstico Diferencial</TabsTrigger>
          <TabsTrigger value="tratamiento">Tratamiento</TabsTrigger>
          <TabsTrigger value="caracteristicas">Características</TabsTrigger>
        </TabsList>

        <TabsContent value="comorbilidad" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Comorbilidad TDAH-Autismo
              </CardTitle>
              <CardDescription>
                La coexistencia de TDAH y TEA es más común de lo que se pensaba anteriormente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Estadísticas de prevalencia */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Prevalencia de la Comorbilidad</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-500 mb-2">29.4%</div>
                          <div className="text-sm text-muted-foreground">Prevalencia de autismo en adolescentes varones con TDAH</div>
                          <div className="text-xs text-muted-foreground mt-1">(Estudio sueco)</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200 dark:border-green-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-500 mb-2">30-70%</div>
                          <div className="text-sm text-muted-foreground">Pacientes con TEA que también tienen TDAH</div>
                          <div className="text-xs text-muted-foreground mt-1">(Rango de estudios)</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-purple-200 dark:border-purple-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-500 mb-2">4.6-78%</div>
                          <div className="text-sm text-muted-foreground">Variabilidad en diagnóstico comórbido TEA-TDAH</div>
                          <div className="text-xs text-muted-foreground mt-1">(Diferentes estudios)</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Impacto de la comorbilidad */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Impacto de la Comorbilidad</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <Alert>
                          <Zap className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Efecto Aditivo:</strong> La presencia de síntomas de TDAH en pacientes con TEA 
                            incrementa significativamente la severidad de los síntomas autistas.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Beneficios del Tratamiento del TDAH en TEA</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Reducción de la hiperactividad mejora el funcionamiento social</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Mejor atención facilita el aprendizaje de habilidades sociales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Reducción de impulsividad mejora interacciones</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Mayor tolerancia a cambios y transiciones</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Desafíos Adicionales</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Diagnóstico más complejo y tardío</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Síntomas de TDAH pueden enmascarar síntomas autistas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Mayor severidad global de síntomas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Necesidad de abordaje más especializado</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Reconocimiento histórico */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Cambio en el Diagnóstico</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">Antes del DSM-5</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>TEA era criterio de exclusión para TDAH</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>No se podían diagnosticar ambas condiciones</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Muchos casos de TDAH en TEA no fueron tratados</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-base">DSM-5 y Posterior</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Reconocimiento de la alta comorbilidad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Diagnóstico dual permitido y recomendado</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Mejor comprensión del espectro de síntomas</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diferencial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Diagnóstico Diferencial TEA vs TDAH
              </CardTitle>
              <CardDescription>
                Características distintivas para un diagnóstico preciso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Tabla comparativa principal */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Comparación Detallada de Características</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-40">Característica</TableHead>
                          <TableHead>Trastorno del Espectro Autista (TEA)</TableHead>
                          <TableHead>TDAH</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">Edad de Diagnóstico</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-blue-600">2-3 años</Badge>
                              <span className="text-sm">Más precoz</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-green-600">6-7 años</Badge>
                              <span className="text-sm">Más tardío</span>
                            </div>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="font-semibold">Lenguaje</TableCell>
                          <TableCell>
                            <ul className="text-sm space-y-1">
                              <li>• Desarrollo demorado</li>
                              <li>• Ecolalia (repetición de palabras)</li>
                              <li>• Uso literal del lenguaje</li>
                              <li>• Dificultades pragmáticas severas</li>
                            </ul>
                          </TableCell>
                          <TableCell>
                            <ul className="text-sm space-y-1">
                              <li>• Desarrollo típico del lenguaje</li>
                              <li>• Sin ecolalia</li>
                              <li>• Comprensión social adecuada</li>
                              <li>• Pueden hablar excesivamente</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="font-semibold">Contacto Visual</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4 text-red-500" />
                                <span className="text-sm font-medium">Evitación activa</span>
                              </div>
                              <p className="text-xs text-muted-foreground">Dificultad fundamental para el contacto visual</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium">Menor contacto</span>
                              </div>
                              <p className="text-xs text-muted-foreground">Por distracción y cambios de foco de atención</p>
                            </div>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="font-semibold">Juego Social</TableCell>
                          <TableCell>
                            <ul className="text-sm space-y-1">
                              <li>• Menos juegos sociales</li>
                              <li>• Falta de interés en otros</li>
                              <li>• Juego en paralelo</li>
                              <li>• Preferencia por actividades solitarias</li>
                            </ul>
                          </TableCell>
                          <TableCell>
                            <ul className="text-sm space-y-1">
                              <li>• Buscan juegos sociales</li>
                              <li>• Interés en interactuar</li>
                              <li>• A menudo rechazados por impulsividad</li>
                              <li>• Dificultades por falta de autorregulación</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="font-semibold">Teoría de la Mente</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <span className="text-sm font-medium text-red-600">Dificultad marcada</span>
                              <p className="text-xs text-muted-foreground">
                                Problemas severos para entender estados mentales, emociones e intenciones de otros
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <span className="text-sm font-medium text-amber-600">Inatención</span>
                              <p className="text-xs text-muted-foreground">
                                Capacidad presente pero no prestan atención a señales sociales por distracción
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow>
                          <TableCell className="font-semibold">Comportamiento Motor</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <span className="text-sm font-medium">Estereotipados y rítmicos</span>
                              <ul className="text-xs space-y-1 text-muted-foreground">
                                <li>• Aleteo de manos</li>
                                <li>• Balanceo</li>
                                <li>• Giros repetitivos</li>
                                <li>• Movimientos con propósito autorregulatorio</li>
                              </ul>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <span className="text-sm font-medium">Hiperactividad</span>
                              <ul className="text-xs space-y-1 text-muted-foreground">
                                <li>• Movimiento constante pero variable</li>
                                <li>• Inquietud motora</li>
                                <li>• Dificultad para estar quieto</li>
                                <li>• Sin patrones estereotipados</li>
                              </ul>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <Separator />

                {/* Características diferenciales clave */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Características Distintivas Clave</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-blue-200 dark:border-blue-800">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          Trastorno del Espectro Autista
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Intereses y Comportamientos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Intereses restringidos e intensos</li>
                              <li>• Comportamientos repetitivos</li>
                              <li>• Necesidad de rutinas y predictabilidad</li>
                              <li>• Sensibilidades sensoriales específicas</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Comunicación Social</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Dificultades fundamentales en reciprocidad social</li>
                              <li>• Problemas con comunicación no verbal</li>
                              <li>• Dificultad para desarrollar y mantener relaciones</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          TDAH
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Síntomas Nucleares</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Inatención persistente</li>
                              <li>• Hiperactividad (puede ser interna en adultos)</li>
                              <li>• Impulsividad en decisiones y acciones</li>
                              <li>• Dificultades ejecutivas</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Problemas Sociales</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Consecuencia de inatención e impulsividad</li>
                              <li>• Deseo de interacción social presente</li>
                              <li>• Pueden aprender habilidades sociales</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Señales de alerta para comorbilidad */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Señales de Posible Comorbilidad</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <Alert>
                          <MessageCircle className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Evaluación integral necesaria:</strong> Cuando hay dudas sobre el diagnóstico diferencial, 
                            es crucial una evaluación por profesionales especializados en ambas condiciones.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Considerar TEA + TDAH cuando hay:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Síntomas de TDAH severos que no responden completamente al tratamiento</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Dificultades sociales más severas que las esperadas solo por TDAH</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Presencia de intereses muy específicos e intensos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Comportamientos repetitivos o estereotipados</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Sensibilidades sensoriales marcadas</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Considerar TDAH en TEA cuando hay:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Hiperactividad que excede lo típico en TEA</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Dificultades de atención más allá de los intereses restringidos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Impulsividad significativa en diferentes contextos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Respuesta parcial a intervenciones solo para TEA</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Dificultades ejecutivas prominentes</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tratamiento" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Tratamiento de la Comorbilidad TEA-TDAH
              </CardTitle>
              <CardDescription>
                Enfoques específicos cuando ambas condiciones coexisten
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Principios generales */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Principios del Tratamiento Integrado</h3>
                  <Alert className="mb-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Enfoque cauteloso:</strong> En pacientes con TEA-TDAH, la titulación de medicamentos 
                      debe ser más cautelosa y el seguimiento más riguroso para garantizar seguridad y eficacia.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Evaluación Inicial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Evaluación integral por equipo multidisciplinario</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Identificación de síntomas prioritarios</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Evaluación de tolerabilidad y sensibilidades</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Establecimiento de línea base de funcionamiento</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Priorización del Tratamiento</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Los síntomas de TDAH suelen tratarse primero</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Mejorar atención facilita intervenciones para TEA</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Reducir hiperactividad mejora el aprendizaje social</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Tratamiento integrado cuando es posible</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Tratamiento farmacológico */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tratamiento Farmacológico</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Consideraciones Especiales para TEA-TDAH</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Precauciones Adicionales</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                  <span><strong>Titulación más lenta:</strong> Iniciar con dosis menores y aumentar gradualmente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                  <span><strong>Monitoreo frecuente:</strong> Seguimiento más riguroso de efectos adversos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                  <span><strong>Sensibilidades sensoriales:</strong> Considerar formulaciones específicas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                  <span><strong>Interacciones:</strong> Evaluar otros medicamentos para TEA</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Beneficios Esperados</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Reducción de hiperactividad mejora tolerancia a intervenciones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Mejor atención facilita aprendizaje de habilidades sociales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Reducción de impulsividad mejora interacciones sociales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>Disminución global de la severidad de síntomas</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <h4 className="font-semibold mb-2">Medicamentos de Primera Línea</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-semibold text-sm mb-1">Metilfenidato</h5>
                                <p className="text-xs text-muted-foreground">
                                  Más evidencia en comorbilidad. Iniciar con dosis muy bajas y titular lentamente.
                                </p>
                              </div>
                              <div>
                                <h5 className="font-semibold text-sm mb-1">Atomoxetina</h5>
                                <p className="text-xs text-muted-foreground">
                                  Puede ser preferible si hay sensibilidades a estimulantes o ansiedad comórbida.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Intervenciones no farmacológicas */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Intervenciones No Farmacológicas Integradas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Para Síntomas de TDAH</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Entrenamiento ejecutivo adaptado:</strong> Técnicas simplificadas y visuales</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Técnicas de atención:</strong> Integradas con intereses especiales</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Manejo de impulsividad:</strong> Con apoyo visual y estructurado</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Organización:</strong> Sistemas altamente estructurados y predecibles</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Para Síntomas de TEA</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Habilidades sociales:</strong> Con apoyo para mantener atención</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Comunicación:</strong> Técnicas adaptadas a nivel de atención</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Manejo sensorial:</strong> Considerando hiperactividad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Flexibilidad cognitiva:</strong> Con técnicas de atención sostenida</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Equipo multidisciplinario */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Equipo Multidisciplinario Recomendado</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Profesionales Médicos
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Psiquiatra especializado en neurodesarrollo</li>
                            <li>• Neurólogo pediátrico (en niños)</li>
                            <li>• Pediatra del desarrollo</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Profesionales Terapéuticos</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Psicólogo especializado en TEA-TDAH</li>
                            <li>• Terapeuta ocupacional</li>
                            <li>• Fonoaudiólogo/Logopeda</li>
                            <li>• Terapeuta conductual</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Apoyo Educativo</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Maestro especializado</li>
                            <li>• Acompañante terapéutico</li>
                            <li>• Coordinador de apoyos</li>
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

        <TabsContent value="caracteristicas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Características Específicas de la Comorbilidad
              </CardTitle>
              <CardDescription>
                Cómo se manifiestan ambas condiciones cuando coexisten
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Presentación clínica */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Presentación Clínica de TEA + TDAH</h3>
                  <div className="space-y-4">
                    <Alert>
                      <Brain className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Complejidad diagnóstica:</strong> Los síntomas pueden superponerse, enmascararse mutuamente 
                        o amplificarse, requiriendo evaluación especializada y experiencia clínica.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Síntomas Amplificados</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Dificultades sociales severas:</strong> Problemas por ambas condiciones se suman</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Desregulación emocional intensa:</strong> Mayor labilidad e intensidad</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Problemas de adaptación:</strong> Dificultad extrema con cambios</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Sobrecarga sensorial:</strong> Hiperactividad + sensibilidades sensoriales</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Síntomas Enmascarados</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>TDAH oculto por rutinas:</strong> Estructura del TEA puede ocultar desorganización</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>TEA enmascarado por hiperactividad:</strong> Comportamientos sociales atípicos pasados por alto</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Atención aparentemente buena:</strong> En intereses especiales, pero pobre en otros contextos</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Desarrollo por edades */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Manifestaciones por Edad</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Primera Infancia (2-5 años)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Señales Tempranas</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Hiperactividad extrema + comportamientos repetitivos</li>
                              <li>• Retraso del lenguaje + dificultades atencionales severas</li>
                              <li>• Problemas de sueño intensos</li>
                              <li>• Rabietas frecuentes e intensas</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Desafíos Específicos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Diagnóstico complejo por superposición de síntomas</li>
                              <li>• Intervención temprana debe abordar ambas condiciones</li>
                              <li>• Mayor estrés familiar</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Edad Escolar (6-12 años)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">En el Aula</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Dificultades severas para seguir instrucciones</li>
                              <li>• Problemas para trabajar en grupo</li>
                              <li>• Rendimiento muy variable según interés</li>
                              <li>• Necesidades de apoyo individualizadas</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Socialmente</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Aislamiento social significativo</li>
                              <li>• Dificultades para hacer y mantener amistades</li>
                              <li>• Mayor riesgo de bullying</li>
                              <li>• Necesidad de enseñanza explícita de habilidades sociales</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Adolescencia y Adultez</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Nuevos Desafíos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Demandas sociales más complejas</li>
                              <li>• Planificación e independencia</li>
                              <li>• Transiciones educativas y laborales</li>
                              <li>• Relaciones románticas y sexualidad</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Oportunidades</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Mayor autoconciencia y autorregulación</li>
                              <li>• Desarrollo de fortalezas específicas</li>
                              <li>• Posibilidad de empleo en áreas de interés</li>
                              <li>• Estrategias compensatorias más sofisticadas</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Fortalezas potenciales */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Fortalezas Potenciales de la Comorbilidad</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <Alert>
                          <Brain className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Perspectiva de fortalezas:</strong> Aunque desafiante, la comorbilidad TEA-TDAH 
                            también puede resultar en habilidades y perspectivas únicas cuando se brindan los apoyos adecuados.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Cognitivas</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Hiperfoco dirigido:</strong> Atención intensa en intereses específicos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Pensamiento divergente:</strong> Creatividad única y perspectivas originales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Atención al detalle:</strong> Combinada con energía para investigar</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Personales</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Autenticidad:</strong> Menor presión por conformidad social</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Pasión intensa:</strong> Dedicación profunda a intereses</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Persistencia:</strong> Cuando algo les interesa genuinamente</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Profesionales</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Especialización extrema:</strong> Expertos en áreas muy específicas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Innovación:</strong> Enfoques únicos a problemas complejos</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Dedicación:</strong> Compromiso intenso con proyectos de interés</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Mensaje final */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-500" />
            Mensaje Clave sobre TEA-TDAH
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm">
              La comorbilidad TEA-TDAH es real, frecuente y tratable. Aunque presenta desafíos únicos, 
              con evaluación especializada, tratamiento integrado y apoyos adecuados, las personas 
              con ambas condiciones pueden desarrollar su potencial y llevar vidas satisfactorias.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Evaluación Temprana</h4>
                <p className="text-xs">El diagnóstico preciso mejora significativamente el pronóstico</p>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Tratamiento Integrado</h4>
                <p className="text-xs">Abordar ambas condiciones simultáneamente es más efectivo</p>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Perspectiva de Fortalezas</h4>
                <p className="text-xs">Reconocer y desarrollar las habilidades únicas de cada persona</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}