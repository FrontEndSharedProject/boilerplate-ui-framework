const colors = require("tailwindcss/colors");

module.exports = {
  mode:'jit',
  purge: [
    './docs/**/*.{md,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './UI/**/*.{js,jsx,ts,tsx}',
  ],
  important: ".tw",
  darkMode: false, // or 'media' or 'class'
  theme: {
    //  https://docs.tailwindchina.com/docs/customizing-colors#-1
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
