import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../../redux/actions/index";

import Nav from "../../components/nav/index.js";

class App extends Component {
  componentDidMount() {
    let _this = this;
    axios
      .get("/logout")
      .then(function(response) {
        if (response.data.success) {
          _this.props.logout();
          _this.props.history.push("/");
        }
      })
      .catch(function(error) {
        _this.props.logout();
        _this.props.history.push("/");
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Nav />
        <div>
          <p>正在退出登录...</p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
