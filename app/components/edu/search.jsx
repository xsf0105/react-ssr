import React from 'react'

export default class Search extends React.Component {
    render() {
        return(
            <div className="srh">
                <div className="container">
                    <input type="text" placeholder="请输入政策内容关键字" />
                    <a href="javascript:void(0);"><i className="icon iconfont">&#xe618;</i></a>
                </div>
            </div>
        )
    }
}

