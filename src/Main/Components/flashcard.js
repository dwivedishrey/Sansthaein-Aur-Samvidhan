import React, { useState } from 'react';
import './flashcard.css';

const initialFlashcards = [
  { id: 1, question: 'What is Article 21?', answer: 'Right to Life and Personal Liberty' },
  { id: 2, question: 'What is Article 19?', answer: 'Freedom of Speech' },
  { id: 4, question: 'What is Article 15?', answer: 'Prohibition of Discrimination' },
  { id: 5, question: 'What is Article 32?', answer: 'Right to Constitutional Remedies' },
  { id: 6, question: 'What is Article 51A?', answer: 'Fundamental Duties' },
  { id: 7, question: 'What is Article 368?', answer: 'Power to Amend the Constitution' },
  { id: 8, question: 'What is Article 44?', answer: 'Uniform Civil Code' },
  { id: 9, question: 'What is Article 17?', answer: 'Abolition of Untouchability' },
  { id: 10, question: 'What is Article 23?', answer: 'Prohibition of Human Trafficking and Forced Labor' },
  { id: 11, question: 'What is Article 24?', answer: 'Prohibition of Child Labor' },
  { id: 12, question: 'What is Article 25?', answer: 'Freedom of Religion' },
  { id: 13, question: 'What is Article 29?', answer: 'Protection of Cultural Rights' },
  { id: 14, question: 'What is Article 39A?', answer: 'Equal Justice and Free Legal Aid' },
  { id: 15, question: 'What is Article 48?', answer: 'Organization of Agriculture and Animal Husbandry' },
  { id: 16, question: 'What is Article 110?', answer: 'Definition of Money Bills' },
  // Add more flashcards here...
];

function FlashcardGame() {
  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState([]);

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMarkKnown = (id) => {
    if (!knownCards.includes(id)) {
      setKnownCards([...knownCards, id]);
    }
  };

  const handleMarkUnknown = (id) => {
    setKnownCards(knownCards.filter(cardId => cardId !== id));
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      (prevIndex - 1 + flashcards.length) % flashcards.length
    );
    setIsFlipped(false);
  };

  return (
    <div className="flashcard-game">
        <div className="flashcard-container">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
        onClick={handleFlipCard}
      >
        <div className="front">
          {flashcards[currentCardIndex].question}
        </div>
        <div className="back">
          {flashcards[currentCardIndex].answer}
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
        <button 
          onClick={() => handleMarkKnown(flashcards[currentCardIndex].id)}
        >
          Mark as Known
        </button>
        <button 
          onClick={() => handleMarkUnknown(flashcards[currentCardIndex].id)}
        >
          Mark as Unknown
        </button>
      </div>
      <div className="score">
        Known Cards: {knownCards.length}
      </div>
      </div>
    </div>
  );
}

export default FlashcardGame;
