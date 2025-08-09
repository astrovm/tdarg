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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
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
  CheckCircle,
} from "lucide-react";
import { Header } from "@/components/header";
import Link from "next/link";
import { CitationLink } from "@/components/citation-link";
import { References, type Reference } from "@/components/references";

const steps = [
  {
    id: 1,
    title: "¿Qué son?",
    subtitle: "Definición y prevalencia",
    icon: <Activity className="h-5 w-5" />,
    description: "Las comorbilidades y su frecuencia en TDAH",
  },
  {
    id: 2,
    title: "TDAH + Ansiedad",
    subtitle: "La comorbilidad más común",
    icon: <Zap className="h-5 w-5" />,
    description: "Cómo se relacionan y cómo tratarlas",
  },
  {
    id: 3,
    title: "TDAH + Depresión",
    subtitle: "Relación compleja",
    icon: <Brain className="h-5 w-5" />,
    description: "Tipos de relación y diferenciación",
  },
  {
    id: 4,
    title: "TDAH + Autismo",
    subtitle: "Comorbilidad neurológica",
    icon: <Heart className="h-5 w-5" />,
    description: "Diagnóstico dual y características",
  },
  {
    id: 5,
    title: "Evaluación integral",
    subtitle: "Manejo y tratamiento",
    icon: <Users className="h-5 w-5" />,
    description: "Principios para tratamiento integral",
  },
];

