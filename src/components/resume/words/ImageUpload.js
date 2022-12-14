import React from "react";

export default function ImageUpload({ onChange, src }) {
  return (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        <img alt="profile" for="photo-upload" src={src} />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} />
    </label>
  );
}
