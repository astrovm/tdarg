"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type PageHeroProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function PageHero({
  title,
  description,
  children,
  className,
  overlayClassName,
  containerClassName,
  titleClassName,
  descriptionClassName,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative border-b bg-background",
        className,
      )}
    >
      {overlayClassName ? (
        <div className={cn("absolute inset-0", overlayClassName)} />
      ) : null}
      <div className={cn("container mx-auto px-4 py-12 relative z-10", containerClassName)}>
        <h1 className={cn("text-4xl font-bold text-foreground mb-4", titleClassName)}>{title}</h1>
        {description ? (
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}
