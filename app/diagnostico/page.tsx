"use client";

import { useState } from "react";
import Link from "next/link";
import type { CheckedState } from "@radix-ui/react-checkbox";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle,
  FileText,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { InfoCard } from "@/components/info-card";
import { StepGuideLayout } from "@/components/step-guide-layout";
import { References, type Reference } from "@/components/references";
import { useStepProgress } from "@/hooks/use-step-progress";
import type { StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Autoevaluación", subtitle: "Señales iniciales", icon: Brain },
  { id: 2, title: "Evaluación clínica", subtitle: "Cómo se confirma", icon: Stethoscope },
  { id: 3, title: "Preparar consulta", subtitle: "Qué llevar y preguntar", icon: FileText },
  { id: 4, title: "Después", subtitle: "Plan y seguimiento", icon: CheckCircle },
] satisfies StepDefinition[];

const accentByStep = [
  "bg-violet-500/12 text-violet-700 dark:text-violet-300",
  "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  "bg-amber-500/14 text-amber-700 dark:text-amber-300",
  "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
];

const inattentiveSymptoms = [
  { id: "ina-detalles", text: "Me cuesta mantener atención en detalles" },
  { id: "ina-escucha", text: "No parece que escucho cuando me hablan" },
  { id: "ina-tareas", text: "No termino las tareas que empiezo" },
  { id: "ina-organizacion", text: "Me cuesta organizarme" },
  { id: "ina-objetos", text: "Pierdo objetos importantes" },
  { id: "ina-divagacion", text: "Mi mente divaga constantemente (mind wandering) con pensamientos inconexos" },
] as const;

const hyperactiveSymptoms = [
  { id: "hiper-movimiento", text: "Muevo manos/pies constantemente" },
  { id: "hiper-sentado", text: "Me levanto cuando debería estar sentado" },
  { id: "hiper-inquietud", text: "Siento inquietud interna" },
  { id: "hiper-motor", text: "Siento un motor interno" },
  { id: "hiper-interrumpo", text: "Interrumpo a otros sin darme cuenta" },
] as const;

const executiveSymptoms = [
  { id: "exec-procrastinacion", text: "Dejo tareas importantes para último momento" },
  { id: "exec-hiperfoco", text: "Me engancho demasiado con tareas de interés" },
  { id: "exec-desregulacion", text: "Tengo reacciones emocionales intensas" },
  { id: "exec-frustracion", text: "Tengo muy baja tolerancia a la frustración y estallidos de enojo bruscos" },
] as const;

