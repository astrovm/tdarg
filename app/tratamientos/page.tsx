"use client";

import {
  Brain,
  Heart,
  Pill,
  Users,
} from "lucide-react";
import { StepGuideLayout } from "@/components/step-guide-layout";
import type { Reference } from "@/components/references";
import type { GuideAction, StepDefinition } from "@/lib/steps";

const steps = [
  { id: 1, title: "Panorama", subtitle: "Qué combina el tratamiento", icon: Brain, accent: "bg-violet-500/10 text-violet-700 dark:text-violet-300" },
  { id: 2, title: "Medicación", subtitle: "Opciones y seguimiento", icon: Pill, accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
  { id: 3, title: "Terapia", subtitle: "Herramientas psicológicas", icon: Users, accent: "bg-sky-500/10 text-sky-700 dark:text-sky-300" },
  { id: 4, title: "Rutina", subtitle: "Sueño, ejercicio y hábitos", icon: Heart, accent: "bg-rose-500/10 text-rose-700 dark:text-rose-300" },
] satisfies StepDefinition[];

const finalActions = [
  { href: "/especialistas", label: "Buscar especialistas" },
  { href: "/precios", label: "Ver precios" },
] satisfies GuideAction[];

export default function TreatmentsPage() {
  return (
    <StepGuideLayout
      title="Tratamientos para TDAH"
      description="Opciones para entender cómo se trata el TDAH"
      steps={steps}
      finalActions={finalActions}
      references={treatmentReferences}
    >
      {(currentStep) => (
        <>
          <div hidden={currentStep !== 1}>
            <div className="guide-text">
              <h3 className="text-lg font-semibold text-foreground">
                Un enfoque obligatoriamente multimodal
              </h3>
              <p>
                El tratamiento del TDAH en la edad adulta no se limita a tomar una pastilla; debe ser un abordaje <strong>multimodal</strong>. Esto significa que el plan terapéutico debe combinar psicoeducación, farmacoterapia (medicación), Terapia Cognitivo-Conductual (TCC) y un entrenamiento específico. Si bien la medicación es el pilar primordial para atenuar los síntomas nucleares del trastorno, las intervenciones no farmacológicas (psicológicas y de hábitos) son absolutamente indispensables para mitigar las consecuencias de esos síntomas y lograr una mejora real en el funcionamiento y la calidad de vida.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                La evaluación antes de empezar
              </h3>
              <p>
                Existe el gran mito de que se necesitan estudios cardíacos complejos o encefalogramas antes de poder recibir medicación. Las guías clínicas establecen que <strong>no se recomienda realizar un electrocardiograma (ECG) ni análisis de sangre de rutina</strong> a menos que exista una indicación clínica clara. El ECG o la consulta con un cardiólogo solo son necesarios si el paciente presenta antecedentes personales o familiares de enfermedades cardíacas congénitas, muerte súbita, hipertensión severa o si experimenta síntomas como desmayos o palpitaciones asociadas al esfuerzo físico. Lo único estrictamente obligatorio para iniciar el tratamiento es que el médico mida la presión arterial, la frecuencia cardíaca y el peso basal.
              </p>
            </div>
          </div>

          <div hidden={currentStep !== 2}>
            <div className="guide-text">
              <p>
                El tratamiento farmacológico se organiza en &quot;líneas&quot; de prioridad según su eficacia y el respaldo científico. Las opciones se dividen de la siguiente manera:
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Primera Línea</h4>
                  <p>
                    Los psicoestimulantes de acción prolongada son la opción más recomendada porque son más efectivos, tienen un menor riesgo de efectos adversos y de abuso, y mejoran la adherencia al evitar la toma de múltiples pastillas al día. En Argentina, los estimulantes disponibles son el <strong>metilfenidato</strong> (liberación prolongada OROS e inmediata) y la <strong>lisdexanfetamina</strong> (p.ej. Ludoxa), esta última con cobertura de acción de 10 a 14 horas.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <em>Nota legal (Argentina):</em> La Ley 19.303/71 sobre psicotrópicos exige que metilfenidato y lisdexanfetamina se prescriban con formulario oficial por triplicado, limitando las recetas a un máximo de 20 días de tratamiento.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Segunda Línea</h4>
                  <p>
                    Los fármacos no estimulantes. Aquí destaca la <strong>atomoxetina</strong>, que es el único agente de este tipo disponible en Argentina. Se utiliza cuando los estimulantes resultan ineficaces, no se toleran bien, están contraindicados, o cuando el paciente tiene una comorbilidad severa con trastornos de ansiedad o riesgo de abuso de sustancias.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Tercera Línea</h4>
                  <p>
                    Fármacos de uso <em>off-label</em> (fuera de etiqueta). Incluye medicamentos prestados de otras patologías, como el bupropión o el modafinilo, que se reservan para casos resistentes a los tratamientos estándar. La clonidina también es una opción, pero en Argentina no está disponible comercialmente y requiere ser preparada en farmacia como medicamento magistral.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                Manejo de Efectos Adversos y Mitos
              </h3>
              <p>
                Muchos pacientes abandonan la medicación por no saber cómo manejar los efectos secundarios temporales:
              </p>

              <div className="space-y-3">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">El &quot;Efecto Zombi&quot;</h4>
                  <p>
                    Algunos pacientes refieren sentir lentitud, apatía o restricción emocional extrema. Esto <strong>no</strong> significa que la medicación sea permanentemente mala para ellos, sino que &quot;la dosis es demasiado alta&quot; y está causando una inhibición excesiva. La solución no es suspender el tratamiento, sino pedirle al médico que baje la dosis.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Insomnio y &quot;Efecto Rebote&quot;</h4>
                  <p>
                    La dificultad para dormir no siempre es un efecto directo de la pastilla. Muchas veces, cuando el efecto del estimulante de acción prolongada desaparece por la noche, ocurre un &quot;rebote&quot; de los síntomas del TDAH, generando inquietud, irritabilidad y una mente que no frena. Esto se maneja ajustando el horario de la toma o sumando una dosis muy baja de liberación inmediata al anochecer para estar tranquilo al ir a la cama.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Dolor de cabeza y pérdida de peso</h4>
                  <p>
                    El estimulante suele quitar el apetito. El dolor de cabeza ocurre muchas veces porque, al no tener hambre, el paciente también olvida hidratarse adecuadamente. Se recomienda tomar la pastilla con las comidas (no antes) y programar alarmas para comer alimentos de alta densidad calórica y beber agua.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-red-500/25 bg-red-500/10 p-4 text-sm text-foreground">
                <strong>Advertencia Crítica: Alcohol y Medicación</strong>
                <p className="mt-1 text-muted-foreground">
                  Consumir bebidas alcohólicas (especialmente aquellas con un 40% o más de etanol) interactúa peligrosamente con el metilfenidato de acción prolongada. El alcohol &quot;acelera la liberación&quot; del fármaco, aumentando la concentración máxima de golpe hasta en un 22%. Esto destruye el efecto prolongado, intensifica los efectos estimulantes y promueve la creación en el hígado de un metabolito riesgoso llamado &quot;etilfenidato&quot;.
                </p>
              </div>
            </div>
          </div>

          <div hidden={currentStep !== 3}>
            <div className="guide-text">
              <p>
                Las pastillas ayudan a frenar los síntomas neurológicos, pero no enseñan las habilidades que el paciente no pudo desarrollar durante su vida. La <strong>Terapia Cognitivo-Conductual (TCC)</strong> es la intervención psicológica que cuenta con el mayor respaldo empírico en el mundo para el TDAH adulto.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                Los 6 componentes obligatorios de un programa de TCC para TDAH adulto
              </h3>

              <ol className="list-decimal space-y-4 pl-5">
                <li>
                  <span className="font-semibold text-foreground">Psicoeducación:</span>{" "}
                  Aprender sobre el trastorno, cómo afecta al cerebro y cuál es el modelo de tratamiento.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Entrenamiento ejecutivo:</span>{" "}
                  Aprender técnicas tangibles para organizarse, priorizar tareas, usar agendas/calendarios y programar descansos y recompensas.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Gestión de la atención:</span>{" "}
                  Identificar los picos de atención óptima del paciente y aprender a modificar el entorno de trabajo para evitar las distracciones (uso de alarmas y señales).
                </li>
                <li>
                  <span className="font-semibold text-foreground">Resolución de problemas:</span>{" "}
                  Aprender a descomponer los problemas grandes y abrumadores en pasos pequeños y manejables, evaluando posibles soluciones.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Regulación emocional y control de impulsos:</span>{" "}
                  Técnicas de automonitoreo y relajación para identificar los desencadenantes y frenar los estallidos de enojo o la baja tolerancia a la frustración.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Reestructuración cognitiva:</span>{" "}
                  Identificar y modificar la sensación de fracaso acumulada, la baja autoestima y las creencias disfuncionales desarrolladas a lo largo de los años de vida sin diagnóstico.
                </li>
              </ol>
            </div>
          </div>

          <div hidden={currentStep !== 4}>
            <div className="guide-text">
              <p className="font-medium text-foreground">
                El estilo de vida de una persona tiene el poder de actuar como una medicina complementaria altamente efectiva.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">El poder del ejercicio</h4>
                  <p>
                    Moverse es como tomar un estimulante natural. El ejercicio físico libera factor neurotrófico derivado del cerebro (BDNF), que funciona como un fertilizante para que crezcan nuevas conexiones neuronales. También aumenta la dopamina y la noradrenalina en el cerebro, los mismos neurotransmisores que las pastillas buscan regular. Con solo 20 a 30 minutos de ejercicio moderado se logra &quot;cambiar de marcha&quot; en el cerebro, mejorando drásticamente la capacidad de focalizar, planificar y organizar.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Higiene del sueño</h4>
                  <p>
                    Más del 80% de los adultos con TDAH sufren problemas crónicos de sueño (insomnio, síndrome de retraso de fase o &quot;mente noctámbula&quot;). Un cerebro sin descanso empeora severamente las fallas ejecutivas. Se debe practicar una estricta higiene: apagar dispositivos electrónicos y pantallas al menos una hora antes de ir a la cama, cargar los teléfonos fuera de la habitación y mantener el dormitorio oscuro y fresco.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">Nutrición</h4>
                  <p>
                    El cerebro con TDAH busca constantemente estimulación y es propenso a buscarla en el azúcar. Ingerir azúcar genera una rápida liberación de dopamina (sensación de energía y satisfacción), pero conlleva a una caída brusca (<em>crash</em>) posterior del estado de ánimo que empeora los síntomas. Se aconseja mantener una dieta libre de azúcares y se recomienda el uso de suplementos de ácidos grasos Omega-3, los cuales son vitales para nutrir las vainas de mielina que recubren las neuronas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </StepGuideLayout>
  );
}

const treatmentReferences: Reference[] = [
  {
    id: 1,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Tercera parte: tratamiento integral del TDAH",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-3.pdf",
    description: "Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
  {
    id: 2,
    title: "Primer Consenso Argentino sobre el manejo del Trastorno por Déficit de Atención e Hiperactividad en la adultez. Segunda parte: clínica del TDAH en la adultez, evaluación diagnóstica, comorbilidades y diagnósticos diferenciales",
    authors: "AAPB",
    url: "/primer-consenso-argentino-tdah-2.pdf",
    description: "Vertex Rev Arg Psiquiatr. 2025",
    year: "2025",
  },
  {
    id: 3,
    title: "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction",
    authors: "Edward M. Hallowell, John J. Ratey",
    url: "/adhd-2.0.pdf",
    description: "Estrategias prácticas y neurociencia del TDAH para adultos.",
    year: "2021",
  },
  {
    id: 4,
    title: "CADDRA Guide to ADHD Pharmacological Treatments in Canada",
    authors: "Canadian ADHD Resource Alliance (CADDRA)",
    url: "/caddra-adhd-medication-chart-2026.pdf",
    description: "Guía farmacológica sobre tratamientos para el TDAH.",
    year: "2026",
  },
];
