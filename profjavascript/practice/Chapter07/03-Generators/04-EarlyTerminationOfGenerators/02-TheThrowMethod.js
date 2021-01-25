{
  function* generatorFn() {
    for (const x of [1, 2, 3]) {
      yield x;
    }
  }

  const g = generatorFn();

  console.log(g);    // generatorFn {<suspended>}
  try {
    g.throw('foo');
  } catch (e) {
    console.log(e);  // foo
  }
  console.log(g);    // generatorFn {<closed>} 

} console.log('--------------------'); {
  function* generatorFn() {
    for (const x of [1, 2, 3]) {
      try {
        yield x;
      } catch (e) { }
    }
  }

  const g = generatorFn();

  console.log(g.next());  // { done: false, value: 1}
  g.throw('foo');
  console.log(g.next());  // { done: false, value: 3} 
}