import React, { Component } from "react";
import "./App.css";
import YelpAPI from "./YelpAPI";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import * as criteriaArray from "./criteriaArray";

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
      rated: null,
      isClicked: false,
      index: 0
    };
  }

  handleChange = (event, index, updated) => {
    let stateName = criteriaArray.criteria[this.state.index].stateName;
    this.setState({ [[stateName]]: updated, isClicked: false });
    console.log(this.state);
    console.log(this.state.isClicked);
  };

  handleClick = () => {
    let newIndex = this.state.index + 1;
    this.setState({ isClicked: true, index: newIndex });
    console.log(this.state.isClicked);
  };

  render() {
    if (this.state.index == criteriaArray.criteria.length) {
      return <div>No more criteria!</div>;
    }
    let stateName = criteriaArray.criteria[this.state.index].stateName;
    // return (
    //   <div>
    //     I am looking for a restaurant that
    //     <MuiThemeProvider>
    //       <SelectField
    //         value={this.state.cost}
    //         onChange={this.handleChange}
    //         floatingLabelText="costs"
    //       >
    //         {cost}
    //       </SelectField>
    //       <br />
    //       <FlatButton label="More Criteria" onClick={this.handleClick} />
    //     </MuiThemeProvider>
    //     <YelpAPI {...this.state} />
    //   </div>
    // );

    return (
      <div>
        I am looking for a restaurant that
        <MuiThemeProvider>
          <SelectField
            value={[this.state[stateName]]}
            onChange={this.handleChange}
            floatingLabelText={criteriaArray.criteria[this.state.index].label}
          >
            {criteriaArray.criteria[this.state.index].options}
          </SelectField>
          <br />
          <FlatButton label="More Criteria" onClick={this.handleClick} />
        </MuiThemeProvider>
        <YelpAPI {...this.state} />
      </div>
    );
  }
}
