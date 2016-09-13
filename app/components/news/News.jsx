import React from 'react'
import { createStore, combineReducers } from 'redux'

import  './news.scss'

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="news">
          Hey, guys!
          <p>Welcome to News Page!</p>
        </h2>
      </div>
    )
  }
})