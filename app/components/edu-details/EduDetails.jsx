import React from 'react'

export default  React.createClass( {
    render() {
        return(
            <div>
                <header>
                    <a className="back" href="javascript:window.history.back();">
                        <img src="img/arrow_left.png" alt=""/>
                    </a>
                    <h4>教育详情</h4>
                </header>

                <div className="toper-tit">
                    <div className="container">
                        
                        <h1>xxxxxxxxxxxxxx</h1>
                        <div className="mob-author clearfix">
                            <span className="fl">20160507</span>
                            <span className="fr share">
                                <i className="icon iconfont">&#xe604;</i>
                            </span>
                            <span className="fr nice">
                                <i className="icon iconfont">&#xe614;</i>
                            </span>
                            <span className="fr watch">
                                <i className="icon iconfont">&#xe615;</i>
                                111
                            </span>
                        </div>
                        
                    </div>
                </div>

                <section className="section2">
                    <div className="container">
                        <h1>服务依据</h1>
                        <p>xxxxxxxxxxxx</p>
                        <h1>服务对象</h1>
                        <p>xxxxxxxxxxxxxxxxx</p>
                    </div>
                </section>
                {this.props.children}
            </div>
        )
  }
})
