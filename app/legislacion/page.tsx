import { splitBullet } from "@/lib/legislation";
import type { Metadata } from "next";
import { BookOpen, ReceiptText } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { References } from "@/components/references";
import { sectionAccent, sectionText } from "@/lib/sections";

export const metadata: Metadata = {
  title: "Legislación: receta y cobertura de medicamentos para TDAH",
  description:
    "Por qué sigue siendo difícil conseguir estimulantes en Argentina: receta oficial de Lista II, receta electrónica y cobertura PMO de medicamentos para TDAH.",
  alternates: { canonical: "/legislacion" },
};

const laws = [
  {
    label: "Receta",
    heading: "Por qué sigue siendo difícil conseguir estimulantes",
    description:
      "Metilfenidato y lisdexanfetamina están en Lista II de la Ley 19.303. Esa ley no los trata como una receta común: exige un circuito oficial de control entre médico, farmacia y autoridad sanitaria. La normativa nacional ya ordenó llevar ese circuito a receta electrónica, pero para Lista II todavía depende de que jurisdicciones, plataformas, repositorios y farmacias estén adaptados.",
    keyPoints: [
      "Circuito original: Ley 19.303 exige formulario oficial por triplicado: una parte queda en farmacia, otra va a la autoridad sanitaria y otra queda con el médico.",
      "Circuito digital: Resolución 2214/2025 exige receta electrónica para medicamentos de expendio legalmente restringido, con plataforma registrada, repositorio, CUIR, firma, REFEPS, libro digital y acceso para fiscalización.",
      "Plazo vencido: El plazo nacional de adecuación para Lista II ya venció, pero eso no significa que el circuito funcione en cada farmacia.",
      "Problema para el paciente: Si el circuito digital no está operativo, la farmacia vuelve al papel oficial. El costo lo paga el paciente: más trámites, demoras y riesgo de quedarse sin medicación.",
    ],
    jurisdictions: [
      "Nación: Define el estándar digital y la obligación de receta electrónica para estos medicamentos.",
      "Jurisdicción local: Debe adaptar permisos, fiscalización, registros y reglas para que el circuito digital reemplace al recetario físico.",
      "Farmacia/plataforma: Tiene que poder validar la receta, registrarla, archivarla y dejarla disponible para control sanitario.",
    ],
  },
  {
    label: "Cobertura",
    heading: "Por qué la cobertura no llega al 70%",
    description:
      "El PMO no cubre “TDAH” como diagnóstico: cubre medicamentos concretos dentro de listados, porcentajes y precios de referencia. En la Resolución 310/2004, metilfenidato figura con cobertura del 40%. El 70% está reservado para medicamentos destinados a patologías crónicas prevalentes incluidas en ese esquema; TDAH no está reconocido legalmente como crónico para esa cobertura.",
    keyPoints: [
      "Metilfenidato: Figura en PMO con 40%, no 70%.",
      "Lisdexanfetamina y atomoxetina: No aparecen en la Resolución 310/2004; si tienen cobertura, depende del plan o vademécum del financiador.",
      "Uso crónico: Que el tratamiento sea continuo no convierte legalmente al medicamento en cobertura obligatoria del 70%.",
      "Precio de referencia: El porcentaje puede aplicarse sobre precio de referencia o reglas del plan, no necesariamente sobre el precio final de farmacia.",
      "Reclamos: Se puede reclamar una negativa o pedir revisión, pero la norma citada no obliga a cubrir TDAH al 70%.",
    ],
    jurisdictions: [
      "PMO: Define el piso obligatorio para medicamentos listados.",
      "Financiador: Aplica vademécum, precios de referencia y reglas de plan sobre ese piso.",
      "Paciente: Puede pedir explicación por escrito de una negativa, pero no hay garantía legal de 70% para TDAH en esta norma.",
    ],
  },
];

