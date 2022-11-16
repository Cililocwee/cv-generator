import React, { Component } from "react";
import EditableTextField from "./EditableTextField";

export default class Skills extends Component {
  render() {
    const skill1 = "Dependable";
    const skill2 = "Well-spoken";
    const skill3 = "Hard-working";
    const skill4 = "Team player";
    return (
      <div className="skill-div">
        <h4>Skills</h4>

        <EditableTextField value={skill1} />
        <EditableTextField value={skill2} />
        <EditableTextField value={skill3} />
        <EditableTextField value={skill4} />
      </div>
    );
  }
}
