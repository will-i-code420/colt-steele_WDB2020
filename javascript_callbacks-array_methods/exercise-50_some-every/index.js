// define a function called allEvens that accepts a single array of numbers
// if the array is all even return true otherwise false

const allEvens = numbers => {
  return numbers.every(num => num % 2 === 0);
}
