import React, { useState, useEffect } from 'react';

const FlashcardForm = ({ onSubmit, initialData }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData.question);
      setAnswer(initialData.answer);
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ question, answer, id: initialData?.id });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div >
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        className='input-field'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        required
      />
      <input
        type="text"
        className='input-field'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        required
      />
      <button type="submit" className='button' style={{margin:'10px'}}>Submit</button>
    </form>
    </div>
  );
};

export default FlashcardForm;
