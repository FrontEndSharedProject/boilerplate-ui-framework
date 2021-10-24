//
//  因为 vite 使用 esbuild 不支持 ie 11
//  但是 tsconfig.json 又和 docusaurus 复用
//  这里需要通过以下代码, 将 js 转换为支持 es5
const postcss = require("postcss");
const cssvariables = require("postcss-css-variables");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

const jsList = glob
  .sync(path.resolve(__dirname, `../build/**/*.css`))
  .map((filePath) => path.resolve(__dirname, filePath))
  .filter((filePath) => {
    //  过滤掉 .es.js 文件
    return !~filePath.indexOf(".ie11.css");
  });
console.log(`Start to transform ES2015 to ES5; total file ${jsList.length}`);

jsList.map((filePath) => {
  const css = fs.readFileSync(filePath);
  const output = postcss([cssvariables(/*options*/)]).process(css).css;
  fs.writeFileSync(filePath.replace(".css", ".ie11.css"), output, "utf-8");
  console.log(`transform succeed ${filePath}`);
});
