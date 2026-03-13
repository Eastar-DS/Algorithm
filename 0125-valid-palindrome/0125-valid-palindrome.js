/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let asciis = [...s].map((char) => {
        let ascii = char.charCodeAt(0);
        return (ascii >= 65 && ascii <= 90) ? ascii + 32 : ascii;
    }).filter((ascii) => (ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57));

    const length = asciis.length;
    for (let i = 0; i < parseInt(asciis.length / 2); i++) {
        if (asciis[i] != asciis[length - i - 1]) {
            return false;
        }
    }
    return true;
};
