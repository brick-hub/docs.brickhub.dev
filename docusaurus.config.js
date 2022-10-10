// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs | BrickHub',
  tagline: 'Lay the foundation 🧱',
  url: 'https://docs.brickhub.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Brick-Hub',
  projectName: 'docs.brickhub.dev',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/brick-hub/docs.brickhub.dev/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/meta/open_graph.png',
      navbar: {
        title: 'BrickHub',
        logo: {
          alt: 'Brick Hub Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/brick-hub/docs.brickhub.dev',
            position: 'right',
            className: 'navbar-github-icon',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'BrickHub',
                href: 'https://brickhub.dev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/brickhubdev',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/bloc',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Package of the Week | Flutter',
                href: 'https://www.youtube.com/watch?v=qjA0JFiPMnQ',
              },
              {
                label: 'Mason Livestream | Very Good Venture',
                href: 'https://www.youtube.com/watch?v=G4PTjA6tpTU',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Open an issue',
                href: 'https://github.com/brick-hub/docs.brickhub.dev/issues/new/choose',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/brick-hub/docs.brickhub.dev',
              },
              {
                label: 'Mason',
                href: 'https://github.com/felangel/mason',
              },
            ],
          },
        ],
        copyright: `Lay the foundation 🧱 ☁️<br/>Copyright © ${new Date().getFullYear()} BrickHub.`,
      },
      prism: {
        additionalLanguages: ['bash', 'dart', 'yaml'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
