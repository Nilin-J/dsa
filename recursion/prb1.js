// Print from n to 1 using recursion

function recursion(num) {
  if (num === 1) {
    return;
  }

  console.log(num);
  num = num - 1;
  recursion(num);
}

let num = 10;

recursion(num);
