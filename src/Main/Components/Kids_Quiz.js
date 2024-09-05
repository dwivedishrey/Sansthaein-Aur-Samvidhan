import React, { useState } from 'react';
import { Typography, Container, Grid, Card, CardContent, Button, Radio, RadioGroup, FormControlLabel, FormControl, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff4e6',
    minHeight: '100vh',
    padding: 0, // Removed padding
    minWidth: '100vw',
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
    padding: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#ff6f61',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e65a4f',
    },
  },
  question: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  formControl: {
    marginTop: '10px',
  },
  feedback: {
    marginTop: '20px',
    fontSize: '1.1rem',
    color: '#4caf50', // Green for correct answer
  },
  incorrect: {
    marginTop: '20px',
    fontSize: '1.1rem',
    color: '#f44336', // Red for incorrect answer
  },
  progressBar: {
    marginBottom: '20px',
  }
});

const QuizPage = () => {
  const classes = useStyles();

  // Quiz questions array
  const questions = [
    {
      text: "What is the length of the term for a member of the Lok Sabha?",
      options: [
        { value: '5', label: '5 years' },
        { value: '6', label: '6 years' },
        { value: '4', label: '4 years' },
        { value: '7', label: '7 years' },
      ],
      correctAnswer: '5',
    },
    {
      text: "Who is the head of the Indian Judiciary?",
      options: [
        { value: 'President', label: 'The President of India' },
        { value: 'Prime Minister', label: 'The Prime Minister' },
        { value: 'Chief Justice', label: 'The Chief Justice of India' },
        { value: 'Governor', label: 'The Governor' },
      ],
      correctAnswer: 'Chief Justice',
    },
    {
      text: "Which article of the Indian Constitution deals with Fundamental Rights?",
      options: [
        { value: '14', label: 'Article 14' },
        { value: '32', label: 'Article 32' },
        { value: '21', label: 'Article 21' },
        { value: '12', label: 'Article 12' },
      ],
      correctAnswer: '21',
    },
  ];

  // State to manage selected answer, feedback, and question index
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Handle answer submission
  const handleSubmit = () => {
    if (selectedAnswer === questions[questionIndex].correctAnswer) {
      setFeedback('Correct! Great job.');
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect. The correct answer is ${questions[questionIndex].correctAnswer}.`);
    }
  };

  // Handle next question
  const handleNext = () => {
    setSelectedAnswer('');
    setFeedback('');
    setQuestionIndex((prevIndex) => prevIndex + 1);
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
          Engaging Quizzes and Challenges
        </Typography>
        <Typography variant="h6" component="h2" className={classes.subtitle}>
          Test your knowledge with interactive quizzes and challenges. Compete with peers, earn rewards, and stay updated on your progress.
        </Typography>
      </motion.div>

      {/* Progress bar */}
      <LinearProgress
        variant="determinate"
        value={((questionIndex + 1) / questions.length) * 100}
        className={classes.progressBar}
      />

      <Grid container spacing={2} justifyContent="center" style={{ margin: 0, width: '100%' }}>
        <Grid item xs={12} sm={8} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={classes.card}>
              <CardContent>
                {/* Display current question */}
                <Typography variant="h6" component="h3" className={classes.question}>
                  {questions[questionIndex].text}
                </Typography>

                {/* Answer options */}
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={selectedAnswer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  >
                    {questions[questionIndex].options.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                {/* Submit Button */}
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                >
                  Submit Answer
                </Button>

                {/* Feedback Section */}
                {feedback && (
                  <Typography
                    variant="body1"
                    className={selectedAnswer === questions[questionIndex].correctAnswer ? classes.feedback : classes.incorrect}
                  >
                    {feedback}
                  </Typography>
                )}

                {/* Next Question Button */}
                {feedback && questionIndex < questions.length - 1 && (
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={handleNext}
                  >
                    Next Question
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Show Score after last question */}
      {questionIndex === questions.length - 1 && feedback && (
        <Typography variant="h6" component="p" align="center" style={{ marginTop: '20px' }}>
          Quiz Completed! Your score: {score}/{questions.length}
        </Typography>
      )}
    </Container>
  );
};

export default QuizPage;
