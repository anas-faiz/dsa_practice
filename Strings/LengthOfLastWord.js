//problem : find the legth of last word in a string 
//link : https://leetcode.com/problems/length-of-last-word/submissions/1770861649/
//time complexity : 
//solution:
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] == " ")
      n -= 1;
    else
      break;
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      n -= 1;
      count++;
    } else break;
  }
  return count;
};