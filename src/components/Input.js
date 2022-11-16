import React, { Component } from "react";
import NamePlate from "./resume/sentences/NamePlate";
import AboutMe from "./resume/sentences/AboutMe";
import ProfilePicture from "./resume/sentences/ProfilePicture";
import SocialMedia from "./resume/sentences/SocialMedia";
import References from "./resume/sentences/References";
import WorkExperience from "./resume/sentences/WorkExperience";
import Skills from "./resume/sentences/Skills";
import EditableTextField from "./resume/sentences/EditableTextField";

export default class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      email: "",
      phonenumber: "",
      location: "",

      file: "",
      imagePreviewUrl: null,
      education: "hi",
    };
    this.handleClick = this.handleClick.bind(this);

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleClick(event) {
    eval(this[event.target.name]).bind(this)(event);
  }

  handleName(event) {
    this.setState({ value: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneNumber(event) {
    this.setState({ phonenumber: event.target.value });
  }

  handleLocation(event) {
    this.setState({ location: event.target.value });
  }

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { imagePreviewUrl } = this.state;
    return (
      <div className="input-wrapper">
        <div className="general-input">
          <form className="general-input-form">
            <fieldset>
              <legend>Highlights:</legend>
              <label>
                Profile Picture:
                <input
                  id="photo-upload"
                  type="file"
                  onChange={this.photoUpload}
                />
              </label>
            </fieldset>

            <fieldset>
              <legend>Contact Information:</legend>
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
                Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  placeholder="jsmith@example.com"
                />
              </label>

              <label>
                Phone:
                <input
                  type="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.handlePhoneNumber}
                  placeholder="+84.76.444.5678"
                />
              </label>

              <label>
                City:
                <input
                  type="text"
                  value={this.state.location}
                  onChange={this.handleLocation}
                  placeholder="London, England"
                />
              </label>
            </fieldset>
          </form>
        </div>

        <div className="resume-output">
          <div className="highlight-column">
            <ProfilePicture src={imagePreviewUrl} />
            <AboutMe />
            <SocialMedia />
            <Skills />
          </div>
          <div className="info-column">
            <NamePlate
              name={this.state.value}
              email={this.state.email}
              phonenumber={this.state.phonenumber}
              location={this.state.location}
            />
            <WorkExperience />
            <EditableTextField value={this.state.education} />
            <References />
          </div>
        </div>
      </div>
    );
  }
}
