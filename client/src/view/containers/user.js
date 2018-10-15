import React, { Component } from "react";
import { Link } from "react-router";

// import "../reset.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
        <p>User Page</p>
      </div>
    );
  }
}
