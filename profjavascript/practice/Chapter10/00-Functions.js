function sum(num1, num2) {
  return num1 + num2;
}

let sum = function (num1, num2) {
  return num1 + num2;
};

let sum = (num1, num2) => {
  return num1 + num2;
};

// not recommended
let sum = new Function("num1", "num2", "return num1 + num2");

