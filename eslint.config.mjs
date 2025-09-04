import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.tsx", "**/*.ts"],
    plugins: {
      "require-use-client": {
        rules: {
          check: {
            create(context) {
              const sourceCode = context.getSourceCode();
              const text = sourceCode.getText().trimStart();

              // cek apakah file diawali dengan "use client";
              const hasUseClient =
                text.startsWith('"use client"') ||
                text.startsWith("'use client'");

              return {
                Identifier(node) {
                  if (/^use[A-Z]/.test(node.name) && !hasUseClient) {
                    context.report({
                      node,
                      message:
                        'This file uses a React hook but is missing "use client"; at the top.',
                    });
                  }
                },
              };
            },
          },
        },
      },
    },
    rules: {
      "require-use-client/check": "error",
    },
  },
];

export default eslintConfig;
