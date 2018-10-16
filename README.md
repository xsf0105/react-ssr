# React 服务端渲染（大改版）

## 使用
clent/中执行, 客户端开发,默认端口5000

```bash
npm i
npm start
```


Mysql：

开启本地数据库 Mysql, 之后将mysql中的文件夹sql文件导入数据库, 
在server/config/db.json
中配置mysql的数据库名称和用户名密码即可

在根目录,客户端开发及部署,默认开启端口3000

```bash
npm i pm2 -g
npm i
npm start
```
* 数据库：Sequelize（可以对多种数据库进行操作）
* 路由同步(前后端共用一套路由)
* 模板同步(前后端共用一套模板)
* 数据同步(前后端公用一套数据状态机)
