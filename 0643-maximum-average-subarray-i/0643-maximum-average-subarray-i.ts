function findMaxAverage(nums: number[], k: number): number {
  let result = 0;
  for (let i = 0; i < k; i++) {
    result += nums[i];
  };

  let sum = result;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i-k];
    result = Math.max(result, sum);
  };

  return result / k;
};