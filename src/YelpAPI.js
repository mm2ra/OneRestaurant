import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MileForm from "./MileForm";
import App from "./App";
import * as criteriaArray from "./criteriaArray";

export default class YelpAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rests: []
    };
  }

  componentDidMount() {
    axios.get("./response.json").then(res => {
      const data = res.data;
      const names = data.businesses.map(restaurant => restaurant.name);
      const price = data.businesses.map(restaurant => restaurant.price);
      const rating = data.businesses.map(restaurant => restaurant.rating);
      const rests = [];
      for (let i = 0; i < names.length; i++) {
        rests.push({ names: names[i], price: price[i], rating: rating[i] });
      }
      this.setState({ rests: rests });
    });
  }

  render() {
    let output = [];
    //while (output.length > 1) {
    if (this.props.index == criteriaArray.criteria.length - 1) {
      for (let i = 0; i < this.state.rests.length; i++) {
        if (
          this.state.rests[i].price == this.props.cost &&
          this.state.rests[i].rating == this.props.rated
        ) {
          output.push(this.state.rests[i]);
        }
      }
      console.log(output);
    }
    // }
    return <output />;
  }
}
