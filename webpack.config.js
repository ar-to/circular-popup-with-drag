const path = require("path");
const config = require("./package.json");

const APP_DIR = path.resolve(__dirname, config.main);
const BUILD_DIR = path.resolve(__dirname, "./public/dist/");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: "js/main.bundle.js"
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CopyPlugin([
      { from: "node_modules/normalize.css/normalize.css", to: "css/" }
    ])
  ]
};
