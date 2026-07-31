"use client";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

type MotionTarget = HTMLElement | SVGElement;
type MotionTargets = MotionTarget | ArrayLike<MotionTarget>;

export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 28000,
  },
  easing: {
    standard: "easeOutCubic",
    entrance: "easeOutCubic",
    linear: "linear",
  },
  distance: {
    sm: 14,
    md: 20,
  },
} as const;

function toArray(targets: MotionTargets) {
  if (typeof (targets as MotionTarget).style !== "undefined") {
    return [targets as MotionTarget];
  }

  return Array.from(targets as ArrayLike<MotionTarget>);
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(reducedMotionQuery).matches;
}

export function stopAnimation(_targets: MotionTargets) {}

export function setVisible(targets: MotionTargets) {
  for (const target of toArray(targets)) {
    target.style.opacity = "1";
    target.style.transform = "none";
    target.style.filter = "none";
  }
}

export function prepareReveal(targets: MotionTargets) {
  setVisible(targets);
}

export function observeOnce(_element: Element, onEnter: () => void) {
  onEnter();
  return () => undefined;
}

export function revealUp(targets: MotionTargets) {
  setVisible(targets);
  return null;
}

export function revealScale(targets: MotionTargets) {
  setVisible(targets);
  return null;
}

export function revealDivider(targets: MotionTargets) {
  setVisible(targets);
  return null;
}

export function marqueeTrack(targets: MotionTargets) {
  setVisible(targets);
  return null;
}

export function pauseAnimation(animation: { pause?: () => void } | null | undefined) {
  animation?.pause?.();
}
