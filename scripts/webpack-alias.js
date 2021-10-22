//  这个文件只是用于处理 phpstorm 无法自动识别 alias 的问题
//  请不要在该文件中配置 webpack!

const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@UI": path.resolve(__dirname, "../UI"),
      "@": path.resolve(__dirname, "../", "src"),
    },
  },
};
