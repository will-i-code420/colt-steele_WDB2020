// create an app that prompts the user enter a max number
// make sure the user enters a number
// create a random number between 1 and the max number entered
// make the user guess the number while tracking the number of guess'


const num = Math.floor(Math.random() * 20) + 1;
let guess = prompt('Guess a number between 1 and 20');
let numOfGuess = 0;
while (guess !== num) {
  guess = prompt('Guess a number between 1 and 20');
  numOfGuess++;
}
console.log(`You took ${numOfGuess} guess'`);
