const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: ['@babel/polyfill', './server/index.js'],

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};