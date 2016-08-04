//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './components/App.jsx';
//
//ReactDOM.render(
//  <App />,
//  document.body.appendChild(document.createElement('div'))
//);

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import About from './components/Main'
import Repos from './components/Explore'
import Repo from './components/News'
import Home from './components/Home'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))
