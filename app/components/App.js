import React from 'react'
import NavLink from './NavLink'

//<ul role="nav">
//    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
//<li>
//<NavLink to="/about">About</NavLink>
//    </li>
//    <li><NavLink to="/repos">Repos</NavLink></li>
//    </ul>


export default React.createClass({
  render() {
    return (
      <div>
          <footer className="fixed-bottom clearfix">
              <div className="col4">
                  <NavLink to="/">
                      <i className="icon iconfont">&#xe602;</i>
                      服务
                  </NavLink>
              </div>
              <div className="col4">
                  <NavLink to="/about">
                      <i className="icon iconfont">&#xe613;</i>
                      新闻
                  </NavLink>
              </div>
              <div className="col4">
                  <a href="">
                      <i className="icon iconfont">&#xe609;</i>
                      发现
                  </a>
              </div>
              <div className="col4">
                  <a href="">
                      <i className="icon iconfont">&#xe619;</i>
                      我的
                  </a>
              </div>
          </footer>
        {this.props.children}
      </div>
    )
  }
})
