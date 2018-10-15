import passport from "koa-passport";
import { Strategy } from "passport-local";

import db from "../config/db.js";
const User = db.User;

// 序列化ctx.login()触发
passport.serializeUser(function(user, done) {
  console.log("serializeUser: ", user);
  done(null, user.id);
});

// 反序列化（请求时，session中存在"passport":{"user":"1"}触发）
passport.deserializeUser(function(id, done) {
  console.log('deserializeUser: ', id)
  User.findById(id).then(function(user) {
    if (user) {
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  });
});

// 提交数据(策略)
passport.use(
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, username, password, done) {
      console.log(11111111)
      User.findOne({
        attributes: ["id", "username"],
        where: {
          username: username
        }
      })
        .then(function(user) {
          if (!user) {
            return done(null, false, { message: "Email does not exist" });
          }
          return done(null, user.get());
        })
        .catch(function() {
          return done(null, false);
        });
    }
  )
);
