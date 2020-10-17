const { colors } = require("tailwindcss/defaultTheme");

const gray = {
  100: "hsl(0, 0%, 98%)",
  200: "hsl(0, 0%, 96%)",
  300: "hsl(0, 0%, 93%)",
  400: "hsl(0, 0%, 87%)",
  500: "hsl(0, 0%, 66%)",
  600: "hsl(0, 0%, 50%)",
  700: "hsl(0, 0%, 29%)",
  800: "hsl(0, 0%, 20%)",
  900: "hsl(0, 0%, 15%)",
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/components/**/*.tsx",
    "./src/components/**/*.ts",
    "./src/pages/**/*.tsx",
    "./src/pages/**/*.ts",
    "./src/helpers/**/*.ts",
  ],
  dark: "class",
  theme: {
    colors: {
      ...colors,
      gray,
    },
  },
  variants: {
    padding: ({ after }) => after(["last", "first"]),
    margin: ({ after }) => after(["last", "first"]),
  },
  experimental: {
    darkModeVariant: true,
  },
};
