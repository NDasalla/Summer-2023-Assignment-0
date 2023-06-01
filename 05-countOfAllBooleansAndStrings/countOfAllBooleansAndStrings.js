function countOfAllBooleansAndStrings(arr) {
  // Insert code here;

  //return a new array returned from the filter method:
  //the filter method returns an array with values equal to
  //the boolean values "true" or "false" as well as values that are strings
  //--Make sure to use "===" and not "==".
  //then get the length to get the count
  return arr.filter((n) => {
    return n === true || n === false || typeof n === "string";
  }).length;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
