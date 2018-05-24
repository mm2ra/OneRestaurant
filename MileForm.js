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
    this.state = { value: "1 mile", cost: "$" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value, cost: event.target.cost });
  }

  render() {
    return (
      <form>
        <label>
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
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
