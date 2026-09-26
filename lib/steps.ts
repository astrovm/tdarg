import type { LucideIcon } from "lucide-react";

export type StepDefinition = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  // Clases de color para el ícono del paso (fondo + texto)
  accent: string;
};

export type GuideAction = {
  href: string;
  label: string;
};
