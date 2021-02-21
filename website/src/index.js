const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'rsocket-website-theme',
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
  };
};
