import React,{Component} from 'react';
import Nav from '../../components/nav/index.js';

import '../../reset.css';
import Style_404 from './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav/>
        <div className={Style_404.wrapper}>
          <p>NOT FOUND PAGE!</p>
          <p>找不到页面</p>
        </div>
      </div>
    );
  }
}
