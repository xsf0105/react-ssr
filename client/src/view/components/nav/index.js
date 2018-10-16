import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../../reset.css";
import "./index.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let logined = this.props.user.logined;
    return (
      // <header className="main-header">
      <header className="main-header">
        <ul className="nav">
          <li className="fl">
            <Link to="/">首 页</Link>
          </li>
          <li className="fl">
            <Link to="/404">发现</Link>
          </li>
          <li className={logined ? "avatar" : "login_visable"}>
            {/* <img src={defaultAvatar} /> */}
            <dl>
              <Link to="/">我的主页</Link>
              <Link to="/logout">退出</Link>
            </dl>
          </li>
          <li className={logined ? "login_visable" : "fr"}>
            <Link to="/reg">
              <b>注 册</b>
            </Link>
          </li>
          <li className={logined ? "login_visable" : "fr"}>
            <Link to="/login">登 录</Link>
          </li>
        </ul>
      </header>
    );
  }
}

Nav.propTypes = {
  user: PropTypes.object
};

function user(state) {
  return {
    user: state.user
  };
}

export default connect(user)(Nav);
