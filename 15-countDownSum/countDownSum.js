class MySolution {
  countDownSum(num) {
    // Insert code here;
    // If "num" < 1, return 0 because there is nothing else to add
    if (num < 1) return 0;
    // If "num" == 1, return num because only the number "1" needs to be added
    if (num === 1) return num;

    // Else recurse function
    // Declare variable to hold sum for each recursion
    let temp = 0;
    temp = num + this.countDownSum(num - 1);
    return temp;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
