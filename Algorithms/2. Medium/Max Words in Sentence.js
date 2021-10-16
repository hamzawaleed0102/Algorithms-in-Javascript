// Given a string S return the maximum number of words in a sentence.
// The text can be divided into sentences by:
// 1. Splitting it at dots
// 2. Or Splitting it at question mark
// 3. Or Splitting it at exclaimation mark

// e.g given S="we test coders. give us a try?" function should return 4

const findMaxWordsInSentence = (s = '') => {
  let maxCount = 0;
  let prevIndex = 0;
  const separators = ['?', '.', '!'];
  for (let i = 0; i < s.length; i++) {
    if (separators.includes(s[i])) {
      const substr = s.substring(prevIndex, i);
      maxCount = Math.max(substr.trim().split(' ').length, maxCount);
      prevIndex = i + 1;
    }
  }

  return maxCount;
};

const s1 = findMaxWordsInSentence('we test coders. give us a try?');
console.log(s1); // 4

const s2 = findMaxWordsInSentence('Forget CVs..Save time . x x');
console.log(s2); // 2
