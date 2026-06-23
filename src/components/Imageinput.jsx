import React from "react";

function ImageInput({ setImage }) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        setImage(e.target.files[0]);
      }}
    />
  );
}

export default ImageInput;