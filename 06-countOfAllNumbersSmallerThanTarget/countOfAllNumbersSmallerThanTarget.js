function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;

  //return an array that is return from nums.filter().
  //In the .filter() function, return/filter out numbers
  //that are less than the target value.
  //Return the count through .length of the new array/shallow copy
  return nums.filter((n) => {
    return n < target;
  }).length;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
