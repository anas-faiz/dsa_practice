
// My SOlution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

        const length = nums.length;
        if(length == 0) return ;

        for(let i = 0; i<length;i++){
            for(let j= 0; j<length;j++){
                if(nums[i]+nums[j] == target){
                        return [i,j]
                }
                
            }
        }
};

//Optimal solution

var twoSum = function(nums, target) {
    const map = {}; // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
};