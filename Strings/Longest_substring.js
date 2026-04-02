var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        
        // If duplicate found → shrink window
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Add current character
        set.add(s[right]);

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

//optimal approach

var lengthOfLongestSubstring = function(s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0

  for(let right = 0 ; right < s.length; right ++){
    
    if(map.has(s[right])){
        left = Math.max(left,map.get(s[right]) + 1)
    }
    
    map.set(s[right],right)
    
    maxLength = Math.max(maxLength , right - left + 1)
  }
};