"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/precios", label: "Precios" },
  { href: "/especialistas", label: "Especialistas" },
  { href: "/legislacion", label: "Legislación" },
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/comorbilidades", label: "Comorbilidades" },
];

const focusRing =
  "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className={cn("flex items-center gap-2", focusRing)}>
            <Brain className="h-7 w-7 text-primary sm:h-8 sm:w-8" aria-hidden="true" />
            <span className="text-xl font-bold text-foreground sm:text-2xl">Tdarg</span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            <nav aria-label="Principal" className="flex items-center gap-5">
              {navigationItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      focusRing,
                      "py-1",
                      active
                        ? "font-medium text-primary"
                        : "text-muted-foreground transition-colors hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">{mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-menu" aria-label="Principal" className="mt-3 border-t pt-2 lg:hidden">
            <ul className="flex flex-col">
              {navigationItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        focusRing,
                        "flex min-h-11 items-center px-2",
                        active
                          ? "font-medium text-primary"
                          : "text-muted-foreground transition-colors hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
