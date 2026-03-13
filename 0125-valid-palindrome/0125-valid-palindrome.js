/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const onlyLetters = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    const length = onlyLetters.length;
    for (let i = 0; i < parseInt(length / 2); i++) {
        if (onlyLetters[i] != onlyLetters[length - i - 1]) {
            return false;
        }
    }
    return true;
};
