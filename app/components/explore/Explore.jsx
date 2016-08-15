import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import NavLink from '../lib/NavLink'

import  './explore.css'
const ACTIVE = { color: '#3E3D32' }

export default React.createClass({
  render() {
    return (
      <div className="explore">
        <h2>Welcome to Export</h2>
          <ul>
              <li>
                  <NavLink activeStyle={ACTIVE} to="/ChildPage1">page1 tab(菜单一)</NavLink>
              </li>
              <li>
                  <NavLink activeStyle={ACTIVE} to="/ChildPage2">page2 tab(菜单二)</NavLink>
              </li>
          </ul>
        {this.props.children}
      </div>
    )
  }
})

