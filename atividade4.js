/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let max = 0;

    for (let i = 0; i < s.length; i++) {

        let set = new Set();

        for (let j = i; j < s.length; j++) {

            let char = s[j];

            if (set.has(char)) {
                break;
            }

            set.add(char);

            max = Math.max(max, set.size);
        }
    }

    return max;
    
};

console.log(lengthOfLongestSubstring("abcabcbb"));
