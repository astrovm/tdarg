"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Pill,
  Brain,
  Heart,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Cómo funciona",
    subtitle: "El tratamiento paso a paso",
    icon: Brain,
  },
  {
    id: 2,
    title: "Medicamentos",
    subtitle: "Opciones farmacológicas",
    icon: Pill,
  },
  { id: 3, title: "Terapias", subtitle: "Apoyo psicológico", icon: Users },
  { id: 4, title: "Ejercicio", subtitle: "Actividad física", icon: Heart },
  { id: 5, title: "Mi plan", subtitle: "Plan personalizado", icon: Target },
] satisfies StepDefinition[];

type CaddraMedication = {
  name: string;
  group: string;
  forms: string;
  duration: string;
  caddraLine: string;
  argentina: string;
  localNote: string;
  recetaNote?: string;
};

const caddraMedicationMap: CaddraMedication[] = [
  {
    name: "Vyvanse / Ludoxa",
    group: "Lisdexanfetamina",
    forms: "Cápsulas 10, 20, 30, 40, 50, 60, 70 mg; masticables 10-60 mg",
    duration: "~13-14 h",
    caddraLine: "Primera línea",
    argentina: "Disponible como Ludoxa",
    localNote: "Ludoxa 30, 50 y 70 mg. Nueva; cobertura todavía limitada.",
    recetaNote:
      "Requiere receta física oficial por triplicado (Psicotrópico Lista II). No sirve receta digital.",
  },
  {
    name: "Concerta / Consiv",
    group: "Metilfenidato OROS",
    forms: "Comprimidos de liberación prolongada 18, 27, 36, 54 mg",
    duration: "~12 h",
    caddraLine: "Primera línea",
    argentina: "Disponible",
    localNote: "Hay metilfenidato OROS: Concerta y Consiv.",
    recetaNote:
      "Requiere receta física oficial por triplicado (Psicotrópico Lista II). No sirve receta digital.",
  },
  {
    name: "Ritalina / Rubifen",
    group: "Metilfenidato IR/SR",
    forms: "Comprimidos 5 mg genérico; 10, 20 mg",
    duration: "~3-4 h",
    caddraLine: "Segunda línea",
    argentina: "Disponible",
    localNote: "Disponible en formulaciones IR/SR/LA según marca y stock.",
    recetaNote:
      "Requiere receta física oficial por triplicado (Psicotrópico Lista II). No sirve receta digital.",
  },
  {
    name: "Atomoxetina",
    group: "No estimulante",
    forms: "Cápsulas 10, 18, 25, 40, 60, 80, 100 mg",
    duration: "Hasta 24 h",
    caddraLine: "Segunda línea",
    argentina: "Disponible",
    localNote: "No es estimulante; inicio de efecto más lento.",
    recetaNote:
      "No es Lista II: suele ser más simple de prescribir y conseguir. Tarda semanas en hacer efecto.",
  },
  {
    name: "Bupropión",
    group: "Antidepresivo dopaminérgico",
    forms: "Comprimidos de liberación prolongada según marca local",
    duration: "24 h",
    caddraLine: "Tercera línea / off-label",
    argentina: "Disponible",
    localNote:
      "Opción fuera de etiqueta cuando hay depresión comórbida, tabaquismo, alto costo o mala tolerancia a estimulantes.",
  },
  {
    name: "Clonidina",
    group: "Agonista alfa-2",
    forms: "Receta magistral según indicación médica",
    duration: "Variable",
    caddraLine: "Tercera línea / off-label",
    argentina: "Magistral",
    localNote:
      "Puede considerarse si hay tics, Tourette, agresividad severa o problemas de sueño. Requiere seguimiento médico.",
  },
];

