import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Tekdi Docs",
  tagline: "CATALYSE • DIGITAL • TRANSFORMATION",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://tekdi.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tekdi", // Usually your GitHub org/user name.
  projectName: "tekdi.github.io", // Usually your repo name.
  trailingSlash: false, // ++ Tekdi
  deploymentBranch: "gh-pages", // ++ Tekdi

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docRootComponent: "@theme/DocRoot",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          showLastUpdateTime: true, // ++ Tekdi
          showLastUpdateAuthor: true, // ++ Tekdi
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          user: {
            specPath: "swagger/user-service.json",
            outputDir: "docs/user-service/apis",
          } satisfies OpenApiPlugin.Options,
          notification: {
            specPath: "swagger/notification-service.json",
            outputDir: "docs/notifications-service/apis",
          } satisfies OpenApiPlugin.Options,
          todo: {
            specPath: "swagger/todo-service.json",
            outputDir: "docs/todo-service/apis",
          } satisfies OpenApiPlugin.Options,
          events: {
            specPath: "swagger/event-service.json",
            outputDir: "docs/event-service/apis",
          } satisfies OpenApiPlugin.Options,
          attendance: {
            specPath: "swagger/attendance-service.json",
            outputDir: "docs/attendance-service/apis",
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    // Replace with your project's social card
    image: "img/tekdi-social-card.jpg",
    navbar: {
      title: "Tekdi Docs",
      logo: {
        alt: "Tekdi Logo",
        src: "img/logo.png",
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        /*{to: '/blog', label: 'Blog', position: 'left'},*/
        { to: "/docs/category/tools", label: "Tools", position: "left" },
        {
          href: "https://github.com/tekdi/tekdi.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      /*links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],*/
      copyright: `Copyright © ${new Date().getFullYear()} Tekdi Technologies. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
