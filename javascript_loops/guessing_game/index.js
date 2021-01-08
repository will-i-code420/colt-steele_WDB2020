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
let guess = parseInt(prompt('Guess a number between 1 and 20'));
while (guess !== num || guess === NaN) {
  guess = prompt('Guess a number between 1 and 20');
  numOfGuess++;
}
console.log(`You took ${numOfGuess} guess'`);
