function titleCaseEdit(title) {
  // Insert code here;
  const splitTitle = title.split(" ");

  /*
    arrow function to separate title into an array of separate words
    and capitalizes the first letter of each word. It, then, concatenates
    the capitalized letter with the rest of the string
  */
  return splitTitle
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
