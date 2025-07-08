import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Brain, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"

const criteriosDSM5 = [
  {
    categoria: "Inatención",
    criterios: [
      "No presta atención a los detalles o comete errores por descuido",
      "Tiene dificultades para mantener la atención en tareas o actividades",
      "Parece no escuchar cuando se le habla directamente",
      "No sigue las instrucciones y no termina las tareas",
      "Tiene dificultad para organizar tareas y actividades",
      "Evita o le disgusta realizar tareas que requieren esfuerzo mental sostenido",
      "Pierde objetos necesarios para tareas o actividades",
      "Se distrae fácilmente por estímulos externos",
      "Es olvidadizo en las actividades diarias",
    ],
  },
  {
    categoria: "Hiperactividad/Impulsividad",
    criterios: [
      "Mueve excesivamente manos o pies o se retuerce en el asiento",
      "Se levanta en situaciones donde se espera que permanezca sentado",
      "Corre o trepa excesivamente en situaciones inapropiadas",
      "Tiene dificultad para jugar o realizar actividades de ocio tranquilamente",
      "Está 'en marcha' o actúa como si fuera 'impulsado por un motor'",
      "Habla excesivamente",
      "Responde antes de que se complete la pregunta",
      "Tiene dificultad para esperar su turno",
      "Interrumpe o se inmiscuye en las actividades de otros",
    ],
  },
]

const procesosDiagnosticos = [
  {
    paso: 1,
    titulo: "Evaluación Inicial",
    descripcion: "Entrevista clínica con el paciente y familiares",
    duracion: "60-90 min",
    profesional: "Psiquiatra/Psicólogo",
  },
  {
    paso: 2,
    titulo: "Historia Clínica",
    descripcion: "Recopilación detallada del desarrollo y síntomas",
    duracion: "45-60 min",
    profesional: "Especialista",
  },
  {
    paso: 3,
    titulo: "Evaluación Neuropsicológica",
    descripcion: "Tests de atención, memoria y funciones ejecutivas",
    duracion: "2-3 horas",
    profesional: "Neuropsicólogo",
  },
  {
    paso: 4,
    titulo: "Escalas de Evaluación",
    descripcion: "Cuestionarios para padres, maestros y paciente",
    duracion: "30-45 min",
    profesional: "Equipo multidisciplinario",
  },
  {
    paso: 5,
    titulo: "Diagnóstico Diferencial",
    descripcion: "Descarte de otros trastornos con síntomas similares",
    duracion: "Variable",
    profesional: "Especialista",
  },
  {
    paso: 6,
    titulo: "Informe y Plan",
    descripcion: "Diagnóstico final y plan de tratamiento",
    duracion: "60 min",
    profesional: "Equipo completo",
  },
]

