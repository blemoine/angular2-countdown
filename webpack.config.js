const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const DIST = './dist';
const SRC = './src';

module.exports = {
  entry: [
    './src/app.ts'
  ],
  output: {
    path: DIST,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: DIST,
    outputPath: DIST
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: SRC + '/index.html', to: 'index.html'}
    ]),
    new WriteFilePlugin()
  ]
};
