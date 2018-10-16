import React, { Component } from "react";
import PropTypes from "prop-types";

import Nav from "./../../components/nav/index.js";
import LoginForm from "./loginForm";

import "../../reset.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <LoginForm history={this.props.history} />
        <div className="form-reg">
          还没有账号?
          <a href="#">立即注册</a>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
