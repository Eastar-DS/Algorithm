function sortedSquares(nums: number[]): number[] {
    return nums.map((num) => num * num).toSorted((a,b) => a-b);
};