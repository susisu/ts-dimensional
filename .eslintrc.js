"use strict";

module.exports = {
  plugins: ["prettier"],
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      extends: ["@susisu/eslint-config/preset/ts-types", "plugin:eslint-comments/recommended"],
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      env: {
        es6: true,
        browser: true,
      },
      rules: {
        "eslint-comments/no-unused-disable": "error",
      },
    },
    {
      files: ["*.js"],
      extends: [
        "@susisu/eslint-config/preset/es",
        "plugin:eslint-comments/recommended",
        "prettier",
      ],
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: "script",
      },
      env: {
        es6: true,
        node: true,
      },
      rules: {
        "prettier/prettier": "error",
        "eslint-comments/no-unused-disable": "error",
      },
    },
  ],
};
