"use client";

import { BookOpen, GraduationCap, ReceiptText, ShieldCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { References } from "@/components/references";

const leyes = [
  {
    etiqueta: "Receta",
    numero: "Por qué sigue siendo difícil conseguir estimulantes",
    descripcion:
      "Metilfenidato y lisdexanfetamina están en Lista II de la Ley 19.303. Esa ley no los trata como una receta común: exige un circuito oficial de control entre médico, farmacia y autoridad sanitaria. La receta electrónica nacional ya debería reemplazar ese circuito en papel, pero para Lista II todavía depende de que jurisdicciones, plataformas, repositorios y farmacias estén adaptados.",
    puntosClave: [
      "Circuito original: Ley 19.303 exige formulario oficial por triplicado: una parte queda en farmacia, otra va a la autoridad sanitaria y otra queda con el médico.",
      "Circuito digital: Resolución 2214/2025 exige receta electrónica para medicamentos de expendio legalmente restringido, con plataforma registrada, repositorio, CUIR, firma, REFEPS, libro digital y acceso para fiscalización.",
      "Plazo vencido: El plazo nacional de adecuación para Lista II ya venció, pero eso no significa que el circuito funcione en cada farmacia.",
      "Problema para el paciente: Si el circuito digital no está operativo, la farmacia vuelve al papel oficial. El costo lo paga el paciente: más trámites, demoras y riesgo de quedarse sin medicación.",
    ],
    jurisdicciones: [
      "Nación: Define el estándar digital y la obligación de receta electrónica para estos medicamentos.",
      "Jurisdicción local: Debe adaptar permisos, fiscalización, registros y reglas para que el circuito digital reemplace al recetario físico.",
      "Farmacia/plataforma: Tiene que poder validar la receta, registrarla, archivarla y dejarla disponible para control sanitario.",
    ],
  },
  {
    etiqueta: "Cobertura",
    numero: "Por qué la cobertura suele quedar corta",
    descripcion:
      "El PMO no cubre “TDAH” como diagnóstico: cubre medicamentos concretos dentro de listados, porcentajes y precios de referencia. En la Resolución 310/2004, metilfenidato figura con cobertura del 40%. El 70% está reservado para medicamentos destinados a patologías crónicas prevalentes incluidas en ese esquema; TDAH no está reconocido legalmente como crónico para esa cobertura.",
    puntosClave: [
      "Metilfenidato: Figura en PMO con 40%, no 70%.",
      "Lisdexanfetamina y atomoxetina: No aparecen en la Resolución 310/2004; si tienen cobertura, depende del plan o vademécum del financiador.",
      "Uso crónico: Que el tratamiento sea continuo no convierte legalmente al medicamento en cobertura obligatoria del 70%.",
      "Precio de referencia: El porcentaje puede aplicarse sobre precio de referencia o reglas del plan, no necesariamente sobre el precio final de farmacia.",
      "Reclamos: Se puede reclamar una negativa o pedir revisión, pero la norma citada no obliga a cubrir TDAH al 70%.",
    ],
    jurisdicciones: [
      "PMO: Define el piso obligatorio para medicamentos listados.",
      "Financiador: Aplica vademécum, precios de referencia y reglas de plan sobre ese piso.",
      "Paciente: Puede pedir explicación por escrito de una negativa, pero no hay garantía legal de 70% para TDAH en esta norma.",
    ],
  },
  {
    etiqueta: "Educación",
    numero: "Adaptaciones educativas",
    descripcion:
      "La Ley 27.306 permite pedir adecuaciones para cursar y rendir cuando hay diagnóstico formal de dificultad específica del aprendizaje.",
    puntosClave: [
      "Qué pedir: Más tiempo, pausas, consignas por escrito, evaluación oral o escrita según necesidad y herramientas tecnológicas.",
      "Cómo pedirlo: Presentar diagnóstico formal y dejar el pedido por escrito.",
      "Criterio: No es una ventaja; es una adecuación de acceso.",
      "CUD: No hace falta CUD para pedir adaptaciones educativas por Ley 27.306.",
    ],
  },
  {
    etiqueta: "CUD",
    numero: "CUD y discapacidad",
    descripcion:
      "TDAH por sí solo no implica CUD. Solo puede corresponder si una junta interdisciplinaria certifica una limitación funcional significativa.",
    puntosClave: [
      "No es automático: El diagnóstico de TDAH no alcanza por sí mismo para obtener CUD.",
      "Evaluación: La discapacidad se define por limitación funcional, no por el nombre del diagnóstico.",
      "Cobertura: Para medicación de TDAH, la vía habitual es PMO o reclamo al financiador, no CUD.",
    ],
  },
];

const fuentesDocumentacion = {
  fuentes: [
    {
      titulo: "Ley 19.303 - Psicotrópicos",
      descripcion: "Régimen legal de psicotrópicos y formularios oficiales.",
      referencia: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/20000-24999/20966/texact.htm",
    },
    {
      titulo: "Ley 27.553 - Recetas electrónicas o digitales",
      descripcion: "Marco nacional para prescripción y dispensación electrónica o digital.",
      referencia: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/340000-344999/340919/texact.htm",
    },
    {
      titulo: "Decreto 98/2023 - Reglamentación Ley 27.553",
      descripcion: "Reglamentación original de receta electrónica o digital.",
      referencia: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/380000-384999/380005/norma.htm",
    },
    {
      titulo: "Decreto 345/2024 - Receta electrónica",
      descripcion: "Modifica la reglamentación y define obligatoriedad según adhesión jurisdiccional.",
      referencia: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/395000-399999/398297/norma.htm",
    },
    {
      titulo: "Resolución 2214/2025 - Receta electrónica",
      descripcion: "Define alcance técnico, repositorios, CUIR y subtipos de prescripción.",
      referencia: "Ministerio de Salud",
      url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-2214-2025-415349/texto",
    },
    {
      titulo: "Disposición 1/2025 - Sistemas de información sanitaria",
      descripcion: "Requisitos técnicos para plataformas, repositorios e interoperabilidad.",
      referencia: "Ministerio de Salud",
      url: "https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-1-2025-415504/texto",
    },
    {
      titulo: "PBA Resolución 140/2025",
      descripcion: "Reglas provinciales sobre comprobantes de validación y formularios oficiales.",
      referencia: "Normas PBA",
      url: "https://normas.gba.gob.ar/documentos/BMaJDOca.pdf",
    },
    {
      titulo: "CABA Ley 6439",
      descripcion: "Receta papel, electrónica y digital en CABA; exclusión de circuitos especiales.",
      referencia: "Boletín Oficial CABA",
      url: "https://boletinoficial.buenosaires.gob.ar/normativaba/norma/564546",
    },
    {
      titulo: "Resolución 310/2004 - Cobertura de medicamentos",
      descripcion: "Cobertura PMO para medicamentos ambulatorios y de uso crónico.",
      referencia: "Ministerio de Salud",
      url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-310-2004-94218/texto",
    },
    {
      titulo: "Ley 27.306 - Dificultades Específicas del Aprendizaje",
      descripcion: "Adecuaciones educativas para dificultades específicas del aprendizaje.",
      referencia: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/265000-269999/267234/norma.htm",
    },
    {
      titulo: "Ley 24.901 - Prestaciones básicas por discapacidad",
      descripcion: "Cobertura integral para personas con discapacidad certificada.",
      referencia: "Argentina.gob.ar",
      url: "https://www.argentina.gob.ar/normativa/nacional/ley-24901-47677/actualizacion",
    },
    {
      titulo: "Ley 22.431 - Sistema de protección integral de discapacidad",
      descripcion: "Definición legal de discapacidad y certificado.",
      referencia: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/20000-24999/20620/norma.htm",
    },
  ],
  notaLegal: "Información educativa basada en fuentes públicas. No reemplaza asesoramiento médico ni legal.",
};

export default function LegislacionPage() {
  const splitBullet = (text: string) => {
    const separatorIndex = text.indexOf(":");

    if (separatorIndex === -1) {
      return { label: null, body: text };
    }

    return {
      label: text.slice(0, separatorIndex),
      body: text.slice(separatorIndex + 1).trim(),
    };
  };

  const references = fuentesDocumentacion.fuentes.map((fuente, index) => ({
    id: index + 1,
    title: fuente.titulo,
    description: fuente.descripcion,
    year: fuente.referencia?.replace(/[()]/g, ""),
    url: fuente.url,
  }));

  const lawIcons = [ReceiptText, BookOpen, GraduationCap, ShieldCheck];
  const lawTones = [
    {
      icon: "bg-amber-500/12 text-amber-700 dark:text-amber-300",
      label: "text-amber-700 dark:text-amber-300",
      dot: "bg-amber-500",
    },
    {
      icon: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
      label: "text-sky-700 dark:text-sky-300",
      dot: "bg-sky-500",
    },
    {
      icon: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
      label: "text-emerald-700 dark:text-emerald-300",
      dot: "bg-emerald-500",
    },
    {
      icon: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
      label: "text-violet-700 dark:text-violet-300",
      dot: "bg-violet-500",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageHero
        title="Leyes sobre TDAH en Argentina"
        description="Receta, cobertura de medicación y adaptaciones educativas."
      />

      {/* Laws Section */}
      <div className="bg-muted/30 border-y">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-5xl mx-auto space-y-4">
            {leyes.map((ley, index) => {
              const Icon = lawIcons[index] ?? BookOpen;
              const tone = lawTones[index] ?? lawTones[0];

              return (
              <Card
                key={ley.numero}
                className="overflow-hidden bg-card border shadow-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex gap-3">
                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tone.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className={`mb-1 text-xs font-medium uppercase tracking-wide ${tone.label}`}>
                        {ley.etiqueta}
                      </div>
                      <CardTitle className="text-xl text-foreground leading-snug">
                        {ley.numero}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {ley.descripcion}
                  </p>

                  {ley.puntosClave.length > 0 && (
                    <div className="rounded-md border bg-muted/40 p-4">
                      <div className={`mb-3 text-xs font-medium uppercase tracking-wide ${tone.label}`}>
                        Puntos clave
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {ley.puntosClave.map((punto) => {
                          const bullet = splitBullet(punto);

                          return (
                            <li key={punto} className="flex items-start gap-3">
                              <div className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${tone.dot}`} />
                              <span className="text-muted-foreground leading-relaxed">
                                {bullet.label && (
                                  <strong className="text-foreground">
                                    {bullet.label}:{" "}
                                  </strong>
                                )}
                                {bullet.body}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {ley.jurisdicciones && (
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {ley.jurisdicciones.map((item) => {
                        const bullet = splitBullet(item);

                        return (
                          <div
                            key={item}
                            className="rounded-md bg-muted/35 p-3 text-sm leading-relaxed"
                          >
                            {bullet.label && (
                              <div className="mb-1 font-semibold text-foreground">
                                {bullet.label}
                              </div>
                            )}
                            <p className="text-muted-foreground">
                              {bullet.body}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <References references={references} />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {fuentesDocumentacion.notaLegal}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
