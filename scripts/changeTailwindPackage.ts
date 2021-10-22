//  该文件为了提供 tailwind 执行 purge 时能有个回调
//  这样就可以生成 safelist 文件
//  但是官网接口没有提供
//  只能通过 node 修改源代码

const path = require("path");
const fs = require("fs");

const targetPath = path.resolve(
  __dirname,
  "../",
  "node_modules/tailwindcss/lib/jit/lib/expandTailwindAtRules.js"
);

if (fs.existsSync(targetPath)) {
  const content = fs.readFileSync(targetPath, "utf-8");
  if (~content.indexOf("node inject start")) return;

  //  添加自定义代码
  const newContent = content.replace(
    `// Clear the cache for the changed files`,
    `
    \t
   //  node inject start
    const purgeOptions =
      (context.tailwindConfig &&
        context.tailwindConfig.purge &&
        context.tailwindConfig.purge.options) ||
      {}
    let classlist = []
    for (let key of context.classCache.keys()) {
      classlist.push(key)
    }
    purgeOptions.afterPurge && purgeOptions.afterPurge(classlist)
    //  node inject end
  `
  );

  //  写入文件
  fs.writeFileSync(targetPath, newContent, "utf-8");
} else {
  throw new Error(
    "changeTailwindPackage.js: file node_modules/tailwindcss/lib/jit/lib/expandTailwindAtRules.js not found"
  );
  process.exit(0);
}
