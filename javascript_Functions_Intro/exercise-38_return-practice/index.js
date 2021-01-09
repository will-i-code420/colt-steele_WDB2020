// write a function called multiply that accepts 2 number arguments
// and returns their product

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }
  return a * b;
}
