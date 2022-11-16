import React, { Component } from "react";

export default class SocialMedia extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="social-media">
        <h4>Social Media</h4>
        <p>{this.props.links}</p>
      </div>
    );
  }
}
