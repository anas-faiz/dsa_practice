// problem : stones and jewels
//link : https://leetcode.com/problems/jewels-and-stones/submissions/1770895691/
//time complecity: O(N 2)
//solution:
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let n = jewels.length - 1;
    let count = 0;
    for(let i = 0 ; i<=n; i++){
        let s = stones.length;
        for(let j = 0;j<s;j++){
            if(jewels[i] == stones[j])
            count ++;
        }
        }
    return count;
    };
