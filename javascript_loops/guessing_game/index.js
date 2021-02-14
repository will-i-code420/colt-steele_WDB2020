// create an app that prompts the user enter a max number
// make sure the user enters a number
// create a random number between 1 and the max number entered
// make the user guess the number while tracking number of guess'
// when user guess' correctly console the number of guess'


let max = parseInt(prompt('Input Maximum Number'));
while (!max) {
  max = parseInt(prompt('Input Maximum Number'));
}
const num = Math.floor(Math.random() * max) + 1;
let numOfGuess = 0;
let guess = parseInt(prompt(`Guess a number between 1 and ${max}`));
while (guess !== num) {
  numOfGuess++;
  if (guess > num) {
    guess = parseInt(prompt('TOO HIGH, GUESS AGAIN'));
  } else {
    guess = parseInt(prompt('TOO LOW, GUESS AGAIN'));
  }
}
console.log(`You took ${numOfGuess} guess'`);
