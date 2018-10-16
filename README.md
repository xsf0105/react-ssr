# React 服务端渲染

## 使用
前端开发目录为：clent/，client 中执行:

```bash
npm i
npm start
// 浏览器打开 http://localhost:4000/
```

客户端开发及部署在根目录执行：
```bash
npm i pm2 -g
npm i
npm start
// 浏览器打开 http://localhost:8000/
```


## Mysql 使用

开启本地数据库 Mysql, 将 mysql 中的文件夹 sql 文件导入数据库, 
在 `server/config/db.json`
中配置 mysql 的数据库名称和用户名密码


## 项目结构

├── client 前端目录
|
├── public 服务器静态资源
|
└── server 后端目录
    ├── auth 权限验证 存放用户验证部分
    ├── config 数据库 配置文件 Sequelize（可以对多种数据库进行操作）
    ├── containers 后端控制层 C 层的代码存放目录
    ├── models 操作 数据库 代码逻辑
    ├── routes 后端路由
    └── view 后端页面