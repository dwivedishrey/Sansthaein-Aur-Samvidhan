import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Styled components for better accessibility and readability
const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  maxWidth: '300px', // Set a maximum width
  margin: '0 auto', // Center the card horizontally
  height: 'auto',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  color: '#f48210',
  marginBottom: theme.spacing(1),
  fontSize: '1.2rem',
}));

const AccessibleButton = styled(Button)(({ theme }) => ({
  background: '#f48210',
  color: '#fff',
  fontSize: '1rem',
  padding: theme.spacing(1.5, 3),
  '&:hover': {
    background: '#f48210',
  },
}));

const ElderlySection = () => {
  return (
    <div style={{ padding: '20px 0', margin: '0', textAlign: 'center', background: 'linear-gradient(90deg, rgba(255,248,220,1) 25%, rgba(245,222,179,1) 52%, rgba(255,239,213,1) 76%, rgba(253,245,230,1) 87%, rgba(250,235,215,1) 100%)', minHeight: '100vh', boxSizing: 'border-box' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" style={{ color: '#f48210' }}>
        Explore the Constitution: Informative and Accessible Content for Everyone!
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom align="center" style={{ color: '#555' }}>
        Discover key constitutional information with ease and clarity.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <CardTitle variant="h5" component="h3">
                Informative Articles
              </CardTitle>
              <Typography variant="body1" paragraph>
                Read detailed articles explaining the Constitution of India in a clear and accessible way. Get comprehensive insights into the roles and functions of different government branches.
              </Typography>
              <AccessibleButton variant="contained" component={Link} to="/elderly/articles">
                Read Articles
              </AccessibleButton>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <CardTitle variant="h5" component="h3">
                Simple Video Explanations
              </CardTitle>
              <Typography variant="body1" paragraph>
                Watch easy-to-follow videos that break down complex constitutional concepts. Enjoy visual explanations that make learning straightforward and engaging.
              </Typography>
              <AccessibleButton variant="contained" component={Link} to="/elderly/videos">
                Watch Videos
              </AccessibleButton>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <CardTitle variant="h5" component="h3">
                Helpful Q&A Sessions
              </CardTitle>
              <Typography variant="body1" paragraph>
                Participate in Q&A sessions where you can ask questions and get answers about constitutional matters. Engage with experts and clarify your doubts in a supportive environment.
              </Typography>
              <AccessibleButton variant="contained" component={Link} to="/elderly/qa">
                Join Q&A Sessions
              </AccessibleButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      <Typography variant="h6" component="h2" gutterBottom align="center" style={{ color: '#333', marginTop: '40px' }}>
        Enhance Your Knowledge at Your Own Pace
      </Typography>
      <Typography variant="body1" paragraph align="center" style={{ color: '#666' }}>
        Access our resources designed for easy reading and understanding. Explore the Constitution of India through various formats that cater to your learning preferences and pace.
      </Typography>
    </div>
  );
};

export default ElderlySection;
