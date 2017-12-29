const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//开发环境
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    port: 3000
  },
});