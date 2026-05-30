"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowLeft,
  Pill,
  Brain,
  Heart,
  Users,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Cómo funciona", subtitle: "El tratamiento paso a paso", icon: Brain },
  { id: 2, title: "Medicamentos", subtitle: "Opciones farmacológicas", icon: Pill },
  { id: 3, title: "Terapias", subtitle: "Apoyo psicológico", icon: Users },
  { id: 4, title: "Estilo de vida", subtitle: "Ejercicio y rutina", icon: Heart },
] satisfies StepDefinition[];

export default function TratamientosPage() {
  const { currentStep, progress, completedCount, goTo, prev, isDone } =
    useStepProgress({ totalSteps: steps.length });

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
        {currentStep === 1 && (
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Brain className="h-8 w-8 text-blue-500" />¿Cómo funciona el tratamiento?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="text-center border-2 border-blue-100 dark:border-blue-900">
                  <CardHeader className="pb-2"><div className="text-5xl mb-2">💊</div><CardTitle className="text-lg">Medicación</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-3 text-left">
                    <div className="flex gap-2 items-start"><div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div><span><strong>1ra línea:</strong> Estimulantes de acción prolongada (Lisdexanfetamina o Metilfenidato OROS).</span></div>
                    <div className="flex gap-2 items-start"><div className="mt-1 w-1.5 h-1.5 bg-slate-500 rounded-full shrink-0"></div><span><strong>Descansos terapéuticos:</strong> Pausar la pastilla los fines de semana o en verano es una estrategia válida para aliviar efectos secundarios, pero no es obligatorio si respondés bien. Evaluá el costo-beneficio según tus planes: al pausarla, la impulsividad vuelve de inmediato, lo que eleva el riesgo de choques o gastos excesivos al salir de noche.</span></div>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 border-blue-100 dark:border-blue-900">
                  <CardHeader className="pb-2"><div className="text-5xl mb-2">🧠</div><CardTitle className="text-lg">Terapia</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-3 text-left">
                    <div className="flex gap-2 items-start"><div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div><span><strong>Exigí TCC:</strong> La Terapia Cognitivo-Conductual es la que tiene mayor respaldo científico en adultos para entrenar funciones ejecutivas, organización y regular emociones.</span></div>
                    <div className="flex gap-2 items-start"><div className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></div><span><strong>Terapias ineficaces:</strong> El psicoanálisis tradicional demostró una eficacia pobre (apenas 36%) para tratar los síntomas centrales neurológicos del TDAH.</span></div>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 border-blue-100 dark:border-blue-900">
                  <CardHeader className="pb-2"><div className="text-5xl mb-2">💪</div><CardTitle className="text-lg">Estilo de vida</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-3 text-left">
                    <div className="flex gap-2 items-start"><div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div><span><strong>Sueño:</strong> El 80% de los adultos con TDAH padece insomnio o síndrome de piernas inquietas, lo que arruina la cognición al día siguiente.</span></div>
                    <div className="flex gap-2 items-start"><div className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></div><span><strong>Riesgo vial:</strong> Sin tratamiento, la impulsividad y la distracción aumentan hasta un 62% las probabilidades de sufrir accidentes de tránsito graves.</span></div>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <AlertDescription>El abordaje suele combinar medicación, herramientas psicológicas y cambios de rutina. La proporción depende del perfil clínico, comorbilidades y acceso.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Pill className="h-8 w-8 text-green-500" />Medicamentos para TDAH
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30">
                <AlertDescription><strong>El mito del fin de semana:</strong> Suspender la medicación los fines de semana o en vacaciones no es necesario ni obligatorio. Para muchas personas, mantenerla de forma continua ofrece mejor control de síntomas. La decisión debe tomarse con tu médico según tu respuesta individual.</AlertDescription>
              </Alert>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border">
                  <thead>
                    <tr className="bg-green-100 dark:bg-green-900">
                      <th className="p-2 text-left">Medicamento</th>
                      <th className="p-2 text-left">Duración</th>
                      <th className="p-2 text-left">Línea</th>
                      <th className="p-2 text-left">Argentina</th>
                      <th className="p-2 text-left w-2/5">Nota clave</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2 font-medium">Lisdexanfetamina (Ludoxa)</td>
                      <td className="p-2">13-14 h</td>
                      <td className="p-2">1ra</td>
                      <td className="p-2">Disponible</td>
                      <td className="p-2 text-xs whitespace-normal">Psicotrópico Lista II. Una toma diaria. Menor potencial de abuso.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">Metilfenidato OROS (Concerta/Consiv)</td>
                      <td className="p-2">12 h</td>
                      <td className="p-2">1ra</td>
                      <td className="p-2">Disponible</td>
                      <td className="p-2 text-xs whitespace-normal">Psicotrópico Lista II. Requiere receta física por triplicado.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">Metilfenidato IR/SR (Ritalina)</td>
                      <td className="p-2">3-4 h</td>
                      <td className="p-2">2da</td>
                      <td className="p-2">Disponible</td>
                      <td className="p-2 text-xs whitespace-normal">Psicotrópico Lista II. Múltiples formulaciones locales.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">Atomoxetina</td>
                      <td className="p-2">24 h</td>
                      <td className="p-2">2da</td>
                      <td className="p-2">Disponible</td>
                      <td className="p-2 text-xs whitespace-normal">No es Lista II. Útil en ansiedad, tics o adicciones. Inicio lento (4-6 sem).</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-medium">Bupropión</td>
                      <td className="p-2">24 h</td>
                      <td className="p-2">3ra</td>
                      <td className="p-2">Disponible</td>
                      <td className="p-2 text-xs whitespace-normal">Off-label. Útil si hay depresión comórbida o tabaquismo.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-muted-foreground">
                Fuente: CADDRA ADHD Medication Chart (May 2026). Ver guía completa para detalles de dosis y presentaciones.
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <AlertDescription>
                  <strong>Cuándo priorizar atomoxetina:</strong> antecedentes de adicciones (bajo potencial de abuso), ansiedad severa (estimulantes pueden empeorarla), tics o Tourette (estimulantes a veces los agravan).
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Users className="h-8 w-8 text-purple-500" />Terapias No Farmacológicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
                <AlertDescription><strong>Atención:</strong> la terapia con evidencia para TDAH es la Terapia Cognitivo-Conductual (TCC). Entrena funciones ejecutivas, organización y control de impulsos.</AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold mb-3">Terapia Cognitivo-Conductual (TCC)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div><strong>Qué incluye:</strong></div>
                    <div>• Psicoeducación: entender qué es el TDAH</div>
                    <div>• Reestructuración cognitiva: cambiar pensamientos negativos</div>
                    <div>• Técnicas conductuales: estrategias prácticas</div>
                  </div>
                  <div className="space-y-2">
                    <div><strong>Beneficios esperados:</strong></div>
                    <div>• Mejora de autoestima y reducción de ansiedad/depresión</div>
                    <div>• Mejor funcionamiento laboral y en relaciones</div>
                    <div>• Mayor adherencia a medicación</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Entrenamiento en Habilidades</h3>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <Card><CardHeader className="pb-2"><CardTitle className="text-sm">📋 Organización</CardTitle></CardHeader><CardContent className="text-xs space-y-1">• Agendas y listas • División de tareas • Organización de espacios</CardContent></Card>
                  <Card><CardHeader className="pb-2"><CardTitle className="text-sm">🎯 Gestión de Atención</CardTitle></CardHeader><CardContent className="text-xs space-y-1">• Minimizar distracciones • Períodos concentrados • Refocalización</CardContent></Card>
                  <Card><CardHeader className="pb-2"><CardTitle className="text-sm">💜 Regulación Emocional</CardTitle></CardHeader><CardContent className="text-xs space-y-1">• Identificar emociones • Técnicas de relajación • Manejo de frustración</CardContent></Card>
                </div>
              </div>

            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="border-red-200 dark:border-red-800 bg-red-50/30 dark:bg-red-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Heart className="h-8 w-8 text-red-500" />Ejercicio y rutina
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-4 gap-3 text-center text-sm">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded"><div className="font-bold text-green-600">20-30 min</div><div className="text-xs">punto de partida</div></div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded"><div className="font-bold text-blue-600">Diario</div><div className="text-xs">mejor que intenso</div></div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded"><div className="font-bold text-purple-600">Aeróbico</div><div className="text-xs">útil para foco/ánimo</div></div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded"><div className="font-bold text-orange-600">Ajustar</div><div className="text-xs">a cada persona</div></div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">🏃 Ejercicio aeróbico</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Correr / trotar / caminar rápido</div>
                    <div>• Bicicleta / natación</div>
                    <div className="text-xs text-muted-foreground mt-2">Potencia: enfoque y motivación</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">⚖️ Equilibrio y coordinación</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Yoga / pilates / artes marciales</div>
                    <div>• Deportes de equipo</div>
                    <div className="text-xs text-muted-foreground mt-2">Útil para: control corporal y constancia</div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link href="/diagnostico">Volver a Diagnóstico</Link>
                </Button>
                <Button asChild>
                  <Link href="/especialistas">Encontrar especialistas</Link>
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
