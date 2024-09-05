// src/components/WebinarListScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

// Sample webinars data
const webinars = [
  { id: '1', title: 'Understanding the Indian Constitution', date: 'Sept 10, 2024', time: '10:00 AM' },
  { id: '2', title: 'Fundamental Rights and Duties', date: 'Sept 15, 2024', time: '2:00 PM' },
  { id: '3', title: 'Legislative Process in India', date: 'Sept 20, 2024', time: '11:00 AM', description: 'Learn about the legislative process, how laws are made, and the roles of different branches of government.' },
  { id: '4', title: 'Judiciary and Its Role', date: 'Sept 25, 2024', time: '4:00 PM', description: 'Understand the role of the judiciary in upholding the Constitution and ensuring justice.' },
  // Add more webinars here
];

// Styles
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff4e6',// Matching the background color
    minHeight: '100vh', // Ensure full viewport height
    boxSizing: 'border-box', // Avoid extra spacing
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  webinarList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  webinarItem: {
    padding: '16px',
    backgroundColor: '#fff',
    marginBottom: '12px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  webinarLink: {
    textDecoration: 'none',
    color: '#000',
    width: '100%', // Ensure the link fills the card
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
  },
};

// WebinarListScreen Component
const WebinarListScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Upcoming Webinars</h1>
      <ul style={styles.webinarList}>
        {webinars.map((item) => (
          <li key={item.id} style={styles.webinarItem}>
            <Link to={`/webinar/${item.id}`} style={styles.webinarLink}>
              <h2 style={styles.title}>{item.title}</h2>
              <p>{item.date} | {item.time}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebinarListScreen;
