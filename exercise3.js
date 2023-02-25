function firstNum(x) {
  return function secondNum(y) {
    return x + y;
  };
}
console.log(firstNum(8)(2));
