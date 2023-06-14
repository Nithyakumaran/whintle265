import './ColorFeedback.css';

// ColorFeedback component to display color feedback for each letter of the user's guess
const ColorFeedback = ({ guess, word }) => {
  // Initializing an empty array to store feedback for each letter
  const feedback = [];
  
  // Looping through each letter of the guess
  for (let i = 0; i < guess.length; i++) {
    // If the letter is correct, add a green circle to the feedback array
    if (guess[i].toUpperCase() === word[i].toUpperCase()) {
      feedback.push(<div key={i} className="color-feedback__letter color-feedback__letter--correct">{guess[i].toUpperCase()}</div>);
    }
    // If the letter is incorrect, add a red circle to the feedback array
    else if (word.toUpperCase().includes(guess[i].toUpperCase())) {
      feedback.push(<div key={i} className="color-feedback__letter color-feedback__letter--unattempted">{guess[i].toUpperCase()}</div>);
    }
    // If the letter is unattempted, add a gray circle to the feedback array
    else {
      feedback.push(<div key={i} className="color-feedback__letter color-feedback__letter--incorrect">{guess[i].toUpperCase()}</div>);
    }
  }

  // Return the feedback array
  return <div className="color-feedback">{feedback}</div>;
};

export default ColorFeedback;