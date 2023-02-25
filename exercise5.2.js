let x = +prompt("введите число");
let n = +prompt("введите степень");
if (n < 1) {
  alert("введите степень больше или равную 1");
} else {
  const exponentiation = (x, n) => {
    console.log(x ** n);
  };
  exponentiation(x, n);
}