const documentationSources = {
  sources: [
    {
      title: "Ley 19.303 - Psicotrópicos",
      description: "Régimen legal de psicotrópicos y formularios oficiales.",
      reference: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/20000-24999/20966/texact.htm",
    },
    {
      title: "Ley 27.553 - Recetas electrónicas o digitales",
      description: "Marco nacional para prescripción y dispensación electrónica o digital.",
      reference: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/340000-344999/340919/texact.htm",
    },
    {
      title: "Decreto 98/2023 - Reglamentación Ley 27.553",
      description: "Reglamentación original de receta electrónica o digital.",
      reference: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/380000-384999/380005/norma.htm",
    },
    {
      title: "Decreto 345/2024 - Receta electrónica",
      description: "Modifica la reglamentación y define obligatoriedad según adhesión jurisdiccional.",
      reference: "InfoLeg",
      url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/395000-399999/398297/norma.htm",
    },
    {
      title: "Resolución 2214/2025 - Receta electrónica",
      description: "Define alcance técnico, repositorios, CUIR y subtipos de prescripción.",
      reference: "Ministerio de Salud",
      url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-2214-2025-415349/texto",
    },
    {
      title: "Disposición 1/2025 - Sistemas de información sanitaria",
      description: "Requisitos técnicos para plataformas, repositorios e interoperabilidad.",
      reference: "Ministerio de Salud",
      url: "https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-1-2025-415504/texto",
    },
    {
      title: "PBA Resolución 140/2025",
      description: "Reglas provinciales sobre comprobantes de validación y formularios oficiales.",
      reference: "Normas PBA",
      url: "https://normas.gba.gob.ar/documentos/BMaJDOca.pdf",
    },
    {
      title: "CABA Ley 6439",
      description: "Receta papel, electrónica y digital en CABA; exclusión de circuitos especiales.",
      reference: "Boletín Oficial CABA",
      url: "https://boletinoficial.buenosaires.gob.ar/normativaba/norma/564546",
    },
    {
      title: "Resolución 310/2004 - Cobertura de medicamentos",
      description: "Cobertura PMO para medicamentos ambulatorios y de uso crónico.",
      reference: "Ministerio de Salud",
      url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-310-2004-94218/texto",
    },
  ],
};

export default function LegislationPage() {
  const references = documentationSources.sources.map((source, index) => ({
    id: index + 1,
    title: source.title,
    description: source.description,
    year: source.reference?.replace(/[()]/g, ""),
    url: source.url,
  }));

  const lawIcons = [ReceiptText, BookOpen];
  const lawTone = {
    icon: sectionAccent.legislation,
    label: sectionText.legislation,
    dot: "bg-amber-500",
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <PageHero
        title="Leyes sobre TDAH en Argentina"
        description="Receta y cobertura de medicación."
        containerClassName="max-w-4xl"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-4">
          {laws.map((law, index) => {
            const Icon = lawIcons[index] ?? BookOpen;

            return (
            <Card
              key={law.heading}
              className="overflow-hidden bg-card border shadow-xs"
            >
              <CardHeader className="pb-3">
                <div className="flex gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${lawTone.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className={`mb-1 text-xs font-medium uppercase tracking-wide ${lawTone.label}`}>
                      {law.label}
                    </div>
                    <CardTitle className="text-xl text-foreground leading-snug" role="heading" aria-level={2}>
                      {law.heading}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="mb-4 max-w-4xl text-base leading-7 text-foreground/80">
                  {law.description}
                </p>

                {law.keyPoints.length > 0 && (
                  <div className="rounded-md border bg-muted/40 p-4">
                    <div className={`mb-3 text-xs font-medium uppercase tracking-wide ${lawTone.label}`}>
                      Puntos clave
                    </div>
                    <ul className="grid grid-cols-1 gap-3 text-[15px]">
                      {law.keyPoints.map((point) => {
                        const bullet = splitBullet(point);

                        return (
                          <li key={point} className="flex items-start gap-3">
                            <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${lawTone.dot}`} />
                            <span className="leading-relaxed text-foreground/80">
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

                {law.jurisdictions && (
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {law.jurisdictions.map((item) => {
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

        <References references={references} />
      </main>
    </div>
  );
}
