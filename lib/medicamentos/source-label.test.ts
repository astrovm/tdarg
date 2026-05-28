import { expect, test } from "bun:test";

import { getMedicamentoSourceLabel } from "./source-label";

test("maps medicamento source to the correct badge label", () => {
  expect(getMedicamentoSourceLabel("farmacity")).toBe("Farmacity");
  expect(getMedicamentoSourceLabel("desconocido")).toBe("desconocido");
});
