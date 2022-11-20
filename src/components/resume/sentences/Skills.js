import React, { Component } from "react";
import EditableTextField from "./EditableTextField";

export default class Skills extends Component {
  render() {
    return (
      <div className="skill-div">
        <h4>Skills</h4>

        <EditableTextField value="Dependable" />
        <EditableTextField value="Well-spoken" />
        <EditableTextField value="Hard-working" />
        <EditableTextField value="Team player" />
      </div>
    );
  }
}
