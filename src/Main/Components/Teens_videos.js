import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles({
  container: {
    padding: '20px',
    backgroundColor: '#eef2f5',
    minHeight: '100vh',
    margin: 0,
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#00a1f1',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#444',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: 'auto',
    backgroundColor: '#00a1f1',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0087c7',
    },
  },
  cardTitle: {
    marginBottom: '10px',
  },
  cardDescription: {
    marginBottom: '20px',
  },
});

const TeenVideoSection = () => {
  const classes = useStyles();

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Container className={classes.container}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={classes.header}
      >
        <Typography variant="h3" component="h1" className={classes.title}>
          Videos for Teens
        </Typography>
        <Typography variant="h6" component="h2" className={classes.subtitle}>
          Engaging and interactive videos to help teens understand the Constitution better.
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {/* Teen Video Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3" className={classes.cardTitle} gutterBottom>
                  Constitution Basics for Teens
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  A fun and interactive introduction to the Constitution of India, specially designed for teenagers.
                </Typography>
                <Button variant="contained" className={classes.button} component="a" href="#" target="_blank">
                  Watch Video
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
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3" className={classes.cardTitle} gutterBottom>
                  Teens & Fundamental Rights
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  Understand your fundamental rights as a teen citizen and how they apply to your everyday life.
                </Typography>
                <Button variant="contained" className={classes.button} component="a" href="#" target="_blank">
                  Watch Video
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
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3" className={classes.cardTitle} gutterBottom>
                  Governance and You
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  Learn how the government works, how laws are made, and what role you can play as a responsible teen.
                </Typography>
                <Button variant="contained" className={classes.button} component="a" href="#" target="_blank">
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeenVideoSection;
