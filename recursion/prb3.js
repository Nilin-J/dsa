// find the sum of first n numbers

// hint: use queue technique.
// sum = current val + sum of previous

function findSum(num) {
  if (num === 0) return 0;
  return num + findSum(num - 1);
}

const result = findSum(5);
console.log(result);

