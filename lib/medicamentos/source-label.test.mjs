import test from "node:test";
import assert from "node:assert/strict";
import sourceLabel from "./source-label.js";

const { getMedicamentoSourceLabel } = sourceLabel;

test("maps medicamento source to the correct badge label", () => {
  assert.equal(getMedicamentoSourceLabel("farmacity"), "Farmacity");
  assert.equal(getMedicamentoSourceLabel("alfabeta"), "Alfa Beta");
});
