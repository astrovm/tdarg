import { fixupConfigRules } from "@eslint/compat";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // Keep Next's React plugins working with the ESLint 10 rule API.
  ...fixupConfigRules([...nextVitals, ...nextTs]),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    // CommonJS modules can only load others with require().
    files: ["**/*.cjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
]);
