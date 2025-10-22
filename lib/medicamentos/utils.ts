import type { Medicamento } from "./types";

export type MedicamentosAgrupados = {
  estimulantes: Record<string, Medicamento[]>;
  noestimulantes: Record<string, Medicamento[]>;
  offlabel: Record<string, Medicamento[]>;
};

export function formatPrice(precio: number, locale = "es-AR", currency = "ARS") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(precio);
}

export function priceWithCoverage(precio: number, discountRate = 0.4) {
  return precio * (1 - discountRate);
}

export function groupByApproval(medicamentos: Medicamento[]): MedicamentosAgrupados {
  return medicamentos.reduce<MedicamentosAgrupados>(
    (grupos, med) => {
      const nombre = med.nombre.toLowerCase();

      if (nombre.includes("metilfenidato")) {
        if (!grupos.estimulantes.metilfenidato) {
          grupos.estimulantes.metilfenidato = [];
        }
        grupos.estimulantes.metilfenidato.push(med);
      } else if (nombre.includes("atomoxetina")) {
        if (!grupos.noestimulantes.atomoxetina) {
          grupos.noestimulantes.atomoxetina = [];
        }
        grupos.noestimulantes.atomoxetina.push(med);
      } else if (
        nombre.includes("modafinilo") ||
        nombre.includes("armodafinilo") ||
        nombre.includes("bupropion")
      ) {
        if (nombre.includes("modafinilo") && !nombre.includes("armodafinilo")) {
          if (!grupos.offlabel.modafinilo) {
            grupos.offlabel.modafinilo = [];
          }
          grupos.offlabel.modafinilo.push(med);
        } else if (nombre.includes("armodafinilo")) {
          if (!grupos.offlabel.armodafinilo) {
            grupos.offlabel.armodafinilo = [];
          }
          grupos.offlabel.armodafinilo.push(med);
        } else if (nombre.includes("bupropion")) {
          if (!grupos.offlabel.bupropion) {
            grupos.offlabel.bupropion = [];
          }
          grupos.offlabel.bupropion.push(med);
        }
      }

      return grupos;
    },
    {
      estimulantes: {},
      noestimulantes: {},
      offlabel: {},
    },
  );
}
