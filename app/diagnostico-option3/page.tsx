"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, RotateCcw, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"

export default function DiagnosticoOption3() {
  const [currentCard, setCurrentCard] = useState(0)

  // Micro-learning cards - one concept per card
  const cards = [
    {
      id: 1,
      category: "Introducción",
      title: "¿Qué es el diagnóstico de TDAH?",
      concept: "Es un proceso médico especializado",
      content: "El diagnóstico de TDAH es una evaluación médica que solo pueden hacer profesionales especializados. No es un simple test online.",
      visual: "🏥",
      keyPoint: "Solo profesionales especializados pueden diagnosticar",
      action: "Buscar ayuda profesional si tienes dudas"
    },
    {
      id: 2,
      category: "Introducción", 
      title: "¿Por qué es importante?",
      concept: "El diagnóstico temprano cambia vidas",
      content: "Un diagnóstico correcto te permite acceder al tratamiento adecuado y entender por qué ciertas cosas te resultan difíciles.",
      visual: "🎯",
      keyPoint: "El diagnóstico correcto abre puertas al tratamiento",
      action: "No pospongas buscar ayuda si identificas síntomas"
    },
    {
      id: 3,
      category: "Autoevaluación",
      title: "¿Necesito evaluarme?",
      concept: "5 señales principales de TDAH",
      content: "Si tienes dificultades constantes para concentrarte, te distraes fácilmente, pierdes objetos, sientes inquietud o interrumpes conversaciones.",
      visual: "🧠",
      keyPoint: "3 o más síntomas persistentes = consultar",
      action: "Anota tus síntomas por una semana"
    },
    {
      id: 4,
      category: "Autoevaluación",
      title: "Síntomas desde la infancia",
      concept: "El TDAH empieza en la infancia",
      content: "Para ser TDAH, los síntomas deben haber estado presentes desde antes de los 12 años, aunque no hayan sido diagnosticados.",
      visual: "👶",
      keyPoint: "Síntomas desde la infancia, no de adulto",
      action: "Recuerda tu comportamiento escolar"
    },
    {
      id: 5,
      category: "Profesionales",
      title: "¿Quién puede diagnosticar?",
      concept: "Solo 3 tipos de profesionales",
      content: "Médicos psiquiatras, neurólogos o psicólogos clínicos con formación específica en TDAH. No todos los médicos pueden hacerlo.",
      visual: "👨‍⚕️",
      keyPoint: "Busca especialistas con experiencia en TDAH",
      action: "Verifica la especialización del profesional"
    },
    {
      id: 6,
      category: "Profesionales",
      title: "¿Cómo elegir?",
      concept: "Experiencia específica es clave",
      content: "Busca profesionales que mencionen experiencia específica en TDAH, no solo salud mental general.",
      visual: "🔍",
      keyPoint: "Experiencia en TDAH > título general",
      action: "Pregunta sobre su experiencia con TDAH"
    },
    {
      id: 7,
      category: "Proceso",
      title: "Primera cita: La entrevista",
      concept: "Conversación profunda sobre síntomas",
      content: "El profesional te preguntará detalladamente sobre tus síntomas actuales, cómo afectan tu vida y desde cuándo los tienes.",
      visual: "💬",
      keyPoint: "Sé específico sobre cómo te afectan los síntomas",
      action: "Prepara ejemplos concretos de dificultades"
    },
    {
      id: 8,
      category: "Proceso",
      title: "Historia clínica completa",
      concept: "Revisión desde la infancia",
      content: "Te preguntarán sobre tu desarrollo, rendimiento escolar, comportamiento en la infancia y antecedentes familiares.",
      visual: "📚",
      keyPoint: "La historia personal es fundamental",
      action: "Busca boletines escolares antiguos"
    },
    {
      id: 9,
      category: "Proceso",
      title: "Tests y escalas",
      concept: "Cuestionarios especializados",
      content: "Completarás escalas como ASRS-18 (adultos) y WURS-25 (síntomas retrospectivos de infancia). Son herramientas validadas científicamente.",
      visual: "📝",
      keyPoint: "Los tests complementan, no reemplazan la entrevista",
      action: "Responde honestamente, sin intentar 'parecer' que tienes TDAH"
    },
    {
      id: 10,
      category: "Proceso",
      title: "Buscar otras condiciones",
      concept: "Evaluación de comorbilidades",
      content: "El profesional evaluará si tienes ansiedad, depresión u otras condiciones que pueden coexistir con TDAH o confundirse con él.",
      visual: "🔍",
      keyPoint: "Muchas condiciones pueden parecer TDAH",
      action: "Menciona todos tus síntomas, no solo los de atención"
    },
    {
      id: 11,
      category: "Preparación",
      title: "¿Qué documentos llevar?",
      concept: "4 elementos esenciales",
      content: "Boletines escolares, informes médicos previos, lista de medicamentos actuales y antecedentes familiares de TDAH.",
      visual: "📋",
      keyPoint: "Los boletines escolares son muy valiosos",
      action: "Organiza documentos antes de la cita"
    },
    {
      id: 12,
      category: "Preparación",
      title: "¿Qué información preparar?",
      concept: "Ejemplos específicos de problemas",
      content: "Prepara situaciones concretas donde tus síntomas causaron problemas en trabajo, estudios o relaciones.",
      visual: "💭",
      keyPoint: "Ejemplos concretos > descripciones vagas",
      action: "Anota 3 situaciones problemáticas específicas"
    },
    {
      id: 13,
      category: "Diagnóstico",
      title: "¿Cuánto tarda?",
      concept: "Proceso de 2-4 consultas",
      content: "Raramente se diagnostica en una sola consulta. El proceso completo suele tomar 2-4 sesiones durante varias semanas.",
      visual: "⏱️",
      keyPoint: "El diagnóstico serio toma tiempo",
      action: "Ten paciencia, no busques diagnósticos rápidos"
    },
    {
      id: 14,
      category: "Diagnóstico", 
      title: "¿Y si no es TDAH?",
      concept: "Otras explicaciones posibles",
      content: "Si no es TDAH, tus síntomas pueden deberse a ansiedad, depresión, problemas del sueño u otras condiciones tratables.",
      visual: "🤔",
      keyPoint: "No tener TDAH no significa que no necesites ayuda",
      action: "Acepta el resultado y busca tratamiento para lo que sí tienes"
    },
    {
      id: 15,
      category: "Siguiente paso",
      title: "¿Qué sigue después?",
      concept: "Tratamiento personalizado",
      content: "Con diagnóstico confirmado, el profesional diseñará un plan de tratamiento que puede incluir medicación y terapia.",
      visual: "🎯",
      keyPoint: "El diagnóstico es el primer paso, no el final",
      action: "Mantén seguimiento regular con tu profesional"
    }
  ]

  const currentCardData = cards[currentCard]
  const totalCards = cards.length
  const progress = ((currentCard + 1) / totalCards) * 100

  const nextCard = () => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(currentCard + 1)
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
    }
  }

  const resetCards = () => {
    setCurrentCard(0)
  }

  const categoryCounts = cards.reduce((acc, card) => {
    acc[card.category] = (acc[card.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const currentCategoryProgress = cards.filter(card => 
    card.category === currentCardData.category
  ).findIndex(card => card.id === currentCardData.id) + 1

  const currentCategoryTotal = categoryCounts[currentCardData.category]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      {/* Simple Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Diagnóstico TDAH: Tarjetas de Aprendizaje</h1>
          <p className="text-green-100">Una idea por tarjeta, a tu ritmo</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        
        {/* Progress Indicators */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="text-sm">
              {currentCardData.category}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {currentCard + 1} de {totalCards}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Categoría: {currentCategoryProgress}/{currentCategoryTotal}</span>
            <span>Total: {Math.round(progress)}%</span>
          </div>
        </div>

        {/* Learning Card */}
        <Card className="min-h-[500px] border-2 border-green-200 dark:border-green-800 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="text-6xl mb-4">{currentCardData.visual}</div>
            <CardTitle className="text-xl mb-2">{currentCardData.title}</CardTitle>
            <CardDescription className="text-base font-medium text-green-700 dark:text-green-300">
              {currentCardData.concept}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {currentCardData.content}
            </p>
            
            <Alert className="text-left">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>💡 Punto clave:</strong> {currentCardData.keyPoint}
              </AlertDescription>
            </Alert>
            
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg text-left">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500" />
                Acción recomendada:
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {currentCardData.action}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Controls */}
        <div className="mt-6 space-y-4">
          
          {/* Main Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              onClick={prevCard} 
              disabled={currentCard === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            
            <div className="flex gap-2">
              <Button 
                onClick={resetCards}
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reiniciar
              </Button>
            </div>
            
            {currentCard === totalCards - 1 ? (
              <Button className="flex items-center gap-2">
                Buscar Especialistas
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={nextCard}
                className="flex items-center gap-2"
              >
                Siguiente
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Quick Jump to Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(categoryCounts).map(([category, count]) => {
              const isCurrentCategory = category === currentCardData.category
              const firstCardIndex = cards.findIndex(card => card.category === category)
              
              return (
                <Button 
                  key={category}
                  onClick={() => setCurrentCard(firstCardIndex)}
                  variant={isCurrentCategory ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                >
                  {category} ({count})
                </Button>
              )
            })}
          </div>
        </div>

        {/* Category Overview */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="font-semibold mb-3 text-center">Progreso por categoría</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(categoryCounts).map(([category, count]) => {
              const completedCards = currentCard >= cards.findIndex(card => card.category === category) ? 
                Math.min(count, Math.max(0, currentCard - cards.findIndex(card => card.category === category) + 1)) : 0
              const categoryProgress = (completedCards / count) * 100
              
              return (
                <div key={category} className="text-center">
                  <div className="text-xs font-medium mb-1">{category}</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div 
                      className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${categoryProgress}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {completedCards}/{count}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Completion Message */}
        {currentCard === totalCards - 1 && (
          <Alert className="mt-6">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>¡Completaste todas las tarjetas!</strong> Ya tienes la información básica sobre el proceso diagnóstico. 
              El siguiente paso es encontrar un profesional especializado.
            </AlertDescription>
          </Alert>
        )}

      </div>
    </div>
  )
}