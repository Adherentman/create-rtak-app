const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

//生产环境
module.exports = merge(common, {
  //生产模式下为'source-map'
  devtool: 'source-map',
  //插件
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});