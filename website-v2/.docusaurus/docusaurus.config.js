export default {
  "title": "RSocket",
  "tagline": "Application protocol providing Reactive Streams semantics",
  "url": "https://rsocket.io",
  "baseUrl": "/",
  "organizationName": "rsocket",
  "projectName": "rsocket",
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
          "path": "E:\\dev\\rsocket-website\\website-docs",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/docs/",
          "sidebarPath": "E:\\dev\\rsocket-website\\website-v2\\sidebars.js"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "E:\\dev\\rsocket-website\\website-v2\\src\\css\\customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
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
          "position": "right"
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
      ],
      "hideOnScroll": false
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
        }
      ],
      "copyright": "Copyright © 2021 RSocket Contributors",
      "logo": {
        "src": "img/r-socket-pink.svg"
      },
      "style": "light"
    },
    "gtag": {
      "trackingID": "UA-122364851-2"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "titleDelimiter": "|"
};