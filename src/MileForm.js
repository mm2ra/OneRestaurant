import React, { Component } from "react";
import "./App.css";
import SelectField from "material-ui/SelectField";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import * as criteriaArray from "./criteriaArray";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

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
        <div className= "Restaurant">
        <Card>
        <CardContent>
          <Typography color="darkslategrey">
            OneRestaurant
          </Typography>
          <Typography variant="headline" component="h2">
            {myRest.name}
          </Typography>
        </CardContent>
        <img src={myRest.image} width="400" height="341"/>
        <CardActions className= "Link"> 
          <Button style={{backgroundColor: "#A6BDB1"}} size="small" variant="outlined">
            <a href={myRest.url}>See on Yelp</a> 
          </Button>
        </CardActions>
        </Card>
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
         <div className= "Restaurant">
          <Card>
          <CardContent>
            <Typography color="darkslategrey">
              OneRestaurant
            </Typography>
            <Typography variant="headline" component="h2">
              {myRest.name}
            </Typography>
          </CardContent>
          <img src={myRest.image} width="400" height="341"/>
          <CardActions className= "Link"> 
            <Button style={{backgroundColor: "#A6BDB1"}} size="small" variant="outlined">
              <a href={myRest.url}>See on Yelp</a> 
            </Button>
          </CardActions>
          </Card>
        </div>
      );
    }
    let stateName = criteriaArray.criteria[this.props.index].stateName;

    return (
      <div className= "Main"> 
        I am looking for a restaurant
        <MuiThemeProvider>
          <SelectField className = "Selection"
            value={this.props[stateName]}
            onChange={this.handleChange}
            floatingLabelText={criteriaArray.criteria[this.props.index].label}
            floatingLabelFixed={true}
            floatingLabelStyle={{color: 'darkslategrey'}}
            maxWidth={true}
            underlineStyle={{ borderColor: 'darkslategrey' }}
          >
            {criteriaArray.criteria[this.props.index].options}
          </SelectField>
          <br />
          <br />
          <Button style={{backgroundColor: "#A6BDB1"}} size="small" variant="outlined" onClick={this.handleClick}>
            Next Criteria
          </Button>
        </MuiThemeProvider>
        </div> 
    );
  }
}
