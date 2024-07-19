import React, { useState } from 'react';
import './MainContent.css';
import defaultImage from '../images/lalibela.jpg';
function MainContent() {
   
  const [image, setImage] = useState(defaultImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('imageInput').click();
  };

  return (
    <div>
      <div className="image-container">
          <img src={image} alt="Selected" className="selected-image" />
        </div>
      <main className="Main-content">
       
      <div className="go-section">
        <button>Go</button>
      </div>
      <div className="select-section">
        <button onClick={handleButtonClick}>Select d/t Image</button>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
       
      </div>
    </main>
    </div>
  );
}

export default MainContent;
