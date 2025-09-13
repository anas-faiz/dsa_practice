// problem : Find the sum of most frequent vowel and consonant
// link : https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/submissions/1769817407/?envType=daily-question&envId=2025-09-13
//
//Solution
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = {};

    // Count frequency of each character
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    // Traverse frequency map
    for (let [ch, count] of Object.entries(freq)) {
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }

    return maxVowel + maxConsonant;
}
