const a = ["foo", "bar", "baz", "qux"];

const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());

alert(aKeys); // [0, 1, 2, 3]
alert(aValues); // ["foo", "bar", "baz", "qux"]
alert(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

for (const [idx, element] of a.entries()) {
  alert(idx);
  alert(element);
}

function alert(args) {
  console.log(args);
};
