import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Styled components for enhanced visuals
const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  maxWidth: '300px', // Set a maximum width for cards
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

const InteractiveButton = styled(Button)(({ theme }) => ({
  background: '#f48210',
  color: '#fff',
  fontSize: '1rem',
  padding: theme.spacing(1.5, 3),
  '&:hover': {
    background: '#f48212',
  },
}));

const TeensSection = () => {
  return (
    <div style={{ padding: '20px 0', margin: '0', textAlign: 'center', background: 'linear-gradient(90deg, rgba(255,248,220,1) 25%, rgba(245,222,179,1) 52%, rgba(255,239,213,1) 76%, rgba(253,245,230,1) 87%, rgba(250,235,215,1) 100%)', minHeight: '100vh', boxSizing: 'border-box' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" style={{ color: '#f48210' }}>
        Discover the Constitution: Engage, Learn, and Empower!
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom align="center" style={{ color: '#555' }}>
        Dive into interactive content tailored for young adults.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <CardTitle variant="h5" component="h3">
                Interactive Webinars
              </CardTitle>
              <Typography variant="body1" paragraph>
                Join live webinars with experts discussing key constitutional topics. Participate in Q&A sessions and gain deeper insights into the workings of government.
              </Typography>
              <InteractiveButton variant="contained" component={Link} to="/teens/webinars">
                Join a Webinar
              </InteractiveButton>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <CardTitle variant="h5" component="h3">
                Thought-Provoking Articles
              </CardTitle>
              <Typography variant="body1" paragraph>
                Read in-depth articles on current constitutional issues, case studies, and historical perspectives. Enhance your understanding with well-researched content.
              </Typography>
              <InteractiveButton variant="contained" component={Link} to="/teens/articles">
                Read Articles
              </InteractiveButton>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <CardTitle variant="h5" component="h3">
                Engaging Quizzes and Challenges
              </CardTitle>
              <Typography variant="body1" paragraph>
                Test your knowledge with interactive quizzes and challenges. Compete with peers, earn rewards, and stay updated on your progress.
              </Typography>
              <InteractiveButton variant="contained" component={Link} to="/teens/quizzes">
                Take a Quiz
              </InteractiveButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      <Typography variant="h6" component="h2" gutterBottom align="center" style={{ color: '#333', marginTop: '40px' }}>
        Ready to Enhance Your Understanding?
      </Typography>
      <Typography variant="body1" paragraph align="center" style={{ color: '#666' }}>
        Engage with our content and explore the Constitution of India through dynamic and interactive methods. Click on the sections above to get started and make learning an enjoyable experience!
      </Typography>
    </div>
  );
};

export default TeensSection;
