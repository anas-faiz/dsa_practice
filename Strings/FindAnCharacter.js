//problem: Find Words containing character
//link: https://leetcode.com/problems/find-words-containing-character/submissions/1770881329/
//time complxity : O(n 2)
//solution:
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let n = words.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let s = words[i];
    let m = s.length
    for (let j = 0; j < m; j++) {
      if (s[j] == x) {
        arr.push(i);
        break;
      }
    }
  }
  return arr;
};