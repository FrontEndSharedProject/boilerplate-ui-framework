const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  addUtilities([
    {
      ".btn": {
        display: "inline-block",
        "min-width": "214px",
        "border-radius": "0.25rem",
        "padding-top": "18px",
        "padding-bottom": "18px",
        "padding-left": "48px",
        "padding-right": "48px",
        "text-align": "center",
        "transition-duration": "300ms",
        "transition-timing-function": "linear",
        ":hover": {
          color: "#fff",
          "text-decoration": "none",
        },
      },
    },
  ]);
});
