// problem : Missing integer in an array
// https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1?page=1&category=Arrays&sortBy=submissions
//time complexity: O(n)
//solution
class Solution {
    missingNum(arr) {
        let n = arr.length + 1;
        let total = (n * (n + 1)) / 2;

        let sum1 = 0;
        for (let i = 0; i < arr.length; i++) {
            sum1 += arr[i];
        }

        return total - sum1;
    }
}

