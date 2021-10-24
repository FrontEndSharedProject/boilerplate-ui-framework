module.exports = {
  mode: "jit",
  purge: [
    "./docs/**/*.{md,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./UI/**/*.{js,jsx,ts,tsx}",
  ],
  important: ".tw",
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...require("./UI/themeConfigs/theme"),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("./UI/themeConfigs/textType"),
    require("./UI/themeConfigs/utilities"),
  ],
};
