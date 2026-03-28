"use client";

import { useStepProgress } from "@/hooks/use-step-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Brain,
  Users,
  GraduationCap,
  Pill,
  ArrowRight,
  ArrowLeft,
  Shield,
  Baby,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { StepDefinition } from "@/lib/steps";
import { References, type Reference } from "@/components/references";
import { CitationLink } from "@/components/citation-link";

const references: Reference[] = [
  {
    id: 1,
    title:
      "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Hallowell, E. M., & Ratey, J. J.",
    url: "/adhd-2.0.pdf",
    description:
      "Libro que actualiza la comprensión del TDAH, desmitificando conceptos erróneos y presentando un enfoque basado en fortalezas.",
    year: "2021",
  },
  {
    id: 2,
    title:
      "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-1.pdf",
    description:
      "El consenso de expertos argentinos que valida la existencia del TDAH como una condición médica real y aborda su persistencia en la adultez.",
    year: "2020",
  },
  {
    id: 3,
    title: "International Consensus Statement on ADHD",
    authors: "Faraone, S. V., et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description:
      "Declaración de consenso internacional firmada por 208 expertos que confirma la validez científica del TDAH y la seguridad de su tratamiento.",
    year: "2021",
  },
];

export default function MitosPage() {
  const steps = [
    {
      id: 1,
      title: "¿Existe realmente?",
      subtitle: "Realidad del TDAH",
      icon: Brain,
    },
    {
      id: 2,
      title: "¿Solo en niños?",
      subtitle: "TDAH en adultos",
      icon: Baby,
    },
    {
      id: 3,
      title: "¿Falta de voluntad?",
      subtitle: "Causa neurológica",
      icon: XCircle,
    },
    {
      id: 4,
      title: "¿Medicamentos peligrosos?",
      subtitle: "Seguridad tratamiento",
      icon: Pill,
    },
    {
      id: 5,
      title: "¿Solo en hombres?",
      subtitle: "TDAH en mujeres",
      icon: Users,
    },
    {
      id: 6,
      title: "¿Menos inteligentes?",
      subtitle: "Inteligencia y TDAH",
      icon: GraduationCap,
    },
  ] satisfies StepDefinition[];
  const {
    currentStep,
    completedCount,
    progress,
    goTo,
    next,
    prev,
    isDone,
  } = useStepProgress({ totalSteps: steps.length });

  return (
    <StepGuideLayout
      title="Mitos sobre TDAH"
        description="Las verdades y mentiras más comunes sobre TDAH"
      steps={steps}
      currentStep={currentStep}
      progress={progress}
      completedCount={completedCount}
      onSelectStep={goTo}
      isStepDone={isDone}
    >
      {/* Step Content */}
        <div className="min-h-[500px]">
          {/* Step 1: TDAH Existence */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8 text-blue-500" />
                    ¿El TDAH realmente existe?
                  </CardTitle>
                  <CardDescription>
                    Separando la realidad científica de las creencias populares
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Mito más peligroso:</strong> &quot;El TDAH no
                      existe, es una invención&quot; ha causado décadas de
                      sufrimiento y subdiagnóstico.
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                      <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        MITOS POPULARES
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>• &quot;Es una excusa para la pereza&quot;</li>
                        <li>• &quot;Inventado por las farmacéuticas&quot;</li>
                        <li>
                          • &quot;Medicalización de la infancia normal&quot;
                        </li>
                        <li>• &quot;No es una condición médica real&quot;</li>
                        <li>• &quot;Es solo falta de disciplina&quot;</li>
                      </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        REALIDAD CIENTÍFICA
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>OMS lo reconoce</strong> como trastorno del
                          neurodesarrollo
                          <CitationLink number={3} />
                        </li>
                        <li>
                          • <strong>Base neurobiológica sólida:</strong>{" "}
                          Diferencias cerebrales reales
                        </li>
                        <li>
                          • <strong>Heredabilidad del 70-80%:</strong> Fuerte
                          componente genético
                        </li>
                        <li>
                          • <strong>Consenso médico internacional</strong> de
                          208 expertos
                          <CitationLink number={3} />
                        </li>
                        <li>
                          • <strong>Investigación de +100 años</strong> desde
                          Still (1902)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Evidencia Neurobiológica Irrefutable
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white dark:bg-slate-800 rounded">
                        <div className="text-xl font-bold text-blue-500 mb-1">
                          🧠
                        </div>
                        <div className="text-sm font-semibold">
                          Neuroimágenes
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Diferencias en corteza prefrontal
                        </div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-slate-800 rounded">
                        <div className="text-xl font-bold text-purple-500 mb-1">
                          ⚗️
                        </div>
                        <div className="text-sm font-semibold">
                          Neuroquímica
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Déficit dopamina/noradrenalina
                        </div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-slate-800 rounded">
                        <div className="text-xl font-bold text-green-500 mb-1">
                          🧬
                        </div>
                        <div className="text-sm font-semibold">Genética</div>
                        <div className="text-xs text-muted-foreground">
                          Genes específicos identificados
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button onClick={next} size="lg">
                      Siguiente: ¿Solo en niños?{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 2: Age Persistence */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Baby className="h-8 w-8 text-green-500" />
                    ¿El TDAH es solo de niños?
                  </CardTitle>
                  <CardDescription>
                    La realidad del TDAH adulto que muchos desconocen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                      <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        MITOS POPULARES
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>• &quot;Los adultos no tienen TDAH&quot;</li>
                        <li>• &quot;Se supera en la adolescencia&quot;</li>
                        <li>• &quot;Es cuestión de madurar&quot;</li>
                        <li>
                          • &quot;Los síntomas desaparecen naturalmente&quot;
                        </li>
                        <li>
                          • &quot;Si no te diagnosticaron de niño, no lo
                          tenés&quot;
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        REALIDAD CIENTÍFICA
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>45-85% persiste en la adultez</strong> según
                          estudios longitudinales
                          <CitationLink number={2} />
                        </li>
                        <li>
                          • <strong>2.5% de prevalencia</strong> en adultos
                          globalmente
                        </li>
                        <li>
                          • <strong>Evoluciona, no desaparece:</strong> Se
                          adapta a demandas adultas
                        </li>
                        <li>
                          • <strong>Diagnósticos tardíos frecuentes:</strong>{" "}
                          Especialmente mujeres
                        </li>
                        <li>
                          • <strong>Impacto severo no tratado:</strong> Trabajo,
                          relaciones, salud
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 border rounded-lg bg-white dark:bg-slate-800">
                      <div className="text-3xl font-bold text-blue-500 mb-1">
                        67%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Mantiene síntomas en promedio
                      </div>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-white dark:bg-slate-800">
                      <div className="text-3xl font-bold text-purple-500 mb-1">
                        1.9:1
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Proporción H:M en adultos
                      </div>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-white dark:bg-slate-800">
                      <div className="text-3xl font-bold text-green-500 mb-1">
                        30-40
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Edad promedio diagnóstico tardío
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Realidad:</strong> El TDAH adulto es tan real como
                      el infantil. Muchos adultos viven décadas sin diagnóstico,
                      sufriendo problemas en trabajo, relaciones y autoestima
                      que podrían ser tratados efectivamente.
                    </AlertDescription>
                  </Alert>

                  <div className="mt-6 text-center space-x-4">
                    <Button onClick={next} size="lg">
                      Siguiente: ¿Falta de voluntad?{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Willpower Myth */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <XCircle className="h-8 w-8 text-purple-500" />
                    ¿Es falta de voluntad o disciplina?
                  </CardTitle>
                  <CardDescription>
                    La diferencia entre déficit neurológico y falta de esfuerzo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                      <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        MITOS POPULARES
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>• &quot;Solo necesitan esforzarse más&quot;</li>
                        <li>• &quot;Es pereza o falta de carácter&quot;</li>
                        <li>• &quot;Con más disciplina se soluciona&quot;</li>
                        <li>• &quot;Buscan excusas para no trabajar&quot;</li>
                        <li>• &quot;Si realmente quisieran, podrían&quot;</li>
                      </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        REALIDAD CIENTÍFICA
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>Déficit neurológico real:</strong> En
                          dopamina/noradrenalina
                        </li>
                        <li>
                          • <strong>Funciones ejecutivas alteradas:</strong> No
                          es falta de voluntad
                        </li>
                        <li>
                          •{" "}
                          <strong>Red neuronal por defecto hiperactiva:</strong>{" "}
                          Dificultad para &quot;engancharse&quot;
                        </li>
                        <li>
                          • <strong>Mejora con tratamiento:</strong> No solo con
                          &quot;más esfuerzo&quot;
                        </li>
                        <li>
                          • <strong>Hiperfoco demuestra capacidad:</strong> El
                          problema es la regulación
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-amber-50 dark:bg-amber-950 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3">🩺 Analogía Médica</h4>
                    <p className="text-sm">
                      Decir que el TDAH es &quot;falta de voluntad&quot; es como
                      decir que la diabetes es &quot;falta de voluntad para
                      regular el azúcar&quot;. Ambas son condiciones médicas
                      reales que requieren tratamiento específico, no solo
                      &quot;más esfuerzo personal&quot;.
                    </p>
                  </div>

                  <div className="mt-6 text-center space-x-4">
                    <Button onClick={next} size="lg">
                      Siguiente: ¿Medicamentos peligrosos?{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Medication Safety */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Card className="border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Pill className="h-8 w-8 text-orange-500" />
                    ¿Los medicamentos son peligrosos?
                  </CardTitle>
                  <CardDescription>
                    La verdad sobre la seguridad del tratamiento farmacológico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                      <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        MITOS POPULARES
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • &quot;Los estimulantes son drogas peligrosas&quot;
                        </li>
                        <li>• &quot;Crean adicción automáticamente&quot;</li>
                        <li>
                          • &quot;Cambian la personalidad permanentemente&quot;
                        </li>
                        <li>• &quot;Solo sirven para drogar niños&quot;</li>
                        <li>
                          • &quot;Tienen efectos secundarios terribles&quot;
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        REALIDAD CIENTÍFICA
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>70+ años de uso seguro:</strong> Desde
                          1950s, millones de personas
                        </li>
                        <li>
                          • <strong>Reduce riesgo de adicción:</strong> TDAH no
                          tratado 2x más TUS
                        </li>
                        <li>
                          • <strong>Dosis terapéuticas vs. abuso:</strong>{" "}
                          Mecanismo completamente diferente
                        </li>
                        <li>
                          • <strong>Mejoran función cerebral:</strong>{" "}
                          Normalizan neurotransmisores
                        </li>
                        <li>
                          • <strong>Reversibles:</strong> Efectos desaparecen al
                          discontinuar
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Uso Terapéutico
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Dosis bajas, regulares</li>
                          <li>• Supervisión médica constante</li>
                          <li>• Objetivo: función normal</li>
                          <li>• Mejora calidad de vida</li>
                          <li>• Riesgo dependencia mínimo</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base">
                          Abuso de Sustancias
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Dosis altas, irregulares</li>
                          <li>• Sin supervisión médica</li>
                          <li>• Objetivo: euforia/escape</li>
                          <li>• Deteriora funcionamiento</li>
                          <li>• Alto riesgo dependencia</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 text-center space-x-4">
                    <Button onClick={next} size="lg">
                      Siguiente: ¿Solo en hombres?{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 5: Gender Myth */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Users className="h-8 w-8 text-pink-500" />
                    ¿Es más común en chicos?
                  </CardTitle>
                  <CardDescription>
                    El TDAH oculto en mujeres: un problema de diagnóstico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                      <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        MITOS POPULARES
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>• &quot;Las niñas no tienen TDAH&quot;</li>
                        <li>• &quot;Es 9:1 chicos vs chicas&quot;</li>
                        <li>• &quot;Las mujeres lo superan más fácil&quot;</li>
                        <li>• &quot;Solo se ve hiperactividad física&quot;</li>
                        <li>
                          • &quot;Las niñas son naturalmente más
                          tranquilas&quot;
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        REALIDAD CIENTÍFICA
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>Proporción real 2.4:1</strong> en población
                          general
                        </li>
                        <li>
                          • <strong>Subdiagnóstico masivo:</strong> 4:1 en
                          consultas vs 1.9:1 en adultos
                        </li>
                        <li>
                          • <strong>Presentación diferente:</strong> Más
                          internalizada en mujeres
                        </li>
                        <li>
                          • <strong>Impacto similar o mayor:</strong> Depresión,
                          ansiedad, autoestima
                        </li>
                        <li>
                          • <strong>Diagnósticos tardíos:</strong> Después de
                          los 30-40 años
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-pink-50 dark:bg-pink-950 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      TDAH en Mujeres: El Diagnóstico Oculto
                    </h4>
                    <p className="text-sm mb-3">
                      Las mujeres presentan síntomas más sutiles: &quot;soñar
                      despiertas&quot;, hiperactividad mental, perfeccionismo,
                      sensibilidad emocional. Esto lleva a diagnósticos erróneos
                      como ansiedad o depresión únicamente.
                    </p>
                    <Badge variant="destructive">
                      Consecuencia: Años de sufrimiento sin tratamiento adecuado
                    </Badge>
                  </div>

                  <div className="mt-6 text-center space-x-4">
                    <Button onClick={next} size="lg">
                      Siguiente: ¿Menos inteligentes?{" "}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 6: Intelligence Myth */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <Card className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <GraduationCap className="h-8 w-8 text-indigo-500" />
                    ¿Son menos inteligentes?
                  </CardTitle>
                  <CardDescription>
                    TDAH e inteligencia: separando capacidad de expresión
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                      <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        MITOS POPULARES
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • &quot;No pueden ser exitosos académicamente&quot;
                        </li>
                        <li>
                          • &quot;Tienen menor capacidad intelectual&quot;
                        </li>
                        <li>• &quot;No sirven para trabajos complejos&quot;</li>
                        <li>
                          • &quot;Son estudiantes problemáticos únicamente&quot;
                        </li>
                        <li>• &quot;No pueden concentrarse en nada&quot;</li>
                      </ul>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        REALIDAD CIENTÍFICA
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>CI normal o superior:</strong> Misma
                          distribución poblacional
                        </li>
                        <li>
                          • <strong>Fortalezas únicas:</strong> Creatividad,
                          pensamiento divergente
                        </li>
                        <li>
                          • <strong>Muchos profesionales exitosos:</strong> Con
                          TDAH en diversas áreas
                        </li>
                        <li>
                          • <strong>Hiperfoco ventajoso:</strong> En áreas de
                          interés especial
                        </li>
                        <li>
                          • <strong>Problema de expresión:</strong> No de
                          capacidad intelectual
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          Fortalezas
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>
                            • <strong>Creatividad:</strong> &quot;Fuera de la
                            caja&quot;
                          </li>
                          <li>
                            • <strong>Innovación:</strong> Conectar ideas
                            diversas
                          </li>
                          <li>
                            • <strong>Energía mental:</strong> Cuando hay
                            interés
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          Desafíos
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>
                            • <strong>Regulación:</strong> No inteligencia
                          </li>
                          <li>
                            • <strong>Inconsistencia:</strong> Variable según
                            interés
                          </li>
                          <li>
                            • <strong>Adaptaciones:</strong> Necesarias, no
                            menor exigencia
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          Éxito Profesional
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>
                            • <strong>Emprendedores:</strong> Energía e
                            innovación
                          </li>
                          <li>
                            • <strong>Artistas:</strong> Pensamiento divergente
                          </li>
                          <li>
                            • <strong>Crisis/Emergencias:</strong> Funcionan
                            bajo presión
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Realidad:</strong> El TDAH es una condición médica
                      real, tratable y manejable. Con información correcta,
                      diagnóstico oportuno y tratamiento adecuado, las personas
                      con TDAH pueden llevar vidas plenas y exitosas.
                    </AlertDescription>
                  </Alert>

                  <div className="mt-6 text-center space-x-4">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      ¡Mitos Desmentidos!
                    </Button>
                    <Button variant="outline" onClick={prev}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

          <References references={references} />
      </StepGuideLayout>
    );
  }
