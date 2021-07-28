const aboutItems = [
  "about/faq",
  "about/motivations",
  "about/protocol",
  "about/implementations"
];

const guideItems = [
  "guides/index",
  {
    "rsocket-java": require("./sidebar-rsocket-java"),
    "rsocket-js": require("./sidebar-rsocket-js"),
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
