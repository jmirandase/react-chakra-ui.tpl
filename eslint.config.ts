import pluginQuery from "@tanstack/eslint-plugin-query"
import type { Linter } from "eslint"

export default [
  {
    files: ["**/*.ts"],
  },
  {
    ignores: ["eslint.config.ts", "node_modules", "src/routeTree.gen.ts"],
  },
  {
    rules: {
      semi: ["error", "never"],
    },
  },
  ...pluginQuery.configs["flat/recommended"],
] satisfies Linter.Config[]
