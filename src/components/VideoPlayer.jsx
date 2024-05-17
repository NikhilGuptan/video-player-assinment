// src/components/VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import './VideoPlayer.css';

function VideoPlayer({ videoUrl, captions }) {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateCaption = () => {
      const currentTime = video.currentTime;
      const activeCaption = captions.find(caption => parseFloat(caption.time) <= currentTime);
      setCurrentCaption(activeCaption ? activeCaption.text : '');
    };

    video.addEventListener('timeupdate', updateCaption);
    return () => {
      video.removeEventListener('timeupdate', updateCaption);
    };
  }, [captions]);

  return (
    <div className="video-container">
      <video ref={videoRef} src={videoUrl} controls />
      <div className="caption">{currentCaption}</div>
    </div>
  );
}

export default VideoPlayer;
