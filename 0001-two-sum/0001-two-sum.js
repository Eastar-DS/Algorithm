/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length - 1; i++) {
        const targetNumber = target - nums[i];
        const sliceNums = nums.slice(i+1);
        if(sliceNums.includes(targetNumber)) {
            return [i, sliceNums.indexOf(targetNumber) + i + 1];
        }
    }
};