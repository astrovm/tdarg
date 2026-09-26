import { describe, expect, test } from "bun:test";
import { readdirSync } from "node:fs";

import metadata from "./metadata.json";

describe("laws metadata", () => {
  test("describes every downloaded law file exactly once", () => {
    const files = readdirSync(import.meta.dir).filter((f) => f.endsWith(".md"));

    expect(Object.values(metadata).map((law) => law.filename).toSorted()).toEqual(
      files.toSorted()
    );
  });

  test("keys each entry by its id and filename", () => {
    for (const [key, law] of Object.entries(metadata)) {
      expect(law.id).toBe(key);
      expect(law.filename).toBe(`${key}.md`);
      expect(new URL(law.url).protocol).toBe("https:");
    }
  });
});
