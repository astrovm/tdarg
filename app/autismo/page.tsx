"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Brain,
  Users,
  Eye,
  MessageCircle,
  Zap,
  Target,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import { References, type Reference } from "@/components/references";
import { CitationLink } from "@/components/citation-link";

const steps = [
  {
    id: 1,
    title: "¿Pueden coexistir?",
    subtitle: "Comorbilidad posible",
    icon: Brain,
    description: "Cómo TDAH y autismo pueden aparecer juntos",
  },
  {
    id: 2,
    title: "¿Cómo diferenciarlos?",
    subtitle: "Diagnóstico diferencial",
    icon: Eye,
    description: "Diferencias clave entre ambas condiciones",
  },
  {
    id: 3,
    title: "Señales importantes",
    subtitle: "Características distintivas",
    icon: Target,
    description: "Signos que pueden indicar presencia de ambos",
  },
  {
    id: 4,
    title: "Tratamiento dual",
    subtitle: "Abordaje conjunto",
    icon: Users,
    description: "Estrategias cuando coexisten ambas condiciones",
  },
] satisfies StepDefinition[];

const references: Reference[] = [
  {
    id: 1,
    title:
      "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-1.pdf",
    description:
      "Este consenso aborda la comorbilidad del TDAH con otros trastornos, incluyendo el Trastorno del Espectro Autista (TEA), y la importancia del diagnóstico diferencial.",
    year: "2020",
  },
];

