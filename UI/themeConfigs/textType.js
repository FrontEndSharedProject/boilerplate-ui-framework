/***
 * 将 标题的固定格式 转换为 对应的 utilities
 */

//  将下面这种配置
/*textType: {
  h1: "32/48/62|1.2|700"
},*/

//  转换为
/*.text-type-h1 {
  font-size: 32px;
  line-height: 1.2em;
  font-weight: 700;
}

@media (min-width: 768px) {
.text-type-h1 {
    font-size: 48px;
  }
}

@media (min-width: 1260px) {
.text-type-h1 {
    font-size: 48px;
  }
}*/

const plugin = require("tailwindcss/plugin");

const textType = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const config = theme("textType");
    const mdValue = theme("screens").md;
    const xlValue = theme("screens").xl;

    const mapObj = {};
    Object.keys(config).map((key) => {
      const configStr = config[key];
      const [fontSizeStr, lineHeight, fontWeight] = configStr.split("|");
      const fontSizeArr = fontSizeStr.split("/");

      mapObj[key] = {
        lineHeight,
        fontWeight,
        fontSizeArr: fontSizeArr,
      };
    });

    //  开始生成 class
    const cssInJs = {};

    //  添加 mobile 的样式
    Object.keys(mapObj).map((key) => {
      const { lineHeight, fontWeight, fontSizeArr } = mapObj[key];
      const keyName = `.text-type-${key}`;
      cssInJs[keyName] = {
        fontSize: fontSizeArr[0] + "px",
        lineHeight: lineHeight + "em",
        fontWeight: fontWeight,
        [`@media (min-width: ${mdValue})`]: {
          fontSize: fontSizeArr[1] + "px",
        },
        [`@media (min-width: ${xlValue})`]: {
          fontSize: fontSizeArr[2] + "px",
        },
      };
    });

    addUtilities(cssInJs);
  },
  {
    theme: {
      textType: {
        h1: "32/48/62|1.2|700",
      },
    },
  }
);

module.exports = textType;
