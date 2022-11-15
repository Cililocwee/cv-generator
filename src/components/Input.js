import React, { Component } from "react";
import NamePlate from "./resume/sentences/NamePlate";
import AboutMe from "./resume/sentences/AboutMe";
import ProfilePicture from "./resume/sentences/ProfilePicture";
import SocialMedia from "./resume/sentences/SocialMedia";
import References from "./resume/sentences/References";
import WorkExperience from "./resume/sentences/WorkExperience";
import Skills from "./resume/sentences/Skills";
import Education from "./resume/sentences/Education";

export default class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      blurb: "",
    };

    this.handleName = this.handleName.bind(this);
    this.handleBlurb = this.handleBlurb.bind(this);
  }

  handleName(event) {
    this.setState({ value: event.target.value });
  }

  handleBlurb(event) {
    this.setState({ blurb: event.target.value });
  }

  render() {
    return (
      <div className="input-wrapper">
        <div className="general-input">
          <form className="general-input-form">
            <ul>
              <li>Profile Picture Upload</li>
              <li>About Me Input</li>
              <li>Social Media Input</li>
              <li>References Input</li>
              <li>***</li>
              <li>Name input</li>
              <li>Contact info input</li>
              <li>Experience input</li>
              <li>Skills input</li>
              <li>Educaiton input</li>
            </ul>

            <label>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleName}
                placeholder="John Smith"
              />
            </label>

            <label>
              Blurb:
              <textarea
                rows="5"
                type="text"
                value={this.state.blurb}
                onChange={this.handleBlurb}
                placeholder="I'm a pleasant person"
              />
            </label>
          </form>
        </div>

        <div className="resume-output">
          <div className="highlight-column">
            <ProfilePicture />
            <AboutMe blurb={this.state.blurb} />
            <SocialMedia />
            <References />
          </div>
          <div className="info-column">
            <NamePlate name={this.state.value} />
            <WorkExperience />
            <Skills />
            <Education />
          </div>
        </div>
      </div>
    );
  }
}
