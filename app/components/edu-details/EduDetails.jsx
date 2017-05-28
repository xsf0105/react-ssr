import React from 'react'
import axios from 'axios';
import service from '../common/config.jsx'
import utilities from '../common/Utilities.jsx'

export default class EduDetails extends React.Component{
    constructor() {
        super();
        this.state = {
            artInfo: {},
            isActive: false,
            isShare: false,
        };
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        var _this = this;
        axios.get(service.SERVICE.EDU.DETAILS+'/'+utilities.getParameterByName('id'), {
            params: {
              mdrender: true,
              accesstoken: '&1495931899307'
            }
          })
          .then(function (response) {
            console.log(response.data.data);

            _this.setState({artInfo: response.data.data})
            _this.setState({title: response.data.data.title})

          })
          .catch(function (error) {
            console.log(error);
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
    render() {
        var _this = this;
        function createMarkup() {
            return {__html: _this.state.artInfo.content};
        }
        return(
            <div>
                <header>
                    <a className="back" href="javascript:window.history.back();">
                        <img src={require('../../img/arrow_left.png')} alt=""/>
                    </a>
                    <h4>详情</h4>
                </header>

                <div className="topic">
                    <div className="container">
                        <h4>{_this.state.artInfo.title}</h4>

                        <div className="mob-author clearfix">
                            <span className="fl">{_this.state.artInfo.create_at}</span>

                            <span className="fr watch">
                                <i className="icon iconfont">&#xe615;</i>
                                {_this.state.artInfo.visit_count}
                            </span>
                        </div>

                        <p dangerouslySetInnerHTML={createMarkup()}></p>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
  }
}
