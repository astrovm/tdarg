import type { LucideIcon } from "lucide-react";

export type StepDefinition = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  // Color classes for the step icon (background and text)
  accent: string;
};

export type GuideAction = {
  href: string;
  label: string;
};
