var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.config.js');

module.exports = webpackMerge(commonConfig, {

  devServer: {
    historyApiFallback: true,
    contentBase: commonConfig.output.path,
    outputPath: commonConfig.output.path
  }
});