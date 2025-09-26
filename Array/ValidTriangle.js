//problem : find if the elements of an array can form a valid triangle or not
//link: https://leetcode.com/problems/valid-triangle-number/submissions/1783463507/?envType=daily-question&envId=2025-09-26
//time complexity : O(n * n)
//solution :
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let count = 0;

    for (let k = n - 1; k >= 2; k--) {
        let i = 0, j = k - 1;
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += (j - i); // all pairs between i..j-1 are valid
                j--;
            } else {
                i++;
            }
        }
    }

    return count;
};
