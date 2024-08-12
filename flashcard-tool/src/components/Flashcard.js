import React, { useState } from 'react';
import "./Flashcard.css"
import ReactCardFlip from 'react-card-flip'
const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => {
    console.log("card clicked")
    setFlipped(!flipped);
  };


  return (
    <div  >
      <ReactCardFlip flipDirection='horizontal' isFlipped={flipped}>
        <div className="card" onClick={handleFlip}>
          {flashcard.question}
        </div>
        <div className="card card-back" onClick={handleFlip}>
          {flashcard.answer}
        </div>
    
      </ReactCardFlip>
    </div>
  );
};

export default Flashcard;


