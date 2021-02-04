relativeElement($$('.compare-ctx'), 'test');
relativeElement($$('.global-obj'), 'test2');


function relativeElement(object, className) {
  for (const el of object) {
    el.onmouseover = () => {
      toggleClass(object, className)
    }
    el.onmouseout = () => {
      toggleClass(object, className)
    }
  }
}

function toggleClass(object, className) {
  for (const e of object) {
    e.classList.toggle(className)
  }
}

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

// const compareCtx = {
//   self: $('.table.compare-ctx'),
//   1: '',
//   0: '',
// }

// const globalObj = {
//   self: $('.global-obj'),
//   compare: $('td.compare-ctx'),
//   result: '',
// }

// const compareObj = {
//   self: $('.compare-obj'),
//   arguments: '',
//   value1: '',
//   value2: '',
// }



// Event Listener
// for (const el of $$('.compare-ctx')) {
//   const className = 'test';
//   el.onmouseover = () => {
//     compareCtx.self.classList.toggle('test');
//     globalObj.compare.classList.toggle('test');
//     // globalObj.compare.style.backgroundColor = '#b6d67a';
//   }
//   el.onmouseout = () => {
//     compareCtx.self.classList.toggle('test');
//     globalObj.compare.classList.toggle('test');
//     // globalObj.compare.style.backgroundColor = '';

//   }
// }
