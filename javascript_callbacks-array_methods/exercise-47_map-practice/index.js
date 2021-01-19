// define a function called cleanNames that accepts an array of strings
// which may have additional space characters at the beginning and end
// the function should use the map method to return a new array of trimmed names

function cleanNames(names) {
  let trimmed = names.map(function (name) {
    return name.trim();
  })
  return trimmed;
}