export default function DiagnosticosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Diagnóstico del TDAH</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            El diagnóstico del TDAH es un proceso complejo que requiere evaluación profesional especializada. Aquí
            encontrarás información sobre criterios diagnósticos, procesos y herramientas utilizadas.
          </p>
        </div>

        {/* Alert */}
        <Card className="mb-8 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Importante</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  El diagnóstico de TDAH debe ser realizado únicamente por profesionales de la salud mental
                  especializados. Esta información es solo educativa y no reemplaza la evaluación profesional.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DSM-5 Criteria */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Criterios Diagnósticos DSM-5</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {criteriosDSM5.map((categoria, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <span>{categoria.categoria}</span>
                  </CardTitle>
                  <CardDescription>
                    Se requieren al menos 6 síntomas (5 en adultos) presentes por 6+ meses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categoria.criterios.map((criterio, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{criterio}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Diagnostic Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proceso Diagnóstico</h2>
          <div className="space-y-6">
            {procesosDiagnosticos.map((proceso, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {proceso.paso}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{proceso.titulo}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{proceso.duracion}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{proceso.profesional}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{proceso.descripcion}</p>
                    </div>
                  </div>
                </CardContent>
                {index < procesosDiagnosticos.length - 1 && (
                  <div className="absolute left-9 bottom-0 w-0.5 h-6 bg-gray-300"></div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Assessment Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Herramientas de Evaluación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ADHD-RS-IV</CardTitle>
                <CardDescription>Escala de Calificación del TDAH</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">Evaluación de 18 síntomas basados en criterios DSM-5</p>
                <div className="space-y-2">
                  <Badge variant="outline">Padres</Badge>
                  <Badge variant="outline">Maestros</Badge>
                  <Badge variant="outline">Autoevaluación</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conners-3</CardTitle>
                <CardDescription>Escalas de Conners</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">Evaluación integral de TDAH y trastornos relacionados</p>
                <div className="space-y-2">
                  <Badge variant="outline">Forma Completa</Badge>
                  <Badge variant="outline">Forma Breve</Badge>
                  <Badge variant="outline">Índice Global</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SNAP-IV</CardTitle>
                <CardDescription>Swanson, Nolan and Pelham</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">Cuestionario de 26 ítems para evaluación rápida</p>
                <div className="space-y-2">
                  <Badge variant="outline">Gratuito</Badge>
                  <Badge variant="outline">Validado</Badge>
                  <Badge variant="outline">Fácil uso</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vanderbilt</CardTitle>
                <CardDescription>Escalas de Vanderbilt</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">Evaluación de TDAH y comorbilidades comunes</p>
                <div className="space-y-2">
                  <Badge variant="outline">Padres</Badge>
                  <Badge variant="outline">Maestros</Badge>
                  <Badge variant="outline">Seguimiento</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">CPT-3</CardTitle>
                <CardDescription>Test de Rendimiento Continuo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">Evaluación objetiva de atención y impulsividad</p>
                <div className="space-y-2">
                  <Badge variant="outline">Computerizado</Badge>
                  <Badge variant="outline">Objetivo</Badge>
                  <Badge variant="outline">Normativo</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">BRIEF-2</CardTitle>
                <CardDescription>Inventario de Funciones Ejecutivas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">Evaluación de funciones ejecutivas en la vida diaria</p>
                <div className="space-y-2">
                  <Badge variant="outline">Funciones Ejecutivas</Badge>
                  <Badge variant="outline">Vida Diaria</Badge>
                  <Badge variant="outline">Múltiples Informantes</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Differential Diagnosis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Diagnóstico Diferencial</h2>
          <Card>
            <CardHeader>
              <CardTitle>Trastornos a Considerar</CardTitle>
              <CardDescription>
                Es importante descartar otros trastornos que pueden presentar síntomas similares al TDAH
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Trastornos del Neurodesarrollo</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Trastorno del Espectro Autista</li>
                    <li>• Discapacidad Intelectual</li>
                    <li>• Trastornos Específicos del Aprendizaje</li>
                    <li>• Trastorno del Lenguaje</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Trastornos del Estado de Ánimo</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Trastorno Depresivo Mayor</li>
                    <li>• Trastorno Bipolar</li>
                    <li>• Trastornos de Ansiedad</li>
                    <li>• Trastorno de Estrés Postraumático</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Otros Trastornos</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Trastorno Oposicionista Desafiante</li>
                    <li>• Trastorno de Conducta</li>
                    <li>• Trastornos del Sueño</li>
                    <li>• Efectos de Sustancias</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Condiciones Médicas</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Trastornos Tiroideos</li>
                    <li>• Deficiencias Nutricionales</li>
                    <li>• Trastornos del Sueño</li>
                    <li>• Efectos Medicamentosos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Age-Specific Considerations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Consideraciones por Edad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>Preescolares (3-5 años)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Características:</strong>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    <li>• Hiperactividad más prominente</li>
                    <li>• Dificultad para seguir rutinas</li>
                    <li>• Problemas de autorregulación</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <strong>Consideraciones:</strong>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    <li>• Desarrollo normal vs. TDAH</li>
                    <li>• Evaluación más observacional</li>
                    <li>• Intervención temprana</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Escolares (6-12 años)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Características:</strong>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    <li>• Problemas académicos evidentes</li>
                    <li>• Dificultades sociales</li>
                    <li>• Síntomas más estables</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <strong>Consideraciones:</strong>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    <li>• Evaluación escolar importante</li>
                    <li>• Múltiples informantes</li>
                    <li>• Comorbilidades frecuentes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span>Adultos (18+ años)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Características:</strong>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    <li>• Síntomas desde la infancia</li>
                    <li>• Problemas laborales/académicos</li>
                    <li>• Dificultades relacionales</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <strong>Consideraciones:</strong>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    <li>• Historia retrospectiva</li>
                    <li>• Autoevaluación importante</li>
                    <li>• Comorbilidades complejas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>¿Sospechas TDAH?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Si identificas varios síntomas que persisten por más de 6 meses y afectan significativamente la vida
                diaria, es recomendable buscar evaluación profesional.
              </p>
              <Button asChild className="w-full">
                <Link href="/medicos">Encontrar Especialista</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recursos Adicionales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Accede a guías detalladas, herramientas de evaluación y información sobre el proceso diagnóstico.
              </p>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/guias">Ver Guías Clínicas</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/investigacion">Estudios Científicos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
