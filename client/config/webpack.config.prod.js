/**
  加载常用模块及Webpack需要的模块组件
**/
//加载Node的Path模块
const path = require('path'),
  //加载webpack模块
  webpack = require('webpack'),
  //加载自动化css独立加载插件
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  //加载自动化HTML自动化编译插件
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  precss = require('precss'),
  postcsseasysprites = require('postcss-easysprites'),
  //加载JS模块压缩编译插件
  UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

/**
  设置默认常用路径
**/
//srcDir为当前开发目录(默认:/src)
const srcDir = path.resolve(process.cwd(), 'src'),
  //assetsDir为当前建立目录(默认:/assets)
  assetsDir = path.resolve(process.cwd(), '../public'),
  //生成JS的目录地址(默认:)
  jsDir = 'dist/js/',
  //生成css的目录地址(默认:)
  cssDir = 'dist/css/',
  //载入默认配置
  common = require('../../common.json');

const config = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'axios'
    ]
  },
  output: {
    path: assetsDir,
    filename: jsDir + '[name].js',
    publicPath: common.publicPath
  },
  module: {
    //加载器配置
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(srcDir, cssDir)],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localIdentName: '[name]_[local]_[hash:base64:3]',
                importLoaders: 1,
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  precss(),
                  autoprefixer({
                    browsers: ['last 3 version', 'ie >= 10']
                  }),
                  postcsseasysprites({imagePath: '../img', spritePath: './assets/dist/img'})
                ]
              }
            }
          ]
        })
      }, {
        test: /\.css$/,
        exclude: [path.resolve(srcDir, cssDir)],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  precss(),
                  autoprefixer({
                    browsers: ['last 3 version', 'ie >= 10']
                  }),
                  postcsseasysprites({imagePath: '../img', spritePath: './assets/dist/img'})
                ]
              }
            }
          ]
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }, {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'dist/img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/css/style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      },
      chunks: [
        'index', 'vendor', 'manifest'
      ],
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor', 'manifest'
      ],
      filename: jsDir + '[name].js'
    }),
    new UglifyJsPlugin({
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true
      }
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config;
