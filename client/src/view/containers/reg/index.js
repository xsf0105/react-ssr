"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";

import Nav from "../../../view/components/nav/index.js";
import RegForm from "./regForm";
import Login from "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { history } = this.props;
    return (
      <div>
        <Nav />
        <RegForm history={history} />
        <div className={Login.form_reg}>
          点击 注册 按钮表示同意
          <a href="#">《用户注册规则》</a>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
