import React, { useState } from 'react';

const Home = () => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [wordType, setWordType] = useState('noun');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add functionality to save word
    console.log({ word, meaning, wordType });
    // Clear form
    setWord('');
    setMeaning('');
    setWordType('noun');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add New Word</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="word">Word:</label>
          <input
            type="text"
            id="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div>
          <label htmlFor="meaning">Meaning:</label>
          <textarea
            id="meaning"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div>
          <label htmlFor="wordType">Word Type:</label>
          <select
            id="wordType"
            value={wordType}
            onChange={(e) => setWordType(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
            <option value="adverb">Adverb</option>
          </select>
        </div>
        <button type="submit" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Add Word
        </button>
      </form>
    </div>
  );
};

export default Home;
