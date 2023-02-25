function numberInterval(start, end) {
  let timerNam = setInterval(() => {
    console.log(start++);
    if (start > end) clearInterval(timerNam);
  }, 1000);
}
let start = +prompt("введите начальное число");
let end = +prompt("введите конечное число");
numberInterval(start, end);
