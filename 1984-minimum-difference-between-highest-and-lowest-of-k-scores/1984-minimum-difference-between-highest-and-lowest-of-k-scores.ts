function minimumDifference(nums: number[], k: number): number {
    if(k === 1){
        return 0;
    }

    const sortedNums = nums.toSorted((a,b) => a-b);
    let result = 10 * 10 * 10 * 10 * 10;
    for (let i = 0; i < nums.length - k +1; i++) {
        result = Math.min(result, sortedNums[i+k-1] - sortedNums[i]);
    };
    return result;
};