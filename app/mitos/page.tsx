import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, XCircle, AlertTriangle, Brain, Users, GraduationCap, Pill } from "lucide-react"
import { Header } from "@/components/header"
import { References, type Reference } from "@/components/references"
import { CitationLink } from "@/components/citation-link"

const references: Reference[] = [
  {
    id: 1,
    title: "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Hallowell, E. M., & Ratey, J. J.",
    url: "/adhd-2.0.pdf",
    description: "Libro que actualiza la comprensión del TDAH, desmitificando conceptos erróneos y presentando un enfoque basado en fortalezas.",
    year: "2021",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre Trastorno por Déficit de Atención e Hiperactividad (TDAH) a lo largo de la vida",
    authors: "Moina, C., et al.",
    url: "/primer-consenso-argentino-tdah-1.pdf",
    description: "El consenso de expertos argentinos que valida la existencia del TDAH como una condición médica real y aborda su persistencia en la adultez.",
    year: "2020",
  },
  {
    id: 3,
    title: "International Consensus Statement on ADHD",
    authors: "Faraone, S. V., et al.",
    url: "/international-consensus-208-conclusions.pdf",
    description: "Declaración de consenso internacional firmada por 208 expertos que confirma la validez científica del TDAH y la seguridad de su tratamiento.",
    year: "2021",
  },
];

