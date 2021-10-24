const packageJson = require("../package.json");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")({
      presets: [require("./tailwind.config.build")],
    }),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 4,
    }),
    require("autoprefixer")({
      overrideBrowserslist: packageJson.browserslist.production,
    }),
    require('postcss-combine-media-query')(),
  ],
};
