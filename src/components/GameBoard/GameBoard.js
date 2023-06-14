
import React, { useState, useEffect } from 'react';
import Score from './Score';
import Hint from './Hint';
import ColorFeedback from './ColorFeedback';
import { randomWordSelection } from '../../logic/RandomWordSelection';
import { calculateScore } from '../../logic/ScoringSystem';
import './GameBoard.css';

const GameBoard = () => {
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [guess, setGuess] = useState('');
  const [scores, setScores] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const { word, hint } = randomWordSelection();
    setWord(word);
    setHint(hint);
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();
    if (guess.length !== word.length) {
      alert('Please enter a guess with the correct length');
      return;
    }
    

    const newScores = calculateScore(word, guess);
    setScores([...scores, newScores]);
    setFeedback([...feedback, ColorFeedback({guess, word})]);
    if(newScores.reduce((a,b)=> a+b) ===5 || feedback.length === 6){
      setGameOver(true);
    }
    setGuess('');
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  return (
    <div className="game-board">
      <Score score={scores[scores.length - 1]} />
      <Hint hint={hint} />
      <div className="game-board__grid">
        {feedback.map((fb, i) => (
          <div key={i} className="game-board__grid-item">
              {fb}
          </div>
        ))}
      </div>
      <form onSubmit={handleGuess} className="game-board__input">
        <input
          type="text"
          value={guess}
          onChange={handleInputChange}
          className="game-board__input-field"
          disabled={(gameOver)? "disabled" : ""}
        />
        <button type="submit" className="game-board__input-button" disabled={(gameOver)? "disabled" : ""}>
          Guess
        </button>
        <br/>
        
      </form>
      <h3>{(gameOver)? 'Thanks for playing! Game Over':''}</h3>
    </div>
    
  );
};

export default GameBoard;