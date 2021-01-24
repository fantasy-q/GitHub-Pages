/** VS Code
 * Syntax error: Cannot use import statement outside a module
 * https://stackoverflow.com/a/61315567
 * 
 * Node.js ES6 classes with require
 * https://stackoverflow.com/a/42684276
 * 
 * VS Code extensions run in a Node.js environment
 */
const XSet = require('./03-DefiningFormalSetOperations').XSet;
const XNumberSet = require('./03-DefiningFormalSetOperations').XNumberSet;
const alert = console.log.bind(console);

const U = new XSet([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
const A = new XSet([0, 2, 4, 6, 8]);
const B = new XSet([1, 3, 5, 7, 9]);
const C = new XSet([1, 2]);
const D = new XSet([3, 4]);
const E = new XSet([3, 4, 5]);
const F = new XSet([5, 3, 4]);
const S = new XSet([2, 3, 4, 5, 6, 7]);
const Φ = new XSet();

alert('A:', A);
alert('B:', B);
alert('C:', C);
alert('D:', D);
alert('E:', E);
alert('A ∪ B:', XSet.union(A, B));
alert('C ∪ D ∪ E:', C.union(D).union(E));
console.log();

alert('A:', A);
alert('S:', S);
alert('A ∩ S =', XSet.intersection(A, S));
console.log();

alert('U:', U);
alert('S:', S);
alert('U − S =', XSet.difference(U, S));
console.log();

alert('B:', B);
alert('S:', S);
alert('B Δ S =', XSet.symmetricDifference(B, S));
console.log();

alert('C:', C);
alert('D:', D);
alert('C × D =', XSet.cartesianProduct(C, D));
alert('C × C =', XSet.cartesianProduct(C));
console.log();

alert('C:', C);
alert('E:', E);
alert('P(C) = ', XSet.powerSet(C));
alert('|P(C)| =', XSet.cardinality(XSet.powerSet(C)));
console.log();

alert('E:', E);
alert('F:', F);
alert('S:', S);
alert('E = F is', XSet.equality(E, F));
alert('E = S is', XSet.equality(E, S));
console.log();

alert('C:', C);
alert('D:', D);
alert('E:', E);
alert('S:', S);
alert('E ⊇ D is', E.isSuperset(D));
alert('E ⊆ D is', E.isSubset(D));
alert('E ⊇ C is', E.isSuperset(C));
alert('S ⊇ E is', S.isSuperset(E));
alert('S ⊇ S is', S.isSuperset(S));
alert('S ⊃ S is', S.isProperSuperset(S));
alert('S ⊆ S is', S.isSubset(S));
alert('S ⊂ S is', S.isProperSubset(S));
console.log();

alert('U:', U);
alert('A:', A);
alert('C:', C);
alert('D:', D);
alert('E:', E);
alert('S:', S);
alert('∅:', Φ);
alert('∁ UA =', A.complement(U));
alert('∁ ED =', XSet.complement(E, D));
alert('∁ US =', S.complement(U));
alert('∁ C∅ =', Φ.complement(C));
alert('∁ ∅C =', XSet.complement(Φ, C));
// alert('∁ ∅C =', C.complement(Φ));
console.log();

const testSet = XSet.EmptySet.add(3).add(7);
const emptySet = XSet.EmptySet;
alert('∅:'.padStart(16, ' '), Φ);
alert('testSet:'.padStart(16, ' '), testSet);
alert('emptySet:'.padStart(16, ' '), emptySet);
alert('XSet.EmptySet:'.padStart(16, ' '), XSet.EmptySet);
alert('emptySet == XSet.EmptySet is', emptySet == XSet.EmptySet);
alert('emptySet = XSet.EmptySet is', XSet.equality(emptySet, XSet.EmptySet));
alert('emptySet = ∅ is', XSet.equality(emptySet, Φ));
console.log();

/**
 * const U = new XSet([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
 * const A = new XSet([0, 2, 4, 6, 8]);
 * const B = new XSet([1, 3, 5, 7, 9]);
 * const C = new XSet([1, 2]);
 * const D = new XSet([3, 4]);
 * const E = new XSet([3, 4, 5]);
 * const F = new XSet([5, 3, 4]);
 * const S = new XSet([2, 3, 4, 5, 6, 7]);
 * const Φ = new XSet();
 *
 * alert('U:', U);
 * alert('A:', A);
 * alert('B:', B);
 * alert('C:', C);
 * alert('D:', D);
 * alert('E:', E);
 * alert('F:', F);
 * alert('S:', S);
 * alert('∅:', Φ);
 * console.log('---------------------------------------------');
 */

const N_A = new XNumberSet([0, 2, 4, 6, 8]);
const N_B = new XNumberSet([1, 3, 5, 7, 9]);
const A_Union_B = new XNumberSet(N_A.union(N_B));
alert('A:', N_A);
alert('B:', N_B);
alert('A ∪ B:', A_Union_B);
alert(Object.getPrototypeOf(A));
alert(Object.getPrototypeOf(A));
alert(Object.getPrototypeOf(A_Union_B));

alert('A ∪ B:', A_Union_B);
alert('A ∪ B:', A_Union_B.sort());
alert('A ∪ E:', A.union(E));
alert('A ∪ B:', XNumberSet.sort(A.union(E)));