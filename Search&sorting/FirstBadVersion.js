// problem : First bad version
// link : https://leetcode.com/problems/first-bad-version/submissions/1767277485/
// time complexity : O(logN)
//solution:
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let midV ; let firstV = 1; let lastV = n;
        while (firstV <= lastV){
            mid = Math.floor((firstV + lastV)/2)
            if (isBadVersion(mid) == true) {
                 lastV = mid -1;
            }
            else  firstV = mid + 1;          

        }
        return firstV;
        
        
    };
}; 