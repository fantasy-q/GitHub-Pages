// 1
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach(e => {
  const res = factorial(e);
  const str = e + ': ' + res
  console.log(str);
})

// 2
let anotherFactorial = factorial;
// factorial = null;
console.log(anotherFactorial(4));  // error!
