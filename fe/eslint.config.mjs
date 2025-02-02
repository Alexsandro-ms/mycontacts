import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: { globals: globals.browser },
        extends: ["plugin:react/recommended"],
        plugins: ["react"],
        rules: {
            "react/react-in-jsx-scope": "off",
            "import/prefer-default-export": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
