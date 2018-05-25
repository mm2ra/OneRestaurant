import React, { Component } from "react";
import "./App.css";
import YelpAPI from "./YelpAPI";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from 'material-ui/FlatButton';

const miles = [
  <MenuItem key={1} value={1} primaryText="1 mile" />,
  <MenuItem key={2} value={2} primaryText="5 miles" />,
  <MenuItem key={3} value={3} primaryText="20 miles" />,
  <MenuItem key={4} value={4} primaryText="50 miles" />
];

const cost = [
  <MenuItem key={1} value={1} primaryText="$" />,
  <MenuItem key={2} value={2} primaryText="$$" />,
  <MenuItem key={3} value={3} primaryText="$$$" />
];

export default class MileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      isClicked: false, 
    };
  }

  handleChange = (event, index, value) => this.setState({ value: value });

  handleClick =() => this.setState({isClicked: true});

  render() {
    return (
      <div>
        I am looking for a restaurant within
        <MuiThemeProvider>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="miles"
          >
            {miles}
          </SelectField>
          that
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
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
