const protocolItems = [
  "protocol/faq",
  "protocol/motivations",
  "protocol/protocol",
  "protocol/implementations"
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
      "Protocol": protocolItems
    },
    {
      "Guides": guideItems
    }
  ],
  "protocol": protocolItems,
  "guides": guideItems,
};
