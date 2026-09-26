import { NextResponse } from "next/server";

import { getPrices, PRICES_REVALIDATE_SECONDS } from "@/lib/medications/server";

export async function GET() {
  const { data, updatedAt, stale, error } = await getPrices();

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
      stats: {
        total: data.length,
        withPrice: data.filter((m) => m.price > 0).length,
      },
    },
    {
      headers: {
        "Cache-Control": stale
          ? "no-store"
          : `public, s-maxage=${PRICES_REVALIDATE_SECONDS}, stale-while-revalidate=${PRICES_REVALIDATE_SECONDS * 4}`,
      },
    }
  );
}
