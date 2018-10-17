import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./view/homePage.js";
import Reg from "./view/containers/reg/index.js";
import Login from "./view/containers/login/index.js";
import Logout from "./view/containers/logout/logout.js";
import NotFound from "./view/containers/notFound/index.js";

export default class routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

// export default (
//   <Router >
//       <div>
//         <Switch>
//         <Route path="/" exact component={Home}/>
//         <Route path="/user" component={User}/>
//         <Route path="/login" component={Login}/>
//         <Route path="/reg" component={Reg}/>
//         <Route path="/logout" component={Logout}/>
//         <Route component={PagenotFound}/>
//       </Switch>
//       </div>
//     </Router>
// )
