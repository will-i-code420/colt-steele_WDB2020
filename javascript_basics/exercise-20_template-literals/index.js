// create a new variable called roll, that will be a string that
// displays each die # as well as the sum

// ex - die1 = 3
//      die2 = 5
//      roll = "You rolled a 3 and a 5. They sum to 8"

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:

const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
