/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length -1;
    let pos = nums.length -1;
    const result = new Array(nums.length);

    while (pos >= 0) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[pos] = nums[right] * nums[right];
            right -= 1;
        } else {
            result[pos] = nums[left] * nums[left];
            left += 1;
        }
        pos -= 1;
    }

    return result;
};