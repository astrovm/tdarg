import type { LucideIcon } from "lucide-react";

export type StepDefinition = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description?: string;
};
