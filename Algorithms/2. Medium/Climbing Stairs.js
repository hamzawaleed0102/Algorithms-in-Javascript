/*
    Problem: https://leetcode.com/problems/climbing-stairs
    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. 
    In how many distinct ways can you climb to the top?
*/
const climbStairs = (n) => {
  let cache = {};
  let climb = (sum = 0) => {
    if (cache[sum] !== undefined) {
      return cache[sum];
    }
    let climb1 = 0;
    let climb2 = 0;
    if (sum === n) {
      return 1;
    } else if (sum > n) {
      return 0;
    }

    climb1 = 0 + climb(sum + 1);
    climb2 = 0 + climb(sum + 2);

    return (cache[sum] = climb1 + climb2);
  };

  return climb(0);
};

let ans = climbStairs(4);
console.log(`ans`, ans); // 5
