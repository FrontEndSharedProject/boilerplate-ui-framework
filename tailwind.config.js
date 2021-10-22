const colors = require("tailwindcss/colors");

module.exports = {
  important: ".tw",
  purge: {
    enabled: false,
  },
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
