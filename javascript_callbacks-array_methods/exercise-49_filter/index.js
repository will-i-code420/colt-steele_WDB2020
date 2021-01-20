// write a function called validUserNames that accepts an array of validUserNames
// it should return a new array containing usernames less than 10 characters long

const validUserNames = names => {
  return names.filter(name => name.length < 10);
}
