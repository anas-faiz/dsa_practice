// problem : Indexes of Subarray Sum
//link : https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?page=1&category=Arrays&sortBy=submissions 
//time complexity : o(n*n) better solution needed
//solution
// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */

class Solution {
    subarraySum(arr, target) {
        // code here
        for(let i = 0 ; i < arr.length ; i++){
            let currentSum = 0
            for (let j = i ;j<arr.length ; j++){
                currentSum += arr[j];
                if(currentSum == target)
                return [i+1,j+1]
            }
            
        }
    
        return [-1]
    }
}