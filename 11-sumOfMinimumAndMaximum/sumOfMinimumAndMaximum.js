function sumOfMinimumAndMaximum(nums) {
  //Insert code here;
  let min = nums[0];
  let max = nums[0];
  // let min = max = sum = 0; does it work??

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
      // console.log("min = " + min);
    } else if (nums[i] > min && nums[i] > max) {
      max = nums[i];
      // console.log("max = " + max);
    }
  }
  // console.log("min = " + min);
  // console.log("max = " + max);
  //sum = min + max;
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
