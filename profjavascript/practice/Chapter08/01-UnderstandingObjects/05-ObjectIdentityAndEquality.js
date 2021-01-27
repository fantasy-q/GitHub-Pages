// These are cases where === behaves as expected:
console.log(true === 1);   // false
console.log({} === {});    // false
console.log("2" === 2);    // false

// These have different representations in the JS engine and yet are treated as equal
console.log(+0 === -0);    // true
console.log(+0 === 0);     // true
console.log(-0 === 0);     // true

// To determine NaN equivalence, the profoundly annoying isNaN() is required
console.log(NaN === NaN);  // false
console.log(isNaN(NaN));   // true
console.log('----------------------------------------');

console.log(Object.is(true, 1));   // false
console.log(Object.is({}, {}));    // false
console.log(Object.is("2", 2));    // false

// Correct 0, -0, +0 equivalence/nonequivalence:
console.log(Object.is(+0, -0));    // false
console.log(Object.is(+0, 0));     // true
console.log(Object.is(-0, 0));     // false

// Correct NaN equivalence:
console.log(Object.is(NaN, NaN));  // true
