"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const mainNavigationItems = [
  { href: "/precios", label: "Precios" },
  { href: "/especialistas", label: "Especialistas" },
  { href: "/legislacion", label: "Legislación" },
];

const guidesItems = [
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/comorbilidades", label: "Comorbilidades" },
  { href: "/herramientas", label: "Herramientas" },
];

const allNavigationItems = [...mainNavigationItems, ...guidesItems];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
            <h1 className="text-xl font-bold text-foreground sm:text-2xl">
              Tdarg
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {/* Main navigation items */}
        {mainNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    pathname === item.href
          ? "text-primary font-medium"
          : "text-muted-foreground hover:text-primary transition-colors"
                  }
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Guides dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center space-x-1 ${
                  guidesItems.some(item => pathname === item.href)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary transition-colors"
                }`}>
                  <span>Guías</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {guidesItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 px-0"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Abrir/cerrar menú</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-3 pt-4">
              {allNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    pathname === item.href
                      ? "text-primary font-medium px-2 py-1"
                      : "text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
