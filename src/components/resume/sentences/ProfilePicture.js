import React, { Component } from "react";

export default class ProfilePicture extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile-picture">
        <div className="img-wrap img-upload">
          <img alt="profile" src={this.props.src} />
        </div>
      </div>
    );
  }
}
