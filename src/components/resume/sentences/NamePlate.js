import React, { Component } from "react";
import NameAtom from "../words/NameAtom";
import Contact from "./Contact";

export default class NamePlate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nameplate">
        <NameAtom name={this.props.name} />
        <Contact />
      </div>
    );
  }
}
