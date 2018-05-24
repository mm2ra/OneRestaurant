import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
//import response from "./response.json";

export default class YelpAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
}
