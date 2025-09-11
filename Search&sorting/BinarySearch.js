//problem : Search X in sorted array
//link : https://leetcode.com/problems/binary-search/submissions/1767218309/
// time complexity : O(log n)

//soluiton
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let mid ; let low = 0 ; let high = nums.length -1;
    while(low <= high){
        mid =Math.floor(((low+high)/2));
        if(nums[mid] == target) return mid;
        else if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    } 
    return - 1
};