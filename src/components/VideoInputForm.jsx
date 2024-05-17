// src/components/VideoInputForm.js
import React, { useState } from 'react';
import './VideoInputForm.css';

function VideoInputForm({ setVideoUrl, setCaptions }) {
  const [url, setUrl] = useState('');
  const [captionText, setCaptionText] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleAddCaption = () => {
    if (captionText.trim() === '' || timestamp.trim() === '' || isNaN(timestamp)) {
      alert('Please enter valid caption text and numeric timestamp.');
      return;
    }
    setCaptions(prevCaptions => [...prevCaptions, { text: captionText, time: timestamp }]);
    setCaptionText('');
    setTimestamp('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="button" onClick={() => setVideoUrl(url)}>Load Video</button>
        <div>
          <input
            type="text"
            placeholder="Enter caption text"
            value={captionText}
            onChange={(e) => setCaptionText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter timestamp (in seconds)"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
          <button type="button" onClick={handleAddCaption}>Add Caption</button>
        </div>
      </form>
    </div>
  );
}

export default VideoInputForm;
