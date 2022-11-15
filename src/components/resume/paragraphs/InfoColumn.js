import React, { Component } from "react";
import NamePlate from "../sentences/NamePlate";
import WorkExperience from "../sentences/WorkExperience";
import Skills from "../sentences/Skills";
import Education from "../sentences/Education";

export default class InfoColumn extends Component {
  render() {
    return (
      <div className="info-column">
        <NamePlate />
        <WorkExperience />
        <Skills />
        <Education />
      </div>
    );
  }
}
