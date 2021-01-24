const __________________________________________________ = param => {
  const Length = 50;
  param = String(param ? ` ${param} ` : '');
  console.log('\n' + param.padStart((Length + param.length) / 2, '-').padEnd(Length, '-'));
}; __________________________________________________(1); {
  // Iterable object
  let arr = ['foo', 'bar'];

  // Iterator factory
  console.log(arr[Symbol.iterator]);  // f values() { [native code] }

  // Iterator
  let iter = arr[Symbol.iterator]();
  console.log(iter);  // ArrayIterator {}

  // Performing iteration
  console.log(iter.next());  // { done: false, value: 'foo' }
  console.log(iter.next());  // { done: false, value: 'bar' }
  console.log(iter.next());  // { done: true, value: undefined }
} __________________________________________________(2); {
  let arr = ['foo'];
  let iter = arr[Symbol.iterator]();
  console.log(iter.next());  // { done: false, value: 'foo' }
  console.log(iter.next());  // { done: true, value: undefined } 
  console.log(iter.next());  // { done: true, value: undefined }
  console.log(iter.next());  // { done: true, value: undefined }
} __________________________________________________(3); {
  let arr = ['foo', 'bar'];
  let iter1 = arr[Symbol.iterator]();
  let iter2 = arr[Symbol.iterator]();

  console.log(iter1.next());  // { done: false, value: 'foo' }
  console.log(iter2.next());  // { done: false, value: 'foo' } 
  console.log(iter2.next());  // { done: false, value: 'bar' }
  console.log(iter1.next());  // { done: false, value: 'bar' }

} __________________________________________________(4); {
  let arr = ['foo', 'baz'];
  let iter = arr[Symbol.iterator]();

  console.log(iter.next());  // { done: false, value: 'foo' }

  // Insert value in the middle of array
  arr.splice(1, 0, 'bar');

  console.log(iter.next());  // { done: false, value: 'bar' }
  console.log(iter.next());  // { done: false, value: 'baz' }
  console.log(iter.next());  // { done: true, value: undefined }
} __________________________________________________(5); {
  // This class implements the Iterable interface.
  // Invoking the default iterator factory will return
  // an iterator object that implements the Iterator interface.
  class Foo {
    [Symbol.iterator]() {
      return {
        next() {
          return { done: false, value: 'foo' };
        }
      }
    }
  }
  let f = new Foo();
  // Logs an object which implements the Iterator interface
  console.log(f[Symbol.iterator]()); // { next: f() {} }
  // The Array type implements the Iterable interface.
  // Invoking the default iterator of an Array type
  // will create an instance of ArrayIterator.
  let a = new Array();
  // Logs an instance of ArrayIterator
  console.log(a[Symbol.iterator]()); // Array Iterator {}
}

