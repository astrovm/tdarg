import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Clock, Calendar, Smartphone, BookOpen, Users, Target, Lightbulb } from "lucide-react"
import { Header } from "@/components/header"
import { References, type Reference } from "@/components/references"

const references: Reference[] = [
  {
    id: 1,
    title: "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Hallowell, E. M., & Ratey, J. J.",
    url: "/adhd-2.0.pdf",
    description: "Fuente de numerosas estrategias prácticas y un cambio de paradigma hacia un enfoque de fortalezas para manejar el TDAH.",
    year: "2021",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida - Parte 2: Tratamiento",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description: "Detalla las intervenciones no farmacológicas y psicoeducativas recomendadas, que son la base de muchas de las estrategias presentadas.",
    year: "2020",
  },
];

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Recursos y Herramientas Prácticas
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Estrategias concretas para manejar el TDAH en la vida diaria
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <Alert className="mb-8">
        <Lightbulb className="h-4 w-4" />
        <AlertDescription>
          <strong>Personalización:</strong> No todas las estrategias funcionan para todas las personas. 
          Experimenta y adapta estas herramientas a tu estilo de vida y necesidades específicas.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="organizacion" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1">
          <TabsTrigger value="organizacion" className="text-xs md:text-sm">Organización</TabsTrigger>
          <TabsTrigger value="atencion" className="text-xs md:text-sm">Atención</TabsTrigger>
          <TabsTrigger value="emocional" className="text-xs md:text-sm">Manejo Emocional</TabsTrigger>
          <TabsTrigger value="tecnologia" className="text-xs md:text-sm">Tecnología</TabsTrigger>
        </TabsList>

        <TabsContent value="organizacion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Organización Personal y Gestión del Tiempo
              </CardTitle>
              <CardDescription>
                Estrategias prácticas para manejar tareas, citas y responsabilidades diarias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Sistemas de planificación */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Sistemas de Planificación</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-blue-200 dark:border-blue-800">
                      <CardHeader>
                        <CardTitle className="text-base">Método GTD (Getting Things Done)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Sistema para capturar y organizar todas las tareas de manera sistemática
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                              <span className="text-sm">Capturar todo en una "bandeja de entrada"</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                              <span className="text-sm">Procesar: ¿Es accionable?</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                              <span className="text-sm">Organizar en listas contextuales</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                              <span className="text-sm">Revisar semanalmente</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">5</div>
                              <span className="text-sm">Ejecutar con confianza</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-base">Técnica Pomodoro Adaptada</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Intervalos de trabajo adaptados para personas con TDAH
                          </p>
                          <div className="space-y-2">
                            <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                              <h5 className="font-semibold text-sm">Versión Clásica (25 min)</h5>
                              <p className="text-xs">Para tareas que generan interés moderado</p>
                            </div>
                            <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded">
                              <h5 className="font-semibold text-sm">Versión Corta (15 min)</h5>
                              <p className="text-xs">Para tareas muy aburridas o difíciles</p>
                            </div>
                            <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded">
                              <h5 className="font-semibold text-sm">Versión Larga (45 min)</h5>
                              <p className="text-xs">Para tareas de gran interés (cuidado con el hiperfoco)</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <h5 className="font-semibold text-sm mb-1">Reglas importantes</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Descansos obligatorios de 5-15 minutos</li>
                              <li>• Eliminar distracciones durante el intervalo</li>
                              <li>• Usar timer visual o auditivo</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Técnicas de priorización */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Técnicas de Priorización</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Matriz de Eisenhower para TDAH</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-red-50 dark:bg-red-950 border-2 border-red-200 dark:border-red-800 rounded-lg">
                            <h5 className="font-semibold text-sm text-red-700 dark:text-red-300 mb-1">
                              Urgente + Importante
                            </h5>
                            <p className="text-xs mb-2">HACER AHORA</p>
                            <ul className="text-xs space-y-1">
                              <li>• Crisis médicas</li>
                              <li>• Fechas límite hoy</li>
                              <li>• Emergencias familiares</li>
                            </ul>
                          </div>
                          
                          <div className="p-3 bg-amber-50 dark:bg-amber-950 border-2 border-amber-200 dark:border-amber-800 rounded-lg">
                            <h5 className="font-semibold text-sm text-amber-700 dark:text-amber-300 mb-1">
                              No Urgente + Importante
                            </h5>
                            <p className="text-xs mb-2">PLANIFICAR</p>
                            <ul className="text-xs space-y-1">
                              <li>• Tratamiento TDAH</li>
                              <li>• Ejercicio regular</li>
                              <li>• Proyectos importantes</li>
                            </ul>
                          </div>
                          
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                            <h5 className="font-semibold text-sm text-blue-700 dark:text-blue-300 mb-1">
                              Urgente + No Importante
                            </h5>
                            <p className="text-xs mb-2">DELEGAR/MINIMIZAR</p>
                            <ul className="text-xs space-y-1">
                              <li>• Llamadas no esenciales</li>
                              <li>• Correos de spam</li>
                              <li>• Interrupciones menores</li>
                            </ul>
                          </div>
                          
                          <div className="p-3 bg-gray-50 dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-lg">
                            <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">
                              No Urgente + No Importante
                            </h5>
                            <p className="text-xs mb-2">ELIMINAR</p>
                            <ul className="text-xs space-y-1">
                              <li>• Redes sociales excesivas</li>
                              <li>• TV sin propósito</li>
                              <li>• Actividades de escape</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Regla del "Siguientes 3"</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Para evitar la sobrecarga, enfócate solo en las próximas 3 tareas más importantes del día
                          </p>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">🔥 Tarea 1</h5>
                              <p className="text-xs">La MÁS importante del día</p>
                            </div>
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">⚡ Tarea 2</h5>
                              <p className="text-xs">Segunda prioridad</p>
                            </div>
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">📋 Tarea 3</h5>
                              <p className="text-xs">Tercera prioridad</p>
                            </div>
                          </div>
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <p className="text-sm"><strong>Regla de oro:</strong> No agregues la tarea 4 hasta completar una de las 3 anteriores</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Organización del espacio */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Organización del Espacio Físico</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Principios de Organización Visual</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Un lugar para cada cosa:</strong> Lugares fijos y visibles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Contenedores transparentes:</strong> Para ver el contenido</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Etiquetas claras:</strong> Con palabras e imágenes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Colores codificados:</strong> Por categorías o prioridades</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Espacios despejados:</strong> Minimizar distracciones visuales</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Zonas Funcionales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                            <h5 className="font-semibold text-sm">Zona de Entrada</h5>
                            <p className="text-xs">Llaves, billetera, documentos importantes</p>
                          </div>
                          <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                            <h5 className="font-semibold text-sm">Zona de Trabajo</h5>
                            <p className="text-xs">Escritorio organizado, suministros a mano</p>
                          </div>
                          <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded">
                            <h5 className="font-semibold text-sm">Zona de Preparación</h5>
                            <p className="text-xs">Ropa del día siguiente, bolso preparado</p>
                          </div>
                          <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded">
                            <h5 className="font-semibold text-sm">Zona de Descanso</h5>
                            <p className="text-xs">Libre de trabajo y distracciones</p>
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

        <TabsContent value="atencion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Estrategias para Mejorar la Atención y Concentración
              </CardTitle>
              <CardDescription>
                Técnicas específicas para manejar la distracción y mantener el foco
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Manejo de distracciones */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Control del Ambiente para Minimizar Distracciones</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">Distracciones Externas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h5 className="font-semibold text-sm">Auditivas</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Auriculares con cancelación de ruido</li>
                            <li>• Ruido blanco o música instrumental</li>
                            <li>• Espacios silenciosos o bibliotecas</li>
                            <li>• Evitar espacios con conversaciones</li>
                          </ul>
                          
                          <h5 className="font-semibold text-sm">Visuales</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Escritorio despejado (solo lo esencial)</li>
                            <li>• Bloquear sitios web distractores</li>
                            <li>• Usar filtros de pantalla azul</li>
                            <li>• Ubicarse de espaldas al movimiento</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-blue-200 dark:border-blue-800">
                      <CardHeader>
                        <CardTitle className="text-base">Distracciones Internas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h5 className="font-semibold text-sm">Pensamientos Intrusivos</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Libreta de "parking" para ideas no relacionadas</li>
                            <li>• Técnica del "después lo pienso"</li>
                            <li>• Mindfulness básico (5 minutos)</li>
                            <li>• Recordatorios programados para preocupaciones</li>
                          </ul>
                          
                          <h5 className="font-semibold text-sm">Impulsos Físicos</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Objetos fidget discretos</li>
                            <li>• Descansos de movimiento programados</li>
                            <li>• Escritorio de pie alternativo</li>
                            <li>• Pelota de ejercicio como silla</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Técnicas de concentración */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Técnicas Activas de Concentración</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Método de la Doble Tarea</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Para tareas muy aburridas, agregar una segunda actividad mínima puede ayudar a mantener la atención
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-sm mb-2">Actividades Secundarias Apropiadas</h5>
                              <ul className="text-sm space-y-1">
                                <li>• Música instrumental suave</li>
                                <li>• Mascar chicle</li>
                                <li>• Fidget toys silenciosos</li>
                                <li>• Caminar mientras lee (si es posible)</li>
                                <li>• Tomar notas a mano mientras escucha</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm mb-2">Evitar</h5>
                              <ul className="text-sm space-y-1">
                                <li>• Redes sociales o mensajes</li>
                                <li>• Videos o contenido visual complejo</li>
                                <li>• Conversaciones</li>
                                <li>• Cualquier cosa que requiera decisiones</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Técnica del "Chunking" o Fragmentación</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Dividir tareas grandes en fragmentos pequeños y manejables
                          </p>
                          
                          <div className="space-y-3">
                            <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Ejemplo: Escribir un informe</h5>
                              <div className="text-xs space-y-1">
                                <div>1. Recopilar fuentes (15 min)</div>
                                <div>2. Hacer esquema (10 min)</div>
                                <div>3. Escribir introducción (20 min)</div>
                                <div>4. Desarrollar punto 1 (25 min)</div>
                                <div>5. Descanso (10 min)</div>
                                <div>6. Desarrollar punto 2 (25 min)</div>
                                <div>7. Conclusión (15 min)</div>
                                <div>8. Revisión final (20 min)</div>
                              </div>
                            </div>
                            
                            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Reglas del Chunking</h5>
                              <ul className="text-xs space-y-1">
                                <li>• Cada fragmento: 15-45 minutos máximo</li>
                                <li>• Un objetivo claro por fragmento</li>
                                <li>• Recompensa pequeña entre fragmentos</li>
                                <li>• Progreso visible (checklist, barra de progreso)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Manejo del hiperfoco */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Estrategias para el Hiperfoco</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <Alert>
                          <Target className="h-4 w-4" />
                          <AlertDescription>
                            El hiperfoco puede ser una fortaleza, pero necesita manejo para evitar 
                            descuidar otras responsabilidades importantes.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Aprovechamiento Positivo</h4>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Programar sesiones:</strong> Reservar bloques de tiempo para hiperfoco</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Preparar el entorno:</strong> Agua, snacks, baño antes de empezar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Alarmas múltiples:</strong> Para recordar parar y cuidar necesidades básicas</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Comunicar a otros:</strong> "Estaré concentrado hasta X hora"</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Prevención de Problemas</h4>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Timer de seguridad:</strong> Alarma cada 2-3 horas mínimo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Lista de verificación:</strong> ¿Comí? ¿Tomé agua? ¿Fui al baño?</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Transición gradual:</strong> 15 min de aviso antes de parar</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span><strong>Compromisos externos:</strong> Citas que obliguen a parar</span>
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

        <TabsContent value="emocional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Manejo Emocional y Relaciones
              </CardTitle>
              <CardDescription>
                Estrategias para regular emociones y mejorar relaciones interpersonales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Regulación emocional */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Técnicas de Regulación Emocional</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Técnica STOP</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Para momentos de alta emocionalidad o impulsos intensos
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg text-center">
                              <div className="text-2xl font-bold text-red-500 mb-1">S</div>
                              <div className="text-xs font-semibold">STOP</div>
                              <div className="text-xs">Detente físicamente</div>
                            </div>
                            <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg text-center">
                              <div className="text-2xl font-bold text-amber-500 mb-1">T</div>
                              <div className="text-xs font-semibold">TAKE A BREATH</div>
                              <div className="text-xs">Respira profundo 3 veces</div>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
                              <div className="text-2xl font-bold text-blue-500 mb-1">O</div>
                              <div className="text-xs font-semibold">OBSERVE</div>
                              <div className="text-xs">¿Qué siento? ¿Qué pienso?</div>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                              <div className="text-2xl font-bold text-green-500 mb-1">P</div>
                              <div className="text-xs font-semibold">PROCEED</div>
                              <div className="text-xs">Actúa conscientemente</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Técnicas de Respiración Rápida</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2">Respiración 4-7-8</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                                <span>Inhala por 4 segundos</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs">7</div>
                                <span>Retén por 7 segundos</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">8</div>
                                <span>Exhala por 8 segundos</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">Ideal para ansiedad y activación</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold mb-2">Respiración Cuadrada</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                                <span>Inhala por 4 segundos</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                                <span>Retén por 4 segundos</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                                <span>Exhala por 4 segundos</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                                <span>Pausa por 4 segundos</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">Ideal para concentración y calma</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Comunicación */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Estrategias de Comunicación</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Manejo de Interrupciones</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h5 className="font-semibold text-sm">Estrategias Preventivas</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Tomar notas durante conversaciones</li>
                            <li>• Usar un objeto (pelota, bolígrafo) para "turno de habla"</li>
                            <li>• Sentarse en las manos o cruzar brazos</li>
                            <li>• Escribir la idea en lugar de decirla inmediatamente</li>
                          </ul>
                          
                          <h5 className="font-semibold text-sm">Cuando Ya Interrumpiste</h5>
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <p className="text-sm">
                              <strong>Frase útil:</strong> "Perdón, te interrumpí. Quería asegurarme de no olvidar mi punto, 
                              pero por favor continúa. Volveré a mi idea después."
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Escucha Activa para TDAH</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h5 className="font-semibold text-sm">Técnicas Visuales</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Mantener contacto visual (pero no forzado)</li>
                            <li>• Asentir para mostrar que sigues la conversación</li>
                            <li>• Tomar notas de puntos clave</li>
                            <li>• Dibujar mientras escuchas (si ayuda)</li>
                          </ul>
                          
                          <h5 className="font-semibold text-sm">Técnicas Verbales</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Parafrasear: "Si entiendo bien, dices que..."</li>
                            <li>• Hacer preguntas clarificadoras</li>
                            <li>• Resumir periódicamente</li>
                            <li>• Admitir cuando te distraes: "¿Puedes repetir eso?"</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Manejo de relaciones */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Construcción y Mantenimiento de Relaciones</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Comunicación del TDAH a Otros</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                              <h5 className="font-semibold text-sm mb-2">En el Trabajo</h5>
                              <p className="text-xs mb-2">
                                "Tengo TDAH, lo que significa que trabajo mejor con estructura clara y plazos definidos. 
                                También soy muy creativo y trabajo bien bajo presión."
                              </p>
                              <ul className="text-xs space-y-1">
                                <li>• Enfócate en fortalezas</li>
                                <li>• Propón adaptaciones específicas</li>
                                <li>• Menciona resultados positivos</li>
                              </ul>
                            </div>
                            
                            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                              <h5 className="font-semibold text-sm mb-2">En Relaciones Personales</h5>
                              <p className="text-xs mb-2">
                                "A veces me distraigo o parezco no escuchar, pero es parte de cómo funciona mi cerebro. 
                                Te valoro mucho y quiero que sepas cómo puedes ayudarme a ser mejor."
                              </p>
                              <ul className="text-xs space-y-1">
                                <li>• Sé vulnerable pero no te disculpes</li>
                                <li>• Explica comportamientos específicos</li>
                                <li>• Pide apoyo concreto</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Sistemas de Recordatorio Social</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Fechas Importantes</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Calendario compartido con pareja/familia</li>
                              <li>• Alarmas para cumpleaños y aniversarios</li>
                              <li>• Lista de regalos preparada con anticipación</li>
                              <li>• Recordatorios 1 semana y 1 día antes</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Compromisos Sociales</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Confirmación 24 horas antes</li>
                              <li>• Alarma 2 horas antes para prepararse</li>
                              <li>• Dirección y detalles en el teléfono</li>
                              <li>• Plan B por si hay complicaciones</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Mantenimiento de Amistad</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Recordatorio semanal para contactar amigos</li>
                              <li>• Lista de temas de conversación</li>
                              <li>• Fotos y notas sobre sus vidas</li>
                              <li>• Actividades programadas regularmente</li>
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

        <TabsContent value="tecnologia" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Herramientas Tecnológicas
              </CardTitle>
              <CardDescription>
                Apps, extensiones y dispositivos que pueden ayudar en el manejo del TDAH
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Apps de productividad */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Aplicaciones de Productividad</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Gestión de Tareas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Todoist</h5>
                            <p className="text-xs text-muted-foreground mb-2">Sistema GTD completo con etiquetas y proyectos</p>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">Gratuito/Premium</Badge>
                              <Badge variant="outline" className="text-xs">Multiplataforma</Badge>
                            </div>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Any.do</h5>
                            <p className="text-xs text-muted-foreground mb-2">Interfaz simple, ideal para comenzar</p>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">Gratuito</Badge>
                              <Badge variant="outline" className="text-xs">Muy visual</Badge>
                            </div>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Microsoft To Do</h5>
                            <p className="text-xs text-muted-foreground mb-2">Integración con Office, listas compartidas</p>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">Gratuito</Badge>
                              <Badge variant="outline" className="text-xs">Colaborativo</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Control de Tiempo</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Forest</h5>
                            <p className="text-xs text-muted-foreground mb-2">Gamificación para mantener foco, planta árboles virtuales</p>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">Pago</Badge>
                              <Badge variant="outline" className="text-xs">Motivador</Badge>
                            </div>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Pomodone</h5>
                            <p className="text-xs text-muted-foreground mb-2">Pomodoro integrado con apps de tareas</p>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">Freemium</Badge>
                              <Badge variant="outline" className="text-xs">Integración</Badge>
                            </div>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">RescueTime</h5>
                            <p className="text-xs text-muted-foreground mb-2">Tracking automático de tiempo en apps y sitios</p>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">Freemium</Badge>
                              <Badge variant="outline" className="text-xs">Automático</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Apps de bloqueo y concentración */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Control de Distracciones Digitales</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Bloqueadores de Sitios Web</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-4">
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Cold Turkey</h5>
                              <p className="text-xs text-muted-foreground mb-2">Bloqueo robusto, difícil de desactivar</p>
                              <ul className="text-xs space-y-1">
                                <li>• Schedules programados</li>
                                <li>• Bloqueo de aplicaciones</li>
                                <li>• Frozen Turkey (modo extremo)</li>
                              </ul>
                            </div>
                            
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">Freedom</h5>
                              <p className="text-xs text-muted-foreground mb-2">Multiplataforma, sincroniza todos los dispositivos</p>
                              <ul className="text-xs space-y-1">
                                <li>• Bloqueo simultáneo móvil/PC</li>
                                <li>• Listas predefinidas</li>
                                <li>• Estadísticas de uso</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">uBlock Origin</h5>
                              <p className="text-xs text-muted-foreground mb-2">Extensión gratuita, bloquea ads y sitios específicos</p>
                              <ul className="text-xs space-y-1">
                                <li>• Completamente gratuito</li>
                                <li>• Personalizable</li>
                                <li>• Bloquea publicidad distractor</li>
                              </ul>
                            </div>
                            
                            <div className="p-3 border rounded-lg">
                              <h5 className="font-semibold text-sm mb-1">StayFocusd</h5>
                              <p className="text-xs text-muted-foreground mb-2">Para Chrome, límites de tiempo por sitio</p>
                              <ul className="text-xs space-y-1">
                                <li>• Tiempo límite diario</li>
                                <li>• Nuclear Option</li>
                                <li>• Configuración por dominio</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Apps de notas y captura */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Captura de Ideas y Notas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Apps de Notas Rápidas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Google Keep</h5>
                            <p className="text-xs text-muted-foreground mb-2">Notas visuales con colores y etiquetas</p>
                            <ul className="text-xs space-y-1">
                              <li>• Notas por voz</li>
                              <li>• Recordatorios por ubicación</li>
                              <li>• Colaborativo</li>
                              <li>• Integración con Google</li>
                            </ul>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Obsidian</h5>
                            <p className="text-xs text-muted-foreground mb-2">Para personas que piensan en redes y conexiones</p>
                            <ul className="text-xs space-y-1">
                              <li>• Mapas de conocimiento</li>
                              <li>• Enlaces entre notas</li>
                              <li>• Muy personalizable</li>
                              <li>• Archivo local</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Grabación y Transcripción</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Otter.ai</h5>
                            <p className="text-xs text-muted-foreground mb-2">Transcripción automática de reuniones y clases</p>
                            <ul className="text-xs space-y-1">
                              <li>• Transcripción en tiempo real</li>
                              <li>• Identifica participantes</li>
                              <li>• Búsqueda en transcripciones</li>
                              <li>• Plan gratuito disponible</li>
                            </ul>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Voice Memos (iOS) / Recorder (Android)</h5>
                            <p className="text-xs text-muted-foreground mb-2">Apps nativas para captura rápida de ideas</p>
                            <ul className="text-xs space-y-1">
                              <li>• Acceso rápido desde pantalla bloqueada</li>
                              <li>• Sincronización en la nube</li>
                              <li>• Organización por carpetas</li>
                              <li>• Gratuito</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Dispositivos físicos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Dispositivos y Herramientas Físicas</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Fidget Tools</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Fidget cube (múltiples texturas)</li>
                          <li>• Spinner rings (discretos)</li>
                          <li>• Stress balls</li>
                          <li>• Tangle toys</li>
                          <li>• Worry stones</li>
                          <li>• Bolígrafos con elementos móviles</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Wearables</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Smartwatch con alarmas vibración</li>
                          <li>• Fitness trackers para recordar movimiento</li>
                          <li>• Auriculares con cancelación de ruido</li>
                          <li>• Pulseras de alerta médica</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Organización Física</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Pizarras blancas grandes</li>
                          <li>• Calendarios murales</li>
                          <li>• Cajas organizadoras transparentes</li>
                          <li>• Etiquetadora</li>
                          <li>• Timer de cocina visual</li>
                          <li>• Luz terapéutica para rutinas</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                {/* Recomendaciones de configuración */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Configuraciones Recomendadas</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Smartphone className="h-4 w-4" />
                            Configuración del Teléfono
                          </h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Notificaciones:</strong> Solo las esenciales (llamadas, mensajes de familia)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Pantalla inicial:</strong> Solo apps productivas en primera pantalla</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Modo No Molestar:</strong> Programado durante trabajo y sueño</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Límites de tiempo:</strong> Apps de redes sociales con límites estrictos</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Configuración del Computador
                          </h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Múltiples escritorios:</strong> Uno para trabajo, otro para personal</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Bloqueo automático:</strong> Apps distractoras bloqueadas durante horario laboral</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Recordatorios:</strong> Pop-ups cada hora para descansos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Organización:</strong> Carpetas claras, accesos directos a herramientas esenciales</span>
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
      </Tabs>

      {/* Mensaje final */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-blue-500" />
            Recuerda: La Clave está en la Experimentación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm">
              No existe una solución única para todos. Estas herramientas y estrategias son un punto de partida. 
              La clave está en experimentar, adaptar y encontrar tu combinación personal de recursos que funcione 
              para tu estilo de vida específico.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Empieza Pequeño</h4>
                <p className="text-xs">Implementa 1-2 estrategias a la vez, no todas de una vez</p>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Sé Paciente</h4>
                <p className="text-xs">Las nuevas estrategias necesitan 2-4 semanas para convertirse en hábitos</p>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Adapta Siempre</h4>
                <p className="text-xs">Lo que funciona hoy puede necesitar ajustes mañana, y eso está bien</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <References references={references} />
    </div>
    </div>
  )
}