import React from 'react'
import LoadList from './LoadList.jsx'

export default class Edu extends React.Component {
    render() {
        return(
            <div>
                <div className="toper">
                    <div className="sub-banner">
                        <a href="javascript:history.back();">
                            <img src={require('../../img/arrow_left.png')} alt=""/>
                        </a>
                        <h4>CNode:Node.js专业中文社区</h4>
                    </div>
                </div>

                <LoadList></LoadList>
            </div>
        )
  }
}
