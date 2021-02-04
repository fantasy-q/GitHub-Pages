function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(0));  // 0 
console.log(fib(1));  // 1
console.log(fib(2));  // 1
console.log(fib(3));  // 2
console.log(fib(4));  // 3 
console.log(fib(5));  // 5 
console.log(fib(6));  // 8

// 40 左右开始每 +1 时间大约翻倍
// console.log(fib(44));
console.log(fib(1000));
