const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.tsx'),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin() //启用HMR
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.ts|\.tsx$/,
      use: 'awesome-typescript-loader',
      include: __dirname
    },
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
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
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
}