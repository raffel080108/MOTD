import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["src/**/*.ts"],
        plugins: {
            "import": importPlugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
            },
        },
        settings: {
            "import/resolver": {
                "typescript": true,
                "node": true
            }
        },
        rules: {
            "import/no-self-import": "error",
            "import/no-cycle": ["error", { "maxDepth": 8 }],
            "indent": ["warn", 4, { "SwitchCase": 1 }],
            "semi": ["warn", "always"],
            "@typescript-eslint/explicit-member-accessibility": ["warn", {
                accessibility: "explicit",
            }],
            "@typescript-eslint/explicit-function-return-type": ["warn", {
                allowExpressions: true,
                allowTypedFunctionExpressions: true
            }],
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": ["warn", { 
                "vars": "all", 
                "args": "after-used", 
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "^[TKV]$|^_",
                "argsIgnorePattern": "^_"
            }],
            "no-empty": "warn",
            "@typescript-eslint/no-empty-object-type": ["warn", {
                "allowInterfaces": "with-single-extends"
            }],
            "@typescript-eslint/no-require-imports": "off",
            "prefer-const": "warn",
            "@typescript-eslint/no-duplicate-enum-values": "off",
            "no-var": "off",
            "@typescript-eslint/strict-boolean-expressions": ["warn", {
                "allowString": false,
                "allowNumber": false,
                "allowNullableObject": false
            }],
            "no-useless-escape": "warn",
            "@typescript-eslint/no-unsafe-call": "error",
            "@typescript-eslint/no-unsafe-member-access": "error",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unnecessary-type-constraint": "warn"
        }
    }
];
