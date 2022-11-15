import React, { Component } from "react";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { blurb = "Describe yourself and your objective here." } = this.props;
    return (
      <div className="about-me">
        <h4>About Me</h4>
        <p>{blurb}</p>
      </div>
    );
  }
}
