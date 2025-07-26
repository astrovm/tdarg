import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertTriangle, CheckCircle, Clock, FileText, Users, Stethoscope } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"
import { References, type Reference } from "@/components/references"

const references: Reference[] = [
  {
    id: 1,
    title: "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-1.pdf",
    description: "Documento de consenso que establece las pautas para el diagnóstico y tratamiento del TDAH en Argentina, incluyendo los criterios del DSM-5.",
    year: "2020",
  },
];

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Guía de Diagnóstico TDAH
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Una guía completa sobre el proceso diagnóstico del TDAH en Argentina
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Importante:</strong> Esta información es educativa. Solo un profesional especializado puede realizar un diagnóstico de TDAH.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        {/* ¿Quién puede diagnosticar? */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              ¿Quién puede diagnosticar TDAH?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Según el Consenso Argentino sobre TDAH, el diagnóstico debe ser realizado por:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Badge variant="secondary" className="mb-2">Médico Psiquiatra</Badge>
                <p className="text-sm text-muted-foreground">Con entrenamiento específico en TDAH</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Badge variant="secondary" className="mb-2">Neurólogo</Badge>
                <p className="text-sm text-muted-foreground">Con experiencia en trastornos del neurodesarrollo</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Badge variant="secondary" className="mb-2">Psicólogo Clínico</Badge>
                <p className="text-sm text-muted-foreground">Con formación en evaluación de TDAH</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auto-evaluación inicial */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Auto-evaluación Inicial
            </CardTitle>
            <CardDescription>
              Estas preguntas pueden ayudarte a identificar si necesitás una evaluación profesional
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Síntomas de Inatención</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Hasta 17 años:</strong> 6 o más síntomas. <br />
                  <strong>Mayores de 17 años:</strong> 5 o más síntomas.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Dificultad para mantener la atención en tareas o actividades
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    No parece escuchar cuando se le habla directamente
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    No sigue instrucciones y falla en completar tareas
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Dificultad para organizar tareas y actividades
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Evita tareas que requieren esfuerzo mental sostenido
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Pierde objetos necesarios para tareas
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Se distrae fácilmente con estímulos externos
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Es olvidadizo en actividades diarias
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Síntomas de Hiperactividad-Impulsividad</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Hasta 17 años:</strong> 6 o más síntomas. <br />
                  <strong>Mayores de 17 años:</strong> 5 o más síntomas.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Mueve manos/pies o se retuerce en el asiento
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Se levanta cuando debería permanecer sentado
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Sensación de inquietud interna (en adultos)
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Dificultad para realizar actividades tranquilas
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    "En marcha" o actúa como si tuviera un motor
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Habla excesivamente
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Responde antes de que terminen las preguntas
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Dificultad para esperar su turno
                  </li>
                  <li className="flex items-start gap-2">
                    <Checkbox className="mt-0.5 flex-shrink-0" />
                    Interrumpe o se inmiscuye con otros
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proceso de evaluación */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Proceso de Evaluación Profesional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Entrevista Clínica Inicial</h4>
                  <p className="text-sm text-muted-foreground">
                    El profesional explorará tus síntomas actuales y su impacto en la vida diaria
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Historia Clínica Completa</h4>
                  <p className="text-sm text-muted-foreground">
                    Revisión del desarrollo desde la infancia, antecedentes médicos y familiares
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Escalas y Cuestionarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Instrumentos validados como ASRS, WURS-25, y otros específicos para adultos
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold">Evaluación de Comorbilidades</h4>
                  <p className="text-sm text-muted-foreground">
                    Identificación de otras condiciones como ansiedad, depresión o trastorno bipolar
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <div>
                  <h4 className="font-semibold">Evaluación Neuropsicológica (opcional)</h4>
                  <p className="text-sm text-muted-foreground">
                    Pruebas específicas de atención, memoria de trabajo y funciones ejecutivas
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Qué llevar a la consulta */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Qué Llevar a la Primera Consulta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Documentación</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Boletines escolares antiguos</li>
                  <li>• Informes médicos previos</li>
                  <li>• Lista de medicamentos actuales</li>
                  <li>• Antecedentes familiares de TDAH</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Información a Preparar</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Ejemplos específicos de dificultades</li>
                  <li>• Impacto en trabajo/estudios</li>
                  <li>• Problemas en relaciones</li>
                  <li>• Estrategias que has probado</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diferenciación con otras condiciones */}
        <Card>
          <CardHeader>
            <CardTitle>TDAH vs. Otras Condiciones</CardTitle>
            <CardDescription>
              Es importante diferenciar el TDAH de otras condiciones con síntomas similares
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">TDAH vs. Ansiedad</h4>
                <p className="text-sm text-muted-foreground">
                  El TDAH es crónico desde la infancia; la ansiedad puede ser episódica y desarrollarse en cualquier momento
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">TDAH vs. Depresión</h4>
                <p className="text-sm text-muted-foreground">
                  La depresión mayor es episódica; el TDAH presenta síntomas constantes que pueden causar depresión secundaria
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">TDAH vs. Trastorno Bipolar</h4>
                <p className="text-sm text-muted-foreground">
                  El bipolar tiene episodios definidos de manía/hipomanía; el TDAH tiene un curso más estable
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-semibold">TDAH vs. Autismo (TEA)</h4>
                <p className="text-sm text-muted-foreground">
                  Desde el DSM-5 pueden coexistir. El TEA incluye dificultades sociales y patrones restrictivos; el TDAH se centra en atención e hiperactividad
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información importante */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Información Importante
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold mb-2">El diagnóstico es clínico</h4>
                <p className="text-sm">
                  No existe una prueba de laboratorio o imagen cerebral que diagnostique TDAH. 
                  Se basa en la evaluación clínica especializada.
                </p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                <h4 className="font-semibold mb-2">Síntomas desde la infancia</h4>
                <p className="text-sm">
                  Los síntomas deben haber estado presentes antes de los 12 años, 
                  aunque pueden no haber sido reconocidos hasta la adultez.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold mb-2">Impacto funcional</h4>
                <p className="text-sm">
                  Los síntomas deben causar deterioro significativo en el funcionamiento (social, académico, laboral). Generalmente se requiere en dos o más áreas, pero un deterioro grave en una sola puede ser suficiente.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <References references={references} />
    </div>
    </div>
  )
}