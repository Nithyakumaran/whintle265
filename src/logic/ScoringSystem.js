/**
 * Calculates the score for the user's guesses.
 * @param {string} correctWord - The correct word.
 * @param {string[]} guesses - The user's guesses.
 * @returns {number[]} An array of scores for each guess.
 */
function calculateScore(correctWord, guesses) {
  console.log(`correctWord: ${correctWord}`)
  console.log(`guesses: ${guesses}`)
  const scores = [];
  const correctLetters = new Set(correctWord.split(''));

  for (let guess of guesses) {
    const guessLetters = new Set(guess.split(''));
    let score = 0;

    for (let letter of guessLetters) {
      if (correctLetters.has(letter)) {
        score++;
      }
    }

    scores.push(score);
  }

  return scores;
}

export { calculateScore };
