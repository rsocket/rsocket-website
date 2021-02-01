const path = require("path");

function fixBaseUrl(url) {
  if (url === "/") {
    return url;
  }

  const slashesRemoved = url.replace(/^\/|\/$/g, '');

  return `/${slashesRemoved}/`;
}

module.exports = {
  "title": "RSocket",
  "tagline": "Application protocol providing Reactive Streams semantics",
  "url": process.env.URL || "https://rsocket.io",
  "baseUrl": fixBaseUrl(process.env.PROJECT_BASE_URL || "/"),
  "organizationName": process.env.ORGANIZATION_NAME || "rsocket",
  "projectName": process.env.PROJECT_NAME || "rsocket-website",
  "noIndex": false,
  "scripts": [
    "https://docusaurus.io/slash.js",
    {
      "src": "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      "async": true
    }
  ],
  "stylesheets": [
    "https://docusaurus.io/style.css",
    {
      "href": "http://css.link",
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
          "path": path.resolve("../website-docs"),
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/rsocket/rsocket-website/edit/master/website-docs/",
          "sidebarPath": path.resolve("./sidebars.js"),
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": path.resolve("./src/css/customTheme.css"),
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "colorMode": {
      // "light" | "dark"
      "defaultMode": 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      "disableSwitch": true
    },
    "prism": {
      "theme": require('prism-react-renderer/themes/dracula'),
      "additionalLanguages": ["kotlin"],
    },
    "navbar": {
      "title": "RSocket",
      "logo": {
        "src": "img/r-socket-pink.svg"
      },
      "items": [
        {
          "to": "docs/",
          "label": "About",
          "position": "left"
        },
        {
          "href": "https://github.com/rsocket",
          "label": "GitHub",
          "position": "left"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        }
      ]
    },
    "image": "img/r-rsocket-pink.png",
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "to": "https://twitter.com/RSocketIO"
            }
          ]
        },
      ],
      "copyright": `Copyright © ${new Date().getFullYear()} RSocket Contributors`,
      "logo": {
        "alt": "RSocket Logo",
        "src": "img/r-socket-pink.svg"
      }
    },
    "gtag": {
      "trackingID": "UA-122364851-2"
    }
  }
};
