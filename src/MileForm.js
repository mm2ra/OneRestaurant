import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

export default class MileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "1 mile", time: "open now" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value, time: event.target.time });
  }

  render() {
    return (
      <form>
        <label>
          I'm looking for a restaurant within....
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="one"> 1 mile</option>
            <option value="five"> 5 miles</option>
          </select>
          ...open at...
          <select time={this.state.time} onChange={this.handleChange}>
            <option value="now">open now</option>
            <option value="later">open later</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
