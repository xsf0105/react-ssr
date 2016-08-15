import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default React.createClass({
  render() {
    return (
        <div>

          <footer className="fixed-bottom clearfix">
            <div className="col4">
              <NavLink onlyActiveOnIndex to="/">
                <i className="icon iconfont">&#xe602;</i>
                服务
              </NavLink>
            </div>
            <div className="col4">
              <NavLink to="/news">
                <i className="icon iconfont">&#xe613;</i>
                新闻
              </NavLink>
            </div>
            <div className="col4">
              <NavLink to="/explore">
                <i className="icon iconfont">&#xe609;</i>
                发现
              </NavLink>
            </div>
            <div className="col4">
              <NavLink to="/main">
                <i className="icon iconfont">&#xe619;</i>
                我的
              </NavLink>
            </div>
          </footer>

          {this.props.children}
        </div>
    )
  }
})
