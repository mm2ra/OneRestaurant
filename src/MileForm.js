import React, { Component } from "react";
import "./App.css";
import SelectField from "material-ui/SelectField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import * as criteriaArray from "./criteriaArray";

export default class MileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleChange = (event, index, updated) => {
    let stateName = criteriaArray.criteria[this.props.index].stateName;
    this.props.updateParent(stateName, updated);
    this.setState({ isClicked: false });
  };

  handleClick = e => {
    e.preventDefault();

    let newIndex = this.props.index + 1;
    this.props.updateParent("index", newIndex);
    this.setState({ isClicked: true });

    let temp = [];
    if (this.props.rating != null) {
      for (let i = 0; i < this.props.rests.length; i++) {
        if (
          this.props.rests[i].price == this.props.price &&
          this.props.rests[i].rating >= this.props.rating
        ) {
          temp.push(this.props.rests[i]);
        }
      }
    }

    if (this.props.index > 1) {
      let stateName = criteriaArray.criteria[this.props.index].stateName;
      let newTemp = [];
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < this.props[stateName].length; j++) {
          let flag = false;
          for (let k = 0; k < temp[i].categories.length; k++) {
            if (temp[i].categories[k].alias == "breakfast_brunch") {
              flag = true;
            }
            if (temp[i].categories[k].alias == this.props[stateName][j]) {
              newTemp.push(temp[i]);
            }
          }
          if (!flag && this.props[stateName][j] == "other") {
            newTemp.push(temp[i]);
          }
        }
      }
      temp = newTemp;
      this.props.updateParent("output", temp);
    }
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  render() {
    let myRest = this.props.output[
      this.getRandomInt(0, this.props.output.length)
    ];

    if (this.props.index == criteriaArray.criteria.length) {
      if (this.props.output.length == 0) {
        return (
          <div>
            {" "}
            No restaurants returned your search! Please refresh and try
            different criteria.{" "}
          </div>
        );
      }
      return (
        <div>
          Here is your restaurant:
          <br />
          {myRest.name}
          <br />
          {myRest.url}
        </div>
      );
    } else if (
      this.props.index == criteriaArray.criteria.length - 1 &&
      this.props.breakfast == "breakfast_brunch"
    ) {
      if (this.props.output.length == 0) {
        return (
          <div>
            {" "}
            No restaurants returned your search! Please refresh and try
            different criteria.{" "}
          </div>
        );
      }
      return (
        <div>
          Here is your restaurant:
          <br />
          {myRest.name}
          <br />
          {myRest.url}
        </div>
      );
    }
    let stateName = criteriaArray.criteria[this.props.index].stateName;

    return (
      <div>
        I am looking for a restaurant
        <MuiThemeProvider>
          <SelectField
            value={this.props[stateName]}
            onChange={this.handleChange}
            floatingLabelText={criteriaArray.criteria[this.props.index].label}
          >
            {criteriaArray.criteria[this.props.index].options}
          </SelectField>
          <br />
          <FlatButton label= "Next Criteria" color="#004D40" variant="raised" onClick={this.handleClick}/>
        </MuiThemeProvider>
      </div>
    );
  }
}
