import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pill, Brain, Heart, Clock, AlertTriangle, CheckCircle, FileText, Zap, Shield } from "lucide-react"
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
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="objetivos">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Objetivos del Tratamiento
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                        <div>
                          <strong>Reducir síntomas nucleares</strong>
                          <div className="text-muted-foreground text-xs">Inatención, hiperactividad, impulsividad</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                        <div>
                          <strong>Mejorar funcionamiento</strong>
                          <div className="text-muted-foreground text-xs">Académico, laboral y social</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                        <div>
                          <strong>Fortalecer relaciones</strong>
                          <div className="text-muted-foreground text-xs">Interpersonales y familiares</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                        <div>
                          <strong>Desarrollar autorregulación</strong>
                          <div className="text-muted-foreground text-xs">Estrategias de autocontrol</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">5</div>
                        <div>
                          <strong>Tratar comorbilidades</strong>
                          <div className="text-muted-foreground text-xs">Ansiedad, depresión, otros trastornos</div>
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="principios">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Principios Clave del Tratamiento
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <h4 className="font-semibold text-sm mb-1">Individualización</h4>
                        <p className="text-xs text-muted-foreground">Cada persona requiere un plan específico</p>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                        <div className="text-2xl mb-2">🤝</div>
                        <h4 className="font-semibold text-sm mb-1">Combinación</h4>
                        <p className="text-xs text-muted-foreground">Medicación + terapia = mejor resultado</p>
                      </div>
                      <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg text-center">
                        <div className="text-2xl mb-2">⏰</div>
                        <h4 className="font-semibold text-sm mb-1">Largo Plazo</h4>
                        <p className="text-xs text-muted-foreground">El TDAH requiere manejo continuo</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="algoritmo">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Algoritmo de Tratamiento
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {[
                        { num: 1, title: "Evaluación Integral", desc: "Confirmación diagnóstica y evaluación de comorbilidades", color: "bg-blue-500" },
                        { num: 2, title: "Psicoeducación", desc: "Educación sobre TDAH para paciente y familia", color: "bg-green-500" },
                        { num: 3, title: "Tratamiento Farmacológico", desc: "Estimulantes (primera línea) o no estimulantes", color: "bg-purple-500" },
                        { num: 4, title: "Intervenciones No Farmacológicas", desc: "TCC, entrenamiento en habilidades, apoyo familiar", color: "bg-orange-500" }
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                          <div className={`w-8 h-8 ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                            {step.num}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{step.title}</h4>
                            <p className="text-xs text-muted-foreground">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="farmacologico" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5" />
                Medicamentos para TDAH en Argentina
              </CardTitle>
              <CardDescription>
                Opciones farmacológicas disponibles según evidencia científica<CitationLink number={1} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="efectividad">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Efectividad Según Evidencia Científica
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <div className="text-xl font-bold text-green-500 mb-1">Grandes</div>
                        <div className="text-sm text-muted-foreground">Mejoras en niños con estimulantes</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <div className="text-xl font-bold text-blue-500 mb-1">Moderadas-Grandes</div>
                        <div className="text-sm text-muted-foreground">Mejoras en adultos con estimulantes</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                        <div className="text-xl font-bold text-orange-500 mb-1">Moderadas</div>
                        <div className="text-sm text-muted-foreground">Mejoras con no estimulantes</div>
                      </div>
                    </div>
                    
                    <div className="text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded">
                      <h5 className="font-semibold mb-2">Recomendaciones por edad:</h5>
                      <ul className="space-y-1">
                        <li>• <strong>Niños/Adolescentes:</strong> Metilfenidato como primera línea</li>
                        <li>• <strong>Adultos:</strong> Anfetaminas como primera línea*</li>
                        <li>• <strong>No estimulantes:</strong> Cuando los estimulantes no son adecuados</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">*En Argentina, solo está disponible metilfenidato comercialmente</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="estimulantes">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Medicamentos Estimulantes (Primera Línea)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Medicamento</TableHead>
                          <TableHead>Formulación</TableHead>
                          <TableHead>Duración</TableHead>
                          <TableHead>Ventajas</TableHead>
                          <TableHead>Efectos Adversos</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            <div className="flex items-center gap-2">
                              <Badge variant="default" className="text-xs">1ª Línea</Badge>
                              Metilfenidato
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">Único disponible en Argentina</div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>• Liberación inmediata</div>
                              <div>• Liberación modificada</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>2-4 horas</div>
                              <div>8-12 horas</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <ul className="text-xs space-y-1">
                              <li>• Eficacia probada</li>
                              <li>• Acción rápida</li>
                              <li>• Experiencia clínica</li>
                            </ul>
                          </TableCell>
                          <TableCell>
                            <ul className="text-xs space-y-1 text-amber-600">
                              <li>• Pérdida de apetito</li>
                              <li>• Insomnio</li>
                              <li>• Dolor de cabeza</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="no-estimulantes">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Medicamentos No Estimulantes (Segunda Línea)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Medicamento</TableHead>
                          <TableHead>Mecanismo</TableHead>
                          <TableHead>Indicaciones Preferentes</TableHead>
                          <TableHead>Ventajas</TableHead>
                          <TableHead>Desventajas</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs">2ª Línea</Badge>
                              Atomoxetina
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">
                            Inhibidor recaptación noradrenalina
                          </TableCell>
                          <TableCell>
                            <ul className="text-xs space-y-1">
                              <li>• Intolerancia a estimulantes</li>
                              <li>• Comorbilidad con tics</li>
                              <li>• Riesgo de abuso</li>
                              <li>• Ansiedad comórbida</li>
                            </ul>
                          </TableCell>
                          <TableCell>
                            <ul className="text-xs space-y-1 text-green-600">
                              <li>• Sin potencial abuso</li>
                              <li>• Efecto 24 horas</li>
                              <li>• Mejora ansiedad</li>
                            </ul>
                          </TableCell>
                          <TableCell>
                            <ul className="text-xs space-y-1 text-amber-600">
                              <li>• Menor eficacia</li>
                              <li>• Inicio lento (4-6 sem)</li>
                              <li>• Efectos GI</li>
                            </ul>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="off-label">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Opciones Off-Label (Tercera Línea)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">3ª Línea</Badge>
                          <strong className="text-sm">Bupropión</strong>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Antidepresivo con efecto en TDAH</p>
                        <ul className="text-xs space-y-1">
                          <li>• Eficaz vs placebo</li>
                          <li>• Útil con depresión comórbida</li>
                          <li>• Sin potencial de abuso</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">3ª Línea</Badge>
                          <strong className="text-sm">Clonidina</strong>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Reduce hiperactividad e impulsividad</p>
                        <ul className="text-xs space-y-1">
                          <li>• Solo como magistral</li>
                          <li>• Útil con tics</li>
                          <li>• Sedante</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="regulacion">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Regulación Legal en Argentina
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Alert className="mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Ley 19.303:</strong> El metilfenidato requiere receta oficial por triplicado con máximo 20 días de tratamiento
                      </AlertDescription>
                    </Alert>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded">
                        <h4 className="font-semibold text-sm mb-2">Proceso de Prescripción</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Receta manuscrita oficial</li>
                          <li>• Máximo 20 días por receta</li>
                          <li>• Renovación mensual</li>
                          <li>• Registro en farmacia</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
                        <h4 className="font-semibold text-sm mb-2">Impacto en Pacientes</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Consultas más frecuentes</li>
                          <li>• Mayor costo y tiempo</li>
                          <li>• Riesgo de interrupciones</li>
                          <li>• Estigmatización</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                      <p className="text-sm text-muted-foreground mb-4">
                        La TCC rompe el ciclo: <strong>Fracasos → Creencias negativas → Emociones intensas → Evitación</strong>
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-sm">Psicoeducación</strong>
                            <p className="text-xs text-muted-foreground">Comprender TDAH</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-sm">Organización</strong>
                            <p className="text-xs text-muted-foreground">Sistemas de planificación</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-sm">Gestión temporal</strong>
                            <p className="text-xs text-muted-foreground">Técnicas de tiempo</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-sm">Control impulsos</strong>
                            <p className="text-xs text-muted-foreground">Autorregulación</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-sm">Reestructuración</strong>
                            <p className="text-xs text-muted-foreground">Cambiar pensamientos</p>
                          </div>
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
                        <li>• Correr, caminar, bicicleta</li>
                        <li>• <strong>Potencia:</strong> Enfoque y motivación</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-base">Entrenamiento de Equilibrio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Yoga, pilates, BOSU, wobble board</li>
                        <li>• <strong>80% éxito</strong> Zing Performance<CitationLink number={1} /></li>
                        <li>• <strong>Potencia:</strong> Coordinación cerebelo</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="text-base">Fitness Enfocado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Tenis, ping-pong, artes marciales</li>
                        <li>• Deportes reacción rápida</li>
                        <li>• <strong>Potencia:</strong> Autocontrol y disciplina</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Beneficios Clave (20-30 min de ejercicio)
                  </h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>• <strong>Planificación:</strong> 65% mejora<CitationLink number={1} /></div>
                    <div>• <strong>Atención:</strong> Efectos 2-4h</div>
                    <div>• <strong>Estado ánimo:</strong> ↓ Ansiedad</div>
                    <div>• <strong>Decisiones:</strong> ↑ Función ejecutiva</div>
                    <div>• <strong>Impulsos:</strong> ↑ Autocontrol</div>
                    <div>• <strong>Coordinación:</strong> ↑ Cerebelo</div>
                  </div>
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
                              <li>• <strong>Horario:</strong> Durante/después comidas</li>
                              <li>• <strong>Comida:</strong> Alta densidad calórica</li>
                              <li>• <strong>Frecuencia:</strong> Pequeñas y frecuentes</li>
                              <li>• <strong>Extra:</strong> Suplementos si necesario</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Cuándo Preocuparse</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>Peso:</strong> Pérdida &gt;10%</li>
                              <li>• <strong>Rechazo:</strong> Total de comidas</li>
                              <li>• <strong>Estado:</strong> Signos desnutrición</li>
                              <li>• <strong>Crecimiento:</strong> Impacto en desarrollo</li>
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
                              <li>• <strong>Horario:</strong> Ajustar última dosis</li>
                              <li>• <strong>Dosis:</strong> Baja vespertina</li>
                              <li>• <strong>Higiene:</strong> Rutina de sueño</li>
                              <li>• <strong>Relajación:</strong> Técnicas nocturnas</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Técnicas Complementarias</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>Melatonina:</strong> Supervisión médica</li>
                              <li>• <strong>Ejercicio:</strong> Regular, no tardío</li>
                              <li>• <strong>Cafeína:</strong> Evitar post-mediodía</li>
                              <li>• <strong>Ambiente:</strong> Descanso optimizado</li>
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