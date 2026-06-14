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
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { 
                "vars": "all", 
                "args": "after-used", 
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "^[TKV]$|^_",
                "argsIgnorePattern": "^_"
            }],
            "no-empty": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-require-imports": "off",
            "prefer-const": "warn",
            "@typescript-eslint/no-duplicate-enum-values": "off",
            "no-var": "off",
            "no-restricted-syntax": [
                "error",
                {
                    "selector": "Literal[value=null]",
                    "message": "Use 'undefined' instead of 'null'"
                },
                {
                    "selector": "TSTypeReference[typeName.name='null']",
                    "message": "Use 'undefined' instead of 'null'"
                },
                {
                    "selector": "TSNullKeyword",
                    "message": "Use 'undefined' instead of 'null'"
                },
                {
                    "selector": "CallExpression[callee.property.name='lastIndexOf']",
                    "message": "string.lastIndexOf() is not supported by TSTL."
                },
            ],
            "@typescript-eslint/strict-boolean-expressions": ["warn", {
                "allowString": false,
                "allowNumber": false,
                "allowNullableObject": false
            }],
            "no-useless-escape": "off"
        }
    }
];
