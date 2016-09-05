'use strict';

var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
      path.resolve(__dirname, 'app/main.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[hash:8].js",
        publicPath: '/'
    },
    resolve: {
      extension: ['', '.jsx', '.js', '.json'],
      alias: {}
    },
    'display-error-details': true,
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['babel-loader'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        { 
          test: /\.scss$/,
          include: path.resolve(__dirname, 'app'), 
          loader: 'style!css!sass?sourceMap'
        },
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url?limit=8192'
        },
          {
              test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
              loader : 'file-loader'
          }

      ]
    },
    plugins: [
      new ExtractTextPlugin("main.[hash:8].css", {
          allChunks: true,
          disable: false
      }),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash:8].js'),
      new uglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        title: 'your app title',
        template: './app/index.html',
      }),
      new webpack.optimize.MinChunkSizePlugin({
        compress: {
          warnings: false
        }
      }),
      // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
      new webpack.optimize.DedupePlugin(),
      // 按引用频度来排序 ID，以便达到减少文件大小的效果
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin({
      			minSizeReduce: 1.5,
      			moveToParents: true
      	}),
    ]
};
