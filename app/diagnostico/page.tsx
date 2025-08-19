"use client";

import { useState } from "react";
import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  CheckCircle,
  Clock,
  Stethoscope,
  FileText,
  AlertTriangle,
  Brain,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { Header } from "@/components/header";
import Link from "next/link";

export default function DiagnosticoPage() {
  const steps = [
    {
      id: 1,
      title: "¿Necesito ayuda?",
      subtitle: "Autoevaluación",
      icon: Brain,
    },
    {
      id: 2,
      title: "Evaluación neuropsicológica",
      subtitle: "Primer paso",
      icon: Stethoscope,
    },
    { id: 3, title: "Derivación a especialistas", subtitle: "Paso siguiente", icon: Clock },
    {
      id: 4,
      title: "¿Qué debo llevar?",
      subtitle: "Preparación",
      icon: FileText,
    },
  ] as const;

  const {
    currentStep,
    progress,
    completedCount,
    effectiveCompletedCount,
    goTo,
    next,
    prev,
    isDone,
  } = useStepProgress({ totalSteps: steps.length });

  // Interactive checklist state
  const inattentiveSymptoms = [
    {
      id: "ina-detalles",
      icon: "🔍",
      text: "Me cuesta mantener atención en detalles",
    },
    {
      id: "ina-escucha",
      icon: "👂",
      text: "No parece que escucho cuando me hablan",
    },
    { id: "ina-tareas", icon: "📝", text: "No termino las tareas que empiezo" },
    { id: "ina-organizacion", icon: "📅", text: "Me cuesta organizarme" },
    { id: "ina-objetos", icon: "🔑", text: "Pierdo objetos importantes" },
  ] as const;

  const hyperactiveSymptoms = [
    {
      id: "hiper-movimiento",
      icon: "🙌",
      text: "Muevo manos/pies constantemente",
    },
    {
      id: "hiper-sentado",
      icon: "💺",
      text: "Me levanto cuando debo estar sentado",
    },
    { id: "hiper-inquietud", icon: "😣", text: "Siento inquietud interna" },
    { id: "hiper-motor", icon: "🏃", text: "Como si tuviera un motor interno" },
    {
      id: "hiper-interrumpo",
      icon: "💬",
      text: "Interrumpo a otros sin darme cuenta",
    },
  ] as const;

  const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(
    new Set()
  );

  const toggleSymptom = (id: string, checked: CheckedState) => {
    setSelectedSymptoms((prev) => {
      const next = new Set(prev);
      if (checked === true) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const clearGroup = (group: "ina" | "hiper") => {
    setSelectedSymptoms((prev) => {
      const next = new Set(prev);
      const ids =
        group === "ina"
          ? inattentiveSymptoms.map((s) => s.id)
          : hyperactiveSymptoms.map((s) => s.id);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const inattentiveCount = inattentiveSymptoms.filter((s) =>
    selectedSymptoms.has(s.id)
  ).length;
  const hyperactiveCount = hyperactiveSymptoms.filter((s) =>
    selectedSymptoms.has(s.id)
  ).length;
  const totalSelected = inattentiveCount + hyperactiveCount;

  type ProfColor = "blue" | "purple" | "green";
  const professionals: Array<{
    title: string;
    icon: string;
    speciality: string;
    experience: string;
    availability: string;
    color: ProfColor;
    step: string;
  }> = [
    {
      title: "Neuropsicólogo / Psicólogo",
      icon: "🧠",
      speciality: "Especialista en TDAH con evaluación neuropsicológica",
      experience: "Formación específica en tests de TDAH (CPT, TOVA, etc.)",
      availability: "Primer paso recomendado",
      color: "blue",
      step: "1° - Evaluación",
    },
    {
      title: "Médico Psiquiatra",
      icon: "🏥",
      speciality: "Especialista en TDAH para diagnóstico DSM-5",
      experience: "Experiencia en medicación específica para TDAH",
      availability: "Segundo paso (con informe neuropsicológico)",
      color: "purple",
      step: "2° - Diagnóstico",
    },
    {
      title: "Psicólogo especialista",
      icon: "👨‍⚕️",
      speciality: "Especialista en TDAH para terapia TCC",
      experience: "Formación en TCC específica para TDAH adulto/infantil",
      availability: "Tercer paso (tratamiento continuo)",
      color: "green",
      step: "3° - Tratamiento",
    },
  ];

  const colorClasses: Record<ProfColor, { border: string; badge: string }> = {
    blue: {
      border: "border-blue-200 dark:border-blue-800",
      badge: "text-blue-600",
    },
    purple: {
      border: "border-purple-200 dark:border-purple-800",
      badge: "text-purple-600",
    },
    green: {
      border: "border-green-200 dark:border-green-800",
      badge: "text-green-600",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      {/* Header Section */}
      <div className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-3xl font-bold text-purple-600 mb-4">
            Tu Camino al Diagnóstico TDAH
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Sigue estos pasos visuales para entender el proceso diagnóstico
          </p>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Progreso del aprendizaje
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {completedCount}/{steps.length} completado
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => goTo(step.id)}
                className={`p-3 rounded-lg text-left transition-all ${
                  currentStep === step.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : isDone(step.id)
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {isDone(step.id) ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <step.icon className="h-4 w-4" />
                  )}
                  <span className="font-medium text-sm">{step.title}</span>
                </div>
                <p className="text-xs opacity-80">{step.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Step Content */}
        <div className="min-h-[500px]">
          {/* Step 1: Self Assessment */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8 text-blue-500" />
                    ¿Podría tener TDAH?
                  </CardTitle>
                  <CardDescription>
                    Evalúa estos síntomas principales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Visual Symptom Cards */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center text-blue-700 dark:text-blue-300">
                        🧠 Síntomas de Inatención
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          Seleccionados: {inattentiveCount}/
                          {inattentiveSymptoms.length}
                        </span>
                        {inattentiveCount > 0 && (
                          <button
                            onClick={() => clearGroup("ina")}
                            className="underline underline-offset-2 hover:text-foreground"
                          >
                            Limpiar
                          </button>
                        )}
                      </div>

                      <div className="grid gap-3">
                        {inattentiveSymptoms.map((item) => (
                          <label
                            key={item.id}
                            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
                          >
                            <Checkbox
                              checked={selectedSymptoms.has(item.id)}
                              onCheckedChange={(checked) =>
                                toggleSymptom(item.id, checked)
                              }
                              className="mt-0.5"
                              aria-label={item.text}
                            />
                            <span className="text-2xl" aria-hidden>
                              {item.icon}
                            </span>
                            <span className="text-sm">{item.text}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center text-red-700 dark:text-red-300">
                        ⚡ Síntomas de Hiperactividad
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          Seleccionados: {hyperactiveCount}/
                          {hyperactiveSymptoms.length}
                        </span>
                        {hyperactiveCount > 0 && (
                          <button
                            onClick={() => clearGroup("hiper")}
                            className="underline underline-offset-2 hover:text-foreground"
                          >
                            Limpiar
                          </button>
                        )}
                      </div>

                      <div className="grid gap-3">
                        {hyperactiveSymptoms.map((item) => (
                          <label
                            key={item.id}
                            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer"
                          >
                            <Checkbox
                              checked={selectedSymptoms.has(item.id)}
                              onCheckedChange={(checked) =>
                                toggleSymptom(item.id, checked)
                              }
                              className="mt-0.5"
                              aria-label={item.text}
                            />
                            <span className="text-2xl" aria-hidden>
                              {item.icon}
                            </span>
                            <span className="text-sm">{item.text}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Alert className="max-w-md mx-auto mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        {totalSelected >= 5 ? (
                          <strong>
                            Marcaste {totalSelected} síntomas. Considerá buscar
                            evaluación profesional.
                          </strong>
                        ) : (
                          <span>
                            <strong>¿Te identificás con 5+ síntomas?</strong>{" "}
                            Marcá los que apliquen para una guía rápida.
                          </span>
                        )}
                      </AlertDescription>
                    </Alert>
                    <Button onClick={next} size="lg">
                      Siguiente: Evaluación neuropsicológica{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 2: Who Can Help */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Stethoscope className="h-8 w-8 text-green-500" />
                    La Ruta del Diagnóstico TDAH
                  </CardTitle>
                  <CardDescription>
                    Proceso paso a paso recomendado en Argentina
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <Brain className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Ruta recomendada:</strong> Comenzá con una evaluación neuropsicológica completa. 
                      Este informe será fundamental para que el psiquiatra pueda hacer un diagnóstico más preciso 
                      y diseñar el mejor plan de tratamiento.
                    </AlertDescription>
                  </Alert>
                  <Alert className="mb-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>¡MUY IMPORTANTE!</strong> Todos los profesionales deben ser especialistas en TDAH. 
                      Un psicólogo general, psiquiatra general o neurólogo sin especialización en TDAH puede 
                      pasar por alto síntomas clave o dar un diagnóstico erróneo. Preguntá siempre por su 
                      experiencia específica con TDAH.
                    </AlertDescription>
                  </Alert>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Professional Cards with Visual Hierarchy */}
                    {professionals.map((prof, index) => (
                      <Card
                        key={index}
                        className={`${
                          colorClasses[prof.color].border
                        } hover:shadow-lg transition-shadow`}
                      >
                        <CardHeader className="text-center">
                          <div className="text-6xl mb-2">{prof.icon}</div>
                          <CardTitle className="text-lg">
                            {prof.title}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className={`${colorClasses[prof.color].badge} mb-2`}
                          >
                            {prof.step}
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{prof.speciality}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{prof.experience}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span>{prof.availability}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Button onClick={next} size="lg" className="mr-4">
                      Siguiente: Derivación a especialistas{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={prev}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: The Process */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Clock className="h-8 w-8 text-purple-500" />
                    El Proceso Completo de Diagnóstico
                  </CardTitle>
                  <CardDescription>
                    De la evaluación neuropsicológica al tratamiento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
                    <Clock className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Proceso típico:</strong> La evaluación neuropsicológica puede tomar 2-4 horas 
                      e incluye tests específicos para medir atención, memoria de trabajo y funciones ejecutivas. 
                      Con el informe en mano, el psiquiatra puede hacer un diagnóstico más certero.
                    </AlertDescription>
                  </Alert>
                  {/* Visual Process Flow */}
                  <div className="max-w-2xl mx-auto">
                    {[
                      {
                        step: 1,
                        title: "Evaluación neuropsicológica",
                        description: "Batería completa de tests cognitivos",
                        duration: "2-4 horas",
                        icon: "🧠",
                        details: [
                          "Tests de atención",
                          "Memoria de trabajo",
                          "Función ejecutiva",
                          "Historia clínica"
                        ],
                      },
                      {
                        step: 2,
                        title: "Informe neuropsicológico",
                        description: "Análisis de resultados y recomendaciones",
                        duration: "1-2 semanas",
                        icon: "📋",
                        details: [
                          "Resultados detallados",
                          "Perfil cognitivo",
                          "Recomendaciones",
                          "Derivaciones"
                        ],
                      },
                      {
                        step: 3,
                        title: "Consulta psiquiátrica",
                        description: "Evaluación médica con informe neuropsicológico",
                        duration: "60-90 min",
                        icon: "🏥",
                        details: ["Diagnóstico DSM-5", "Evaluación médica", "Plan de tratamiento"],
                      },
                      {
                        step: 4,
                        title: "Tratamiento integral",
                        description: "Medicación y terapia psicológica",
                        duration: "Continuo",
                        icon: "🎯",
                        details: ["Medicación", "Terapia TCC", "Seguimiento"],
                      },
                      {
                        step: 5,
                        title: "Seguimiento y ajustes",
                        description: "Monitoreo y optimización del tratamiento",
                        duration: "Mensual",
                        icon: "✅",
                        details: ["Controles médicos", "Ajustes", "Evaluación progreso"],
                      },
                    ].map((item, index) => (
                      <div key={item.step}>
                        <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border mb-4">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl mb-2">
                              {item.icon}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {item.duration}
                            </Badge>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                Paso {item.step}
                              </Badge>
                              <h3 className="font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {item.details.map((detail, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {detail}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {index < 4 && (
                          <div className="flex justify-center mb-4">
                            <ArrowDown className="h-6 w-6 text-purple-400" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Button onClick={next} size="lg" className="mr-4">
                      Siguiente: Preparación{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={prev}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: What to Bring */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <FileText className="h-8 w-8 text-orange-500" />
                    ¿Qué debo llevar a la consulta?
                  </CardTitle>
                  <CardDescription>
                    Checklist de documentos y información
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Preguntas clave para verificar especialización:</strong>
                      <br />• &ldquo;¿Cuántos años de experiencia tiene específicamente con TDAH?&rdquo;
                      <br />• &ldquo;¿Qué tests neuropsicológicos usa para TDAH?&rdquo; (CPT, TOVA, BRIEF)
                      <br />• &ldquo;¿Está familiarizado con el DSM-5 para TDAH adulto?&rdquo;
                      <br />• &ldquo;¿Ha hecho cursos de especialización en TDAH?&rdquo;
                    </AlertDescription>
                  </Alert>
                  {/* Visual Checklist */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-700 dark:text-orange-300">
                        📋 Documentos a llevar
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            item: "Boletines escolares antiguos",
                            icon: "🎓",
                            importance: "Muy importante",
                          },
                          {
                            item: "Informes médicos previos",
                            icon: "🏥",
                            importance: "Importante",
                          },
                          {
                            item: "Lista de medicamentos",
                            icon: "💊",
                            importance: "Importante",
                          },
                          {
                            item: "Antecedentes familiares",
                            icon: "👨‍👩‍👧‍👦",
                            importance: "Útil",
                          },
                        ].map((doc, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border"
                          >
                            <span className="text-2xl">{doc.icon}</span>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{doc.item}</p>
                              <Badge
                                variant={
                                  doc.importance === "Muy importante"
                                    ? "default"
                                    : "secondary"
                                }
                                className="text-xs"
                              >
                                {doc.importance}
                              </Badge>
                            </div>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-700 dark:text-orange-300">
                        💭 Información a preparar
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            item: "Preguntas sobre especialización del profesional",
                            icon: "❓",
                            tip: "Verificar experiencia en TDAH",
                          },
                          {
                            item: "Ejemplos específicos de dificultades",
                            icon: "🎯",
                            tip: "Situaciones concretas",
                          },
                          {
                            item: "Impacto en trabajo/estudios",
                            icon: "💼",
                            tip: "Cómo afecta tu día",
                          },
                          {
                            item: "Problemas en relaciones",
                            icon: "👥",
                            tip: "Con familia/pareja/amigos",
                          },
                          {
                            item: "Estrategias que has probado",
                            icon: "🛠️",
                            tip: "Qué funcionó o no",
                          },
                        ].map((info, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border"
                          >
                            <span className="text-2xl">{info.icon}</span>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{info.item}</p>
                              <Badge variant="secondary" className="text-xs">
                                {info.tip}
                              </Badge>
                            </div>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Alert className="max-w-md mx-auto mb-4">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>¡Listo para el diagnóstico!</strong> Ahora
                        tienes toda la información necesaria
                      </AlertDescription>
                    </Alert>

                    <div className="space-x-4">
                      <Button size="lg" asChild>
                        <Link href="/especialistas">
                          Encontrar Especialistas
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={prev}
                        className="flex items-center gap-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Anterior
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
