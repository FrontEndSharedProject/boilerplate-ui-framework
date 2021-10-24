const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "jit",
  presets: [require("../tailwind.config")],
  purge: {
    enabled: true,
    content: ["./build/**/*.html", `./build/**/*.js`],
    options: {
      //  下面这个配置是通过 node 修改源文件实现的
      //  具体请查看 scripts/changeTailwindPackage.ts
      afterPurge(list) {
        list = list ? list : [];
        fs.writeFileSync(
          path.resolve(__dirname, "../", "build", "tailwindSafelist.json"),
          JSON.stringify(list)
        );
      },
    },
  },
};
