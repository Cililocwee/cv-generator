import React, { Component } from "react";
import NamePlate from "./resume/sentences/NamePlate";
import AboutMe from "./resume/sentences/AboutMe";
import ProfilePicture from "./resume/sentences/ProfilePicture";
import SocialMedia from "./resume/sentences/SocialMedia";
import References from "./resume/sentences/References";
import WorkExperience from "./resume/sentences/WorkExperience";
import Skills from "./resume/sentences/Skills";
import Education from "./resume/sentences/Education";
import "./input.css";

export default class EditableResume extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    eval(this[event.target.name]).bind(this)(event);
  }

  render() {
    return (
      <div className="resume-output" id="resume-output">
        <div className="highlight-column">
          <ProfilePicture />
          <AboutMe />
          <SocialMedia />
          <Skills />
        </div>
        <div className="info-column">
          <NamePlate />
          <WorkExperience />
          <Education />
          <References />
        </div>
      </div>
    );
  }
}
