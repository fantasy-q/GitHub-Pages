function getProduct(a, b, c = 1) {
  return a * b * c;
}
let getSum = (a, b, c = 0) => {
  return a + b + c;
}
console.log(getProduct(...[1, 2])); // 2
console.log(getProduct(...[1, 2, 3])); // 6
console.log(getProduct(...[1, 2, 3, 4])); // 6
console.log();

console.log(getSum(...[0, 1])); // 1
console.log(getSum(...[0, 1, 2])); // 3
console.log(getSum(...[0, 1, 2, 3])); // 3 
