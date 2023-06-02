function isPalindrome(word) {
  // Insert code here;
  const temp = word.split("").reverse().join("");
  // console.log(temp);

  if (temp === word) return true;
  return false;
}

// Do not edit this line;
module.exports = isPalindrome;
