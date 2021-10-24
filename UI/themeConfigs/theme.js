const colors = require("tailwindcss/colors");

module.exports = {
  colors: {
    ...colors,
    gray: {
      ...colors.gray,
    },
    custom: {
      100: "#f20",
    },
  },
  textType: {
    h1: "28/36/44|1.2|700",
    h2: "28/30/36|1.2|700",
  },
};
