import React from 'react'

export default class Edu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tData:[],
            loading: true
        }
    }
    //加载数据
    loadData = () => {

    }
    // 单击列表
    rowClick = (e) => {
        console.log(e.key);
    }
    // 渲染后执行
    componentDidMount() {
        this.loadData();
    }

    render() {
        return(
            <div>
                <div className="toper">
                    <div className="sub-banner">
                        <a href="javascript:history.back();">
                            <img src="img/arrow_left.png" alt=""/>
                        </a>
                        <img src="img/title_edu.png" alt="" />
                    </div>
                </div>
                <div className="srh">
                    <div className="container">
                        <input type="text" placeholder="请输入政策内容关键字" />
                            <a href="javascript:void(0);"><i className="icon iconfont">&#xe618;</i></a>
                    </div>
                </div>

                <div className="list">
                    <ul>
                        <li onClick={this.rowClick}>
                            <img className="hot-icon" src="img/hot.png" alt="" width="35" />
                                <a href="javascript:void(0)" >xxxxxxxxx</a>
                        </li>
                    </ul>
                    <div className="loadmore">
                        没有啦~
                    </div>
                </div>

                <div className="no-res">
                    <div className="container">
                        <img src="img/nores.png" alt="" />
                            <h4>无搜索结果</h4>
                    </div>
                </div>

                <div className="no-res">
                    <div className="container">
                        <img src="img/nodata.png" alt="" />
                            <h4>没有数据~</h4>
                    </div>
                </div>
            </div>
        )
  }
}
