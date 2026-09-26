import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamientos para el TDAH",
  description:
    "Medicación estimulante y no estimulante, terapia y cambios de rutina para el TDAH, con referencias clínicas.",
  alternates: { canonical: "/tratamientos" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
