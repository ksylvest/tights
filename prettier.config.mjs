/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    "^node:(.*)$",
    "^react(.*)$",
    "^clsx$",
    "^vitest$",
    "^@storybook(.*)$",
    "^@fortawesome(.*)$",
    "^./support",
    "^./types",
    ".*",
  ],
};

export default config;
