import words from '../data/words';

// Function to randomly select a word and hint from the words array
function randomWordSelection() {
  // Selecting a random index from the words array
  const randomIndex = Math.floor(Math.random() * words.length);

  // Extracting the word and hint from the selected index
  const { word, hint } = words[randomIndex];

  // Returning the word and hint as an object
  return { word, hint };
}

// Exporting the randomWordSelection function
export { randomWordSelection }; 

