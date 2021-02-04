function outerFunction() {
  return innerFunction();  // tail call
}
/**
 * Prior to the ES6 optimization, executing this example would have the following effect in memory:
 * 1. Execution reaches outerFunction body, first stack frame is pushed onto stack.
 * 2. Body of outerFunction executes, return statement is reached.To evaluate the return statement, 
 *    innerFunction must be evaluated.
 * 3. Execution reaches innerFunction body, second stack frame is pushed onto stack.
 * 4. Body of innerFunction executes, and its returned value is evaluated.
 * 5. Return value is passed back to outerFunction, which in turn can return that value.
 * 6. Stack frames are popped off the stack.
 * 
 * With the ES6 optimization, executing this example would have the following effect in memory:
 * 1. Execution reaches outerFunction body, first stack frame is pushed onto stack.
 * 2. Body of outerFunction executes, return statement is reached.To evaluate the return statement, 
 *    innerFunction must be evaluated.
 * 3. Engine recognizes that first stack frame can safely be popped off the stack since the return
 *    value of innerFunction is also the return value of outerFunction.
 * 4. outerFunction stack frame is popped off the stack.
 * 5. Execution reaches innerFunction body, stack frame is pushed onto stack.
 * 6. Body of innerFunction executes, and its returned value is evaluated.
 * 7. innerFunction stack frame is popped off the stack.
 */