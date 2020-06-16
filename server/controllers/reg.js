import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { layout } from "../view/layout.js";
import { Provider } from "react-redux";
import bcrypt from "bcryptjs";
import configureStore from "../../client/src/redux/store/configureStore";
import db from "../config/db.js";
import App from "../../client/src/view/containers/reg/index.js";
const User = db.User;

//get page and switch json and html
export function index(ctx) {
  switch (ctx.accepts("json", "html")) {
    case "html":
      {
        //init store
        let loginStore = {
          user: {
            logined: ctx.isAuthenticated()
          }
        };
        const store = configureStore(loginStore);
        const html = layout(
          renderToString(
            <Provider store={store}>
              <StaticRouter location={ctx.url} context={{}}>
                <App />
              </StaticRouter>
            </Provider>
          ),
          store.getState()
        );
        ctx.body = html;
      }
      break;
    case "json":
      {
        let callBackData = {
          status: 200,
          message: "这个是主页",
          data: {}
        };
        ctx.body = callBackData;
      }
      break;
    default: {
      // allow json and html only
      ctx.throw(406, "allow json and html only");
      return;
    }
  }
}

//reg user
export async function reg(ctx) {
  if (ctx.accepts("json", "html") == "json") {
    let data = ctx.request.body;
    //If reg data is null,reback some tips
    if (!data.username || !data.password || !data.email) {
      let callBackData = {
        success: false,
        status: 200,
        message: "请输入您的账号,密码及邮箱!",
        data: {}
      };
      ctx.body = callBackData;
    } else {
      let userCount = await User.count({
        where: {
          username: data.username
        }
      });
      if (userCount) {
        let callBackData = {
          success: false,
          status: 200,
          message: "用户名有重复!",
          data: {}
        };
        ctx.body = callBackData;
      } else {
        let emailCount = await User.count({
          where: {
            email: data.email
          }
        });
        if (emailCount) {
          let callBackData = {
            success: false,
            status: 200,
            message: "邮箱有重复!",
            data: {}
          };
          ctx.body = callBackData;
        } else {
          let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(data.password, salt),
            insertData = {
              username: data.username,
              password: hash,
              email: data.email,
              captcha: data.captcha
            };

          await User.create(insertData).then(
            function() {
              let callBackData = {
                success: true,
                status: 200,
                message: "用户已创建",
                data: {}
              };
              ctx.body = callBackData;
            },
            function() {
              let callBackData = {
                success: false,
                status: 200,
                message: "数据格式不合适,请检查用户名或邮箱",
                data: {}
              };
              ctx.body = callBackData;
            }
          );
        }
      }
    }
  }
}

//vaildate uesrname
export async function vaildateUser(ctx) {
  if (ctx.accepts("json", "html") == "json") {
    let data = ctx.request.body;
    //If reg data is null,reback some tips
    if (data.username) {
      let userCount = await User.count({
        where: {
          username: data.username
        }
      });
      if (userCount) {
        let callBackData = {
          success: false,
          status: 200,
          message: "用户名有重复!",
          data: {}
        };
        ctx.body = callBackData;
      } else {
        let callBackData = {
          success: true,
          status: 200,
          message: "用户名合法",
          data: {}
        };
        ctx.body = callBackData;
      }
    } else {
      let callBackData = {
        success: false,
        status: 200,
        message: "用户名不能为空!",
        data: {}
      };
      ctx.body = callBackData;
    }
  }
}

export async function vaildateEmail(ctx) {
  if (ctx.accepts("json", "html") == "json") {
    let data = ctx.request.body;
    //If reg data is null,reback some tips
    if (data.email) {
      let emailCount = await User.count({
        where: {
          email: data.email
        }
      });
      if (emailCount) {
        let callBackData = {
          success: false,
          status: 200,
          message: "邮箱有重复!",
          data: {}
        };
        ctx.body = callBackData;
      } else {
        let callBackData = {
          success: true,
          status: 200,
          message: "邮箱合法",
          data: {}
        };
        ctx.body = callBackData;
      }
    } else {
      let callBackData = {
        success: false,
        status: 200,
        message: "用户名不能为空!",
        data: {}
      };
      ctx.body = callBackData;
    }
  }
}
