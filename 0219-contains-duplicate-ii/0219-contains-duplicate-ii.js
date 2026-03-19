/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const length = nums.length
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < i+k+1 && j < length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};