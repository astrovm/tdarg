import { expect, test } from "bun:test";
import { splitBullet } from "./legislation";

test("unlabelled legislation bullets keep their complete text", () => {
  expect(splitBullet("Texto sin encabezado")).toEqual({ label: null, body: "Texto sin encabezado" });
  expect(splitBullet("")).toEqual({ label: null, body: "" });
});

test("labelled bullets split at the first colon and trim only the body", () => {
  expect(splitBullet("Circuito original:  receta: papel  ")).toEqual({
    label: "Circuito original", body: "receta: papel",
  });
});
