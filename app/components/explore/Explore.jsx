import React from 'react'
import NavLink from '../lib/NavLink'

import  './explore.css'

export default React.createClass({
  render() {
    return (
      <div className="explore">
        <h2>Welcome to Export</h2>
        <button>
          <NavLink to="/explore/ChildPage1">page1 tab</NavLink>
        </button>
        <button>
          <NavLink to="/explore/ChildPage2">page2 tab</NavLink>
        </button>
        {this.props.children}
      </div>
    )
  }
})
