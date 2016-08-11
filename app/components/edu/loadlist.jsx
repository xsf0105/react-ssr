import React from 'react'
import 'whatwg-fetch'

export default class LoadList extends React.Component {
    constructor() {
        super();
        this.state = {
            renderArr: [],
            max: '',
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
                "page":1,
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

            if(_this.state.pageIndex == 1){
                _this.setState({
                    renderArr: res.result.searchData
                },function(){
                    console.log(12,_this.state.renderArr);
                })
            }else{
                _this.setState({
                    renderArr: res.result.searchData.concat(res),
                },function(){
                    console.log(222);
                })
            }

            _this.setState({
                pageIndex: _this.state.pageIndex++
            },function(){
                console.log(1,_this.state.pageIndex);
            })

        });

    }
    componentDidMount() {
        this.loadList();
        document.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        var _this = this;
        var scrolltop = document.body.scrollTop | document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;

        console.log(scrolltop+clientHeight,document.body.clientHeight);

        if(scrolltop + clientHeight  == document.body.clientHeight){
            if (_this.state.pageIndex <= _this.state.pageCount){
                _this.loadList();
            }else{
                _this.state.bottomTxt = '到底儿了~';
            }
        }
    }
    rowClick = (id) => {
        console.log(id);
        //location.href = "edu-details.html?id="+id;
    }
    render() {
        var _this = this;
        var repoList = this.state.renderArr.map(function (repo,index) {
            return (
                <li onClick={ _this.rowClick.bind(this,repo.id)} key={index}>
                    { index==0 || index==1 || index==2 ? <img className="hot-icon" src="img/hot.png" alt="" width="35" /> : null }
                    <a href="javascript:void(0)">{repo.serviceName}</a>
                </li>
            );
        });
        return(
            <div className="list">
                <ul>{repoList}</ul>
                { _this.state.searchMode?<div className="loadmore">没有啦~</div>:null }
            </div>
        )
  }
}
