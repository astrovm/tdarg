import { NextResponse } from "next/server";

import { getPrecios, PRECIOS_REVALIDATE_SECONDS } from "@/lib/medicamentos/server";

export async function GET() {
  const { data, updatedAt, stale, error } = await getPrecios();

  if (data.length === 0) {
    return NextResponse.json(
      { data, timestamp: updatedAt, total: 0, stale, error },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  return NextResponse.json(
    {
      data,
      timestamp: updatedAt,
      total: data.length,
      stale,
      error,
      estadisticas: {
        total: data.length,
        con_precio: data.filter((m) => m.precio > 0).length,
      },
    },
    {
      headers: {
        "Cache-Control": stale
          ? "no-store"
          : `public, s-maxage=${PRECIOS_REVALIDATE_SECONDS}, stale-while-revalidate=${PRECIOS_REVALIDATE_SECONDS * 4}`,
      },
    }
  );
}
