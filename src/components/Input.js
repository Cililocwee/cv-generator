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
      email: "",
      phonenumber: "",
      location: "",

      file: "",
      imagePreviewUrl: null,
      networking: "",
    };

    this.handleBlurb = this.handleBlurb.bind(this);
    this.handleNetworking = this.handleNetworking.bind(this);

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleBlurb(event) {
    this.setState({ blurb: event.target.value });
  }

  handleNetworking(event) {
    this.setState({ networking: event.target.value });
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
            <ul>
              <li>References Input</li>
              <li>***</li>

              <li>Experience input</li>
              <li>Skills input</li>
              <li>Education input</li>
            </ul>
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

              <label>
                About Me
                <textarea
                  rows="5"
                  type="text"
                  value={this.state.blurb}
                  onChange={this.handleBlurb}
                  placeholder="I'm a pleasant person"
                />
              </label>

              <label>
                Networking
                <textarea
                  rows="5"
                  type="text"
                  value={this.state.networking}
                  onChange={this.handleNetworking}
                  placeholder="https://github.com/HaroldPainman"
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
            <AboutMe blurb={this.state.blurb} />
            <SocialMedia links={this.state.networking} />
            <References />
          </div>
          <div className="info-column">
            <NamePlate
              name={this.state.value}
              email={this.state.email}
              phonenumber={this.state.phonenumber}
              location={this.state.location}
            />
            <WorkExperience />
            <Skills />
            <Education />
          </div>
        </div>
      </div>
    );
  }
}
