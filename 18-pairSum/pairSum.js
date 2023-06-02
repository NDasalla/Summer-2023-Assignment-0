function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1) {
    throw new Error("Array length of `nums` is less than or equal to 1");
  }
  for (let i = 0; i < nums.length; i++) {
    // temp is used in for loop of j because it doesn't need to loop the entire length of
    // the array for each iteration of j
    let temp = nums.length;
    for (let j = i; j < temp - 1; j++) {
      if (nums[i] + nums[j] === target) return true;
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
