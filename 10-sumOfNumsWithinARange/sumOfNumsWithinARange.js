function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  return nums.filter((n) => {
    return n >= start && n <= end;
  }).length;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
