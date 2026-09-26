import type { Metadata } from "next";

import { Header } from "@/components/header";
import { getPrecios } from "@/lib/medicamentos/server";

import { PreciosClient } from "./precios-client";

export const metadata: Metadata = {
  title: "Precios de medicamentos para TDAH",
  description:
    "Precios actualizados de metilfenidato, lisdexanfetamina, atomoxetina y otros medicamentos para TDAH en Argentina, con precio por mg y estimación con cobertura.",
  alternates: { canonical: "/precios" },
};

// Mismo intervalo que la caché de precios (15 minutos)
export const revalidate = 900;

export default async function PreciosPage() {
  const precios = await getPrecios();

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <PreciosClient initial={precios} />
    </div>
  );
}
