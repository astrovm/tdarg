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
    "TDAH, Argentina, metilfenidato, atomoxetina, diagnóstico, tratamiento, especialistas, legislación",
  authors: [{ name: "Tdarg" }],
  creator: "Tdarg",
  publisher: "Tdarg",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
