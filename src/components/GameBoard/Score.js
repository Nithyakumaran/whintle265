
import React from 'react';
import './Score.css';

const Score = ({ score }) => {
  const total = score!== undefined && score.length===5? score.reduce((a,b)=> a+b): 0
  return (
    <div className="score-container">
      <h2 className="score-text">Your Score:</h2>
      <span className="score-value">{total}</span>
      <h2>{total===5?'Congrats you win':''}</h2>
    </div>
  );
};

export default Score;