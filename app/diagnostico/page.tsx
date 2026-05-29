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
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "¿Necesito ayuda?",
    subtitle: "Autoevaluación",
    icon: Brain,
  },
  {
    id: 2,
    title: "Evaluación clínica",
    subtitle: "Diagnóstico real",
    icon: Stethoscope,
  },
  { id: 3, title: "Evaluación complementaria", subtitle: "Si hace falta", icon: Clock },
  {
    id: 4,
    title: "¿Qué debo llevar?",
    subtitle: "Preparación",
    icon: FileText,
  },
] satisfies StepDefinition[];

export default function DiagnosticoPage() {

  const {
    currentStep,
    progress,
    completedCount,
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
  const [ageGroup, setAgeGroup] = useState<"adult" | "minor">("adult");
  const [impairmentConfirmed, setImpairmentConfirmed] = useState(false);

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
  const symptomThreshold = ageGroup === "adult" ? 5 : 6;
  const meetsSymptomThreshold =
    inattentiveCount >= symptomThreshold || hyperactiveCount >= symptomThreshold;
  const canShowReferralPrompt = meetsSymptomThreshold && impairmentConfirmed;

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
      title: "Psiquiatra / Neurólogo",
      icon: "🧠",
      speciality: "Evaluación clínica con criterios DSM-5",
      experience: "Experiencia en TDAH y comorbilidades",
      availability: "Primer paso recomendado para diagnóstico",
      color: "blue",
      step: "1° - Diagnóstico",
    },
    {
      title: "Psicólogo clínico",
      icon: "🏥",
      speciality: "Entrevista clínica y evaluación funcional",
      experience: "Formación específica en TDAH adulto/infantil",
      availability: "Diagnóstico clínico o derivación médica si corresponde",
      color: "purple",
      step: "1° - Evaluación",
    },
    {
      title: "Neuropsicólogo",
      icon: "👨‍⚕️",
      speciality: "Tests de atención y funciones ejecutivas",
      experience: "CPT, TOVA, Stroop, BRIEF u otras baterías",
      availability: "Complementario, no obligatorio para diagnosticar",
      color: "green",
      step: "2° - Complemento",
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
    <StepGuideLayout
      title="Cómo te diagnostican TDAH"
      description="Mirá estos pasos para entender cómo es el proceso diagnóstico"
      steps={steps}
      currentStep={currentStep}
      progress={progress}
      completedCount={completedCount}
      onSelectStep={goTo}
      isStepDone={isDone}
      containerClassName="px-4 py-6"
    >
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
                    Orientativo. No reemplaza evaluación profesional.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 rounded-lg border bg-white p-4 dark:bg-slate-800">
                    <p className="mb-3 text-sm font-medium">
                      Edad para interpretar el umbral orientativo
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        type="button"
                        variant={ageGroup === "adult" ? "default" : "outline"}
                        onClick={() => setAgeGroup("adult")}
                      >
                        17 años o más
                      </Button>
                      <Button
                        type="button"
                        variant={ageGroup === "minor" ? "default" : "outline"}
                        onClick={() => setAgeGroup("minor")}
                      >
                        Menos de 17
                      </Button>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">
                      En adultos se evalúan 5 o más síntomas en un grupo. En
                      menores, el criterio formal usa 6 o más; este tracker no
                      reemplaza una entrevista clínica completa.
                    </p>
                  </div>

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
                    <label className="mx-auto mb-4 flex max-w-2xl cursor-pointer items-start gap-3 rounded-lg border bg-white p-4 text-left dark:bg-slate-800">
                      <Checkbox
                        checked={impairmentConfirmed}
                        onCheckedChange={(checked) =>
                          setImpairmentConfirmed(checked === true)
                        }
                        className="mt-1"
                        aria-label="Confirmar deterioro funcional"
                      />
                      <span className="text-sm">
                        Existe evidencia clara de que estos síntomas interfieren
                        o reducen mi funcionamiento social, académico o laboral
                        en al menos dos ámbitos, por ejemplo casa y trabajo.
                      </span>
                    </label>
                    <Alert className="max-w-2xl mx-auto mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        {canShowReferralPrompt ? (
                          <strong>
                            Marcaste un patrón compatible para este chequeo
                            orientativo. Si los síntomas llevan más de 6 meses,
                            empezaron antes de los 12 años y no se explican mejor
                            por ansiedad, depresión u otra condición, considerá
                            evaluación profesional.
                          </strong>
                        ) : (
                          <span>
                            <strong>
                              Umbral orientativo: {symptomThreshold}+ síntomas
                            </strong>{" "}
                            en inatención o hiperactividad/impulsividad,
                            presentes por más de 6 meses, con inicio antes de los
                            12 años y deterioro funcional en al menos dos ámbitos.
                          </span>
                        )}
                      </AlertDescription>
                    </Alert>
                    <p className="mx-auto mb-4 max-w-2xl text-xs text-muted-foreground">
                      Esta lista es una guía breve inspirada en criterios DSM-5 y
                      escalas de tamizaje como ASRS-v1.1. No alcanza para
                      diagnosticar TDAH ni para descartar diagnóstico diferencial.
                    </p>
                    <Button onClick={next} size="lg">
                      Siguiente: Evaluación clínica{" "}
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
                    El diagnóstico de TDAH es clínico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <Brain className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Punto clave:</strong> El TDAH se diagnostica con
                      entrevista clínica, historia de vida, síntomas DSM-5,
                      inicio temprano, persistencia e impacto funcional. Los tests
                      neuropsicológicos pueden ayudar, pero no son obligatorios ni
                      diagnostican TDAH por sí solos.
                    </AlertDescription>
                  </Alert>
                  <Alert className="mb-6 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                    <FileText className="h-4 w-4" />
                    <AlertDescription>
                      No puede diagnosticarse solamente con escalas, tests
                      neuropsicológicos, laboratorio o imágenes cerebrales. Esas
                      herramientas pueden apoyar la entrevista, no reemplazarla.
                      Algunos profesionales usan entrevistas estructuradas como
                      DIVA-5.
                    </AlertDescription>
                  </Alert>
                  <Alert className="mb-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>¡IMPORTANTE!</strong> Que sean especialistas en TDAH.
                      Un psicólogo, psiquiatra o neurólogo que no se dedica a TDAH puede
                      no ver síntomas importantes o diagnosticarte mal. Preguntá siempre si
                      atienden TDAH seguido.
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
                    El proceso completo de diagnóstico
                  </CardTitle>
                  <CardDescription>
                    Del diagnóstico clínico al tratamiento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
                    <Clock className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Proceso típico:</strong> Primero se hace evaluación
                      clínica. Si el caso lo necesita, pueden pedirse tests
                      neuropsicológicos para objetivar atención, memoria de trabajo,
                      funciones ejecutivas, mapear fortalezas/debilidades o
                      descartar dificultades de aprendizaje. No son imprescindibles
                      para diagnosticar TDAH.
                    </AlertDescription>
                  </Alert>
                  {/* Visual Process Flow */}
                  <div className="max-w-2xl mx-auto">
                    {[
                      {
                        step: 1,
                        title: "Entrevista clínica",
                        description: "Síntomas, historia, inicio temprano e impacto funcional",
                        duration: "60-90 min",
                        icon: "🧠",
                        details: [
                          "Criterios DSM-5",
                          "Más de 6 meses",
                          "Impacto funcional",
                          "Comorbilidades"
                        ],
                      },
                      {
                        step: 2,
                        title: "Escalas y antecedentes",
                        description: "Herramientas de apoyo, no diagnóstico automático",
                        duration: "Variable",
                        icon: "📋",
                        details: [
                          "ASRS-v1.1",
                          "Boletines",
                          "Informes previos",
                          "Relato familiar"
                        ],
                      },
                      {
                        step: 3,
                        title: "Evaluación neuropsicológica",
                        description: "Complementaria si el especialista la solicita",
                        duration: "2-4 horas",
                        icon: "🏥",
                        details: ["CPT/TOVA", "Stroop", "BRIEF", "Perfil ejecutivo"],
                      },
                      {
                        step: 4,
                        title: "Tratamiento integral",
                        description: "Plan clínico según edad, objetivos y comorbilidades",
                        duration: "Continuo",
                        icon: "🎯",
                        details: ["Medicación si aplica", "TCC", "Psicoeducación"],
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
                      <br />• &ldquo;¿Cómo evalúa deterioro funcional y comorbilidades?&rdquo;
                      <br />• &ldquo;¿Usa criterios DSM-5 y escalas como ASRS-v1.1?&rdquo;
                      <br />• &ldquo;¿Cuándo pide evaluación neuropsicológica complementaria?&rdquo;
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
                    <Alert className="mx-auto mb-4 max-w-3xl text-left">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Marco argentino:</strong>
                        <br />• Metilfenidato y lisdexanfetamina son
                        psicotrópicos Lista II. En CABA y PBA la farmacia puede
                        seguir pidiendo receta oficial física además de receta
                        electrónica.
                        <br />• El CUD no sale automático por diagnóstico de
                        TDAH. Requiere junta interdisciplinaria y limitación
                        funcional significativa.
                        <br />• La Ley 27.306 de DEA puede ayudar a pedir
                        adecuaciones educativas cuando hay dificultades de
                        aprendizaje asociadas.
                      </AlertDescription>
                    </Alert>

                    <Alert className="mx-auto mb-4 max-w-3xl text-left">
                      <FileText className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Fuentes clínicas y legales:</strong>
                        <br />DSM-5; Primer Consenso Argentino sobre TDAH en la
                        adultez; ASRS-v1.1 OMS; Ley 19.303; Ley 27.553;
                        Resolución 2214/2025; Ley 27.306.
                      </AlertDescription>
                    </Alert>

                    <Alert className="max-w-md mx-auto mb-4">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>¡Listo para el diagnóstico!</strong> Ahora
                        tenés toda la información necesaria
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
    </StepGuideLayout>
  );
}
