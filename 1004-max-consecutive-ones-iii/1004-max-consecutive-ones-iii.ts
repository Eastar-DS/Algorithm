function longestOnes(nums: number[], k: number): number {
    let flip = [];
    let result = 0;
    let temp = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            temp++;
        } else {
            if (flip.length < k) {
                flip.push(i);
                temp++;
            } else if (k === 0) {
                temp = 0
            } else {
                temp = i - flip[0];
                flip.shift();
                flip.push(i);
            }
        }
        result = Math.max(result, temp);
    };

    return result;

};