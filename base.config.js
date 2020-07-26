const webpack = require("webpack");
const WebPackConfig = require("webpack-config");

module.exports = new WebPackConfig.Config().merge({
  externals: {
    lodash: "_",
    phaser: "Phaser"
  }
});
