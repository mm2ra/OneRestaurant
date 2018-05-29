import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MileForm from "./MileForm";
import YelpAPI from "./YelpAPI";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isClicked: false
      // newQ: ""
    };
  }

  // handleClick = question => {
  //   this.setState({ isClicked: true, newQ: question });
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OneRestaurant</h1>
          <h2>
            Welcome to the website that narrows your search results from Yelp.{" "}
          </h2>
        </header>
        <p className="App-intro" />
        <MileForm handleClick={this.handleClick} />
        <YelpAPI handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
