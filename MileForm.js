import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import YelpAPI from './YelpAPI';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Icon, message } from 'antd';

const onClick = function ({ key }) {
    message.info('Click on item ${key}');
}

const miles = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1 mile</Menu.Item>
    <Menu.Item key="2">5 miles</Menu.Item>
    <Menu.Item key="3">10 miles</Menu.Item>
  </Menu>
);

const cost = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">$</Menu.Item>
    <Menu.Item key="2">$$</Menu.Item>
    <Menu.Item key="3">$$$</Menu.Item>
  </Menu>
);

export default class MileForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { value: "1 mile", cost: "$" };
    this.handleisClicked = this.handleisClicked.bind(this)
    this.state = {isClicked: false};
  }

  handleisClicked() {
    this.setState({isClicked: true});
  }

  render() {
    const isClicked = this.state.isClicked; 

    let button = <SubmitButton onClick={this.handleisClicked}/>; 

    return (
      <div> 
        <form onSubmit={this.handleSubmit}>
        <label>
        </label>
      </form>
      <Criteria1 isClicked ={isClicked} />
        {button}
      </div>
    );
  }
}

function FirstQ(props) {
  return <div> 
    I'm looking for a restaurant within....
      <Dropdown overlay={miles}>
        <a className="ant-dropdown-link" href="#">
            miles <Icon type="down" />
        </a>
    </Dropdown>
    ...that...
          <Dropdown overlay={cost}>
            <a className="ant-dropdown-link" href="#">
              costs <Icon type="down" />
            </a>
          </Dropdown>
  </div>
}

function SecondQ(props) {
  return <h2>Sentence 2</h2>;
}

function Criteria1(props) {
  const isClicked = props.isClicked; 
  if (isClicked) {
    return <SecondQ/>;
  }
  return <FirstQ/>;
}

function SubmitButton(props) {
  return (
    <button onClick={props.onClick}>
      Submit
    </button>
  )
}
