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
//my optimal solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        const length = nums.length;
        if(length == 0) return ;
        let seen = new Map();
        for(let i = 0; i<length;i++){
            let req = target - nums[i];
            if(seen.has(req)){
                return [seen.get(req),i]
            }
            seen.set(nums[i],i)
            
        }
        return [];
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