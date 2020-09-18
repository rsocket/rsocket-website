const users = [
  {
    caption: 'User1',
    image: 'img/r-socket-pink.svg',
    infoLink: 'https://rsocket.io',
    pinned: true,
  },
];

const siteConfig = {
  title: 'RSocket', // Title for your website.
  tagline: 'Application protocol providing Reactive Streams semantics',
  url: 'https://rsocket.io',
  baseUrl: '/',
  // For github.io type URLS, you would combine the URL and baseUrl like:
  // url: 'https://reasonml.github.io',
  // baseUrl: '/reason-react/',

  customDocsPath: '/website-docs',

  defaultVersionShown: '1.0.0',
  organizationName: 'rsocket',
  projectName: 'rsocket',
  noIndex: false,
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'FAQ', label: 'About'},
    {
      href: 'https://github.com/rsocket',
      label: 'GitHub',
    },
    {page: 'blog', label: 'Blog'},
    {page: 'help', label: 'Help'},
  ],
  headerIcon: 'img/r-socket-pink.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2b323b',
    secondaryColor: '#ec1792',
  },
  copyright: `Copyright © ${new Date().getFullYear()} RSocket Contributors`,
  editUrl: 'https://github.com/facebook/docusaurus/edit/master/docs/',
  // Users variable set above
  users,
  disableHeaderTitle: true,
  disableTitleTagline: true,
  separateCss: ['static/css/non-docusaurus', 'static/assets/separate-css'],
  footerIcon: 'img/r-socket-pink.svg',
  gaTrackingId: 'UA-122364851-2',
  highlight: {
    theme: "default"
  },
  markdownPlugins: [
    function foo(md) {
      md.renderer.rules.fence_custom.foo = function(
        tokens,
        idx,
        options,
        env,
        instance
      ) {
        return '<div class="foo">bar</div>';
      };
    },
  ],
  scripts: [
    'https://docusaurus.io/slash.js',
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true
    }
  ],
  stylesheets: [
    'https://docusaurus.io/style.css',
    {
      href: 'http://css.link',
      type: "text/css"
    }
  ],
  twitter: 'true',
  twitterUsername: 'RSocketIO',
  ogImage: 'img/r-rsocket-pink.png',
  usePrism: true,
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
};

module.exports = siteConfig;
