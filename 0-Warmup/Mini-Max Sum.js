/* 
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
[1,3,5,7,9]

The minimum sum is 1,3,5,7 and the maximum sum is 3,5,7,9. 
The function prints: 16 24

Sample Input:
1 2 3 4 5

Sample Output:
10 14

*/

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const minSum = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
  const maxSum = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];
  console.log(minSum + ' ' + maxSum);
}
