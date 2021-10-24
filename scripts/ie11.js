//  ie 11 js 和 css 处理
//  因为 vite 使用 esbuild 不支持 ie 11
//  但是 tsconfig.json 又和 docusaurus 复用
//  这里需要通过以下代码, 将 js 转换为支持 es5

const babel = require("@babel/core");
const path = require("path");
const fs = require("fs");
const glob = require("glob");
const postcss = require("postcss");
const cssvariables = require("postcss-css-variables");

const jsList = glob
  .sync(path.resolve(__dirname, `../build/**/*.js`))
  .map((filePath) => path.resolve(__dirname, filePath))
  .filter((filePath) => {
    //  过滤掉 .es.js 文件
    return !~filePath.indexOf(".es.js");
  });
console.log(`Start to transform ES2015 to ES5; total file ${jsList.length}`);

jsList.map((filePath) => {
  const code = babel.transformFileSync(path.resolve(__dirname, filePath), {
    //  以下几个配置是为了处理 通过 npm run 命令调用时, 会自动获取外围 babel config 的问题
    //  我们不需要外文的 babel config 配置
    root: path.resolve(__dirname),
    envName: "production",
    babelrc: false,
    configFile: false,

    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["ie >= 10", "last 1 version"],
          },
        },
      ],
    ],
  }).code;

  fs.writeFileSync(filePath, code, "utf-8");
  console.log(`transform succeed ${filePath}`);
});

const cssList = glob
  .sync(path.resolve(__dirname, `../build/**/*.css`))
  .map((filePath) => path.resolve(__dirname, filePath))
  .filter((filePath) => {
    //  过滤掉 .es.js 文件
    return !~filePath.indexOf(".ie11.css");
  });
console.log(`Start to transform css variables; total file ${cssList.length}`);

cssList.map((filePath) => {
  const css = fs.readFileSync(filePath);
  const output = postcss([cssvariables(/*options*/)]).process(css).css;
  fs.writeFileSync(filePath.replace(".css", ".ie11.css"), output, "utf-8");
  console.log(`transform succeed ${filePath}`);
});
