import React from 'react'
import Slider from '../lib/Slider.jsx'
import NavLink from '../lib/NavLink.jsx'

export default React.createClass({
  render() {
    return (
        <div>
            <div className="banner">
                <div className="swiper-container">
                    <Slider />
                </div>
                <div className="top-nav clearfix">
                    <div>
                        <a href="">
                            <i className="icon iconfont">&#xe600;</i>
                            带薪如厕
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i className="icon iconfont">&#xe607;</i>
                            G20不放假
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i className="icon iconfont">&#xe60e;</i>
                            公交上班
                        </a>
                    </div>
                </div>
            </div>
            <div className="menu clearfix">
                <div className="col3">
                    <NavLink to="/edu">
                        <img src="img/menu_edu.png" alt=""/>
                        一年级画画
                    </NavLink>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_guide.png" alt=""/>
                        二年级跳舞
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_policy.png" alt=""/>
                        三年级乒乓
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_server.png" alt=""/>
                        四年级篮球
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_train.png" alt=""/>
                        五年级国画
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_labour.png" alt=""/>
                        六年级毕业
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_train.png" alt=""/>
                        初中打架
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_suggestion.png" alt=""/>
                        高中游戏
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_more.png" alt=""/>
                        大学干啥
                    </a>
                </div>
            </div>
        </div>
    )
  }
})