export default function AutismoPage() {
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
      title="TDAH y Autismo (TEA)"
      description="Comprende la relación, diferencias y tratamiento cuando coexisten ambas condiciones"
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
                    <strong>DSM-5 Actualización:</strong> El TEA ya no es un
                    criterio de exclusión para el TDAH. Ambas condiciones pueden
                    coexistir
                    <CitationLink number={1} />.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Antes del DSM-5 (2013)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>
                          • El autismo <strong>excluía</strong> el diagnóstico
                          de TDAH
                        </li>
                        <li>• Solo se podía diagnosticar una condición</li>
                        <li>
                          • Muchos casos de TDAH quedaban sin diagnosticar
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Actualmente (DSM-5)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>Diagnóstico dual</strong> es posible
                        </li>
                        <li>• Evaluación independiente de cada condición</li>
                        <li>• Tratamiento específico para ambas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 dark:bg-blue-950">
                  <CardHeader>
                    <CardTitle className="text-base">
                      Estadísticas de comorbilidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        29.4%
                      </div>
                      <div className="text-xs">
                        Adolescentes masculinos con TDAH tienen TEA
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        50-70%
                      </div>
                      <div className="text-xs">
                        Personas con TEA tienen síntomas de TDAH
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        Común
                      </div>
                      <div className="text-xs">
                        La comorbilidad es frecuente
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Brain className="h-4 w-4 text-blue-500" />
                        TDAH
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>
                          <strong>Atención:</strong> Dificultades para mantener
                          el foco
                        </li>
                        <li>
                          <strong>Hiperactividad:</strong> Inquietud e
                          impulsividad
                        </li>
                        <li>
                          <strong>Flexibilidad:</strong> Puede cambiar de
                          actividad
                        </li>
                        <li>
                          <strong>Social:</strong> Dificultades por impulsividad
                        </li>
                        <li>
                          <strong>Comunicación:</strong> Interrumpe, habla mucho
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-4 w-4 text-purple-500" />
                        TEA (Autismo)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>
                          <strong>Atención:</strong> Hiperfoco en intereses
                          específicos
                        </li>
                        <li>
                          <strong>Comportamiento:</strong> Rutinas y rituales
                          rígidos
                        </li>
                        <li>
                          <strong>Flexibilidad:</strong> Dificultad para cambiar
                        </li>
                        <li>
                          <strong>Social:</strong> Dificultades en comunicación
                        </li>
                        <li>
                          <strong>Comunicación:</strong> Patrones atípicos
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Áreas de superposición (difíciles de diferenciar)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold mb-2">
                          Síntomas similares:
                        </h5>
                        <ul className="space-y-1">
                          <li>• Dificultades de atención</li>
                          <li>• Problemas de organización</li>
                          <li>• Impulsividad ocasional</li>
                          <li>• Sensibilidades sensoriales</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">
                          Diferencias clave:
                        </h5>
                        <ul className="space-y-1">
                          <li>
                            • <strong>TDAH:</strong> Síntomas variables según
                            contexto
                          </li>
                          <li>
                            • <strong>TEA:</strong> Patrones consistentes y
                            rígidos
                          </li>
                          <li>
                            • <strong>TDAH:</strong> Busca estimulación
                          </li>
                          <li>
                            • <strong>TEA:</strong> Prefiere predictibilidad
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/30">
                  <CardHeader>
                    <CardTitle className="text-base">
                      Señales de posible comorbilidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Estas señales pueden indicar la presencia de ambas
                      condiciones:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold mb-2">En la infancia:</h5>
                        <ul className="space-y-1">
                          <li>• Intereses intensos + desatención general</li>
                          <li>• Rutinas + comportamiento impulsivo</li>
                          <li>• Dificultades sociales complejas</li>
                          <li>• Sensibilidades sensoriales + hiperactividad</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">En la adultez:</h5>
                        <ul className="space-y-1">
                          <li>• Organización extremadamente difícil</li>
                          <li>• Hiperfoco alternado con dispersión</li>
                          <li>• Relaciones sociales muy complejas</li>
                          <li>• Sobrecarga sensorial + inquietud</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        Atención mixta
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Hiperfoco en intereses especiales</li>
                        <li>• Desatención en todo lo demás</li>
                        <li>• Dificultad para alternar foco</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-green-500" />
                        Comunicación atípica
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Habla mucho sobre intereses</li>
                        <li>• Interrumpe sin darse cuenta</li>
                        <li>• Dificultades en conversación</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-500" />
                        Comportamiento complejo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Rutinas interrumpidas por impulsos</li>
                        <li>• Estimulación sensorial buscada/evitada</li>
                        <li>• Regulación emocional muy difícil</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <Alert className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
                  <Users className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tratamiento integral:</strong> Cuando coexisten TDAH
                    y TEA, se requiere un abordaje especializado que considere
                    ambas condiciones simultáneamente.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Tratamiento del TDAH
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                          <h5 className="font-semibold text-sm mb-1">
                            Medicación
                          </h5>
                          <ul className="text-xs space-y-1">
                            <li>• Estimulantes pueden ser efectivos</li>
                            <li>• Requiere monitoreo cuidadoso</li>
                            <li>• Dosis puede necesitar ajuste</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                          <h5 className="font-semibold text-sm mb-1">
                            Intervenciones
                          </h5>
                          <ul className="text-xs space-y-1">
                            <li>• Entrenamiento en funciones ejecutivas</li>
                            <li>• Técnicas de organización</li>
                            <li>• Manejo de impulsividad</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Tratamiento del TEA
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded">
                          <h5 className="font-semibold text-sm mb-1">
                            Intervenciones especializadas
                          </h5>
                          <ul className="text-xs space-y-1">
                            <li>• Terapia de comunicación social</li>
                            <li>• Manejo de rutinas y transiciones</li>
                            <li>• Integración sensorial</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded">
                          <h5 className="font-semibold text-sm mb-1">
                            Apoyo estructurado
                          </h5>
                          <ul className="text-xs space-y-1">
                            <li>• Ambientes predecibles</li>
                            <li>• Comunicación clara y directa</li>
                            <li>• Apoyo para habilidades sociales</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Consideraciones especiales para comorbilidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold mb-2">Desafíos únicos:</h5>
                        <ul className="space-y-1">
                          <li>• Medicación puede afectar rutinas</li>
                          <li>• Impulsividad vs. necesidad de estructura</li>
                          <li>• Sobrecarga sensorial aumentada</li>
                          <li>• Comunicación terapéutica más compleja</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">
                          Estrategias integradas:
                        </h5>
                        <ul className="space-y-1">
                          <li>• Equipo multidisciplinario coordinado</li>
                          <li>• Adaptaciones ambientales específicas</li>
                          <li>• Planes de crisis personalizados</li>
                          <li>• Seguimiento familiar especializado</li>
                        </ul>
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

        <References references={references} />
    </StepGuideLayout>
  );
}
