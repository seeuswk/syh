import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Sunyuanhui's blog",
  tagline: "栏杆拍遍",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://seeuswk.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/syh/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "seeuswk", // Usually your GitHub org/user name.
  projectName: "syh", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    languages: ['zh', 'en'] // language codes
  }]],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Sunyuanhui's blog",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "notesSidebar",
          position: "left",
          label: "Notes",
        },
        { to: "/blog", label: "Blog", position: "left" },
        /*
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        */
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Notes",
          items: [
            {
              label: "Notes",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "社交媒体",
          items: [
            {
              label: "微博",
              href: "https://weibo.com",
            },
            {
              label: "微信",
              href: "https://weixin.com",
            },
            {
              label: "bilibili",
              href: "https://bilibili.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/seeuswk",
            },
            // {
            //   html: `
            //   <embed src="//music.163.com/style/swf/widget.swf?sid=26494698&type=2&auto=1&width=320&height=66" width=340 height=86 allowNetworking="all">
            //   </embed>
            // `,
            // },
            {
              html: `
              <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86
                src="//music.163.com/outchain/player?type=2&id=26494698&auto=1&height=66">
              </iframe>
            `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sunyuanhui. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
