import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MileForm from "./MileForm";
import YelpAPI from "./YelpAPI";
import axios from "axios";
import response from "./response.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OneRestaurant</h1>
          <h2>
            {response}
            Welcome to the website that narrows your search results from Yelp.{" "}
          </h2>
        </header>
        <p className="App-intro" />
        <MileForm />
        {/* <YelpAPI /> */}
      </div>
    );
  }
}

export default App;
