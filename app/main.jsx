import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/* 组件加载 */
import App from './components/index/App.jsx'
import Home from './components/index/Home.jsx'
import Main from './components/main/Main.jsx'
import News from './components/news/News.jsx'
import Edu from './components/edu/Edu.jsx'
import EduDetails from './components/edu-details/EduDetails.jsx'
import Explore from './components/explore/Explore.jsx'
import ExplorePage1 from './components/explore/ExplorePage1.jsx'
import ExplorePage2 from './components/explore/ExplorePage2.jsx'

/* 样式文件加载 */
import './css/reset.css'
import './scss/common.scss'
import './scss/main.scss'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/explore" component={Explore}>
                <IndexRoute component={ExplorePage1}/>
                <Route path="/ChildPage1" component={ExplorePage1}/>
                <Route path="/ChildPage2" component={ExplorePage2}/>
            </Route>
            <Route path="/main" component={Main}/>
        </Route>
        <Route path="/edu" component={Edu}/>
        <Route path="/edu-details" component={EduDetails}/>
    </Router>
), document.getElementById('app'))