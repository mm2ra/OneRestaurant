// import React, { Component } from "react";
// import "./App.css";
// import axios from "axios";

// export default class YelpAPI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     axios.get("./response.json").then(res => {
//       const data = res.data;
//       const names = data.businesses.map(restaurant => restaurant.name);
//       const prices = data.businesses.map(restaurant => restaurant.price);
//       const ratings = data.businesses.map(restaurant => restaurant.rating);
//       const categories = data.businesses.map(
//         restaurant => restaurant.categories
//       );
//       let rests = [];
//       for (let i = 0; i < names.length; i++) {
//         rests.push({
//           name: names[i],
//           price: prices[i],
//           rating: ratings[i],
//           categories: categories[i]
//         });
//       }
//       this.props.updateParent("rests", rests);
//     });
//   }

//   render() {
//     return <div>{this.state.output}</div>;
//   }
// }
