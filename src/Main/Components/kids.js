import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles({
  container: {
    padding: '20px 0',
    margin: '0',
    textAlign: 'center',
    background: 'linear-gradient(90deg, rgba(255,248,220,1) 25%, rgba(245,222,179,1) 52%, rgba(255,239,213,1) 76%, rgba(253,245,230,1) 87%, rgba(250,235,215,1) 100%)',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '0 auto', // Center the card horizontally
    maxWidth: '300px', // Set a maximum width
    height: 'auto', // Allow height to adjust based on content
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  },
  title: {
    color: '#f48210',
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#f48210',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#f48210',
    },
  },
  description: {
    color: '#555',
  },
});

const KidsSection = () => {
  const classes = useStyles();

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className={classes.container}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom className={classes.title}>
          Welcome to the Kids' Section!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Explore the Constitution of India through Fun and Games!
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Animated Videos
                </Typography>
                <Typography variant="body1" paragraph className={classes.description}>
                  Enjoy fun cartoons that explain how the government works and why it’s important. Learn about the Legislature, Executive, and Judiciary in a way that’s easy to understand.
                </Typography>
                <Button variant="contained" className={classes.button} component={Link} to="/kids/videos">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Interactive Games
                </Typography>
                <Typography variant="body1" paragraph className={classes.description}>
                  Play exciting games like Spin the Wheel and quizzes that teach you about the Constitution while you have fun. Earn points and badges as you complete challenges!
                </Typography>
                <Button variant="contained" className={classes.button} component={Link} to="/kids/games">
                  Play Games
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Simple Articles
                </Typography>
                <Typography variant="body1" paragraph className={classes.description}>
                  Read easy-to-understand articles that break down important concepts. Discover what each part of the government does and why it matters to you.
                </Typography>
                <Button variant="contained" className={classes.button} component={Link} to="/kids/articles">
                  Read Articles
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Why Learn About the Constitution?
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          Understanding the Constitution helps you know your rights and how decisions are made in our country. It’s like learning the rules of a game so you can play better!
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Get Started Now!
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          Click on the games or videos to begin your adventure. Have fun and earn rewards as you explore and learn!
        </Typography>
      </motion.div>
    </div>
  );
};

export default KidsSection;

