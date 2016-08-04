import React from 'react'
//import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
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