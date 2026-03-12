/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let overNum = 1;
    for (i = digits.length - 1; i >= 0; i--) {
        if (overNum == 1) {
            if (digits[i] == 9) {
                digits[i] = 0;
            } else {
                digits[i]++;
                overNum = 0;
            }
        }
    }
    if (overNum == 1) {
        return [1, ...digits];
    } else {
        return digits;
    }
};