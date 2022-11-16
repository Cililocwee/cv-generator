import React, { Component } from "react";
import ImageUpload from "./ImageUpload";

export default class ProfileCard extends Component {
  state = {
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    name: "",
    status: "",
    active: "edit",
  };

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
      <div>
        <ImageUpload onChange={this.photoUpload} src={imagePreviewUrl} />
      </div>
    );
  }
}
