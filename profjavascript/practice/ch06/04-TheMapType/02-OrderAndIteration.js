const alert = (...params) => params.forEach((el) => (console.log(el)));
console.writeLine = param => console.log(param == undefined ? '' : param + '\n');

const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
]);

alert(m.entries === m[Symbol.iterator]);  // true

for (let pair of m.entries()) {
  alert(pair);
}

for (let pair of m[Symbol.iterator]()) {
  alert(pair);
}
console.writeLine();
alert(m)
alert([m])
alert(...m)
alert([...m]); // [[key1,val1],[key2,val2],[key3,val3]]
console.writeLine();
m.forEach((val, key) => alert(`${key} -> ${val}`));
console.writeLine();
for (let key of m.keys()) {
  alert(key);
}

for (let key of m.values()) {
  alert(key);
}