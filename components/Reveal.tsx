"use client";

import type { ReactNode } from "react";

export function FadeUp({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
