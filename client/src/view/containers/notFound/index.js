import React,{Component} from 'react';
import Nav from '../../components/nav/index.js';

import './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav/>
        <div className="wrapper">
          <p>404!</p>
          <p>找不到页面</p>
        </div>
      </div>
    );
  }
}
