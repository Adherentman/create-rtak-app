const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//开发环境
module.exports = merge(common, {
  devtool: 'source-map',
  //开发中Server
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 5555
  },
});