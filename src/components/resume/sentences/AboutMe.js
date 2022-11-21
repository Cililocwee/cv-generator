import React from "react";
import EditableTextField from "./EditableTextField";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h4>About Me</h4>
      <EditableTextField value="Describe yourself and your objective here." />
    </div>
  );
}
