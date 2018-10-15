//加载webpack模块
const webpack = require('webpack');
// const express = require('express');
const WebpackDevServer = require('webpack-dev-server');
//加载webpack配置文件
const config = require('./webpack.config.dev');
//载入默认配置
const common = require('../../common.json');

//配置及初始化Koa服务器
var creatServer = () => {
    //调用webpack热加载模块及对应参数
    let app = new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true // 用颜色标识
        }
    });
    //调用开启端口用来测试和开发
    app.listen(common.clientPort , function(err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:'+common.clientPort);
    });
};

//调用创建koa服务器方法
creatServer();
