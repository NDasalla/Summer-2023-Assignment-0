function fizzBuzz(start, end) {
  // Insert code here;
  let ret = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ret.push("FizzBuzz");
      continue;
    } else if (i % 3 === 0) {
      ret.push("Fizz");
      continue;
    } else if (i % 5 === 0) {
      ret.push("Buzz");
      continue;
    }
    ret.push(i);
  }

  return ret;
}

// Do not edit this line;
module.exports = fizzBuzz;
