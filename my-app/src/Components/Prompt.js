import React, { useState } from 'react';
import './Prompt.css';

function Prompt() {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="menu">
        <div className="Prompt-section">
            <label htmlFor="prompt-input">Prompt:</label>
            <input
                id="prompt-input"
                type="text"
                value={answer}
                onChange={handleInputChange}
            />
            <label htmlFor="answer-textarea">Answer:</label>
            <textarea
                id="answer-textarea"
                value={answer}
                onChange={handleInputChange}
                rows="10" 
                cols= "80"
            />   
        </div>
       </div>
  );
}

export default Prompt;
