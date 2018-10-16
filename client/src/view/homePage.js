import React, { Component } from "react";
import Nav from "./components/nav/index.js";

import "./reset.css";
import "./homePage.css";

class App extends Component {
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
                    <span class="title">推荐</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">前端</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">Android</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">后端</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">人工智能</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">IOS</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">工具资源</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">阅读</span>
                  </li>
                  <li className="nav-item router-link-exact-active">
                    <span class="title">运维</span>
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
                <div class="title">掘金 - juejin.im</div>
                <div class="slogan">一个帮助开发者成长的社区</div>
                <div class="ticket">
                  现在注册，送你
                  <a href="/books" class="highlight">
                    45元
                  </a>
                  买小册
                </div>
                <div class="input-group">
                  <div class="input-box">
                    <input maxlength="20" placeholder="用户名" class="input" />
                  </div>

                  <div class="input-box">
                    <input maxlength="64" placeholder="手机号" class="input" />
                  </div>

                  <div class="input-box">
                    <input
                      name="registerPassword"
                      type="password"
                      maxlength="64"
                      autocomplete="new-password"
                      placeholder="密码（不少于 6 位）"
                      class="input"
                    />
                  </div>
                </div>
                <button class="btn submit-btn">立即注册</button>
              </section>
            </aside>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
