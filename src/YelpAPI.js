// import React from "react";
// import "./App.css";
// import axios from "axios";
// import * as criteriaArray from "./criteriaArray";

// export default class YelpAPI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rests: []
//     };
//   }

//   componentDidMount() {
//     axios.get("./response.json").then(res => {
//       const data = res.data;
//       const names = data.businesses.map(restaurant => restaurant.name);
//       const price = data.businesses.map(restaurant => restaurant.price);
//       const rating = data.businesses.map(restaurant => restaurant.rating);
//       const categories = data.businesses.map(restaurant => restaurant.categories)
//       const rests = [];
//       for (let i = 0; i < names.length; i++) {
//         rests.push({ names: names[i], price: price[i], rating: rating[i], type: categories[i]});
//       }
//       this.setState({ rests: rests });
//     });
//   }

//   render() {
//     let output = [];
//     let no_breakfast = []
//     if (this.props.index == criteriaArray.criteria.length - 1) {
//       for (let i = 0; i < this.state.rests.length; i++) {
//         if (
//           this.state.rests[i].price == this.props.cost &&
//           this.state.rests[i].rating == this.props.rated &&
//           this.props.categories == "breakfast_brunch"
//         ) {
//           for( let j = 0; j < this.state.rests[i].type.length; j++){
//             if( this.state.rests[i].type[j].alias == "breakfast_brunch") {
//               output.push(this.state.rests[i]);
//             } 
//           }
//         }
//         else if (
//           this.state.rests[i].price == this.props.cost &&
//           this.state.rests[i].rating == this.props.rated &&
//           this.props.categories == "other" 
//         ) {
//           for( let j = 0; j < this.state.rests[i].type.length; j++){
//             if (this.state.rests[i].type[j].alias != "breakfast_brunch") {
//               no_breakfast.push(this.state.rests[i])
//               // if (output.includes(this.state.rests[i])) {
//               //   break
//               // }
//               // else {
//               //   output.push(this.state.rests[i])
//               // }
//             }
//             else {
//               break
//             }
//           }
//         }
//     }
//     console.log(no_breakfast)
//     }
//     return <output />;
//   }
// }
