// src/components/ArticleDetailScreen.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Sample articles data
const articles = [
  { id: '1', title: 'The Evolution of Constitutional Law in India', content: 'Detailed content about the evolution of constitutional law in India, discussing historical changes, major amendments, and significant impacts.' },
  { id: '2', title: 'Landmark Supreme Court Cases and Their Impact', content: 'In-depth analysis of landmark Supreme Court cases, including their context, rulings, and effects on Indian law and society.' },
  { id: '3', title: 'The Role of Youth in Shaping Constitutional Futures', content: 'Exploration of how young people can influence constitutional values and contribute to future legal and societal reforms.' },
  { id: '4', title: 'Understanding the Amendments to the Indian Constitution', content: 'Comprehensive overview of various amendments to the Indian Constitution, explaining their purpose, implications, and historical significance.' },
  // Add more articles as needed
];

const ArticleDetailScreen = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const article = articles.find((article) => article.id === id); // Find the article based on ID

  if (!article) {
    return <Typography variant="h5" component="p">Article not found</Typography>;
  }

  return (
    <Container style={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh', boxSizing: 'border-box' }}>
      <Card style={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px' }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {article.content}
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/teens/articles">
            Back to Articles
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ArticleDetailScreen;
