import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles({
  container: {
    padding: '20px',
    background: 'linear-gradient(90deg, rgba(255,248,220,1) 25%, rgba(245,222,179,1) 52%, rgba(255,239,213,1) 76%, rgba(253,245,230,1) 87%, rgba(250,235,215,1) 100%)',
    minHeight: '100vh',
    minWidth: '100vw',
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
    height: '300px', // Set a fixed height to ensure uniformity
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight:'10px',
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
    height: '100%', // Ensure content fits inside the card
  },
  button: {
    marginTop: 'auto', // Push button to the bottom of the card
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

const VideosPage = () => {
  const classes = useStyles();

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={classes.header}
      >
        <Typography variant="h3" component="h1" className={classes.title}>
          Animated Videos
        </Typography>
        <Typography variant="h6" component="h2" className={classes.subtitle}>
          Fun cartoons that explain the Constitution and how the government works.
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {/* Video Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3" className={classes.cardTitle} gutterBottom>
                  What is the Constitution?
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  Discover the basics of the Constitution of India and why it's important. This animated video breaks down complex concepts into simple, easy-to-understand language.
                </Typography>
                <Button variant="contained" style={{backgroundColor:'#f48210'}} className={classes.button} component="a" href="https://www.youtube.com/watch?v=0UzKD8rZCc0" target="_blank">
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
                  How the Legislature Works
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  Learn about the role of the Legislature in shaping laws and policies. This video explains the process and importance of legislative actions.
                </Typography>
                <Button variant="contained"  style={{backgroundColor:'#f48210'}} className={classes.button} component="a" href="#" target="_blank">
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
                  Understanding the Judiciary
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  This video provides insights into the functioning of the Judiciary and its role in upholding the Constitution. Learn about the court system and judicial reviews.
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
                  The Executive Branch Explained
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  Explore the functions and responsibilities of the Executive Branch. This animated video illustrates how executive powers are exercised and their impact on governance.
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
                  Key Amendments to the Constitution
                </Typography>
                <Typography variant="body1" className={classes.cardDescription} paragraph>
                  Learn about the major amendments that have shaped the Constitution of India. This video covers historical changes and their significance.
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

export default VideosPage;
