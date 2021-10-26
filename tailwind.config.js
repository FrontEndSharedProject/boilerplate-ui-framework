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
  corePlugins: { ...require("./UI/themeConfigs/corePlugin") },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-bootstrap-grid")({
      gridColumns: 24,
      gridGutterWidth: "16px",
      generateContainer: true,
      rtl: false,
      respectImportant: true,
    }),
    require("./UI/themeConfigs/textType"),
    require("./UI/themeConfigs/utilities"),
  ],
};
