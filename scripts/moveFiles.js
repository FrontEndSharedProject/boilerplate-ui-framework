const mvdir = require("mvdir");
const path = require("path");

(async () => {
  //   fonts
  await mvdir(
    path.resolve(__dirname, "../", "static/fonts"),
    path.resolve(__dirname, "../", "build/dist/assets/fonts"),
    { copy: true }
  );

  //   safelist 文件
  await mvdir(
    path.resolve(__dirname, "../", "build/tailwindSafelist.json"),
    path.resolve(__dirname, "../", "build/dist/tailwindSafelist.json")
  );

  //   tailwind.config.js 文件
  await mvdir(
    path.resolve(__dirname, "../", "tailwind.config.js"),
    path.resolve(__dirname, "../", "build/dist/tailwind.config.js"),
    { copy: true }
  );
})();
