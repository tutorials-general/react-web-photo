import React from 'react';
import Camera from 'react-html5-camera-photo'
import Webcam from 'react-webcam'
import styled from 'styled-components';
import './App.css';
import 'react-html5-camera-photo/build/css/index.css';


function App() {
  const handleTakePhoto = (dataUri) => {
    console.log('dataUri', dataUri)
    console.log('photo!')
  }
  return (
    <div className="App">
      camera
      <StyledCamera onTakePhoto={handleTakePhoto} onTakePhotoAnimationDone={handleTakePhoto}/>
      
    </div>
  );
}

const StyledCamera = styled(Camera)`
background-color: black
`

export default App;
