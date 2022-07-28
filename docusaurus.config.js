// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// https://www.npmjs.com/package/dotenv
//require('dotenv').config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.DOCUSAURUS_TITLE || "Nifty Island Standards Docs",
  tagline: process.env.DOCUSAURUS_TAGLINE || "Islands are cool",
  url: process.env.DOCUSAURUS_URL || "https://standards.niftyisland.com",
  baseUrl: process.env.DOCUSAURUS_BASE_URL || "/",
  onBrokenLinks: process.env.DOCUSAURUS_ON_BROKEN_LINKS || "throw",
  onBrokenMarkdownLinks: process.env.DOCUSAURUS_ON_BROKEN_MARKDOWN_LINKS || "warn",
  favicon: process.env.DOCUSAURUS_FAVICON || "img/favicon.ico",
  organizationName: process.env.DOCUSAURUS_ORGANIZATION_NAME || "Nifty-Island", // Usually your GitHub org/user name.
  projectName: process.env.DOCUSAURUS_PROJECT_NAME || "nifty-island-standards-docs", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/Nifty-Island/nifty-island-standards-docs/tree/main/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Metadata Standards",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        // items: [
        //   {
        //     type: "doc",
        //     docId: "intro",
        //     position: "left",
        //     label: "Tutorial",
        //   },
        //   { to: "/blog", label: "Blog", position: "left" },
        //   {
        //     href: "https://github.com/facebook/docusaurus",
        //     label: "GitHub",
        //     position: "right",
        //   },
        // ],
      },
      colorMode: {
        defaultMode: 'dark'
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Nyft/Nifty Island. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
