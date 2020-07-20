import React, { useState } from "react";
import styled from "styled-components";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import { uploadImageUriToS3 } from "helper/components/Camera";

export default function CameraComp() {
  const [imageUrl, setImageUrl] = useState(null);
  const handleTakePhoto = async dataUri => {
    const fileUrl = await uploadImageUriToS3(dataUri);
    setImageUrl(fileUrl);
  };
  return (
    <div className="App">
      camera
      <StyledCamera
        onTakePhoto={handleTakePhoto}
        onTakePhotoAnimationDone={handleTakePhoto}
      />
      {imageUrl && <img src={imageUrl} alt="face" />}
    </div>
  );
}

const StyledCamera = styled(Camera)`
  background-color: black;
  width: 100px;
`;
