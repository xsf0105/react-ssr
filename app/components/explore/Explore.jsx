import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute ,Link} from 'react-router'

const ACTIVE = {background: '#08ba6d'};

export default React.createClass({
  render() {
    return (
      <div className="explore">
        <Link activeClassName="cur"  to="/explore/ChildPage1">try to click me</Link>
        <Link activeClassName="cur"  to="/explore/ChildPage2">and click me</Link>
        {this.props.children}
      </div>
    )

  }
})