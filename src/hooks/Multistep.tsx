import { useState } from "react";
import { Step, MultistepFormHook } from "../types/typings.d";

export function useMultistepform(steps: Step[]): MultistepFormHook {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function back() {
    setCurrentStepIndex((i) => Math.max(i - 1, 0));
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  const multistepFormHook: MultistepFormHook = {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };

  return multistepFormHook;
}
