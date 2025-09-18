//problem : split a string in a blanced string 
//Link : https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/1773055552/
// time complexity : O(n)
//solution 
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;
    
    for (let ch of s) {
        if (ch === 'L') balance++;
        else balance--;
        
        if (balance === 0) {
            count+=1;
        }
    }
    
    return count;
};
