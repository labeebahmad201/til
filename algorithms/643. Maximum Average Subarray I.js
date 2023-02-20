/*****
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

***/

var max = function(x, y){
    if(x == undefined){
        return y;
    }else if(y == undefined){
        return x;
    }
    return x > y ? x : y;
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0, start = 0, maxAvg = undefined;
    for(let i = 0; i < k; i++){
        sum += nums[i];
        end = i;
    }

    let  avg = sum / k;
    maxAvg = max(avg, maxAvg);

    while(end < nums.length - 1){
        sum -= nums[start];
        sum += nums[end+1];
        start++;
        end++;
        avg = sum / k;
        maxAvg = max(avg, maxAvg);
    }

    if(nums.length === 1){
        return nums[0];   
    }

    return maxAvg;
};
