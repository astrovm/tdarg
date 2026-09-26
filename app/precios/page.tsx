import type { Metadata } from "next";

import { Header } from "@/components/header";
import { getPrices } from "@/lib/medications/server";

import { PricesClient } from "./prices-client";

export const metadata: Metadata = {
  title: "Precios de medicamentos para TDAH",
  description:
    "Precios actualizados de metilfenidato, lisdexanfetamina, atomoxetina y otros medicamentos para TDAH en Argentina, con precio por mg y estimación con cobertura.",
  alternates: { canonical: "/precios" },
};

// Same interval as the price cache (15 minutes)
export const revalidate = 900;

export default async function PreciosPage() {
  const prices = await getPrices();

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <PricesClient initial={prices} />
    </div>
  );
}
