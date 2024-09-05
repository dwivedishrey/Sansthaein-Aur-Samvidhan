// src/components/TeensArticlesPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Sample articles data
const articles = [
  { id: '1', title: 'The Evolution of Constitutional Law in India', summary: 'An in-depth exploration of how constitutional law has developed over time in India.' },
  { id: '2', title: 'Landmark Supreme Court Cases and Their Impact', summary: 'A look at significant Supreme Court cases and their influence on Indian society and governance.' },
  { id: '3', title: 'The Role of Youth in Shaping Constitutional Futures', summary: 'How young people can contribute to the evolution of constitutional values and principles.' },
  { id: '4', title: 'Understanding the Amendments to the Indian Constitution', summary: 'A detailed analysis of the various amendments made to the Indian Constitution and their implications.' },
  // Add more articles as needed
];

const TeensArticlesPage = () => {
  return (
    <Container style={{ padding: '20px', backgroundColor: '#fff4e6', minHeight: '100vh',minWidth: '100vw', boxSizing: 'border-box' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Thought-Provoking Articles
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom align="center">
        Read in-depth articles on current constitutional issues, case studies, and historical perspectives.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card style={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {article.summary}
                </Typography>
                <Button variant="contained" color="primary" component={Link} to={`/article/${article.id}`}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeensArticlesPage;
