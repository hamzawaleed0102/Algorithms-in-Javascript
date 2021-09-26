/** 
  For two strings A and B, we define the similarity of the strings to be 
  the length of the longest prefix common to both strings.
  For example, the similarity of strings "abc" and "abd" is 2, 
  while the similarity of strings "aaa" and "aaab" is 3.
  Calculate the sum of similarities of a string S with each of it's suffixes.

  Sample Input:ababaa  
  Sample Output:11  

  Explanation:
  For the first case,
  the suffixes of the string are "ababaa", "babaa", "abaa", "baa", "aa" and "a". 
  The similarities of these strings with the string "ababaa" are 6,0,3,0,1, & 1 respectively.

  Thus, the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.
**/

const getSimilarityCount = (suffix, str) => {
  let count = 0;
  for (let index in str) {
    if (str[index] === suffix[index]) {
      count++;
    } else {
      break;
    }
  }
  return count;
};

const stringSimilarity = (str) => {
  let similaritySum = 0;
  for (let i = 0; i < str.length; i++) {
    const suffix = str.substr(i, str.length);
    let count = getSimilarityCount(suffix, str);
    similaritySum += count;
  }
  console.log(similaritySum);
  return similaritySum;
};

stringSimilarity('ababaa');
