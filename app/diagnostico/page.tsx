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
  CheckCircle,
  Clock,
  Stethoscope,
  FileText,
  AlertTriangle,
  Brain,
  User,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import Link from "next/link";

const steps = [
  { id: 1, title: "¿Necesito ayuda?", subtitle: "Autoevaluación", icon: Brain },
  { id: 2, title: "Evaluación clínica", subtitle: "Diagnóstico real", icon: Stethoscope },
  { id: 3, title: "El proceso", subtitle: "Pasos completos", icon: Clock },
  { id: 4, title: "Preparación", subtitle: "Qué llevar", icon: FileText },
  { id: 5, title: "TDAH en adultos", subtitle: "Cómo cambia", icon: User },
  { id: 6, title: "Mitos e impacto", subtitle: "Por qué importa", icon: AlertTriangle },
] satisfies StepDefinition[];

export default function DiagnosticoPage() {
  const { currentStep, progress, completedCount, goTo, next, prev, isDone } =
    useStepProgress({ totalSteps: steps.length });

  const inattentiveSymptoms = [
    { id: "ina-detalles", icon: "🔍", text: "Me cuesta mantener atención en detalles" },
    { id: "ina-escucha", icon: "👂", text: "No parece que escucho cuando me hablan" },
    { id: "ina-tareas", icon: "📝", text: "No termino las tareas que empiezo" },
    { id: "ina-organizacion", icon: "📅", text: "Me cuesta organizarme" },
    { id: "ina-objetos", icon: "🔑", text: "Pierdo objetos importantes" },
  ] as const;

  const hyperactiveSymptoms = [
    { id: "hiper-movimiento", icon: "🙌", text: "Muevo manos/pies constantemente" },
    { id: "hiper-sentado", icon: "💺", text: "Me levanto cuando debo estar sentado" },
    { id: "hiper-inquietud", icon: "😣", text: "Siento inquietud interna" },
    { id: "hiper-motor", icon: "🏃", text: "Como si tuviera un motor interno" },
    { id: "hiper-interrumpo", icon: "💬", text: "Interrumpo a otros sin darme cuenta" },
  ] as const;

  const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(new Set());
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
      const ids = group === "ina"
        ? inattentiveSymptoms.map((s) => s.id)
        : hyperactiveSymptoms.map((s) => s.id);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const inattentiveCount = inattentiveSymptoms.filter((s) => selectedSymptoms.has(s.id)).length;
  const hyperactiveCount = hyperactiveSymptoms.filter((s) => selectedSymptoms.has(s.id)).length;
  const symptomThreshold = ageGroup === "adult" ? 5 : 6;
  const meetsSymptomThreshold = inattentiveCount >= symptomThreshold || hyperactiveCount >= symptomThreshold;
  const canShowReferralPrompt = meetsSymptomThreshold && impairmentConfirmed;

  const professionals = [
    {
      title: "Psiquiatra / Neurólogo",
      icon: "🧠",
      speciality: "Evaluación clínica con criterios DSM-5",
      availability: "Único profesional habilitado para prescribir estimulantes y emitir receta oficial por triplicado",
    },
    {
      title: "Psicólogo clínico",
      icon: "🏥",
      speciality: "Entrevista clínica y evaluación funcional",
      availability: "Diagnóstico clínico o derivación médica",
    },
    {
      title: "Neuropsicólogo",
      icon: "👨‍⚕️",
      speciality: "Tests de atención y funciones ejecutivas (CPT, TOVA, Stroop)",
      availability: "Complementario, no obligatorio",
    },
  ];

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
    >
      <div className="min-h-[500px]">
        {currentStep === 1 && (
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Brain className="h-8 w-8 text-blue-500" />¿Podría tener TDAH?
              </CardTitle>
              <CardDescription>Orientativo. No reemplaza evaluación profesional.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
                <p className="mb-3 text-sm font-medium">Edad para interpretar el umbral</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant={ageGroup === "adult" ? "default" : "outline"} onClick={() => setAgeGroup("adult")}>17 años o más</Button>
                  <Button variant={ageGroup === "minor" ? "default" : "outline"} onClick={() => setAgeGroup("minor")}>Menos de 17</Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">En adultos se evalúan 5 o más síntomas. En menores, 6 o más. Este tracker no reemplaza entrevista clínica.</p>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <Brain className="h-4 w-4" />
                <AlertDescription><strong>Qué exigir:</strong> Pedí entrevista DIVA-5, escala ASRS-v1.1 y WURS-25.</AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-center text-blue-700 dark:text-blue-300 mb-3">🧠 Síntomas de Inatención</h3>
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Seleccionados: {inattentiveCount}/{inattentiveSymptoms.length}</span>
                    {inattentiveCount > 0 && <button onClick={() => clearGroup("ina")} className="underline">Limpiar</button>}
                  </div>
                  <div className="space-y-2">
                    {inattentiveSymptoms.map((item) => (
                      <label key={item.id} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer">
                        <Checkbox checked={selectedSymptoms.has(item.id)} onCheckedChange={(c) => toggleSymptom(item.id, c)} />
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm">{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-center text-red-700 dark:text-red-300 mb-3">⚡ Síntomas de Hiperactividad</h3>
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Seleccionados: {hyperactiveCount}/{hyperactiveSymptoms.length}</span>
                    {hyperactiveCount > 0 && <button onClick={() => clearGroup("hiper")} className="underline">Limpiar</button>}
                  </div>
                  <div className="space-y-2">
                    {hyperactiveSymptoms.map((item) => (
                      <label key={item.id} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border cursor-pointer">
                        <Checkbox checked={selectedSymptoms.has(item.id)} onCheckedChange={(c) => toggleSymptom(item.id, c)} />
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm">{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <label className="mx-auto flex max-w-2xl cursor-pointer items-start gap-3 rounded-lg border bg-white p-4 text-left dark:bg-slate-800">
                <Checkbox checked={impairmentConfirmed} onCheckedChange={(c) => setImpairmentConfirmed(c === true)} className="mt-1" />
                <span className="text-sm">Existe evidencia clara de que estos síntomas interfieren en mi funcionamiento social, académico o laboral en al menos dos ámbitos.</span>
              </label>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  {canShowReferralPrompt ? (
                    <strong>Marcaste un patrón compatible. Si los síntomas llevan más de 6 meses, empezaron antes de los 12 años y no se explican mejor por ansiedad o depresión, considerá evaluación profesional.</strong>
                  ) : (
                    <span><strong>Umbral orientativo:</strong> {symptomThreshold}+ síntomas en inatención o hiperactividad, presentes por más de 6 meses, inicio antes de los 12 años y deterioro en al menos dos ámbitos.</span>
                  )}
                </AlertDescription>
              </Alert>

              <p className="text-xs text-muted-foreground text-center">Esta lista es una guía breve inspirada en DSM-5 y ASRS-v1.1. No alcanza para diagnosticar.</p>

              <div className="text-center">
                <Button onClick={next} size="lg">Siguiente: Evaluación clínica <ArrowRight className="h-4 w-4 ml-2" /></Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Stethoscope className="h-8 w-8 text-green-500" />La Ruta del Diagnóstico TDAH
              </CardTitle>
              <CardDescription>El diagnóstico de TDAH es clínico</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/30">
                  <CardHeader className="pb-2"><CardTitle className="text-base">Lo obligatorio</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Entrevista clínica profunda</div>
                    <div>• Síntomas desde antes de los 12 años</div>
                    <div>• Impacto real en dos áreas de la vida</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-base">Apoyos útiles</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• DIVA-5 para ordenar la entrevista</div>
                    <div>• ASRS-v1.1 y WURS-25 como escalas</div>
                    <div>• Tests neuropsicológicos si hacen falta</div>
                  </CardContent>
                </Card>
                <Card className="border-green-200 dark:border-green-800 bg-green-50/40 dark:bg-green-950/30">
                  <CardHeader className="pb-2"><CardTitle className="text-base">Antes de sacar turno</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• ¿Atiende TDAH adulto seguido?</div>
                    <div>• ¿Usa entrevistas estructuradas?</div>
                    <div>• ¿Evalúa ansiedad, depresión y bipolaridad?</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {professionals.map((prof, i) => (
                  <Card key={i} className="text-center">
                    <CardHeader>
                      <div className="text-6xl mb-2">{prof.icon}</div>
                      <CardTitle className="text-lg">{prof.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div>{prof.speciality}</div>
                      <div className="text-muted-foreground">{prof.availability}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button onClick={next} size="lg" className="mr-4">Siguiente: El proceso <ArrowRight className="h-4 w-4 ml-2" /></Button>
                <Button variant="outline" onClick={prev}><ArrowLeft className="h-4 w-4 mr-2" />Anterior</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Clock className="h-8 w-8 text-purple-500" />El proceso completo de diagnóstico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
                <Clock className="h-4 w-4" />
                <AlertDescription>Primero se hace evaluación clínica. Si el caso lo necesita, pueden pedirse tests neuropsicológicos para objetivar atención, memoria de trabajo y funciones ejecutivas. No son imprescindibles para diagnosticar TDAH.</AlertDescription>
              </Alert>

              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { step: 1, title: "Entrevista clínica", desc: "Síntomas, historia, inicio temprano e impacto funcional", duration: "60-90 min" },
                  { step: 2, title: "Escalas y antecedentes", desc: "ASRS-v1.1, WURS-25, boletines, informes previos", duration: "Variable" },
                  { step: 3, title: "Evaluación neuropsicológica", desc: "CPT/TOVA, Stroop, BRIEF (si el especialista lo solicita)", duration: "2-4 h" },
                  { step: 4, title: "Tratamiento integral", desc: "Plan clínico según edad, objetivos y comorbilidades", duration: "Continuo" },
                  { step: 5, title: "Seguimiento", desc: "Controles médicos, ajustes y evaluación de progreso", duration: "Mensual" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl mb-1">{item.step}</div>
                      <Badge variant="secondary" className="text-xs">{item.duration}</Badge>
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button onClick={next} size="lg" className="mr-4">Siguiente: Preparación <ArrowRight className="h-4 w-4 ml-2" /></Button>
                <Button variant="outline" onClick={prev}><ArrowLeft className="h-4 w-4 mr-2" />Anterior</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <FileText className="h-8 w-8 text-orange-500" />¿Qué debo llevar a la consulta?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription><strong>Preguntas clave:</strong> ¿Cuántos años de experiencia con TDAH? ¿Cómo evalúa deterioro funcional y comorbilidades? ¿Usa criterios DSM-5 y escalas ASRS-v1.1?</AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">📋 Documentos a llevar</h3>
                  <div className="space-y-2 text-sm">
                    {["Boletines escolares antiguos", "Informes médicos previos", "Lista de medicamentos", "Antecedentes familiares"].map((d, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border"><CheckCircle className="h-4 w-4 text-green-500" />{d}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">💭 Información a preparar</h3>
                  <div className="space-y-2 text-sm">
                    {["Ejemplos específicos de dificultades", "Impacto en trabajo/estudios", "Problemas en relaciones", "Estrategias que has probado"].map((d, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 rounded border"><CheckCircle className="h-4 w-4 text-green-500" />{d}</div>
                    ))}
                  </div>
                </div>
              </div>

              <Alert>
                <FileText className="h-4 w-4" />
                <AlertDescription><strong>Marco argentino:</strong> Metilfenidato y lisdexanfetamina son Psicotrópicos Lista II. En CABA y PBA la farmacia puede pedir receta física además de la electrónica. El CUD no sale automático por diagnóstico de TDAH.</AlertDescription>
              </Alert>

              <div className="text-center">
                <Button size="lg" asChild className="mr-4"><Link href="/especialistas">Encontrar Especialistas</Link></Button>
                <Button variant="outline" onClick={prev}><ArrowLeft className="h-4 w-4 mr-2" />Anterior</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 5 && (
          <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <User className="h-8 w-8 text-purple-500" />TDAH en la Vida Adulta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">En la infancia</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Hiperactividad: correr, saltar, no quedarse quieto</div>
                    <div>• Impulsividad: actuar sin pensar</div>
                    <div>• Inatención: no seguir instrucciones</div>
                    <div>• Emocional: rabietas frecuentes</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">En la adultez</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Inquietud interna: sensación de motor interno</div>
                    <div>• Decisiones impulsivas: cambios de trabajo, compras</div>
                    <div>• Dificultades ejecutivas: organización, planificación</div>
                    <div>• Desregulación emocional: reacciones intensas</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/30">
                  <CardHeader><CardTitle className="text-base">TDAH en mujeres</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Inatención predominante: «soñar despierta»</div>
                    <div>• Hiperactividad interna: mente acelerada</div>
                    <div>• Sensibilidad emocional y perfeccionismo paralizante</div>
                    <div>• Mayor depresión/ansiedad y diagnóstico tardío (30-40 años)</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">4 dimensiones del TDAH adulto</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>1. Hiperactividad → Inquietud interna</div>
                    <div>2. Inatención → Desorganización y procrastinación</div>
                    <div>3. Impulsividad → Decisiones precipitadas</div>
                    <div>4. Desregulación emocional → Reacciones intensas</div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button variant="outline" onClick={prev}><ArrowLeft className="h-4 w-4 mr-2" />Anterior</Button>
              </div>
            </CardContent>
          </Card>
         )}

        {currentStep === 6 && (
          <Card className="border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <AlertTriangle className="h-8 w-8 text-red-500" />Mitos e Impacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription><strong>Realidad crítica:</strong> El TDAH no tratado tiene <strong>doble tasa de suicidio</strong> y <strong>4x más intentos</strong>. Puede reducir la esperanza de vida en promedio <strong>13 años</strong>. Con tratamiento adecuado, estos riesgos se reducen significativamente.</AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">Mitos principales</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div><strong>«No existe realmente»</strong> — Consenso internacional de 208 expertos confirma que es un trastorno neurobiológico válido.</div>
                    <div><strong>«Solo en niños»</strong> — Persiste en la adultez en ~50% de los casos con deterioro residual.</div>
                    <div><strong>«Falta de voluntad»</strong> — Es un trastorno del desarrollo con base neurológica, no un problema de carácter.</div>
                    <div><strong>«Los medicamentos son peligrosos»</strong> — Estimulantes tienen excelente perfil de seguridad cuando se usan correctamente; el riesgo mayor es no tratar.</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-base">Impacto del no tratamiento</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• <strong>Accidentes:</strong> 3x mayor riesgo de accidentes graves y multas.</div>
                    <div>• <strong>Relaciones:</strong> 2x mayor probabilidad de divorcio.</div>
                    <div>• <strong>Empleo:</strong> Mayor rotación laboral y subempleo.</div>
                    <div>• <strong>Salud:</strong> Mayor riesgo de obesidad, asma, diabetes tipo 2 y problemas de sueño.</div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link href="/especialistas">Buscar especialistas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tratamientos">Ver opciones de tratamiento</Link>
                </Button>
                <Button variant="outline" onClick={prev}>
                  <ArrowLeft className="h-4 w-4 mr-2" />Anterior
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </StepGuideLayout>
  );
}
