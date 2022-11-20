import React, { Component } from "react";

export default class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
    };
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
    return (
      <div className="profile-picture">
        <div className="img-wrap img-upload">
          <input id="photo-upload" type="file" onChange={this.photoUpload} />
          <img
            id="profile-picture"
            alt="profile"
            src={this.state.imagePreviewUrl}
            onClick={this.photoUpload}
          />
        </div>
      </div>
    );
  }
}
