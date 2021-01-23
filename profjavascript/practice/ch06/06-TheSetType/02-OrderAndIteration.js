const alert = console.log.bind(console);

const s = new Set(["val1", "val2", "val3"]);

alert(s.values === s[Symbol.iterator]);  // true
alert(s.keys === s[Symbol.iterator]);    // true
alert(s.keys === s.values);    // true

for (let value of s.values()) {
  alert(value);
}

for (let value of s[Symbol.iterator]()) {
  alert(value);
}
console.log();

alert(s);
alert([...s]); // [val1,val2,val3]
console.log();

for (let pair of s.entries()) {
  alert(pair);
}
console.log();

s.forEach((val, dupVal) => alert(`${val} -> ${dupVal}`));
console.log();

const s1 = new Set(["val1"]);
// String primitive as value is unaltered
for (let value of s1.values()) {
  value = "newVal";
  alert(value); // newVal
  alert(s.has("val1")); // true
}
console.log();

const valObj = { id: 1 };
const s2 = new Set([valObj]);
alert(s2);
// Value object property is altered, but the object still exists
// inside the set
for (let value of s2.values()) {
  value.id = "newVal";
  alert(value); // {id: "newVal"}
  alert(s2.has(valObj)); // true
}
alert(valObj); // {id: "newKey"}