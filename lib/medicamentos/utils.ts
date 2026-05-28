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

export function extractMg(concentracion: string): number | null {
  if (concentracion.includes("/")) {
    return null;
  }

  const match = concentracion.match(/(\d+(?:[.,]\d+)?)\s*mg\b/i);

  if (!match) {
    return null;
  }

  const mg = Number.parseFloat(match[1].replace(",", "."));
  return Number.isFinite(mg) && mg > 0 ? mg : null;
}

export function extractUnits(...texts: string[]): number | null {
  const match = texts
    .map((text) =>
      text.match(
        /\b(?:x|por)\s*(\d+)\b|\b(\d+)\s*(?:comp|comprimidos|caps|capsulas|cápsulas|tab|tabletas)\b/i
      )
    )
    .find(Boolean);

  if (!match) {
    return null;
  }

  const units = Number.parseInt(match[1] || match[2], 10);
  return Number.isFinite(units) && units > 0 ? units : null;
}

export function pricePerMg(medicamento: Medicamento): number | null {
  const mg = extractMg(medicamento.concentracion);
  const units = extractUnits(
    medicamento.presentacion,
    medicamento.marca,
    medicamento.nombre
  );

  if (!mg || !units || medicamento.precio <= 0) {
    return null;
  }

  return medicamento.precio / (mg * units);
}

function formatKnownToken(token: string) {
  const normalized = token
    .replace(/\bc#ps?\.?/gi, "capsulas ")
    .replace(/\bcápsulas\b/gi, "capsulas")
    .replace(/\bcaps?\.?(?=\s|x|$)/gi, "capsulas ")
    .replace(/\bcomp\.?(?=\s|x|$)/gi, "comprimidos ")
    .replace(/\brec\.?(?=\s|x|$)/gi, "recubiertos ")
    .replace(/\blib\.?(?=\s|x|$)/gi, "liberacion ")
    .replace(/\bpr\.?(?=\s|x|$)/gi, "prolongada ")
    .replace(/(^|\s)x\s*(\d+)/gi, "$1x $2")
    .replace(/\bx(\d+)/gi, "x $1")
    .replace(/\s+/g, " ")
    .trim();

  return normalized.replace(/\bmg\b/gi, "mg");
}

function toDisplayCase(text: string) {
  return text
    .toLowerCase()
    .replace(/\b\p{L}/gu, (letter) => letter.toUpperCase())
    .replace(/\bMg\b/g, "mg")
    .replace(/\bX\b/g, "x");
}

export function formatMedicationName(marca: string) {
  return toDisplayCase(formatKnownToken(marca));
}

export function formatMedicationPresentation(medicamento: Medicamento) {
  const source = [medicamento.presentacion, medicamento.marca, medicamento.nombre]
    .find((text) => extractUnits(text));
  const units = extractUnits(
    medicamento.presentacion,
    medicamento.marca,
    medicamento.nombre
  );

  if (!source || !units) {
    return medicamento.presentacion;
  }

  const normalized = formatKnownToken(source);
  const lower = normalized.toLowerCase();

  if (lower.includes("capsulas")) {
    return `Capsulas x ${units}`;
  }

  if (lower.includes("comprimidos")) {
    if (lower.includes("recubiertos") && lower.includes("liberacion") && lower.includes("prolongada")) {
      return `Comprimidos recubiertos liberacion prolongada x ${units}`;
    }

    return `Comprimidos x ${units}`;
  }

  return toDisplayCase(normalized);
}

export function groupByApproval(medicamentos: Medicamento[]): MedicamentosAgrupados {
  return medicamentos.reduce<MedicamentosAgrupados>(
    (grupos, med) => {
      const nombre = med.nombre.toLowerCase();

      if (nombre.includes("metilfenidato") || nombre.includes("lisdexanfetamina")) {
        if (nombre.includes("metilfenidato")) {
          if (!grupos.estimulantes.metilfenidato) {
            grupos.estimulantes.metilfenidato = [];
          }
          grupos.estimulantes.metilfenidato.push(med);
        } else if (nombre.includes("lisdexanfetamina")) {
          if (!grupos.estimulantes.lisdexanfetamina) {
            grupos.estimulantes.lisdexanfetamina = [];
          }
          grupos.estimulantes.lisdexanfetamina.push(med);
        }
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
