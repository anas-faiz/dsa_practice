//problem : check if a string is a valid palindrom or not
//link : https://leetcode.com/problems/valid-palindrome/submissions/1777317435/
//
//solution
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Convert to lowercase and remove non-alphanumeric characters
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
