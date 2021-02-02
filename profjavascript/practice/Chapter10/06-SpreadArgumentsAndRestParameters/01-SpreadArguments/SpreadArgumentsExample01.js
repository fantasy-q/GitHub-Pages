let values = [1, 2, 3, 4];

function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  return sum;
}
// 2
console.log(getSum.apply(null, values));  // 10 
console.log();
// 3
console.log(getSum(...values));  // 10
console.log();
// 4
console.log(getSum(-1, ...values));         // 9
console.log(getSum(...values, 5));          // 15
console.log(getSum(-1, ...values, 5));      // 14
console.log(getSum(...values, ...[5, 6, 7])); // 28
