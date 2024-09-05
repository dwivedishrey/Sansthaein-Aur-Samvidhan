// src/components/InformativeArticlesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

// Sample articles data
const articles = [
  { id: '1', title: 'Understanding the Indian Constitution', description: 'A comprehensive overview of the Indian Constitution, including its origins, structure, and key features.' },
  { id: '2', title: 'Roles of the Three Branches of Government', description: 'An accessible explanation of the executive, legislative, and judicial branches of the Indian government.' },
  { id: '3', title: 'How Amendments Shape the Constitution', description: 'Detailed insight into how constitutional amendments are made and their impact on governance.' },
  { id: '4', title: 'The Preamble and Its Significance', description: 'An explanation of the Preamble to the Indian Constitution and its importance in setting the values and objectives of the Constitution.' },
  // Add more articles here
];

const InformativeArticlesPage = () => {
  return (
    <Container style={{ padding: '20px', backgroundColor: '#fff4e6', minHeight: '100vh',minWidth:'100vw', boxSizing: 'border-box' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Informative Articles
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom align="center">
        Read detailed articles explaining the Constitution of India in a clear and accessible way.
        Get comprehensive insights into the roles and functions of different government branches.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card style={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {article.description}
                </Typography>
                <Button style={{backgroundColor:'#f48210'}} variant="contained" component={Link} to={`/article/${article.id}`}>
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

export default InformativeArticlesPage;
