window.onload = () => {
  // if (document.readyState == 'complete') {
  //   console.log(document);
  // }
  let myDiv = document.getElementById("myDiv");
  let computedStyle = document.defaultView.getComputedStyle(myDiv, null);
  console.log(computedStyle.backgroundColor); // "red"
  console.log(computedStyle.width); // "100px"
  console.log(computedStyle.height); // "200px"
  console.log(computedStyle.border); // "1px solid black" in some browsers
  
  let sheet = document.styleSheets[0];
  let rules = sheet.cssRules || sheet.rules; // get rules list
  let rule = rules[0]; // get first rule
  console.log(rule.selectorText); // "div.box"
  console.log(rule.style.cssText); // complete CSS code
  console.log(rule.style.backgroundColor); // "blue"
  console.log(rule.style.width); // "100px"
  console.log(rule.style.height); // "200px"
}