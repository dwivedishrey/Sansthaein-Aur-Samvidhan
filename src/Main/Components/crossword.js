import React, { useState } from 'react';
import './crossword.css'; // Add a separate CSS file for styling

// Initial crossword puzzle data
const crosswordData = {
  grid: [
    ['R', 'I', 'G', 'H', 'T', '', '', '', 'E'],
    ['', '', 'Q', '', '', '', '', '', 'Q'],
    ['', '', 'U', '', 'J', 'U', 'D', 'I', 'C'],
    ['', '', 'A', '', '', '', '', '', 'A'],
    ['', '', 'L', '', '', '', '', '', 'L'],
    ['', '', 'I', '', '', '', '', '', 'I'],
    ['', '', 'T', 'O', 'E', 'Q', 'U', 'A', 'L'],
  ],
  clues: {
    across: [
      "1. Right to Equality (5 letters)",
      "2. Judicial system in India (9 letters)"
    ],
    down: [
      "1. Fundamental right provided by Article 14 (5 letters)"
    ],
  },
};

function Crossword() {
  // Initialize grid with empty strings where the user will input answers
  const [grid, setGrid] = useState(
    crosswordData.grid.map(row => row.map(cell => (cell ? '' : '')))
  );

  const [score, setScore] = useState(0);

  const handleInputChange = (rowIndex, colIndex, event) => {
    const value = event.target.value.toUpperCase();
    if (value.length > 1) return; // Ensure it's a single letter
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[rowIndex][colIndex] = value;
      return newGrid;
    });
  };

  const isLetterCorrect = (rowIndex, colIndex) => {
    return grid[rowIndex][colIndex] === crosswordData.grid[rowIndex][colIndex];
  };

  const checkAnswers = () => {
    let correctCount = 0;

    for (let rowIndex = 0; rowIndex < crosswordData.grid.length; rowIndex++) {
      for (let colIndex = 0; colIndex < crosswordData.grid[rowIndex].length; colIndex++) {
        if (isLetterCorrect(rowIndex, colIndex)) {
          correctCount++;
        }
      }
    }
    setScore(correctCount);
    alert(`You got ${correctCount} correct letters!`);
  };

  return (
    <div className="crossword-game">
      <div className="crossword-grid">
        {crosswordData.grid.map((row, rowIndex) => (
          <div key={rowIndex} className="crossword-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                maxLength="1"
                value={grid[rowIndex][colIndex] || (cell ? cell : '')}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                className={`crossword-cell ${isLetterCorrect(rowIndex, colIndex) ? 'correct' : ''}`}
                disabled={cell !== ''}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="crossword-clues">
        <div>
          <h3>Across</h3>
          {crosswordData.clues.across.map((clue, index) => (
            <p key={index}>{clue}</p>
          ))}
        </div>
        <div>
          <h3>Down</h3>
          {crosswordData.clues.down.map((clue, index) => (
            <p key={index}>{clue}</p>
          ))}
        </div>
      </div>

      <button onClick={checkAnswers}>Check Answers</button>
      <div>
        <h4>Score: {score} / 22</h4>
      </div>
    </div>
  );
}

export default Crossword;
