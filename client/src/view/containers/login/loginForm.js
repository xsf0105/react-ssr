"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../../redux/actions/index";

import Login from './index.css';

if (process.env.NODE_ENV !== "production") {
  require("../../../data/mock");
}

const submit = async function submit(values) {
  let _this = this;
  console.log(_this);
  await axios.post("/login", values).then(function(response) {
    console.log(response);
    if (!response.data.success) {
      throw new SubmissionError({ _error: response.data.message });
    } else {
      _this.props.login();
      _this.props.history.push("/");
    }
  });
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { error, handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(submit.bind(this))}>
        <div className={error ? Login.tips_show : Login.tips}>{error}</div>
        <ul className={Login.form}>
          <li>
            <i className={Login.segmentation} />
          </li>
          <li>
            <b>去登录</b>
          </li>
          <li className={Login.form_border}>
            <Field
              component="input"
              name="username"
              placeholder="用户名 / 邮箱"
              type="text"
            />
          </li>
          <li className={Login.form_pw}>
            <Field
              component="input"
              name="password"
              placeholder="密码"
              type="password"
            />
          </li>
          <li>
            <Field
              className={Login.remmber_input}
              component="input"
              name="remmberPw"
              id="remmberPw"
              type="checkbox"
            />
            <label htmlFor="remmberPw" className={Login.remmber_pw}>
              记住密码
            </label>
          </li>
          <li>
            <button
              className={Login.form_submit}
              disabled={pristine || submitting}
              type="submit"
            >
              登录
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

LoginForm.propTypes = {
  error: PropTypes.object,
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
