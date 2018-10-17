/**
 * router.get/post('/path', async fn)
 */
import Router from "koa-router";

const router = new Router();

// 首页路由
router.get("/", require("../controllers/index.js").index);
router.post("/rest/v1/getList", require("../controllers/index.js").getList);

// 登录页
router.get("/login", require("../controllers/login.js").index);
router.post("/rest/v1/login", require("../controllers/login.js").login);
router.get("/logout", require("../controllers/login.js").logout);

// 注册页
router.get("/reg", require("../controllers/reg.js").index);
router.post("/regUser", require("../controllers/reg.js").reg);
router.post("/vaildateUser", require("../controllers/reg.js").vaildateUser);
router.post("/vaildateEmail", require("../controllers/reg.js").vaildateEmail);

// 404
router.get("/notFound", require("../controllers/notFound.js").index);

// set a router
module.exports = router.routes();
