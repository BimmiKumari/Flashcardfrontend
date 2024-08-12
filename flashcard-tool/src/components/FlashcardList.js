import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('/api/flashcards')
      .then(response => setFlashcards(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div>
      {flashcards.length > 0 && (
        <div>
          <Flashcard flashcard={flashcards[currentIndex]} />
          <div className='button-back'>
          <button onClick={handlePrevious} className='button'>Previous</button>
          <button onClick={handleNext} className='button'>Next</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardList;

