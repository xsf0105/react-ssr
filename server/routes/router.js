import Router from "koa-router";

import db from "../config/db.js";
const User = db.User;
const UserInfo = db.UserInfo;

const router = new Router();

// router.get('/path',async fn)或者router.post('/path',async fn)
// Index page route
router.get("/", require("../containers/index.js").index);
// router.post('/rest/v1/getList', require('../containers/index.js').getList);
router.post("/rest/v1/getList", function(req, res, next) {
    console.log(req, res, next, 99)
  User.findOne({
    where: {
      id: 1
    }
  }).then(function(res) {
    // console.log(res, 888888);
    res.render('index', {message: res})
    
  });
});

// notFound page route
router.get("/user", require("../containers/user.js").index);
// router.get('/getUserInfo', require('../containers/user.js').getUserInfo);
// User page route
router.get("/notFound", require("../containers/notFound.js").index);

// Login page route
router.get("/login", require("../containers/login.js").index);
router.post("/login", require("../containers/login.js").login);
router.get("/logout", require("../containers/login.js").logout);

// Reg page route
router.get("/reg", require("../containers/reg.js").index);
router.post("/regUser", require("../containers/reg.js").reg);
router.post("/vaildateUser", require("../containers/reg.js").vaildateUser);
router.post("/vaildateEmail", require("../containers/reg.js").vaildateEmail);

// set a router
module.exports = router.routes();