export default function TratamientosPage() {
  const {
    currentStep,
    progress,
    completedCount,
    goTo,
    next,
    prev,
    isDone,
  } = useStepProgress({ totalSteps: steps.length });

  return (
    <StepGuideLayout
      title="Tratamientos para TDAH"
      description="Mirá estas opciones para entender cómo se trata el TDAH"
      steps={steps}
      currentStep={currentStep}
      progress={progress}
      completedCount={completedCount}
      onSelectStep={goTo}
      isStepDone={isDone}
    >
      <div className="min-h-[500px]">
          {/* Step 1: How Treatment Works */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8 text-blue-500" />
                    ¿Cómo funciona el tratamiento?
                  </CardTitle>

                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg border">
                      <div className="text-6xl mb-4">💊</div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
                        Medicación
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Puede reducir síntomas nucleares como inatención,
                        impulsividad e hiperactividad
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Mayor respuesta promedio con estimulantes</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Inicio rápido en formulaciones inmediatas</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Base científica sólida</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg border">
                      <div className="text-6xl mb-4">🧠</div>
                      <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">
                        Terapia
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Enseña habilidades para manejar síntomas y situaciones
                        difíciles
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Habilidades para toda la vida</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Mejora autoestima</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Reduce ansiedad/depresión</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg border">
                      <div className="text-6xl mb-4">💪</div>
                      <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-300">
                        Estilo de Vida
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ejercicio, sueño y organización potencian el tratamiento
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>
                            Puede mejorar atención y regulación
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Sueño reparador esencial</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>Organización reduce estrés</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert className="mb-6">
                    <Target className="h-4 w-4" />
                    <AlertDescription>
                      El abordaje suele combinar medicación, herramientas
                      psicológicas y cambios de rutina. La proporción depende
                      del perfil clínico, comorbilidades, tolerancia y acceso.
                    </AlertDescription>
                  </Alert>

                  <div className="text-center">
                    <Button onClick={next} size="lg">
                      Siguiente: Medicamentos{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 2: Medications */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Pill className="h-8 w-8 text-green-500" />
                    Medicamentos para TDAH
                  </CardTitle>
                  <CardDescription>
                    Opciones locales y comparación con CADDRA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30">
                    <AlertDescription>
                      <strong>El mito de las vacaciones terapéuticas:</strong>{" "}
                      en Argentina es común suspender medicación fines de semana
                      o verano. El TDAH afecta todos los días, no solo para
                      estudiar o trabajar. Suspender sin indicación médica puede
                      aumentar riesgo de accidentes, peleas y consumo de alcohol
                      o drogas.
                    </AlertDescription>
                  </Alert>

                  {/* Effectiveness Stats */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        1ra
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        línea internacional
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        5
                      </div>
                      <div className="text-sm text-blue-700 dark:text-blue-300">
                        principios activos locales
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-1">
                        6
                      </div>
                      <div className="text-sm text-purple-700 dark:text-purple-300">
                        opciones reales en Argentina
                      </div>
                    </div>
                  </div>

                  {/* Medication Options */}
                  <div className="space-y-6">
                    {/* Stimulants */}
                    <div className="border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="h-6 w-6 text-green-500" />
                        <h3 className="text-xl font-semibold">
                          Estimulantes (Primera línea)
                        </h3>
                        <Badge variant="default">Más efectivos</Badge>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-3">
                          Estimulantes disponibles en Argentina
                        </h4>

                        <div className="mb-6">
                          <h5 className="font-semibold text-sm mb-2 text-green-800 dark:text-green-200">Metilfenidato (Ritalin, Concerta)</h5>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <h6 className="font-semibold text-sm mb-2 text-green-700 dark:text-green-300">
                                ✅ Ventajas
                              </h6>
                              <ul className="text-sm space-y-1">
                                <li>• Primera línea en guías internacionales</li>
                                <li>• Inicio rápido en formulaciones IR</li>
                                <li>• Múltiples formulaciones locales</li>
                                <li>• Mucha experiencia clínica acumulada</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-300">
                                ⚠️ Posibles efectos adversos
                              </h6>
                              <p className="text-xs text-muted-foreground mb-2">Pueden ocurrir en algunos casos, no en todos. Generalmente leves y transitorios.</p>
                              <ul className="text-sm space-y-1">
                                <li>• Menos apetito al mediodía</li>
                                <li>• Algo de dificultad para dormirse</li>
                                <li>• Dolor de cabeza leve</li>
                                <li>• Irritabilidad al inicio</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-semibold text-sm mb-2 text-red-700 dark:text-red-300">
                                📋 Regulación
                              </h6>
                              <ul className="text-sm space-y-1">
                                <li>• Psicotrópico con circuito controlado</li>
                                <li>• En la práctica puede requerir papel</li>
                                <li>• Cobertura y stock varían por farmacia</li>
                                <li>• Ver precios locales actualizados</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-sm mb-2 text-green-800 dark:text-green-200">Lisdexanfetamina (Ludoxa 30/50/70 mg)</h5>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <h6 className="font-semibold text-sm mb-2 text-green-700 dark:text-green-300">
                                ✅ Ventajas
                              </h6>
                              <ul className="text-sm space-y-1">
                                <li>• Prodroga (menor potencial de abuso)</li>
                                <li>• Acción sostenida según guía CADDRA</li>
                                <li>• Una sola toma diaria</li>
                                <li>• Alternativa ante intolerancia a metilfenidato</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-300">
                                ⚠️ Posibles efectos adversos
                              </h6>
                              <p className="text-xs text-muted-foreground mb-2">Pueden ocurrir en algunos casos, no en todos. Generalmente leves y transitorios.</p>
                              <ul className="text-sm space-y-1">
                                <li>• Menos apetito al mediodía</li>
                                <li>• Algo de dificultad para dormirse</li>
                                <li>• Dolor de cabeza</li>
                                <li>• Boca seca</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-semibold text-sm mb-2 text-red-700 dark:text-red-300">
                                📋 Regulación
                              </h6>
                              <ul className="text-sm space-y-1">
                                <li>• Psicotrópico con circuito controlado</li>
                                <li>• En la práctica puede requerir papel</li>
                                <li>• Disponible desde 2026</li>
                                <li>• Cobertura todavía limitada</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-slate-300 dark:border-slate-700 rounded-lg p-6">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">
                            Mapa CADDRA: todos los medicamentos de la guía
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Guía canadiense traducida y adaptada para comparar
                            disponibilidad local. No reemplaza indicación médica
                            ni prospectos argentinos.
                          </p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://www.caddra.ca/wp-content/uploads/CADDRA_ADHD-Medication-Chart_May2026-EN-FR.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ver fuente CADDRA
                          </a>
                        </Button>
                      </div>

                      <div className="hidden rounded-md border md:block">
                        <Table className="table-fixed text-xs">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[13%] whitespace-normal">
                                Medicamento
                              </TableHead>
                              <TableHead className="w-[12%] whitespace-normal">
                                Tipo
                              </TableHead>
                              <TableHead className="w-[20%] whitespace-normal">
                                Presentaciones CADDRA
                              </TableHead>
                              <TableHead className="w-[10%] whitespace-normal">
                                Duración
                              </TableHead>
                              <TableHead className="w-[13%] whitespace-normal">
                                Línea CADDRA
                              </TableHead>
                              <TableHead className="w-[13%] whitespace-normal">
                                Argentina
                              </TableHead>
                              <TableHead className="w-[19%] whitespace-normal">
                                Nota local
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {caddraMedicationMap.map((medication) => {
                              const isAvailable =
                                medication.argentina === "Disponible" ||
                                medication.argentina.startsWith("Disponible ");

                              return (
                                <TableRow key={medication.name}>
                                  <TableCell className="font-semibold align-top">
                                    {medication.name}
                                  </TableCell>
                                  <TableCell className="align-top">
                                    {medication.group}
                                  </TableCell>
                                  <TableCell className="align-top text-muted-foreground">
                                    {medication.forms}
                                  </TableCell>
                                  <TableCell className="align-top">
                                    {medication.duration}
                                  </TableCell>
                                  <TableCell className="align-top">
                                    {medication.caddraLine}
                                  </TableCell>
                                  <TableCell className="align-top">
                                    <Badge
                                      variant={
                                        isAvailable ? "default" : "secondary"
                                      }
                                    >
                                      {medication.argentina}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="align-top">
                                    <div>{medication.localNote}</div>
                                    {medication.recetaNote && (
                                      <div className="mt-2 rounded-md border border-amber-200 bg-amber-50 p-2 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                                        {medication.recetaNote}
                                      </div>
                                    )}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>

                      <div className="space-y-3 md:hidden">
                        {caddraMedicationMap.map((medication) => {
                          const isAvailable =
                            medication.argentina === "Disponible" ||
                            medication.argentina.startsWith("Disponible ");

                          return (
                            <div
                              key={medication.name}
                              className="rounded-md border p-3"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="font-semibold">
                                    {medication.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {medication.group}
                                  </p>
                                </div>
                                <Badge
                                  variant={isAvailable ? "default" : "secondary"}
                                  className="shrink-0"
                                >
                                  {medication.argentina}
                                </Badge>
                              </div>

                              <dl className="mt-3 grid gap-2 text-xs">
                                <div>
                                  <dt className="font-semibold">
                                    Presentaciones CADDRA
                                  </dt>
                                  <dd className="text-muted-foreground">
                                    {medication.forms}
                                  </dd>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <dt className="font-semibold">Duración</dt>
                                    <dd className="text-muted-foreground">
                                      {medication.duration}
                                    </dd>
                                  </div>
                                  <div>
                                    <dt className="font-semibold">
                                      Línea CADDRA
                                    </dt>
                                    <dd className="text-muted-foreground">
                                      {medication.caddraLine}
                                    </dd>
                                  </div>
                                </div>
                                <div>
                                  <dt className="font-semibold">Nota local</dt>
                                  <dd className="text-muted-foreground">
                                    {medication.localNote}
                                  </dd>
                                </div>
                                {medication.recetaNote && (
                                  <div className="rounded-md border border-amber-200 bg-amber-50 p-2 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                                    <dt className="font-semibold">
                                      Receta / farmacia
                                    </dt>
                                    <dd>{medication.recetaNote}</dd>
                                  </div>
                                )}
                              </dl>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-4 grid gap-3 md:grid-cols-3">
                        <div className="rounded-md border p-3">
                          <p className="text-sm font-semibold">
                            Lo fuerte de CADDRA
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Prioriza estimulantes de larga duración como primera
                            línea cuando están aprobados para la edad del
                            paciente.
                          </p>
                        </div>
                        <div className="rounded-md border p-3">
                          <p className="text-sm font-semibold">
                            Brecha Argentina
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            El mapa muestra solo fármacos que podés conseguir:
                            estimulantes, atomoxetina y opciones off-label.
                          </p>
                        </div>
                        <div className="rounded-md border p-3">
                          <p className="text-sm font-semibold">
                            Seguridad y abuso
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            CADDRA marca que formulaciones estimulantes largas
                            tienden a menor potencial de abuso que las cortas;
                            no estimulantes no tienen potencial de abuso.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Non-stimulants */}
                    <div className="border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-6 w-6 text-blue-500" />
                        <h3 className="text-xl font-semibold">
                          No estimulantes disponibles
                        </h3>
                        <Badge variant="secondary">Alternativa</Badge>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Atomoxetina</h4>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">
                              Cuándo considerar:
                            </h5>
                            <ul className="text-sm space-y-1">
                              <li>• Intolerancia a estimulantes</li>
                              <li>• Comorbilidad con tics</li>
                              <li>• Antecedentes de uso problemático</li>
                              <li>• Ansiedad severa coexistente</li>
                              <li>• Preferencia del paciente</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm mb-2">
                              Características:
                            </h5>
                            <ul className="text-sm space-y-1">
                              <li>
                                • <strong>Ventaja:</strong> Sin potencial de abuso
                              </li>
                              <li>
                                • <strong>Ventaja:</strong> Efecto 24 horas
                              </li>
                              <li>
                                • <strong>Desventaja:</strong> Inicio lento (4-6
                                sem)
                              </li>
                              <li>
                                • <strong>Desventaja:</strong> Menor eficacia
                              </li>
                              <li>
                                • <strong>Nota:</strong> Puede ser útil si hay ansiedad
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button onClick={next} size="lg" className="mr-4">
                      Siguiente: Terapias{" "}
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

          {/* Step 3: Therapies */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Users className="h-8 w-8 text-purple-500" />
                    Terapias No Farmacológicas
                  </CardTitle>

                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
                    <AlertDescription>
                      <strong>No cualquier terapia sirve:</strong> no gastes
                      tiempo y dinero en terapias que solo indagan en tu
                      infancia. La evidencia científica exige Terapia
                      Cognitivo-Conductual (TCC): entrena funciones ejecutivas,
                      organización y control de impulsos.
                    </AlertDescription>
                  </Alert>

                  {/* Therapy Flow */}
                  <div className="mb-8 p-6 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <h3 className="text-center text-lg font-semibold mb-4">
                      ¿Por qué la terapia es esencial?
                    </h3>
                    <div className="flex items-center justify-center">
                      <div className="text-center max-w-2xl">
                        <p className="text-sm mb-4">
                          La medicación puede reducir síntomas, pero{" "}
                          <strong>no reemplaza habilidades prácticas</strong>.
                          La terapia ayuda a intervenir en este ciclo:
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 rounded">
                            Fracasos
                          </span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded">
                            Creencias negativas
                          </span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 rounded">
                            Emociones intensas
                          </span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 rounded">
                            Evitación
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Therapy Types */}
                  <div className="space-y-6">
                    {/* CBT */}
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Terapia Cognitivo-Conductual (TCC)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">
                            Qué incluye:
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong className="text-sm">
                                  Psicoeducación
                                </strong>
                                <p className="text-xs text-muted-foreground">
                                  Entender qué es el TDAH y cómo afecta
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong className="text-sm">
                                  Reestructuración cognitiva
                                </strong>
                                <p className="text-xs text-muted-foreground">
                                  Cambiar pensamientos negativos automáticos
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong className="text-sm">
                                  Técnicas conductuales
                                </strong>
                                <p className="text-xs text-muted-foreground">
                                  Estrategias prácticas para síntomas
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">
                            Beneficios esperados:
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <strong>Autoestima:</strong> Mejora
                              significativa
                            </li>
                            <li>
                              • <strong>Ansiedad/Depresión:</strong> Reducción
                              notable
                            </li>
                            <li>
                              • <strong>Funcionamiento:</strong> Mejor
                              trabajo/relaciones
                            </li>
                            <li>
                              • <strong>Adherencia:</strong> Mayor cumplimiento
                              medicación
                            </li>
                            <li>
                              • <strong>Habilidades:</strong> Estrategias para
                              toda la vida
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Skills Training */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Entrenamiento en Habilidades
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">
                            📋 Organización
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• Uso efectivo de agendas</li>
                            <li>• Sistemas de listas y recordatorios</li>
                            <li>• Organización espacios físicos</li>
                            <li>• División tareas complejas</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">
                            🎯 Gestión Atención
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• Minimización distracciones</li>
                            <li>• Períodos trabajo concentrado</li>
                            <li>• Estrategias refocalización</li>
                            <li>• Ambiente optimizado</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">
                            💜 Regulación Emocional
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• Identificación emociones</li>
                            <li>• Técnicas relajación</li>
                            <li>• Manejo frustración</li>
                            <li>• Estrategias afrontamiento</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Family Support */}
                    <div className="border-l-4 border-orange-500 pl-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Apoyo Familiar y Social
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">
                            👨‍👩‍👧‍👦 Para la Familia
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• Educación sobre TDAH</li>
                            <li>• Estrategias comunicación</li>
                            <li>• Manejo conflictos</li>
                            <li>• Apoyo emocional mutuo</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">
                            💼 Entorno Laboral/Académico
                          </h4>
                          <ul className="text-xs space-y-1">
                            <li>• Adaptaciones ambientales</li>
                            <li>• Comunicación supervisores</li>
                            <li>• Estrategias productividad</li>
                            <li>• Manejo estrés laboral</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button onClick={next} size="lg" className="mr-4">
                      Siguiente: Ejercicio{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Exercise */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Card className="border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Heart className="h-8 w-8 text-red-500" />
                    Ejercicio y rutina
                  </CardTitle>

                </CardHeader>
                <CardContent>
                  {/* Impact Stats */}
                  <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        20-30
                      </div>
                      <div className="text-xs text-green-700 dark:text-green-300">
                        minutos
                      </div>
                      <div className="text-xs text-muted-foreground">
                        punto de partida
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        Diario
                      </div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">
                        mejor que intenso
                      </div>
                      <div className="text-xs text-muted-foreground">
                        y esporádico
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        Aeróbico
                      </div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">
                        suele ser útil
                      </div>
                      <div className="text-xs text-muted-foreground">
                        para foco/ánimo
                      </div>
                    </div>
                    <div className="text-center p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        Ajustar
                      </div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">
                        a cada persona
                      </div>
                      <div className="text-xs text-muted-foreground">
                        sueño, lesiones, medicación
                      </div>
                    </div>
                  </div>

                  {/* Exercise Types */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center mb-6">
                      Tipos de ejercicio más efectivos
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="border-green-200 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <div className="text-2xl">🏃</div>
                          Ejercicio aeróbico
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                              <p className="text-sm font-semibold">
                                Punto de partida:
                              </p>
                              <p className="text-sm">20-30 min, intensidad tolerable</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-2">
                                Actividades:
                              </p>
                              <ul className="text-sm space-y-1">
                                <li>• Correr / trotar</li>
                                <li>• Caminar rápido</li>
                                <li>• Bicicleta</li>
                                <li>• Natación</li>
                              </ul>
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-xs">
                                <strong>Potencia:</strong> Enfoque y motivación
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200 dark:border-blue-800">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <div className="text-2xl">⚖️</div>
                            Equilibrio y coordinación
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-sm font-semibold">
                                Útil para:
                              </p>
                              <p className="text-sm">control corporal y constancia</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-2">
                                Actividades:
                              </p>
                              <ul className="text-sm space-y-1">
                                <li>• Yoga</li>
                                <li>• Pilates</li>
                                <li>• BOSU ball</li>
                                <li>• Wobble board</li>
                              </ul>
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-xs">
                                <strong>Potencia:</strong> Coordinación cerebelo
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200 dark:border-purple-800">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <div className="text-2xl">🥊</div>
                            Deportes con reacción
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                              <p className="text-sm font-semibold">
                                Característica:
                              </p>
                              <p className="text-sm">
                                Reacción rápida + estrategia
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-2">
                                Actividades:
                              </p>
                              <ul className="text-sm space-y-1">
                                <li>• Tenis / ping-pong</li>
                                <li>• Artes marciales</li>
                                <li>• Basketball</li>
                                <li>• Esgrima</li>
                              </ul>
                            </div>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                              <p className="text-xs">
                                <strong>Potencia:</strong> Autocontrol y
                                disciplina
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-8 p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold mb-4 text-center text-green-800 dark:text-green-200">
                      Qué puede aportar el ejercicio
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-600 mb-1">
                          Función ejecutiva
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Apoyo a planificación</li>
                          <li>• Mejor transición entre tareas</li>
                          <li>• Menos impulsividad en algunos casos</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-600 mb-1">
                          Atención
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Puede facilitar foco posterior</li>
                          <li>• Ayuda a descargar inquietud</li>
                          <li>• Complementa, no reemplaza tratamiento</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-600 mb-1">
                          Estado de ánimo
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Puede bajar ansiedad</li>
                          <li>• Mejora sueño si no se hace tarde</li>
                          <li>• Refuerza sensación de control</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button onClick={next} size="lg" className="mr-4">
                      Siguiente: Mi plan <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 5: My Treatment Plan */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Target className="h-8 w-8 text-orange-500" />
                    Armá tu plan de tratamiento
                  </CardTitle>
                  <CardDescription>
                    Cada plan es distinto: acá tenés las piezas para armar el tuyo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Treatment Building Blocks */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-center mb-6">
                      Componentes de un plan exitoso
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 border-2 border-dashed border-green-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">💊</div>
                        <h4 className="font-semibold text-sm mb-2">
                          Medicación base
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Estimulante o no estimulante según tu perfil
                        </p>
                      </div>

                      <div className="p-4 border-2 border-dashed border-purple-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">🧠</div>
                        <h4 className="font-semibold text-sm mb-2">
                          TCC especializada
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          12-16 sesiones enfocadas en TDAH
                        </p>
                      </div>

                      <div className="p-4 border-2 border-dashed border-red-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">🏃</div>
                        <h4 className="font-semibold text-sm mb-2">
                          Ejercicio diario
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          20+ min, preferible aeróbico
                        </p>
                      </div>

                      <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg text-center">
                        <div className="text-3xl mb-2">👥</div>
                        <h4 className="font-semibold text-sm mb-2">
                          Apoyo social
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Familia, grupos, adaptaciones
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Personalization Factors */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center">
                      Factores de personalización
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">
                            ¿Qué considerar para medicación?
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <strong>Primera opción:</strong> Estimulante
                              (metilfenidato o lisdexanfetamina)
                            </li>
                            <li>
                              <strong>Si hay:</strong> Tics → Atomoxetina
                            </li>
                            <li>
                              <strong>Si hay:</strong> Ansiedad severa →
                              Atomoxetina
                            </li>
                            <li>
                              <strong>Si hay:</strong> Historia abuso →
                              Atomoxetina
                            </li>
                            <li>
                              <strong>Si hay:</strong> Intolerancia → Cambiar
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">
                            ¿Qué tipo de terapia necesito?
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <strong>TCC individual:</strong> Síntomas
                              principales
                            </li>
                            <li>
                              <strong>Terapia familiar:</strong> Si hay
                              conflictos
                            </li>
                            <li>
                              <strong>Coaching TDAH:</strong> Habilidades
                              prácticas
                            </li>
                            <li>
                              <strong>Grupos apoyo:</strong> Motivación y tips
                            </li>
                            <li>
                              <strong>Terapia comorbilidades:</strong>{" "}
                              Ansiedad/depresión
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Action Steps */}
                  <div className="mt-8 p-6 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-center text-orange-800 dark:text-orange-200">
                      Próximos pasos recomendados
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">
                          Si ya tenés diagnóstico:
                        </h4>
                        <ol className="text-sm space-y-2">
                          <li>
                            1. <strong>Buscar psiquiatra especializado</strong>{" "}
                            en TDAH
                          </li>
                          <li>
                            2. <strong>Discutir opciones</strong> de medicación
                          </li>
                          <li>
                            3. <strong>Encontrar terapeuta</strong> TCC para
                            TDAH
                          </li>
                          <li>
                            4. <strong>Establecer rutina</strong> ejercicio
                            diario
                          </li>
                          <li>
                            5. <strong>Programar seguimientos</strong> regulares
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">
                          Si todavía no tenés diagnóstico:
                        </h4>
                        <ol className="text-sm space-y-2">
                          <li>
                            1. <strong>Hacer el cuestionario</strong> de
                            síntomas
                          </li>
                          <li>
                            2. <strong>Buscar profesional</strong> para
                            diagnóstico
                          </li>
                          <li>
                            3. <strong>Preparar documentación</strong>{" "}
                            (boletines, etc.)
                          </li>
                          <li>
                            4. <strong>Mientras tanto:</strong> Empezar
                            ejercicio
                          </li>
                          <li>
                            5. <strong>Informar familia/pareja</strong> sobre
                            TDAH
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <Alert className="mt-6">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>¡Terminaste el recorrido!</strong> Ahora
                      tenés la información necesaria para tomar decisiones
                      informadas sobre tu tratamiento. Acordate: el mejor
                      tratamiento es el que combina medicación, terapia y
                      cambios de estilo de vida.
                    </AlertDescription>
                  </Alert>

                  <div className="mt-8 text-center space-x-4">
                    <Button size="lg" asChild>
                      <Link href="/especialistas">Ver especialistas</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/precios">Ver Precios Medicamentos</Link>
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
    </StepGuideLayout>
  );
}
