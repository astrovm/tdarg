import type { Medication } from "@/lib/medications/types";

export function medication(overrides: Partial<Medication> = {}): Medication {
  return {
    code: "1",
    name: "lisdexanfetamina",
    brand: "LUDOXA 30 mg x 30 c#ps.duras",
    laboratory: "ADIUM",
    source: "farmacity",
    price: 190776.15,
    presentation: "Sin Clasificar",
    strength: "30 mg",
    updatedAt: "2026-09-26T00:00:00.000Z",
    ...overrides,
  };
}
