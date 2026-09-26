"use client"

import { useEffect, useState } from "react"

import type { PriceSnapshot } from "@/lib/medications/types"

// Prices arrive rendered by the server. Only when that render had no data
// (Farmacity was down at the time) does the browser ask for them again.
export function useLivePrices(initial: PriceSnapshot) {
  const [snapshot, setSnapshot] = useState(initial)
  const [loading, setLoading] = useState(initial.data.length === 0)

  useEffect(() => {
    if (initial.data.length > 0) {
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
          setSnapshot({
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
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [initial.data.length])

  return { ...snapshot, loading }
}
