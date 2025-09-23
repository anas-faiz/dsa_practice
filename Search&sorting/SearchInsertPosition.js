// problem : search insert position if element is not found in an sorted array 
// link : https://leetcode.com/problems/search-insert-position/submissions/
// time complxity : O(logN)
//solution :

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let mid; let low = 0; let high = nums.length - 1;
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return low;
};