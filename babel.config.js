module.exports = {
  sourceType:"unambiguous",
  presets: [
    require.resolve("@docusaurus/core/lib/babel/preset"),
    ["@babel/preset-env", { targets: "ie 11, not ie_mob 11" }],
  ],
};
