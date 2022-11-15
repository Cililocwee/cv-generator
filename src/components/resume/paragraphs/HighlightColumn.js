import React, { Component } from "react";
import AboutMe from "../sentences/AboutMe";
import ProfilePicture from "../sentences/ProfilePicture";
import SocialMedia from "../sentences/SocialMedia";
import References from "../sentences/References";

export default class HighlightColumn extends Component {
  render() {
    const { blurb } = this.props;

    return (
      <div className="highlight-column">
        <ProfilePicture />
        <AboutMe blurb={blurb} />
        <SocialMedia />
        <References />
      </div>
    );
  }
}
