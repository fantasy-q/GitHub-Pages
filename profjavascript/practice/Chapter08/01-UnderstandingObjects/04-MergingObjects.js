{
  let dest, src, result;

  /**
   * Simple copy
   */
  dest = {};
  src = { id: 'src' };

  result = Object.assign(dest, src);

  // Object.assign mutates the destination object
  // and also returns that object after exiting.
  console.log(dest === result);  // true
  console.log(dest !== src);     // true
  console.log(result);           // { id: src }
  console.log(dest);             // { id: src }


  /**
   * Multiple source objects
   */
  dest = {};

  result = Object.assign(dest, { a: 'foo' }, { b: 'bar' });

  console.log(result);  // { a: foo, b: bar }


  /**
   * Getters and setters
   */
  dest = {
    set a(val) {
      console.log(`Invoked dest setter with param ${val}`);
    }
  };
  src = {
    get a() {
      console.log('Invoked src getter');
      return 'foo';
    }
  };

  Object.assign(dest, src);
  // Invoked src getter
  // Invoked dest setter with param foo

  // Since the setter does not perform an assignment,
  // no value is actually transferred
  console.log(dest);  // { set a(val) {...} }
} console.log('--------------------'); {
  let dest, src, result;

  /**
   * Overwritten properties
   */
  dest = { id: 'dest' };

  result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });

  // Object.assign will overwrite duplicate properties.
  console.log(result);  // { id: src2, a: foo, b: bar }

  // This can be observed by using a setter on the destination object:
  dest = {
    set id(x) {
      console.log(x);
    }
  };

  Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });
  // first
  // second
  // third


  /**
   * Object references
   */

  dest = {};
  src = { a: {} };

  Object.assign(dest, src);

  // Shallow property copies means only object references copied.
  console.log(dest);              // { a :{} }
  console.log(dest.a === src.a);  // true 
}