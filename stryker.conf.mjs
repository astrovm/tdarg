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
    // The first run goes through every test one at a time; the default 10 s is too short.
    timeout: 120_000,
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
