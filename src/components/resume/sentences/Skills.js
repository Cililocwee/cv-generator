import React from "react";
import EditableTextField from "./EditableTextField";

export default function Skills() {
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
