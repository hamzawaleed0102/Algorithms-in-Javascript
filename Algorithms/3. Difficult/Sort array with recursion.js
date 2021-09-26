const array = [6, 4, 2, 100, 80, 2];

const sort = (arr, len) => {
  // base case
  if (len === 0) {
    return console.log("arr", arr);
  }
  //find largest number
  const largestIndex = getLargestIndex(arr, len);

  const lastNum = arr[len - 1]; // store last array index value in a variable
  arr[len - 1] = arr[largestIndex]; // swap largest value with the end value of array
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
