// Provide custom regenerator runtime and core-js
require("babel-polyfill");

// Node babel source map support
require("source-map-support").install();

// Javascript require hook
require("babel-core/register", { ignore: /.css$/ });

// Css modules hook
require("css-modules-require-hook")({
  generateScopedName: "[name]_[local]_[hash:base64:3]",
  camelCase: true,
  rootDir: "./client/*"
});

// Image required hook
require("asset-require-hook")({
  extensions: ["jpg", "png", "gif", "webp"],
  name: "/dist/img/[name].[ext]",
  limit: 2000
});

const common = require("./common.json");

let koa = require("koa"),
  logger = require("koa-logger"),
  serve = require("koa-static2"),
  compress = require("koa-compress"),
  bodyParser = require("koa-bodyparser"),
  json = require("koa-json"),
  passport = require("koa-passport"),
  session = require("koa-session"),
  routers = require("./server/routes/router.js");

const App = () => {
  let app = new koa(); // 路由
  app.keys = ["hello-ssr"];
  app.use(logger()); // 使用logger日志库
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
  app.use(bodyParser()); // get request body
  app.use(json({ pretty: false })); // send request json
  app.use(serve("", __dirname + "/public")); // use static dir

  // session
  const CONFIG = {
    key: "ssr-react",
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true
  };
  app.use(session(CONFIG, app)); // authentication

  require("./server/auth/passport.js"); // passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routers); // 路由

  return app;
};

// Create koa server and listen
var creatServer = () => {
  const app = App();
  app.listen(common.serverPort, function() {
    console.log("Listening at localhost:" + common.serverPort);
  });
};
creatServer();
