/**
  加载常用模块及Webpack需要的模块组件
**/
//加载Node的Path模块
const path = require("path"),
  //加载webpack模块
  webpack = require("webpack"),
  //加载自动化HTML自动化编译插件
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  autoprefixer = require("autoprefixer"),
  precss = require("precss"),
  postcsseasysprites = require("postcss-easysprites");

/**
  设置默认常用路径
**/
//srcDir为当前开发目录(默认:/src)
const srcDir = path.resolve(process.cwd(), "src");
//assetsDir为当前建立目录(默认:/assets)
const assetsDir = path.resolve(process.cwd(), "assets");
//生成JS的目录地址(默认:)
const jsDir = "dist/js/";
//生成css的目录地址(默认:)
const cssDir = "dist/css/";

const config = {
  devtool: "source-map",
  entry: {
    // index: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/index.js']
    index: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://0.0.0.0:5000",
      "webpack/hot/only-dev-server",
      "./src/index.js"
    ],
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
      "react-router",
      "axios"
    ]
  },
  output: {
    path: assetsDir,
    filename: jsDir + "[name].js",
    publicPath: "/"
  },
  module: {
    //加载器配置
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(srcDir, cssDir)],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              // camelCase: true,
              localIdentName: "[name]_[local]_[hash:base64:3]",
              importLoaders: 1,
              sourceMap: true
            }
          }
          , {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                precss(),
                autoprefixer({
                  browsers: ['last 3 version', 'ie >= 10']
                }),
                // postcsseasysprites({imagePath: '../img', spritePath: './assets/dist/img'})
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(srcDir, cssDir)],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                precss(),
                autoprefixer({
                  browsers: ["last 3 version", "ie >= 10"]
                }),
                // postcsseasysprites({
                //   imagePath: "../img",
                //   spritePath: "./assets/dist/img"
                // })
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
            // options: {
            //     presets: ['react-hmre']
            // }
          }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "dist/img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      },
      chunks: ["index", "vendor", "manifest"],
      filename: "index.html"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      filename: jsDir + "[name].js"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config;