export default function MitosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Desmitificando el TDAH
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Separando mitos de realidades basadas en evidencia científica<CitationLink number={1} /><CitationLink number={2} /><CitationLink number={3} />
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Importante:</strong> Los mitos sobre el TDAH han contribuido al subdiagnóstico y estigmatización. 
          La información científica actual contradice muchas creencias populares erróneas.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        {/* Mito sobre la existencia del TDAH */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <XCircle className="h-6 w-6 text-red-500" />
              "El TDAH no existe, es una invención"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">MITO</h4>
                <ul className="text-sm space-y-1">
                  <li>• "Es una excusa para la pereza"</li>
                  <li>• "Inventado por farmacéuticas"</li>
                  <li>• "Medicalización de la infancia"</li>
                  <li>• "No es una condición real"</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">REALIDAD CIENTÍFICA</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Reconocido por la OMS</strong> como trastorno del neurodesarrollo</li>
                  <li>• <strong>Base neurobiológica sólida:</strong> Diferencias cerebrales demostradas</li>
                  <li>• <strong>Heredabilidad del 70-80%:</strong> Componente genético fuerte</li>
                  <li>• <strong>Consenso médico internacional</strong> sobre su existencia</li>
                  <li>• <strong>Investigación de más de 100 años</strong> desde Still (1902)</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Evidencia Neurobiológica
              </h4>
              <p className="text-sm">
                Estudios de neuroimagen muestran diferencias consistentes en la estructura y función cerebral. 
                Las áreas afectadas incluyen la corteza prefrontal, ganglios basales y cerebelo, 
                fundamentales para la atención, control de impulsos y funciones ejecutivas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mito sobre ser "solo de niños" */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <XCircle className="h-6 w-6 text-red-500" />
              "El TDAH es solo de niños, se cura con la edad"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">MITO</h4>
                <ul className="text-sm space-y-1">
                  <li>• "Los adultos no tienen TDAH"</li>
                  <li>• "Se supera en la adolescencia"</li>
                  <li>• "Es cuestión de madurar"</li>
                  <li>• "Los síntomas desaparecen naturalmente"</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">REALIDAD CIENTÍFICA</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>45-85% persiste en la adultez</strong> según estudios longitudinales<CitationLink number={2} /><CitationLink number={3} /></li>
                  <li>• <strong>2.5% de prevalencia</strong> en adultos globalmente</li>
                  <li>• <strong>Evoluciona, no desaparece:</strong> Los síntomas se adaptan a demandas adultas</li>
                  <li>• <strong>Diagnósticos tardíos crecientes:</strong> Especialmente en mujeres</li>
                  <li>• <strong>Impacto severo no tratado:</strong> En trabajo, relaciones y salud</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-500 mb-1">67%</div>
                <div className="text-sm text-muted-foreground">Mantiene síntomas en promedio</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-purple-500 mb-1">1.9:1</div>
                <div className="text-sm text-muted-foreground">Proporción H:M en adultos</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-500 mb-1">30-40</div>
                <div className="text-sm text-muted-foreground">Edad promedio diagnóstico tardío</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mito sobre falta de voluntad */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <XCircle className="h-6 w-6 text-red-500" />
              "Es falta de voluntad o disciplina"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">MITO</h4>
                <ul className="text-sm space-y-1">
                  <li>• "Solo necesitan esforzarse más"</li>
                  <li>• "Es pereza o falta de carácter"</li>
                  <li>• "Con más disciplina se soluciona"</li>
                  <li>• "Buscan excusas para no trabajar"</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">REALIDAD CIENTÍFICA</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Déficit neurológico real:</strong> En neurotransmisores (dopamina/noradrenalina)</li>
                  <li>• <strong>Funciones ejecutivas alteradas:</strong> No es falta de voluntad</li>
                  <li>• <strong>Red neuronal por defecto hiperactiva:</strong> Dificultad para "engancharse"</li>
                  <li>• <strong>Mejora con tratamiento:</strong> No con "más esfuerzo" únicamente</li>
                  <li>• <strong>Hiperfoco demuestra capacidad:</strong> El problema es la regulación</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <h4 className="font-semibold mb-2">Analogía Médica</h4>
              <p className="text-sm">
                Decir que el TDAH es "falta de voluntad" es como decir que la diabetes es "falta de voluntad 
                para regular el azúcar". Ambas son condiciones médicas reales que requieren tratamiento específico, 
                no solo "más esfuerzo personal".
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mito sobre la medicación */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <XCircle className="h-6 w-6 text-red-500" />
              "Los medicamentos son peligrosos y crean adicción"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">MITO</h4>
                <ul className="text-sm space-y-1">
                  <li>• "Los estimulantes son drogas peligrosas"</li>
                  <li>• "Crean adicción automáticamente"</li>
                  <li>• "Cambian la personalidad permanentemente"</li>
                  <li>• "Solo sirven para drogar niños"</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">REALIDAD CIENTÍFICA</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>70+ años de uso seguro:</strong> Desde 1950s con millones de personas</li>
                  <li>• <strong>Reduce riesgo de adicción:</strong> TDAH no tratado tiene 2x más TUS</li>
                  <li>• <strong>Dosis terapéuticas vs. abuso:</strong> Diferencia fundamental en mecanismo</li>
                  <li>• <strong>Mejoran función cerebral:</strong> Normalizan neurotransmisores deficientes</li>
                  <li>• <strong>Reversibles:</strong> Efectos desaparecen al discontinuar</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Pill className="h-4 w-4" />
                    Uso Terapéutico
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Dosis bajas, regulares</li>
                    <li>• Supervisión médica constante</li>
                    <li>• Objetivo: función normal</li>
                    <li>• Mejora calidad de vida</li>
                    <li>• Riesgo de dependencia mínimo</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-base">Abuso de Sustancias</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Dosis altas, irregulares</li>
                    <li>• Sin supervisión médica</li>
                    <li>• Objetivo: euforia/escape</li>
                    <li>• Deteriora funcionamiento</li>
                    <li>• Alto riesgo de dependencia</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Mito sobre el género */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <XCircle className="h-6 w-6 text-red-500" />
              "Es más común en niños varones"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">MITO</h4>
                <ul className="text-sm space-y-1">
                  <li>• "Las niñas no tienen TDAH"</li>
                  <li>• "Es 9:1 varones vs mujeres"</li>
                  <li>• "Las mujeres lo superan más fácil"</li>
                  <li>• "Solo se ve hiperactividad física"</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">REALIDAD CIENTÍFICA</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Proporción real 2.4:1</strong> en población general</li>
                  <li>• <strong>Subdiagnóstico masivo en mujeres:</strong> 4:1 en consultas vs 1.9:1 en adultos</li>
                  <li>• <strong>Presentación diferente:</strong> Más internalizada en mujeres</li>
                  <li>• <strong>Impacto similar o mayor:</strong> Depresión, ansiedad, baja autoestima</li>
                  <li>• <strong>Diagnósticos tardíos frecuentes:</strong> Después de los 30-40 años</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                TDAH en Mujeres: El Diagnóstico Oculto
              </h4>
              <p className="text-sm mb-2">
                Las mujeres presentan síntomas más sutiles: "soñar despiertas", hiperactividad mental, 
                perfeccionismo, sensibilidad emocional. Esto lleva a diagnósticos erróneos como 
                ansiedad o depresión únicamente.
              </p>
              <Badge variant="destructive">Consecuencia: Años de sufrimiento sin tratamiento adecuado</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Mito sobre inteligencia */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <XCircle className="h-6 w-6 text-red-500" />
              "Las personas con TDAH son menos inteligentes"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">MITO</h4>
                <ul className="text-sm space-y-1">
                  <li>• "No pueden ser exitosos académicamente"</li>
                  <li>• "Tienen menor capacidad intelectual"</li>
                  <li>• "No sirven para trabajos complejos"</li>
                  <li>• "Son estudiantes problemáticos únicamente"</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">REALIDAD CIENTÍFICA</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>CI normal o superior:</strong> Misma distribución que población general</li>
                  <li>• <strong>Fortalezas únicas:</strong> Creatividad, pensamiento divergente, energía</li>
                  <li>• <strong>Muchos profesionales exitosos:</strong> Con TDAH en diversas áreas</li>
                  <li>• <strong>Hiperfoco ventajoso:</strong> En áreas de interés especial</li>
                  <li>• <strong>Problema de expresión:</strong> No de capacidad intelectual</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Fortalezas Cognitivas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Creatividad:</strong> Pensamiento "fuera de la caja"</li>
                    <li>• <strong>Innovación:</strong> Conectar ideas aparentemente no relacionadas</li>
                    <li>• <strong>Energía mental:</strong> Cuando están interesados</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Desafíos Académicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>No es falta de inteligencia:</strong> Es problema de regulación</li>
                    <li>• <strong>Inconsistencia:</strong> Rendimiento variable según interés</li>
                    <li>• <strong>Necesidades especiales:</strong> Adaptaciones, no menos exigencia</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Profesionales Exitosos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Emprendedores:</strong> Energía e innovación</li>
                    <li>• <strong>Artistas y creativos:</strong> Pensamiento divergente</li>
                    <li>• <strong>Profesionales de crisis:</strong> Funcionan bien bajo presión</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Mito sobre causas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <XCircle className="h-6 w-6 text-red-500" />
              "Es causado por mala crianza o exceso de pantallas"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950">
                <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">MITO</h4>
                <ul className="text-sm space-y-1">
                  <li>• "Los padres son muy permisivos"</li>
                  <li>• "Demasiada TV/videojuegos lo causan"</li>
                  <li>• "Falta de límites en la familia"</li>
                  <li>• "Es culpa del azúcar o aditivos"</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">REALIDAD CIENTÍFICA</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Heredabilidad 70-80%:</strong> Principalmente genético</li>
                  <li>• <strong>Trastorno del neurodesarrollo:</strong> Se nace con él</li>
                  <li>• <strong>Factores ambientales menores:</strong> Prematurez, exposición prenatal</li>
                  <li>• <strong>Pantallas no causan TDAH:</strong> Pueden empeorar síntomas existentes</li>
                  <li>• <strong>Buenos padres también tienen hijos con TDAH:</strong> No es culpa parental</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold mb-2">Mensaje para Padres</h4>
              <p className="text-sm">
                <strong>No es su culpa.</strong> El TDAH es una condición neurobiológica con fuerte componente genético.<CitationLink number={2} /> 
                Los padres no "causan" TDAH, pero sí pueden ayudar enormemente con tratamiento apropiado, 
                estructura consistente y comprensión del trastorno.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mensaje final */}
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              La Importancia de la Información Correcta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Desmitificar el TDAH es fundamental para reducir el estigma y promover el diagnóstico y tratamiento tempranos. 
                Los mitos han causado décadas de sufrimiento innecesario, especialmente en mujeres y adultos.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Beneficios de la Información Correcta</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Búsqueda temprana de ayuda profesional</li>
                    <li>• Reducción del autoestigma y culpa</li>
                    <li>• Mejor comprensión familiar y social</li>
                    <li>• Tratamientos más efectivos y aceptados</li>
                    <li>• Prevención de comorbilidades</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Fuentes Confiables</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Consensos médicos nacionales e internacionales</li>
                    <li>• Organizaciones profesionales especializadas</li>
                    <li>• Literatura científica revisada por pares</li>
                    <li>• Profesionales especializados en TDAH</li>
                    <li>• Organizaciones de pacientes serias</li>
                  </ul>
                </div>
              </div>
              
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Recuerda:</strong> El TDAH es una condición médica real, tratable y manejable. 
                  Con información correcta, diagnóstico oportuno y tratamiento adecuado, las personas 
                  con TDAH pueden llevar vidas plenas y exitosas.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        <References references={references} />
      </div>
    </div>
    </div>
  )
}