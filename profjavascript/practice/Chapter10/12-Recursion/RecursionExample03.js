function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}

let anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));
