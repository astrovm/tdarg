"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Users, 
  FileText, 
  Stethoscope,
  Brain,
  Target,
  Calendar,
  MapPin,
  Star,
  Settings,
  Eye,
  EyeOff,
  Plus,
  X
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"

export default function DiagnosticoOption4() {
  const [checkedSymptoms, setCheckedSymptoms] = useState<number[]>([])
  const [completedSections, setCompletedSections] = useState<string[]>([])
  const [hiddenWidgets, setHiddenWidgets] = useState<string[]>([])
  const [personalizedView, setPersonalizedView] = useState(false)

  const symptomsList = [
    "Dificultad para mantener atención",
    "No parece escuchar cuando hablan",
    "Problemas para seguir instrucciones",
    "Dificultad para organizarse",
    "Evita tareas de esfuerzo mental",
    "Pierde objetos importantes",
    "Se distrae fácilmente",
    "Es olvidadizo",
    "Inquietud física constante",
    "Se levanta cuando debe estar sentado",
    "Sensación de motor interno",
    "Dificultad para actividades tranquilas",
    "Habla excesivamente",
    "Responde antes que terminen las preguntas",
    "Dificultad para esperar turno",
    "Interrumpe conversaciones"
  ]

  const toggleSymptom = (index: number) => {
    setCheckedSymptoms(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const markSectionComplete = (section: string) => {
    setCompletedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const toggleWidget = (widgetId: string) => {
    setHiddenWidgets(prev => 
      prev.includes(widgetId)
        ? prev.filter(w => w !== widgetId)
        : [...prev, widgetId]
    )
  }

  const widgets = [
    {
      id: "symptom-tracker",
      title: "Seguimiento de Síntomas",
      icon: Brain,
      color: "blue",
      priority: "high"
    },
    {
      id: "professional-finder", 
      title: "Buscar Profesionales",
      icon: Stethoscope,
      color: "green", 
      priority: "high"
    },
    {
      id: "preparation-checklist",
      title: "Lista de Preparación",
      icon: FileText,
      color: "purple",
      priority: "medium"
    },
    {
      id: "progress-tracker",
      title: "Mi Progreso",
      icon: Target,
      color: "orange",
      priority: "medium"
    },
    {
      id: "appointment-scheduler",
      title: "Programar Cita",
      icon: Calendar,
      color: "red",
      priority: "low"
    },
    {
      id: "local-resources",
      title: "Recursos Locales",
      icon: MapPin,
      color: "teal",
      priority: "low"
    }
  ]

  const visibleWidgets = widgets.filter(w => !hiddenWidgets.includes(w.id))
  const symptomsProgress = (checkedSymptoms.length / symptomsList.length) * 100
  const overallProgress = (completedSections.length / 4) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Tu Panel de Diagnóstico TDAH</h1>
              <p className="text-indigo-100">Personaliza tu experiencia de aprendizaje</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setPersonalizedView(!personalizedView)}
                className="flex items-center gap-2"
              >
                {personalizedView ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                {personalizedView ? 'Vista Normal' : 'Personalizar'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* Overall Progress Bar */}
        <Card className="mb-6 border-indigo-200 dark:border-indigo-800">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Progreso General</h3>
              <span className="text-2xl font-bold text-indigo-600">{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-3 mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{completedSections.length} de 4 secciones completadas</span>
              <span>{checkedSymptoms.length} síntomas identificados</span>
            </div>
          </CardContent>
        </Card>

        {/* Customization Panel */}
        {personalizedView && (
          <Card className="mb-6 border-dashed border-gray-300 dark:border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Personalizar Dashboard
              </CardTitle>
              <CardDescription>Muestra/oculta widgets según tus necesidades</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {widgets.map(widget => (
                  <div key={widget.id} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center gap-2">
                      <widget.icon className={`h-4 w-4 text-${widget.color}-500`} />
                      <span className="text-sm">{widget.title}</span>
                      <Badge variant={widget.priority === 'high' ? 'default' : 'secondary'} className="text-xs">
                        {widget.priority}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleWidget(widget.id)}
                    >
                      {hiddenWidgets.includes(widget.id) ? 
                        <Plus className="h-4 w-4" /> : 
                        <X className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Primary Widget: Symptom Tracker */}
          {!hiddenWidgets.includes('symptom-tracker') && (
            <Card className="lg:col-span-2 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-500" />
                    <CardTitle>Seguimiento de Síntomas</CardTitle>
                    {completedSections.includes('symptoms') && <CheckCircle className="h-5 w-5 text-green-500" />}
                  </div>
                  <Badge variant={checkedSymptoms.length >= 5 ? 'destructive' : 'secondary'}>
                    {checkedSymptoms.length}/16 síntomas
                  </Badge>
                </div>
                <CardDescription>Marca los síntomas que experimentas regularmente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Progress value={symptomsProgress} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {symptomsProgress.toFixed(0)}% completado
                  </div>
                </div>
                
                <Tabs defaultValue="inattention">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="inattention">Inatención (8)</TabsTrigger>
                    <TabsTrigger value="hyperactivity">Hiperactividad (8)</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="inattention" className="space-y-2 max-h-48 overflow-y-auto">
                    {symptomsList.slice(0, 8).map((symptom, index) => (
                      <div key={index} className="flex items-start gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">
                        <Checkbox 
                          checked={checkedSymptoms.includes(index)}
                          onCheckedChange={() => toggleSymptom(index)}
                          className="mt-0.5"
                        />
                        <span className="text-sm">{symptom}</span>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="hyperactivity" className="space-y-2 max-h-48 overflow-y-auto">
                    {symptomsList.slice(8, 16).map((symptom, index) => (
                      <div key={index + 8} className="flex items-start gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">
                        <Checkbox 
                          checked={checkedSymptoms.includes(index + 8)}
                          onCheckedChange={() => toggleSymptom(index + 8)}
                          className="mt-0.5"
                        />
                        <span className="text-sm">{symptom}</span>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
                
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded">
                  {checkedSymptoms.length >= 5 ? (
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Recomendación:</strong> Con {checkedSymptoms.length} síntomas identificados, 
                        considera buscar evaluación profesional.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Continúa identificando síntomas. Se necesitan 5+ para considerar evaluación.
                    </p>
                  )}
                </div>
                
                <Button 
                  className="w-full mt-4"
                  onClick={() => markSectionComplete('symptoms')}
                  variant={completedSections.includes('symptoms') ? 'secondary' : 'default'}
                >
                  {completedSections.includes('symptoms') ? 'Completado ✓' : 'Marcar como completado'}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Secondary Widgets */}
          <div className="space-y-6">
            
            {/* Professional Finder Widget */}
            {!hiddenWidgets.includes('professional-finder') && (
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-green-500" />
                      <CardTitle className="text-base">Buscar Profesionales</CardTitle>
                    </div>
                    {completedSections.includes('professionals') && <CheckCircle className="h-5 w-5 text-green-500" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950 rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Médicos Psiquiatras</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950 rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Neurólogos</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950 rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Psicólogos Clínicos</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4" 
                    size="sm"
                    onClick={() => markSectionComplete('professionals')}
                    variant={completedSections.includes('professionals') ? 'secondary' : 'default'}
                  >
                    {completedSections.includes('professionals') ? 'Completado ✓' : 'Ver especialistas'}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Progress Tracker Widget */}
            {!hiddenWidgets.includes('progress-tracker') && (
              <Card className="border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-base">Mi Progreso</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { task: "Autoevaluación", completed: checkedSymptoms.length >= 5 },
                      { task: "Identificar profesionales", completed: completedSections.includes('professionals') },
                      { task: "Preparar documentos", completed: completedSections.includes('preparation') },
                      { task: "Programar cita", completed: completedSections.includes('appointment') }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {item.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                        )}
                        <span className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {item.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

          </div>

          {/* Preparation Checklist Widget */}
          {!hiddenWidgets.includes('preparation-checklist') && (
            <Card className="lg:col-span-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-500" />
                    <CardTitle>Lista de Preparación</CardTitle>
                    {completedSections.includes('preparation') && <CheckCircle className="h-5 w-5 text-green-500" />}
                  </div>
                </div>
                <CardDescription>Documentos e información para tu primera consulta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">📋 Documentos a llevar</h4>
                    <div className="space-y-2">
                      {[
                        "Boletines escolares antiguos",
                        "Informes médicos previos", 
                        "Lista de medicamentos actuales",
                        "Antecedentes familiares"
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                          <Checkbox className="flex-shrink-0" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">💭 Información a preparar</h4>
                    <div className="space-y-2">
                      {[
                        "Ejemplos específicos de dificultades",
                        "Impacto en trabajo/estudios",
                        "Problemas en relaciones",
                        "Estrategias que has probado"
                      ].map((info, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                          <Checkbox className="flex-shrink-0" />
                          <span className="text-sm">{info}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4"
                  onClick={() => markSectionComplete('preparation')}
                  variant={completedSections.includes('preparation') ? 'secondary' : 'default'}
                >
                  {completedSections.includes('preparation') ? 'Completado ✓' : 'Marcar como completado'}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Additional Widgets */}
          <div className="space-y-6">
            
            {/* Appointment Scheduler Widget */}
            {!hiddenWidgets.includes('appointment-scheduler') && (
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-red-500" />
                      <CardTitle className="text-base">Programar Cita</CardTitle>
                    </div>
                    {completedSections.includes('appointment') && <CheckCircle className="h-5 w-5 text-green-500" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <Clock className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-3">
                      ¿Listo para programar tu evaluación?
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => markSectionComplete('appointment')}
                      variant={completedSections.includes('appointment') ? 'secondary' : 'default'}
                    >
                      {completedSections.includes('appointment') ? 'Cita programada ✓' : 'Programar ahora'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Local Resources Widget */}
            {!hiddenWidgets.includes('local-resources') && (
              <Card className="border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-500" />
                    <CardTitle className="text-base">Recursos Locales</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span>Grupos de apoyo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span>Clínicas especializadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span>Recursos educativos</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-3" variant="outline">
                    Ver recursos
                  </Button>
                </CardContent>
              </Card>
            )}

          </div>
        </div>

        {/* Action Summary */}
        {overallProgress >= 75 && (
          <Card className="mt-6 border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">¡Excelente progreso!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Has completado la mayoría de los pasos. Estás listo para buscar ayuda profesional.
                </p>
                <div className="flex gap-2 justify-center">
                  <Button>Encontrar Especialistas</Button>
                  <Button variant="outline">Descargar Resumen</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  )
}