try {
  throw new Error('foo');
} catch (e) {
  console.log('1', e);  // Error: foo
}
console.log();

try {
  Promise.reject(new Error('bar'));
} catch (e) {
  console.log('2', e);
}
// Uncaught (in promise) Error: bar
