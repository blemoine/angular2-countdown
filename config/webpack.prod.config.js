const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';


module.exports = webpackMerge(commonConfig, {

  //TODO utiliser un hash pour le cache
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: 'bundle.js',
      mangle: false,
      sourceMap: false,
      comments: false
    }),
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV)
    })
  ]
});