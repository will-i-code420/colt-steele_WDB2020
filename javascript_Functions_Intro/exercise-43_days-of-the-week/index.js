// write a function called returnDay.  it will take 1 parameter (num between 1-7)
// and returns the day of the week (1 being monday, 2 tuesday, etc..)
// if num < 1 or > 7 it should return null

function returnDay(num) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (num < 1 || num > 7) return null;
  return days[num - 1];
}
