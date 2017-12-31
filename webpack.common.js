const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  //入口
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.tsx'),
  ],
  //输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  //插件
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin() //启用HMR
  ],
  //解析
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  //模块
  module: {
    rules: [{
      test: /\.ts|\.tsx$/,
      use: 'awesome-typescript-loader',
      include: __dirname,
    },
    //所有输出的'.js'文件都会通过'source-map-loader'重新处理.
    {
      enforce: "pre", test: /\.js$/,
      loader: "source-map-loader"
    },
    //scss配置
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    //图片加载配置
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      include : path.join(__dirname, 'assets/images'),
      loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
    },
    //字体加载配置
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    ],
  }
};