function ChecklistGroup({
  title,
  count,
  total,
  items,
  selected,
  onToggle,
  onClear,
}: {
  title: string;
  count: number;
  total: number;
  items: readonly { id: string; text: string }[];
  selected: Set<string>;
  onToggle: (id: string, checked: CheckedState) => void;
  onClear: () => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>
            {count}/{total}
          </span>
          {count > 0 && (
            <button onClick={onClear} className="underline">
              Limpiar
            </button>
          )}
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <label
            key={item.id}
            className="flex cursor-pointer items-center gap-3 rounded-lg border bg-muted/40 p-3"
          >
            <Checkbox
              checked={selected.has(item.id)}
              onCheckedChange={(checked) => onToggle(item.id, checked)}
            />
            <span className="text-sm">{item.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function DiagnosticoPage() {
  const { currentStep, progress, completedCount, next, prev, goTo, isDone } =
    useStepProgress({ totalSteps: steps.length });
  const activeStep = steps[currentStep - 1];
  const ActiveIcon = activeStep.icon;
  const activeAccent = accentByStep[currentStep - 1];

  const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(
    new Set()
  );
  const [ageGroup, setAgeGroup] = useState<"adult" | "minor">("adult");
  const [impairmentConfirmed, setImpairmentConfirmed] = useState(false);
  const [childhoodOnset, setChildhoodOnset] = useState(false);

  const toggleSymptom = (id: string, checked: CheckedState) => {
    setSelectedSymptoms((prevSelected) => {
      const nextSelected = new Set(prevSelected);
      if (checked === true) nextSelected.add(id);
      else nextSelected.delete(id);
      return nextSelected;
    });
  };

  const clearGroup = (ids: readonly string[]) => {
    setSelectedSymptoms((prevSelected) => {
      const nextSelected = new Set(prevSelected);
      ids.forEach((id) => nextSelected.delete(id));
      return nextSelected;
    });
  };

  const inattentiveCount = inattentiveSymptoms.filter((symptom) =>
    selectedSymptoms.has(symptom.id)
  ).length;
  const hyperactiveCount = hyperactiveSymptoms.filter((symptom) =>
    selectedSymptoms.has(symptom.id)
  ).length;
  const executiveCount = executiveSymptoms.filter((symptom) =>
    selectedSymptoms.has(symptom.id)
  ).length;
  const symptomThreshold = ageGroup === "adult" ? 5 : 6;
  // La condicion diagnostica oficial solo cuenta inatencion o hiperactividad/impulsividad
  const meetsThreshold =
    inattentiveCount >= symptomThreshold ||
    hyperactiveCount >= symptomThreshold;
  // Los sintomas ejecutivos se muestran como informacion de apoyo clinico
  const hasSupportingSymptoms = executiveCount > 0;
  const showReferralPrompt = meetsThreshold && impairmentConfirmed && childhoodOnset;

  return (
    <StepGuideLayout
      title="Cómo se diagnostica el TDAH"
      description="Autoevaluación, consulta clínica y próximos pasos"
      steps={steps}
      currentStep={currentStep}
      progress={progress}
      completedCount={completedCount}
      onSelectStep={goTo}
      isStepDone={isDone}
    >
      <Card className="bg-card border md:min-h-[560px]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${activeAccent}`}
            >
              <ActiveIcon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-xl">{activeStep.title}</CardTitle>
              <CardDescription>{activeStep.subtitle}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <>
              <div className="rounded-lg border bg-muted/40 p-4">
                <p className="mb-3 text-sm font-medium">
                  Edad para interpretar el umbral
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={ageGroup === "adult" ? "default" : "outline"}
                    onClick={() => setAgeGroup("adult")}
                  >
                    17 años o más
                  </Button>
                  <Button
                    variant={ageGroup === "minor" ? "default" : "outline"}
                    onClick={() => setAgeGroup("minor")}
                  >
                    Menos de 17
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  En adultos se evalúan 5 o más síntomas. En menores, 6 o más.
                  Esto orienta, no diagnostica.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <ChecklistGroup
                  title="Inatención"
                  count={inattentiveCount}
                  total={inattentiveSymptoms.length}
                  items={inattentiveSymptoms}
                  selected={selectedSymptoms}
                  onToggle={toggleSymptom}
                  onClear={() =>
                    clearGroup(inattentiveSymptoms.map((symptom) => symptom.id))
                  }
                />
                <ChecklistGroup
                  title="Hiperactividad"
                  count={hyperactiveCount}
                  total={hyperactiveSymptoms.length}
                  items={hyperactiveSymptoms}
                  selected={selectedSymptoms}
                  onToggle={toggleSymptom}
                  onClear={() =>
                    clearGroup(hyperactiveSymptoms.map((symptom) => symptom.id))
                  }
                />
                <ChecklistGroup
                  title="Ejecutivo y emocional"
                  count={executiveCount}
                  total={executiveSymptoms.length}
                  items={executiveSymptoms}
                  selected={selectedSymptoms}
                  onToggle={toggleSymptom}
                  onClear={() =>
                    clearGroup(executiveSymptoms.map((symptom) => symptom.id))
                  }
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-lg border bg-muted/40 p-4">
                <Checkbox
                  checked={impairmentConfirmed}
                  onCheckedChange={(checked) =>
                    setImpairmentConfirmed(checked === true)
                  }
                  className="mt-1"
                />
                <span className="text-sm">
                  Estos síntomas afectan mi funcionamiento social, académico o
                  laboral en al menos dos ámbitos.
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-3 rounded-lg border bg-muted/40 p-4">
                <Checkbox
                  checked={childhoodOnset}
                  onCheckedChange={(checked) =>
                    setChildhoodOnset(checked === true)
                  }
                  className="mt-1"
                />
                <span className="text-sm">
                  Varios de estos síntomas (u otros similares) ya estaban presentes antes de mis 12 años.
                </span>
              </label>

              <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
                {showReferralPrompt ? (
                  <strong className="text-foreground">
                    Marcaste un patrón compatible.
                    {hasSupportingSymptoms && " Los síntomas ejecutivos/emocionales apoyan el perfil clínico."} Si los síntomas llevan más de
                    6 meses y no se explican mejor por otro cuadro, pedí evaluación clínica.
                  </strong>
                ) : (
                  <span>
                    Umbral orientativo: {symptomThreshold}+ síntomas en
                    inatención o hiperactividad, presentes por más de 6 meses,
                    inicio antes de los 12 años e impacto funcional.
                  </span>
                )}
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="¿Quién diagnostica?"
                  items={[
                    "El diagnóstico del TDAH solo puede ser realizado por un médico psiquiatra, neurólogo o un psicólogo con entrenamiento en la evaluación clínica del trastorno.",
                    "Evalúa diagnóstico clínico, comorbilidades y puede indicar medicación si corresponde.",
                    "Puede emitir receta oficial para estimulantes cuando es necesario.",
                  ]}
                />
                <InfoCard
                  title="¿Cómo se diagnostica?"
                  items={[
                    "El diagnóstico es 100% clínico, basado en entrevistas detalladas sobre la historia del paciente y el impacto en su vida.",
                    "Síntomas persistentes, no solo una etapa de estrés.",
                    "Impacto claro en al menos dos áreas de la vida.",
                  ]}
                />
                <InfoCard
                  title="Derribar mitos"
                  items={[
                    "El TDAH no puede ser diagnosticado solamente mediante escalas de síntomas, evaluaciones neuropsicológicas, pruebas de laboratorio o métodos de imágenes cerebrales (resonancias, electros, etc.).",
                    "Las pruebas de atención (como el Test de Stroop o CPT) son solo un complemento para objetivar datos, no hacen el diagnóstico definitivo.",
                    "No siempre es obligatorio realizar neuropsicología para diagnosticar TDAH.",
                  ]}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="Escalas en Argentina"
                  items={[
                    "DIVA-5: entrevista estructurada disponible en español, de uso muy frecuente para ordenar la evaluación.",
                    "ASRS: escala de autoinforme validada en Buenos Aires para evaluar síntomas actuales.",
                    "WURS-25: escala de autoinforme para evaluar si los síntomas ya estaban presentes en la infancia.",
                  ]}
                />
                <InfoCard
                  title="Psicólogo clínico"
                  items={[
                    "Evalúa funcionamiento, historia y síntomas con entrevistas estructuradas.",
                    "Puede usar escalas y entrevistas estructuradas.",
                    "Puede derivar a evaluación médica si hace falta.",
                  ]}
                />
                <InfoCard
                  title="Qué descartar"
                  items={[
                    "Ansiedad, depresión, bipolaridad y consumo problemático.",
                    "Problemas de sueño o condiciones médicas relevantes.",
                    "Efectos de medicación u otras sustancias.",
                  ]}
                />
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Documentos"
                items={[
                  "Boletines o informes escolares de la escuela primaria y secundaria, para demostrar que los síntomas o el bajo rendimiento existían antes de los 12 años.",
                  "Historia familiar de primer grado (padres, hermanos): indague si hay TDAH, depresión, bipolaridad, problemas de ansiedad, consumo de sustancias o tics. El TDAH es altamente heredable y la comorbilidad psiquiátrica es la norma y no la excepción.",
                  "Registros médicos sobre problemas de sueño (muy prevalentes, presentes en el 80% de los adultos con TDAH), asma, obesidad o problemas tiroideos, que sirven para descartar otras patologías que imitan al TDAH.",
                ]}
              />
              <InfoCard
                title="Ejemplos concretos"
                items={[
                  "Ejemplos fechados de olvidos, demoras, impulsividad o desorganización.",
                  "Impacto en estudio, trabajo, vínculos, dinero o manejo diario.",
                  "Qué intentaste para manejarlo y con qué resultado.",
                ]}
              />
              <InfoCard
                title="Preguntas para hacer"
                items={[
                  "Si evalúa TDAH adulto con frecuencia.",
                  "Qué criterios y escalas usa para ordenar la evaluación.",
                  "Cómo revisa comorbilidades y seguimiento después del diagnóstico.",
                ]}
              />
            </div>
          )}

          {currentStep === 4 && (
            <>
              <div className="grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="Plan clínico"
                  items={[
                    "Puede incluir psicoeducación, terapia, medicación o ajustes de rutina.",
                    "La prioridad depende de síntomas, comorbilidades, objetivos y acceso.",
                    "El diagnóstico no define por sí solo una única intervención.",
                  ]}
                />
                <InfoCard
                  title="Seguimiento"
                  items={[
                    "Registrar respuesta, efectos adversos, sueño y funcionamiento.",
                    "Ajustar dosis o estrategia con controles, no por cuenta propia.",
                    "Revisar ansiedad, ánimo, consumo y salud física durante el proceso.",
                  ]}
                />
                <InfoCard
                  title="Marco local"
                  items={[
                    "Lisdexanfetamina y metilfenidato son Psicotrópicos Lista II.",
                    "En farmacia requieren receta física oficial por triplicado.",
                    "El CUD no es una vía habitual para TDAH; solo aplica si una junta certifica discapacidad funcional.",
                  ]}
                />
              </div>

              <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
                En adultos, el TDAH puede aparecer como desorganización,
                inquietud interna, impulsividad, procrastinación y regulación
                emocional difícil, más que como hiperactividad visible.
              </div>
            </>
          )}
        </CardContent>

        <div className="flex items-center justify-between border-t p-4 sm:p-6">
          <Button variant="outline" onClick={prev} disabled={currentStep === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentStep} de {steps.length}
          </span>
          {currentStep === steps.length ? (
            <Button asChild>
              <Link href="/especialistas">
                Buscar especialistas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button onClick={next}>
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {currentStep === steps.length && (
          <div className="flex flex-wrap justify-center gap-3 border-t px-6 pb-6 pt-4">
            <Button variant="outline" asChild>
              <Link href="/tratamientos">Ver tratamientos</Link>
            </Button>
          </div>
        )}
      </Card>

      <References references={diagnosticoReferences} />
    </StepGuideLayout>
  );
}

const diagnosticoReferences: Reference[] = [
  {
    id: 1,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Primera parte",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-1.pdf",
    description: "Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Segunda parte",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description: "Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
  {
    id: 3,
    title: "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description: "Marco de evidencia internacional sobre diagnóstico y evaluación del TDAH.",
    year: "2021",
  },
];
