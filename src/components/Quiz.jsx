import React, { useState } from 'react';

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  // Placeholder quiz data - in a real app, this would come from your word bank
  const questions = [
    {
      word: 'Ephemeral',
      meaning: 'Lasting for a very short time',
      options: [
        'Lasting for a very short time',
        'Permanent',
        'Colorful',
        'Loud'
      ]
    }
  ];

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].meaning;
    alert(isCorrect ? 'Correct!' : 'Incorrect. Try again!');
  };

  if (!quizStarted) {
    return (
      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Word Quiz</h2>
        <p>Test your vocabulary knowledge with a quick quiz!</p>
        <button 
          onClick={handleStartQuiz}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Question {currentQuestion + 1}</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        marginTop: '1rem'
      }}>
        <h3>What is the meaning of `{questions[currentQuestion].word}`?</h3>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                padding: '1rem',
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
