import React, { Component } from "react";
import EditableTextField from "./EditableTextField";

export default class SocialMedia extends Component {
  render() {
    const social1 = "Github";
    const social2 = "Linkedin";
    const sociallink1 = "github.com/Example";
    const sociallink2 = "linkedin.com/Example";
    return (
      <div className="social-media">
        <h4>Social Media</h4>
        <EditableTextField value={social1} />
        <em>
          <EditableTextField value={sociallink1} />
        </em>

        <br />
        <EditableTextField value={social2} />
        <em>
          <EditableTextField value={sociallink2} />
        </em>
      </div>
    );
  }
}
