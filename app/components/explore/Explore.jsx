import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute ,Link} from 'react-router'

import  './explore.scss'
const ACTIVE = { color:'#fff',background: '#08ba6d'};

export default React.createClass({
  render() {
    return (
      <div className="explore">
              <div className="col2">
                  <Link activeClassName="cur"  to="/explore/ChildPage1">Tab1</Link>
              </div>
              <div className="col2">
                  <Link activeClassName="cur"  to="/explore/ChildPage2">Tab2</Link>
              </div>
        {this.props.children}
      </div>
    )
  }
})

