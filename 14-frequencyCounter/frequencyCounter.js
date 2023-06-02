function frequencyCounter(word) {
  // Insert code here;
  let ret = {};

  for (let i = 0; i < word.length; i++) {
    if (ret[word[i]]) ret[word[i]]++;
    else ret[word[i]] = 1;
  }

  return ret;
}

// Do not edit this line;
module.exports = frequencyCounter;
