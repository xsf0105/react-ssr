import React from 'react'

import axios from 'axios';

import { Link } from 'react-router'
import service from '../common/config.jsx'

export default class LoadList extends React.Component {
    constructor() {
        super();
        this.state = {
            renderArr: [],
            searchMode: false,
            keyWord: '',
            pageIndex: 1,
            pageCount: 0,
            bottomTxt: ''
        };
    }
    loadList = () => {
        var _this = this;
        
        console.log(service.SERVICE.EDU.LIST)
        
        axios.get('http://localhost:3000/api/v1/topics', {
            params: {
              tab: 'all',
              page: 1,
              limit: 10,
              mdrender: false,
              1495928831413: ''
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // fetch('http://localhost:3000/api/v1/topics?tab=all&page=1&limit=10&mdrender=false&1495928831413', {
        //     method: 'GET'
        // })
        // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (result) {
            // var res = result.data;
            // _this.pageCount = Math.ceil(res.result.totalNum/10);
            // console.log(res);
            // _this.setState({pageCount: _this.pageCount})
            // if(_this.state.pageIndex == 1){
            //     _this.setState({renderArr: res.result.searchData})
            // }else{
            //     _this.setState({renderArr: _this.state.renderArr.concat(res.result.searchData)})
            // }
            // _this.setState({pageIndex: _this.state.pageIndex+1},function(){
            //     console.log("pageIndex",_this.state.pageIndex);})
        // });
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }
    componentDidMount() {
        this.loadList();
        document.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        var _this = this;
        var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if(scrolltop + clientHeight==document.body.clientHeight){
            if (_this.state.pageIndex <= _this.state.pageCount){
                _this.loadList();
            }else{
                _this.setState({bottomTxt: '到底儿了~'});
            }
        }
    }
    render() {
        var _this = this;
        var repoList = this.state.renderArr.map(function (repo,index) {
            return (
                <li key={index}>

                    { index==0 || index==1 || index==2 ? <img className="hot-icon" src={require('../../img/hot.png')} alt="" width="35" /> : null }

                    <Link to={{pathname:"/edu-details",query:{id:repo.id}}}>{repo.serviceName}</Link>

                </li>
            );
        });
        return(
            <div className="list">
                <ul>{repoList}</ul>
                { _this.state.bottomTxt?<div className="loadmore">{_this.state.bottomTxt}</div>:null }
            </div>
        )
  }
}