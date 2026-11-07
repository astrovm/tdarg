"use client"

import { useEffect, useState } from "react"

import type { PriceSnapshot } from "@/lib/medications/types"

// Prices arrive rendered by the server. Only when that render had no data
// (Alfa Beta was down at the time) does the browser ask for them again.
export function useLivePrices(initial: PriceSnapshot) {
  const [fetched, setFetched] = useState<PriceSnapshot | null>(null)
  const [settled, setSettled] = useState(false)
  const hasInitial = initial.data.length > 0

  useEffect(() => {
    if (hasInitial) {
      return
    }

    const controller = new AbortController()

    fetch("/api/prices", { signal: controller.signal })
      .then(async (response) => {
        const body = (await response.json()) as {
          data?: PriceSnapshot["data"]
          timestamp?: string
          stale?: boolean
          error?: string
        }
        if (body.data?.length) {
          setFetched({
            data: body.data,
            updatedAt: body.timestamp ?? new Date().toISOString(),
            stale: Boolean(body.stale),
            error: body.error,
          })
        }
      })
      .catch(() => {
        // Keep the initial state, which already explains the error
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setSettled(true)
        }
      })

    return () => controller.abort()
  }, [hasInitial])

  // What the server sends always wins, even if it arrives while the request
  // is in flight. Otherwise the fetched prices, or the empty initial state.
  if (hasInitial) {
    return { ...initial, loading: false }
  }
  return { ...(fetched ?? initial), loading: !settled }
}
