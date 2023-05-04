/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(0, 0%, 96%)",
          300: "hsl(0, 0%, 93%)",
          400: "hsl(0, 0%, 87%)",
          500: "hsl(0, 0%, 66%)",
          600: "hsl(0, 0%, 50%)",
          700: "hsl(0, 0%, 29%)",
          800: "hsl(0, 0%, 20%)",
          900: "hsl(0, 0%, 15%)",
        },
      },
    },
  },
};
