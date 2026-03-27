/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const length = numbers.length;
    let left = 0, right = length - 1;

    if (length === 0) return [];

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return [];
};