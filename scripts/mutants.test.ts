import { describe, expect, test } from "bun:test";
import { Glob } from "bun";
import {
  changedRanges,
  inMutationScope,
  inScope,
  instrumentRanges,
  lived,
  partRanges,
} from "./mutants";
import scope from "../coverage-scope.json";

describe("mutants", () => {
  test("only source the coverage gate counts is mutated", () => {
    expect(inScope("app/page.tsx", scope)).toBe(true);
    expect(inScope("lib/medications/utils.ts", scope)).toBe(true);
    expect(inScope("components/ui/button.tsx", scope)).toBe(true);
    for (const file of [
      "scripts/mutants.ts",
      "test/setup.ts",
      "lib/utils.test.ts",
      "components/footer.test.tsx",
      "next-env.d.ts",
      "lib/types.d.ts",
      "lib/readme.md",
      "libs/a.ts",
    ]) {
      expect(inScope(file, scope)).toBe(false);
    }
  });

  test("vendored UI styling and color tokens count for coverage but are not mutated", () => {
    expect(scope.mutationExclude).toEqual(["lib/sections.ts", "components/ui/*"]);
    for (const file of ["lib/sections.ts", "components/ui/badge.tsx", "components/ui/a/b.tsx"]) {
      expect(inScope(file, scope)).toBe(true);
      expect(inMutationScope(file, scope)).toBe(false);
    }
    for (const file of ["app/page.tsx", "components/header.tsx", "lib/sections.tsx", "lib/a/sections.ts"]) {
      expect(inMutationScope(file, scope)).toBe(inScope(file, scope));
    }
    expect(inMutationScope("lib/sections.ts", { ...scope, mutationExclude: undefined })).toBe(true);
    expect(inMutationScope("lib/other.ts", scope)).toBe(true);
  });

  test("it is the files test/coverage.test.ts loads", () => {
    const loaded = [...new Glob("{app,components,hooks,lib}/**/*.{ts,tsx}").scanSync(".")]
      .filter((file) => !/\.test\.tsx?$/.test(file))
      .sort();
    expect(loaded.length).toBeGreaterThan(40);
    expect(loaded.filter((file) => inScope(file, scope))).toEqual(loaded);
  });

  test("a diff's added and changed lines become ranges, deletions none", () => {
    const diff = [
      "diff --git a/lib/a.ts b/lib/a.ts",
      "--- a/lib/a.ts",
      "+++ b/lib/a.ts",
      "@@ -3 +3 @@ x",
      "@@ -10,0 +11,4 @@ y",
      "@@ -20,2 +24,0 @@ z",
      "diff --git a/lib/gone.ts b/lib/gone.ts",
      "--- a/lib/gone.ts",
      "+++ /dev/null",
      "@@ -1,3 +0,0 @@",
      "--- a/lib/b.ts",
      "+++ b/lib/b.ts",
      "@@ -1,2 +1,2 @@",
    ].join("\n");
    expect(changedRanges(diff)).toEqual([
      { file: "lib/a.ts", from: 3, to: 3 },
      { file: "lib/a.ts", from: 11, to: 14 },
      { file: "lib/b.ts", from: 1, to: 2 },
    ]);
  });

  test("parts cover every line once, as equal as whole lines allow", () => {
    const files = [
      { file: "lib/a.ts", lines: 5 },
      { file: "lib/b.ts", lines: 1 },
      { file: "lib/c.ts", lines: 4 },
    ];
    for (const n of [1, 3, 4, 10, 12]) {
      const lines = Array.from({ length: n }, (_, k) =>
        partRanges(files, k, n).flatMap(({ file, from, to }) =>
          Array.from({ length: to - from + 1 }, (_, i) => `${file}:${from + i}`),
        ),
      );
      expect(lines.flat()).toEqual([
        ...Array.from({ length: 5 }, (_, i) => `lib/a.ts:${i + 1}`),
        "lib/b.ts:1",
        ...Array.from({ length: 4 }, (_, i) => `lib/c.ts:${i + 1}`),
      ]);
      const sizes = lines.map((part) => part.length);
      expect(Math.max(...sizes) - Math.min(...sizes)).toBeLessThanOrEqual(1);
    }
    expect(partRanges(files, 1, 3)).toEqual([
      { file: "lib/a.ts", from: 4, to: 5 },
      { file: "lib/b.ts", from: 1, to: 1 },
    ]);
    for (const k of [-1, 4, 1.5]) {
      expect(() => partRanges(files, k, 4)).toThrow();
    }
  });

  test("what no test caught is listed by file and line", () => {
    const mutant = (
      status: string,
      line: number,
      mutatorName = "EqualityOperator",
      replacement?: string,
    ) => ({
      status,
      mutatorName,
      replacement,
      location: { start: { line, column: 7 }, end: { line, column: 9 } },
    });
    const { rows, total } = lived({
      files: {
        "lib/b.ts": {
          mutants: [mutant("Survived", 9, "BooleanLiteral", "false"), mutant("Killed", 1)],
        },
        "lib/a.ts": {
          mutants: [
            mutant("NoCoverage", 12),
            mutant("Timeout", 2, "UpdateOperator"),
            mutant("CompileError", 3),
            mutant("Ignored", 4),
          ],
        },
      },
    });
    expect(total).toBe(4);
    expect(rows).toEqual([
      "lib/a.ts:2:7-2:9  timeout: UpdateOperator",
      "lib/a.ts:12:7-12:9  no coverage: EqualityOperator",
      'lib/b.ts:9:7-9:9  survived: BooleanLiteral → "false"',
    ]);
  });
});


test("crossing nodes are instrumented whole and owned only by their start lines", () => {
  const content = "export function f() {\n  if (true) {\n    return 1;\n  }\n}\n";
  const ranges = [{ file: "src/a.ts", from: 2, to: 2 }];
  expect(instrumentRanges(ranges, () => content)).toEqual([{ file: "src/a.ts", from: 2, to: 4 }]);
  const make = (line: number, column: number, end = column + 1) => ({ status: "Survived", mutatorName: "BooleanLiteral", replacement: "false", location: { start: { line, column }, end: { line, column: end } } });
  const report = { files: { "src/a.ts": { mutants: [make(2, 7, 14), make(2, 7, 21), make(3, 7)] } } };
  const { rows, total } = lived(report, ranges);
  expect(total).toBe(2);
  expect(new Set(rows).size).toBe(2);
  expect(lived(report, [{ file: "src/a.ts", from: 3, to: 4 }]).rows).toHaveLength(1);
});
