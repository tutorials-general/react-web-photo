import React from 'react';
import Camera from 'react-html5-camera-photo'
import './App.css';


function App() {
  const handleTakePhoto = (dataUri) => {
    console.log('dataUri', dataUri)
    console.log('photo!')
  }
  return (
    <div className="App">
      camera
      <Camera onTakePhoto={handleTakePhoto} onTakePhotoAnimationDone={handleTakePhoto}/>
    </div>
  );
}

export default App;
