import { afterEach, describe, expect, spyOn, test } from "bun:test";
import { act, renderHook, waitFor } from "@testing-library/react";

import type { PriceSnapshot } from "@/lib/medications/types";
import { medication } from "@/test/fixtures";

import { useLivePrices } from "./use-live-prices";

const EMPTY: PriceSnapshot = {
  data: [],
  updatedAt: "2026-09-26T00:00:00.000Z",
  stale: true,
  error: "timeout",
};

let fetchSpy: ReturnType<typeof spyOn<typeof globalThis, "fetch">> | undefined;

afterEach(() => {
  fetchSpy?.mockRestore();
  fetchSpy = undefined;
});

describe("useLivePrices", () => {
  test("uses the server-rendered prices without fetching", () => {
    fetchSpy = spyOn(globalThis, "fetch");
    const initial = { ...EMPTY, data: [medication()], stale: false, error: undefined };

    const { result } = renderHook(() => useLivePrices(initial));

    expect(result.current).toEqual({ ...initial, loading: false });
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  test("fetches prices when the server render had none", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockResolvedValue(
      Response.json({ data: [medication()], timestamp: "2026-09-26T10:00:00.000Z", stale: false }),
    );

    const { result } = renderHook(() => useLivePrices(EMPTY));
    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(fetchSpy.mock.calls[0][0]).toBe("/api/prices");
    expect(result.current.data).toEqual([medication()]);
    expect(result.current.updatedAt).toBe("2026-09-26T10:00:00.000Z");
    expect(result.current.stale).toBe(false);
  });

  test("uses the current time when the response has no timestamp", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockResolvedValue(
      Response.json({ data: [medication()], stale: true, error: "timeout" }),
    );

    const { result } = renderHook(() => useLivePrices(EMPTY));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(Date.parse(result.current.updatedAt)).toBeGreaterThan(Date.parse(EMPTY.updatedAt));
    expect(result.current.stale).toBe(true);
  });

  test("keeps the initial state when the API has no prices", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockResolvedValue(
      Response.json({ data: [], stale: true }, { status: 503 }),
    );

    const { result } = renderHook(() => useLivePrices(EMPTY));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current).toEqual({ ...EMPTY, loading: false });
  });

  test("keeps the initial state when the request fails", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockRejectedValue(new Error("offline"));

    const { result } = renderHook(() => useLivePrices(EMPTY));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data).toEqual([]);
  });

  test("stops loading when the server sends prices while the request is in flight", async () => {
    fetchSpy = spyOn(globalThis, "fetch").mockReturnValue(new Promise(() => {}));
    const fresh = { ...EMPTY, data: [medication()], stale: false, error: undefined };

    const { result, rerender } = renderHook(({ initial }) => useLivePrices(initial), {
      initialProps: { initial: EMPTY },
    });
    expect(result.current.loading).toBe(true);

    const signal = (fetchSpy.mock.calls[0][1] as RequestInit).signal!;
    rerender({ initial: fresh });

    expect(result.current).toEqual({ ...fresh, loading: false });
    expect(signal.aborted).toBe(true);
  });

  test("keeps loading while the new request runs after an aborted one settles", async () => {
    const fresh = { ...EMPTY, data: [medication()], stale: false, error: undefined };
    let failFirst: (error: Error) => void = () => {};
    fetchSpy = spyOn(globalThis, "fetch")
      .mockReturnValueOnce(new Promise((_, reject) => (failFirst = reject)))
      .mockReturnValue(new Promise(() => {}));

    const { result, rerender } = renderHook(({ initial }) => useLivePrices(initial), {
      initialProps: { initial: EMPTY },
    });
    rerender({ initial: fresh });
    rerender({ initial: EMPTY });
    await act(async () => failFirst(new Error("aborted")));

    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(result.current.loading).toBe(true);
  });

  test("aborts the request on unmount", () => {
    fetchSpy = spyOn(globalThis, "fetch").mockReturnValue(new Promise(() => {}));

    const { unmount } = renderHook(() => useLivePrices(EMPTY));
    const signal = (fetchSpy.mock.calls[0][1] as RequestInit).signal!;
    unmount();

    expect(signal.aborted).toBe(true);
  });
});
