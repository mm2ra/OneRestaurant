import React, { Component } from "react";
import "./App.css";
import MileForm from "./MileForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      rating: null,
      breakfast: null,
      foodtype: null,
      index: 0,
      output: [],
      rests: []
    };
  }

  componentDidMount() {
    axios.get("./response.json").then(res => {
      const data = res.data;
      const names = data.businesses.map(restaurant => restaurant.name);
      const prices = data.businesses.map(restaurant => restaurant.price);
      const ratings = data.businesses.map(restaurant => restaurant.rating);
      const categories = data.businesses.map(
        restaurant => restaurant.categories
      );
      const urls = data.businesses.map(restaurant => restaurant.url);
      const image_url = data.businesses.map(restaurant => restaurant.image_url);
      let rests = [];
      for (let i = 0; i < names.length; i++) {
        rests.push({
          name: names[i],
          price: prices[i],
          rating: ratings[i],
          categories: categories[i],
          url: urls[i],
          image: image_url[i]
        });
      }
      this.setState({ rests: rests });
    });
  }

  updateParent = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <div className="Background">
        <header className="App-header">
          <h1 className="App-title">OneRestaurant</h1>
          <h2 className="App-blurb">
            The website that narrows your search results from Yelp.{" "}
          </h2>
          <p className="Forms">
            <MileForm
              updateParent={(field, newVal) => this.updateParent(field, newVal)}
              {...this.state}
            />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
