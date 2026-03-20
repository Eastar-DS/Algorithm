/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const pat = pattern.split('');
    const words = s.split(' ');
    
    const indicesOfWord = {};
    for (let i = 0; i < words.length; i++) {
        if (indicesOfWord.hasOwnProperty(words[i])) {
            indicesOfWord[words[i]].push(i);
        } else {
            indicesOfWord[words[i]] = [i];
        }
    }

    
    const indicesOfPattern = {};
    for (let i = 0; i < pat.length; i++) {
        if (indicesOfPattern.hasOwnProperty(pat[i])) {
            indicesOfPattern[pat[i]].push(i);
        } else {
            indicesOfPattern[pat[i]] = [i];
        }
    }

    const result1 = Object.values(indicesOfWord).map((array) => array.join(',')).sort().join('/');
    const result2 = Object.values(indicesOfPattern).map((array) => array.join(',')).sort().join('/');

    if (result1 === result2) {
        return true;
    }

    return false;

};