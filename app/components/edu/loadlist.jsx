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
        axios.get(service.SERVICE.EDU.LIST, {
            params: {
              tab: 'all',
              page: _this.state.pageIndex,
              limit: 10,
              mdrender: false,
              1495928831413: ''
            }
          })
          .then(function (response) {
            console.log(response.data.data);
            _this.setState({renderArr: response.data.data})
          })
          .catch(function (error) {
            console.log(error);
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
    render() {
        var _this = this;
        var list = this.state.renderArr.map(function (res,index) {
            return (
                <li key={index}>
                    <Link to={{pathname:"/edu-details",query:{id:res.id}}}>《{res.title}》</Link>
                </li>
            );
        });
        return(
            <div className="list">
                <ul>{list}</ul>
                { _this.state.bottomTxt?<div className="loadmore">{_this.state.bottomTxt}</div>:null }
            </div>
        )
  }
}