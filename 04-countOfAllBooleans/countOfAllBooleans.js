function countOfAllBooleans(arr) {
  // Insert code here;
  /*
  const items = arr.filter((n) => n === true || n === false);
  return items.length
  */

  //return a new array returned from the filter method:
  //the filter method returns an array with values equal to
  //the boolean values "true" or "false" --Make sure to use "===" and not "==".
  //then get the length to get the count
  return arr.filter((n) => n === true || n === false).length;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
