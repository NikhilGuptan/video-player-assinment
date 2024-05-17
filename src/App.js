// src/App.js
import React, { useState } from 'react';
import VideoInputForm from './components/VideoInputForm';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  return (
    <div className="App">
      <h1>Video Caption App</h1>
      <VideoInputForm setVideoUrl={setVideoUrl} setCaptions={setCaptions} />
      {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
    </div>
  );
}

export default App;
