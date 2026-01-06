//find the sum of all elements in the array

const arr = [5, 3, 2, 0, 1];

function findSum(n) {
  if (n === 0) return arr[0];
  return arr[n] + findSum(n - 1);
}

const res = findSum(arr.length - 1);
console.log(res);

