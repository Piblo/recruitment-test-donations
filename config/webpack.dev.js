const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: './dist',
    stats: 'minimal'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
