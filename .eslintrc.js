module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react-hooks",
  ],
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
