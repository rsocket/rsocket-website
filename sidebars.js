const aboutItems = [
  "about/faq",
  "about/motivations",
  "about/protocol",
  "about/implementations"
];

const guideItems = [
  "guides/index",
  {
    "rsocket-js": require("./sidebar-rsocket-js"),
    "rsocket-py": require("./sidebar-rsocket-py")
  }
];

module.exports = {
  "docs": [
    {
      "About": aboutItems
    },
    {
      "Guides": guideItems
    }
  ],
  "about": aboutItems,
  "guides": guideItems,
};
