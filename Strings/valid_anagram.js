// My solution 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length != t.length) return false

    let mapS = new Map();
    let mapT = new Map();

    for(char of  s){
        mapS.set(char,(mapS.get(char) || 0) + 1)
    }
    
    for(char of  t){
        mapT.set(char,(mapT.get(char) || 0) + 1)
    }

    if(mapS.size != mapT.size) return false

      for(let [key,val] of mapS){
        if(mapT.get(key) !== val) return false
      }  

      return true
  
};

// Better Solution 

