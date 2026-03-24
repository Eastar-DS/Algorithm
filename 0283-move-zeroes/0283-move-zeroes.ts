/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let left = 0;
    let right = nums.length -1;
    while (left < right) {
        if (nums[right] != 0) {
            break;
        }
            right -= 1;
    }
    if (nums[right] === 0) {
        return;
    }

    while (left < right) {
        if (nums[left] !== 0) {
            left += 1;
            continue;
        }
        nums.splice(left,1);
        nums.push(0);
        right -= 1;
    }

};