/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const asciis = [...s.toLowerCase()].map((char) => char.charCodeAt(0)).filter((ascii) => (ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57));

    const length = asciis.length;
    for (let i = 0; i < parseInt(asciis.length / 2); i++) {
        if (asciis[i] != asciis[length - i - 1]) {
            return false;
        }
    }
    return true;
};
