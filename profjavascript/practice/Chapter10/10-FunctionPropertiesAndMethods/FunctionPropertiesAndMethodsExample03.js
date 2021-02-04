function sum(num1, num2) {
  return num1 + num2;
}
                   
function callSum(num1, num2) {
  return sum.call(this, num1, num2);
}
                   
console.log(callSum(10, 10));  // 20

function callSum2(num1, num2) {
  return sum.call(this, ...arguments);
}
console.log(callSum2(20, 10));