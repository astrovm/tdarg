import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, TrendingDown, DollarSign, Heart, Car, GraduationCap, Users, Clock } from "lucide-react"

export default function ImpactoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Impacto del TDAH No Tratado</h1>
        <p className="text-xl text-muted-foreground">
          Las consecuencias reales de no abordar el TDAH en la vida adulta
        </p>
      </div>

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Realidad crítica:</strong> El TDAH no tratado aumenta el riesgo de patologías graves en un 50-300% 
          y puede reducir la expectativa de vida. Sin embargo, con tratamiento adecuado, la mayoría de estos riesgos se previenen.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="general" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Visión General</TabsTrigger>
          <TabsTrigger value="salud">Salud Física</TabsTrigger>
          <TabsTrigger value="social">Impacto Social</TabsTrigger>
          <TabsTrigger value="economico">Costo Económico</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                Panorama General del Impacto
              </CardTitle>
              <CardDescription>
                Consecuencias del TDAH no diagnosticado o mal tratado en diferentes áreas de la vida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Estadísticas alarmantes */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Estadísticas de Impacto</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-red-500 mb-2">50-300%</div>
                          <div className="text-sm text-muted-foreground">Aumento de riesgo de patologías graves</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-amber-500 mb-2">12-13</div>
                          <div className="text-sm text-muted-foreground">Años de reducción en expectativa de vida</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-500 mb-2">3x</div>
                          <div className="text-sm text-muted-foreground">Mayor riesgo de accidentes graves</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-purple-200 dark:border-purple-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-500 mb-2">2x</div>
                          <div className="text-sm text-muted-foreground">Mayor probabilidad de divorcios</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Mortalidad y morbilidad */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Mortalidad y Morbilidad</h3>
                  <Card className="border-red-200 dark:border-red-800">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Dato crítico:</strong> Las personas con TDAH no tratado tienen una expectativa de vida 
                            reducida de 12-13 años comparado con la población general.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Causas Principales de Mortalidad Aumentada</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Accidentes:</strong> 3x mayor riesgo, especialmente de tránsito</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Suicidio:</strong> Tasas significativamente elevadas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Sobredosis:</strong> Por uso de sustancias y impulsividad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Enfermedades cardiovasculares:</strong> Por estilo de vida y estrés crónico</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Condiciones Médicas Asociadas</h4>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm">Diabetes Tipo 2</span>
                                  <Badge variant="destructive">Riesgo aumentado</Badge>
                                </div>
                                <Progress value={60} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm">Obesidad</span>
                                  <Badge variant="destructive">Riesgo aumentado</Badge>
                                </div>
                                <Progress value={45} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm">Hipertensión</span>
                                  <Badge variant="destructive">Riesgo aumentado</Badge>
                                </div>
                                <Progress value={35} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm">Trastornos del sueño</span>
                                  <Badge variant="destructive">70% prevalencia</Badge>
                                </div>
                                <Progress value={70} className="h-2" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Impacto académico y laboral */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Impacto Académico y Laboral</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          Educación
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 border rounded-lg">
                              <div className="text-2xl font-bold text-red-500">2x</div>
                              <div className="text-xs text-muted-foreground">Mayor tasa de repetición</div>
                            </div>
                            <div className="text-center p-3 border rounded-lg">
                              <div className="text-2xl font-bold text-amber-500">2x</div>
                              <div className="text-xs text-muted-foreground">No graduarse a tiempo</div>
                            </div>
                          </div>
                          
                          <ul className="text-sm space-y-1">
                            <li>• Mayor abandono universitario</li>
                            <li>• Rendimiento inconsistente</li>
                            <li>• Dificultades con la autorregulación</li>
                            <li>• Problemas de conducta en la escuela</li>
                            <li>• Menor nivel educativo alcanzado</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          Carrera Profesional
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 border rounded-lg">
                              <div className="text-2xl font-bold text-red-500">12%</div>
                              <div className="text-xs text-muted-foreground">Reducción en empleo</div>
                            </div>
                            <div className="text-center p-3 border rounded-lg">
                              <div className="text-2xl font-bold text-amber-500">34%</div>
                              <div className="text-xs text-muted-foreground">Reducción en ingresos</div>
                            </div>
                          </div>
                          
                          <ul className="text-sm space-y-1">
                            <li>• Mayor rotación laboral</li>
                            <li>• Conflictos con supervisores</li>
                            <li>• Dificultades para mantener empleo</li>
                            <li>• Subempleo (trabajos por debajo de capacidad)</li>
                            <li>• Problemas financieros crónicos</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Impacto familiar y social */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Deterioro en Relaciones</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Heart className="h-4 w-4" />
                            Relaciones de Pareja
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• 2x mayor probabilidad de divorcio</li>
                            <li>• Más conflictos y discusiones</li>
                            <li>• Problemas de comunicación</li>
                            <li>• Frustración del partner</li>
                            <li>• Inestabilidad emocional</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Relaciones Familiares
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Dificultades en la crianza</li>
                            <li>• Inconsistencia en límites</li>
                            <li>• Mayor estrés familiar</li>
                            <li>• Transmisión de patrones disfuncionales</li>
                            <li>• Culpa y frustración parental</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Relaciones Sociales</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Menor cantidad de amistades duraderas</li>
                            <li>• Dificultades para mantener vínculos</li>
                            <li>• Malentendidos frecuentes</li>
                            <li>• Aislamiento social progresivo</li>
                            <li>• Problemas de integración grupal</li>
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

        <TabsContent value="salud" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Impacto en la Salud Física
              </CardTitle>
              <CardDescription>
                Consecuencias médicas del TDAH no tratado a lo largo de la vida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Riesgo de lesiones y accidentes */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Riesgo de Lesiones y Accidentes</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Accidentes de Tránsito
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-center p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                            <div className="text-2xl font-bold text-red-500">37%</div>
                            <div className="text-sm text-muted-foreground">Mayor probabilidad de accidentes</div>
                          </div>
                          
                          <h5 className="font-semibold text-sm">Factores de Riesgo</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Distracción al volante</li>
                            <li>• Impulsividad en decisiones de manejo</li>
                            <li>• Mayor velocidad promedio</li>
                            <li>• Menos uso de cinturón de seguridad</li>
                            <li>• Multitarea mientras conduce</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardHeader>
                        <CardTitle className="text-base">Otros Tipos de Lesiones</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Quemaduras</span>
                              <Badge variant="destructive">Mayor riesgo</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Envenenamiento accidental</span>
                              <Badge variant="destructive">3x mayor</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Conmociones cerebrales</span>
                              <Badge variant="destructive">3x mayor</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Fracturas óseas</span>
                              <Badge variant="destructive">Riesgo aumentado</Badge>
                            </div>
                          </div>
                          
                          <h5 className="font-semibold text-sm">Causas Principales</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Falta de atención a riesgos</li>
                            <li>• Comportamientos impulsivos</li>
                            <li>• Mayor participación en actividades riesgosas</li>
                            <li>• Descuido en medidas de seguridad</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Condiciones médicas asociadas */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Condiciones Médicas Comórbidas</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Trastornos Metabólicos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-3">Obesidad</h5>
                            <div className="space-y-2">
                              <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                                <p className="text-sm">Riesgo significativamente aumentado en adultos con TDAH</p>
                              </div>
                              <ul className="text-sm space-y-1">
                                <li>• Alimentación impulsiva</li>
                                <li>• Horarios irregulares de comida</li>
                                <li>• Uso de comida como regulador emocional</li>
                                <li>• Menor actividad física estructurada</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold mb-3">Diabetes Tipo 2</h5>
                            <div className="space-y-2">
                              <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                                <p className="text-sm">Mayor prevalencia, especialmente en mujeres adultas</p>
                              </div>
                              <ul className="text-sm space-y-1">
                                <li>• Relacionada con obesidad</li>
                                <li>• Dificultades para seguir tratamiento</li>
                                <li>• Irregular adherencia a medicación</li>
                                <li>• Estilo de vida desorganizado</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Problemas Cardiovasculares</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Alert>
                            <Heart className="h-4 w-4" />
                            <AlertDescription>
                              Las personas con TDAH tienen mayor riesgo de enfermedades cardiovasculares, 
                              incluso después de controlar por otros factores de riesgo.
                            </AlertDescription>
                          </Alert>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold mb-2">Factores de Riesgo</h5>
                              <ul className="text-sm space-y-1">
                                <li>• Hipertensión más frecuente</li>
                                <li>• Niveles elevados de estrés crónico</li>
                                <li>• Mayor consumo de tabaco</li>
                                <li>• Sedentarismo</li>
                                <li>• Alimentación irregular</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-2">Manifestaciones</h5>
                              <ul className="text-sm space-y-1">
                                <li>• Enfermedad coronaria prematura</li>
                                <li>• Arritmias cardíacas</li>
                                <li>• Accidentes cerebrovasculares</li>
                                <li>• Insuficiencia cardíaca</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Trastornos del sueño */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Trastornos del Sueño</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Prevalencia y Tipos</h4>
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-blue-500">50-70%</div>
                                <div className="text-sm text-muted-foreground">Tienen algún trastorno del sueño</div>
                              </div>
                            </div>
                            
                            <ul className="text-sm space-y-1">
                              <li>• <strong>Insomnio:</strong> Dificultad para conciliar o mantener el sueño</li>
                              <li>• <strong>Síndrome de piernas inquietas:</strong> 5x más frecuente</li>
                              <li>• <strong>Apnea del sueño:</strong> Mayor prevalencia</li>
                              <li>• <strong>Síndrome de fase retrasada:</strong> "Búhos nocturnos"</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Consecuencias</h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Empeoramiento de síntomas TDAH:</strong> Menor atención y mayor impulsividad</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Fatiga crónica:</strong> Impacto en funcionamiento diario</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Mayor riesgo de accidentes:</strong> Por somnolencia diurna</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Problemas de salud mental:</strong> Depresión y ansiedad</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span><strong>Deterioro cognitivo:</strong> Memoria y concentración afectadas</span>
                            </li>
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

        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Impacto Social y Familiar
              </CardTitle>
              <CardDescription>
                Cómo el TDAH no tratado afecta las relaciones y la integración social
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Relaciones de pareja */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Relaciones de Pareja y Matrimonio</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">Estadísticas Alarmantes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                            <div className="text-3xl font-bold text-red-500 mb-1">2x</div>
                            <div className="text-sm text-muted-foreground">Mayor probabilidad de divorcio</div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Separaciones</span>
                              <Badge variant="destructive">Más frecuentes</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Conflictos diarios</span>
                              <Badge variant="destructive">Mayor intensidad</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Insatisfacción marital</span>
                              <Badge variant="destructive">Niveles elevados</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardHeader>
                        <CardTitle className="text-base">Problemas Comunes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Comunicación deficiente:</strong> Interrupciones, no escuchar, respuestas impulsivas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Responsabilidades domésticas:</strong> Olvidos, desorganización, inconsistencia</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Gestión financiera:</strong> Gastos impulsivos, olvido de pagos, desorganización</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Inestabilidad emocional:</strong> Cambios de humor, reacciones intensas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Intimidad afectada:</strong> Distracción, problemas de conexión emocional</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Impacto en la crianza */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Crianza y Vida Familiar</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            Los padres con TDAH no tratado enfrentan desafíos únicos en la crianza, 
                            pero con tratamiento adecuado pueden ser padres muy efectivos.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Desafíos en la Crianza</h4>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Inconsistencia:</strong> Dificultad para mantener rutinas y límites</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Impaciencia:</strong> Baja tolerancia a comportamientos infantiles normales</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Organización familiar:</strong> Horarios caóticos, olvidos importantes</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Multitarea extrema:</strong> Sobrecarga por demandas simultáneas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Reactividad emocional:</strong> Respuestas intensas al estrés parental</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Impacto en los Hijos</h4>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Mayor riesgo de TDAH:</strong> Componente genético fuerte</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Problemas de conducta:</strong> Por inconsistencia en límites</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Estrés familiar:</strong> Ambiente doméstico tenso</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Modelado de patrones:</strong> Aprendizaje de estrategias poco efectivas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Necesidades no atendidas:</strong> Por desorganización parental</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                          <h4 className="font-semibold mb-2">Aspectos Positivos Potenciales</h4>
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Creatividad y espontaneidad:</strong> Actividades divertidas e innovadoras</li>
                            <li>• <strong>Empatía:</strong> Comprensión de dificultades similares en los hijos</li>
                            <li>• <strong>Energía y entusiasmo:</strong> Para actividades de interés mutuo</li>
                            <li>• <strong>Pensamiento divergente:</strong> Soluciones creativas a problemas</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Aislamiento social */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Aislamiento Social y Problemas de Integración</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Dificultades Sociales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Malentendidos frecuentes:</strong> Por impulsividad verbal y comportamental</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Dificultad para mantener amistades:</strong> Olvidos, inconsistencia en contacto</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Problemas en grupos:</strong> Interrupciones, dominar conversaciones</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Sensibilidad al rechazo:</strong> Interpretación negativa de señales sociales</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong>Evitación social:</strong> Para prevenir situaciones estresantes</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Consecuencias del Aislamiento</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <ul className="text-sm space-y-1">
                            <li>• Depresión y ansiedad aumentadas</li>
                            <li>• Pérdida de red de apoyo social</li>
                            <li>• Mayor dependencia de la familia inmediata</li>
                            <li>• Reducción en oportunidades laborales y sociales</li>
                            <li>• Menor autoestima y confianza social</li>
                          </ul>
                          
                          <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Ciclo Vicioso</h5>
                            <p className="text-xs">
                              El aislamiento social aumenta los síntomas de TDAH, que a su vez empeoran 
                              las habilidades sociales, creando un ciclo difícil de romper sin intervención.
                            </p>
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

        <TabsContent value="economico" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Costo Económico del TDAH No Tratado
              </CardTitle>
              <CardDescription>
                Impacto financiero tanto personal como social del TDAH sin tratamiento adecuado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Costos personales */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Costos Económicos Personales</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">Pérdidas de Ingresos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                              <div className="text-2xl font-bold text-red-500">34%</div>
                              <div className="text-xs text-muted-foreground">Reducción en ingresos</div>
                            </div>
                            <div className="text-center p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                              <div className="text-2xl font-bold text-amber-500">12%</div>
                              <div className="text-xs text-muted-foreground">Reducción en empleo</div>
                            </div>
                          </div>
                          
                          <ul className="text-sm space-y-1">
                            <li>• Subempleo crónico (trabajos por debajo de la capacidad)</li>
                            <li>• Mayor rotación laboral con períodos de desempleo</li>
                            <li>• Dificultades para ascensos y aumentos salariales</li>
                            <li>• Pérdida de oportunidades por problemas de puntualidad</li>
                            <li>• Menor productividad en el trabajo</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardHeader>
                        <CardTitle className="text-base">Gastos Adicionales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <DollarSign className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Gastos médicos:</strong> Tratamientos para comorbilidades, accidentes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <DollarSign className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Multas y sanciones:</strong> Por impulsividad, olvidos, infracciones</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <DollarSign className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Gastos impulsivos:</strong> Compras no planificadas, decisiones financieras precipitadas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <DollarSign className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Reposición de objetos:</strong> Por pérdidas frecuentes de pertenencias</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <DollarSign className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Servicios de apoyo:</strong> Asistentes, organizadores, reparaciones</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Costos educativos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Impacto en la Inversión Educativa</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            Educación Formal
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Repetición de cursos (costos adicionales)</li>
                            <li>• Abandono universitario (inversión perdida)</li>
                            <li>• Necesidad de apoyo educativo extra</li>
                            <li>• Menor retorno de la inversión educativa</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Tiempo Perdido
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Años adicionales para completar estudios</li>
                            <li>• Entrada tardía al mercado laboral</li>
                            <li>• Pérdida de oportunidades por timing</li>
                            <li>• Menor tiempo de contribución laboral activa</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Potencial No Realizado</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Capacidades intelectuales subutilizadas</li>
                            <li>• Creatividad no canalizada productivamente</li>
                            <li>• Habilidades especiales no desarrolladas</li>
                            <li>• Contribuciones sociales perdidas</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Costos familiares */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Costos Familiares y Sociales</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Impacto en la Familia</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2">Costos Directos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Terapias familiares y de pareja</li>
                              <li>• Tratamiento psicológico para otros miembros</li>
                              <li>• Costos legales por divorcios</li>
                              <li>• Servicios de apoyo doméstico</li>
                              <li>• Gastos médicos por estrés familiar</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold mb-2">Costos Indirectos</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Reducción de ingresos del cónyuge (por compensar)</li>
                              <li>• Menor calidad de vida familiar</li>
                              <li>• Estrés y problemas de salud en la pareja</li>
                              <li>• Impacto en el desarrollo de los hijos</li>
                              <li>• Pérdida de redes sociales y oportunidades</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Costos para el Sistema de Salud</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Alert>
                            <DollarSign className="h-4 w-4" />
                            <AlertDescription>
                              Las personas con TDAH no tratado utilizan significativamente más servicios de salud 
                              y tienen costos médicos más altos que la población general.
                            </AlertDescription>
                          </Alert>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold mb-2">Mayor Utilización</h5>
                              <ul className="text-sm space-y-1">
                                <li>• Consultas médicas más frecuentes</li>
                                <li>• Servicios de emergencia por accidentes</li>
                                <li>• Hospitalizaciones por lesiones</li>
                                <li>• Tratamientos para comorbilidades</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-2">Tratamientos Costosos</h5>
                              <ul className="text-sm space-y-1">
                                <li>• Terapias especializadas múltiples</li>
                                <li>• Medicaciones para comorbilidades</li>
                                <li>• Rehabilitación por adicciones</li>
                                <li>• Tratamientos de largo plazo</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Análisis costo-beneficio del tratamiento */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Análisis Costo-Beneficio del Tratamiento</h3>
                  <Card className="border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <Alert>
                          <DollarSign className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Conclusión económica:</strong> El costo de tratar el TDAH adecuadamente es 
                            significativamente menor que el costo de no tratarlo. La inversión se recupera 
                            rápidamente a través de mayor productividad y menor utilización de servicios.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Beneficios Económicos del Tratamiento</h4>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Aumento de ingresos:</strong> Mejor rendimiento laboral y estabilidad</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Reducción de gastos médicos:</strong> Menos accidentes y comorbilidades</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Menor rotación laboral:</strong> Reducción de costos de búsqueda de empleo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Mejor gestión financiera:</strong> Menos gastos impulsivos e irresponsables</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span><strong>Estabilidad familiar:</strong> Menor riesgo de divorcio y costos asociados</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Retorno de la Inversión</h4>
                            <div className="space-y-3">
                              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                                <h5 className="font-semibold text-sm">Plazo Corto (1-2 años)</h5>
                                <p className="text-xs">Reducción inmediata en accidentes, mejor rendimiento laboral</p>
                              </div>
                              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                                <h5 className="font-semibold text-sm">Plazo Medio (3-5 años)</h5>
                                <p className="text-xs">Estabilidad laboral, mejores relaciones, menor uso de servicios médicos</p>
                              </div>
                              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                                <h5 className="font-semibold text-sm">Plazo Largo (5+ años)</h5>
                                <p className="text-xs">Desarrollo de carrera, estabilidad familiar, mejor calidad de vida</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                          <h4 className="font-semibold mb-2">Mensaje Clave para Argentina</h4>
                          <p className="text-sm">
                            Invertir en el diagnóstico y tratamiento temprano del TDAH no solo mejora la calidad de vida 
                            de las personas afectadas, sino que también genera beneficios económicos significativos 
                            para el sistema de salud y la sociedad en general. Cada peso invertido en tratamiento 
                            se multiplica en términos de productividad, reducción de costos médicos y bienestar social.
                          </p>
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
    </div>
  )
}