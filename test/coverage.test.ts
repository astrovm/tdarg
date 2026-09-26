import { describe, expect, test } from "bun:test";
import { Glob } from "bun";

// Bun only reports coverage for files a test loads. Importing every source
// file here makes untested files show up in the report (and fail the
// threshold) instead of silently not counting.
const SOURCES = new Glob("{app,components,hooks,lib}/**/*.{ts,tsx}");

describe("coverage", () => {
  test("loads every source file", async () => {
    const files = [...SOURCES.scanSync(".")].filter((file) => !/\.test\.tsx?$/.test(file));

    for (const file of files) {
      expect(await import(`../${file}`)).toBeDefined();
    }
    expect(files.length).toBeGreaterThan(40);
  });
});
