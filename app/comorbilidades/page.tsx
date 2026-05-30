"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Brain,
  Heart,
  Activity,
  Zap,
  Users,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import { CitationLink } from "@/components/citation-link";
import { References, type Reference } from "@/components/references";

const steps = [
  { id: 1, title: "¿Qué son?", subtitle: "Definición y prevalencia", icon: Activity },
  { id: 2, title: "TDAH + Ansiedad", subtitle: "La comorbilidad más común", icon: Zap },
  { id: 3, title: "TDAH + Depresión", subtitle: "Relación compleja", icon: Brain },
  { id: 4, title: "TDAH + Autismo", subtitle: "Comorbilidad neurológica", icon: Heart },
  { id: 5, title: "Evaluación integral", subtitle: "Manejo y tratamiento", icon: Users },
] satisfies StepDefinition[];

export default function ComorbilidadesPage() {
  const { currentStep, completedCount, next, prev, goTo, progress, isDone } =
    useStepProgress({ totalSteps: steps.length });
  const activeStep = steps[currentStep - 1];
  const ActiveIcon = activeStep.icon;

  return (
    <StepGuideLayout
      title="TDAH y Comorbilidades"
      description="El TDAH raramente viene solo"
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
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <>
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardHeader><CardTitle className="text-base">¿Qué son las comorbilidades?</CardTitle></CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-3">El término <strong>comorbilidad</strong> describe condiciones que coexisten con el TDAH: no son causadas por él, pero se influyen mutuamente y complican tanto el diagnóstico como el tratamiento.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold mb-1">Tipos principales:</div>
                      <div>• Psiquiátricas: Ansiedad, depresión, bipolar</div>
                      <div>• Médicas: Diabetes, asma, obesidad</div>
                      <div>• Neurológicas: Autismo, epilepsia</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">¿Por qué son importantes?</div>
                      <div>• Complican el diagnóstico</div>
                      <div>• Afectan el tratamiento</div>
                      <div>• Empeoran el pronóstico</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription><strong>Realidad:</strong> Entre el 70% y 80% de las personas con TDAH desarrollan al menos una condición comórbida. La comorbilidad es la norma, no la excepción.<CitationLink number={1} /></AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">Comorbilidades psiquiátricas más frecuentes</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div className="flex justify-between"><span>Trastornos de Ansiedad</span><span className="font-bold">50-60%</span></div>
                    <div className="flex justify-between"><span>Trastornos del Sueño</span><span className="font-bold">50-70%</span></div>
                    <div className="flex justify-between"><span>Depresión Mayor</span><span className="font-bold">40-50%</span></div>
                    <div className="flex justify-between"><span>TEA (Autismo)</span><span className="font-bold">29.4%</span></div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">Comorbilidades médicas</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div className="flex justify-between"><span>Obesidad</span><span className="font-bold">3x riesgo</span></div>
                    <div className="flex justify-between"><span>Asma</span><span className="font-bold">45% ↑</span></div>
                    <div className="flex justify-between"><span>Diabetes Tipo 2</span><span className="font-bold">3x riesgo</span></div>
                    <div className="flex justify-between"><span>Demencia (adultos)</span><span className="font-bold">3.4x riesgo</span></div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/30">
                <Zap className="h-4 w-4" />
                <AlertDescription><strong>La más común:</strong> 50-60% de adultos con TDAH desarrollan trastornos de ansiedad. Las dificultades crónicas del TDAH generan preocupación constante.<CitationLink number={1} /></AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">¿Por qué ocurre?</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Las dificultades crónicas del TDAH generan preocupación</div>
                    <div>• Miedo al fracaso por experiencias pasadas</div>
                    <div>• Ansiedad anticipatoria por olvidos o errores</div>
                    <div>• Sobrecarga sensorial e hipervigilancia</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">Tratamiento recomendado</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                      <div className="font-semibold mb-1">✅ Recomendado</div>
                      <div>• Estimulantes o atomoxetina según severidad</div>
                      <div>• TCC para ambas condiciones</div>
                      <div>• Técnicas de relajación</div>
                    </div>
                    <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded">
                      <div className="font-semibold mb-1">⚠️ Precaución</div>
                      <div>• Estimulantes pueden aumentar ansiedad</div>
                      <div>• Monitoreo cuidadoso inicial</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="grid md:grid-cols-3 gap-3 mb-4 text-center">
                <div className="p-3 border rounded bg-blue-50 dark:bg-blue-950"><div className="text-2xl font-bold text-blue-500">40-50%</div><div className="text-xs">Prevalencia en adultos</div></div>
                <div className="p-3 border rounded bg-green-50 dark:bg-green-950"><div className="text-2xl font-bold text-green-500">2x</div><div className="text-xs">Mayor riesgo</div></div>
                <div className="p-3 border rounded bg-purple-50 dark:bg-purple-950"><div className="text-2xl font-bold text-purple-500">70%</div><div className="text-xs">Mejora al tratar TDAH</div></div>
              </div>

              <div className="space-y-3">
                <Card className="border-blue-200 dark:border-blue-800"><CardHeader><CardTitle className="text-base">Depresión Secundaria (más común)</CardTitle></CardHeader><CardContent className="text-sm">Surge como resultado de las dificultades crónicas del TDAH: fracasos repetidos, baja autoestima, problemas laborales.</CardContent></Card>
                <Card className="border-green-200 dark:border-green-800"><CardHeader><CardTitle className="text-base">Comorbilidad Verdadera</CardTitle></CardHeader><CardContent className="text-sm">Ambas condiciones coexisten independientemente. Cada una requiere tratamiento específico.</CardContent></Card>
                <Card className="border-purple-200 dark:border-purple-800"><CardHeader><CardTitle className="text-base">Sintomatología Superpuesta</CardTitle></CardHeader><CardContent className="text-sm">Dificultades de concentración y motivación pueden confundir el diagnóstico.</CardContent></Card>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <Alert>
                <Brain className="h-4 w-4" />
                <AlertDescription><strong>Diagnóstico dual:</strong> El DSM-5 permite el diagnóstico de TDAH + TEA desde 2013. 29.4% de adolescentes masculinos con TDAH tienen autismo.<CitationLink number={1} /></AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Card 1: Diferencias clave */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Diferencias clave TDAH vs TEA</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    <div>
                      <div className="font-medium text-blue-600 dark:text-blue-400">Atención</div>
                      <div className="text-muted-foreground">TDAH: dificultad general para sostener el foco</div>
                      <div>TEA: hiperfoco intenso en intereses restringidos</div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600 dark:text-blue-400">Comportamiento</div>
                      <div className="text-muted-foreground">TDAH: impulsividad e inquietud</div>
                      <div>TEA: rutinas rígidas y rituales</div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600 dark:text-blue-400">Flexibilidad</div>
                      <div className="text-muted-foreground">TDAH: puede cambiar de actividad</div>
                      <div>TEA: dificultad extrema para tolerar cambios</div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600 dark:text-blue-400">Social</div>
                      <div className="text-muted-foreground">TDAH: problemas por impulsividad</div>
                      <div>TEA: dificultades en reciprocidad y conexión</div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600 dark:text-blue-400">Comunicación</div>
                      <div className="text-muted-foreground">TDAH: interrumpe, habla en exceso</div>
                      <div>TEA: patrones atípicos (ecolalia, literalidad)</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2: Señales y abordaje */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Señales de comorbilidad y abordaje</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-4">
                    <div>
                      <div className="font-medium mb-1">Señales que sugieren ambas condiciones</div>
                      <div className="space-y-1 text-muted-foreground">
                        <div>• Infancia: intereses intensos + desatención general, rutinas + impulsividad, sensorialidad + hiperactividad</div>
                        <div>• Adultez: organización extremadamente difícil, hiperfoco alternado con dispersión, sobrecarga sensorial + inquietud interna</div>
                      </div>
                    </div>

                    <div>
                      <div className="font-medium mb-1">Principios de tratamiento dual</div>
                      <div className="space-y-1 text-muted-foreground">
                        <div>• Establecer rutinas visuales y predecibles</div>
                        <div>• Usar comunicación clara, concreta y directa</div>
                        <div>• Coordinar entre psiquiatra y profesional especializado en TEA</div>
                        <div>• Monitorear ansiedad y rigidez al iniciar medicación para TDAH</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-base">Principios generales</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="space-y-1">
                      <div>1. Identificar todas las condiciones presentes</div>
                      <div>2. Evaluar cuál genera mayor deterioro</div>
                      <div>3. Tratar primero la condición más grave</div>
                    </div>
                    <div className="space-y-1">
                      <div>4. Considerar interacciones medicamentosas</div>
                      <div>5. Monitoreo continuo especializado</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-base">Orden de tratamiento</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="p-3 bg-red-50 dark:bg-red-950 rounded"><strong>🔴 Primera prioridad:</strong> Trastorno bipolar, psicosis, ideas suicidas o adicciones severas</div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded"><strong>🟡 Segunda prioridad:</strong> TDAH, depresión mayor, ansiedad severa</div>
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded"><strong>🟢 Tercera prioridad:</strong> Condiciones médicas, trastornos del sueño</div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>

        <div className="flex justify-between items-center p-6 border-t">
          <Button variant="outline" onClick={prev} disabled={currentStep === 1}><ArrowLeft className="h-4 w-4 mr-2" />Anterior</Button>
          <span className="text-sm text-muted-foreground">{currentStep} de {steps.length}</span>
          <Button onClick={next}>{currentStep === steps.length ? "Finalizar" : "Siguiente"} <ArrowRight className="h-4 w-4 ml-2" /></Button>
        </div>
      </Card>

      <References references={comorbilidadesReferences} />
    </StepGuideLayout>
  );
}

const comorbilidadesReferences: Reference[] = [
  {
    id: 1,
    title: "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description: "Datos sobre cuántas personas con TDAH tienen también otras condiciones.",
    year: "2021",
  },
];
