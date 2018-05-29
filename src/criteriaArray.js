import MenuItem from "material-ui/MenuItem";
import React, { Component } from "react";

export const criteria = [
  {
    label: "costs",
    stateName: "cost",
    options: [
      <MenuItem key={1} value="$" primaryText="$" />,
      <MenuItem key={2} value="$$" primaryText="$$" />,
      <MenuItem key={3} value="$$$" primaryText="$$$" />
    ]
  },
  {
    label: "minimum rating",
    stateName: "rated",
    options: [
      <MenuItem key={2} value="2.0" primaryText="2 stars" />,
      <MenuItem key={2.5} value="2.5" primaryText="2.5 stars" />,
      <MenuItem key={3} value="3.0" primaryText="3 stars" />,
      <MenuItem key={3.5} value="3.5" primaryText="3.5 stars" />,
      <MenuItem key={4} value="4.0" primaryText="4 stars" />,
      <MenuItem key={4.5} value="4.5" primaryText="4.5 stars" />,
      <MenuItem key={5} value="5.0" primaryText="5 star" />
    ]
  },
  {
    label: "within miles",
    stateName: "miles",
    options: [
      <MenuItem key={1} value="1 mile" primaryText="1 mile" />,
      <MenuItem key={2} value="5 miles" primaryText="5 miles" />,
      <MenuItem key={3} value="20 miles" primaryText="20 miles" />,
      <MenuItem key={4} value="50 miles" primaryText="50 miles" />
    ]
  }
];
