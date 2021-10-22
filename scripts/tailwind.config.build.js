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

// https://github.com/FullHuman/purgecss/blob/b77a4ddbe978291604c2dfdc2f6917fbffd17ed4/packages/postcss-purgecss/src/index.ts#L60
