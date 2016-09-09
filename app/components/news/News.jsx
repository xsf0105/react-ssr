import React from 'react'
import { createStore, combineReducers } from 'redux'

import  './news.scss'

var userReducer = function (state = {}, action) {
    console.log('state:', state, 'and action', action,111)

    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}
var itemsReducer = function (state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action,222)

    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ]
        default:
            return state;
    }
}

var reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
})
var store_0 = createStore(reducer)

console.log('store_0 state after initialization:', store_0.getState(),333)

store_0.dispatch({
    type: 'AN_ACTION'
})

var setNameActionCreator = function (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}
store_0.dispatch(setNameActionCreator('bob'))









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