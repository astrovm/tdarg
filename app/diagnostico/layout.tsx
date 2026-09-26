import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo se diagnostica el TDAH",
  description:
    "Señales de TDAH en adultos, cómo es la evaluación clínica, qué llevar a la consulta y qué pasa después del diagnóstico en Argentina.",
  alternates: { canonical: "/diagnostico" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
