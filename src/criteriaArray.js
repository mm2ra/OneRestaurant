import MenuItem from "material-ui/MenuItem";
import React, { Component } from "react";

export const criteria = [
  {
    label: "that costs",
    stateName: "price",
    options: [
      <MenuItem key={1} value="$" primaryText="$" />,
      <MenuItem key={2} value="$$" primaryText="$$" />,
      <MenuItem key={3} value="$$$" primaryText="$$$" />
    ]
  },
  {
    label: "with a minimum rating of",
    stateName: "rating",
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
    label: "that is ideal",
    stateName: "breakfast",
    options: [
      <MenuItem
        key={1}
        value={["breakfast_brunch"]}
        primaryText="for breakfast"
      />,
      <MenuItem key={2} value={["other"]} primaryText="for lunch or dinner" />
    ]
  },
  {
    label: "that has a food type of",
    stateName: "foodtype",
    options: [
      <MenuItem
        key={1}
        value={[
          "bbq",
          "soul food",
          "sandwiches",
          "newamerican",
          "southern",
          "tradamerican",
          "burgers",
          "bagels",
          "diners",
          "delis",
          "steak",
          "hotdogs"
        ]}
        primaryText="American"
      />,
      <MenuItem
        key={2}
        value={["mexican", "latin", "tex-mex", "spanish", "tacos"]}
        primaryText="Hispanic"
      />,
      <MenuItem key={3} value={["italian", "pizza"]} primaryText="Italian" />,
      <MenuItem
        key={4}
        value={[
          "korean",
          "thai",
          "chinese",
          "taiwanese",
          "japanese",
          "bubbletea",
          "sushi",
          "panasian",
          "asianfusion",
          "vietnamese"
        ]}
        primaryText="East Asian"
      />,
      <MenuItem key={5} value={["seafood"]} primaryText="Seafood" />,
      <MenuItem key={6} value={["french", "irish"]} primaryText="European" />,
      <MenuItem
        key={7}
        value={[
          "cafes",
          "coffee",
          "donuts",
          "waffles",
          "coffeeroasteries",
          "bakeries",
          "desserts"
        ]}
        primaryText="Cafes and Bakeries"
      />,
      <MenuItem
        key={8}
        value={[
          "afghani",
          "mediterranean",
          "halal",
          "indpak",
          "greek",
          "himalayan",
          "armenian"
        ]}
        primaryText="South Asian, Middle Eastern, and Mediterranean"
      />
    ]
  }
];
