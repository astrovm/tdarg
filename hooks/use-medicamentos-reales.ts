"use client"

import { useEffect, useState } from "react"

import type { PreciosSnapshot } from "@/lib/medicamentos/types"

// Los precios llegan renderizados desde el servidor. Solo si el render no tuvo
// datos (Farmacity caído en ese momento) se vuelven a pedir desde el navegador.
export function useMedicamentosReales(initial: PreciosSnapshot) {
  const [snapshot, setSnapshot] = useState(initial)
  const [loading, setLoading] = useState(initial.data.length === 0)

  useEffect(() => {
    if (initial.data.length > 0) {
      return
    }

    const controller = new AbortController()

    fetch("/api/medicamentos-precios", { signal: controller.signal })
      .then(async (response) => {
        const body = (await response.json()) as {
          data?: PreciosSnapshot["data"]
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
        // Nos quedamos con el estado inicial, que ya explica el error
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
