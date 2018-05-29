import React, { Component } from "react";
import "./App.css";
import YelpAPI from "./YelpAPI";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import * as criteriaArray from "./criteriaArray";

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
    this.setState({ [[stateName]]: updated });
    console.log(this.state);
  };

  handleClick = () => {
    let newIndex = this.state.index + 1;
    this.setState({ isClicked: true, index: newIndex });
  };

  render() {
    let stateName = criteriaArray.criteria[this.state.index].stateName;
    console.log(stateName);
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

    // this.criteria.map(item => {
    //   return(
    //     <div>
    //       <MuiThemeProvider>
    //         <SelectField
    //           value={this.state.{...item.mystate}}
    //           onChange={this.handleChange}
    //           floatingLabelText= {item.label}
    //         >
    //           {criteria[i]}
    //         </SelectField>
    //         <br />
    //         <FlatButton label="More Criteria" onClick={this.handleClick} />
    //       </MuiThemeProvider>
    //       <YelpAPI {...this.state} />
    //     </div>
    //   );
    // })}

    // for (let i = 0; i < criteria.length; i = i + 2) {
    //   return (
    //     <div>
    //       <MuiThemeProvider>
    //         <SelectField
    //           value={this.state. + criteria[i]}
    //           onChange={this.handleChange}
    //           floatingLabelText={criteria[i + 1]}
    //         >
    //           {criteria[i]}
    //         </SelectField>
    //         <br />
    //         <FlatButton label="More Criteria" onClick={this.handleClick} />
    //       </MuiThemeProvider>
    //       <YelpAPI {...this.state} />
    //     </div>
    //   );
    //   if (this.state.isClicked) {
    //     this.setState({ isClicked: false });
    //     continue;
    //   }
    // }

    // if (this.state.isClicked) {
    //   return (
    //     <div>
    //       <MuiThemeProvider>
    //         <SelectField
    //           value={this.state.rated}
    //           onChange={this.handleChange}
    //           floatingLabelText="minimum rating"
    //         >
    //           {rated}
    //         </SelectField>
    //         <br />
    //         <FlatButton label="More Criteria" onClick={this.handleClick} />
    //       </MuiThemeProvider>
    //       <YelpAPI {...this.state} />
    //     </div>
    //   );
    //   this.setState({ isClicked: false });
    // } else {
    //   return (
    //     <div>
    //       I am looking for a restaurant that
    //       <MuiThemeProvider>
    //         <SelectField
    //           value={this.state.cost}
    //           onChange={this.handleChange}
    //           floatingLabelText="costs"
    //         >
    //           {cost}
    //         </SelectField>
    //         <br />
    //         <FlatButton label="More Criteria" onClick={this.handleClick} />
    //       </MuiThemeProvider>
    //       <YelpAPI {...this.state} />
    //     </div>
    //   );
    // }
  }
}
