function isIntegers(num) {
  if (num < 2 || num > 1000) {
    return " - не верно введены данные";
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return " - составное число";
      }
    }
    return " - простое число";
  }
}
let randomNum = Math.floor(Math.random() * 1500);
let res = isIntegers(randomNum);
console.log(randomNum + res);
