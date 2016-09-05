import React from 'react'
import LoadList from './LoadList.jsx'
import Search from './Search.jsx'

export default class Edu extends React.Component {
    render() {
        return(
            <div>
                <div className="toper">
                    <div className="sub-banner">
                        <a href="javascript:history.back();">
                            <img src={require('../../img/arrow_left.png')} alt=""/>
                        </a>
                        <img src={require('../../img/title_edu.png')} alt="" />
                    </div>
                </div>
                
                <Search></Search>

                <LoadList></LoadList>
            </div>
        )
  }
}
