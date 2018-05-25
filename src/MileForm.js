import React, { Component } from "react";
import "./App.css";
import YelpAPI from "./YelpAPI";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";

const miles = [
  <MenuItem key={1} value="1 mile" primaryText="1 mile" />,
  <MenuItem key={2} value="5 miles" primaryText="5 miles" />,
  <MenuItem key={3} value="20 miles" primaryText="20 miles" />,
  <MenuItem key={4} value="50 miles" primaryText="50 miles" />
];

const color = [
  <MenuItem key={1} value="blue" primaryText="blue" />,
  <MenuItem key={2} value="red" primaryText="red" />,
  <MenuItem key={3} value="geren" primaryText="geren" />,
  <MenuItem key={4} value="yellow" primaryText="yellow" />
];

const cost = [
  <MenuItem key={1} value="$" primaryText="$" />,
  <MenuItem key={2} value="$$" primaryText="$$" />,
  <MenuItem key={3} value="$$$" primaryText="$$$" />
];

export default class MileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miles: null,
      cost: null,
      color: null,
      isClicked: false
    };
  }

  // handleChange = (event, index, miles) => {
  //   if (floatingLabelText == "miles") {
  //     this.setState({ miles: miles });
  //   }
  //   if (floatingLabelText == "cost") {
  //     this.setState({ cost: cost });
  //   }
  // };

  handleChange = (event, index, miles) => this.setState({ miles: miles });
  handleChange2 = (event, index, cost) => this.setState({ cost: cost });

  handleClick = () => {
    this.setState({ isClicked: true });
  };

  render() {
    if (this.state.isClicked) {
      return (
        <MuiThemeProvider>
          <SelectField
            value={this.state.color}
            onChange={this.handleChange}
            floatingLabelText="color"
          >
            {color}
          </SelectField>
        </MuiThemeProvider>
      );
    }
    return (
      <div>
        I am looking for a restaurant within
        <MuiThemeProvider>
          <SelectField
            value={this.state.miles}
            onChange={this.handleChange}
            floatingLabelText="miles"
          >
            {miles}
          </SelectField>
          that
          <SelectField
            value={this.state.cost}
            onChange={this.handleChange2}
            floatingLabelText="costs"
          >
            {cost}
          </SelectField>
          <br />
          <FlatButton label="More Criteria" onClick={this.handleClick} />
        </MuiThemeProvider>
        <YelpAPI {...this.state} />
      </div>
    );
  }
}
