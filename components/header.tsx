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
  { href: "/adultos", label: "TDAH Adulto" },
  { href: "/comorbilidades", label: "Comorbilidades" },
  { href: "/autismo", label: "TDAH y Autismo" },
  { href: "/impacto", label: "Impacto" },
  { href: "/mitos", label: "Mitos" },
];

const resourcesItems = [
  { href: "/recursos", label: "Recursos" },
];

const allNavigationItems = [...mainNavigationItems, ...guidesItems, ...resourcesItems];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  }
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Guides dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center space-x-1 ${
                  guidesItems.some(item => pathname === item.href)
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
              
              {/* Resources */}
              {resourcesItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
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
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-3 pt-4">
              {allNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 font-medium px-2 py-1"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
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
