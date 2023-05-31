const path = require("path");
module.exports = {
  entry: "./index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, "./"),
  },
};