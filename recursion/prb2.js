// print from 1 to n with recursion

function recursion(num) {
  if (end < start) {
    return;
  }
  console.log(start);
  start = start + 1;
  recursion(start);
}

let start = 1;
let end = 10;

recursion(start, end);
