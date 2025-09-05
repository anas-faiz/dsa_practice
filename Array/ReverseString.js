// problem : Reverse String from an array
//https://leetcode.com/problems/reverse-string/submissions/1760715531/

var reverseString = function(s) {
    let left = 0;
    for (let right = s.length - 1; right > left; right--) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
    }        
};
