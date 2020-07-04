const range = function (start, end, step) {
  let num = [];
  if (start > end || step <= 0 || start == undefined || end == undefined || step == undefined) {
    return num = [];
  }
  for ( let i = start ; i <= end ; i += step) {
    num.push(i);
  }
  return num;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));