import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especialistas en TDAH en Argentina",
  description:
    "Psiquiatras, neurólogos y psicólogos que atienden TDAH, por provincia, especialidad y cobertura.",
  alternates: { canonical: "/especialistas" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
