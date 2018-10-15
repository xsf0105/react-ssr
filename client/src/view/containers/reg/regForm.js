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

let validataUsername = false;
let validataEmail = false;

const asyncValidate = async (values, dispatch, props, field) => {
  if (field == "username") {
    await axios.post("/vaildate_user", values).then(function(response) {
      if (!response.data.success) {
        validataUsername = true;
        console.log(validataUsername, validataEmail);
        if (validataUsername && validataEmail) {
          throw { username: "用户名已被占用", email: "邮箱已被占用" };
        } else {
          throw { username: "用户名已被占用" };
        }
      } else {
        if (validataEmail) {
          throw { email: "邮箱已被占用" };
        }
        validataUsername = false;
      }
    });
  }

  if (field == "email") {
    await axios.post("/vaildate_email", values).then(function(response) {
      if (!response.data.success) {
        validataEmail = true;
        console.log(validataUsername, validataEmail);
        if (validataUsername && validataEmail) {
          throw { username: "用户名已被占用", email: "邮箱已被占用" };
        } else {
          throw { email: "邮箱已被占用" };
        }
      } else {
        if (validataUsername) {
          throw { username: "用户名已被占用" };
        }
        validataEmail = false;
      }
    });
  }
};

const submit = async function submit(values) {
  let _this = this;
  await axios.post("/reg_user", values).then(function(response) {
    console.log(response);
    if (!response.data.success) {
      throw new SubmissionError({ _error: response.data.message });
    } else {
      _this.props.history.push("/login");
    }
  });
};

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "必填";
  } else if (values.username.length > 15) {
    errors.username = "不能大于15个字符";
  } else if (values.username.length < 5) {
    errors.username = "不能小于5个字符";
  }
  if (!values.password) {
    errors.password = "必填";
  } else if (values.password.length > 30) {
    errors.password = "不能大于30位密码";
  } else if (values.password.length < 5) {
    errors.password = "不能小于5位密码";
  }

  if (!values.repassword) {
    errors.repassword = "必填";
  } else if (values.password != values.repassword) {
    errors.repassword = "两次密码不同";
  }

  if (!values.email) {
    errors.email = "必填";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "邮箱格式不正确";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={label} type={type} />{" "}
    {touched && (error && <span className={Login.error}>{error}</span>)}
  </div>
);

renderField.propTypes = {
  meta: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object
};

class RegForm extends Component {
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
            <b>注册账户</b>
          </li>
          <li className={Login.form_border}>
            <Field
              component={renderField}
              label="用户名"
              name="username"
              type="text"
            />
          </li>
          <li className={Login.form_border}>
            <Field
              component={renderField}
              label="密码"
              name="password"
              type="password"
            />
          </li>
          <li className={Login.form_border}>
            <Field
              component={renderField}
              label="重复密码"
              name="repassword"
              type="password"
            />
          </li>
          <li className={Login.form_border}>
            <Field
              component={renderField}
              label="邮箱"
              name="email"
              type="text"
            />
          </li>
          <li className={Login.form_top}>
            <p>请输入下列验证码</p>
          </li>
          <li className={Login.form_border}>
            <Field
              component={renderField}
              name="captcha"
              placeholder="验证码"
              type="text"
            />
          </li>
          <li className={Login.form_top}>
            <button
              className={Login.form_submit}
              disabled={pristine || submitting}
              type="submit"
            >
              注册
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

RegForm.propTypes = {
  error: PropTypes.object,
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default connect(
  null,
  actions
)(
  reduxForm({
    form: "reg_form",
    validate,
    asyncValidate,
    asyncBlurFields: ["username", "email"]
  })(RegForm)
);
