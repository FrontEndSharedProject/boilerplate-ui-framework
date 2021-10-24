const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const webpackAliasConfig = require("./scripts/webpack-alias");
const isProd = process.env.NODE_ENV === "production";

const scripts = [
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
];
const stylesheets = [];

const baseUrl = "/boilerplate-ui-framework-site/";
//  https://docusaurus.io/zh-CN/docs/api/docusaurus-config
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Boilerplate",
  tagline: "一个用于快速搭建UI组件库的样板",
  url: "https://carl-jin.github.io",
  baseUrl: baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "error",
  favicon: "/img/favicon.ico",
  noIndex: true,
  scripts: [...[`${baseUrl}loadPolyfill.js`], ...scripts],
  stylesheets: [...[`${baseUrl}fonts/style.css`], ...stylesheets],
  organizationName: "carl-jin", // Usually your GitHub org/user name.
  projectName: "UI-framework-boilerplate", // Usually your repo name.
  plugins: [
    "docusaurus-plugin-sass",
    "docusaurus-tailwindcss-loader",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: webpackAliasConfig.resolve.alias,
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  //  https://docusaurus.io/zh-CN/docs/api/docusaurus-config
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: "Boilerplate",
        logo: {
          alt: "Boilerplate",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "文档",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "参考文档",
            items: [
              {
                label: "Docusaurus",
                to: "https://docusaurus.io/zh-CN/",
              },
              {
                label: "Tailwindcss",
                to: "https://tailwindcss.com/docs/installation",
              },
              {
                label: "React",
                to: "https://zh-hans.reactjs.org/docs/getting-started.html",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
