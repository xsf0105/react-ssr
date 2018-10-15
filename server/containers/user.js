//import React from 'react';
// import {renderToString} from 'react-dom/server';
// import {StaticRouter} from 'react-router-dom';
// import {layout} from '../view/layout.js';
// import {Provider} from 'react-redux';
// import configureStore from '../../client/src/redux/store/configureStore';
import db from "../config/db.js";

const User = db.User;

//get page and switch json and html
export async function index(ctx) {
  switch (ctx.accepts("json", "html")) {
    case "html":
      {
        // let user = await User.find({
        //   attributes: [
        //     'id', 'username', 'password'
        //   ],
        //   where: {
        //     id: 1
        //   }
        // });
        // match({
        //   routes,
        //   location: ctx.url
        // }, (error, redirectLocation, renderProps) => {
        //   if (error) {
        //     console.log(500)
        //   } else if (redirectLocation) {
        //     console.log(302)
        //   } else if (renderProps) {
        //     const store = configureStore({data: user});
        //     console.log(store.getState());
        //     ctx.body = layout(renderToString(<RouterContext {...renderProps}/>), {a: 1});
        //   } else {
        //     console.log(404);
        //   }
        // })
      }
      break;
    case "json":
      {
        let user = await User.find({
          attributes: ["uid", "username", "password"],
          where: {
            uid: 1
          }
        });
        ctx.body = user;
      }
      break;
    default: {
      // allow json and html only
      ctx.throw(406, "allow json and html only");
      return;
    }
  }
}

//get user info
export function getUserInfo() {
  // console.log(ctx.isAuthenticated());
  // console.log(ctx.isUnauthenticated());
  // passport.authenticate('local', function(err, user, info, status) {
  //     ctx.body = user;
  // })(ctx, next);
}
