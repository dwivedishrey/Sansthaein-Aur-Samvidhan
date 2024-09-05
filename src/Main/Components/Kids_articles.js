import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArticlesPage = () => {
  return (
    <Container style={{ padding: '20px', backgroundColor: '#f4f6f8' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Simple Articles
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom align="center">
          Read easy-to-understand articles about the Constitution.
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {/* Example Article Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Article Title 1
              </Typography>
              <Typography variant="body1" paragraph>
                Brief summary of the article content.
              </Typography>
              <Button variant="contained" component={Link} to="/articles/read">
                Read Article
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more article cards as needed */}
      </Grid>
    </Container>
  );
};

export default ArticlesPage;
