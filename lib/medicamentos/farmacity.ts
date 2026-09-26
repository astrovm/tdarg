import type { Medicamento } from "./types";

// Forma de los resultados del buscador de Farmacity (solo los campos que usamos)
export interface FarmacityMed {
  formula?: { description?: string };
  description?: string;
  medicalLaboratory?: { abbreviation?: string };
  publicPrice?: string | number;
  package?: {
    packageDescription?: { description?: string };
    potency?: string | number;
  };
  barCode?: string;
  id?: string | number;
}

export function normalizarNumeroFarmacity(valor: string | number | undefined): number {
  if (typeof valor === "number") {
    return Number.isFinite(valor) ? valor : 0;
  }

  if (!valor) {
    return 0;
  }

  const limpio = valor.toString().replace(/[^\d.,-]/g, "").trim();
  if (!limpio) {
    return 0;
  }

  const ultimoPunto = limpio.lastIndexOf(".");
  const ultimaComa = limpio.lastIndexOf(",");

  let normalizado = limpio;

  if (ultimoPunto !== -1 && ultimaComa !== -1) {
    const separadorDecimal = ultimoPunto > ultimaComa ? "." : ",";
    const separadorMiles = separadorDecimal === "." ? "," : ".";

    normalizado = normalizado
      .replaceAll(separadorMiles, "")
      .replace(separadorDecimal, ".");
  } else if (ultimaComa !== -1) {
    const decimales = limpio.length - ultimaComa - 1;
    normalizado =
      decimales <= 2
        ? limpio.replace(/\./g, "").replace(",", ".")
        : limpio.replace(/,/g, "");
  } else if (ultimoPunto !== -1) {
    const decimales = limpio.length - ultimoPunto - 1;
    normalizado = decimales <= 2 ? limpio.replace(/,/g, "") : limpio.replace(/\./g, "");
  }

  const numero = Number.parseFloat(normalizado);
  return Number.isFinite(numero) ? numero : 0;
}

function formatearMg(valor: number): string {
  return `${Number.isInteger(valor) ? valor : valor.toFixed(2).replace(/\.?0+$/, "")} mg`;
}

export function extraerConcentracionTexto(...textos: Array<string | undefined>): string | null {
  for (const texto of textos) {
    const match = texto?.match(/(\d+(?:[.,]\d+)?)\s*mg\b/i);
    if (!match) {
      continue;
    }

    const valor = normalizarNumeroFarmacity(match[1]);
    if (valor > 0) {
      return formatearMg(valor);
    }
  }

  return null;
}

export function formatearPotencia(valor: string | number | undefined): string | null {
  if (typeof valor === "string" && valor.includes("/")) {
    const partes = valor
      .split("/")
      .map((parte) => normalizarNumeroFarmacity(parte))
      .filter((parte) => parte > 0);

    if (partes.length > 1) {
      return partes.map(formatearMg).join(" / ");
    }
  }

  const potencia = normalizarNumeroFarmacity(valor);
  return potencia > 0 ? formatearMg(potencia) : null;
}

// Código estable cuando Farmacity no manda código de barras ni id, para que
// las claves de React no cambien entre actualizaciones.
function codigoDeRespaldo(...partes: string[]): string {
  let hash = 0;
  for (const char of partes.join("|")) {
    hash = (Math.imul(31, hash) + char.charCodeAt(0)) | 0;
  }
  return `med_${(hash >>> 0).toString(36)}`;
}

export function convertirMedicamento(med: FarmacityMed, fechaActualizacion: string): Medicamento {
  const nombre = (med.formula?.description || med.description || "Medicamento").trim();
  const marca = (med.description || "Sin marca").trim();
  const laboratorio = (med.medicalLaboratory?.abbreviation || "No especificado").trim();
  const precio = normalizarNumeroFarmacity(med.publicPrice);
  const presentacion = (
    med.package?.packageDescription?.description || "No especificado"
  ).trim();
  const concentracion = (
    formatearPotencia(med.package?.potency) ||
    extraerConcentracionTexto(presentacion, marca, nombre) ||
    "No especificado"
  ).trim();

  return {
    codigo:
      med.barCode ||
      med.id?.toString() ||
      codigoDeRespaldo(nombre, marca, laboratorio, presentacion, concentracion),
    nombre,
    marca,
    laboratorio,
    source: "farmacity",
    precio,
    presentacion,
    concentracion,
    fechaActualizacion,
  };
}

// Principios activos que Farmacity devuelve en las búsquedas pero no son
// tratamientos de TDAH (p. ej. naltrexona+bupropión para obesidad).
const EXCLUIDOS = ["naltrexona"];

export function esMedicamentoTDAH(med: Medicamento): boolean {
  const nombre = med.nombre.toLowerCase();
  return !EXCLUIDOS.some((excluido) => nombre.includes(excluido));
}

export function eliminarDuplicados(medicamentos: Medicamento[]): Medicamento[] {
  const mapa = new Map<string, Medicamento>();

  for (const med of medicamentos) {
    const clave = `${med.nombre}_${med.concentracion}_${med.laboratorio}_${med.source}`
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

    if (!mapa.has(clave) || med.precio > 0) {
      mapa.set(clave, med);
    }
  }

  return Array.from(mapa.values()).sort((a, b) => a.nombre.localeCompare(b.nombre));
}
