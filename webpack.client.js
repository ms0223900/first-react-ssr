const path = require("path");

module.exports = {
  target: "node",
  entry: ['@babel/polyfill', "./src/client.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
