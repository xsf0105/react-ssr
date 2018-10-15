import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./view/home.js";
import Page404 from "./view/containers/notFound/404.js";
import User from "./view/containers/user.js";
import Login from "./view/containers/login/index.js";
import Reg from "./view/containers/reg/index.js";
import Logout from "./view/containers/logout/logout.js";

export default class routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/reg" component={Reg} />
            <Route path="/logout" component={Logout} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// TODO
// export default (
//   <Router >
//       <div>
//         <Switch>
//         <Route path="/" exact component={Home}/>
//         <Route path="/user" component={User}/>
//         <Route path="/login" component={Login}/>
//         <Route path="/reg" component={Reg}/>
//         <Route path="/logout" component={Logout}/>
//         <Route component={Page404}/>
//       </Switch>
//       </div>
//     </Router>
// )
