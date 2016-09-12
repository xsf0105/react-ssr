var webpack = require('webpack');
var path = require('path');

// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 单独样式文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        host: '0.0.0.0',
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
        {test: /\.scss$/,include: path.resolve(__dirname, 'app'), loader: 'style!css!sass?sourceMap'},
        {test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader'},
        {test: /\.js[x]?$/, loaders: ['babel-loader'], exclude: path.resolve(__dirname, node_modules)},
        {test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192'},
        {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader: 'file-loader'}
    ]
  },
  //其它解决方案配置
  resolve: {
    extensions: ['', '.js', '.jsx'],
    // 提高webpack搜索的速度
    alias: { }
  },
  devtool: 'source-map',
  'display-error-details': true,
  // 使用externals可以将react分离，然后用<script>单独将react引入
  externals: [],
  //插件项
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new ExtractTextPlugin('main.css', {
      allChunks: true,
      disable: false
    })
  ]
};