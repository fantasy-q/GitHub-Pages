window.color = 'red';
{
  let o = {
    color: 'blue'
  };

  function sayColor() {
    console.log(this.color);
  }

  sayColor();             // red

  sayColor.call(this);    // red
  sayColor.call(window);  // red
  sayColor.call(o);       // blue
}
console.log('');

// 5
{
  var o = {
    color: 'blue'
  };

  function sayColor() {
    console.log(this.color);
  }
  let objectSayColor = sayColor.bind(o);
  objectSayColor();  // blue
}