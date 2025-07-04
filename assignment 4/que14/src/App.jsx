import React, { useState } from 'react';

function App() {
  const questions = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'Which planet is known as the Red Planet?', answer: 'Mars' },
    { question: 'What is 2 + 2?', answer: '4' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Simple Quiz</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Question {currentIndex + 1}</h2>
        <p>{questions[currentIndex].question}</p>
        <p><strong>Answer:</strong> {questions[currentIndex].answer}</p>
      </div>

      <button
        onClick={prevQuestion}
        disabled={currentIndex === 0}
        style={{ marginRight: '10px', padding: '10px' }}
      >
        Previous
      </button>

      <button
        onClick={nextQuestion}
        disabled={currentIndex === questions.length - 1}
        style={{ padding: '10px' }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
