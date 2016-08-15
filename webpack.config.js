var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.jsx')
  ],
  output: {
    path: __dirname + '/build', //打包输出的路径
    publicPath: '/',  //html引用路径，在这里是本地地址。
    filename: './bundle.js' //打包后的名字
  },
  module: {
    //加载器配置
    loaders:[
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      { test: /\.scss$/,include: path.resolve(__dirname, 'app'),exclude: /node_modules/, loader: 'style!css!sass?sourceMap'},
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  //其它解决方案配置
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  //插件项
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};

/*
*
$ webpack // 最基本的启动webpack方法
$ webpack -w // 提供watch方法，实时进行打包更新
$ webpack -p // 对打包后的文件进行压缩，提供production
$ webpack -d // 提供source map，方便调试。
*
*/
