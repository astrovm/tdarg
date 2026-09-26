import { describe, expect, test } from "bun:test";
import { readdirSync } from "node:fs";

import metadata from "./metadata.json";

describe("leyes metadata", () => {
  test("describes every downloaded law file exactly once", () => {
    const archivos = readdirSync(import.meta.dir).filter((f) => f.endsWith(".md"));

    expect(Object.values(metadata).map((ley) => ley.filename).toSorted()).toEqual(
      archivos.toSorted()
    );
  });

  test("keys each entry by its id and filename", () => {
    for (const [clave, ley] of Object.entries(metadata)) {
      expect(ley.id).toBe(clave);
      expect(ley.filename).toBe(`${clave}.md`);
      expect(new URL(ley.url).protocol).toBe("https:");
    }
  });
});
