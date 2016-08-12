import React from 'react'
import 'whatwg-fetch'
import { Router, Route,Link, browserHistory, IndexRoute } from 'react-router'

export default class LoadList extends React.Component {
    constructor() {
        super();
        this.state = {
            renderArr: [],
            searchMode: false,
            keyWord: '',
            pageIndex: 1,
            pageCount: 0,
            bottomTxt: '',
        };
    }
    loadList = () => {
        var _this = this;
        fetch('http://115.239.229.12:8020/educationStudy/findPage', {
            method: 'POST',
            body: JSON.stringify({
                "keyword":_this.state.srhMode?keyWord:'',
                "page": _this.state.pageIndex,
                "rows":10
            })
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            var res = result.data;
            _this.pageCount = Math.ceil(res.result.totalNum/10);
            console.log(res);
            _this.setState({pageCount: _this.pageCount})
            if(_this.state.pageIndex == 1){
                _this.setState({renderArr: res.result.searchData})
            }else{
                _this.setState({renderArr: _this.state.renderArr.concat(res.result.searchData)})
            }
            _this.setState({pageIndex: _this.state.pageIndex+1},function(){
                console.log("pageIndex",_this.state.pageIndex);})
        });
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
    rowClick = (id) => {
        console.log(id);
        //<a href="javascript:void(0)">{repo.serviceName}</a>
    }
    render() {
        var _this = this;
        var repoList = this.state.renderArr.map(function (repo,index) {
            return (
                <li onClick={ _this.rowClick.bind(this,repo.id)} key={index}>
                    { index==0 || index==1 || index==2 ? <img className="hot-icon" src="img/hot.png" alt="" width="35" /> : null }
                    <Link to="/edu-details">{repo.serviceName}</Link>
                </li>
            );
        });
        return(
            <div className="list">
                <ul>{repoList}</ul>
                { _this.state.bottomTxt?<div className="loadmore">没有啦~</div>:null }
            </div>
        )
  }
}
