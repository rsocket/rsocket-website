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
      'rsocket-js': [
        "docs/guides/rsocket-js/index",
        {
          "rsocket-flowable": [
            "docs/guides/rsocket-js/rsocket-flowable/index",
            "docs/guides/rsocket-js/rsocket-flowable/flowable",
            "docs/guides/rsocket-js/rsocket-flowable/single",
          ]
        }
      ]
    }
  ],
  "about": aboutItems
};
