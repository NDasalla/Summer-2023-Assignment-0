function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  // .reduce() method takes in two parameters, a function and starting point
  // declare "temp" as starting point. Note: temp should equal 1 as this is multiplication
  let temp = 1;
  // a = accumulator OR previous item in array OR item returned from previous reduce call
  // b = current item
  return args.reduce((a, b) => a * b, temp);
  // can also replace "temp" with 1, instead of initializing temp in the beginning
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
