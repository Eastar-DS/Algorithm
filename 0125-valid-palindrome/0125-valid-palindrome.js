/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const onlyLetters = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    for (let i = 0; i < parseInt(onlyLetters.length / 2); i++) {
        if (onlyLetters[i] != onlyLetters[onlyLetters.length - i - 1]) {
            return false;
        }
    }
    return true;
};
