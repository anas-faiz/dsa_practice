// problem : Remove Duplicates from an sorted array
// link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1755881029/
// 

const RemoveDuplicate = () => {
    var removeDuplicates = function(nums) {
    if(nums.length == 0)
    return 0;
    let k=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i] != nums[i-1]){
            nums[k]=nums[i];
        k++;
        }
        
    }
    return k;
    
};
};
