import React from 'react'
import service from '../common/config.jsx'
import utilities from '../common/Utilities.jsx'

const id = utilities.getParameterByName('id');

export default class EduDetails extends React.Component{
    constructor() {
        super();
        this.state = {
            artInfo: {},
            isActive: false,
            isShare: false
        };
    }
    loadData() {
        var _this = this;
        fetch(service.SERVICE.EDU.DETAILS, {
                method: 'POST',
                body: JSON.stringify({
                    "id": id
                })
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(result.data);
                console.log(result.data);
                _this.setState({artInfo: result.data.result})
            });
    }
    componentDidMount() {
        console.log(111);
        this.loadData();
    }
    render() {
        var _this = this;
        var title = _this.state.artInfo.title;
        return(
            <div>
                <header>
                    <a className="back" href="javascript:window.history.back();">
                        <img src="../img/arrow_left.png" alt=""/>
                    </a>
                    <h4>教育详情</h4>
                </header>

                <div className="toper-tit">
                    <div className="container">
                        <h1>{title}</h1>
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
}
