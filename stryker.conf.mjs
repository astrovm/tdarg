// @ts-check
// Mutation testing: Stryker changes the code in small ways and runs the tests that reach each
// change. Run it through scripts/mutants.ts, which picks the lines to change.
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  appendPlugins: ["@hughescr/stryker-bun-runner"],
  testRunner: "bun",
  bun: {
    // The unit tests of the app only: not test/coverage.test.ts, which imports every file just
    // to make `bun test --coverage` count them, nor the scripts' own tests.
    testFiles: ["app", "components", "hooks", "lib"],
    // Bounds only the dry run, the whole suite once with coverage (a few seconds here, run one
    // test at a time). The default 10 s killed the bot's first trial. Mutant runs use Stryker's
    // own per-mutant timeout.
    timeout: 600_000,
  },
  coverageAnalysis: "perTest",
  reporters: ["clear-text", "progress", "json"],
  jsonReporter: { fileName: "reports/mutation/mutation.json" },
  // A mutant that loops forever is stopped and counted as timed out.
  timeoutMS: 10000,
  tempDirName: ".stryker-tmp",
  cleanTempDir: "always",
};

export default config;
