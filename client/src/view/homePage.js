import React, { Component } from "react";
import Nav from "./components/nav/index.js";
import axios from "axios";

import "./homePage.css";
import "./reset.css";

class App extends Component {
  componentDidMount() {
    axios.post("/rest/v1/getList").then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main-container">
          <div className="view">
            <div className="welcome-feed">
              <nav className="category-nav">
                <h5>热门文章</h5>
                <ul className="nav-list">
                  <li className="nav-item router-link-exact-active">
                    <span className="title">推荐</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">前端</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">Android</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">后端</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">人工智能</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">IOS</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">工具资源</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">阅读</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span className="title">运维</span>
                  </li>
                </ul>
              </nav>
              <ul>
                <li>
                  <a href="">xxx</a>
                </li>
              </ul>
            </div>
            <aside className="welcome-side">
              <section className="shadow section auth-section">
                <div className="title">掘金 - juejin.im</div>
                <div className="slogan">一个帮助开发者成长的社区</div>
                <div className="ticket">
                  现在注册，送你
                  <a href="/books" className="highlight">
                    45元
                  </a>
                  买小册
                </div>
                <div className="input-group">
                  <div className="input-box">
                    <input
                      maxLength="20"
                      placeholder="用户名"
                      className="input"
                    />
                  </div>

                  <div className="input-box">
                    <input
                      maxLength="64"
                      placeholder="手机号"
                      className="input"
                    />
                  </div>

                  <div className="input-box">
                    <input
                      name="registerPassword"
                      type="password"
                      maxLength="64"
                      placeholder="密码（不少于 6 位）"
                      className="input"
                    />
                  </div>
                </div>
                <button className="btn submit-btn">立即注册</button>
              </section>
            </aside>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
