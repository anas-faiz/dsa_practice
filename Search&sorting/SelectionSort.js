// problem : Selction sort
// link : https://www.geeksforgeeks.org/problems/selection-sort/1
//time complexity : o(n)
//solution 
class Solution {
    /**
     * @param {number[]} arr
     * @returns {number[]}
     */

    // Function to implement selection sort
    selectionSort(arr) {
        // your code here
        let n = arr.length;
        for (let i = 0; i <= n - 1; i++) {
            let min = i;
            for (let j = i; j <= n - 1; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;

            }
        }
    }
}
