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
    "rsocket-py": require("./sidebar-rsocket-py"),
    "rsocket-java": require("./sidebar-rsocket-java")
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
