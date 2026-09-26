import { afterEach, describe, expect, test } from "bun:test";
import { act, renderHook } from "@testing-library/react";

import { useGuideStep } from "./use-guide-step";

afterEach(() => {
  window.history.replaceState(null, "", "/diagnostico");
});

describe("useGuideStep", () => {
  test("starts at step 1 without a step in the URL", () => {
    window.history.replaceState(null, "", "/diagnostico");
    const { result } = renderHook(() => useGuideStep(4));

    expect(result.current.currentStep).toBe(1);
  });

  test("reads a valid step from the URL and ignores invalid ones", () => {
    window.history.replaceState(null, "", "/diagnostico?paso=3");
    expect(renderHook(() => useGuideStep(4)).result.current.currentStep).toBe(3);

    window.history.replaceState(null, "", "/diagnostico?paso=9");
    expect(renderHook(() => useGuideStep(4)).result.current.currentStep).toBe(1);
  });

  test("goes to a step and writes it to the URL", () => {
    const { result } = renderHook(() => useGuideStep(4));

    act(() => result.current.goTo(2));

    expect(result.current.currentStep).toBe(2);
    expect(window.location.search).toBe("?paso=2");
  });

  test("clamps to the first and last step", () => {
    const { result } = renderHook(() => useGuideStep(4));

    act(() => result.current.goTo(10));
    expect(result.current.currentStep).toBe(4);

    act(() => result.current.goTo(0));
    expect(result.current.currentStep).toBe(1);
    expect(window.location.search).toBe("");
  });

  test("does not add a history entry for the current step", () => {
    const { result } = renderHook(() => useGuideStep(4));
    const length = window.history.length;

    act(() => result.current.goTo(1));

    expect(window.history.length).toBe(length);
  });

  test("follows the browser Back button", () => {
    const { result } = renderHook(() => useGuideStep(4));
    act(() => result.current.goTo(3));

    act(() => {
      window.history.replaceState(null, "", "/diagnostico?paso=2");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });

    expect(result.current.currentStep).toBe(2);
  });
});
