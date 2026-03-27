function findMaxAverage(nums: number[], k: number): number {
  let result = 0;
  for (let i = 0; i < k; i++) {
    result += nums[i] / k;
  };

  let sum = result;

  for (let i = k; i < nums.length; i++) {
    sum = sum + (nums[i] - nums[i-k]) / k ;
    if (sum > result) {
        result = sum;
    };
  };

  return result;
};