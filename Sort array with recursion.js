const array = [6, 4, 2, 100, 80, 2];

const sort = (arr, len) => {
  //find largest number
  if (len === 0) {
    return console.log("arr", arr);
  }
  const largestIndex = getLargestIndex(arr, len);
  // replace arr last with largest
  const lastNum = arr[len - 1];
  arr[len - 1] = arr[largestIndex];
  arr[largestIndex] = lastNum;
  sort(arr, len - 1);
};

const getLargestIndex = (arr, len) => {
  let largestNum = arr[0];
  let largestIndex = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
      largestIndex = i;
    }
  }
  return largestIndex;
};

sort(array, array.length);
