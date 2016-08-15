import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/index/App.jsx'
import Home from './components/index/Home.jsx'
import Main from './components/main/Main.jsx'
import Explore from './components/explore/Explore.jsx'
import News from './components/news/News.jsx'
import Edu from './components/edu/Edu.jsx'
import EduDetails from './components/edu-details/EduDetails.jsx'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/main" component={Main}/>
        </Route>
        <Route path="/edu" component={Edu}/>
        <Route path="/edu-details" component={EduDetails}/>
    </Router>
), document.getElementById('app'))