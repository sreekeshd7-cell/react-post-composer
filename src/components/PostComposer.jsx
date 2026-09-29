import { useState } from 'react';
import './PostComposer.css';

export default function PostComposer() {
  const [platform, setPlatform] = useState('Twitter');
  const [postText, setPostText] = useState('');

  const limits = {
    Twitter: 280,
    LinkedIn: 3000,
  };

  const limit = limits[platform];
  const charCount = postText.length;
  const isExceeded = charCount > limit;

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  return (
    <div className="composer-card">
      <h1 className="composer-title">Post Composer</h1>
      
      <div className="platform-selector">
        <label>
          <input 
            type="radio" 
            name="platform" 
            value="Twitter" 
            checked={platform === 'Twitter'} 
            onChange={handlePlatformChange} 
          />
          Twitter
        </label>
        <label>
          <input 
            type="radio" 
            name="platform" 
            value="LinkedIn" 
            checked={platform === 'LinkedIn'} 
            onChange={handlePlatformChange} 
          />
          LinkedIn
        </label>
      </div>

      <textarea 
        className={`composer-textarea ${isExceeded ? 'error-border' : ''}`}
        placeholder="What do you want to post?"
        value={postText}
        onChange={handleTextChange}
        rows="5"
      ></textarea>

      <div className="composer-footer">
        <span className={`char-counter ${isExceeded ? 'error-text' : ''}`}>
          {charCount} / {limit}
        </span>
      </div>

      {isExceeded && (
        <div className="error-message">
          {platform} posts cannot exceed {limit} characters.
        </div>
      )}

      <button className="post-button" disabled={isExceeded || charCount === 0}>
        Post
      </button>
    </div>
  );
}
