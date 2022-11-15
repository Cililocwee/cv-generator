import React, { Component } from "react";
import "./resume.css";

export default class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="resume-heading">{this.props.name}</div>;
  }
}
