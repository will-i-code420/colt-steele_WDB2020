// create a function called capitalize that accepts a string argument and
// returns a new string with the first letter capitalized but leaves
// the rest of the string unchanged

function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
}
