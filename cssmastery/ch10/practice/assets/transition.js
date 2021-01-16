/** transition.js
* for ch10/practice/trasition.html
*/

var duration = 5000; // ms
const TransitionTiming = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'];
window.onload = () => {
  const ul = document.getElementsByClassName('timing')[0];
  CreatePseudoElementStyle(duration);
  TransitionTiming.forEach((element) => {
    const box = document.createElement('div');
    const li = document.createElement('li');
    box.classList.add('box');
    box.classList.add(element);
    li.appendChild(box);
    ul.appendChild(li);
  })

  setTransitionByClassName('no-transition', duration, 'none');
  setTransitionByClassName('default', duration);
  setTransitionByClassName('cubic-bezier', duration,'cubic-bezier(.51, 1.5, .52, -0.47)');


}
function CreatePseudoElementStyle(duration) {
  const style = document.getElementById('box-animate');
  TransitionTiming.forEach((element) => {
    const cssText = `
        .${element}::before {
          content: '${element}';
        }
        .${element} {
          transition: all ${duration}ms ${element};
        }`;
    const textNode = document.createTextNode(cssText);
    style.appendChild(textNode);
  })
  style.normalize();
}

function setTransitionByClassName(element, duration = 0, timingFunc = '', property = 'all') {
  const style = document.getElementById('box-animate');
  const cssText = `
        .${element} {
          transition: ${property} ${duration}ms ${timingFunc};
        }`;
  const textNode = document.createTextNode(cssText);
  style.appendChild(textNode);
  style.normalize();
  return textNode;
}

function animateActive() {
  for (const iterator of object = document.getElementsByClassName('timing')) {
    for (const li of object = iterator.children) {
      const div = li.firstElementChild;
      if (div.classList.contains('active')) {
        div.classList.remove("active");
      } else {
        div.classList.add('active');
      }
    }
  }

}