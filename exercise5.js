function exponentiation(x, n) {
  let res = x;
  for (let i = 1; i < n; i++) {
    res *= x;
  }
  return res;
}
let x = +prompt("введите число");
let n = +prompt("введите степень");
if (n < 1) {
  alert("введите степень больше или равную 1");
} else {
  console.log(exponentiation(x, n));
}
