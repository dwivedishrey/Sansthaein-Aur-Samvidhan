import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff4e6',
    minHeight: '100vh',
    padding: 0, // Removed padding
    minWidth: '100vw',
    marginLeft:'20px',
    marginRight:'40px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#ff6f61',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#444',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    height: '300px',
    width:'300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  },
  button: {
    marginTop: 'auto',
    backgroundColor: '#ff6f61',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e65a4f',
    },
  },
  cardTitle: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  cardDescription: {
    marginBottom: '20px',
    color: '#666',
  },
});

const GamesPage = () => {
  const classes = useStyles();

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container className={classes.container} disableGutters>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={classes.header}
      >
        <Typography variant="h3" component="h1" className={classes.title}>
          Interactive Games
        </Typography>
        <Typography variant="h6" component="h2" className={classes.subtitle}>
          Play fun games to learn about the Constitution.
        </Typography>
      </motion.div>
      <Grid container spacing={2} justifyContent="center" style={{ margin: 0, width: '100%' }}>
        {/* Game Cards */}
        <Grid item xs={12} sm={6} md={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
  >
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3" className={classes.cardTitle}>
          Flashcard Game
        </Typography>
        <Typography variant="body1" className={classes.cardDescription}>
          Test your knowledge about the Constitution with our interactive flashcard game.
          Flip cards to reveal questions and answers, and see how many points you can score!
        </Typography>
        <Button variant="contained" className={classes.button} component={Link} to="/games/flashcards">
          Play Game
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
        <Typography variant="h6" component="h3" className={classes.cardTitle}>
          Spin the Wheel
        </Typography>
        <Typography variant="body1" className={classes.cardDescription}>
          Spin the wheel and answer questions to earn points and learn about the Constitution in a fun way!
        </Typography>
        <Button variant="contained" className={classes.button} component={Link} to="/games/spin-wheel">
          Play Game
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
        <Typography variant="h6" component="h3" className={classes.cardTitle}>
          Constitutional Crossword
        </Typography>
        <Typography variant="body1" className={classes.cardDescription}>
          Test your knowledge of the Constitution by solving this crossword puzzle based on Constitutional articles and events.
        </Typography>
        <Button variant="contained" className={classes.button} component={Link} to="/games/crossword">
          Play Crossword
        </Button>
      </CardContent>
    </Card>
  </motion.div>
</Grid>

      </Grid>
    </Container>
  );
};

export default GamesPage;
