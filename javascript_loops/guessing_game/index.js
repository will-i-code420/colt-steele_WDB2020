// create an app that prompts user to guess a number between 1-20
// once the number is guessed console the number of guess' used

const num = Math.floor(Math.random() * 20) + 1;
let guess = prompt('Guess a number between 1 and 20');
let numOfGuess = 0;
while (guess !== num) {
  guess = prompt('Guess a number between 1 and 20');
  numOfGuess++;
}
console.log(`You took ${numOfGuess} guess'`);
