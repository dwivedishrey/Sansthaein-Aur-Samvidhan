// WebinarDetailScreen.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
  description: {
    fontSize: '16px',
    marginBottom: '24px',
  },
  button: {
    display: 'block',
    marginBottom: '12px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  buttonSecondary: {
    backgroundColor: '#6c757d',
  },
};

// Sample data for demonstration
const webinars = [
  { id: '1', title: 'Understanding the Indian Constitution', date: 'Sept 10, 2024', time: '10:00 AM' },
  { id: '2', title: 'Fundamental Rights and Duties', date: 'Sept 15, 2024', time: '2:00 PM' },
  // Add more webinars here
];

const WebinarDetailScreen = () => {
  const { webinarId } = useParams();
  const navigate = useNavigate();
  const webinar = webinars.find(w => w.id === webinarId);

  const handleJoinClick = () => {
    alert('Joining Webinar...');
  };

  const handleQASectionClick = () => {
    navigate(`/webinar/${webinarId}/qa`);
  };

  if (!webinar) {
    return <div>Webinar not found</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{webinar.title}</h1>
      <p>{webinar.date} | {webinar.time}</p>
      <p style={styles.description}>
        Join live webinars with experts discussing key constitutional topics. Participate in Q&A sessions and gain deeper insights into the workings of government.
      </p>
      <button style={styles.button} onClick={handleJoinClick}>Join Webinar</button>
      <button style={{ ...styles.button, ...styles.buttonSecondary }} onClick={handleQASectionClick}>Go to Q&A</button>
    </div>
  );
};

export default WebinarDetailScreen;
