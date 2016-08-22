import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute ,Link} from 'react-router'

import  './explore.css'
const ACTIVE = { color: '#3E3D32' }

export default React.createClass({
  render() {
    return (
      <div className="explore">
        <h2>Welcome to Export</h2>
          <ul>
              <li>
                  <Link activeStyle={ACTIVE} to="/ChildPage1">page1 tab(菜单一)</Link>
              </li>
              <li>
                  <Link activeStyle={ACTIVE} to="/ChildPage2">page2 tab(菜单二)</Link>
              </li>
          </ul>
        {this.props.children}
      </div>
    )
  }
})

