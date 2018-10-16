// Node babel source map support
require("source-map-support").install();
// Javascript require hook
require("babel-core/register", { ignore: /.css$/ });
require("babel-polyfill");
// Image required hook
require("asset-require-hook")({
  extensions: ["jpg", "png", "gif", "webp"],
  name: "/dist/img/[name].[ext]",
  limit: 2000
});
// load common config
const common = require("./common.json");

let path = require("path");

// Css modules hook
require("css-modules-require-hook")({
  generateScopedName: "[name]_[local]_[hash:base64:3]",
  camelCase: true,
  rootDir: "./client/"
});

let // 加载koa主模块
  koa = require("koa"),
  // 加载koa路由模块
  router = require("koa-router")(),
  // 加载koa日记模块
  logger = require("koa-logger"),
  serve = require("koa-static2"),
  compress = require("koa-compress"),
  bodyParser = require("koa-bodyparser"),
  json = require("koa-json"),
  passport = require("koa-passport"),
  session = require("koa-session"),
  routers = require("./server/routes/router.js");

// 初始化koa对象
const App = () => {
  // 创建koa服务器应用
  let app = new koa();

  app.keys = ["ssr-react"];
  // 使用logger日志库
  app.use(logger());
  // 使用gzip压缩
  app.use(
    compress({
      filter: function(content_type) {
        return /text/i.test(content_type);
      },
      threshold: 2048,
      flush: require("zlib").Z_SYNC_FLUSH
    })
  );
  // get request body
  app.use(bodyParser());
  // send request json
  app.use(json({ pretty: false }));
  // use static dir
  app.use(serve("", __dirname + "/public"));
  // session 
  /** 
   * https://segmentfault.com/a/1190000013039187
   * 当我们讨论session的实现方式的时候，都是寻找一种方式从而使得多次请求之间能够共享一些信息。
   * 不论选择哪种方式，都是需要由服务自己来实现的，http协议并不提供原生的支持。
   *  */
  const CONFIG = {
    key: "ssr-react",
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true
  };
  app.use(session(CONFIG, app));
  // authentication
  require("./server/auth/passport.js");
  // passport
  app.use(passport.initialize());
  app.use(passport.session());
  // 路由
  app.use(routers);

  return app;
};

// Create koa server and listen
var creatServer = () => {
  const app = App();
  app.listen(common.serverPort, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Listening at localhost:" + common.serverPort);
  });
};

// 调用创建koa服务器方法
creatServer();
