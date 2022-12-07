const path = require("path");

function normalizeBaseUrl(url) {
  if (url === "/") {
    return url;
  }

  const slashesRemoved = url.replace(/^\/|\/$/g, "");

  return `/${slashesRemoved}/`;
}

const deployUrl = process.env.DEPLOY_URL || "https://rsocket.io";
const baseUrl = normalizeBaseUrl(process.env.PROJECT_BASE_URL || "/");

module.exports = {
  "title": "RSocket",
  "tagline": "Application protocol providing Reactive Streams semantics",
  "url": deployUrl,
  "baseUrl": baseUrl,
  "organizationName": process.env.ORGANIZATION_NAME || "rsocket",
  "projectName": process.env.PROJECT_NAME || "rsocket-website",
  "noIndex": false,
  "scripts": [
    {
      "src": "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      "async": true
    }
  ],
  "stylesheets": [
    {
      "href": "https://css.link",
      "type": "text/css"
    }
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "defaultVersionShown": "1.0.0",
    "users": [
      {
        "caption": "User1",
        "image": "img/r-socket-pink.svg",
        "infoLink": "https://rsocket.io",
        "pinned": true
      }
    ],
    "disableHeaderTitle": true,
    "disableTitleTagline": true,
    "separateCss": [
      "static/css/non-docusaurus",
      "static/assets/separate-css"
    ],
    "markdownPlugins": [
      null
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "path": path.resolve("content-docs"),
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/rsocket/rsocket-website/edit/master/",
          "sidebarPath": path.resolve("./sidebars.js"),
        },
        "theme": {
          "customCss": path.resolve("./src/css/customTheme.css"),
        },
        "gtag": {
          "trackingID": "UA-251236997-1"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "colorMode": {
      // "light" | "dark"
      "defaultMode": "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      "disableSwitch": false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      "respectPrefersColorScheme": true,
    },
    "prism": {
      "theme": require("prism-react-renderer/themes/vsDark"),
      "additionalLanguages": ["java", "kotlin", "python"],
    },
    "metadata": [
      { property: "og:image", content: `${deployUrl}/img/social/rsocket-io-facebook-og.jpg` },
      { name: "twitter:image", content: `${deployUrl}/img/social/rsocket-io-twitter-card.jpg` },
      { name: "twitter:site", content: "@rsocket" },
    ],
    "navbar": {
      "title": "RSocket",
      "logo": {
        "src": `${deployUrl}/img/r-socket-pink.svg`
      },
      "items": [
        {
          "to": "about/faq",
          "label": "About",
          "position": "left"
        },
        {
          "to": "guides",
          "label": "Guides",
          "position": "left"
        },
        {
          "href": "https://github.com/rsocket",
          "label": "GitHub",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        },
        {
          "to": "https://crowdfunding.lfx.linuxfoundation.org/projects/bb4066fb-8137-4557-8224-f17dba073494",
          "label": "Funding",
          "position": "left"
        },
      ]
    },
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Funding",
              "to": "https://crowdfunding.lfx.linuxfoundation.org/projects/bb4066fb-8137-4557-8224-f17dba073494"
            },
            {
              "label": "Twitter",
              "to": "https://twitter.com/RSocketIO"
            },
            {
              "label": "RSocket Java Gitter",
              "to": "https://gitter.im/rsocket/rsocket-java"
            }
          ]
        },
      ],
      "copyright": `Copyright © ${new Date().getFullYear()} RSocket Contributors`,
      "logo": {
        "alt": "RSocket Logo",
        "src": "img/r-socket-pink.svg"
      }
    }
  }
};
