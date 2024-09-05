// QASection.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Styles
const styles = {
  container: {
    padding: '16px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  input: {
    borderWidth: '1px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  question: {
    padding: '8px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  button: {
    display: 'block',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
  },
};

// Sample data for demonstration
const sampleWebinar = { title: 'Sample Webinar' };

const QASection = () => {
  const { webinarId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const submitQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Q&A for {sampleWebinar.title}</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index} style={styles.question}>{question}</li>
        ))}
      </ul>
      <input
        type="text"
        style={styles.input}
        placeholder="Ask a question..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <button style={styles.button} onClick={submitQuestion}>Submit</button>
    </div>
  );
};

export default QASection;
