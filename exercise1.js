let myArr = [1, 22, 0, "f", 39, 4, 51, 0, null, 25, 69, "no"];
function getQuantityZeroEvenOdd(myArr) {
  let zeroNumber = 0;
  let evenNumber = 0;
  let oddNumber = 0;
  let notNumber = 0;
  for (let i = 0; i < myArr.length; i++) {
    if (typeof myArr[i] === "number" && !isNaN(myArr[i])) {
      if (myArr[i] === 0) {
        zeroNumber++;
      } else {
        if (myArr[i] % 2 === 0) {
          evenNumber++;
        } else {
          oddNumber++;
        }
      }
    } else {
      notNumber++;
    }
  }
  console.log(
    "количество нулей-" + zeroNumber,
    "количество четных чисел-" + evenNumber,
    "количество нечетных чисел-" + oddNumber,
    "количество не числовых значений-" + notNumber
  );
}
getQuantityZeroEvenOdd(myArr);
