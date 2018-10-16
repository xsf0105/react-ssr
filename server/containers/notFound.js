import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { layout } from "../view/layout.js";
import { Provider } from "react-redux";
import configureStore from "../../client/src/redux/store/configureStore";
import App from "../../client/src/view/containers/notFound/index.js";

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
