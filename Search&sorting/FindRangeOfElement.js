//problem : Find first and last position element in an sorted array
//link : http://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/1768561282/
// time complexity : O(logn)
//solution :
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    function findBound(isFirst) {
        let left = 0, right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1; // search left side
                } else {
                    left = mid + 1;  // search right side
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return bound;
    }

    let first = findBound(true);
    if (first === -1) return [-1, -1]; // target not found
    let last = findBound(false);
    return [first, last];
};