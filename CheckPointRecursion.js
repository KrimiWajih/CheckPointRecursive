function palindrome(s) {
  const sorted2 = s.split("").reverse().join("");
  return s === sorted2;
}

///////////////////////////////////////////////////////

function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(2));

////////////////////////////////////
function puissance(n, m) {
  if (m == 0) {
    return 1;
  }
  if (m == 1) {
    return n;
  }
  return n * puissance(n, m - 1);
}
