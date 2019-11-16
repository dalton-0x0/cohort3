import React from "react";
import logo from "../logo.svg";
import "./Redux.css";

class Redux extends React.Component {
  constructor() {
    super();
    this.state = {
      pageStatus: `Redux Exercise`
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.pageStatus}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Redux;
