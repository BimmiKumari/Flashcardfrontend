import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashcardForm from './Flashcardform';

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [editingFlashcard, setEditingFlashcard] = useState(null);

  useEffect(() => {
    axios.get('/api/flashcards')
      .then(response => setFlashcards(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAdd = (flashcard) => {
    axios.post('/api/flashcards', flashcard)
      .then(response => setFlashcards([...flashcards, response.data]))
      .catch(error => console.error(error));
  };

  const handleEdit = (flashcard) => {
    axios.put(`/api/flashcards/${flashcard.id}`, flashcard)
      .then(() => {
        setFlashcards(flashcards.map(fc => fc.id === flashcard.id ? flashcard : fc));
        setEditingFlashcard(null);
      })
      .catch(error => console.error(error));
  };

  const handleDelete = (id) => {
    axios.delete(`/api/flashcards/${id}`)
      .then(() => setFlashcards(flashcards.filter(fc => fc.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className='dash' >
      <h5>Add edit and delete your question here..</h5>
      <FlashcardForm 
        onSubmit={editingFlashcard ? handleEdit : handleAdd}
        initialData={editingFlashcard}
      />
      <ul className='uldesign' >
        {Array.isArray(flashcards)&&flashcards?.map(flashcard => (
          <li key={flashcard.id}>
            {flashcard.question}
            <button onClick={() => setEditingFlashcard(flashcard)} className='button' style={{margin:'10px'}}>Edit</button>
            <button onClick={() => handleDelete(flashcard.id)} className='button'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;


