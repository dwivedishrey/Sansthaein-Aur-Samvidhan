import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles({
  container: {
    padding: '20px',
    backgroundColor: '#fff4e6',
    minHeight: '100vh',
    margin: 0, // Ensure no extra margin is added
    minWidth:'100vw'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#f48210',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    height: '300px', // Ensure card expands to fit container
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
    marginTop: '200px',
    backgroundColor: '#f48210',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e68a00',
    },
  },
  cardTitle: {
    marginBottom: '10px',
  },
  cardDescription: {
    marginBottom: '20px',
  },
});

const ElderlyVideoSection = () => {
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
          Elderly Focused Videos
        </Typography>
        <Typography variant="h6" component="h2" className={classes.subtitle}>
          Simplified videos explaining constitutional concepts for older audiences.
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {/* Elderly Video Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3" className={classes.cardTitle} gutterBottom>
                  Constitution Overview for Seniors
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  A simplified overview of the Constitution of India for elderly audiences, highlighting key aspects in easy-to-understand language.
                </Typography>
                <Button variant="contained" style={{backgroundColor:'#f48210'}} className={classes.button} component="a" href="#" target="_blank">
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
                  Legislative System for Seniors
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  Learn about the legislative system in a format designed specifically for the elderly, breaking down complicated processes in simpler terms.
                </Typography>
                <Button variant="contained" style={{backgroundColor:'#f48210'}} className={classes.button} component="a" href="#" target="_blank">
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
                  Judicial Review for Elderly
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  An easy guide to judicial reviews and the role of the Judiciary in protecting constitutional rights, made for elderly citizens.
                </Typography>
                <Button variant="contained" style={{backgroundColor:'#f48210'}} className={classes.button} component="a" href="#" target="_blank">
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

export default ElderlyVideoSection;
