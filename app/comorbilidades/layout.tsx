import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comorbilidades del TDAH",
  description:
    "Ansiedad, trastornos del ánimo, sueño, autismo e impulsividad: condiciones que suelen acompañar al TDAH.",
  alternates: { canonical: "/comorbilidades" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
