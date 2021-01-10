// write a function called lastElement which accepts a single array
// argurment.  The function should return the last element of the array
// without removing the element.  If array is empty return null

function lastElement(arr) {
  if (arr.length <= 0) return null;
  let last = arr.slice(arr.length - 1);
  return last[0];
}
