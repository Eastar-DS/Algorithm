function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let flip = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            right ++;
        } else {
            if (flip < k) {
                flip++;
                right ++;
            } else {
                while (nums[left] === 1) {
                    left ++;
                };
                left ++;
                right ++;
            };
        };
        result = Math.max(result, right - left)
    };
    
    return result;

};