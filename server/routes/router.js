/**
 * router.get('/path', async fn)
 * router.post('/path', async fn)
 */
import Router from "koa-router";

const router = new Router();

// 首页路由
router.get("/", require("../containers/index.js").index);
router.post("/rest/v1/getList", require("../containers/index.js").getList);

// 登录页
router.get("/login", require("../containers/login.js").index);
router.post("/login", require("../containers/login.js").login);
router.get("/logout", require("../containers/login.js").logout);

// 注册页
router.get("/reg", require("../containers/reg.js").index);
router.post("/regUser", require("../containers/reg.js").reg);
router.post("/vaildateUser", require("../containers/reg.js").vaildateUser);
router.post("/vaildateEmail", require("../containers/reg.js").vaildateEmail);

// 404
router.get("/notFound", require("../containers/notFound.js").index);

// set a router
module.exports = router.routes();
