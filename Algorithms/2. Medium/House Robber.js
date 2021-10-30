// Problem statement: https://leetcode.com/problems/house-robber/

const rob = (houses) => {
  let dp = {};
  
  let robFrom = (index) => {
    if (dp[index] !== undefined) {
      return dp[index];
    }
    let robCurrent = 0;
    let skipCurrent = 0;
    if (index >= houses.length) {
      return 0;
    }
    robCurrent = houses[index] + robFrom(index + 2);
    skipCurrent = robFrom(index + 1);

    return (dp[index] = Math.max(robCurrent, skipCurrent));
  };

  let ans = robFrom(0);
  return ans;
};

let ans = rob([1, 2, 3, 1]);
console.log(`ans`, ans); // 4
