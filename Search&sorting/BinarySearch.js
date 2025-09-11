//problem : Search X in sorted array
//link : https://takeuforward.org/plus/dsa/problems/search-x-in-sorted-array
// time complexity : 

//soluiton
class Solution {
    search(nums, target) {
       let low = 0 ; let high = nums.length - 1;let mid;
       while(low<=high){
        mid = Math.floor((low + high)/2);
        if(nums[mid] == target) return mid;
        else if (nums[mid] < target ) low = mid + 1;
        else high = mid - 1  ;
       }
       return -1
    }
}
