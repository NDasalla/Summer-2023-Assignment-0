function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  // let ret = new Set(args.reduce((a, b) => a.concat([...b]), []));
  // return ret;

  // b = current set to be concatenated with a
  return new Set(args.reduce((a, b) => a.concat([...b]), []));
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
