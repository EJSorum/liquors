/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
};


so loop through each on

take index i and loop through every letter of every string
so a loop within a loop

let newStr = ''
for (let i = 0; i < strs[0].length; i++) {
    for (let h = 0; h < strs.length; h++) {
            if (strs[0[i]] === strs[h[i]])
                newStr.push(h)
    }
}
return newStr;
}

so the first loop is the character, the second loop is the string
right because it doesn't matter what the others say if the first string is off
so all we're doing is looping through the characters in the first string

then if a character matches all of them, push that into a new string