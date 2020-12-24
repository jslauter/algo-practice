/* CHALLENGE
Given a string of text, find and return the most recurring character.
e.g maxRecurringChar('aabacada') // will return 'a'
*/


let charMap = {};

for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
        charMap[char]++
    } else {
        charMap[char] = 1;
    }
}



module.exports = maxRecurringChar;
