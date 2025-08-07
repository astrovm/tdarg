import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { User, Users, Heart, Briefcase, GraduationCap, Clock, Zap, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { CitationLink } from "@/components/citation-link"
import { References, type Reference } from "@/components/references"

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
          <strong>Realidad:</strong> Según el consenso internacional<CitationLink number={1} />, la <strong>prevalencia mundial en adultos es del 2.5-2.8%<CitationLink number={1} /></strong>. 
          Solo 1 de cada 6 jóvenes mantiene todos los criterios a los 25 años<CitationLink number={2} />, pero <strong>aproximadamente la mitad<CitationLink number={2} /></strong> 
          sigue con deterioro residual significativo.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">

        {/* Sección destacada: TDAH en Mujeres */}
        <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/30">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700 dark:text-pink-300">
              ⚠️ TDAH en Mujeres: El Diagnóstico Oculto
            </CardTitle>
            <CardDescription className="text-base">
              Las mujeres son subdiagnosticadas sistemáticamente. <strong>En niñas 4:1 H:M</strong> vs <strong>en adultos 1.9:1</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">Manifestaciones Típicas</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Inatención predominante:</strong> "Soñar despierta"</li>
                  <li>• <strong>Hiperactividad interna:</strong> Mente acelerada</li>
                  <li>• <strong>Sensibilidad emocional:</strong> Reacciones intensas</li>
                  <li>• <strong>Perfeccionismo paralizante</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Consecuencias</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Mayor depresión/ansiedad</strong></li>
                  <li>• <strong>Baja autoestima crónica</strong></li>
                  <li>• <strong>Autoculpa:</strong> "Soy perezosa"</li>
                  <li>• <strong>Diagnóstico tardío</strong> (30-40 años)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Señales Clave</h4>
                <ul className="text-sm space-y-1">
                  <li>• Lucha constante con organización</li>
                  <li>• Hipersensibilidad al rechazo</li>
                  <li>• Sensación de "no dar la talla"</li>
                  <li>• Emociones más intensas que otros</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Las 4 Dimensiones del TDAH Adulto */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Las 4 Dimensiones del TDAH Adulto
            </CardTitle>
            <CardDescription>
              Cómo los síntomas evolucionan e impactan la vida adulta
            </CardDescription>
          </CardHeader>
          <CardContent>
              <div className="space-y-6">
                {/* 1. Hiperactividad */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-red-500" />
                    1. Hiperactividad: De Externa a Interna
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold mb-2">Manifestaciones Adultas</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Inquietud interna</strong> constante</li>
                        <li>• <strong>Impaciencia</strong> sedentaria</li>
                        <li>• <strong>Necesidad movimiento</strong></li>
                        <li>• <strong>Tamboreo/balanceo</strong> sutil</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold mb-2">Impacto en la Vida</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Trabajo:</strong> Reuniones largas insoportables</li>
                        <li>• <strong>Relaciones:</strong> Parecer impaciente/distraído</li>
                        <li>• <strong>Descanso:</strong> Dificultad para relajarse</li>
                        <li>• <strong>Social:</strong> Evitar eventos prolongados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 2. Desatención */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    2. Desatención: Más Compleja en la Adultez
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        En el Trabajo
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Procrastinación</strong> crónica</li>
                        <li>• <strong>Tareas monótonas</strong> imposibles</li>
                        <li>• <strong>Hiperfoco</strong> ocasional</li>
                        <li>• <strong>Proyectos</strong> sin terminar</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        En Relaciones
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>No escuchar</strong> completamente</li>
                        <li>• <strong>Olvidar</strong> compromisos</li>
                        <li>• <strong>Conversaciones</strong> difíciles</li>
                        <li>• Parecer <strong>desinteresado</strong></li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        En Organización
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Tiempo:</strong> Subestimar</li>
                        <li>• <strong>Plazos:</strong> Siempre apurado</li>
                        <li>• <strong>Objetos:</strong> Perdidos</li>
                        <li>• <strong>Espacios:</strong> Caóticos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 3. Impulsividad */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    3. Impulsividad: Decisiones y Consecuencias
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold mb-2">Manifestaciones</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Verbal:</strong> Interrumpir, comentarios inapropiados</li>
                        <li>• <strong>Decisiones:</strong> Cambios trabajo/casa súbitos</li>
                        <li>• <strong>Compras:</strong> Gastos importantes sin planear</li>
                        <li>• <strong>Relaciones:</strong> Decisiones precipitadas</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold mb-2">Impacto</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Laboral:</strong> Conflictos con colegas/jefes</li>
                        <li>• <strong>Financiero:</strong> Problemas económicos</li>
                        <li>• <strong>Social:</strong> Ofender sin intención</li>
                        <li>• <strong>Personal:</strong> Arrepentimiento/culpa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 4. Desregulación Emocional */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-purple-500" />
                    4. Desregulación Emocional: El Síntoma Invisible
                  </h3>
                  <Alert className="mb-4">
                    <Heart className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Síntoma clave:</strong> Uno de los más impactantes y menos reconocidos del TDAH adulto
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold mb-2">Manifestaciones</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Labilidad:</strong> Cambios humor rápidos</li>
                        <li>• <strong>Frustración:</strong> Desproporcionada</li>
                        <li>• <strong>Rechazo:</strong> Hipersensibilidad</li>
                        <li>• <strong>Intensidad:</strong> Emociones abrumadoras</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold mb-2">Impacto en la Vida</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Trabajo:</strong> Conflictos frecuentes</li>
                        <li>• <strong>Pareja:</strong> Relaciones tensas</li>
                        <li>• <strong>Crianza:</strong> Inconsistencia</li>
                        <li>• <strong>Autoestima:</strong> Crónica baja</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

              </div>
            </CardContent>
          </Card>

        {/* Fenómenos Especiales */}
        <Card>
          <CardHeader>
            <CardTitle>Fenómenos Especiales del TDAH Adulto</CardTitle>
            <CardDescription>
              Manifestaciones únicas que pueden ser ventajas o desafíos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    Hiperfoco
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Concentración intensa en actividades fascinantes
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs font-semibold">✅ Ventaja:</span>
                      <span className="text-xs">Productividad excepcional</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-semibold">⚠️ Desventaja:</span>
                      <span className="text-xs">Descuido responsabilidades</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-semibold">🎯 Clave:</span>
                      <span className="text-xs">Difícil de controlar</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-500" />
                    Ciclos "Encendido-Apagado"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Alternancia entre alta y baja energía
                  </p>
                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 dark:bg-green-950 rounded text-center">
                      <div className="text-xs font-semibold">🔥 "Encendido"</div>
                      <div className="text-xs">Energía alta, múltiples proyectos</div>
                    </div>
                    <div className="p-2 bg-gray-50 dark:bg-gray-950 rounded text-center">
                      <div className="text-xs font-semibold">😴 "Apagado"</div>
                      <div className="text-xs">Agotamiento, procrastinación</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Estadísticas de Impacto */}
        <Card>
          <CardHeader>
            <CardTitle>Impacto Estadístico del TDAH Adulto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg bg-red-50 dark:bg-red-950">
                <div className="text-2xl font-bold text-red-500 mb-1">12%<CitationLink number={2} /></div>
                <div className="text-sm text-muted-foreground">↓ Reducción empleo</div>
              </div>
              <div className="text-center p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                <div className="text-2xl font-bold text-amber-500 mb-1">34%<CitationLink number={2} /></div>
                <div className="text-sm text-muted-foreground">↓ Reducción ingresos</div>
              </div>
              <div className="text-center p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
                <div className="text-2xl font-bold text-blue-500 mb-1">2x</div>
                <div className="text-sm text-muted-foreground">↑ Rotación laboral</div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      <References references={adultosReferences} />
    </div>
    </div>
  )
}

const adultosReferences: Reference[] = [
  {
    id: 1,
    title: "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description: "Documento científico internacional que establece la prevalencia mundial del TDAH en adultos basada en metaanálisis.",
    year: "2021"
  },
  {
    id: 2,
    title: "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Edward M. Hallowell, John J. Ratey",
    url: "/adhd-2.0.pdf",
    description: "Análisis longitudinal sobre la persistencia del TDAH desde la adolescencia hasta la adultez.",
    year: "2021"
  }
]