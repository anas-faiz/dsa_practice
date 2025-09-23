// Bubble sort
// link : https://www.geeksforgeeks.org/problems/bubble-sort/1
// time complxity : O(n*n) worst case /O(n) best case
//solution
/**
 * @param {number[]} arr
 */
class Solution {
    bubbleSort(arr) {
        // code here
        let n = arr.length;
        for (let i = n - 1; i >= 0; i--) {
            let didSwap = 0;
            for (let j = 0; j <= i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    didSwap = 1;

                }
            }
            if (didSwap == 0) {
                break;
            }
        }
    }
}