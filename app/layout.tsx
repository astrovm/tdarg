import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tdarg - TDAH en Argentina",
  description:
    "Precios de medicamentos, especialistas, legislación y más sobre TDAH en Argentina.",
  keywords:
    "TDAH, Argentina, lisdexanfetamina, metilfenidato, atomoxetina, Ludoxa, diagnóstico, tratamiento, especialistas, legislación",
  authors: [{ name: "Tdarg" }],
  creator: "Tdarg",
  publisher: "Tdarg",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
