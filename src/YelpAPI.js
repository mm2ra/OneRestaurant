import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MileForm from "./MileForm";
import App from "./App";

export default class YelpAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namecost: []
    };
  }

  componentDidMount() {
    axios.get("./response.json").then(res => {
      const data = res.data;
      const names = data.businesses.map(restaurant => restaurant.name);
      const price = data.businesses.map(restaurant => restaurant.price);
      const namecost = [];
      for (let i = 0; i < names.length; i++) {
        namecost.push({ names: names[i], price: price[i] });
      }
      this.setState({ namecost: namecost });
    });
  }

  render() {
    let output = [];
    if (this.props.isClicked) {
      for (let i = 0; i < this.state.namecost.length; i++) {
        console.log(this.props.cost);
        if (this.state.namecost[i].price == this.props.cost) {
          output.push(this.state.namecost[i]);
        }
      }
      console.log(output);
    }
    return <output />;
  }
}
