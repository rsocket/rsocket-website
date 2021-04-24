const aboutItems = [
  "about/faq",
  "about/motivations",
  "about/protocol",
  "about/implementations"
];

module.exports = {
  "docs": [
    "docs/getting-started/index",
    {
      "About": aboutItems
    },
    {
      "rsocket-js": require("./sidebar-rsocket-js")
    }
  ],
  "about": aboutItems
};
