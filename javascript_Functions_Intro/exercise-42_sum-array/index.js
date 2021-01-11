// write a function called sumArray which accepts 1 argument, an array of numbers
// it should return the sum of the array

function sumArray(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
