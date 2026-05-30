"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Focus,
  Brain,
  User,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import { References, type Reference } from "@/components/references";
import Link from "next/link";

const steps = [
  { id: 1, title: "Organización", subtitle: "Tiempo y espacio", icon: Calendar },
  { id: 2, title: "Atención", subtitle: "Concentración y foco", icon: Focus },
  { id: 3, title: "Manejo Emocional", subtitle: "Regulación y comunicación", icon: Brain },
  { id: 4, title: "Adultos aplicado", subtitle: "Herramientas para la vida diaria", icon: User },
] satisfies StepDefinition[];

const references: Reference[] = [
  {
    id: 1,
    title: "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Hallowell, E. M., & Ratey, J. J.",
    url: "/adhd-2.0.pdf",
    description: "Fuente de estrategias prácticas y enfoque de fortalezas.",
    year: "2021",
  },
];

export default function HerramientasPage() {
  const { currentStep, completedCount, progress, goTo, isDone } =
    useStepProgress({ totalSteps: steps.length });

  return (
    <StepGuideLayout
      title="Herramientas para el día a día con TDAH"
      description="Apps, recursos y estrategias prácticas para organizarte mejor"
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
                <Calendar className="h-8 w-8 text-blue-500" />Organización: Tiempo y Espacio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">📅 Tiempo</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• Usa una sola agenda (física o digital)</div>
                    <div>• Bloques de 25-45 min con descansos cortos (Pomodoro)</div>
                    <div>• Programa primero lo importante, no lo urgente</div>
                    <div>• Deja margen entre actividades</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">🏠 Espacio</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• Un lugar para cada cosa, cada cosa en su lugar</div>
                    <div>• Reduce objetos visuales en el escritorio</div>
                    <div>• Usa cajas transparentes y etiquetas</div>
                    <div>• Crea «estaciones» (trabajo, carga, salida)</div>
                  </CardContent>
                </Card>
              </div>

            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Focus className="h-8 w-8 text-green-500" />Gestión de la Atención
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-3">
                <Card>
                  <CardHeader><CardTitle className="text-sm">🛡️ Minimizar distracciones</CardTitle></CardHeader>
                  <CardContent className="text-xs space-y-1">
                    <div>• Teléfono en modo avión o en otra habitación</div>
                    <div>• Bloqueadores de sitios web (Freedom, Cold Turkey)</div>
                    <div>• Auriculares con ruido blanco o música instrumental (sin letra)</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-sm">⏱️ Períodos concentrados</CardTitle></CardHeader>
                  <CardContent className="text-xs space-y-1">
                    <div>• 25-45 minutos de foco profundo</div>
                    <div>• Descanso de 5-10 minutos entre bloques</div>
                    <div>• Máximo 3-4 bloques por sesión (usa timer físico o app)</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-sm">🔄 Refocalización</CardTitle></CardHeader>
                  <CardContent className="text-xs space-y-1">
                    <div>• Técnica del «5-4-3-2-1» para volver al presente</div>
                    <div>• Regla de los 2 minutos: si es rápido, hacelo ahora</div>
                    <div>• Lista de «captura» para ideas que aparecen</div>
                  </CardContent>
                </Card>
              </div>

            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Brain className="h-8 w-8 text-purple-500" />Regulación Emocional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">💜 Técnicas rápidas</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Respiración 4-7-8 (inhalar 4, retener 7, exhalar 8)</div>
                    <div>• Cambio de temperatura: agua fría en cara o manos</div>
                    <div>• Movimiento: 10 flexiones o saltos</div>
                    <div>• Nombrear la emoción en voz alta</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">🗣️ Comunicación efectiva</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• «Necesito 5 minutos para procesar esto»</div>
                    <div>• «Mi cerebro funciona diferente, no es desinterés»</div>
                    <div>• Pedir feedback concreto, no «está todo bien»</div>
                    <div>• Explicar el TDAH a las personas cercanas</div>
                  </CardContent>
                </Card>
              </div>

            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <User className="h-8 w-8 text-purple-500" />Adultos aplicado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">Hiperfoco</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Ventaja: productividad excepcional en temas de interés</div>
                    <div>• Riesgo: descuidar responsabilidades y agotamiento</div>
                    <div>• Estrategia: usar timers y recordatorios externos</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">Ciclos de energía</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• «Encendido»: alta energía, múltiples proyectos</div>
                    <div>• «Apagado»: agotamiento, procrastinación</div>
                    <div>• Estrategia: planificar tareas pesadas en picos de energía</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">Mujeres y RSD</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Hipersensibilidad al rechazo (RSD) es real y neurológica</div>
                    <div>• Ciclo menstrual puede intensificar síntomas</div>
                    <div>• Estrategia: validar la emoción + técnicas de grounding</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base">Regulación emocional</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>• Técnica 5-4-3-2-1 para volver al presente</div>
                    <div>• Pedir «5 minutos para procesar»</div>
                    <div>• Explicar el TDAH a personas cercanas</div>
                  </CardContent>
                </Card>
               </div>

             </CardContent>
           </Card>
         )}
       </div>

       <div className="flex flex-col sm:flex-row gap-3 justify-center pb-6">
         <Button asChild size="lg">
           <Link href="/especialistas">Encontrar especialistas</Link>
         </Button>
         <Button variant="outline" asChild>
           <Link href="/tratamientos">Ver tratamientos</Link>
         </Button>
       </div>

       <References references={references} />
     </StepGuideLayout>
   );
 }
