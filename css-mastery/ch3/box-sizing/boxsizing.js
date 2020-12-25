/* boxsizing.js */

window.onload = () => {
  let box = document.getElementsByTagName("article");
  /* HTMLCollection 用 for of */
  for (const iterator of box) {
    logWidth(iterator);
  }
}

function logWidth(element) {
  console.log(element);
  console.log('clientWidth:', element.clientWidth);
  console.log('scrollWidth:', element.scrollWidth);
  console.log('offsetWidth:', element.offsetWidth);
}