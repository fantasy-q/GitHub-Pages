const common = require('../../../js/common');
const ____________________ = common.separation;

____________________('1 methods demonstrate'); {
  const o = {
    foo: 'bar',
    baz: 1,
    qux: {}
  };
  console.log(Object.keys(o));
  console.log(Object.values(o));
  console.log(Object.entries((o)));
} ____________________('2 shallow copy'); {
  const o = {
    qux: {}
  };
  console.log(Object.keys(o)[0] === Object.getOwnPropertyNames(o)[0]);
  console.log(Object.values(o)[0] === o.qux);
  console.log(Object.entries(o)[0][1] === o.qux);
} ____________________('3 Symbol-keyed properties are ignored'); {
  const sym = Symbol();
  const o = {
    [sym]: 'foo'
  };
  console.log(Object.values(o));
  console.log(Object.entries((o)));
}