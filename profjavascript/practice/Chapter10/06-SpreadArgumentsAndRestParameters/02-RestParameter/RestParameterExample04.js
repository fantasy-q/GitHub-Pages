function getSum(...values) {
  console.log(arguments.length); // 3
  console.log(arguments); // [1, 2, 3]
  console.log(values); // [1, 2, 3]
}
console.log(getSum(1, 2, 3));