export default function ComorbilidadesPage() {
  const {
    currentStep,
    next,
    prev,
    goTo,
    effectiveCompletedCount,
    progress,
    isDone,
  } = useStepProgress({ totalSteps: steps.length });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-3xl font-bold text-purple-600 mb-4">
            TDAH y Comorbilidades
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            El TDAH raramente viene solo: comprende las condiciones asociadas
          </p>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Progreso del aprendizaje
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {effectiveCompletedCount}/{steps.length} completado
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => goTo(step.id)}
                className={`p-3 rounded-lg text-left transition-all ${
                  currentStep === step.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : isDone(step.id)
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {isDone(step.id) ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    step.icon
                  )}
                  <span className="font-medium text-sm">{step.title}</span>
                </div>
                <p className="text-xs opacity-80">{step.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Step Content */}
        <Card className="min-h-[600px]">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full">
                {steps[currentStep - 1].icon}
              </div>
              <div>
                <CardTitle className="text-xl">
                  {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription>
                  {steps[currentStep - 1].description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <>
                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                  <CardHeader>
                    <CardTitle className="text-base">
                      ¿Qué son las comorbilidades?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Las <strong>comorbilidades</strong> son condiciones
                      médicas o psiquiátricas que ocurren junto con el TDAH. No
                      son causadas por el TDAH, sino que coexisten
                      independientemente, aunque pueden influirse mutuamente.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold mb-2">
                          Tipos principales:
                        </h5>
                        <ul className="space-y-1">
                          <li>
                            • <strong>Psiquiátricas:</strong> Ansiedad,
                            depresión, bipolar
                          </li>
                          <li>
                            • <strong>Médicas:</strong> Diabetes, asma, obesidad
                          </li>
                          <li>
                            • <strong>Neurológicas:</strong> Autismo, epilepsia
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">
                          ¿Por qué son importantes?
                        </h5>
                        <ul className="space-y-1">
                          <li>• Complican el diagnóstico</li>
                          <li>• Afectan el tratamiento</li>
                          <li>• Empeoran el pronóstico</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Realidad:</strong> Entre el 70% y 80%
                    <CitationLink number={1} /> de las personas con TDAH
                    desarrollan al menos una condición comórbida. La
                    comorbilidad es la norma, no la excepción.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Comorbilidades psiquiátricas más frecuentes
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Trastornos de Ansiedad</span>
                        <span className="text-sm font-bold">50-60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Trastornos del Sueño</span>
                        <span className="text-sm font-bold">50-70%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Depresión Mayor</span>
                        <span className="text-sm font-bold">40-50%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">TEA (Autismo)</span>
                        <span className="text-sm font-bold">29.4%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Comorbilidades médicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Obesidad</span>
                        <span className="text-sm font-bold">3x riesgo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Asma</span>
                        <span className="text-sm font-bold">45% ↑</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Diabetes Tipo 2</span>
                        <span className="text-sm font-bold">3x riesgo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Demencia (adultos)</span>
                        <span className="text-sm font-bold">3.4x riesgo</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/30">
                  <Zap className="h-4 w-4" />
                  <AlertDescription>
                    <strong>La más común:</strong> 50-60% de adultos con TDAH
                    desarrollan trastornos de ansiedad
                    <CitationLink number={1} />. Las dificultades crónicas del
                    TDAH generan preocupación constante.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        ¿Por qué ocurre?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>
                          • Las dificultades crónicas del TDAH generan
                          preocupación
                        </li>
                        <li>• Miedo al fracaso por experiencias pasadas</li>
                        <li>• Ansiedad anticipatoria por olvidos o errores</li>
                        <li>• Sobrecarga sensorial e hipervigilancia</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Tratamiento recomendado
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                          <h5 className="font-semibold text-sm mb-1">
                            ✅ Recomendado
                          </h5>
                          <ul className="text-xs space-y-1">
                            <li>• Atomoxetina como primera línea</li>
                            <li>• TCC para ambas condiciones</li>
                            <li>• Técnicas de relajación</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded">
                          <h5 className="font-semibold text-sm mb-1">
                            ⚠️ Precaución
                          </h5>
                          <ul className="text-xs space-y-1">
                            <li>• Estimulantes pueden aumentar ansiedad</li>
                            <li>• Monitoreo cuidadoso inicial</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
                    <div className="text-2xl font-bold text-blue-500 mb-1">
                      40-50%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Prevalencia en adultos
                    </div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-green-50 dark:bg-green-950">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      2x
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mayor riesgo
                    </div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-purple-50 dark:bg-purple-950">
                    <div className="text-2xl font-bold text-purple-500 mb-1">
                      70%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mejora al tratar TDAH
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-base">
                        Depresión Secundaria (más común)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Surge como resultado de las dificultades crónicas del
                        TDAH: fracasos repetidos, baja autoestima, problemas
                        laborales
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-base">
                        Comorbilidad Verdadera
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Ambas condiciones coexisten independientemente, cada una
                        requiere tratamiento específico
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="text-base">
                        Sintomatología Superpuesta
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Dificultades de concentración y motivación pueden
                        confundir el diagnóstico
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {currentStep === 4 && (
              <>
                <Alert>
                  <Brain className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Diagnóstico dual:</strong> El DSM-5 permite el
                    diagnóstico de TDAH + TEA desde 2013. 29.4% de adolescentes
                    masculinos con TDAH tienen autismo
                    <CitationLink number={1} />.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Características clave
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• Síntomas pueden superponerse y confundirse</li>
                        <li>• Diagnóstico diferencial muy complejo</li>
                        <li>• Requiere evaluación por especialista en TEA</li>
                        <li>• Tratamiento necesita adaptaciones específicas</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Información adicional
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">
                        Para diagnóstico diferencial detallado, tratamiento
                        específico y características completas:
                      </p>
                      <Link
                        href="/autismo"
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-fit"
                      >
                        Ver Guía TDAH y Autismo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Principios generales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">
                            1
                          </Badge>
                          <span>
                            Identificar todas las condiciones presentes
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">
                            2
                          </Badge>
                          <span>Evaluar cuál genera mayor deterioro</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">
                            3
                          </Badge>
                          <span>Tratar primero la condición más grave</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">
                            4
                          </Badge>
                          <span>Considerar interacciones medicamentosas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs">
                            5
                          </Badge>
                          <span>Monitoreo continuo especializado</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Orden de tratamiento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                        <h5 className="font-semibold text-sm">
                          🔴 Primera prioridad
                        </h5>
                        <p className="text-xs">
                          Trastorno bipolar, psicosis, ideas suicidas, abuso
                          severo
                        </p>
                      </div>
                      <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                        <h5 className="font-semibold text-sm">
                          🟡 Segunda prioridad
                        </h5>
                        <p className="text-xs">
                          TDAH, depresión mayor, ansiedad severa
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <h5 className="font-semibold text-sm">
                          🟢 Tercera prioridad
                        </h5>
                        <p className="text-xs">
                          Condiciones médicas, trastornos del sueño
                        </p>
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

        <References references={comorbilidadesReferences} />
      </div>
    </div>
  );
}

const comorbilidadesReferences: Reference[] = [
  {
    id: 1,
    title:
      "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder",
    authors: "Stephen V. Faraone, Tobias Banaschewski, David Coghill et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description:
      "Documento que establece las prevalencias de comorbilidades asociadas al TDAH basado en evidencia científica internacional.",
    year: "2021",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre TDAH: Parte 2",
    authors: "Andrea Abadi, Marcelo Cetkovich-Bakmas, Hernán Klijnjan et al.",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description:
      "Segunda parte del consenso nacional argentino enfocada en comorbilidades y tratamiento integral.",
    year: "2024",
  },
];
