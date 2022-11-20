import React, { Component } from "react";
import EditableTextField from "./EditableTextField";

export default class SocialMedia extends Component {
  render() {
    return (
      <div className="social-media">
        <h4>Social Media</h4>
        <EditableTextField value="Github" />
        <em>
          <br />
          <EditableTextField value="github.com/Example" />
        </em>

        <br />
        <EditableTextField value="Linkedin" />
        <em>
          <br />
          <EditableTextField value="linkedin.com/Example" />
        </em>
      </div>
    );
  }
}
