/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const onlyLetters = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    
    if (onlyLetters === onlyLetters.split("").reverse().join("")) {
        return true;
    }
    return false;

};
