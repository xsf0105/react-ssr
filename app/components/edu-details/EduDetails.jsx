import React from 'react'
import service from '../common/config.jsx'
import utilities from '../common/Utilities.jsx'

var id = utilities.getParameterByName('id');
console.log('ID is',id);

export default class EduDetails extends React.Component{
    constructor() {
        super();
        this.state = {
            artInfo: {},
            isActive: false,
            isShare: false,
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
                _this.setState({artInfo: result.data.result})
                _this.setState({title: result.data.result.serviceName})
            });
    }
    store() {
        var _this = this;
        if(!_this.state.isActive)
            var url = service.SERVICE.EDU.UNSTORE;
        else
            var url = service.SERVICE.EDU.STORE;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "educationStudyId": id
            })
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result.data);
            _this.setState({isActive: !_this.state.isActive})
        });


    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        var _this = this;
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
                        <h1>{_this.state.artInfo.serviceName}</h1>
                        <div className="mob-author clearfix">
                            <span className="fl">{_this.state.artInfo.createDate}</span>
                            <span className="fr share">
                                <i className="icon iconfont">&#xe604;</i>
                            </span>
                            <span className="fr nice">
                                <i className="icon iconfont">&#xe614;</i>
                            </span>
                            <span className="fr watch">
                                <i className="icon iconfont">&#xe615;</i>
                                {_this.state.artInfo.clickNum}
                            </span>
                        </div>
                    </div>
                </div>

                <section className="section2">
                    <div className="container">
                        <h1>服务依据</h1>
                        <p>{_this.state.artInfo.serviceBasis}</p>
                        <h1>服务对象</h1>
                        <p>{_this.state.artInfo.serviceObject}</p>
                    </div>
                </section>
                {this.props.children}
            </div>
        )
  }
}
