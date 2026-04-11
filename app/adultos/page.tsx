"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  User,
  Heart,
  Clock,
  Zap,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import { CitationLink } from "@/components/citation-link";
import { References, type Reference } from "@/components/references";

const steps = [
  {
    id: 1,
    title: "¿Cómo cambia?",
    subtitle: "Evolución de síntomas",
    icon: Clock,
    description: "Cómo evolucionan los síntomas desde la infancia",
  },
  {
    id: 2,
    title: "¿Sos mujer?",
    subtitle: "Diagnóstico femenino",
    icon: User,
    description: "El TDAH en mujeres: subdiagnóstico sistemático",
  },
  {
    id: 3,
    title: "Mis síntomas",
    subtitle: "4 dimensiones",
    icon: Heart,
    description: "Las 4 dimensiones del TDAH adulto",
  },
  {
    id: 4,
    title: "Fenómenos especiales",
    subtitle: "Manifestaciones únicas",
    icon: Zap,
    description: "Hiperfoco y ciclos del TDAH",
  },
] satisfies StepDefinition[];

export default function AdultosPage() {
  const {
    currentStep,
    completedCount,
    next,
    prev,
    goTo,
    progress,
    isDone,
  } = useStepProgress({ totalSteps: steps.length });

  const activeStep = steps[currentStep - 1];
  const ActiveIcon = activeStep.icon;

  return (
    <StepGuideLayout
      title="TDAH en la Vida Adulta"
      description="Cómo se manifiesta el TDAH después de la infancia"
      steps={steps}
      currentStep={currentStep}
      progress={progress}
      completedCount={completedCount}
      onSelectStep={goTo}
      isStepDone={isDone}
    >
      <Card className="min-h-[600px]">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full">
              <ActiveIcon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-xl">{activeStep.title}</CardTitle>
              <CardDescription>{activeStep.description}</CardDescription>
            </div>
          </div>
        </CardHeader>

          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Realidad:</strong> Solo 1 de cada 6 jóvenes mantiene
                    todos los criterios a los 25 años
                    <CitationLink number={2} />, pero{" "}
                    <strong>aproximadamente la mitad</strong> sigue con
                    deterioro residual significativo.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        En la infancia
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          • <strong>Hiperactividad:</strong> Correr, saltar, no
                          quedarse quieto
                        </li>
                        <li>
                          • <strong>Impulsividad:</strong> Actuar sin pensar
                        </li>
                        <li>
                          • <strong>Inatención:</strong> No seguir instrucciones
                        </li>
                        <li>
                          • <strong>Emocional:</strong> Rabietas frecuentes
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">En la adultez</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          • <strong>Inquietud interna:</strong> Sensación de
                          motor interno
                        </li>
                        <li>
                          • <strong>Decisiones impulsivas:</strong> Cambios de
                          trabajo, compras
                        </li>
                        <li>
                          • <strong>Dificultades ejecutivas:</strong>{" "}
                          Organización, planificación
                        </li>
                        <li>
                          • <strong>Desregulación emocional:</strong> Reacciones
                          intensas
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <Alert className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/30">
                  <User className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Subdiagnóstico:</strong> En niñas la proporción es
                    4:1 (H:M), pero en adultos es solo 1.9:1. Muchas mujeres
                    reciben diagnóstico tardío (30-40 años).
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Manifestaciones típicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>Inatención predominante:</strong>{" "}
                          &quot;Soñar despierta&quot;
                        </li>
                        <li>
                          • <strong>Hiperactividad interna:</strong> Mente
                          acelerada
                        </li>
                        <li>
                          • <strong>Sensibilidad emocional:</strong> Reacciones
                          intensas
                        </li>
                        <li>
                          • <strong>Perfeccionismo paralizante</strong>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Consecuencias</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>Mayor depresión/ansiedad</strong>
                        </li>
                        <li>
                          • <strong>Baja autoestima crónica</strong>
                        </li>
                        <li>
                          • <strong>Autoculpa:</strong> &quot;Soy perezosa&quot;
                        </li>
                        <li>
                          • <strong>Diagnóstico tardío</strong>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Señales clave</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Lucha constante con organización</li>
                        <li>• Hipersensibilidad al rechazo</li>
                        <li>• Sensación de &quot;no dar la talla&quot;</li>
                        <li>• Emociones más intensas que otros</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      1. Hiperactividad → Inquietud
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Inquietud interna constante</li>
                      <li>• Impaciencia en reuniones</li>
                      <li>• Necesidad de movimiento sutil</li>
                      <li>• Dificultad para relajarse</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      2. Inatención → Desorganización
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Procrastinación crónica</li>
                      <li>• Proyectos sin terminar</li>
                      <li>• Olvido de compromisos</li>
                      <li>• Espacios caóticos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                      3. Impulsividad → Decisiones precipitadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Interrumpir conversaciones</li>
                      <li>• Cambios súbitos de trabajo</li>
                      <li>• Compras no planificadas</li>
                      <li>• Comentarios inapropiados</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Heart className="h-4 w-4 text-purple-500" />
                      4. Desregulación emocional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Cambios de humor rápidos</li>
                      <li>• Frustración desproporcionada</li>
                      <li>• Hipersensibilidad al rechazo</li>
                      <li>• Emociones abrumadoras</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
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
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                          <div className="text-xs font-semibold text-green-700 dark:text-green-300">
                            ✅ Ventajas
                          </div>
                          <div className="text-xs">
                            Productividad excepcional, aprendizaje acelerado
                          </div>
                        </div>
                        <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded">
                          <div className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                            ⚠️ Desventajas
                          </div>
                          <div className="text-xs">
                            Descuido de responsabilidades, agotamiento
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Clock className="h-4 w-4 text-purple-500" />
                        Ciclos de energía
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Alternancia entre alta y baja energía
                      </p>
                      <div className="space-y-2">
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded text-center">
                          <div className="text-xs font-semibold">
                            🔥 &quot;Encendido&quot;
                          </div>
                          <div className="text-xs">
                            Energía alta, múltiples proyectos
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-950 rounded text-center">
                          <div className="text-xs font-semibold">
                            😴 &quot;Apagado&quot;
                          </div>
                          <div className="text-xs">
                            Agotamiento, procrastinación
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Impacto estadístico
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg bg-red-50 dark:bg-red-950">
                        <div className="text-xl font-bold text-red-500 mb-1">
                          12%
                          <CitationLink number={2} />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ↓ Reducción empleo
                        </div>
                      </div>
                      <div className="text-center p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                        <div className="text-xl font-bold text-amber-500 mb-1">
                          34%
                          <CitationLink number={2} />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ↓ Reducción ingresos
                        </div>
                      </div>
                      <div className="text-center p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
                        <div className="text-xl font-bold text-blue-500 mb-1">
                          2x
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ↑ Rotación laboral
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>

          {/* Navigation */}
          <div className="flex justify-between items-center p-6 border-t">
            <Button
              variant="outline"
              onClick={prev}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </Button>

            <span className="text-sm text-muted-foreground">
              {currentStep} de {steps.length}
            </span>

            <Button onClick={next} className="flex items-center gap-2">
              {currentStep === steps.length ? "Finalizar" : "Siguiente"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <References references={adultosReferences} />
      </StepGuideLayout>
  );
}

const adultosReferences: Reference[] = [
  {
    id: 1,
    title:
      "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description:
      "Documento científico internacional que establece la prevalencia mundial del TDAH en adultos basada en metaanálisis.",
    year: "2021",
  },
  {
    id: 2,
    title:
      "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Edward M. Hallowell, John J. Ratey",
    url: "/adhd-2.0.pdf",
    description:
      "Análisis longitudinal sobre la persistencia del TDAH desde la adolescencia hasta la adultez.",
    year: "2021",
  },
];
