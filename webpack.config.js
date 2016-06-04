var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './app/index.js'
  ],
  devtool: "source-map",
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: "babel"
      },
      {
        test: /\.scss$/,
        loaders: [
          "style",
          "css?sourceMap",
          "resolve-url",
          "sass?sourceMap"
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + '/build'
  },
}
