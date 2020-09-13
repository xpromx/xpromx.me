module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./src/components/**/*.tsx",
    "./src/components/**/*.ts",
    "./src/pages/**/*.tsx",
    "./src/pages/**/*.ts",
    "./src/helpers/**/*.ts",
  ],
  dark: "class",
  theme: {},
  experimental: {
    darkModeVariant: true,
  },
};
