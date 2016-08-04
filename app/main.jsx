import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'

import Home from './components/Home'
import Main from './components/Main'
import Explore from './components/Explore'
import News from './components/News'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/main" component={Main}/>
        </Route>
    </Router>
), document.getElementById('app'))